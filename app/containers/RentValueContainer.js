import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/variablesActions';
import Variable from '../components/Variable';

export class RentValueContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(value) {
        this.props.updateRentValue(value);
    }

    render() {
        return (
            <Variable minValue={100} maxValue={10000} step={10}
                value={this.props.rentValue} description="What is your target monthly rate?"
                type="money" handleValueChange={this.handleValueChange} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        rentValue: state.variables.rentValue
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateRentValue(value) {
        dispatch(actions.changeRentValue(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RentValueContainer);