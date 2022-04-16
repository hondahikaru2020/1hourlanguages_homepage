import { Link } from "react-router-dom";

const Instructor = () => {
    return (
        <section className="instructor">
            <div className="container">
                <img src="./images/instructor-vactor-1.svg" alt="Vector line art" className="vector-line" />
                <div className="title-wrapper">
                    <h2 className="h2 instructor-title">Giáo viên tuyệt vời của chúng tôi!</h2>
                    <button className="btn btn-primary">Danh sách giáo viên</button>
                </div>
                <ul className="instructor-list">
                    <li>
                        <div className="instructor-card">
                            <figure className="card-banner">
                                <img src="./images/instructor-1.png" alt="Shaapir Prio" />
                            </figure>
                            <Link to="/">
                                <h3 className="card-title">Shaapir Prio</h3>
                            </Link>
                            <p className="card-subtitle">Assistant Director</p>
                            <ul className="card-social-list">
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-google"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="instructor-card">
                            <figure className="card-banner">
                                <img src="./images/instructor-2.png" alt="Sellina" />
                            </figure>
                            <Link to="/">
                                <h3 className="card-title">Sellina</h3>
                            </Link>
                            <p className="card-subtitle">Director</p>
                            <ul className="card-social-list">
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-google"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="instructor-card">
                            <figure className="card-banner">
                                <img src="./images/instructor-3.png" alt="John Smith" />
                            </figure>
                            <Link to="/">
                                <h3 className="card-title">John Smith</h3>
                            </Link>
                            <p className="card-subtitle">Assistant Director</p>

                            <ul className="card-social-list">
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-google"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="card-social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <img src="./images/instructor-vactor-2.svg" alt="Vector line art" className="vector-line" />
            </div>
        </section>
    );
}

export default Instructor;