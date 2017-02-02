import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/variablesActions';
import Variable from '../components/Variable';

export class AnnualTaxValueContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(value) {
        this.props.updateAnnualTaxValue(value);
    }

    render() {
        return (
            <Variable minValue={0.5} maxValue={25} defaultValue={11.5} step={0.5}
                value={this.props.annualTaxValue} description="What is you annual tax rate?"
                type="percent" handleValueChange={this.handleValueChange} />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        annualTaxValue: state.variables.annualTaxValue
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateAnnualTaxValue(valor) {
        dispatch(actions.changeAnnualTaxValue(valor));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnualTaxValueContainer);