import { useCart } from "../../context/CartContext";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  QuantityContainer,
  QuantityInput,
} from "./styles";
import Button from "../Button";

interface CartItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
}

function CartItem({ product }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <CartItemContainer>
      <CartItemImage>
        <img alt={product.name} />
      </CartItemImage>

      <CartItemDetails>
        <h4>{product.name}</h4>
        <p>Price: {product.price} USD</p>

        <QuantityContainer>
          <QuantityInput
            type="number"
            value={product.quantity}
            onChange={(e) =>
              updateQuantity(product._id, Number(e.target.value))
            }
            min="1"
          />
        </QuantityContainer>

        <div style={{ alignSelf: "flex-end", marginTop: "10px" }}>
          <Button onClick={() => removeFromCart(product._id)}>Remove</Button>
        </div>
      </CartItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
