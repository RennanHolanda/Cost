import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
      <nav className={styles.navbar}>
        <Container>
            <Link to='/'>
             <img src={logo} alt="Costs" />
            </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link id="link" exact to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link id="link" to="/project">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link id="link" to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link id="link" to="/contact">Contato</Link>
                    </li>
                </ul>
        </Container>
      </nav>
    )
}

export default Navbar