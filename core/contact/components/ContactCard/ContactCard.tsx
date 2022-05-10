import clsx from 'clsx';
import Button from '@/ui/button/Button';
import classes from './contact-card.module.scss';

export interface ContactCardProps {
  firstName?: string;
  lastName?: string;
  job?: string;
  description?: string;
}

function ContactCard(props: ContactCardProps) {
  const {
    firstName,
    lastName,
    job,
    description,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.name}>
          {clsx(
            firstName,
            lastName
          )}
        </h2>
        <div className={classes["action-group"]}>
          <Button>
            update
          </Button>
          <Button>
            delete
          </Button>
        </div>
      </div>
      <div className={classes.description}>
        <span>
          {clsx(
            "Job:",
            job || "-"
          )}
        </span>
        <span>
        {clsx(
            "Description:",
            description || "-"
          )}
        </span>
      </div>
    </div>
  )
}

export default ContactCard
