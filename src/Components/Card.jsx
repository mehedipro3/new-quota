
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({card}) => {
  // eslint-disable-next-line react/prop-types
  const {title,book_picture,price,_id} = card;
  
  return (
    <div className="card border">
  <figure className="px-7 pt-7">
    <img
      src={book_picture}
      alt={title}
      className="rounded-xl w-auto" />
  </figure>
  <div className="card-body text-start">
    <h2 className="card-title">{title}</h2>
    <p>Price : ${price}</p>
    <div className="card-actions">
      <Link to={`/card/${_id}`}>
      <button className="btn rounded-2xl text-[#9538E2] border-[#9538E2]">View Details</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default Card;