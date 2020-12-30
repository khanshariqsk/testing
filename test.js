function test(cb) {
	setTimeout(()=>{
		return "data";
	},4000)
}

console.log(test())