import "./Main.css"
import Navbar from "./Navbar"
import Search from "./Search"
import Results from "./Results"
import Footer from "./Footer"

function Main() {
  return (
    <main className="Main">
      <Navbar />
      <Search />
      <Results />
      <Footer />
    </main>
  )
}

export default Main
