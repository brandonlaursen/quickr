

const LOAD_CARS = 'cars/loadCars'

const loadCars = (cars) => {
  return {
    type: LOAD_CARS,
    payload: cars
  }
}


export const getCars = () => async (dispatch) => {
  const response = await fetch('/api/car', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const cars = await response.json();
  dispatch(loadCars(cars))
}

const initialState = {cars:null, car:null};

const carsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CARS:
      // const newState = {...state};
      // action.cars.forEach(car => {
      //   newState[car.id] = car;
      // });
      // return newState;
      return {...state, cars: action.payload.car}
    default:
      return state;
  }

}

export default carsReducer;
