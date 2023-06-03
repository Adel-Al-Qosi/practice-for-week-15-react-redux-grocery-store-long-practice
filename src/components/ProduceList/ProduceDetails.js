import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import { toggleLike } from '../../store/produce'

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(produce.id));
  };

  const handleLike = () => {
    dispatch(toggleLike(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLike}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className="plus-button"
          onClick={handleAddToCart}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
