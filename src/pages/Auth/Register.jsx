import monImage from "../../assets/culture_afrique.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="flex bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        
        <div className="w-1/2 hidden md:block">
          <img
            src={monImage}
            alt="Agriculture"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="w-full md:w-1/2 p-10">

          <h1 className="text-3xl font-bold text-center mb-2 text-black">
            Bienvenue sur MarchéBio
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Créer votre compte ici
          </p>

          
          <div className="flex justify-center gap-4 mb-8">

            <button className="border border-green-500 px-6 py-3 rounded bg-green-100 text-green-700">
              Admin
            </button>

            <button className="border border-green-500 px-6 py-3 rounded text-green-700 font-medium bg-white">
              Clients
            </button>

            <button className="border border-green-500 px-6 py-3 rounded text-green-700 font-medium bg-white">
              Producteurs
            </button>

          </div>

         
          <div className="space-y-4">

            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Nom & Prénom
              </label>

              <input
                type="text"
                placeholder="Entrer votre nom & prénom"
                className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Email
              </label>

              <input
                type="email"
                placeholder="Entrer votre email"
                className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Password
              </label>

              <input
                type="password"
                placeholder="Votre mot de passe"
                className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white"
              />
            </div>

            <button
              className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700"
            >
              Enregistrement
            </button>

          </div>

          <p className="text-center text-sm mt-6 text-black">
            Avez-vous déjà un compte ?{" "}
            <Link to="/login" className="text-green-600 hover:underline"
            >
              Connexion
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;