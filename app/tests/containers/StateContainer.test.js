import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { StateContainer, mapDispatchToProps } from '../../containers/StateContainer';
import *  as actions from '../../actions/statesActions';
import State from '../../components/State';

describe('<StateContainer />',  () => {
    const props = {
        states: [],
        handleOnChangeState: sinon.spy(),
    };

    let Component;

    beforeEach(() => {
        Component = shallow(<StateContainer {...props} />);
    });

    it('should render presentional component', function () {
        expect(Component.find(State)).to.has.lengthOf(1);
    });

    describe('mapDispatchToProps', () => {
        it('mapDispatchToProps should be injected', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            expect(result.changeRentBuyDefaultValues).to.exist;
            expect(result.fetchStates).to.exist;
        });

        it('should dispatch fetchStates', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            result.fetchStates();

            expect(dispatch.calledOnce).to.be.true;
        });

        it('should dispatch changeRentBuyDefaultValues', () => {
            const dispatch = sinon.spy();
            const result = mapDispatchToProps(dispatch);

            result.changeRentBuyDefaultValues(1,1);

            expect(dispatch.calledTwice).to.be.true;
        });
    });
});