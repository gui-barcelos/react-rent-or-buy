import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <App />
            </Provider>
        )
    }
};

Root.proptTypes = {
    store: PropTypes.object.isRequired
};

export default Root;