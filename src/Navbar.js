import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <nav className="navbar navbar-expand-lg position-fixed w-100 mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand nav-link" to="/">My Portfolio</Link>
                {pathname !== '/' && 
                <>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/schooling">Education</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/work">Work</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/projects">Projects</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/certifications">Certifications / Affiliations</Link>
                                </li>
                            </ul>
                    </div>
                </>
                }
            </div>
        </nav>
    );
}
 
export default Navbar;