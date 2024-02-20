
import "./index.css"
const sideBarDate1=["Bid","POD","Vendor","User"]
const NavBar = ()=>{
  console.log("HI")
  return (
    <div className="navbar-container">
      <ul className="links-container">
        
       {sideBarDate1.map(eachItem=>(
         <li className="each-nav-item">{eachItem}</li>
       ))}

       <li className="each-nav-item">Freight EG</li>
        </ul>
    </div>
  );
}

export default NavBar;