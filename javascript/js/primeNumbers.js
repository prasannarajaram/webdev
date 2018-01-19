let n, i, j;

n = prompt("Enter range", "");
if (n = 1) alert (n);

if (n > 1)
{
	for (i = 2; i <= n; i++)
	{
	    for (j = 2; j <= i; j++)
	    {
	        if (i % j != 0 && j != 1) alert(i);
	    }
	}
}
else if ( n == 1) alert(n);
