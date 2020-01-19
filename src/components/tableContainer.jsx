import React from "react";
import {connect} from 'react-redux'
import Table from "./table";
import {chooseDirection, chooseField, newOrder } from "../storage/table/actions";

class TableContainer extends React.Component{
    render() {
        return(
           <Table data={this.props.data}
                  newOrder={this.props.newOrder}
                  sortField={this.props.sortField}
                  chooseField={this.props.chooseField}
                  sortDirection={this.props.sortDirection}
                  chooseDirection={this.props.chooseDirection}
           />
        )
    }
}

const mapStateToProps = state => {
    return{
        data: state.table.data,
        sortField: state.table.sortField,
        sortDirection: state.table.sortDirection
    };
};

const mapDispatchToProps = {
    chooseField,
    chooseDirection,
    newOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
