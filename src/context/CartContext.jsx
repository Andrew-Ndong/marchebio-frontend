// src/context/CartContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Charger le panier depuis localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Sauvegarder le panier dans localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Ajouter un produit au panier
    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.productId === product.id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevCart, {
                productId: product.id,
                name: product.name,
                price: product.price,
                photoData: product.photoData,
                quantity: quantity,
                maxQuantity: product.quantity
            }];
        });
    };

    // Retirer un produit du panier
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
    };

    // Mettre à jour la quantité
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.productId === productId ? { ...item, quantity } : item
            )
        );
    };

    // Vider le panier
    const clearCart = () => {
        setCart([]);
    };

    // Calculer le total
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Nombre d'articles
    const getItemCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};