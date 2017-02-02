import reducer, { getInitialState } from '../../reducers/variables';
import * as types from '../../constants/actionTypes';

describe('variables reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(getInitialState());
    });

    debugger;
    it('should handle CHANGE_RENT_VALUE', () => {
        let request = getInitialState();
        request.rentValue = 1;

        expect(
            reducer(getInitialState(), { type: types.CHANGE_RENT_VALUE, value: 1 })
        ).toEqual(request);
    });

    it('should handle CHANGE_BUY_VALUE', () => {
        let request = getInitialState();
        request.buyValue = 2;

        expect(
            reducer(getInitialState(), { type: types.CHANGE_BUY_VALUE, value: 2 })
        ).toEqual(request);
    });

    it('should handle CHANGE_ANNUAL_TAX_VALUE', () => {
        let request = getInitialState();
        request.annualTaxValue = 3;

        expect(
            reducer(getInitialState(), { type: types.CHANGE_ANNUAL_TAX_VALUE, value: 3 })
        ).toEqual(request);
    });

    it('should handle CHANGE_LIVE_TIME_VALUE', () => {
        let request = getInitialState();
        request.liveTimeValue = 4;

        expect(
            reducer(getInitialState(), { type: types.CHANGE_LIVE_TIME_VALUE, value: 4 })
        ).toEqual(request);
    });
});