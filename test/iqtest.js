// https://www.codewars.com/kata/rot13-1/train/javascript
const expect = require('chai').expect;

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

describe("rot13", () => {

	it("calc index of encryption", () => {
		expect(calcIndex("a")).to.equal(13);
		expect(calcIndex("z")).to.equal(12);
	})

	it("encrypts a single letter", () => {
		expect(rot13("a")).to.equal("n");
		expect(rot13("b")).to.equal("o");
		expect(rot13("c")).to.equal("p");
	})

	it("encrypts two letters", () => {
		expect(rot13("ab")).to.equal("no");
		expect(rot13("xy")).to.equal("kl");
	})
	
})


function rot13(text) {
	return text
		.split('')
		.map(letter => {
			return alphabet[calcIndex(letter)]
		})
		.join('');
}

function calcIndex(letter) {
	const index = alphabet.indexOf(letter) + 13;
	return (index + 1 <= alphabet.length)
		? index
		: index - alphabet.length;
}