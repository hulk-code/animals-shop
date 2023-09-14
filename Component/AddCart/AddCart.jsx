import MarkBook from '../MarkBook/MarkBook';
import './AddCart.css'
const AddCart = ({addCart,totalCost,remaining}) => {
    console.log(addCart);
    
    return (
        <div className="cart-list">
            
            <h1>Total addeded Items{addCart.length}</h1>
            {
                addCart.map(markbook => <MarkBook key={markbook.id} markbook={markbook} totalCost={totalCost} remaining={remaining}></MarkBook>)
            }
            

        </div>
    );
};

export default AddCart;