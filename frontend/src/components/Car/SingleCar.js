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
import { getAllComments, createComment, deleteComment, editComment } from '../../store/comment';

const Car = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { carId } = useParams();
  const car = useSelector(state => state.car[carId]);


  // const userOwner = useSelector((state) => state.user.user);

  //comment stuff
  const user = useSelector(state => state.session.user)
  const comments = useSelector(state => state.comments.comments);

  const [newComment, setNewComment] = useState('');
  const [edit, setEdit] = useState('');
  const [disabler, setDisabler] = useState(false);

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

  const deleteAComment = async(e, commentId) => {
    e.preventDefault();
    await dispatch(deleteComment(carId, commentId))

  }

  const editAComment = async (e, comment, commentId, carId) => {
    e.preventDefault();
    const payload = {
      comment
    }

    dispatch(editComment(payload, commentId, carId)).then(() => dispatch(getAllComments(carId)));
  }

  const hideComment = (commentId) => {
    const comment1 = document.querySelector(`.comment${commentId}`);
    const input = document.querySelector(`.input${commentId}`);
    if(comment1.classList.contains("hidden")) {
      comment1.classList.remove('hidden');
      input.classList.add('hidden');

    } else {
      comment1.classList.add("hidden");
      input.classList.remove('hidden');
      setDisabler(true)
    }
  }
//  const car = cars.find((car) => car.id === carId);

  const submitEdit = (commentId) => {
    const comment1 = document.querySelector(`.comment${commentId}`);
    const input = document.querySelector(`.input${commentId}`);

    const payload = {
      comment: edit
    };
    dispatch(editComment(payload, commentId, +carId)).then(() => dispatch(getAllComments(carId)));
    comment1.classList.remove('hidden');
    input.classList.add('hidden');
    setDisabler(false)
  }

  const removeCar = (e) => {
    e.preventDefault();

    dispatch(deleteCar(carId)).then(() => dispatch(getUserCars(user.id)))
    history.push('/')
  }

  useEffect(() => {
     dispatch(getCar(carId))

  },[dispatch])


  return (
    <div>
    <div className='singleCarBackground'> </div>
    <div className='singleCarBackgroundBottom'></div>
    <div className='carContainer2'>
      <div className='singleCarComponent'>
        <h1 className='singleCarName'>{car?.name}</h1>
        <img src={car?.imageUrl} alt="car" className='carImage' ></img>
        <div className='buttonContainer'>
          <button onClick={removeCar} className='delete'>Delete</button>
          <NavLink to="/"> <button className='back'>Back to Images</button> </NavLink>
          <EditCarInfo />
          {/* <NavLink to={`/car/${car?.id}/edit`}> <button className='edit'>Edit</button> </NavLink> */}
        </div>
        <div className='postedByContainer'>
          <NavLink to ={`/profile/${car?.User.id}`} ><img src={car?.User.profilePicUrl} alt="car" className='profilePicComment'></img> </NavLink>
          <NavLink to ={`/profile/${car?.User.id}`}  className='uploadedBy'> <h3>Uploaded by: {car?.User.username}</h3> </NavLink>
        </div>
        <div className='descriptionContainer'>
          <p className='singleCarDescription'>{car?.description}</p>
        </div>
        <div className='addCommentContainer'>
          <div className='addCommentBox'>

            <form className='addCommentForm' onSubmit={submitComment}>
              <input className='commentInput' placeholder='Leave a comment' value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              >
              </input>
              <button className='addCommentSubmit' type='submit'>Comment</button>
            </form>
            <h2 className='commentsTitle'>Comments</h2>
            {
              comments?.map((comment) => {
        return <div className={`commentBox ${comment.id}`} id={comment.id} key={comment.id}>
                  <div className='allCommentsContainer'>
                    <div

                      // disabled={true}
                      className={`comment${comment.id}`}
                      // value={comment.comment}
                    >
                  <div className='COMMENT'>
                    {/* <NavLink to ={`/profile/${comment.User?.id}`} ><img src={comment.User?.profilePicUrl} alt="car" className='userCommentProfilePic'></img> </NavLink> */}
                    <NavLink to ={`/profile/${comment.User?.id}`} className='profileCommentName'><h3>{comment.User?.username}</h3> </NavLink>
                    {comment.comment}
                  </div>

                    </div>
                    <div className={`hidden input${comment.id}`}>
                    <textarea
                      className='editCommentInput'
                      onChange={(e) => setEdit(e.target.value)}
                      value={edit}
                    />
                    <button className= 'submitEditButton'onClick={() => submitEdit(comment.id)}>Submit Changes</button>

                    </div>
                  </div>
              {comment.userId === user?.id && (
                <div>
                  <button className='deleteCommentButton' onClick={(e) => deleteAComment(e, comment.id)} >Delete</button>
                  <button className='editCommentButton' onClick={(e) => hideComment( comment.id )} onMouseDown={() =>  setEdit(comment.comment)} disabled={disabler}>Edit</button>
                </div>
              )}

                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Car;
