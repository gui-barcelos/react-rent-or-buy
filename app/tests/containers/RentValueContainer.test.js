import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { RentValueContainer, mapDispatchToProps } from '../../containers/RentValueContainer';
import *  as actions from '../../actions/variablesActions';
import Variable from '../../components/Variable';

describe('<RentValueContainer />', function () {

    it('should render presentional component', function () {
        let Component = shallow(<RentValueContainer rentValue={100} />);

        expect(Component.find(Variable)).to.has.lengthOf(1);

        const variableProps = Component.find(Variable).props();

        expect(variableProps.minValue).to.be.equal(100);
        expect(variableProps.maxValue).to.be.equal(10000);
        expect(variableProps.step).to.be.equal(10);
        expect(variableProps.value).to.be.equal(100);
        expect(variableProps.description).to.be.equal("What is your target monthly rate?");
        expect(variableProps.type).to.be.equal("money");
    });

    describe('mapDispatchToProps', () => {
        it('mapDispatchToProps should be injected', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            expect(result.updateRentValue).to.exist;
        });

        it('should dispatch updateRentValue', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            result.updateRentValue();

            expect(dispatch.calledOnce).to.be.true;
        });
    });
});