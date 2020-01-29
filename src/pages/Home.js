import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
// import Alert from "../components/Alert";
import Moment from 'moment';


class Home extends Component {
    state = {
        search: "",
        searchs: [],
        results: [],
        error: ""
    };
    componentDidMount() {
        API.getEmployees()
          .then(res => {
              console.log(res.data);
              console.log(res.data.results[0].name.first + " " + res.data.results[0].name.last);
              console.log(res.data.results[0].phone);
              console.log(res.data.results[0].email);
              const birth = res.data.results[0].dob.date;
              const birthday = Moment(birth).format('DD-MM-YYYY');
              console.log(birthday);

              this.setState({ ...this.state, results: res.data.results[0].name });
            })
            
          .catch(err => console.log(err));
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBasedOfName(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <>
            {/* <Alert/> */}
            <SearchForm 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                searchs={this.state.searchs}
            />
            <Table />
            </>
        )
    };
};
export default Home;