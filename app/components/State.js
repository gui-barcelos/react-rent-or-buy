import React, { PropTypes } from 'react';

class State extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-5 clearfix">
                    <p className="float-left">Select you State: </p>
                    <select className="float-right" onChange={this.props.onChangeState}>
                        {this.props.states.map(function (state) {
                            return <option key={state.uf} value={state.uf}>{state.uf}</option>
                        })}
                    </select>
                </div>
            </div>

        );
    }
}

State.propTypes = {
    onChangeState: PropTypes.func.isRequired,
    states: PropTypes.array.isRequired
};

export default State;