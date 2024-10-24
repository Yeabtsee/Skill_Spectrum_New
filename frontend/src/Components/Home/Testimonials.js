// Testimonial.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import test1 from '../../Assets/img/testimonial-1.jpg';
import test2 from '../../Assets/img/testimonial-2.jpg';
import test3 from '../../Assets/img/testimonial-3.jpg';
import '../../Assets/css/testimonial.css'

const Testimonial = () => {
    const options = {
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    };

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Testimonial</h5>
                    <h1>What Say Our Students</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
                            <div className="text-center">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img className="img-fluid mx-auto mb-3" src={test1} alt=""/>
                                <h5 className="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                            <div className="text-center">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img className="img-fluid mx-auto mb-3" src={test2} alt=""/>
                                <h5 className="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                            <div className="text-center">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img className="img-fluid mx-auto mb-3" src={test3} alt=""/>
                                <h5 className="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
