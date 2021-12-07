// import { Router, Switch, Route } from "react-router-dom";
// import Main from "./components/main/Main";
import Layout from "./components/Layout";
import { CreatePublisher } from "./pages";

const App = () => {
     return (
          // <Switch>

          <div className="container">
               <Layout>
                    {/* <Main /> */}
                    <CreatePublisher />
               </Layout>
          </div>
          // {/* </Switch> */}
     );
};

export default App;
