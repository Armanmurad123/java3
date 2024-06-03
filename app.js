
// Initalize the Array with some items
var myItems = ["Bananas", "Milk", "Bread", "Mango"];

// display it on the page
var list = $("#the-items-list");
var parent = list.parent();

// loop through items and build list
list.detach().empty().each(function(i){
    for (var x = 0; x < myItems.length; x++){
        $(this).append('<li>' + myItems[x] + '</li>');
        if (x == myItems.length - 1){
            $(this).appendTo(parent);
        }
    }
});


// Add item button 
function myListFunction() {
    var newItem = prompt("add to the list");
  $("#the-items-list").append('<li>' + newItem + '</li>');
}