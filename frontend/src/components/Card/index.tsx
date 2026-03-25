import Button from "../Button";
import { CardComponent, CardImage, CardTitle } from "./style";
import { useCart } from "../../context/CartContext";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  shopId: string;
}

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  const { addToCart } = useCart();

  return (
    <CardComponent>
      <CardImage>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </CardImage>

      <CardTitle>{product.name}</CardTitle>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        <Button
          onClick={() => {
            addToCart(product);
          }}
        >
          add to Cart
        </Button>
      </div>
    </CardComponent>
  );
}

export default Card;
