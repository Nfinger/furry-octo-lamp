/**
 *
 * Auth
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Auth = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Div>
      Wue?
    </Div>
  );
});

const Div = styled.div`
  background: red;
`;