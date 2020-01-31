import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
// import Alert from "../components/Alert";

class Home extends Component {
    state = {
      employees: [
        {
          picture: "",
          name: "",
          phone: "",
          email: "",
          dob: "",
          id:""
        }
      ]   
    };
    componentDidMount() {
        API.getEmployees()
          .then(res => {
              console.log(res.data);
              this.setState({ ...this.state, employees: res.data.results });
              console.log(this.state);
            })
            
          .catch(err => console.log(err));
    }
    // handleInputChange = event => {
    //     this.setState({ search: event.target.value });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getBasedOfName(this.state.search)
    //       .then(res => {
    //         if (res.data.status === "error") {
    //           throw new Error(res.data.message);
    //         }
    //         this.setState({ results: res.data.message, error: "" });
    //       })
    //       .catch(err => this.setState({ error: err.message }));
    // };
    render() {
        return (
            <>
            {/* <Alert/> */}
            <SearchForm/>
            <Table employees={this.state.employees}/>
            {/* employees is the props. It has to be the same with the one that is on table.js(props.employees). It connects table index.js and home.js together */}
            </>

        )
    };
};
export default Home;