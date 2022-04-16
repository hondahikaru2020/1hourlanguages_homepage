import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header active">
            <div className="container">
                <div class="overlay"></div>
                <Link to="/" className="logo">
                    <img src="./images/logo.svg" alt="Eduland logo" />
                </Link>
                <nav className="navbar">
                    <Link to="/" className="logo">
                        <img src="./images/logo.svg" alt="Eduland logo" />
                    </Link>
                    <ul className="navbar-list">
                        <li><Link className="navbar-link" to="/">Home</Link></li>
                        <li><Link className="navbar-link" to="/">About</Link></li>
                        <li><Link className="navbar-link" to="/">Service</Link></li>
                        <li><Link className="navbar-link" to="/">Blog</Link></li>
                        <li><Link className="navbar-link" to="/">Contact</Link></li>
                    </ul>
                    <button className="btn btn-secondary">Đăng ký</button>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;