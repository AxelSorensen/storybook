import React, { useState } from 'react';
import './button.css';

interface ButtonProps {

  padding: number
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick(): any,
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  padding,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => {

  const handleClick = () => {
    setTest('hello');
    onClick();
  }
  const [test, setTest] = useState('')
  const paddingValues = {
    2: 'p-2',
    4: 'p-4',
    16: 'p-16'
  }
  return (
   
    <button
      type="button" onClick={handleClick}
      className={`${paddingValues[padding]} bg-teal-400`}
    >
      {test || label }
    </button>
  );
};
