import React from "react";
import DropDown from "./components/DropDown";
import InputField from "./components/InputField";

class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: { ...props.config } || {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onDropDownChange = this.onDropDownChange.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    // Replace data with composing your form data
    const data = { ...this.state.config };
    this.props.onSubmit(data); // dont edit this line
  };

  onInputChange(val, index, name) {
    let config = { ...this.state.config };
    this.insertValueToConfig(val, config, name, index);
  }

  onDropDownChange(val, index, name) {
    let config = { ...this.state.config };
    this.insertValueToConfig(val, config, name, index);
  }

  insertValueToConfig(val, config, name, index) {
    const item = config[index];
    if (item && item.name === name) {
      config[index].value = val;
      item.value = val;
      this.setState({ config });
    } else {
      const itemIndex = item.children.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        item.children[itemIndex].value = val;
        this.setState({ config });
      }
    }
  }

  _renderElement(type, name, label, itemIndex, values, isChild) {
    if (type === "TextField") {
      return (
        <InputField
          key={`${name}_${itemIndex}`}
          name={name}
          label={label}
          onChange={this.onInputChange}
          index={itemIndex}
          isChild={isChild}
        />
      );
    } else {
      return (
        <DropDown
          key={`${name}_${itemIndex}`}
          name={name}
          label={label}
          options={values}
          onChange={this.onDropDownChange}
          index={itemIndex}
          isChild={isChild}
        />
      );
    }
  }

  _renderForm(items, idx) {
    const self = this;
    let val = null;
    if (Array.isArray(items)) {
      val = items.map(({ name, label, type, children, values }, itemIndex) => {
        if (children) {
          const parentElement = self._renderElement(
            type,
            name,
            label,
            itemIndex,
            values
          );
          const childElements = self._renderForm(children, itemIndex);
          return [parentElement, childElements];
        } else {
          return self._renderElement(type, name, label, itemIndex, values);
        }
      });
    } else {
      const { name, label, type, children, values } = items;
      val = self._renderElement(type, name, label, idx, values);
    }
    return val;
  }

  render() {
    const { config } = this.props;
    return (
      <form>
        {/* Do your stuff here */}
        {this._renderForm(config)}
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Flexi;
