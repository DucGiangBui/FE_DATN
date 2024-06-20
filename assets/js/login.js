function checkInputs() {
	var username = document.getElementById('username').value.trim();
	var password = document.getElementById('password').value.trim();
	var alertSpan = document.querySelector('.login-alert');

	if (username === '' || password === '') {
		alertSpan.textContent = 'Vui lòng nhập đầy đủ thông tin!';
	} else {
		alertSpan.textContent = '';
	}
}