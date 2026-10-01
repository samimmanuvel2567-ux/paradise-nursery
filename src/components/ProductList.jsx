import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Medicinal Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2e9b"
  },
  {
    id: 3,
    name: "Lavender",
    category: "Medicinal Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1"
  },
  {
    id: 4,
    name: "Peace Lily",
    category: "Medicinal Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 5,
    name: "Mint Plant",
    category: "Medicinal Plants",
    price: 12,
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec"
  },
  {
    id: 6,
    name: "Basil Plant",
    category: "Medicinal Plants",
    price: 14,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733"
  },

  {
    id: 7,
    name: "Rose",
    category: "Flowering Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
  },
  {
    id: 8,
    name: "Orchid",
    category: "Flowering Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1566907225471-4f3b2d1c9b6d"
  },
  {
    id: 9,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 24,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651"
  },
  {
    id: 10,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a"
  },
  {
    id: 11,
    name: "Marigold",
    category: "Flowering Plants",
    price: 16,
    image: "https://images.unsplash.com/photo-1604848698030-c434ba08ece9"
  },
  {
    id: 12,
    name: "Daisy",
    category: "Flowering Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1495231916356-a86217efff12"
  },

  {
    id: 13,
    name: "Money Plant",
    category: "Indoor Plants",
    price: 17,
    image: "https://images.unsplash.com/photo-1614594575927-bc6d6e7d0e55"
  },
  {
    id: 14,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1614594575927-bc6d6e7d0e55"
  },
  {
    id: 15,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1632207691144-8e3a5c1d8e9a"
  },
  {
    id: 16,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 19,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 17,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 26,
    image: "https://images.unsplash.com/photo-1600411833119-7c5b0b7f7b6e"
  },
  {
    id: 18,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 32,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const [search, setSearch] = useState("");

  const categories = [
    "Medicinal Plants",
    "Flowering Plants",
    "Indoor Plants"
  ];

  const isInCart = id => {
    return cartItems.some(item => item.id === id);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      <div className="products-page">
        <h1>Our Plants</h1>

        <input
          className="search-box"
          type="text"
          placeholder="Search plants..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {categories.map(category => {
          const categoryPlants = plants.filter(
            plant =>
              plant.category === category &&
              plant.name.toLowerCase().includes(search.toLowerCase())
          );

          return (
            <section key={category}>
              <h2 className="category-title">{category}</h2>

              <div className="product-grid">
                {categoryPlants.map(plant => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p>Price: ${plant.price}</p>

                    <button
                      disabled={isInCart(plant.id)}
                      onClick={() =>
                        dispatch(addToCart(plant))
                      }
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;