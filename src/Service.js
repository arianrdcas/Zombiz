import React from "react";
import HeaderStart from "./components/HeaderStart";
import Menu from "./components/Menu";
import Services from "./views/Services";
import StartNow from "./views/StarNow";
import Footer from "./components/Footer";

const Service = () => {
    return (
        <>
            <HeaderStart/>
            <Menu/>
            {/*about-part start*/}
            <section className="about-part service-part">
                <div className="container">
                <div className="about-part-details text-center">
                    <h2>service</h2>
                    <div className="about-part-content">
                    <div className="breadcrumbs">
                        <div className="container">
                        <ol className="breadcrumb">
                            <li>
                            <a href="index.html">home</a>
                            <span>//</span>
                            </li>
                            <li>
                            <a href="service.html">service</a>
                            </li>
                        </ol>
                        {/*/.breadcrumb*/}
                        </div>
                        {/*/.container*/}
                    </div>
                    {/*/.breadcrumbs*/}
                    </div>
                    {/*/.about-part-content*/}
                </div>
                {/*/.about-part-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.about-part*/}
            {/*about-part end*/}
            <Services/>
            <StartNow />
            <Footer />
        </>
    );
}

export default Service;