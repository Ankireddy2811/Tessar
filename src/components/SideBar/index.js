import {Component} from "react"

import SideBarItems from "../SideBarItems"
import "./index.css"

const sideBarDate1=["Bid","POD","Vendor","User"]
const sideBarDate2=["Settings","Profile","Contact Us","Logout"]

class SideBar extends Component{

   state = {contentValue:sideBarDate1[0]}


   render(){
      const {contentValue} = this.state
      return(
         <div className="sidebar-container">
         <div className="sidebar-header">
            <div className="round-image">
               .
            </div>
            <h1 className="logo-heading">LOGO</h1>
   
         </div>
         <div className="two-content-container">
           <ul className="content-container">
            {sideBarDate1.map(eachItem=>(
              <SideBarItems eachContent={eachItem} isStyleApplied={contentValue === eachItem}/>
            ))}
           </ul>
           <ul className="content-container">
            {sideBarDate2.map(eachItem=>(
               <li className="each-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbi9I6yM3EUabM1mCY8A_y3k78OFilW_xSa_W1ArW9ReW2bwz" alt="sidebarImage" className="sidebar-image"/>
                  <h1 className="sidebar-each-heading">{eachItem}</h1>
               </li>
            ))}
           </ul>
         </div>
       </div>
      )
   }
}


export default SideBar