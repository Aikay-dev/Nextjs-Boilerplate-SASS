/* Components */
import React from 'react';
import Counter from '../components/Counter/Counter';

export default function IndexPage({ lng }: any) {
  return <Counter lng={lng} />;
}

export const metadata = {
  title: 'Basic Project scaffold',
};
