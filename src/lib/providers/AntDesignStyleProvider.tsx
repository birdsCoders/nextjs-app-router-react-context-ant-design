'use client';
import React, { useRef, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

const AntDesignStyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [cache] = useState(() => createCache());
  const isServerInserted = useRef<boolean>(false);

  useServerInsertedHTML(() => {
    if (isServerInserted.current) {
      return;
    }

    isServerInserted.current = true;

    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntDesignStyleProvider;
