import React from 'react';
 
class FeaturesTwo extends React.Component {
    render(){
        return (
            <section className="uk-features uk-dark features-area">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m">
                        <div className="uk-item">
                            <div className="single-features-box">
                            <div className="icon">
                                    <i className="flaticon-ux-design"></i>
                                </div>
                                <h3>UX & UI Desgin</h3>
                                <div className="bar"></div>
                                <p>We understand user needs and create experiences that solve design challenges and also make people happy.
                                     What makes our service unique is the mix of design, technology, and human-centered approach to produce 
                                     custom visualizations, dashboards, input-intensive applications, and videos..
                                </p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="uk-item">
                            <div className="single-features-box">
                            <div className="icon">
                                    <i className="flaticon-android-logo"></i>
                                </div>
                                <h3>Web Development</h3>
                                <div className="bar"></div>
                                <p> Website Design & Development, E-commerce & CMS, UX & UI Design, API & 3rd party Integrations, Responsive Design Support & Maintenance, Web & Social Apps. We create website according to your needs.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box active">
                            <div className="icon">
                                    <i className="flaticon-android-logo-1"></i>
                                </div>
                                <h3>Dev Ops</h3>
                                <div className="bar"></div>
                                <p>DevOps is an essential part of any system. DevOps helps to plan the architecture for deployment of any product by which it can be available and accessible to the target audience.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
 
export default FeaturesTwo;