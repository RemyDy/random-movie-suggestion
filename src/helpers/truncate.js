
function truncate(string, n){
    return string.length > n ? string.slice(0, n - 3) + "..." : string;
}

export default truncate;
