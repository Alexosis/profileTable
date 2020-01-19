import React, {Component} from 'react';
import data from './profiles'
import Table from "./table/Table";
import sorting from "./sorting/Sort";

class App extends Component{
  state={
    data: [],
    sortDirection: true,
    sortField: ''
  };

  componentDidMount() {
    this.setState({
      data: data,
    })
  }

  onSort = sortField =>{
    const clone = this.state.data.concat();
    const sortDirection = !this.state.sortDirection;

    const newOrder = sorting(clone, sortField, sortDirection);
    this.setState({
      data: newOrder,
      sortDirection: sortDirection,
      sortField: sortField
    });
  };

  render() {
    return (
        <div className="App">
          <Table
              data={this.state.data}
              onSort={this.onSort}
              sortField={this.state.sortField}
              sortDirection={this.state.sortDirection}
          />
        </div>
    );
  }
}

export default App;
