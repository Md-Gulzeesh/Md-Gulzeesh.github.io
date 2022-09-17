import React from 'react';
import "./Button.css";

const Button = ({className,children}) => {
  return <button className={className? className : "solid_btn"}>{children}</button>;
}

export default Button;