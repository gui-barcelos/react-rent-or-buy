import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TotalCost from '../../components/TotalCost';
import { Chart } from 'react-google-charts'

describe('<TotalCost />', function () {
    let props = {
        options: {},
        data: []
    };

    let Component;

    beforeEach(() => {
        Component = shallow(<TotalCost {...props} />);
    });

    it('should render', function () {
        expect(Component.find(Chart)).to.have.lengthOf(1);

        const chartComponentProps = Component.find(Chart).props();
        expect(chartComponentProps.options).to.be.equals(props.options);
        expect(chartComponentProps.data).to.be.equals(props.data);
        expect(chartComponentProps.chartType).to.be.equals('ColumnChart');
    });
});