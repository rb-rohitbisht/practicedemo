import React, { Component } from 'react';
import Product from './product'
import Title from './title'
import { Consumer } from '../context'


class ProductList extends Component {
    render() { 
        return ( 
 <React.Fragment>
    <div className="py-5" >
        <div className="container">
            <Title name="Latest" title="products" />
            <div className="row">
                <Consumer>
                    {(value)=>{
                       
                        return ( value.products.map((product , index)=><Product key={index} product={product} />) )
                        
                    }}
                </Consumer>
            </div>
        </div>
    </div>
</React.Fragment>
        );
    }
}
 
export default ProductList;
