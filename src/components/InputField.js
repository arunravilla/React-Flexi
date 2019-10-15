import React from "react";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const val = e.target.value;
    this.setState(
      {
        selectedValue: val
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(val, this.props.index, this.props.name);
        }
      }
    );
  }
  render() {
    const { name, label, onChange } = this.props;
    const { selectedValue } = this.state;
    return (
      <label htmlFor={name}>
        {label}
        <input
          type="text"
          name={name}
          value={selectedValue}
          placeholder={label}
          onChange={this.onChange}
        />
      </label>
    );
  }
}
export default DropDown;
