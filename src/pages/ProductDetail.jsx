import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardDescription, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getById(id).then(success => setProduct(success.data.data));
  },[]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <CardDescription>Stokta {product.unitsInStock} tane kaldı</CardDescription>
            <Card.Header style={{marginTop:"5px"}}><strong>{product.unitPrice} TL</strong></Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">Satın al</Button>
              <Button basic color="orange">Favorilere ekle</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
