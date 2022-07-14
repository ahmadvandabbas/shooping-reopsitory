import "./Cart.css";

const Cart = ({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {

    const totalPrice = cartItems.reduce((price,item)=>price+item.quantity*item.price,0);

    return ( 
        <div className="cart-items">
            <h2 className="cart-items-header">محصولات </h2>
            <div className="cart-clear">
               {cartItems.length >=1 && (
                   <button className="cart-clear-button" onClick={handleCartClearance }>پاک کردن سبدخرید</button>
               )}
            </div>
            {cartItems.length === 0 && (
                <div className="cart-items-empty">...سبد خرید شما خالی است</div>
            )}
            <div> 
                {cartItems.map((item)=>(
                    <div className="cart-items-list" key={item.id}>
                        <img className="cart-items-image" src={item.image} alt={item.name}/>
                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-function">
                            <button className="cart-items-add" onClick={()=>handleAddProduct(item)}>+</button>
                            <button className="cart-items-remove" onClick={()=>handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * {item.price}تومان
                        </div>
                    </div>
                   
                ))}
            </div>
            <div className="cart-items-total-price-name">
                مجموع قیمت : 
                <div className="cart-items-total-price">{totalPrice}تومان</div>

            </div>

        </div>
     );
};
 
export default Cart;