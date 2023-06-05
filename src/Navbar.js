import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg position-fixed w-100 mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand nav-link" to="/">My Portfolio</Link>
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
                            <ul className="dropdown-menu">
                                <li><a href="#" className="dropdown-item" style={{fontWeight: 'bold'}}>Completed</a></li>

                                <li><a className="dropdown-item" href="https://cyberlandr.com" target="_blank">CyberLandr<sup>TM</sup></a></li>

                                <li><a className="dropdown-item" href="https://play.google.com/store/apps/details?id=com.team02.boma" target="_blank">BOMA! BMI Calculator</a></li>

                                <li><hr className="dropdown-divider"/></li>

                                <li><a href="#" className="dropdown-item" style={{fontWeight: 'bold'}}>In-Progress</a></li>

                                <li><a className="dropdown-item" href="#">JACK - AI Voice Assistant</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Certifications</a>
                            <ul className="dropdown-menu">
                            <li className="dropdown-item"><strong>Completed</strong></li>

                            <li><a className="dropdown-item" href="https://www.codecademy.com/profiles/Android_Servo/certificates/65f0ff88f4fc58e0536b3b51648dff24" target="_blank">C#</a></li>

                            <li><a className="dropdown-item" href="https://www.codecademy.com/profiles/Android_Servo/certificates/af00e5032d0a68cc84879983f5d8333b" target="_blank">React</a></li>

                            <li><a className="dropdown-item" href="https://www.linkedin.com/learning/certificates/e321dc294a21173a1cdcb34c26a6287d5a50ea05282dd1f12fb26a4258f93923" target="_blank">Learning the OWASP Top 10</a></li>

                            <li><a className="dropdown-item" href="https://www.linkedin.com/learning/certificates/2236364fa677cc98311b70a004669d319ff6d56f4f172862cbb9722cbadfa9c2?u=2153100" target="_blank">Secure Coding in Python</a></li>

                            <li><a className="dropdown-item" href="https://www.codecademy.com/profiles/Android_Servo/certificates/a8ab218d5950c29861635cc0bf12fd13" target="_blank">Git & GitHub</a></li>

                            <li><a className="dropdown-item" href="https://www.codecademy.com/profiles/Android_Servo/certificates/705dcb15de0da4dd9d9fc4f3274b430e" target="_blank">JavaScript</a></li>

                            <li><a className="dropdown-item" href="https://www.codecademy.com/profiles/Android_Servo/certificates/9a5bb1fc45b4281af1fffec93b0aaf05" target="_blank">CSS</a></li>

                            <li><a className="dropdown-item" href="https://www.codecademy.com/profiles/Android_Servo/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7" target="_blank">HTML</a></li>

                            <li><a className="dropdown-item" href="https://www.sololearn.com/Certificate/1059-23320258/jpg" target="_blank">PHP</a></li>

                            <li><hr className="dropdown-divider" /></li>
                            <li className="dropdown-item"><strong>In-Progress</strong></li>
                            <li><a className="dropdown-item" href="https://www.codecademy.com/career-journey/full-stack-engineer" target="_blank">Full-Stack Web Development</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;