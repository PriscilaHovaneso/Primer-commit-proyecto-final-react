import React, { useState} from 'react';
import ContactList from  '../../Components/ContactList/ContactList';
import { getContactList } from '../../Services/contactService';
import { getContactById } from '../../Services/contactService'



const ContactScreen = () => {
    const contacts =  getContactList()

  const [contactsState, setContactsState] = useState(contacts);
    
  return (
        <div>
            <ContactList contacts={contactsState} />
        </div>
    );
};

export default ContactScreen;