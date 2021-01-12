/*                   I have created this program with javascript 

				            *******1st Answer*******

I have divided this series based on odd and even Concept
because on every odd number 2's is present and on every even number 3's is present  
expected output:2 3 3 2 3 3 3 2 3 3 3 2 3 3 2 3 3 3 2 3 3 3 2 3 3 3 2 3 3 2 3 3 3 2 3 3 3 ......
*/

function series(seriesUpTo){
	var checkOddEven=1;
	var counter = 0;
	var check2sThree = true;
	var tempStored = 1;
	for(var i=1;i<=seriesUpTo;i++){			  // Use while(true) in place of for loop here for infinite series
		if(checkOddEven%2!==0){               // Checking odd even place for numbers in series
			process.stdout.write("2 ")        // Using process.stdout.write() in order to avoid line breaking
		}
		else{
				if(check2sThree){                             // This if block is responsible for two 3's
					process.stdout.write('3 3 ')
					tempStored = tempStored+1;
					counter=tempStored;
					check2sThree=false;
				}

				else {

					if(counter>0){                    // This if block is responsible for three 3's
						process.stdout.write("3 3 3 ")
						counter = counter-1

						if(counter === 0){
							check2sThree=true;
						}
					}
				}
			
		}
		checkOddEven = checkOddEven + 1
	} 
	console.log('')
}
series(20)