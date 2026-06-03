import React, { createContext, useContext, useState } from "react";

export interface Meal {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  distance: string;
  image: string;
  category: "Rice" | "Swallow" | "Drinks" | "Snacks";
  description: string;
  location: string;
}

export interface CartItem {
  meal: Meal;
  quantity: number;
}

interface AppContextType {
  budget: number;
  setBudget: (budget: number) => void;
  category: string;
  setCategory: (category: string) => void;
  cart: CartItem[];
  addToCart: (meal: Meal, quantity: number) => void;
  removeFromCart: (mealId: string) => void;
  updateQuantity: (mealId: string, quantity: number) => void;
  clearCart: () => void;
  savedMeals: string[];
  toggleSaveMeal: (mealId: string) => void;
  address: string;
  setAddress: (address: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const mockMeals: Meal[] = [
  {
    id: "1",
    title: "Jollof Rice + Chicken",
    price: 1500,
    rating: 4.7,
    reviews: 300,
    distance: "0.8km",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&auto=format&fit=crop&q=60",
    category: "Rice",
    description: "A rich and flavorful plate of smoky jollof rice cooked in a perfectly seasoned tomato base, infused with a blend of spices and herbs. Served with tender, well-marinated grilled chicken that is crispy on the outside and juicy on the inside. Accompanied by fresh vegetables for a balanced and satisfying meal, perfect for lunch or dinner.",
    location: "48, Olukole Street, S/L, Lagos.",
  },
  {
    id: "2",
    title: "Rice and Stew + Beef",
    price: 1500,
    rating: 3.9,
    reviews: 287,
    distance: "0.2km",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60",
    category: "Rice",
    description: "Perfectly cooked white rice served with a savory tomato and pepper-based stew and tender cuts of seasoned beef. An absolute classic home-cooked meal.",
    location: "5, Ogunlana Dr, Lagos.",
  },
  {
    id: "3",
    title: "Shawarma",
    price: 1500,
    rating: 4.7,
    reviews: 300,
    distance: "1.2km",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=60",
    category: "Snacks",
    description: "Delicious wraps of spiced grilled chicken, cabbage, mayonnaise, and ketchup rolled inside a soft flatbread. Perfect snack on the go.",
    location: "15, Adeniran Ogunsanya St, Lagos.",
  },
  {
    id: "4",
    title: "Amala & Abula",
    price: 1500,
    rating: 4.9,
    reviews: 500,
    distance: "0.9km",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&auto=format&fit=crop&q=60",
    category: "Swallow",
    description: "Traditional Yoruba swallow made from yam flour (Amala), served with gbegiri (bean soup), ewedu, and spicy pepper sauce (Abula) with assorted meat.",
    location: "8, Itire Rd, Surulere, Lagos.",
  },
  {
    id: "5",
    title: "Zobo Drink (Large)",
    price: 1500,
    rating: 4.8,
    reviews: 450,
    distance: "0.3km",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=60",
    category: "Drinks",
    description: "Chilled hibiscus leaf tea brewed with ginger, pineapple flavors, and sweet spices. A refreshing, natural, and healthy local beverage.",
    location: "48, Olukole Street, S/L, Lagos.",
  },
  {
    id: "6",
    title: "Pounded Yam & Egusi",
    price: 2000,
    rating: 4.8,
    reviews: 380,
    distance: "1.1km",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=60",
    category: "Swallow",
    description: "Smooth, fluffy pounded yam served with a rich, delicious Egusi (melon seed) soup cooked with palm oil, spinach, stockfish, and beef pieces.",
    location: "23, Bode Thomas St, Surulere, Lagos.",
  },
  {
    id: "7",
    title: "Special Fried Rice + Beef",
    price: 2000,
    rating: 4.6,
    reviews: 180,
    distance: "0.8km",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60",
    category: "Rice",
    description: "Stir-fried rice loaded with fresh vegetables, eggs, and seasoned beef slices, grilled to perfection.",
    location: "12, Akerele St, Surulere, Lagos.",
  },
  {
    id: "8",
    title: "Strawberry Milkshake",
    price: 2000,
    rating: 4.5,
    reviews: 150,
    distance: "1.3km",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=60",
    category: "Drinks",
    description: "Creamy, chilled strawberry milkshake topped with whipped cream. Perfect choice to satisfy your sweet tooth.",
    location: "Adeniran Ogunsanya Mall, Lagos.",
  },
  {
    id: "9",
    title: "Double Cheeseburger",
    price: 2500,
    rating: 4.8,
    reviews: 320,
    distance: "1.4km",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
    category: "Snacks",
    description: "Two flame-grilled beef patties with melted cheddar cheese, lettuce, tomatoes, onions, pickles, and our signature burger sauce inside a toasted sesame bun.",
    location: "4, Karimu St, Surulere, Lagos.",
  },
  {
    id: "10",
    title: "Royal Jollof Feast",
    price: 3000,
    rating: 4.9,
    reviews: 600,
    distance: "1.0km",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&auto=format&fit=crop&q=60",
    category: "Rice",
    description: "Our premium party jollof rice served with grilled chicken, fried plantain (dodo), moin-moin, and a side of fresh coleslaw.",
    location: "48, Olukole Street, S/L, Lagos.",
  },
  {
    id: "11",
    title: "Seafood Okro + Semo",
    price: 3000,
    rating: 4.9,
    reviews: 420,
    distance: "1.5km",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=60",
    category: "Swallow",
    description: "Delicious okro soup loaded with fresh prawns, crab, fish, and calamari, served with a side of smooth Semolina swallow.",
    location: "54, Adelabu St, Surulere, Lagos.",
  },
  {
    id: "12",
    title: "Chicken & Chips",
    price: 3000,
    rating: 4.7,
    reviews: 250,
    distance: "1.2km",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=60",
    category: "Snacks",
    description: "Crispy golden fried chicken wings served with seasoned French fries and a side of ketchup and garlic mayo dip.",
    location: "Adeniran Ogunsanya Mall, Lagos.",
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [budget, setBudget] = useState<number>(1500);
  const [category, setCategory] = useState<string>("Rice");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [savedMeals, setSavedMeals] = useState<string[]>([]);
  const [address, setAddress] = useState<string>("48, Olukole Street, Lagos.");

  const addToCart = (meal: Meal, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.meal.id === meal.id);
      if (existing) {
        return prev.map((item) =>
          item.meal.id === meal.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { meal, quantity }];
    });
  };

  const removeFromCart = (mealId: string) => {
    setCart((prev) => prev.filter((item) => item.meal.id !== mealId));
  };

  const updateQuantity = (mealId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(mealId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.meal.id === mealId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleSaveMeal = (mealId: string) => {
    setSavedMeals((prev) =>
      prev.includes(mealId)
        ? prev.filter((id) => id !== mealId)
        : [...prev, mealId]
    );
  };

  return (
    <AppContext.Provider
      value={{
        budget,
        setBudget,
        category,
        setCategory,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        savedMeals,
        toggleSaveMeal,
        address,
        setAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
