import * as actions from '../../actions/statesActions'
import * as types from '../../constants/actionTypes'

describe('estado actions', () => {
    it('should create an action to fetch estados reducer', () => {
        const expectedAction = {
            type: types.FETCH_STATES
        }
        expect(actions.fetchStates()).toMatchObject(expectedAction);
    });
});