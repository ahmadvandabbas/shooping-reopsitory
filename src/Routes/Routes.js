import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Products from '../components/Products';
import SignUp from '../components/SignUp';
import Cart from '../components/Cart';
const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
  return (
    <div>
        <Switch>
            <Route path="/" exact>
                <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path="/signup" exact>
                <SignUp/>
            </Route>
            <Route path="/cart" exact>
                <Cart cartItems={cartItems} 
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance}/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes