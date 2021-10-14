// module is used to get product details from databse

//not used

import React, { Component } from "react";
import axios from "axios";

const API_URL = "http://192.168.8.101:3000/user/all";

class ShowProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    this.getProducts();
  };
  //func to get product details
  getProducts = () =>
    axios
      .get(API_URL)
      .then((response) => {
        this.state({ products: response.data });
        console.log("Product details retrieved");
        console.log(this.state.products);
      })
      .catch(() => {
        alert("Error in retrieving product details");
      });

  // render() {
  //   <View>

  //     <RecentActivityScreen products={this.state.products} />
  //   </View>;
  // }
}

export default new ShowProducts();
