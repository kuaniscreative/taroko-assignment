import { ReactNode } from "react";
import classes from './contact-list.module.scss';

export interface ContactListProps {
  children?: ReactNode;
}

function ContactList(props: ContactListProps) {
  const {
    children
  } = props;

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default ContactList
