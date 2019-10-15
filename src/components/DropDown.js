import React from "react";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.defaultOption || "0"
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const val = e.target.value;
    if (val !== "0") {
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
  }
  render() {
    const { name, label, options } = this.props;
    const { selectedValue } = this.state;
    return (
      <label htmlFor={name}>
        {label}
        <select
          id={name}
          value={selectedValue}
          onChange={this.onChange}
          onBlur={this.onChange}
          disabled={!options.length}
        >
          <option value="0" disabled>
            Choose {label}
          </option>
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
export default DropDown;
