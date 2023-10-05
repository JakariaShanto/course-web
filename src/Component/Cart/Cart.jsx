
import PropTypes from 'prop-types'

const Cart = ({selectedCard, remaining}) => {
  console.log(selectedCard)
  return (
    
    <>
      <div className="bg-slate-300 w-52 mt-10 rounded-md p-4 ">
        <h2>
          Credit Hour Remaining : {selectedCard.length}
        </h2>
        {
         selectedCard.map((select)=> <li key={selectedCard.id}>{select.description}</li>
         
         )
        }
        <span className=""><hr /></span>

        <div className="mt-4">
          <h3 className="font-bold ">Course Name : </h3>
          <span className=""><hr /></span>

        </div>
        <div>
          <p> Total Creadit Hour : </p>
          <span className=""><hr /></span>

        </div>
      
        <div>
          total Balance : {remaining}
          <span className=""> <hr /></span>

        </div>
      </div>


    </>

  );
};
Cart.propTypes = {
  selectedCard:PropTypes.object.isRequired, // You can also use PropTypes.shape() for more specific shape validation
  remaining:PropTypes.number.isRequired, // You can also use PropTypes.shape() for more specific shape validation
};

export default Cart;