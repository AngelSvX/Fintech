import React from "react";
import { useApi } from "../../context/ApiContext";

const FooterFintech: React.FC = () => {
  const [fileName, setFileName] = React.useState("No hay archivo seleccionado");
  const [error, setError] = React.useState<string | null>(null);

  const { postSubscribe, setEmail, email } = useApi();

  const validateEmail = (email: string): boolean => {
    // Expresión regular para validar correos electrónicos
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

    setError(null); // Limpia el error si el email es válido
    postSubscribe();
  };

  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center px-4 md:px-0 py-8">
      <div className="w-full md:w-5/12 h-auto md:h-72 bg-custom-gradient rounded-xl mb-6 md:mb-0 md:mr-4 flex flex-col justify-between p-6 text-center">
        <div>
          <p className="text-white text-2xl md:text-3xl font-bold">
            Sé parte del observatorio
          </p>
        </div>
        <div>
          <p className="text-white text-base md:text-lg font-normal mt-2">
            Aquí tienes la oportunidad de incluir la iniciativa de tu
            organización, ¡Escríbenos!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block w-full max-w-xs cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 md:py-3 px-4 rounded-lg shadow-lg text-center transition duration-300">
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
          <p className="mt-2 text-gray-200 text-sm">{fileName}</p>
        </div>
      </div>
      <div className="w-full md:w-5/12 h-auto md:h-72 bg-custom-gradient rounded-xl md:ml-4 flex flex-col justify-between p-6 text-center">
        <div>
          <p className="text-white text-2xl md:text-3xl font-bold">
            Únete a nuestra comunidad
          </p>
        </div>
        <div>
          <p className="text-white text-base md:text-lg font-normal mt-2">
            Suscríbete y entérate de las actualizaciones que Fintech tiene para
            ti.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="email"
            className="w-full max-w-xs h-10 rounded-lg shadow-lg pl-3 text-sm md:text-lg font-semibold mb-3"
            placeholder="Ingresa tu correo..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {error && <p className="text-red-100 text-sm mb-2">{error}</p>}
          <button
            onClick={() => {
              handleSubscribe()
              setEmail('')
            }}
            className="w-1/2 md:w-2/4 h-10 md:h-12 bg-white rounded-lg text-base md:text-xl font-bold"
          >
            Suscríbete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterFintech;