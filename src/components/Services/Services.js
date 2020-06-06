import React from 'react';
import Service from './Service/Service';
import List from '@material-ui/core/List';

const Services = ({services, onServiceClickHandler}) => {
  return (
    <div>
      {services.map (service => (
        <List component="nav" aria-label="contacts">
          <Service
            key={service.id}
            serviceName={service.attributes.name}
            onServiceClickHandler={onServiceClickHandler}
          />
        </List>
      ))}
    </div>
  );
};

export default Services;
