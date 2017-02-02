import React, { PropTypes } from 'react';
import Variables from './Variables';
import Title from './Title';
import TotalCostContainer from '../containers/TotalCostContainer';

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Title />
                    <Variables />
                </div>
                <div className="col-md-6">
                    <TotalCostContainer />
                </div>
            </div>
        )
    }
}

export default App;