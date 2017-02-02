import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchStates } from '../actions/statesActions';
import { changeRentValue, changeBuyValue } from '../actions/variablesActions';
import State from '../components/State';

export class StateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChangeState = this.handleOnChangeState.bind(this);
    }

    componentDidMount() {
        this.props.fetchStates();
    }

    handleOnChangeState(event) {
        let state = this.props.states.find(e => e.UF == event.target.value);
        if (estado) {
            this.props.changeRentBuyDefaultValues(state.buy, state.rent);
        }
    }

    render() {
        return (
            <State states={this.props.states} onChangeState={this.handleOnChangeState} />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        states: state.states
    };
};

export const mapDispatchToProps = (dispatch) => ({
    changeRentBuyDefaultValues(buyValue, rentValue) {
        dispatch(changeBuyValue(buyValue));
        dispatch(changeRentValue(rentValue));
    },
    fetchStates() {
        dispatch(fetchStates());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(StateContainer);