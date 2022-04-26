/*
Create JSON file of cart order?
load them into shopping cart section
separate var for prices where will be added up and used for total
connect add to cart from mens, womens, and gear to same list to be accessed
 */
let shoppingCart = {};

function searchSwap() {
    document.getElementById("searchDiv").innerHTML = "<input type='text' autofocus placeholder='Search'><a onclick='undoSearch()' style='margin-left: 10px'>X</a>";
}
function undoSearch() {
    document.getElementById("searchDiv").innerHTML = "<a id=\"searchBar\" onclick=\"searchSwap()\">Search</a>";
}
searchBar = document.getElementById("searchBar");