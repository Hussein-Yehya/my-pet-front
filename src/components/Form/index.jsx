import React, { PureComponent } from 'react';
import InputGroup from '../InputGroup';

class Form extends PureComponent {
  state = this.props.formState;

  render() {
    const { onSubmit, inputList } = this.props;

    return (
      <form onSubmit={onSubmit}>
        {inputList.map((item, index) => (
          <InputGroup
            key={index}
            className={item.className}
            field={item.field}
            label={item.label}
            value={item.value}
            type={item.type}
            onChange={this.changeHandler}
          />
        ))}
      </form>
    );
  }
}

export default Form;
