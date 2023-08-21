import searchIcon from "../assets/images/icon-search.svg"
import "./Search.css"

function Search() {
  return (
    <form className="Search">
          <input className="form-control shadow-none" type="text" placeholder="Search Word" aria-label="default input example" />
              <img src={searchIcon} alt="" className="searchIcon"/>
      
        
      </form>
  )
}

export default Search
