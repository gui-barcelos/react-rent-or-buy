import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { LiveTimeValueContainer, mapDispatchToProps } from '../../containers/LiveTimeValueContainer';
import *  as actions from '../../actions/variablesActions';
import Variable from '../../components/Variable';

describe('<LiveTimeValueContainer />', function () {

    it('should render presentional component', function () {
        let Component = shallow(<LiveTimeValueContainer liveTimeValue={10} />);

        expect(Component.find(Variable)).to.has.lengthOf(1);

        const variableProps = Component.find(Variable).props();

        expect(variableProps.minValue).to.be.equal(1);
        expect(variableProps.maxValue).to.be.equal(30);
        expect(variableProps.step).to.be.equal(1);
        expect(variableProps.value).to.be.equal(10);
        expect(variableProps.description).to.be.equal("How long would you live there?");
        expect(variableProps.type).to.be.equal("time");
    });

    describe('mapDispatchToProps', () => {
        it('mapDispatchToProps should be injected', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            expect(result.updateLiveTimeValue).to.exist;
        });

        it('should dispatch updateLiveTimeValue', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            result.updateLiveTimeValue();

            expect(dispatch.calledOnce).to.be.true;
        });
    });
});