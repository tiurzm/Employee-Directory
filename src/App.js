import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Employee from "./pages/Employee";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Container from "./components/Container";



function App() {
    return (
      <Router>
        <Navbar />
        <Container>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/employee" component={Employee} /> */}
        </Container>
        {/* <Footer /> */}
      </Router>
    );
  }
  
  export default App;