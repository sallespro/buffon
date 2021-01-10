import React from "react"
import Layout from "../components/Layout"
import notFoundImage from "../images/render-1.jpg"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <img className="p-4" src={notFoundImage} alt="Page not found" />
      </main>
    </Layout>
  )
}
