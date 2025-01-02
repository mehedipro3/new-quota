import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Buttons from '../Components/Buttons';

const Display_cards = () => {
    const [cards,setCards]  = useState([]);
    const [filterCards,setFilterCards]  = useState([]);
    const [cardsItem,setCardsItem] =  useState([])
    
    const filterItem = (genres) =>{
      const newItem = cards.filter((newVal)=> newVal.genre == genres);
      setFilterCards(newItem);

    }

    useEffect(()=>{
      fetch('http://localhost:5000/data')
      .then(res=>res.json())
      .then(data=>{
        
        setCards(data);
        setCardsItem([...new Set(data.map((val)=>val.genre))])
        setFilterCards(data);
      })
    },[])
  return (
    <div className='flex  mt-4'>
      <Buttons 
      cardsItem={cardsItem} 
      filterItem={filterItem}
      setCards={setCards}
      cards={cards}
      setFilterCards={setFilterCards}
      ></Buttons>
      <div className=' w-4/5 grid grid-cols-2 md:grid-cols-3 gap-4 mb-5'>
          {
            filterCards.map(card=><Card key={card.id} card={card}></Card>)
          }
      </div>
    </div>
  );
};

export default Display_cards;