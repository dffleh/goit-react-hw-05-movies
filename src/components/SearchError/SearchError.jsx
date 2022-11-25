import React from 'react';
import { ErrWrap } from './SearchError.styled';

export const SearchError = ({ message }) => {
  return (
    <ErrWrap>
      <p>{message}</p>
    </ErrWrap>
  );
};
