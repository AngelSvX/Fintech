import React from "react";
import { useApi } from "../../context/ApiContext";

const FooterFintech: React.FC = () => {
  const [fileName, setFileName] = React.useState("No hay archivo seleccionado");
  const [error, setError] = React.useState<string | null>(null);

  const { postSubscribe, setEmail, email } = useApi();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setError("Por favor, ingresa un correo electrónico.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setError(null);
    postSubscribe();
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center py-12 bg-custom-gradient text-white">

      <div className="w-full h-72 md:w-5/12 bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 mb-6 md:mb-0 md:mr-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Sé parte del observatorio
        </h2>
        <p className="text-center text-sm md:text-base text-gray-700 mb-6">
          Aquí tienes la oportunidad de incluir la iniciativa de tu organización,
          ¡Escríbenos!
        </p>
        <div className="flex flex-col items-center">
          <label className="block w-full max-w-xs cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg text-center transition duration-300">
            Seleccionar archivo
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setFileName(file ? file.name : "No hay archivo seleccionado");
              }}
            />
          </label>
          <p className="mt-3 text-gray-600 text-sm italic">{fileName}</p>
        </div>
      </div>


      <div className="w-full h-72 md:w-5/12 bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">
          Únete a nuestra comunidad
        </h2>
        <p className="text-center text-sm md:text-base text-gray-700 mb-6">
          Suscríbete y entérate de las actualizaciones que Fintech tiene para ti.
        </p>
        <div className="flex flex-col items-center">
          <input
            type="email"
            className="w-full max-w-xs h-12 rounded-lg shadow-md pl-3 text-sm md:text-base text-gray-700 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 outline-none mb-3"
            placeholder="Ingresa tu correo..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {error && (
            <p className="text-red-500 text-sm italic mb-3">{error}</p>
          )}
          <button
            onClick={() => {
              handleSubscribe();
              setEmail("");
            }}
            className="w-full max-w-xs py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
          >
            Suscríbete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterFintech;
