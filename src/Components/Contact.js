import React from 'react';

const Contact = (props) => {
  const isDeletable = props.isDeletable;

  console.log(isDeletable);

  return (
    <div class='contact-info'>
      <div class='frind-item'>
        <h3>👨{props.name}</h3>
        <h5>📞 {props.phone}</h5>
        <h5>{props.email}</h5>
        {props.isDeletable ? <button class='friend-item button delete-btn'>Delete</button> : null}
      </div>
    </div>
  );
};

export default Contact;
