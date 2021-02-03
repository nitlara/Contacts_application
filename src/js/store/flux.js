const getState = ({ getStore, setStore }) => {
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
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/alvaro_agenda")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					})
					.catch(err => console.log("Request Failed", err));
			},
			// addToList: () => {
			// 	const store = getStore();
			// 	fetch("https://assets.breatheco.de/apis/fake/contact/", {
			// 		//NO SE EJECUTA EL PUT DE LOS DATOS RECOGIDOS
			// 		method: "POST",
			// 		headers: {
			// 			"content-type": "application/json"
			// 		},
			// 		body: JSON.stringify(store.contacts.push())
			// 	});
			// },
			addContact: (inputName, inputEmail, inputAddress, inputPhone) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				console.log(inputName, inputEmail, inputAddress, inputPhone);
				var raw = JSON.stringify({
					full_name: inputName,
					email: inputEmail,
					agenda_slug: "alvaro_agenda",
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
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
