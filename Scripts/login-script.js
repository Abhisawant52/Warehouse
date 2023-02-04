const main = () => {
	console.log('Warehouse Login Script')
}
//Html Elements Reference
const login = document.getElementById('login-button')
let Username = document.getElementById('username')
let passsword = document.getElementById('password')
let error = document.getElementById('error')

//Login Method
login.addEventListener('click', () => {
	console.log('User Login')
	Username.style.border = '1px solid silver'
	passsword.style.border = '1px solid silver'
	if (!Username.value && !passsword.value) {
		error.innerText = 'Username and password fields are required*'
		Username.style.border = '1.5px solid red'
		passsword.style.border = '1.5px solid red'
	} else if (!Username.value) {
		error.innerText = 'Username is required*'
		Username.style.border = '1.5px solid red'
	} else if (!passsword.value) {
		error.innerText = 'Password is required*'
		passsword.style.border = '1.5px solid red'
	} else {
		if (Username.value == 'warehouse' && passsword.value == '@Pass123') {
			error.innerText = ''
			window.location.href = 'Templates/add-entity.html'
		} else {
			error.innerText = 'Invalid Email and Password*'
		}
	}
})
main()
