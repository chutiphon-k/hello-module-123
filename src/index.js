import randomstring from 'randomstring'

function handleTest () {
	return `hello ${randomstring.generate(15)}`
}

export {
	handleTest
}
