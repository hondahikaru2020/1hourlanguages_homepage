import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="container">

                    <div className="footer-brand">

                        <Link to="/" className="logo">
                            <img src="./images/logo.svg" alt="Eduland logo" />
                        </Link>

                        <p className="footer-text">
                            Professionally scale cross functional human capital and extensive technology.
                        </p>

                        <ul className="social-list">

                            <li>
                                <Link to="/" className="social-link">
                                    <ion-icon name="logo-google"></ion-icon>
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div className="footer-link-box">

                        <ul className="footer-list">

                            <li>
                                <p className="footer-link-title">Services</p>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Design</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Development</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Marketing</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Content Writing</Link>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-link-title">Company</p>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">About</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Terms</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Careers</Link>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-link-title">Job Info</p>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Select</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Services</Link>
                            </li>

                            <li>
                                <Link to="/" className="footer-link">Payment</Link>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-link-title">Contact</p>
                            </li>

                            <li className="contact-item">
                                <span>Call : </span>

                                <Link to="tel:000000000" className="contact-link">000 000 000</Link>
                            </li>

                            <li className="contact-item">
                                <span>Email : </span>

                                <Link to="mailto:example@gmail.com" className="contact-link">1hourlanguages@gmail.com</Link>
                            </li>

                            <li className="contact-item">
                                <span>Address : </span>

                                <Link to="/" className="contact-link">
                                    <address>Tokyo, JAPAN</address>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        &copy; 2022 <Link to="">1hourlanguages</Link>. All right reserved
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;