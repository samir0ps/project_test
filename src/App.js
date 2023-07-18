import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";



export const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: "$999",
    image: "https://images.pexels.com/photos/16564514/pexels-photo-16564514/free-photo-of-apple-laptop-office-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: "$1999",
    image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: "$249",
    image: "https://images.pexels.com/photos/17610890/pexels-photo-17610890/free-photo-of-still-life-airpods-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function App(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Navbar
  toggleCart={toggleCart}
        cartCount={cart.length}
        onToggleSidebar={handleToggleSidebar}  // added this line
/>

      <h1 className="text-4xl font-bold text-gray-800 mb-10 mt-16">Welcome to E-Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} variants={variants} />
        ))}
      </div>
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} toggleCart={toggleCart} />}
      {props.showSidebar && <Sidebar onClose={props.handleToggleSidebar} />}
    </div>
  );
}



function ProductCard({ product, addToCart, variants }) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: product.id * 0.2 }}
      variants={variants}
    >
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

function Cart({ cart, removeFromCart, toggleCart }) {
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        toggleCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleCart]);

  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div ref={cartRef} className="bg-white w-3/4 h-3/4 overflow-y-auto rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <button onClick={toggleCart}>
            <FaTimes className="text-gray-800" />
          </button>
        </div>
        {cart.length > 0 ? (
          <>
            <ul className="divide-y divide-gray-300">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center py-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>
                    <FaTimes className="text-red-500" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-4">
              <h3 className="text-xl font-bold text-gray-800">Total: {cart.reduce((acc, item) => acc + Number(item.price.slice(1)), 0)}</h3>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 ease-in-out">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default App;
