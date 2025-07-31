import ContactItem from '../ContactItem/ContactItem'

const ContactList = ({contacts}) => {
  <div>
    {contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} />
    ))}
  </div>
 
};

export default ContactList;

