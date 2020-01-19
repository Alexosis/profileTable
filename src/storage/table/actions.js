export const CHOOSE_FIELD_OF_SORTING = 'CHOOSE_FIELD_OF_SORTING';
export const CHOOSE_DIRECTION_OF_SORTING = 'CHOOSE_DIRECTION_OF_SORTING';
export const DATA_ORDER = 'DATA_ORDER';

export const chooseField = (field) => ({
    type: CHOOSE_FIELD_OF_SORTING,
    payload: field
});

export const chooseDirection = (direction) => ({
    type: CHOOSE_DIRECTION_OF_SORTING,
    payload: direction
});

export const newOrder = (array) => ({
    type: DATA_ORDER,
    payload: array
});