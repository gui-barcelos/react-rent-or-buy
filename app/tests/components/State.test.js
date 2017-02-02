import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import State from '../../components/State';

describe('<State />', function () {
    const data = [{ uf: 'RJ' }, { uf: 'SP' }],
        onChange = sinon.spy();
    let Component;

    beforeEach(() => {
        Component = shallow(<State states={data} onChangeState={onChange} />);
    });

    it('should render 2 option items', function () {
        expect(Component.find('option')).to.have.lengthOf(2);
    });

    it('should call onChangeState function', function () {
        Component.find('select').simulate('change');

        expect(onChange.callCount).to.be.equal(1);
    });
});