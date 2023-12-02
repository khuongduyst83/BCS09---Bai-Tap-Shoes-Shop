import React, { Component } from "react";

export default class ItemGiay extends Component {
  render() {
    console.log(this.props);
    const { image, name, price } = this.props.giay;
    return (
      <div className="col-4  ">
        <img className="w-100" src={image} alt="" />
        <h3 className="">{name}</h3>
        <p className="fs-3">{price} $</p>
        <button className="bg-dark text-white fs-4">
          add to carr <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    );
  }
}
