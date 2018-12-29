import React from 'react';
import classnames from 'classnames';

class Edit extends React.Component {
  checkEnter = event => {
    if (event.key === 'Enter') {
      this.finishEdit(event);
    }
  };

  finishEdit = event => {
    const value = event.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  };

  render() {
    const {className, value, onEdit, ...props} = this.props;

    return (
      <input
        className={classnames('edit', className)}
        type="text"
        autoFocus={true}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        {...props}
      />
    );
  }
}

export default Edit;
