import axios from "axios";
//Action Creators

export function updateSearchCity(city){
    return {
        type: 'UPDATE_SEARCH_CITY',
        payload: { city }
    };
}

export function fetchData(value){
    return {
        type: 'FETCH_DATA',
        payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid={placeholder}`)
    }
}