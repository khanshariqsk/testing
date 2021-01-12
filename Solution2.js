/*   
						I have created this program with javascript

						         *******2nd Answer*******

Here also I have used odd and even concept to form this series 
expected ouput if x=5 and y=6 :
5 6 6 6 6 6 5 6 6 6 6 6 6 5 6 6 6 6 6 6 5 6 6 6 6 6 6 5 ......

I have used a function to form this series,three arguments can be passed to it first two for series generation
and last argument for series limit 
*/


function series(x,y,seriesUpTo){
	var num = 1;
	var start = 1;
	while(seriesUpTo>0){						 // Use while(true) in place of for loop here for infinite series
		if(num%2 !== 0){                         // Checking odd even place for numbers in series
			process.stdout.write(`${x} `)
		}
		else{
			if(start === 1){
				process.stdout.write(`${y} ${y} ${y} ${y} ${y} `)
			}
			else{
				process.stdout.write(`${y} ${y} ${y} ${y} ${y} ${y} `)
			}
		start = start + 1;	
		}
		seriesUpTo = seriesUpTo - 1;
		num = num + 1;
	}
	console.log('')
	
}

series(5,6,20)