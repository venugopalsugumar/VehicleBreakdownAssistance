document.addEventListener("DOMContentLoaded", function () {


// BOOKING FORM
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

bookingForm.addEventListener("submit", function (e) {

e.preventDefault();

const name = bookingForm.querySelectorAll("input")[0].value;
const phone = bookingForm.querySelectorAll("input")[1].value;
const location = bookingForm.querySelectorAll("input")[2].value;
const service = bookingForm.querySelector("select").value;

if (name === "" || phone === "" || location === "") {
alert("Please fill all required fields");
return;
}

alert(
"Booking Confirmed!\n\n" +
"Name: " + name +
"\nService: " + service +
"\nLocation: " + location
);

bookingForm.reset();

});

}


// REQUEST FORM
const requestForm = document.querySelector(".request-form");

if (requestForm) {

requestForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Emergency Request Sent Successfully!\nOur team will contact you soon.");

requestForm.reset();

});

}


// BUTTON LINK HANDLER
const buttons = document.querySelectorAll("button[data-link]");

buttons.forEach(button => {

button.addEventListener("click", function(){

window.location.href = button.getAttribute("data-link");

});

});

});