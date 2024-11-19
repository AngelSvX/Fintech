import React from "react";
import { BiWorld } from "react-icons/bi";
import { CiFacebook, CiInstagram, CiMapPin, CiPhone, CiTwitter } from "react-icons/ci";

function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 mb-1">Nombres</label>
              <input
                id="nombres"
                type="text"
                placeholder="Nombres"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
              />
            </div>
            <div>
              <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
              <input
                id="apellidos"
                type="text"
                placeholder="Apellidos"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
            />
          </div>
          <div>
            <label htmlFor="sujeto" className="block text-sm font-medium text-gray-700 mb-1">Sujeto</label>
            <input
              id="sujeto"
              type="text"
              placeholder="Sujeto"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              id="mensaje"
              placeholder="Mensaje"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none"
            />
          </div>
          <button className="w-full py-3 bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200">
            Entregar Cuestionario
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-pink-500 to-red-500 text-white flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">Dirección de Contacto</h2>
        <p className="mb-6 leading-relaxed">
          Si tiene algún tipo de problema, comuníquese con nuestro equipo de soporte en cualquier momento y desde cualquier lugar.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <CiPhone size={42}/>
            <span>440-70-465</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiWorld size={42}/>
            <span>contact@neobot.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <CiMapPin size={42}/>
            <span>4148 Rose Avenue, New Orleans, LA, Louisiana, 70114</span>
          </div>
        </div>
        <div className="mt-8 flex space-x-4">
          <CiInstagram size={42}/>
          <CiFacebook size={42}/>
          <CiTwitter size={42}/>
        </div>
      </div>
    </div>
  );
}

export default ContactForm