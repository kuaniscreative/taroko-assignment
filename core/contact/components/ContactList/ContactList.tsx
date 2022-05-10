import clsx from "clsx";
import { ReactNode } from "react";
import classes from './contact-list.module.scss';

export interface ContactListProps {
  children?: ReactNode;
  className?: string;
}

function ContactList(props: ContactListProps) {
  const {
    children,
    className
  } = props;

  return (
    <div className={clsx(
      classes.root,
      className
    )}>
      {children}
    </div>
  )
}

export default ContactList
