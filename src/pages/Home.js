import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
// import Alert from "../components/Alert";

class Home extends Component {
    state = {
      employees: [],
      search: "",
      filteredEmployees: []
    };
    componentDidMount() {
      API.getEmployees()
      .then(res => {
          console.log(res.data);
          this.setState({ ...this.state,
            employees: res.data.results.map(e => {
              return {
                ...e,
                searchable: Object.values(e.name).map( n => n.toLowerCase()).join(''),
              }
            }),
          });

          console.log(this.state);
        })
      .catch(err => console.log(err));
    }
    handleInputChange = event => {
        this.setState({
          ...this.state,
          search: event.target.value,
        });
        console.log(this.state.search);
    };
    

    render() {
        return (
            <>
            <SearchForm handleInputChange={this.handleInputChange}/>
            <Table employees={this.state.employees.filter(employee => {
            return employee.searchable.includes(this.state.search);
          })}/>
          {/* <Table employees={this.state.employees.filter(employee => {
            return employee.name.first.toLowerCase().includes(this.state.search);
          })}/> */}
            {/* employees is the props. It has to be the same with the one that is on table.js(props.employees). It connects table index.js and home.js together */}
            </>

        )
    };
};
export default Home;