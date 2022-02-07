import React from "react";
import CardService from "./CardService";
import service1 from "../assets/images/service/service1.png";
import service2 from "../assets/images/service/service2.png";
import service3 from "../assets/images/service/service3.png";

const Services = () =>{
    return (
        <>
        <section className="we-do">
            <div className="container">
                <div className="we-do-details">
                    <div className="section-header text-center">
                        <h2>Our Services</h2>
                        <p>
                            Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        </div>
                        <div className="we-do-carousel">
                        <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <CardService
                                        image={service1}
                                        title="Busisness Planning"
                                        descripcion="Descripcion 1"
                                    />
                                </div>
                                
                                <div className="col-sm-4 col-xs-12">
                                    <CardService
                                        image={service2}
                                        title="Busisness Consultency"
                                        descripcion="Descripcion 2"
                                    />
                                </div>

                                <div className="col-sm-4 col-xs-12">
                                    <CardService 
                                        image={service3}
                                        title="Financial Services"
                                        descripcion="Descripcion 3"
                                    />
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Services; 