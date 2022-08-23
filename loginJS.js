
$(document).ready(function () {
    $("#signup-form").submit(function () {
        var nm1 = $("#name1").val();
        var ps1 = $("#pass1").val();
        localStorage.setItem("n1", nm1);
        localStorage.setItem("p1", ps1);
        alert("You are successfully registered!");
    });

    $("#login-form").submit(function () {
        var enteredName = $("#name2").val();
        var enteredPass = $("#pass2").val();
            var storedName = localStorage.getItem("n1");
            var storedPass = localStorage.getItem("p1");
            if (enteredName == storedName && enteredPass == storedPass) {
                Redirect();    
            }

            else {
                alert("Username/Password does not matched!");
            }
    });

});
function Redirect() {
    window.open(
        "newsHTML.html", "_blank");
    alert("You are logged in!");
 }