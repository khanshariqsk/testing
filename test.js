function test() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>resolve("data"),4000)
	})
}

async function asy(){
	try{
		const data = await test()
		console.log(data)
	}
	catch(error){
		console.log(error)
	}
}
asy()