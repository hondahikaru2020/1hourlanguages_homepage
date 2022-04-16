const About = () => {
    return (
        <section className="about">
            <div className="container">

                <figure className="about-banner">

                    <img src="./images/about-banner.png" alt="Eduland students" className="about-img" />

                    <img src="./images/about-vector.svg" alt="Vector line art" className="vector-line" />

                    <button className="play-btn">
                        <ion-icon name="play"></ion-icon>
                    </button>

                </figure>

                <div className="about-content">

                    <h2 className="h2 about-title">Hành trinh từng bước học tiếng Nhật!</h2>

                    <p className="section-text">
                        Các nguồn tài liệu giảng dạy miễn phí, các giáo trình và các hoạt động được thiết kế nhằm giúp giáo viên ôn tập cho học viêntrước khi tham gia các kỳ thi .
                        Chúng tôi cũng có nhiều văn bằng chứng chỉ giảng dạy,các khóa học và công cụ hỗ trợ để giúp bạn trở thành một giáo viên.
                    </p>
                    <button className="btn btn-primary">Xem chi tiết</button>
                </div>
            </div>
        </section>
    );
}
export default About;
