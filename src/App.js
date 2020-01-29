import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;