import React from 'react';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageType } from '@/types';

export async function generateMetadata({ params: { locale } }: PageType) {
  const t = await getTranslations({ locale, namespace: 'METADATA' });
  return { title: t('ABOUT_TITLE') };
}

const AboutPage = () => {
  const t = useTranslations();

  return <h1>{t('TITLE_ABOUT')}</h1>;
};

export default AboutPage;
