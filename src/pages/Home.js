import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";

const sorters = {
  byName(a, b) {
    return a.fullName > b.fullName ? 1 : -1
    // if else one line statement 
  }
}

class Home extends Component {
    state = {
      employees: [],
      search: "",
      sortEmployees: [],
      sortAscending: true,
      sortBy: 'byName',
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
                fullName: e.name.first + ' ' + e.name.last,
                // map through the name object, join first and last name and set it on fullName
              }
            }),
          });
          console.log(this.state);
        })
      .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({
          ...this.state,
          search: event.target.value,
        });
        console.log(this.state.search);
    };
  
    render() {
      const sorted = this.state.employees.filter(employee => {
        return employee.searchable.includes(this.state.search);
      }).sort(sorters[this.state.sortBy]);
      

        return (
            <>
            <SearchForm handleInputChange={this.handleInputChange}/>
            <Table employees={this.state.sortAscending ? sorted : sorted.reverse()} sort={this.state.sortEmployees}
            />
            {/* employees is the props. It has to be the same with the one that is on table.js(props.employees). It connects table index.js and home.js together */}
            </>

        )
    };
};
export default Home;