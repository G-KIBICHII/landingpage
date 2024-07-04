import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap'; // Assuming you have React Bootstrap installed

const SkillsSection = () => {
    // Define skills data
    const skills = [
        { name: 'HTML', value: 100 },
        { name: 'CSS', value: 90 },
        { name: 'JavaScript', value: 75 },
        { name: 'Photoshop', value: 55 }
    ];

    return (
        <section id="skills" className="skills section">

            <Container data-aos="fade-up" data-aos-delay="100">

                <div className="row">

                    <div className="col-lg-6 d-flex align-items-center">
                        <img src="assets/img/skills.png" className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-6 pt-4 pt-lg-0 content">

                        <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="skills-content skills-animation">
                            {skills.map((skill, index) => (
                                <div className="progress" key={index}>
                                    <span className="skill"><span>{skill.name}</span> <i className="val">{skill.value}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <ProgressBar now={skill.value} label={`${skill.value}%`} visuallyHidden />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </Container>

        </section>
    );
};

export default SkillsSection;
