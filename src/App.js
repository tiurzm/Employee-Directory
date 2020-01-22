import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";



function App() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/employee" component={Employee} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;