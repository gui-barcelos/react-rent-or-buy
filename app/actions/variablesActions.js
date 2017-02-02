import * as types from '../constants/actionTypes';

export const changeRentValue = (value) => {
    return { type: types.CHANGE_RENT_VALUE, value };
};

export const changeBuyValue = (value) => {
    return { type: types.CHANGE_BUY_VALUE, value };
};

export const changeLiveTimeValue = (value) => {
    return { type: types.CHANGE_LIVE_TIME_VALUE, value };
};

export const changeAnnualTaxValue = (value) => {
    return { type: types.CHANGE_ANNUAL_TAX_VALUE, value };
};