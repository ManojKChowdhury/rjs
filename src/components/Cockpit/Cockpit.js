import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log('Use effect');
  });
    
  const assignedClasses = [];
  let btnClass = '';
  if( props.showPersons ){
      btnClass = classes.Red;
  }
  if( props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if( props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join('')}>It works</p>
          <button 
              className={btnClass}
              onClick={props.clicked}>Toggle Persons</button>
      </div>
  );
};

export default cockpit;