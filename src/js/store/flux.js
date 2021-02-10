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
			},

			//delete contact elimina contacto por fetch DELETE con id y hace un fetch GET nuevo para que traiga contactos otra vez
			//temazo como llamo id
			deleteContact: (id, callback) => {
				//let store = getStore();
				//	console.log(inputName, inputEmail, inputAddress, inputPhone);
				console.log(id);
				var requestOptions = {
					method: "DELETE",
					//	headers: myHeaders,
					//	body: raw,
					redirect: "follow"
				};

				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.text())
					.then(result => callback)
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
