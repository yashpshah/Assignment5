/* eslint linebreak-style: ["error","windows"] */
import React from 'react';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.ProductAdd;
    const product = {
      Name: form.product.value,
      Price: form.price.value.slice(1),
      Category: form.category.value,
      Image: form.image.value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.price.value = '$';
    form.product.value = '';
    form.image.value = '';
  }

  render() {
    return (
      <div>
        <form name="ProductAdd" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="category">
              Category
              <select name="category">
                <option value="Shirts">Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jackets">Jackets</option>
                <option value="Sweaters">Sweaters</option>
                <option value="Accessories">Accessories</option>
              </select>
            </label>
            <br />
            <label htmlFor="price">
              Price Per Unit
              <input type="text" name="price" />
            </label>
            <br />
          </div>
          <div>
            <label htmlFor="product">
              Product Name
              <input type="text" name="product" />
            </label>
            <br />
            <label htmlFor="image">
              Image Url
              <input type="text" name="image" />
            </label>
            <br />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>

    );
  }
}