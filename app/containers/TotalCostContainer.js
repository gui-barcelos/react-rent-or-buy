import React from 'react';
import interest from 'interestjs';
import { Loan } from 'loanjs';
import { connect } from 'react-redux';
import TotalCost from '../components/TotalCost';

class TotalCostContainer extends React.Component {
    constructor(props) {
        super(props);

        this.getRentTotalValue = this.getRentTotalValue.bind(this);
        this.getBuyTotalValue = this.getBuyTotalValue.bind(this);
    }

    getRentTotalValue() {
        const variables = this.props.variables;
        const valor = new interest(
            Number(variables.rentValue),
            Number(variables.liveTimeValue) * 12,
            Number(variables.annualTaxValue));

        return valor.sum;
    };

    getBuyTotalValue() {
        const variables = this.props.variables;
        const valor = new Loan(
            Number(variables.buyValue),
            Number(variables.liveTimeValue) * 12,
            Number(variables.annualTaxValue),
            true);

        return valor.sum;
    };

    render() {
        const dataSourceChart = [
            ['Option', 'Value', { role: 'style' }],
            ['Buy', this.getBuyTotalValue(), '#2EBA24'],
            ['Rent', this.getRentTotalValue(), '#F3A33A']
        ];

        const options = {
            title: 'Total Cost ($)',
            titleTextStyle: {
                fontName: 'Segoe UI',
                fontSize: 25,
                bold: true
            },
            hAxis: { minValue: 0 },
            vAxis: { minValue: 0, format: 'decimal' },
            legend: 'none'
        };

        return (
            <TotalCost options={options} data={dataSourceChart} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        variables: state.variables
    };
};


export default connect(mapStateToProps)(TotalCostContainer);