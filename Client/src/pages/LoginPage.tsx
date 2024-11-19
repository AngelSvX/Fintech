import { useState } from "react";
import workingLogin from "../lib/svg/WorkingLogin.svg";
import { useNavigate } from "react-router";
import Dashboard from "./Dashboard";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const navigate = useNavigate();

  // Chequeo del token en el montaje del componente
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setLoginSuccessful(true);
  //   }
  // }, []);

  const goToBack = () => {
    navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token); // Guardar el token
          setLoginSuccessful(true);
        } else {
          setLoginSuccessful(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loginSuccessful ? (
        <Dashboard />
      ) : (
        <div className="min-h-screen w-full bg-gradient-to-br from-pink-500 to-pink-600 p-4 lg:p-8 flex items-center justify-center">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative bg-pink-600 p-8 text-white">
                <div className="relative z-10 h-full">
                  <h1 className="mb-12 text-4xl font-bold">Bienvenido(a)</h1>
                  <img
                    src={workingLogin}
                    className="mx-auto w-[400px] h-[400px]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-700/50 to-transparent" />
              </div>
              <div className="p-8 m-auto">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Ingresa tus datos</h2>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Usuario
                      </label>
                      <input
                        id="username"
                        type="text"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contraseña
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          required
                          className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-gray-700"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </button>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-pink-600 px-4 py-2 text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                      INGRESAR
                    </button>
                  </form>
                  <a
                    onClick={goToBack}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                    volver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
