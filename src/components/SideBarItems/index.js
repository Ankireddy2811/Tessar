import "./index.css"

const SideBarItems = (props)=>{
    const {eachContent,isStyleApplied} = props
    const addStyles = isStyleApplied ? "styled-each-item":""
    const addTextStyles = isStyleApplied ? "styled-each-text-item":""
    return(
        <li className={`${addStyles} each-item`}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbi9I6yM3EUabM1mCY8A_y3k78OFilW_xSa_W1ArW9ReW2bwz" alt="sidebarImage" className="sidebar-image"/>
        <h1 className={`${addTextStyles} sidebar-each-heading`}>{eachContent}</h1>
        </li>
    ) 
}
export default SideBarItems


