
// eslint-disable-next-line react/prop-types
const Buttons = ({ cards, cardsItem,filterItem ,setFilterCards }) => {



  return (
    <div className=' w-1/5 text-center '>
      <div className='border space-y-4 m-4 py-2 rounded-xl'>
        <button onClick={() => setFilterCards(cards)} className='btn'>
          All Books
        </button>
        {
          // eslint-disable-next-line react/prop-types
          cardsItem.map(val => (
            // eslint-disable-next-line react/jsx-key
            <button onClick={() => filterItem(val)} className='btn flex mx-auto'>
              {val}
            </button>
          ))
        }
        

      </div>
    </div>
  );
};

export default Buttons;