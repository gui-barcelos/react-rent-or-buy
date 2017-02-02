import React, { PropTypes } from 'react';
import Range from './Range';
import numeraljs from 'numeraljs';

class Variable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const handleChange = (e) => {
            this.props.handleValueChange(Number(e.target.value));
        }

        const getValue = () => {
            switch (this.props.type) {
                case 'money':
                    return `$ ${numeraljs(this.props.value) .format('0,0')}`;
                case 'percent':
                    return `${this.props.value} %`;
                case 'time':
                    return `${this.props.value} Year(s)`;
                default:
                    return this.props.value;
            }
        };

        return (
            <div>
                <div id="dv-description" className="row">
                    <div className="col-lg-12 clearfix">
                        <p className="h5 float-left">
                        <small className="text-muted">
                            {this.props.description}
                        </small>
                        </p>
                        <p className="h5 float-right"> <strong>{getValue()} </strong></p>
                    </div>
                </div>
                <div id="dv-range" className="row">
                    <div className="col-md-12">
                        <Range
                            min={this.props.minValue}
                            max={this.props.maxValue}
                            step={this.props.step}
                            value={this.props.value}
                            onChange={handleChange}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

Variable.propTypes = {
    handleValueChange: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    type: PropTypes.string
};

export default Variable;