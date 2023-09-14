
import './Animel.css'
const Animel = ({animel ,handleCart}) => {

    // console.log(animel);
    const {img ,name,post,price,color}=animel;
    return (
        <div className='' >

           <div className='box-container'>
           <img className="img-container" src={img} alt="" />
           <div className='info-contsiner'>
           <div>
            <p>name:{name}</p>
            <p>{post}</p>
            </div>
            <div>
                <p>Price:{price}</p>
                <p>Color: {color}</p>
            </div>
           </div>
           <div  className='btn-container'>
           <button className='btn' onClick={() => handleCart(animel)} >add to cart</button>
           </div>

           </div>
                

        </div>
    );
};

export default Animel;