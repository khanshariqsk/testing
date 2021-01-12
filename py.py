def closest(num):
	closest=0
	sum=0
	start=1
	while(closest<num):
		sum=sum+start*start
		start=start+1
		if closest<num:
			closest=sum
	return closest
print(closest(18))

