import { FC } from 'react';
import cn from 'classnames';
import styles from './container.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Container: FC<Props> = ({ className, children }) => (
  <div className={cn(styles.container, className)}>{children}</div>
);

export default Container;
