import React, { useState } from "react";
import { Box } from "../Box/Box";
import Title from "components/Title/Title";
import PhoneForm from "components/PhoneForm/PhoneForm";
import Contacts from "components/Contacts/Contacts";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, addContact, deleteContact } from "redux/contactsSlice";
import { filterValue, getFilter } from "redux/filterSlice";

function App() {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);

	const dispatch = useDispatch();

	const createContact = (contactName, tel) => {
		const isContactExists = contacts.some(
			contact => contact.contactName === contactName
		);

		if (isContactExists) {
			alert(`${contactName} is already in contacts`);
			return;
		}
		dispatch(addContact(contactName, tel));
	};
	const handleDelete = contactId => {
		dispatch(deleteContact(contactId));
	};

	const changeFilter = e => {
		dispatch(filterValue(e.currentTarget.value));
	};

	const normalizedFilter = filter.toLowerCase();
	const visibleContacts = contacts.filter(contact =>
		contact.contactName.toLowerCase().includes(normalizedFilter)
	);

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			margin={4}
		>
			<Title text={"Phonebook"} />
			<PhoneForm onCreateContact={createContact} />
			<Title text={"Contacts"} />
			<Contacts
				onChange={changeFilter}
				value={filter}
				contacts={visibleContacts}
				onDelete={handleDelete}
			/>
		</Box>
	);
}

export default App;
