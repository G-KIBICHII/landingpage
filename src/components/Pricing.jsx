import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Free Plan</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                {/* Add other list items */}
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </div>
          {/* Add more pricing items here */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
