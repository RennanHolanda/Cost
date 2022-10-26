import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="nav">
            <div>
            <ul>
                <li><Link id="link" exact to="/">HOME</Link></li>
                <li><Link id="link" to="/company">COMPANY</Link></li>
                <li><Link id="link" to="/contact">CONTACT</Link></li>
                <li><Link id="link" to="/newproject">NEWPROJECT</Link></li>
            </ul>
            </div>
           
        </header>
    )
}

export default Header