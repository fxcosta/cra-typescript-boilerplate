import React from 'react';
import Header from './Header';

import * as S from './styles';

type Children = {
  children: any;
  pageTitle?: string;
};

export const LayoutWrapper = ({ children }: Children) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  );
};
