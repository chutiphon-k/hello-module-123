import Function2 from './akc'

console.log('hello eieiza')

function Function1 (x) {
	return `hello ${x}` + Function2()
}

export {
	Function1
}