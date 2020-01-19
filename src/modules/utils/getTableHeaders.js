export default function getTableHeaders(data) {
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
