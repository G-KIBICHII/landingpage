import React from 'react';

const FAQ = () => {
  return (
    <section id="faq-2" className="faq-2 section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              <div className="faq-item faq-active" data-aos="fade-up" data-aos-delay="200">
                <i className="faq-icon bi bi-question-circle"></i>
                <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                <div className="faq-content">
                  <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              {/* Add more FAQ items here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
