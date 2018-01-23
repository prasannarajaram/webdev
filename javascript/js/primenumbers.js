let n = 0, i = 0 , j = 0;

n = prompt("Enter range", "");
if (n === 1) alert (n);

if (n > 1)
{
    nextPrime:
	for (i = 2; i <= n; i++)
	{
	    for (j = 2; j < i; j++)
	    {
	       if (i % j == 0) continue nextPrime;
	    }
	    alert(i);      
	}
}

