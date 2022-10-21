import './index.scss'
import { Link } from "react-router-dom";

export default function NavBarComp(){
    return(
        <>
            <header className='navbar'>

                <Link>
                    <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                </Link>

                <ul className='list'>
                    <li className='item'> <Link>Sobre nós</Link></li>
                        <div className='line'></div>
                    <li className='item'> <Link>Nossos projetos</Link></li>
                        <div className='line'></div>
                    <li className='item'> <Link to='/usuario/login'>Login</Link></li>
                </ul>
            </header>
        </>
    )
}