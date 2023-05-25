import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: [],
	reducers: {
		addContact: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(contactName, tel) {
				const id = nanoid();
				return {
					payload: {
						id,
						contactName,
						tel
					}
				};
			}
		},
		deleteContact(state, action) {
			return state.filter(contact => contact.id !== action.payload);
		}
	}
});

export const getContacts = state => state.contacts;

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
