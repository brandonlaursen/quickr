import { csrfFetch } from './csrf';

const LOAD_CARS = 'cars/loadCars'
const LOAD_CAR = 'cars/loadCar'
const ADD_CAR = 'cars/addCar'


// ---------------------------------------------------------------------

//load all cars WORKS
const loadCars = (cars, userId) => {
  return {
    type: LOAD_CARS,
    payload: cars,
    userId
  }
}

//get all the cars of a user
export const getUserCars = (userId) => async(dispatch) => {
  const res = await fetch(`/api/cars/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const cars = await res.json();
  dispatch(loadCars(cars, userId))
}

// ---------------------------------------------------------------------

// load a single car Works
const loadCar = (car) => {
  return {
    type: LOAD_CAR,
    payload: car,
  }
}

//get a single car with a specific id
export const getCar = (carId) => async(dispatch) => {
  const res = await fetch(`/api/cars/car/${carId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const car = await res.json();
  dispatch(loadCar(car))
}

// ---------------------------------------------------------------------

//add a new car IN PROGRESS
const addCar = (car) => {
  return {
    type: ADD_CAR,
    payload: car,
  }
}

// upload a new car
export const createCar = (newCar) => async(dispatch) => {
  const { userId, name, description, imageUrl } = newCar;

  const formData = new FormData();
  formData.append('userId', userId);

  if (imageUrl) formData.append("imageUrl", imageUrl);
  formData.append("description", description, "name", name);

  const res = await csrfFetch('/api/car', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: formData
  });

  const data = await res.json();
  dispatch(addCar(data));
}

// ---------------------------------------------------------------------




// //get all cars
// export const getCars = () => async (dispatch) => {
//   const response = await fetch('/api/car', {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   });

//   const cars = await response.json();
//   dispatch(loadCars(cars))
// }

const initialState = {cars:null, car:null};

const carsReducer = (state = initialState, action) => {
  // let newState;
  switch(action.type) {
    case LOAD_CARS:
      return {...state, cars: action.payload.car}
    case LOAD_CAR:
      return {...state, [action.payload.car.id]:action.payload.car}
    case ADD_CAR:
      return {...state, car: action.payload.car}
    default:
      return state;
  }

}

export default carsReducer;
