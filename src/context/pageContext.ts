import { createContext, useContext } from 'react';
import { UserType } from '@/types';

export type PageContextType = {
  user: UserType | null;
};

export const PageContext = createContext<PageContextType>({
  user: null,
});

export const usePageContext = () => useContext<PageContextType>(PageContext);
