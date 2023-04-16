import './Footer.css';

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="links">
                    <ul>
                        <li> <a href='https://twitter.com/Samkayzee1' target='blank'> <i className="fa-brands fa-twitter"></i> </a> </li>
                        <li> <a href='https://github.com/Samkayzeee'> <i className="fa-brands fa-github"></i> </a> </li>
                        <li> <a href='https://www.linkedin.com/in/lasisi-abdulsamad'> <i className="fa-brands fa-linkedin"></i> </a> </li>
                    </ul>
                </div>

                <div className="made">
                    <h2>Made by Lasisi Abdulsamad</h2>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;