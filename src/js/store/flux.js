const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			name: "",
			email: "",
			address: "",
			phone: ""
		},

		actions: {
			getListContacts: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/nitry")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					})
					.catch(err => console.log("Request Failed", err));
			},
			addContact: (inputName, inputEmail, inputAddress, inputPhone) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					full_name: inputName,
					email: inputEmail,
					agenda_slug: "nitry",
					address: inputAddress,
					phone: inputPhone
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(result => getActions().getListContacts())
					.catch(error => console.log("error", error));
			},

			removeContact: id => {
				console.log("props.id", id);
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(res => res.json())
					.then(res => {
						getActions().getListContacts();
					});
			},
			updateContact(inputName, inputEmail, inputAddress, inputPhone, id) {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					full_name: inputName,
					email: inputEmail,
					address: inputAddress,
					phone: inputPhone
				});

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.json())
					.then(result => getActions().getListContacts())
					.catch(error => console.log("error", error));
			}
		}
	};
};
export default getState;
