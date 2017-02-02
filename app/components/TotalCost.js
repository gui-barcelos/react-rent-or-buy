import React, { PropTypes } from 'react';
import { Chart } from 'react-google-charts'

class TotalCost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Chart chartType="ColumnChart" width={"100%"} height={"400px"}
                        options={this.props.options} data={this.props.data} />
                </div>
            </div>
        );
    }
}

TotalCost.propTypes = {
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

export default TotalCost;