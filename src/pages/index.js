import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import renderImage from "../images/render.jpg"
//import heroImage from "../images/hero-image.svg"

export default () => {
  return (
    <Layout>
      <div class="w-full h-screen bg-center bg-no-repeat bg-cover">
        <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
          <div class="mx-4 text-center text-white">
          <img className="p-4" src={renderImage} alt="Optimate" />
            {/* <h1 class="font-bold text-6xl mb-4">Sistemas de Comunicação Satelital</h1> */}
            <h2 class="font-bold text-3xl mb-12">
              Sistemas de Comunicação Satelital
            </h2>
            <div>
              <Link
                class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2"
                to="/produto"
              >
                Saiba mais
              </Link>
              <Link
                class="bg-red-700 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2"
                to="/contato"
              >
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </div>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              A revolução na flexibilidade de antenas VSAT e banda KU
            </p>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Instalação e apontamento em no máximo 10 minutos
            </p>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Equipamento robusto e prático, transportável em uma única maleta
            </p>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Apontamento guiado, substitui tabelas, GPS e bússola
            </p>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Antena de alto desempenho, com alinhamento e rigidez superior
            </p>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            //src={heroImage}
            src="http://www.optimate.com.br/images/fachada_lateralg.jpg"
            //src="http://www.optimate.com.br/images/top.jpg"
            alt="optimate"
          />
        </div>

        {/* <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
          <code className="text-gray-600 text-xs leading-xl">
            Avenida Manoel Ribas,2378 - Vista Alegre CEP 80810-345 Curitiba-PR
            telefone: +55 41 3014 6005 e-mail: optimate@optimate.com.br
          </code>
        </div> */}
      </main>
    </Layout>
  )
}
