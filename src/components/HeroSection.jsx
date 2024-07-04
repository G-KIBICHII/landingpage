import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

const HeroSection = () => {
    return (
        <main className="main">

            {/* Hero Section */}
            <section id="hero" className="hero section bg-dark text-light">

                <Container>
                    <Row className="gy-4">
                        <Col lg={6} className="order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                            <h1>Better Solutions For Your Business</h1>
                            <p>We are team of talented designers making websites with Bootstrap</p>
                            <div className="d-flex">
                                <a href="#about" className="btn-get-started btn btn-primary">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center btn btn-outline-light"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </Col>
                        <Col lg={6} className="order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/hero-img.png" class="img-fluid animated" alt=""/>
                        </Col>
                    </Row>
                </Container>

            </section>{/* /Hero Section */}

        </main>
    );
};

export default HeroSection;
