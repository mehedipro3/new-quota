import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Users = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const {_id : id,name, img, injury_date, medical_history } = user;
 
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt={name}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><span className="font-bold">Name :</span>{name}</h2>
          <p> <span className="font-bold">Injury Date :</span> {injury_date}</p>
          <p> <span className="font-bold">Medical History :</span> {medical_history}</p>
          <div className="card-actions">
            <Link to={`/users/${id}`}>
            <button className="btn bg-blue-400 text-white font-bold">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;



