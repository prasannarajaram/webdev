
let x = prompt("Enter the base");
let n = prompt("Enter exponent");

function pow(x,n){

    while (n != 0)
    {
	x = x * x;
	n--;
    }
	return x;
}
let result = pow(x,n);
alert (result);
