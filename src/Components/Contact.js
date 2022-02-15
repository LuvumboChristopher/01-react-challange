import React from 'react';

const Contact = (props)=> {
  return(
    <div>
      <div>
        <h3>{props.name}</h3>
        <h4>📞 {props.phone}</h4>
        <h4>{props.email}</h4>
        <button>Delete</button>
      </div>
    </div>
  )
}

export  default Contact;