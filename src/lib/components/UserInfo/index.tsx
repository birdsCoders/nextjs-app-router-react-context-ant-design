'use client';
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Descriptions } from 'antd';
import { usePageContext } from '@/context/pageContext';

const UserInfo: FC = () => {
  const { user } = usePageContext();
  const t = useTranslations('USER');

  return (
    <Descriptions title={t('INFO')}>
      <Descriptions.Item label={t('NAME')}>{user?.name}</Descriptions.Item>
      <Descriptions.Item label={t('GENDER')}>{user?.gender}</Descriptions.Item>
      <Descriptions.Item label={t('AGE')}>{user?.age}</Descriptions.Item>
    </Descriptions>
  );
};

export default UserInfo;
