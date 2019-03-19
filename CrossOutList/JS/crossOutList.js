// Cross Out Specific Items By Clicking
$("#main-ul").on("click", "li", function() {
    $(event.target).toggleClass("completed");
});

// Get the modal
var modalInfo = document.getElementById('myModalInfo');
var modal1Div = document.getElementById('myModal1');
var modal2Div = document.getElementById('myModal2');
var modal3Div = document.getElementById('myModal3');
var modal4Div = document.getElementById('myModal4');
var modal5Div = document.getElementById('myModal5');
var modal6Div = document.getElementById('myModal6');
var modal7Div = document.getElementById('myModal7');
var modal8Div = document.getElementById('myModal8');

// Get the button that opens the modal
var btn = document.getElementById("myBtnInfo");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modalInfo.style.display = "block";
}

// Get the spans that open the modals; When the user clicks the modal span, open the modal
var modalArray = document.getElementsByClassName("modal-span");
for (var i = 0; i < modalArray.length; i++) {
    modalArray[i].addEventListener("click", function() {
        var selectedID = "my" + this.getAttribute("id").charAt(0).toUpperCase() + this.getAttribute("id").slice(1);
        document.getElementById(selectedID).style.display = "block";
    });
}

// Get the <span> element that closes the modal
var spanInfo = document.getElementsByClassName("close")[0];
var span = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal
spanInfo.onclick = function() {
    modalInfo.style.display = "none";
}

for (var i = 1; i < span.length; i++) {
    span[i].addEventListener("click", function() {
        var selectedModal = this.parentNode.parentNode.parentNode;
        selectedModal.style.display = "none";
    });
}

// When the user clicks anywhere outside of the modal, close it

// window.onclick = function(event) {
//     console.log("entered closing modal function on window.onclick")
//     if (event.target == modalInfo || event.target == modal1Div || event.target == modal2Div || event.target == modal3Div || event.target == modal4Div || event.target == modal5Div || event.target == modal6Div || event.target == modal7Div || event.target == modal8Div) {
//         modalInfo.style.display = "none";
//         modal1Div.style.display = "none";
//         modal2Div.style.display = "none";
//         modal3Div.style.display = "none";
//         modal4Div.style.display = "none";
//         modal5Div.style.display = "none";
//         modal6Div.style.display = "none";
//         modal7Div.style.display = "none";
//         modal8Div.style.display = "none";
//     }
// }