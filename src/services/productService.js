import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:8080/api/products/getAll");
  }

  getById(productId) {
    return axios.get(`http://localhost:8080/api/products/getById?productId=${productId}`);
  }
}
