import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { BuyValueContainer, mapDispatchToProps } from '../../containers/BuyValueContainer';
import *  as actions from '../../actions/variablesActions';
import Variable from '../../components/Variable';

describe('<BuyValueContainer />', function () {

    it('should render presentional component', function () {
        let Component = shallow(<BuyValueContainer buyValue={100000} />);

        expect(Component.find(Variable)).to.has.lengthOf(1);

        const variableProps = Component.find(Variable).props();

        expect(variableProps.minValue).to.be.equal(10000);
        expect(variableProps.maxValue).to.be.equal(2000000);
        expect(variableProps.step).to.be.equal(100);
        expect(variableProps.value).to.be.equal(100000);
        expect(variableProps.description).to.be.equal("What is your target home price?");
        expect(variableProps.type).to.be.equal("money");
    });

    describe('mapDispatchToProps', () => {
        it('mapDispatchToProps should be injected', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            expect(result.updateBuyValue).to.exist;
        });

        it('should dispatch updateBuyValue', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            result.updateBuyValue();

            expect(dispatch.calledOnce).to.be.true;
        });
    });
});