import { FC } from 'react';
import Container from '../Container';
import LanguageSwitcher from '../LanguageSwitcher';
import Menu from '../Menu';
import styles from './header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <Container className={styles.headerContent}>
      <Menu />
      <LanguageSwitcher />
    </Container>
  </header>
);

export default Header;
