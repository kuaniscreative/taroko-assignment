import Button from '@/ui/button/Button';
import classes from './home-header.module.scss';

function HomeHeader() {
  return (
    <div className={classes.root}>
      <h1 className={classes.brand}>
        Contact List.
      </h1>
      <Button className={classes.btn}>
        + New Contact
      </Button>
    </div>
  )
}

export default HomeHeader
