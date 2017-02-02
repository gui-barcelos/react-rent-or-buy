import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { AnnualTaxValueContainer, mapDispatchToProps } from '../../containers/AnnualTaxValueContainer';
import *  as actions from '../../actions/variablesActions';
import Variable from '../../components/Variable';

describe('<AnnualTaxValueContainer />', function () {

    it('should render presentional component', function () {
        let Component = shallow(<AnnualTaxValueContainer annualTaxValue={11.5} />);

        expect(Component.find(Variable)).to.has.lengthOf(1);

        const variableProps = Component.find(Variable).props();

        expect(variableProps.minValue).to.be.equal(0.5);
        expect(variableProps.maxValue).to.be.equal(25);
        expect(variableProps.step).to.be.equal(0.5);
        expect(variableProps.value).to.be.equal(11.5);
        expect(variableProps.description).to.be.equal("What is you annual tax rate?");
        expect(variableProps.type).to.be.equal("percent");
    });

    describe('mapDispatchToProps', () => {
        it('mapDispatchToProps should be injected', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            expect(result.updateAnnualTaxValue).to.exist;
        });

        it('should dispatch updateAnnualTaxValue', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            result.updateAnnualTaxValue();

            expect(dispatch.calledOnce).to.be.true;
        });
    });
});