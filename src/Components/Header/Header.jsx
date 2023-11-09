import "./Header.scss";
import NavMenu from "../NavMenu/NavMenu";
import logo from "../../assets/Logo/Vehicle Connect-logos (1)/Vehicle Connect-logos_transparent.png";

function Header() {

    

    return (
        <div className="header">
            <img src={logo} className="header__logo" />
            <NavMenu />
            
            
        </div>
    );
}

export default Header;