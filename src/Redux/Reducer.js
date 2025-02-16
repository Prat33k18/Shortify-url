const initialState = {
    url: null,
    loading: false,
    error: null,
};

export const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHORT_URL_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'SHORT_URL_SUCCESS':
            return {
                ...state,
                loading: false,
                url: action.payload.shorturl,
            };

        case 'SHORT_URL_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case 'GET_OG_URL_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'GET_OG_URL_SUCCESS':
            return {
                ...state,
                loading: false,
                url: action.payload.url,
            };

        case 'GET_OG_URL_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};