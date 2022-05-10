import clsx from 'clsx';
import { ComponentPropsWithoutKeyAndRef } from '@/utils/jsx-types';
import classes from './button.module.scss';

export type ButtonProps = ComponentPropsWithoutKeyAndRef<'button'>;

function Button(props: ButtonProps) {
  const {
    className,
    children,
    ...restProps
  } = props;

  return (
    <button 
      {...restProps} 
      className={clsx(
        classes.root, 
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button;
