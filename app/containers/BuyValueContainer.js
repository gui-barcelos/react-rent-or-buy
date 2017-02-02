import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/variablesActions';
import Variable from '../components/Variable';

export class BuyValueContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(value) {
        this.props.updateBuyValue(value);
    }

    render() {
        return (
            <Variable minValue={10000} maxValue={2000000} defaultValue={100000} step={100}
                value={this.props.buyValue} description="What is your target home price?"
                type="money" handleValueChange={this.handleValueChange} />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        buyValue: state.variables.buyValue
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateBuyValue(value) {
        dispatch(actions.changeBuyValue(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyValueContainer);