import React from 'react'
import EventTwo from "../../src/lib/images/OurEvents/EventTwo.jpg";

function Posts() {
  return (
    <div className=" w-full flex items-center flex-col">
    <div className="w-4/5 mb-10">
      <h2 className="text-4xl font-semibold">PUBLICACIONES</h2>
    </div>
    <div className=" w-4/5 flex flex-row justify-between">
      <div className="w-2/5 flex flex-col">
        <div className="image w-full h-full">
          <img src={EventTwo} alt="" className="object-cover w-full" />
        </div>
        <div className="title font-semibold text-xl px-2 py-3">Encuentro Anual de #FinquityALC2024 “Del plan a la acción: Construyendo alianzas para una efectiva inclusión financiera de las mujeres en América Latina y el Caribe“</div>
        <div className="description text-md px-2">Un evento de dos días organizado por FinEquityALC – CGAP en alianza con Bancamía, entidad de la Fundación Microfinanzas BBVA, CAF – Banco de desarrollo de América Latina y el Caribe, la Fundación WWB Colombia y Banca de las Oportunidades.   El evento reunirá a los/las participantes de la comunidad</div>
      </div>

      <div className="w-2/5 flex flex-col">
        <div className="image w-full h-full">
          <img src={EventTwo} alt="" className="object-cover w-full" />
        </div>
        <div className="title font-semibold text-xl px-2 py-3">Encuentro Anual de #FinquityALC2024 “Del plan a la acción: Construyendo alianzas para una efectiva inclusión financiera de las mujeres en América Latina y el Caribe“</div>
        <div className="description px-2">Un evento de dos días organizado por FinEquityALC – CGAP en alianza con Bancamía, entidad de la Fundación Microfinanzas BBVA, CAF – Banco de desarrollo de América Latina y el Caribe, la Fundación WWB Colombia y Banca de las Oportunidades.   El evento reunirá a los/las participantes de la comunidad</div>
      </div>
    </div>
  </div>
  )
}

export default Posts