import React from 'react';
import Container from '@/lib/components/Container';

// Layout for other routes
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <Container>{children}</Container>
);

export default RootLayout;
