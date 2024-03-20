import { Link } from "react-router-dom";
import "./../css/header.css";

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="logo">
                    <h2 className="fw-bold"><Link to="/">HotCoffee</Link></h2>
                </div>
                <div className="menu">
                    <nav className="menu__list">
                        <ul>
                            <li className="menu__items"><Link to="/">Home</Link></li>
                            <li className="menu__items"><Link to="/articles">Articles</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>

    )
}

export default Header