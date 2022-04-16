import { Link } from "react-router-dom";

const Departments = () => {
    return (
        <section className="departments">
            <div className="container">
                <img src="./images/departmets-vector.svg" alt="Vector line art" className="vector-line" />
                <h2 className="h2 departments-title">Bạn muốn nâng cao trình độ tiếng Nhật?</h2>
                <ul className="departments-list">
                    <li>
                        <div className="departments-card">
                            <Link to="/" className="card-banner">
                                <figure>
                                    <img src="./images/depertment-1.png" alt="Artificial Intelligence" />
                                </figure>
                            </Link>
                            <Link to="/">
                                <h3 className="h3 card-title">Luyện thi JLPT</h3>
                            </Link>
                            <p className="card-text">
                                Assertively parallel task synergistic deliverables after high-quality.
                            </p>
                            <Link to="/" className="card-link">
                                <span>Learn More</span>
                                <ion-icon name="arrow-forward"></ion-icon>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="departments-card">
                            <Link to="/" className="card-banner">
                                <figure>
                                    <img src="./images/depertment-2.png" alt="Civil Engineering" />
                                </figure>
                            </Link>
                            <Link to="/">
                                <h3 className="h3 card-title">Luyện nghe nói giao tiếp</h3>
                            </Link>
                            <p className="card-text">
                                Assertively parallel task synergistic deliverables after high-quality.
                            </p>
                            <Link to="/" className="card-link">
                                <span>Learn More</span>
                                <ion-icon name="arrow-forward"></ion-icon>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="departments-card">
                            <Link to="/" className="card-banner">
                                <figure>
                                    <img src="./images/depertment-3.png" alt="Business Studies" />
                                </figure>
                            </Link>
                            <Link to="/">
                                <h3 className="h3 card-title">Tài liệu học miễn phí</h3>
                            </Link>
                            <p className="card-text">
                                Assertively parallel task synergistic deliverables after high-quality.
                            </p>
                            <Link to="/" className="card-link">
                                <span>Learn More</span>
                                <ion-icon name="arrow-forward"></ion-icon>
                            </Link>
                        </div>
                    </li>
                </ul>
                <button className="btn btn-primary">Các khoá học</button>
            </div>
        </section>
    );
}
export default Departments;