import React from 'react';
import Provider from './provider/Provider';

const Providers = props => {
  console.log (props.providerdetails);
  return <Provider providerdetails={props.providerdetails} />;
};

export default Providers;
