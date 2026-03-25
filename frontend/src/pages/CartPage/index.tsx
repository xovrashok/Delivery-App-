import { useState } from "react";
import {
  CartWrapper,
  UserForm,
  CartList,
  InputGroup,
  Label,
  Input,
  EmptyCart,
  TotalTitle,
  TotalContainer,
} from "./style";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import Button from "../../components/Button";

function CartPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
  });

  const validate = () => {
    const newErrors = {
      name: userData.name.trim().length < 2,
      email: !/\S+@\S+\.\S+/.test(userData.email),
      phone: userData.phone.trim().length < 10,
      address: userData.address.trim().length < 5,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      alert("Please fill in all fields correctly!");
      return;
    }

    const orderData = {
      userName: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      items: cart,
      totalPrice: totalPrice,
    };

    try {
      const response = await fetch("https://delivery-app-bhuj.onrender.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Заказ успешно отправлен в базу!");
        clearCart();
        setUserData({ name: "", email: "", phone: "", address: "" });
      }
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Ошибка при отправке. Проверь, запущен ли сервер.");
    }
  };

  const isFormEmpty =
    !userData.name || !userData.email || !userData.phone || !userData.address;

  if (cart.length === 0) {
    return (
      <EmptyCart>
        <h2>Your cart is empty 🧺</h2>
        <p>Go back to the shop to add some delicious food!</p>
      </EmptyCart>
    );
  }

  return (
    <form onSubmit={handleSubmitOrder}>
      <CartWrapper>
        <UserForm>
          <InputGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={userData.name}
              $hasError={errors.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: false });
              }}
              required
            />
            {errors.name && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Name is too short
              </span>
            )}
          </InputGroup>

          <InputGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              placeholder="email@example.com"
              value={userData.email}
              $hasError={errors.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: false });
              }}
              required
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Invalid email format
              </span>
            )}
          </InputGroup>

          <InputGroup>
            <Label>Phone:</Label>
            <Input
              type="tel"
              placeholder="+380..."
              value={userData.phone}
              $hasError={errors.phone}
              onChange={(e) => {
                setUserData({ ...userData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: false });
              }}
              required
            />
            {errors.phone && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Phone must be at least 10 digits
              </span>
            )}
          </InputGroup>

          <InputGroup>
            <Label>Address:</Label>
            <Input
              type="text"
              placeholder="Delivery address"
              value={userData.address}
              $hasError={errors.address}
              onChange={(e) => {
                setUserData({ ...userData, address: e.target.value });
                if (errors.address) setErrors({ ...errors, address: false });
              }}
              required
            />
            {errors.address && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Address is too short
              </span>
            )}
          </InputGroup>
        </UserForm>

        <CartList>
          {cart.map((item) => (
            <CartItem key={item._id} product={item} />
          ))}

          <TotalContainer>
            <TotalTitle>Total Price: {totalPrice.toFixed(2)} USD</TotalTitle>
            <Button
              type="submit"
              disabled={isFormEmpty}
              style={{
                opacity: isFormEmpty ? 0.5 : 1,
                cursor: isFormEmpty ? "not-allowed" : "pointer",
              }}
            >
              Submit Order
            </Button>
          </TotalContainer>
        </CartList>
      </CartWrapper>
    </form>
  );
}

export default CartPage;
