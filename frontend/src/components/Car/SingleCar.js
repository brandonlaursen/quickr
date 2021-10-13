import styles from './Car.css'
import { getCar } from '../../store/cars';
import { useSelector, useDispatch } from 'react-redux';
import { createElement, useEffect, useState } from "react";
import { restoreUser } from '../../store/session'
import { useParams } from 'react-router';
import { NavLink, useHistory  } from 'react-router-dom';
import { deleteCar } from '../../store/cars';
import { getUserCars } from '../../store/cars';
import EditCarInfo from '../EditFormModal';

//comment stuff
import { getAllComments, createComment } from '../../store/comment';

const Car = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { carId } = useParams();
  const car = useSelector(state => state.car[carId]);

  //comment stuff
  const user = useSelector(state => state.session.user)
  const comments = useSelector(state => state.comments.comments);

  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    dispatch(getAllComments(carId));

  },[dispatch])

  const submitComment = async(e) => {
    e.preventDefault();
    if(!user) return;
    const postComment = {
      userId: user.id,
      carId: carId,
      comment: newComment
    };
    await dispatch(createComment(postComment)).then(setNewComment(''));
  }


//  const car = cars.find((car) => car.id === carId);



  const removeCar = (e) => {
    e.preventDefault();

    dispatch(deleteCar(carId)).then(() => dispatch(getUserCars(user.id)))
    history.push('/')
  }

  useEffect(() => {
     dispatch(getCar(carId))

  },[dispatch])


  return (
    <div className='singleCarComponent'>
      <h1 className='singleCarName'>{car?.name}</h1>
      <img src={car?.imageUrl} alt="car" className='carImage' ></img>
      <div className='buttonContainer'>
        <button onClick={removeCar} className='delete'>Delete</button>
        <NavLink to="/"> <button className='back'>Back to Images</button> </NavLink>
        <EditCarInfo />
        {/* <NavLink to={`/car/${car?.id}/edit`}> <button className='edit'>Edit</button> </NavLink> */}
      </div>
      <div className='descriptionContainer'>
        <p className='singleCarDescription'>{car?.description}</p>
      </div>
      <div className='addCommentContainer'>
        <div className='addCommentBox'>

          <form className='addCommentForm' onSubmit={submitComment}>
            <textarea className='commentInput' placeholder='Leave a comment' value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            >
            </textarea>
            <button className='addCommentSubmit' type='submit'>Comment</button>
          </form>
          {()=> console.log(comments)}
          {
            comments?.map((comment) => {
       return <div className={`commentBox ${comment.id}`} id={comment.id} key={comment.id}>
                <div className='allCommentsContainer'>
                  <textarea
                    disabled={true}
                    className='comments'
                    value={comment.comment}
                  >
                  </textarea>
                </div>

              </div>
            })

          }

        </div>
      </div>
    </div>
  )
}

export default Car;
