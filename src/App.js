import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
    return (
        // <Router>
        <div>
            <Header />
            <Container>
                <Home />
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route exact path="/employee" component={Employee} /> */}
                {/* <Footer /> */}
            </Container>
        </div>
        // </Router>
    );
}

export default App;