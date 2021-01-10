import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-white">
        <header className="p-4 bg-red-500 text-white font-semibold">
          <h1 className="max-w-4xl mx-auto">Optimate</h1>
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          2020 &copy; salles pro services
        </footer>
      </div>
    </>
  )
}

export default Layout
