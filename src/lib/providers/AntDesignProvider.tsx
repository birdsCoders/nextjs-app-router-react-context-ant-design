'use client';
import { FC } from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/theme/antTheme';
import AntDesignStyleProvider from './AntDesignStyleProvider';

type Props = {
  children: React.ReactNode;
};

const AntDesignProvider: FC<Props> = ({ children }) => (
  <AntDesignStyleProvider>
    <ConfigProvider theme={theme}>{children}</ConfigProvider>
  </AntDesignStyleProvider>
);

export default AntDesignProvider;
