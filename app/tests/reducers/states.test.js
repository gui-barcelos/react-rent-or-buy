import reducer, { getInitialState } from '../../reducers/states';
import * as types from '../../constants/actionTypes';

describe('states reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(getInitialState());
    });

    it('should handle FETCH_STATES', () => {
        expect(
            reducer([],
                {
                    type: types.FETCH_STATES,
                    states:
                    [
                        { UF: 'AP', rent: 600, rent: 48000 },
                        { UF: 'RJ', rent: 770, rent: 61600 }
                    ]
                })
        ).toEqual(
            [
                { UF: 'AP', rent: 600, rent: 48000 },
                { UF: 'RJ', rent: 770, rent: 61600 }
            ]
            );
    });
});