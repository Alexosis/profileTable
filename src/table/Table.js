import React from "react";

function getTableHeaders(data) {
    let tableHeaders = new Set();
    let str;

    for (let index in data) {
        if(data.hasOwnProperty(index))
        for (let properies in data[index]) {
            str = properies;
            tableHeaders.add(str);
        }
    }

    return tableHeaders;
}

export default props =>{
    let tableHeaders = Array.from(getTableHeaders(props.data));
  return(
    <table className='table'>
        <thead>
            <tr>
                {tableHeaders.map(item =>(
                    <th onClick={props.onSort.bind(null, item)}>
                        {item} {props.sortField === item ? <small>{props.sortDirection ? 'decrease' : 'increase'}</small> : null}
                    </th>
                    )
                )}
            </tr>
        </thead>
        <tbody>
        {props.data.map(item => (
            <tr>
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