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
  const res = await fetch(`/api/car/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const cars = await res.json();
  dispatch(loadCars(cars, userId))
}

// ---------------------------------------------------------------------

// load a single car IN PROGRESS
const loadCar = (car, userId) => {
  return {
    type: LOAD_CAR,
    payload: car,
    userId
  }
}

//get a single car with a specific id
export const getCar = (carId) => async(dispatch) => {
  const res = await fetch(`/api/user/car/${carId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const car = await res.json();
  dispatch(loadCar(car, carId))
}

// ---------------------------------------------------------------------

//add a new car IN PROGRESS
const addCar = (cars, userId) => {
  return {
    type: ADD_CAR,
    payload: cars,
    userId
  }
}

// upload a new car
export const createCar = (newCar) => async(dispatch) => {
  const { userId, name, description, imageUrl } = newCar;

  const formData = new FormData();
  formData.append('userId', userId);

  if (imageUrl) formData.append("imageUrl", imageUrl);
  formData.append("description", description, "name", name);

  const res = await fetch('/api/car', {
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
  let newState;
  switch(action.type) {
    case LOAD_CARS:
      // const newState = {...state};
      // action.cars.forEach(car => {
      //   newState[car.id] = car;
      // });
      // return newState;
      return {...state, cars: action.payload.car}
    case ADD_CAR:
      newState = Object.assign({}, state);
      newState['cars'] = action.car;
      return newState;
    default:
      return state;
  }

}

export default carsReducer;
