import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Root from '../../components/Root';
import { Provider } from 'react-redux';
import storeFake from '../fake/storeFake';

describe('<Root />', function () {
    const store = storeFake({});
    let props = {
        store: store
    };

    let Component;

    beforeEach(() => {
        Component = shallow(<Root {...props} />);
    });

    it('should render with Provider object', function () {
        expect(Component.find(Provider)).to.have.lengthOf(1);

        const providerComponentProps = Component.find(Provider).props();
        expect(providerComponentProps.store).to.be.equals(props.store);
    });
});