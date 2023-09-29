import "./header.css"

import mainLogo from '../../assets/Frame-3.svg'



const Header = () =>{
    return(
        <header className='main_header'>
            <nav className='container main_nav'>
                <a href="/"><img className="main_logo" src={mainLogo} alt="logo" /></a>
                <ul className='nav_menu'>
                    <li className="nav_menu_list"><a href="/">Why Open Enterprise</a></li>
                    <li className="nav_menu_list"><a href="/">Features</a></li>
                    <li className="nav_menu_list"><a href="/">Contribute</a></li>
                    <li className="nav_menu_list"><a href="/">Request early access</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header