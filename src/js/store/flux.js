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
				fetch("https://assets.breatheco.de/apis/fake/contact/1984")
					.then(response => response.json())
					.then(data => {
						setStore(data);
					})
					.catch(err => console.log("Request Failed", err));
			},
			addToList: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/1984", {
					//NO SE EJECUTA EL PUT DE LOS DATOS RECOGIDOS
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(store.contacts.push(-1))
				});
			},
			addContact: (inputName, inputEmail, inputAddress, inputPhone) => {
				getStore().contacts.push({
					full_name: inputName,
					email: inputEmail,
					address: inputAddress,
					phone: inputPhone
				});
			}
		}
	};
};

export default getState;
