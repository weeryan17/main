$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
document.getElementById("create").onclick = function() {create()};
var values = {};
function create() {
	var x = document.getElementById("register-form");
	var text = "";
    var i;
    for (i = 0; i < x.length-1;i++) {
        var value = x.elements[i].value;
        values[i] = value;
        if(value == ""){
        	document.getElementById("info").innerHTML = "Invaid Value!";
        } else {
        	//values[i] = value;
        }
    }
    window.alert("test");
    window.alert(values.length());
    
}