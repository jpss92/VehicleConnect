import "./NavMenu.scss";
import { useState } from "react";
import menuImg from "../../assets/icons/noun-car-1566245.png"

function NavMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="menu">
        <img 
            src={menuImg}
            alt="Menu"
            className="menu__img"
            onClick={toggleMenu} />
            {isMenuOpen && (
                <ul className="menu__list">
                    <li className="menu__list--item">Vin Decoder</li>
                    <li className="menu__list--item">Vehicle Search</li>
                </ul>
            )}
        </div>
    );
};

export default NavMenu;