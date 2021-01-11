import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import renderImage from "../images/render.jpg"

export default () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className="h-4">
          <img src={renderImage} alt="Optimate" />
        </div>
        <div className="px-3 pt-20 pb-10 text-center z-10">
          <h2 className="font-bold text-white text-3xl mb-12">
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
    </Layout>
  )
}
