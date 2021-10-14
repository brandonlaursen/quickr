import { csrfFetch } from './csrf';

const LOAD_CARS = 'cars/loadCars'
const LOAD_CAR = 'cars/loadCar'
const ADD_CAR = 'cars/addCar'
const EDIT_CAR = 'cars/addCar'
// const REMOVE_CAR = 'cars/removeCar'

// ---------------------------------------------------------------------

// get all users
// const LOAD_USERS = 'users/loadUsers'

// const getUsers = (users, userId) => {
//   return {
//     type: LOAD_USERS,
//     payload: users,
//     userId
//   }
// }

// export const getAllUsers = () => async(dispatch) => {
//   const res = await fetch(`/api/users/allUsers`, {
//     method: 'GET',
//     headers: {
//             "Content-Type": "application/json",
//           }
//   });

//   const users = await res.json();
//   dispatch(getUsers(users));
// }





//load all cars WORKS
const loadCars = (cars, userId) => {
  return {
    type: LOAD_CARS,
    payload: cars,
    userId
  }
}

//get all the cars of a user works
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

//get a single car with a specific id works
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

//add a new car WORKS
const addCar = (car) => {
  return {
    type: ADD_CAR,
    payload: car,
  }
}

// upload a new car WORKS
export const createCar = (newCar) => async dispatch => {
  const res = await csrfFetch('/api/cars/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar),
      });

  if(res.ok) {
    const car = await res.json();
    dispatch(addCar(car))
    return car;
  }
}

// ---------------------------------------------------------------------
//WORKS
// const removeCar = (carId) => {
//   return {
//     type: REMOVE_CAR,
//     payload: carId,
//   }
// }

//WORKS
export const deleteCar = (carId) => async dispatch => {
  const res = await csrfFetch(`/api/cars/car/${carId}/delete`, {
      method: 'DELETE',
  });

  const car = await res.json();
  // dispatch(removeCar(car.id))
  return car;

}
// ---------------------------------------------------------------------

//WORKING ON EDIT IMAGE
//const EDIT_CAR = 'cars/addCar'

const update = (carId) => ({
  type: EDIT_CAR,
  payload: carId,
});


export const editCar = (payload, carId) => async dispatch => {
  const res = await csrfFetch(`/api/cars/car/${carId}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const car = await res.json();
  dispatch(update(car));
  return car;
}

// ---------------------------------------------------------------------






//get all cars
export const getCars = () => async (dispatch) => {
  const response = await fetch('/api/cars', {
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
  // let newState;
  switch(action.type) {
    case LOAD_CARS:
      return {...state, cars: action.payload.car}
    case LOAD_CAR:
      return {...state, [action.payload.car.id]:action.payload.car}
    case ADD_CAR:
      // if(!state.cars[action.payload.car.id])
      const newState = {
        ...state, list: { ...state.cars, test: action.payload }
      }
      return newState;
    case EDIT_CAR: {
      return {
        ...state,
        test2: action.payload,
      };
    }
    default:
      return state;
  }

}

export default carsReducer;
