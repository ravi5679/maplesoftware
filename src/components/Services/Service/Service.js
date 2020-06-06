import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Service = ({serviceName, onServiceClickHandler}) => {
  return (
    <ListItem
      style={{color: '#ffffff', backgroundColor: '#8787F0'}}
      button
      onClick={() => onServiceClickHandler (serviceName)}
    >
      <ListItemText primary={serviceName} />
    </ListItem>
  );
};

export default Service;
