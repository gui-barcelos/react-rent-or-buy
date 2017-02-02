import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Range from '../../components/Range';

describe('<Range />', function () {
    let props = {
        min: 1,
        max: 10,
        value: 5,
        step: 1,
        onChange: sinon.spy()
    };
    let Component;

    beforeEach(() => {
        Component = shallow(<Range {...props} />);
    });

    it('should render', function () {
        const input = Component.find('input[type="range"]');
        expect(input).to.have.lengthOf(1);
        expect(input.prop('min')).to.be.equal(props.min);
        expect(input.prop('max')).to.be.equal(props.max);
        expect(input.prop('value')).to.be.equal(props.value);
        expect(input.prop('step')).to.be.equal(props.step);
    });

    it('should call onChange function', function () {
        Component.find('input[type="range"]').simulate('change');

        expect(props.onChange.callCount).to.be.equals(1);
    });
});