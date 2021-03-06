import { csrfFetch } from './csrf';

const LOAD_CARS = 'cars/loadCars'
const LOAD_CAR = 'cars/loadCar'
const ADD_CAR = 'cars/addCar'
const EDIT_CAR = 'cars/addCar'


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





//LOAD ALL CARS
const loadCars = (cars, userId) => {
  return {
    type: LOAD_CARS,
    payload: cars,
    userId
  }
}

//GET ALL CARS OF A SPECIFIC USER
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


//LOAD A SINGLE CAR
const loadCar = (car) => {
  return {
    type: LOAD_CAR,
    payload: car,
  }
}

//GET A CAR OF A SPECIFIC ID
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


//ADD A NEW CAR
const addCar = (car) => {
  return {
    type: ADD_CAR,
    payload: car,
  }
}

//UPLOAD A NEW
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



//DELETE A SPECIFIC CAR
export const deleteCar = (carId) => async dispatch => {
  const res = await csrfFetch(`/api/cars/car/${carId}/delete`, {
      method: 'DELETE',
  });

  const car = await res.json();
  // dispatch(removeCar(car.id))
  return car;

}

//UPDATE A CAR
const update = (carId) => ({
  type: EDIT_CAR,
  payload: carId,
});

//EDIT A CAR
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


//GET ALL CARS
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
  switch(action.type) {
    case LOAD_CARS:
      return {...state, cars: action.payload.car}
    case LOAD_CAR:
      return {...state, [action.payload.car.id]:action.payload.car}
    case ADD_CAR:
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
