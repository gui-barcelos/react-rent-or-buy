import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/variablesActions';
import Variable from '../components/Variable';

export class LiveTimeValueContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(value) {
        this.props.updateLiveTimeValue(value);
    }

    render() {
        return (
            <Variable minValue={1} maxValue={30} defaultValue={10} step={1}
                value={this.props.liveTimeValue} description="How long would you live there?"
                type="time" handleValueChange={this.handleValueChange} />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        liveTimeValue: state.variables.liveTimeValue
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateLiveTimeValue(value) {
        dispatch(actions.changeLiveTimeValue(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveTimeValueContainer);