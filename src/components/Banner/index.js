import "./index.css"

const Banner = ()=>{
   console.log("Hi")
   return(
   <div className="banner-container">
        <ul className="banner-text-container">
            <li className="each-nav-item">Live</li>
            <li className="each-nav-item">Results</li>
            <li className="each-nav-item">History</li>
            <input type="search" className="form-controls" placeholder="Search"/>
        </ul>
        <button type="button" className="create-button">
           Create <span className="plus-symbol">+</span>
        </button>
    </div>

   )
}

export default Banner