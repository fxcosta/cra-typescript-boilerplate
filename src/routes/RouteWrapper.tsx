/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  layout: Layout,
  isPrivate = false,
  pageTitle = '',
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout pageTitle={pageTitle} {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
