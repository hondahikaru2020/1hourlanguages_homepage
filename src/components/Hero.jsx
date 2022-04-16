const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <figure className="hero-banner">
                    <img src="./images/hero-banner.png" alt="A young lady sits, holding a pen and a notebook." />
                </figure>
                <div className="hero-content">
                    <h1 className="h1 hero-title">Học tiếng Nhật miễn phí</h1>
                    <p className="section-text">
                        Việc chuẩn bị cho một trong các kỳ thi của chúng tôi có thể giúp bạn giao tiếp trong đời sống thực tế.
                        Hãy dành thời gian xem qua một số tài liệu miễn phí của chúng tôi để giúp bạn học tiếng Nhật.
                    </p>
                    <button className="btn btn-primary">Xem chi tiết</button>
                </div>
            </div>

        </section>
    );
}

export default Hero;