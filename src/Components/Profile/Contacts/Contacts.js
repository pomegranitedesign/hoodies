import React from "react";
import styled from "styled-components";

import Contact from "./Contact";
import AddContact from "./AddContact";

const Contacts = ({ contacts, addContact }) => {
	return (
		<Wrapper>
			{contacts.map(contact => (
				<Contact
					name={`${contact.first_name} ${contact.last_name}`}
					key={contact.id}
					id={contact.id}
				/>
			))}

			<AddContact addContact={addContact} contacts={contacts} />
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.ul`
	margin-top: 75px;
`;

export default Contacts;
