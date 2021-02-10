import React, { Component } from "react";
import productsIndexData from "../data/productsIndexData";
import NewProductForm from "./NewProductForm";

class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsIndexData,
    };
    this.createProduct=this.createProduct.bind(this);
  }
  createProduct(params){
      this.setState((state)=>{
          return{
              products: [
                  ...state.products,
                  {id: (Math.max(...state.products.map(p=>p.id))+1),
                ...params}
              ]
          }
      })
  }
  deleteProduct(id) {
    this.setState((state) => {
      return {
        products: state.products.filter((p) => p.id !== id),
      };
    });
  }
  render() {
    return (
      <main>
          <NewProductForm createProduct={this.createProduct}/>
        {this.state.products.map(p => {
          return (
            <div key={p.id}>
              <h1>
                {p.id} - {p.title}
              </h1>
              <button onClick={() => this.deleteProduct(p.id)}>Delete</button>
            </div>
          );
        })}
      </main>
    );
  }
}
export default ProductsIndexPage;
