import Contact from "../Contact/Contact";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <Contact data={contact} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
