export const initialState = {
    filter: [],
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'add_filter': {
            if (state.filter.includes(action.value)) {
                return {
                    ...state,
                };
            }

            return {
                ...state,
                filter: [
                    ...state.filter,
                    action.value,
                ],
            };
        }
        case 'remove_filter': {
            return {
                ...state,
                filter: state.filter.filter((item) => item !== action.value),
            };
        }
        case 'clear_filter': {
            return {
                ...state,
                filter: [],
            };
        }
    }
};
