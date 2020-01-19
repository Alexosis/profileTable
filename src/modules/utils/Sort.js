export default function sorting(arr, field, direction) {
        arr.sort(function (a, b) {
       let nameA = a[field].toLowerCase();
       let nameB = b[field].toLowerCase();
       if( nameA > nameB)
         return 1;
       if (nameB > nameA)
         return -1;
       return 0;
     });

        if (!direction){
            arr.reverse();
        }

        return arr;
 }