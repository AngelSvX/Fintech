import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import {
  CiFacebook,
  CiInstagram,
  CiMapPin,
  CiPhone,
  CiTwitter,
} from "react-icons/ci";
import { useApi } from "../context/ApiContext";

function ContactForm() {
  const {
    name,
    lastName,
    emailForm,
    message,
    setName,
    setLastName,
    setEmailForm,
    setMessage,
    postContact,
  } = useApi();

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const validateForm = () => {
    if (!name.trim() || !lastName.trim() || !emailForm.trim() || !message.trim()) {
      return "Todos los campos son obligatorios.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailForm)) {
      return "Por favor, introduce un correo electrónico válido.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }


    postContact();
    setFormSuccess("¡Formulario enviado exitosamente!");
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">

      <div className="w-full md:w-1/2 p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {formError && (
            <p className="text-sm text-red-500 bg-red-100 p-2 rounded-lg">
              {formError}
            </p>
          )}
          {formSuccess && (
            <p className="text-sm text-green-500 bg-green-100 p-2 rounded-lg">
              {formSuccess}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nombres"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombres
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                id="nombres"
                type="text"
                placeholder="Nombres"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="apellidos"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Apellidos
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
                id="apellidos"
                type="text"
                placeholder="Apellidos"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo Electrónico
            </label>
            <input
              onChange={(e) => {
                setEmailForm(e.target.value);
              }}
              value={emailForm}
              id="email"
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensaje
            </label>
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              id="mensaje"
              placeholder="Mensaje"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200"
          >
            Entregar Cuestionario
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-pink-500 to-red-500 text-white flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">Dirección de Contacto</h2>
        <p className="mb-6 leading-relaxed">
          Si tiene algún tipo de problema, comuníquese con nuestro equipo de
          soporte en cualquier momento y desde cualquier lugar.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <CiPhone size={42} />
            <span>440-70-465</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiWorld size={42} />
            <span>contact@neobot.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <CiMapPin size={42} />
            <span>4148 Rose Avenue, New Orleans, LA, Louisiana, 70114</span>
          </div>
        </div>
        <div className="mt-8 flex space-x-4">
          <CiInstagram size={42} />
          <CiFacebook size={42} />
          <CiTwitter size={42} />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
