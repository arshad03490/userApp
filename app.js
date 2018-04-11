	let users = ['Ali', 'Jhon', 'Doe'];
	let ul = document.querySelector('ul');

	let app = {
		render : () => {
			ul.innerHTML = "";
			users.map((item, index) => {
				let currentUser = document.createElement('li');
				currentUser.innerHTML = item;
				ul.appendChild(currentUser);

			});
		},
		mounted : () => {
			app.render()
		}
	}
	app.mounted();
