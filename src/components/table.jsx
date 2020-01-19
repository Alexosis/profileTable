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
                            <th onClick={this.onSort.bind(null, item)} className='table__header'>
                                {item} {this.props.sortField === item ? <div>{this.props.sortDirection ?
                                <img src={require('../icons8-влево-в-квадрате-48.png')} alt='decrease'
                                     className='table__header__decrease'/> :
                                <img src={require('../icons8-влево-в-квадрате-48.png')} alt='increase'
                                     className='table__header__increase'/>}</div> : null}
                            </th>
                        )
                    )}
                </tr>
                </thead>
                <tbody>
                {this.props.data.map(item => (
                        <tr>
                            {tableHeaders.map(property =>(
                                    <td className='table__body'>{item[property]}</td>
                                )
                            )}
                        </tr>
                    )
                )}
                </tbody>
            </table>
        )}
    }