import React, { Component } from 'react';
import '../styles/GeneralInfoComponent.css';
import BeardImg from '../images/beard.png';
import HairImg from '../images/hair.png';
import ChairImg from '../images/chair.jpg';
import EmployeeImg from '../images/employee.png';
import GoogleMapReact from 'google-map-react';

export class GeneralInfoComponent extends Component{


    render()
    {
        return(
            <div className="General-Info">
                <div className="Container">
                    <div className="heading">
                        <hr className="headingLine"/>
                        <span className="headingText">USLUGE</span>
                        <hr className="headingLine"/>
                    </div>
                    
                    <div className="OurServices animated fadeIn">
                        <div className="Service box-shadow">
                            <img className="service-image" alt="" src={HairImg}/>
                            <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, purus eu rutrum blandit, tortor justo tempor purus, eu condimentum risus mi vel lorem.</p>
                        </div>
                        <div className="Service box-shadow">
                        <img className="service-image" alt="" src={BeardImg}/>
                            <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, purus eu rutrum blandit, tortor justo tempor purus, eu condimentum risus mi vel lorem. </p>
                        </div>
                        

                        <div className="Service box-shadow">
                        <img className="service-image" alt="" src={ChairImg}/>
                            <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, purus eu rutrum blandit, tortor justo tempor purus, eu condimentum risus mi vel lorem. </p>
                        </div>
                    </div>
                </div>


                <div className="Container">
                    <div className="OurTeam">
                        <div className="Service box-shadow">
                            <div className="Employee">
                            <div className="employee-top-wrap">
                                    <img className="employee-image" alt="" src = {EmployeeImg} />
                                    <div className="employee-name-age-wrap">
                                        <div className="employee-name">JOSKAN</div>
                                        <div className="employee-age">24 godine</div>
                                    </div>
                            </div>
                                <p className="employee-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, purus eu rutrum blandit, tortor justo tempor purus, eu condimentum risus mi vel lorem. </p>
                            </div>
                        </div>
                        <div className="Service box-shadow">
                            <div className="Employee">
                            <div className="employee-top-wrap">
                                    <img className="employee-image" alt="" src = {EmployeeImg} />
                                    <div className="employee-name-age-wrap">
                                        <div className="employee-name">JOSKAN</div>
                                        <div className="employee-age">24 godine</div>
                                    </div>
                            </div>
                                <p className="employee-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, purus eu rutrum blandit, tortor justo tempor purus, eu condimentum risus mi vel lorem. </p>
                            </div>
                        </div>
                        <div className="Service box-shadow">
                            <div className="Employee">
                            <div className="employee-top-wrap">
                                    <img className="employee-image" alt="" src = {EmployeeImg} />
                                    <div className="employee-name-age-wrap">
                                        <div className="employee-name">JOSKAN</div>
                                        <div className="employee-age">24 godine</div>
                                    </div>
                            </div>
                                <p className="employee-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, purus eu rutrum blandit, tortor justo tempor purus, eu condimentum risus mi vel lorem. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-company-info">
                        
                        <h1 className="footer-heading">Kontaktirajte nas</h1>
                        <p className="phone-number">091 791 3550</p>
                        <p className="adress">Vinjani Donji 439a</p>
                        <p className="copyright">Sva prava pridržana bla bla</p>
                    </div>
                    <div className="footer-company-location">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: [] }}
                        defaultCenter={{lat: 43.508133, lng: 16.440193}}
                        defaultZoom={11}
                    >
                    </GoogleMapReact>
                    </div>
                </footer>
            </div>
        );
    }
}

/*
    <GoogleMapReact
        bootstrapURLKeys={{ key: [] }}
        defaultCenter={{lat: 43.508133, lng: 16.440193}}
        defaultZoom={11}
    >
    </GoogleMapReact>
*/