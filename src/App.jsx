import { useState } from "react";
import "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import style from "./App.module.css";

import { FaAddressBook } from "react-icons/fa";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(defaultContacts);
  return (
    <>
      <Section>
        <Container>
          <div className={style.container}>
            <FaAddressBook className={style.icon} />
            <h1 className={style.title}>Phonebook</h1>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h1>Phonebook</h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <h1>Phonebook</h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactList contacts={contacts} />
        </Container>
      </Section>
    </>
  );
}

export default App;
