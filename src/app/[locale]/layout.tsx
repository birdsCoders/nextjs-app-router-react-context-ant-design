import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Mulish } from 'next/font/google';
import { PageParamsType } from '@/types';
import AntDesignProvider from '@/lib/providers/AntDesignProvider';
import ContextProvider from '@/context/ContextProvider';
import Header from '@/lib/components/Header';
import '@/theme/styles.scss';

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

// Common Layout for all routes
const RootLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: PageParamsType;
}) => {
  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={mulish.className}
    >
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <ContextProvider>
            <AntDesignProvider>
              <div>
                <Header />
                <main>{children}</main>
              </div>
            </AntDesignProvider>
          </ContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
