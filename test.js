
const inputElement = document.querySelector('#input')
const ul = document.querySelector('.autocomplete-container')

const animals = ["Lion","Tiger","leopard","Giraffe","Elephant"] 

function showSuggestion(mappedAnimals){
	const html = mappedAnimals.join('')
	ul.innerHTML = html


}

inputElement.addEventListener("input",function(event){
	let filteredAnimals = []
	let mappedAnimals = []
	if(event.target.value){
		filteredAnimals = animals.filter(animal=>animal.toLowerCase().includes(event.target.value))
		mappedAnimals = filteredAnimals.map(animal=>`<li>${animal}</li>`)

	}
	// console.log(mappedAnimals.join(""))
	showSuggestion(mappedAnimals)
})