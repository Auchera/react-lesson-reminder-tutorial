import LogoCla from "../img/clarusway-logo-black.png"
import "../Header/Header.css"
 
const Header = () =>{
    return(
        <div className="container">
            <img className="logo" src={LogoCla} alt="" />
        </div>
    )
}


export default Header