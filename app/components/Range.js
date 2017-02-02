import React from 'react';
import './css/Range.css';

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.setRangeRef = this.setRangeRef.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e);
  }

  setRangeRef(input) {
    this.range = input;
  }

  componentWillReceiveProps(props) {
    this.range.value = props.value;
  }

  render() {
    return (
      <input type="range" value={this.props.value} min={this.props.min}
        max={this.props.max} step={this.props.step}
        onClick={this.onChange} onKeyDown={this.onChange} onMouseMove={this.onChange}
        onChange={this.props.onChange} ref={this.setRangeRef} />
    )
  }
}

Range.propTypes = {
  onChange: React.PropTypes.func,
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  value: React.PropTypes.number.isRequired,
  step: React.PropTypes.number.isRequired
};

export default Range;