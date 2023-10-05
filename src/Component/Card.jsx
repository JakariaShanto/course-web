import PropTypes from 'prop-types'

 

const Card = ({ card, handlertoSelect}) => {
  const { image, title, description, credit_hour, price} = card



  return (
    <>
      <div className="w-2/3 mx-auto p-4 grid grid-cols-3 gap-5">
        <div className="w-80 h-fit p-4 rounded-md bg-slate-300  ">
          <div className="w-full mx-auto text-center  ">
            <img className="" src={image} alt="" />
            <h2 className="text-center font-bold text-base mt-5">{title}</h2>
            <p className="mt-10">`{description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium harum libero rerum illum nihil minus voluptate quisquam voluptates ad!`</p>
            <div className="flex justify-evenly mt-3">
              <p>$ <span>price: {price}</span></p>
              <p><span>credit hr: {credit_hour}</span></p>
            </div>
            <div className="bg-blue-500 text-center rounded-md mx-auto mt-3">
              <button onClick={()=>handlertoSelect(card)} className=" w-full py-2 text-white rounded-md hover:bg-blue-300 hover:text-black ">selected</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


Card.propTypes = {
  card: PropTypes.object.isRequired, // You can also use PropTypes.shape() for more specific shape validation
  handlertoSelect: PropTypes.func
};

export default Card;