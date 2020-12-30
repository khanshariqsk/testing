function test() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>resolve("data"),4000)
	})
}

test()
.then(console.log)
.catch(console.log)