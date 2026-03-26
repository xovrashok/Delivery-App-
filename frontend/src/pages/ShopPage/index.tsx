import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import {
  CardContainer,
  ShopsContainer,
  ProductsContainer,
  FilterContainer,
  CategoriesContainer,
  FilterWrapper,
  FilterLabel,
  FilterSelect,
  ProductsGrid,
} from "./styles";

interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  shopId: string;
  category: string;
}

function ShopPage() {
  const [activeShop, setActiveShop] = useState("1");
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [sortType, setSortType] = useState<string>("name-asc");
  const [minRating, setMinRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const displayedProducts = [...allProducts]
    .filter((p: IProduct) => p.shopId === activeShop)
    .filter(
      (p: IProduct) =>
        selectedCategory === "All" || p.category === selectedCategory,
    )
    .sort((a, b) => {
      if (sortType === "price-asc") return a.price - b.price;
      if (sortType === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  useEffect(() => {
    const API_URL = "https://delivery-app-bhuj.onrender.com/";
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const shops = [
    { id: "1", value: "Mc Donny", rating: 4.5 },
    { id: "2", value: "CFK", rating: 3.8 },
    { id: "3", value: "etc...", rating: 1 },
    { id: "4", value: "etc...", rating: 1 },
    { id: "5", value: "etc...", rating: 1 },
  ];
  const categories = ["All", "Burgers", "Drinks", "Desserts"];

  const visibleShops = shops.filter((shop) => shop.rating >= minRating);

  useEffect(() => {
    if (
      !visibleShops.find((s) => s.id === activeShop) &&
      visibleShops.length > 0
    ) {
      setActiveShop(visibleShops[0].id);
    }
  }, [minRating]);

  return (
    <>
      <CardContainer>
        <ShopsContainer>
          <h3 style={{ marginBottom: "10px" }}>Filter by Rating:</h3>
          <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
            {[0, 3, 4].map((star) => (
              <Button
                key={star}
                onClick={() => setMinRating(star)}
                style={{
                  padding: "5px 10px",
                  fontSize: "12px",
                  background: minRating === star ? "#b9b9b9" : "#eee",
                }}
              >
                {star === 0 ? "All" : `${star}⭐+`}
              </Button>
            ))}
          </div>

          <h2 style={{ marginBottom: "10px" }}>Shops:</h2>
          {visibleShops.map((shop) => (
            <Button
              key={shop.id}
              onClick={() => setActiveShop(shop.id)}
              style={{
                width: "80%",
                backgroundColor: activeShop === shop.id ? "#b9b9b9" : "#eee",
              }}
            >
              {shop.value} ({shop.rating}⭐)
            </Button>
          ))}
        </ShopsContainer>
        <ProductsContainer>
          <FilterContainer>
            <CategoriesContainer>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat ? "#b9b9b9" : "#eee",
                    padding: "10px",
                  }}
                >
                  {cat}
                </Button>
              ))}
            </CategoriesContainer>
            <FilterWrapper>
              <FilterLabel>Sort by:</FilterLabel>
              <FilterSelect
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="name-asc">Alphabet (A-Z)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </FilterSelect>
            </FilterWrapper>
          </FilterContainer>
          <ProductsGrid>
            {displayedProducts.map((item) => (
              <Card key={item._id} product={item} />
            ))}
          </ProductsGrid>
        </ProductsContainer>
      </CardContainer>
    </>
  );
}

export default ShopPage;
