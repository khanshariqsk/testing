function test(cb) {
	setTimeout(()=>{
		cb("data")
	},4000)
}

test((data)=>{
	console.log(data)
})