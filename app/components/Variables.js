import React, { PropTypes } from 'react';
import StateContainer from '../containers/StateContainer';
import RentValueContainer from '../containers/RentValueContainer';
import BuyValueContainer from '../containers/BuyValueContainer';
import LiveTimeValueContainer from '../containers/LiveTimeValueContainer';
import AnnualTaxValueContainer from '../containers/AnnualTaxValueContainer';

class Variables extends React.Component {
    render() {
        return (
            <div>
                <StateContainer />
                <RentValueContainer />
                <BuyValueContainer />
                <LiveTimeValueContainer />
                <AnnualTaxValueContainer />
            </div>

        );
    }
}

export default Variables;