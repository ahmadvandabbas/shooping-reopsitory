import React from 'react';
import "./products.css";


const Products = ({productItems,handleAddProduct}) => {
  return (
    <div className='products'>
        {productItems.map((productItem)=>(
            <div className='card'>
                <div>
                    <img className='product-image' src={productItem.image} alt={productItem.name}/>
                </div>
                <div>
                    <h3 className='product-name'>{productItem.name}</h3>
                </div>
                <div className='product-price'>تومان {productItem.price}</div>
                <div>
                    <button className='product-add-button'
                     onClick={()=>handleAddProduct(productItem)}
                     >اضافه کردن به سبدخرید</button>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Products