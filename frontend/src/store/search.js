import { csrfFetch } from "./csrf";

//SEARCH FOR CARS
const SEARCH_CARS = "results/searchCars";

const searchCars = (cars) => {
  return {
    type: SEARCH_CARS,
    payload: cars,
  };
};

//FIND ALL CARS SEARCH
export const findAllCars = (results) => async (dispatch) => {
  const res = await csrfFetch('/api/search/results', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ results })
  })

  if(res.ok) {
    const data = await res.json();
    dispatch(searchCars(data))
  }
}

const initialState = { cars: {} }

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_CARS:
      return {...state, cars: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
