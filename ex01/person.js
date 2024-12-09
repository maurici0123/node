class Person {
	constructor(name) {
		this.name = name
	}

	sayMyNmae(){
		console.log(`my name is ${this.name}`)
	}
}

module.exports = Person