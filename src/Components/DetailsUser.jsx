import { Link, useLoaderData } from "react-router-dom";


const DetailsUser = () => {
  const data = useLoaderData();
 
 console.log(data);
 

  return (
    <div>
      <div className='space-y-3 bg-violet-500 p-16 pb-40 text-white'>
        <h3 className='text-4xl text-center font-bold'>Books Details</h3>
        <p className='text-center'>In various genres, readers discover captivating tales that address life challenges and triumphs, often exploring themes of resilience, perseverance, and support. These stories range from inspiring memoirs and gripping thrillers to transformative self-help guides and enlightening educational works</p>
      </div>
      <div className='flex gap-3 border rounded-2xl pt-32 bg-white container mx-auto relative -top-36'>
        <div className='ml-32'>
          <img className='w-[350px]' src={data.book_picture} alt={data.name} />
        </div>
        <div className='ml-40 space-y-3 pb-7'>
          <h3 className='text-3xl font-bold'>Book Name : {data.title}</h3>
          <p className='text-xl font-bold'>Author Name: {data.author}</p>
          <p className='text-xl font-bold'>Genre : {data.genre}</p>
          <p className='text-xl font-bold'>Release Date : {data.release_date}</p>
          <p className='text-xl font-bold'>Amazon Link : {data.amazon_link}</p>
          <p className='text-xl font-bold'>Rating : {data.rating}
          </p>
          <p className='text-xl font-bold'>Price : ${data.price}</p>
          
          <Link to={'/'}>
          <button className="btn bg-violet-400 text-white font-bold mt-2">Back To Home</button>
          </Link>
          </div>
        </div>
      </div>
    
  );
};

export default DetailsUser;