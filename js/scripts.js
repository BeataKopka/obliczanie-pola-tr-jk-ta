// obliczamy pole trójkąta
var a,
	h,
	triangleArea;
	a = 2;
	h = 3;
	triangleArea = 3;
	a = prompt("podaj a");
	h = prompt("podaj h");

if (isNaN(a)) {
    alert("a nie jest liczbą!");
}

if (isNaN(h)) {
    alert("h nie jest liczbą!");
}

var triangleArea = alert(a*h/2);

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);