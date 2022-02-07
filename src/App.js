
import { BrowserRouter, Route } from "react-router-dom";
import Layout from './Layout';
import ViewAbout from "./ViewAbout";

const App = () => {
    return ( 
        <BrowserRouter>
            
                <Route  path="/" exact>
                    <Layout />
                </Route>
                <Route  path="/viewabout" exact >
                    <ViewAbout />
                </Route>
            
        </BrowserRouter>
        
    )
}

export default App;