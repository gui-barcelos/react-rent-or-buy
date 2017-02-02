import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Variables from '../../components/Variables';
import StateContainer from '../../containers/StateContainer';
import RentValueContainer from '../../containers/RentValueContainer';
import BuyValueContainer from '../../containers/BuyValueContainer';
import LiveTimeValueContainer from '../../containers/LiveTimeValueContainer';
import AnnualTaxValueContainer from '../../containers/AnnualTaxValueContainer';

describe('<Variables />', function () {
    it('should render', function () {
        const wrapper = shallow(<Variables  />);
        expect(wrapper.find(StateContainer)).to.have.lengthOf(1);
        expect(wrapper.find(RentValueContainer)).to.have.lengthOf(1);
        expect(wrapper.find(BuyValueContainer)).to.have.lengthOf(1);
        expect(wrapper.find(LiveTimeValueContainer)).to.have.lengthOf(1);
        expect(wrapper.find(AnnualTaxValueContainer)).to.have.lengthOf(1);
    });
});