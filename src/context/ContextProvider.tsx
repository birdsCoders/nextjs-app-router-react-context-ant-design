'use client';
import { FC, useEffect, useState } from 'react';
import { PageContext, PageContextType } from './pageContext';

type Props = {
  children: React.ReactNode;
};

// Mock user data
const user = { name: 'Tom Cruse', gender: 'Male', age: 32 };

const ContextProvider: FC<Props> = ({ children }) => {
  const [contextState, setContextState] = useState<PageContextType>({
    user: null,
  });

  useEffect(() => {
    //...get user logic
    setContextState({ user });
  }, []);

  return (
    <PageContext.Provider
      value={{
        user: contextState.user,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default ContextProvider;
