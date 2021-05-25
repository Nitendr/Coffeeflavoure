var esp = document.getElementById("e");
var black = document.getElementById("b");
var mocha = document.getElementById("mo");
var macchiato = document.getElementById("m");
var latte = document.getElementById("l");




function bfun() {
    document.getElementById("serial").innerHTML = "01/05",
    document.getElementById("heading").innerHTML = "Black Coffee",
    document.getElementById("context").innerHTML = "Delicious coffee sholud be simle coffee with nothing added, unless you add it yourself.",
    document.getElementById("img").src = "images/black-coffee.jpeg";   
}

function lfun() {
    document.getElementById("serial").innerHTML = "02/05",
    document.getElementById("heading").innerHTML = "Latte",
    document.getElementById("context").innerHTML = "Latte is a coffee drink made with espresso and steamed milk. the term comes from italian cafe e latte , caffelatte or caffeelatte, which means \"coffee & milk\".",
    document.getElementById("img").src = "images/lattee.jpeg";
}

function efun() {
    document.getElementById("serial").innerHTML = "03/05",
    document.getElementById("heading").innerHTML = "Espresso"
    document.getElementById("context").innerHTML = "Espresso is a coffee brewing method of italian origin, in which a small amount of nearly bolied water is forced under 9-10 bars of pressure through finely-ground coffee beans.",
    document.getElementById("img").src = "images/espressoo.jpeg";
}

function mfun() {
    document.getElementById("serial").innerHTML = "04/05",
    document.getElementById("heading").innerHTML = "Macchiato",
    document.getElementById("context").innerHTML = "Coffee macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.",
    document.getElementById("img").src = "images/macchiato.jpeg";
}

function mofun() {
    document.getElementById("serial").innerHTML = "05/05",
    document.getElementById("heading").innerHTML = "Mocha",
    document.getElementById("context").innerHTML = "A caffe mocha, is a chocolate-flavoured varient of a caffe latte. the name is drived from the city of mocha, Yemen. which was one of the centers of coffee trade.",
    document.getElementById("img").src = "images/mocha.jpeg";
}

black.addEventListener("click", bfun);
latte.addEventListener("click", lfun);
esp.addEventListener("click", efun);
macchiato.addEventListener("click", mfun);
mocha.addEventListener("click", mofun);








