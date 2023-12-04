import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import styles from './menu.module.scss';

const Menu: FC = () => {
  const t = useTranslations('MENU');

  return (
    <ul className={styles.menu}>
      <li>
        <Link href="/">{t('HOME')}</Link>
      </li>
      <li>
        <Link href="/about">{t('ABOUT')}</Link>
      </li>
    </ul>
  );
};

export default Menu;
