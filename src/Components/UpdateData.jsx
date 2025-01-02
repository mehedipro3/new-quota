import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const UpdateData = () => {
  const data = useLoaderData();
  const { _id, title,author,genre,release_date,rating,price,amazon_link,book_picture} = data;

  const handleUpdateData = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const release_date = form.release_date.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const amazon_link = form.amazon_link.value;
    const book_picture= form.book_picture.value;
    
    const formUpdatedData = { title, author, genre, release_date, rating, price, amazon_link, book_picture}
    console.log(formUpdatedData);

    fetch(`http://localhost:5000/data/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formUpdatedData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Swal.fire({
          title: "successful",
          text: "Data Updated Successfully",
          icon: "success",
          draggable: true
        });
        form.reset();
      })

  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5 container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Update Information For : {title}</h1>
        <form onSubmit={handleUpdateData} className="space-y-4">
          <p className="text-sm text-red-400"> Book Name :</p>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Book Name"
            className="input input-bordered w-full"
            required
          />
          <p className="text-sm text-red-400">Author :</p>
          <textarea
            name="author"
            defaultValue={author}
            placeholder="author"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <p className="text-sm text-red-400">Genre :</p>
          <input
            name="genre"
            defaultValue={genre}
            placeholder="genre"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Release Date :</p>
          <input
            name="release_date"
            defaultValue={release_date}
            placeholder="release_date"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Amazon Link :</p>
          <input
            type="text"
            name="amazon_link"
            defaultValue={amazon_link}
            placeholder="amazon_link"
            className="input input-bordered w-full"
            required
          />
          <p className="text-sm text-red-400">Rating :</p>
          
          <input
            type="text"
            name="rating"
            defaultValue={rating}
            placeholder="rating"
            className="input input-bordered w-full"
            required
          />
          <p className="text-sm text-red-400">Price :</p>
          <input
            type="number"
            name="price"
            defaultValue={price}
            placeholder="price"
            className="input input-bordered w-full"
          />
          <p className="text-sm text-red-400">Book picture :</p>
          <input
            type="text"
            name="book_picture"
            defaultValue={book_picture}
            placeholder="Book picture"
            className="input input-bordered w-full"
          />
          
          <button type="submit" className="btn bg-blue-400 text-white w-full">
            Update Data
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateData;