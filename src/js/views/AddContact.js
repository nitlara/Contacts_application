import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	console.log(id);

	var inputName = "";
	var inputEmail = "";
	var inputPhone = "";
	var inputAddress = "";

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => {
								inputName = e.target.value;
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => {
								inputEmail = e.target.value;
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => {
								inputPhone = e.target.value;
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => {
								inputAddress = e.target.value;
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addContact(inputName, inputEmail, inputAddress, inputPhone);
							//actions.addToList();
						}}>
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Back home
					</Link>
				</form>
			</div>
		</div>
	);
};
