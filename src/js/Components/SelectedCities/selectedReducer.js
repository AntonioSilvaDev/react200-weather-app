const defaultState = {
    city: '',
    cityInfo: '',
    cityCoord: '',
    date: '',
    data: '',
    lineItems: []
};

export default function SelectedReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        //Update search city
        case 'UPDATE_SEARCH_CITY' : {
            return {
                ...state,
                city: payload.city
            };
        }

        case 'FETCH_DATA_PENDING' : {
            return {
                ...state
            };
        }

        case 'FETCH_DATA_FULFILLED' : {
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            var newDate = month + "/" + day + "/" + year;

            var hours = dateObj.getUTCHours();
            var minutes = dateObj.getUTCMinutes();
            var seconds = dateObj.getUTCSeconds();
            var newTime = hours + ':' + minutes + ':' + seconds;
            let date = newDate;
            let name = action.payload.data.name;
            let time = newTime;
            return {
                city: '',
                cityInfo: action.payload.data,
                cityCoord: action.payload.data.coord,
                date: '',
                lineItems: [
                ...state.lineItems,
                { date, name, time }
                ]
            }
        }

        case 'FETCH_DATA_REJECTED' : {
            return {
                ...state
            }

        }

        default: {
            return state;
        }

       
    }
} 

