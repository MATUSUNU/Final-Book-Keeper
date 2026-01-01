import React from "react"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import Footer from "./Footer.jsx"

function App() {
  return (
    <div>
      <Header />
      <div className="container font-style">
        <Note />
        <Footer />
      </div>
    </div>
  )
}

export default App;
