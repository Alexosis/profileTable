export default function sorting(arr, field, direction) {
    arr.sort(function (a, b) {
        let nameA, nameB;

        if (a[field] && b[field]) {
            nameA = a[field].toLowerCase();
            nameB = b[field].toLowerCase();
        }
        if (nameA > nameB)
            return 1;
        if (nameB > nameA)
            return -1;
        return 0;
    });

    if (direction) {
        arr.reverse();
    }

    return arr;
 }