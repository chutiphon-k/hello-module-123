import moment from 'moment'

console.log('hello eieiza')
console.log(moment().calendar())

function Function1 (x) {
	return `hello ${x}` + moment().calendar()
}

export {
	Function1
}