
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsQuote } from 'react-icons/bs';
import img1 from "../../assets/images/person_1.jpg"

const Slicky = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <h1 className="tw-mb-10 tw-text-center tw-font-extrabold">Clients Says About Us?</h1>
            <Slider {...settings}>
                <div className="tw-px-4 ">
                    <div className="tw-bg-my-iio tw-relative tw-p-4 tw-mt-12   ">
                        <span className="-tw-mt-8 tw-absolute top-0 tw-text-5xl tw-text-my-red"><BsQuote /></span>
                        <p className="tw-mb-8 tw-mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="tw-flex">
                            <img src={img1} alt="" className="tw-w-20 rounded-circle" />
                            <div className=" tw-mt-5 tw-ml-3">
                                <h4 className="tw-mb-0">Roger Sco</h4>
                                <span className="tw-text-sm ">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-px-4 ">
                    <div className="tw-bg-my-iio tw-relative tw-p-4 tw-mt-12   ">
                        <span className="-tw-mt-8 tw-absolute top-0 tw-text-5xl tw-text-my-red"><BsQuote /></span>
                        <p className="tw-mb-8 tw-mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="tw-flex">
                            <img src={img1} alt="" className="tw-w-20 rounded-circle" />
                            <div className=" tw-mt-5 tw-ml-3">
                                <h4 className="tw-mb-0">Roger Sco</h4>
                                <span className="tw-text-sm ">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-px-4 ">
                    <div className="tw-bg-my-iio tw-relative tw-p-4 tw-mt-12   ">
                        <span className="-tw-mt-8 tw-absolute top-0 tw-text-5xl tw-text-my-red"><BsQuote /></span>
                        <p className="tw-mb-8 tw-mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="tw-flex">
                            <img src={img1} alt="" className="tw-w-20 rounded-circle" />
                            <div className=" tw-mt-5 tw-ml-3">
                                <h4 className="tw-mb-0">Roger Sco</h4>
                                <span className="tw-text-sm ">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-px-4 ">
                    <div className="tw-bg-my-iio tw-relative tw-p-4 tw-mt-12   ">
                        <span className="-tw-mt-8 tw-absolute top-0 tw-text-5xl tw-text-my-red"><BsQuote /></span>
                        <p className="tw-mb-8 tw-mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="tw-flex">
                            <img src={img1} alt="" className="tw-w-20 rounded-circle" />
                            <div className=" tw-mt-5 tw-ml-3">
                                <h4 className="tw-mb-0">Roger Sco</h4>
                                <span className="tw-text-sm ">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-px-4 ">
                    <div className="tw-bg-my-iio tw-relative tw-p-4 tw-mt-12   ">
                        <span className="-tw-mt-8 tw-absolute top-0 tw-text-5xl tw-text-my-red"><BsQuote /></span>
                        <p className="tw-mb-8 tw-mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="tw-flex">
                            <img src={img1} alt="" className="tw-w-20 rounded-circle" />
                            <div className=" tw-mt-5 tw-ml-3">
                                <h4 className="tw-mb-0">Roger Sco</h4>
                                <span className="tw-text-sm ">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-px-4 ">
                    <div className="tw-bg-my-iio tw-relative tw-p-4 tw-mt-12   ">
                        <span className="-tw-mt-8 tw-absolute top-0 tw-text-5xl tw-text-my-red"><BsQuote /></span>
                        <p className="tw-mb-8 tw-mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="tw-flex">
                            <img src={img1} alt="" className="tw-w-20 rounded-circle" />
                            <div className=" tw-mt-5 tw-ml-3">
                                <h4 className="tw-mb-0">Roger Sco</h4>
                                <span className="tw-text-sm ">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-px-4 ">
                    <div className="tw-bg-my-iio tw-relative tw-p-4 tw-mt-12   ">
                        <span className="-tw-mt-8 tw-absolute top-0 tw-text-5xl tw-text-my-red"><BsQuote /></span>
                        <p className="tw-mb-8 tw-mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="tw-flex">
                            <img src={img1} alt="" className="tw-w-20 rounded-circle" />
                            <div className=" tw-mt-5 tw-ml-3">
                                <h4 className="tw-mb-0">Roger Sco</h4>
                                <span className="tw-text-sm ">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </div>



            </Slider>
        </div>
    );
}



export default Slicky