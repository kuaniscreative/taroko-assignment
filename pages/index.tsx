import ContactCard from "@/core/contact/components/ContactCard/ContactCard";
import ContactList from "@/core/contact/components/ContactList/ContactList";
import { useQuery } from 'react-query';
import { getContacts } from "../core/contact/api/contacts";
import { Contact } from "@/core/contact/typing";
import { CONTACTS_QUERY_KEY } from "@/core/contact/constant";
import classes from './index.module.scss';


export default function Home() {
  // fetch contacts
  const { 
    data
  } = useQuery<QueryResult<Contact[]>>(CONTACTS_QUERY_KEY, getContacts);
  const {
    data: contacts
  } = data || {};

  console.log(contacts, 'contacts');
  
  
  return (
    <div className={classes.root}>
      <ContactList>
        {contacts?.map(({
          id,
          first_name,
          last_name,
          job,
          description,
        }) => (
          <ContactCard 
            key={id}
            firstName={first_name}
            lastName={last_name}
            job={job}
            description={description}
          />
        ))}
      </ContactList>
    </div>
  )
}
