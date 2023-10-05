
import { useEffect, useState } from 'react';
import './App.css'
import Card from './Component/Card'
import Cart from './Component/Cart/Cart'

function App() {

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    fetch('src/JSON/Fake-data.JSON')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);


  const handlertoSelect = (card) => {
    const isexsit = selectedCard.find((item) => item.id == card.id)
    let count = card.price;
    console.log(count)

    if (isexsit) {
      return alert('alredy booked')
    }




 
    const totalRemaining = 400 - count;
    setRemaining(totalRemaining)
    const newSelecteditem = ([...selectedCard, card])
    setSelectedCard(newSelecteditem);

  }

  return (
    <>
      <div className='w-72 mx-auto '>
        <h1 className='text-3xl font-bold'>Course Registration</h1>
      </div>
      <div className='flex p-5'>
        <div className='grid grid-cols-3 p-10 gap-4'>
          {
            cards.map(card => <Card key={card.id}
              handlertoSelect={handlertoSelect} card={card}></Card>)
          }

        </div>
        <div className=''>
          <Cart selectedCard={selectedCard}
            remaining={remaining}
          ></Cart>
        </div>
      </div>

    </>
  )
}

export default App
