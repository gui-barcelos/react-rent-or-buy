import * as actions from '../../actions/variablesActions'
import * as types from '../../constants/actionTypes'

describe('variaveis actions', () => {
    it('should create an action to change rentValue', () => {
        const rentValue = 10;

        const expectedAction = {
            type: types.CHANGE_RENT_VALUE,
            value: rentValue
        };
        expect(actions.changeRentValue(rentValue)).toMatchObject(expectedAction);
    });

    it('should create an action to change buyValue', () => {
        const buyValue = 11;

        const expectedAction = {
            type: types.CHANGE_BUY_VALUE,
            value: buyValue
        };
        expect(actions.changeBuyValue(buyValue)).toMatchObject(expectedAction);
    });

    it('should create an action to change annualTaxValue', () => {
        const annualTaxValue = 12;

        const expectedAction = {
            type: types.CHANGE_ANNUAL_TAX_VALUE,
            value: annualTaxValue
        };
        expect(actions.changeAnnualTaxValue(annualTaxValue)).toMatchObject(expectedAction);
    });

        it('should create an action to change liveTimeValue', () => {
        const liveTimeValue = 13;

        const expectedAction = {
            type: types.CHANGE_LIVE_TIME_VALUE,
            value: liveTimeValue
        };
        expect(actions.changeLiveTimeValue(liveTimeValue)).toMatchObject(expectedAction);
    });
});