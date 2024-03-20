import { useEffect } from "react"
import "./../../css/home.css";
import Aos from 'aos';

const HomePage = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
        });
    })
    return (
        <>
            {/* Banner */}
            <div className="container">
                <div className="banner">
                    <div data-aos="fade-right" className="banner__text">
                        <h1 data-aos="fade-left" className="fw-bold">Make better</h1>
                        <h1 data-aos="fade-left" className="fw-bold">
                            coffee{" "}
                            <img
                                src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525524/image_6_exiyhh.png"
                                srcSet=""
                                className="pb-5"
                                data-aos="fade-up"
                                alt=""
                            />
                        </h1>
                        <p data-aos="fade-right">why learn how to blog?</p>
                    </div>
                    <div className="banner__image">
                        <img
                            className="banner__image--img"
                            data-aos='fade-left'
                            src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525523/croods_1_dxhtzf.png"
                            alt=""
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="content">
                    <div className="content__1">
                        <div style={{ paddingRight: 40 }} className="content__1--items">
                            <h2 className="fw-bold my-4" >long established</h2>
                            <p>
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that....
                            </p>
                            <div className="my-5">
                                <p>May 20th 2020</p>
                                <p>
                                    <a href="#">Read more</a>
                                </p>
                            </div>
                        </div>
                        <div className="content__1--items">
                            <img
                                src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525523/image_1_vfc7ki.png"
                                alt=""
                                data-aos="fade-left"
                            />
                        </div>
                    </div>
                    <div className="content__2">
                        <div className="content__2--box">
                            <div className="content__2--items">
                                <img
                                    src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525523/image_2_c9r4ga.png"
                                    alt=""
                                    data-aos="fade-up"
                                />
                            </div>
                            <div className="content__2--items">
                                <h2 className="fw-bold my-4">long established</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that....
                                </p>
                                <div>
                                    <p>May 20th 2020</p>
                                    <p style={{ textAlign: "right" }}>
                                        <a href="">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content__2--box">
                            <div className="content__2--items">
                                <img
                                    src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525523/image_4_xljp8h.png"
                                    alt=""
                                    data-aos="fade-up"
                                />
                            </div>
                            <div className="content__2--items">
                                <h2 className="fw-bold my-4">long established</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that....
                                </p>
                                <div>
                                    <p>May 20th 2020</p>
                                    <p style={{ textAlign: "right" }}>
                                        <a href="">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content__2--box">
                            <div className="content__2--items">
                                <img
                                    src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525523/image_5_nod3dx.png"
                                    alt=""
                                    data-aos="fade-up"
                                />
                            </div>
                            <div className="content__2--items">
                                <h2 className="fw-bold my-4">long established</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that....
                                </p>
                                <div>
                                    <p>May 20th 2020</p>
                                    <p style={{ textAlign: "right" }}>
                                        <a href="">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content__3">
                        <div className="content__3--items">
                            <div>
                                <h1 className="fw-bold">What is Lorem</h1>
                                <h1 className="fw-bold mb-4">Ipsum?</h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution...
                                </p>
                                <div className="flex__link">
                                    <p>May 20th 2020</p>
                                    <p>
                                        <a href="#">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content__3--items">
                            <img
                                src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525523/image_7_aywrxh.png"
                                alt=""
                                data-aos="fade-up"
                            />
                        </div>
                    </div>
                    <div className="see_more">
                        <button className="btn__primary">
                            See more <i />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage