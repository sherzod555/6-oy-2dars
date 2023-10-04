import Logo from '../../assets/Frame-3.svg';

import "./footer.css"


const Footer = () =>{
    return(
        <main>
            <div className='main_footer container'>

                <div className='footer_info'>
                    <h1 className='footer_title'>
                        Start an Open Enterprise
                    </h1>
                    <p className="footer_desc">
                        If you can’t wait to run a new or existing organization on Open Enterprise and are willing to explore and navigate the beta, we’d love to get you started.
                    </p>

                    <button className="footer_button" type="button">Request early access</button>
                </div>

                <div className='footer_banner'></div>

            </div>

            <div className="footer_nav container">
                <img className='footer_logo' src={Logo} alt="logo" />

                <ul className='footer_nav_list'>
                    <li className="nav_list_item"><a href="/">Documentation</a></li>
                    <li className="nav_list_item"><a href="/">GitHub</a></li>
                    <li className="nav_list_item"><a href="/">Twitter</a></li>
                    <li className="nav_list_item"><a href="/">Contact us</a></li>
                    
                </ul>
            </div>

        </main>
    )
}

export default Footer