import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Variable from '../../components/Variable';
import Range from '../../components/Range';

describe('<Variable />', function () {
    it('should render', function () {
        let props = {
            description: 'test',
            minValue: 1,
            maxValue: 10,
            value: 5,
            step: 1,
            type: 'money',
            handleValueChange: sinon.spy()
        };

        const wrapper = shallow(<Variable {...props} />);

        expect(wrapper.find('#dv-description').html()).to.contain(props.description);
        expect(wrapper.find(Range)).to.have.lengthOf(1);

        const rangeComponentProps = wrapper.find(Range).props();
        expect(rangeComponentProps.min).to.be.equal(props.minValue);
        expect(rangeComponentProps.max).to.be.equal(props.maxValue);
        expect(rangeComponentProps.value).to.be.equal(props.value);
        expect(rangeComponentProps.step).to.be.equal(props.step);
        expect(rangeComponentProps.onChange).to.be.a('function');
    });

    it('should format money type', function () {
        let props = {
            description: 'test',
            minValue: 1,
            maxValue: 2000,
            value: 1000,
            step: 1,
            type: 'money',
            handleValueChange: sinon.spy()
        };

        const wrapper = shallow(<Variable {...props} />);

        expect(wrapper.find('#dv-description').html()).to.contain('$ 1,000');
    });

    it('should format percent type', function () {
        let props = {
            description: 'test',
            minValue: 1,
            maxValue: 25,
            value: 3,
            step: 1,
            type: 'percent',
            handleValueChange: sinon.spy()
        };

        const wrapper = shallow(<Variable {...props} />);

        expect(wrapper.find('#dv-description').html()).to.contain('3 %');
    });

    it('should format time type', function () {
        let props = {
            description: 'test',
            minValue: 1,
            maxValue: 25,
            value: 3,
            step: 1,
            type: 'time',
            handleValueChange: sinon.spy()
        };

        const wrapper = shallow(<Variable {...props} />);

        expect(wrapper.find('#dv-description').html()).to.contain('3 Year(s)');
    });
});