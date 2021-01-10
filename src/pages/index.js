import React from "react"
import Layout from "../components/Layout"
//import heroImage from "../images/hero-image.svg"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Sistema de comunicação satelital 
            </h1>
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
            alt="Gatsby and Tailwind CSS together"
          />
        </div>

        <div className="mx-auto">
          <a
            href="https://github.com/melanienolan/gatsby-starter-tailwind-css"
            className="p-4 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400"
          >
            View on GitHub
          </a>
        </div>

        <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
          <code className="text-gray-600 text-xs leading-xl">
            gatsby new my-project-name
            https://github.com/melanienolan/gatsby-starter-tailwind-css
          </code>
        </div>
      </main>
    </Layout>
  )
}
