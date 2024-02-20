import SideBar from "./components/SideBar";
import NavBar from "./components/Navbar";
import './App.css';
import Banner from "./components/Banner";
import TableData from "./components/TableData"



const App = ()=>{
  return (
    <div className="App">
      <div className="home-container">
      <SideBar/>
      <div className="navbar-banner">
      <NavBar/>
      <Banner/>
      <TableData/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
