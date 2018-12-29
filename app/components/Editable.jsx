import React from 'react';
import Edit from './Edit';
import classnames from 'classnames';

const Editable = ({editing, value, onEdit, className, ...props}) => {
  if (editing) {
    return (
      <Edit className={className} value={value} onEdit={onEdit} {...props} />
    );
  }
  return (
    <span className={classnames('value', className)} {...props}>
      {value}
    </span>
  );
};

export default Editable;
