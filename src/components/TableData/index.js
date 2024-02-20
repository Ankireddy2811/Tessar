import {Component} from "react"
import {Dropdown} from "react-bootstrap"

import "./index.css"

const data1 = [
    
      1,
      "#122345678123 Sunder Yadav",
      "14/02/2024 05.40 Pm",
      "7hr 20 min",
      "Gurgaon Mumbai",
      "Truck, 20 ft Close body 1",
      "400 Kg",
      "4 View results",
      "Mohit 5215001161264",
      "View results"
    
  ]

  const data = ["S No","Bid Number Created By","Start Date & Time",
      "Bid Time Remaining",
      "From city To city",
      "Vehicle Type Size Body No. of Vehicle",
      "Material Weight (in Kg)",
      "Response",
      "Assigned Staff Details",
       "Details"]

class TableData extends Component{
    render(){
        return(
            <div className="table-data-container">
                <div className="firstData">
                    <ul className="first-data-container">
                        <li className="item item1">
                            Live (30)
                        </li>
                        <li className="item item2">
                            Responded (30)
                        </li>
                        <li className="item item3">
                            Unresponded (30)
                        </li>
                    </ul>
                    <ul className="second-data-container">
                        <li className="item item1">
                            Bid Created
                        </li>
                        <li className="each-nav-item">
                            Today
                        </li>
                        <li className="each-nav-item">
                            Yesterday
                        </li>
                        <button type="button" className="calender">
                            Calender
                        </button>
                        
                    </ul>
                </div>
            
            <div className="table-container">
            <ul className="labelcontainer">
                  {data.map(eachItem=>(
                    <li className="label-item">
                     {eachItem}
                    </li>
                  ))}
            </ul>
            
            <ul className="text-container">
                  {data1.map(eachItem=>(
                    <li className="data-item">
                     {eachItem}
                    </li>
                  ))}
            </ul>
            <ul className="text-container">
                  {data1.map(eachItem=>(
                    <li className="data-item">
                     {eachItem}
                    </li>
                  ))}
            </ul>
            <ul className="text-container">
                  {data1.map(eachItem=>(
                    <li className="data-item">
                     {eachItem}
                    </li>
                  ))}
            </ul>
            <ul className="text-container">
                  {data1.map(eachItem=>(
                    <li className="data-item">
                     {eachItem}
                    </li>
                  ))}
            </ul>
            <ul className="text-container">
                  {data1.map(eachItem=>(
                    <li className="data-item">
                     {eachItem}
                    </li>
                  ))}
            </ul>
           
                  
            </div>
               
            </div>
            
        )
    }
}

export default TableData