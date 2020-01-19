import React from "react";
import getTableHeaders from "../modules/utils/getTableHeaders";
import sorting from "../modules/utils/Sort";

export default class Table extends React.Component{
    onSort = sortField =>{
        const clone = this.props.data.concat();
        const sortDirection = !this.props.sortDirection;

        const newOrder = sorting(clone, sortField, sortDirection);

        this.props.newOrder(newOrder);
        this.props.chooseField(sortField);
        this.props.chooseDirection(sortDirection);
    };

  render() {
      let tableHeaders = Array.from(getTableHeaders(this.props.data));
      return(
            <table className='table'>
                <thead>
                <tr>
                    {tableHeaders.map(item =>(
                            <th onClick={this.onSort.bind(null, item)}>
                                {item} {this.props.sortField === item ? <small>{this.props.sortDirection ? 'decrease' : 'increase'}</small> : null}
                            </th>
                        )
                    )}
                </tr>
                </thead>
                <tbody>
                {this.props.data.map(item => (
                        <tr key={item[tableHeaders[0]]}>
                            {tableHeaders.map(property =>(
                                    <td>{item[property]}</td>
                                )
                            )}
                        </tr>
                    )
                )}
                </tbody>
            </table>
        )}
    }