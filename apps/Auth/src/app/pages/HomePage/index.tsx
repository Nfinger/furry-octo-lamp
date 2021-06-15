import { Auth } from '../../components/Auth/Loadable';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Auth />
      <span>HomePage </span>
    </>
  );
}
