import tomate from '@/assets/tomate.png'

const Card = () => {
    const prixProduit = "12 500F"
    const titreProduit = "Chaussure"
    const descriptionProduit = "Chaussure utilisé dans un cadre sportif"
    const imgSrc = "tomate"
    const imgeAlt = "Tomate"

    return (
        <div className="card bg-base-100 w-60 shadow-sm">
            <figure>
                <img 
                    className='bg-primary/70'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {titreProduit}
                    <div className="badge badge-secondary">{prixProduit}</div>
                </h2>
                <p>{descriptionProduit}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p>Ajouter</p>
                    </button>
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
        </div>
    )
}

export default Card