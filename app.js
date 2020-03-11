const DB_USER = [	
	{
		username: "dhimas",
		password: "admin"
	}
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");
/*
console.log(inputUsername);
console.log(inputPassword);
console.log(buttonSubmit);*/
buttonSubmit.addEventListener('click', (e)=>{
	e.preventDefault();
	const valueInputPassword = inputPassword.value;
	const valueInputUsername = inputUsername.value;
	
/*	console.log(valueInputUsername);
	console.log(valueInputPassword);*/

	let flag=0;
	DB_USER.map((data) => {
		if (data.username === valueInputUsername && data.password === valueInputPassword) {
			flag = 1
		}
	})
	const warningmsg = document.querySelector(".warning");

	console.log(warningmsg.className);

	if (flag === 0) {
		warningmsg.className = "text-danger";
	}
	else{
		alert("Selamat anda masuk ke home");
	}
})
