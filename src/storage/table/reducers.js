import {CHOOSE_DIRECTION_OF_SORTING, CHOOSE_FIELD_OF_SORTING, DATA_ORDER} from "./actions";
import data from '../../profiles'

const defaultState = {
    data: data,
    sortDirection: true,
    sortField: ''
};

export const tableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHOOSE_FIELD_OF_SORTING:
            return {
                ...state,
                sortField: action.payload
            };

        case  CHOOSE_DIRECTION_OF_SORTING:
            return {
                ...state,
                sortDirection: action.payload
            };

        case DATA_ORDER:{
            return {
                ...state,
                data: action.payload
            }
        }
        default: return state;
    }
};

