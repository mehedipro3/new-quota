import Footer from './Footer';
import Navbar from './Navbar';
import Swal from 'sweetalert2';

const AddData = () => {
  
  const handleSubmit = (e) => {
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
    
    const formData= { title, author, genre, release_date, rating, price, amazon_link, book_picture}
    console.log(formData);
    
    fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
          Swal.fire({
            title: "successful",
            text: "Data Added Successfully",
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
        <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Book Name"
            className="input input-bordered w-full"
            
          />
          <textarea
            name="author"
            placeholder="author"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            name="genre"
            placeholder="genre"
            className="textarea textarea-bordered w-full"
          />
          <input
            name="release_date"
            placeholder="release_date"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="amazon_link"
            placeholder="amazon_link"
            className="input input-bordered w-full"
           
          />
          <input
            type="text"
            name="rating"
            placeholder="rating"
            className="input input-bordered w-full"
            
          />
          <input
             type="number"
             name="price"
             placeholder="price"
             className="input input-bordered w-full"
          />
          <input
            type="text"
            name="book_picture"
            placeholder="Book picture"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn bg-blue-400 text-white w-full">
            Submit
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddData;
