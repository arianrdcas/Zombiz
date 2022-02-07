import React from "react";
import HeaderStart from "./components/HeaderStart";
import Menu from "./components/Menu";
import Consult from "./views/Consult";
import WeDo from "./views/WeDo";
import About from "./views/About";
import Services from "./views/Services";
import Estadistica from "./views/Estadistica";
import FinishProject from "./views/FinishProject";
import Team from "./views/Team";
import PricingTable from "./views/PricingTable";
import Client from "./views/Client";
import Sponsor from "./views/Sponsor";
import News from "./views/News";
import ContacUs from "./views/ContactUs";
import StartNow from "./views/StarNow";
import Footer from "./components/Footer";


const Layout = () =>{
    return(
        <>
            <HeaderStart />
            <Menu/>
            <Consult/>
            <WeDo/>
            <About/>
            <Services/>
            <Estadistica/>
            <FinishProject/>
            <Team />
            <PricingTable />
            <Client />
            <Sponsor />
            <News />
            <ContacUs/>
            <StartNow />
            <Footer />
        </>
    )
    
}

export default Layout;