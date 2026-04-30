import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ChevronUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — AfriPot Restaurant" },
      { name: "description", content: "Authentic African cuisine with international flavors. Breakfast, lunch, and dinner specialties." },
    ],
  }),
});

const menuCategories = [
  {
    id: "breakfast",
    name: "Breakfast",
    items: [
      { name: "Polex", desc: "Plain omelet in chapatti", price: "3,000", badge: "new" },
      { name: "Polex with Chips", desc: "Plain omelet in chapatti served with chips", price: "5,000" },
      { name: "Ham and Cheese Omelette", desc: "Three eggs omelet with ham cheese served with toasted bread", price: "5,000" },
      { name: "French Toast", desc: "Pan fried sliced bread in beaten eggs", price: "3,000" },
      { name: "Plain Omelette", desc: "3 beaten eggs fried with olive oil and served with breakfast potatoes", price: "3,000" },
      { name: "Spanish Omelette", desc: "3 eggs omelette with diced onions, tomatoes, green pepper served with breakfast potatoes", price: "5,000" },
      { name: "Special Omelette", desc: "3 eggs omelette, meats, chips, mushrooms and julienne of vegetables topped with cheese", price: "8,000", badge: "chef" },
      { name: "Chapati Omelette", desc: "Home made chapati rolled with 2 eggs served with salad garnished and chips", price: "6,000" },
      { name: "English Breakfast", desc: "Beef sausage, three eggs sunny side, vegetables, Lyonnaise potatoes, beans, bowl of fresh fruits", price: "10,000", badge: "chef" },
    ],
  },
  {
    id: "starters",
    name: "Starters & Soups",
    items: [
      { name: "Vegetables Soup", desc: "Assorted veges cooked with perfection and blended resulting into rich soup served with chapati", price: "8,000" },
      { name: "Creamy Broccoli Soup", desc: "Blended fresh broccoli in deep served with fresh croutons", price: "8,000" },
      { name: "Creamy of Pumpkins", desc: "Onions, spring onions and pumpkins cooked with cream served with fresh croutons", price: "8,000" },
      { name: "Noodles Soup", desc: "Chicken or Beef cutters cooked in noodles sambals served with fresh croutons", price: "8,000" },
      { name: "Fish Soup", desc: "Herbs seasoned with fish fillet in fresh cream served with toasted bread", price: "8,000" },
      { name: "Agatogo Beef/Chicken", desc: "Beef/chicken, vegetables, Irish potatoes/green banana", price: "8,000" },
      { name: "Chicken and Matooke Broth", desc: "Chicken cubes and boiled green bananas, veggies, garnished with coriander", price: "9,000" },
      { name: "Mushroom Soup", desc: "Fresh mushroom, onions, garlic, ginger, seasoning with salt and fresh cream served with garlic bread", price: "8,000" },
    ],
  },
  {
    id: "salads",
    name: "Salad Bar",
    items: [
      { name: "Tuna & Avocado", desc: "Fresh tuna with creamy avocado", price: "12,000" },
      { name: "Organic Garden Salad", desc: "Mixed greens with fresh vegetables", price: "8,000" },
      { name: "Greek Salad", desc: "Cucumber, tomatoes, black olive, oregano, feta cheese, red onion", price: "10,000" },
      { name: "Chicken Caesar Salad", desc: "Romaine lettuce, parmesan cheese, eggs, chicken, garlic croutons, olives, oil dressing with anchovy", price: "12,000" },
      { name: "Lettuce Avocado Mango Salad", desc: "Lettuce, diced avocado, diced mango, tomatoes, black olives, dressed with lemon sweet chilli", price: "10,000" },
      { name: "Standard Salad", desc: "Lettuce, cucumber, white onions, carrots, tomatoes, beef chicken strips, eggs, cheese batonets with white dressing", price: "10,000" },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      { name: "Mixed Grills", desc: "Goat meats, beef steak, chicken drumsticks or wings, beef sausage, chapati, chips, served with herbs and spinach", price: "35,000", badge: "chef" },
      { name: "Grilled Chicken Breast", desc: "Succulent grilled chicken breast marinated well served with spinach, English vegetables and mash", price: "12,000" },
      { name: "Chicken Leg", desc: "Well grilled chicken leg served with chips", price: "10,000" },
      { name: "The Tender Loin Beef Steak", desc: "Beef fillet 300g with black pepper and red wine reduction served with English vegetables and mashed potatoes", price: "15,000", badge: "chef" },
      { name: "Beef/Chicken Stroganoff", desc: "Stir fry beef, chicken with julienne veggies, braised with mushrooms creamy sauce served with chips or rice", price: "10,000" },
      { name: "Grilled Fish Tilapia", desc: "Grilled marinated fish served with spinach/English vegs/mash potatoes/or lemon butter sauce", price: "15,000" },
      { name: "Pork Chops", desc: "Grilled pork with lemon zest and black pepper served with Lyonnaise potatoes", price: "15,000" },
      { name: "Beef Stew and Chicken Stew", desc: "Tender meat in rich gravy with vegetables", price: "9,000" },
      { name: "Tagapa", desc: "Rice mixed with chips, avocados and banana", price: "8,000" },
      { name: "Chicken Wings", desc: "Marinated fried 6 pcs chicken wings served with chips and kachumbari", price: "10,000" },
      { name: "AfriPot Beef", desc: "Sliced beef steak, capsicums and onions, served with roast potatoes", price: "14,000" },
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    items: [
      { name: "Chicken/Fish/Beef Wrap", desc: "Strips of meat with vegetables cocktail sauce served with chips and salad", price: "9,000" },
      { name: "Stir-Fried Chicken/Beef/Fish", desc: "Stir-fried vegetables with strips of meat served with chips", price: "9,000" },
      { name: "Sautéed Vegetables Wrap", desc: "Sautéed carrots, onions, zucchini, avocado wrapped in fresh chapati", price: "8,000" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: [
      { name: "Club Sandwiches", desc: "Toasted bread, chicken, beef, fried eggs, tomatoes, lettuce, onions, served with chips & salad", price: "12,000" },
      { name: "Chicken Avocado Sandwich", desc: "Chicken, bread, lettuce, onions, avocado, tomatoes, served with chips and salad", price: "10,000" },
      { name: "Tuna Sandwich", desc: "Toasted bread, tuna, lettuce, tomatoes, onions", price: "12,000" },
      { name: "Ham and Cheese Sandwich", desc: "Ham cheese melted in toast bread served with chips or salad", price: "10,000" },
      { name: "Chicken Tamazine", desc: "Marinated chicken with mayonnaise, avocado, cheese, tomatoes within focaccia bread served with chips", price: "10,000" },
      { name: "Vegetables Sandwich", desc: "Fresh vegetables on toasted bread", price: "10,000" },
      { name: "Veggie Tamazine", desc: "Stir fried vegetables and avocado within focaccia bread served with chips", price: "10,000" },
      { name: "Steak Onion Sandwich", desc: "Grilled mini beef fillets, caramelized onions, fresh tomato with white toasted bread served with chips", price: "10,000" },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      { name: "Chicken Cheese Burger", desc: "Chicken patty, cheese and fresh onions, tomatoes, lettuce served with chips", price: "10,000" },
      { name: "Beef Cheese Burger", desc: "Beef patty, cheese and fresh onions, tomatoes, lettuce served with chips", price: "10,000" },
      { name: "Vegetables Burger", desc: "Fresh vegetables on burger bun", price: "8,000" },
      { name: "Classic Burger", desc: "Cheddar cheese, lettuce, fried eggs, mushrooms", price: "12,000", badge: "chef" },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      { name: "Chicken Pizza", desc: "Chicken, tomato sauce, onions, green pepper, cheese, oregano", price: "8,000" },
      { name: "Vegetarian Pizza", desc: "Tomato sauce, onions, green pepper, spinach, oregano, cheese", price: "8,000" },
      { name: "Hawaiian Pizza", desc: "Pineapple, ham, cheese on tomato base", price: "8,000" },
      { name: "Four Season Pizza", desc: "Sauce, bacon, chicken, sausage, beef, onions, green pepper, cheese, oregano", price: "12,000", badge: "chef" },
      { name: "Margherita Pizza", desc: "Sauce, tomatoes, oregano, basil", price: "6,000" },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { name: "Spaghetti Bolognese", desc: "Traditional lean beef minced cooked in Italian herbs with tomatoes sauce and cheese melted", price: "9,000" },
      { name: "Penne Chicken", desc: "Spaghetti penne with cream sauce, extra virgin olive oil and garlic", price: "8,000" },
      { name: "Carbonara", desc: "Spaghetti with cream sauce with bacon", price: "9,000" },
      { name: "Spaghetti Napolitano", desc: "Ripened tomato and caper sauce", price: "10,000" },
    ],
  },
  {
    id: "grills",
    name: "Grills & BBQ",
    items: [
      { name: "Beef Ribs 4 Portions", desc: "Slow-cooked beef ribs with BBQ sauce", price: "15,000", badge: "chef" },
      { name: "Chicken Brochette", desc: "2 pcs skewers with chips and salad", price: "10,000" },
      { name: "Fish Brochette", desc: "2 pcs skewers with chips and salad", price: "10,000" },
      { name: "Beef Brochette", desc: "2 pcs skewers with chips and salad", price: "10,000" },
      { name: "Zingalo", desc: "2 pcs skewers with salad and chips", price: "10,000" },
      { name: "Sausages (Beef) Brochette", desc: "2 pcs skewers with chips and salad", price: "10,000" },
      { name: "Whole Fish/Chicken", desc: "Grilled whole with chips and salad", price: "25,000", badge: "chef" },
      { name: "Grilled Sesame Tofu", desc: "2 pcs skewers with chips and salad", price: "10,000" },
      { name: "Goat Brochette", desc: "2 pcs skewers served with chips and salad", price: "10,000" },
    ],
  },
  {
    id: "asian",
    name: "Asian Dishes",
    items: [
      { name: "Chicken Curry", desc: "Tender boneless chicken cube cooked in garlic and aromatic Indian spices served with steamed rice and chapati", price: "10,000" },
      { name: "Chicken Biryani", desc: "Steamed rice with chicken pieces, coriander curry sauce served with chapati", price: "10,000" },
      { name: "Veggies Curry", desc: "Mixed vegetables broccoli, cauliflower, peas, onions in curry sauce served with rice and chips", price: "8,000" },
      { name: "Fish Curry", desc: "Tender fish diced in curry sauce served with rice and chips", price: "12,000" },
      { name: "Sizzling Chicken", desc: "Sizzling hot plate with chicken", price: "10,000" },
      { name: "Sizzling Beef", desc: "Sizzling hot plate with beef", price: "10,000" },
      { name: "Sizzling Vegetables", desc: "Sizzling hot plate with vegetables", price: "10,000" },
      { name: "Sizzling Fish", desc: "Sizzling hot plate with fish", price: "12,000" },
      { name: "Chicken Fried Noodles", desc: "Stir-fried noodles with chicken", price: "10,000" },
      { name: "Beef Fried Noodles", desc: "Stir-fried noodles with beef", price: "10,000" },
      { name: "Vegetables Fried Noodles", desc: "Stir-fried noodles with vegetables", price: "8,000" },
      { name: "Chicken Fried Rice", desc: "Fried rice with chicken", price: "9,000" },
      { name: "Beef Fried Rice", desc: "Fried rice with beef", price: "8,000" },
      { name: "Mixed Fried Rice", desc: "Fried rice with mixed proteins", price: "10,000" },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      { name: "Spring Rolls Beef/Vegetables", desc: "5 pcs spring rolls", price: "5,000" },
      { name: "Samusa", desc: "Crispy pastry with filling", price: "500" },
      { name: "Chapati", desc: "Homemade flatbread", price: "500" },
      { name: "Pan Cakes & Crepes", desc: "2 pcs", price: "3,000" },
      { name: "Cinnamon Rolls", desc: "Sweet cinnamon rolls", price: "1,000" },
      { name: "Lemon Cake", desc: "Fresh lemon cake", price: "1,000" },
      { name: "Donald & Cooks", desc: "Pastry special", price: "1,000" },
    ],
  },
  {
    id: "kids",
    name: "Kids Menu",
    items: [
      { name: "Mini Chicken/Beef/Veggie Burger", desc: "Beef/chicken patty, cheese and fresh onions, tomatoes, lettuce served with chips", price: "5,000" },
      { name: "Fish Finger", desc: "Fish fillet tilapia coated in batter, deep fried served with chips and coleslaw salad", price: "8,000" },
      { name: "Spaghetti Napolitana Kid's Portion", desc: "Spaghetti with penne with seasoned tomato sauce", price: "3,000" },
      { name: "Spaghetti Bolognese Kid's Portion", desc: "Spaghetti with seasoned Bolognese sauce and melted cheese", price: "4,000" },
      { name: "Mini Beef/Chicken Pizza", desc: "Small pizza with beef or chicken", price: "5,000" },
    ],
  },
  {
    id: "specialities",
    name: "Specialities",
    items: [
      { name: "Mbuzi Choma", desc: "Goat leg mix with goat arm with ugali, kachumbari and greens", price: "30,000", badge: "chef" },
      { name: "AfriPot Rice", desc: "Whole chicken cooked with 1/2kg of basmati rice mixed together for aromatic flavors", price: "35,000", badge: "chef" },
    ],
  },
  {
    id: "local",
    name: "Local Food Menu",
    items: [
      { name: "Fish Luwombo", desc: "Traditional steamed fish and vegetables in banana leaves", price: "10,000" },
      { name: "Beef Luwombo", desc: "Traditional steamed beef and vegetables in banana leaves", price: "10,000" },
      { name: "Chicken Luwombo", desc: "Traditional steamed chicken and vegetables in banana leaves", price: "10,000", badge: "chef" },
      { name: "Luwombo Gnut", desc: "Traditional steamed groundnut stew in banana leaves", price: "10,000" },
      { name: "Beef Boilo Box", desc: "Hearty beef stew with beans and vegetables", price: "9,000" },
      { name: "Chicken Boilo Box", desc: "Hearty chicken stew with beans and vegetables", price: "9,000" },
      { name: "Fish Boilo", desc: "Hearty fish stew with beans and vegetables", price: "10,000" },
      { name: "Goat Boilo Box", desc: "Hearty goat stew with beans and vegetables", price: "10,000" },
      { name: "Ugali/Beef", desc: "Cornmeal staple with beef", price: "10,000" },
      { name: "Ugali/Chicken", desc: "Cornmeal staple with chicken", price: "10,000" },
      { name: "Ugali/Fish", desc: "Cornmeal staple with fish", price: "10,000" },
      { name: "Vegetarian Plate", desc: "Mixed vegetables and sides", price: "5,000" },
      { name: "Agatogo", desc: "Beef/chicken with vegetables and potatoes", price: "5,000" },
      { name: "Ikinono", desc: "Traditional vegetable dish", price: "5,000" },
      { name: "Imi7u7u", desc: "Plantain and vegetable mix", price: "3,000" },
      { name: "Whole Chicken", desc: "Grilled whole chicken", price: "25,000", badge: "chef" },
      { name: "Whole Fish", desc: "Grilled whole fish", price: "25,000", badge: "chef" },
      { name: "Chicken Gnut Box", desc: "Chicken in groundnut stew", price: "10,000" },
      { name: "Beef Gnut Box", desc: "Beef in groundnut stew", price: "9,000" },
      { name: "Fish Dry", desc: "Dried fish preparation", price: "10,000" },
    ],
  },
  {
    id: "drinks",
    name: "Beverages",
    items: [
      // Coffee
      { name: "Espresso Machito", desc: "Classic espresso with milk", price: "2,000", category: "Coffee" },
      { name: "Espresso Con Panna", desc: "Espresso with whipped cream", price: "2,000", category: "Coffee" },
      { name: "Americano/Lungo", desc: "Long black coffee", price: "2,000", category: "Coffee" },
      { name: "Café Mocha", desc: "Espresso with chocolate and milk", price: "3,500", category: "Coffee" },
      { name: "Regular Coffee", desc: "Classic drip coffee", price: "2,000", category: "Coffee" },
      { name: "Cappuccino", desc: "Espresso with steamed milk and foam", price: "3,000", category: "Coffee" },
      { name: "Café Latte", desc: "Espresso with steamed milk", price: "3,000", category: "Coffee" },
      { name: "Flat White", desc: "Espresso with velvety steamed milk", price: "3,000", category: "Coffee" },
      { name: "Cortado", desc: "Equal parts espresso and milk", price: "2,000", category: "Coffee" },
      { name: "Affogato", desc: "Espresso poured over ice cream", price: "3,000", category: "Coffee" },
      { name: "Café Au Lait", desc: "Coffee with hot milk", price: "3,000", category: "Coffee" },
      
      // Flavored Coffee
      { name: "Caramel Latte/Cappuccino", desc: "Sweet caramel flavored coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Coconut Latte/Cappuccino", desc: "Tropical coconut flavored coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Caramel Macchiato", desc: "Caramel espresso with milk", price: "4,000", category: "Flavored Coffee" },
      { name: "Vanilla Latte/Cappuccino", desc: "Smooth vanilla flavored coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Hazelnut Latte/Cappuccino", desc: "Nutty hazelnut flavored coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Strawberry Latte/Cappuccino", desc: "Fresh strawberry flavored coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Almond Latte/Cappuccino", desc: "Almond flavored coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Cinnamon Latte", desc: "Warm cinnamon spiced coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Chai Latte", desc: "Spiced chai tea with milk", price: "4,000", category: "Flavored Coffee" },
      { name: "Ginger Latte", desc: "Warming ginger flavored coffee", price: "4,000", category: "Flavored Coffee" },
      { name: "Dark Mocha", desc: "Rich dark chocolate mocha", price: "4,000", category: "Flavored Coffee" },
      { name: "White Mocha", desc: "White chocolate mocha", price: "4,000", category: "Flavored Coffee" },
      { name: "Soya Latte/Cappuccino", desc: "Dairy-free soya milk coffee", price: "4,000", category: "Flavored Coffee" },
      
      // Special Coffees
      { name: "African Coffee", desc: "Traditional African blend", price: "3,500", category: "Special Coffees" },
      { name: "Spice Coffee", desc: "Aromatic spiced coffee", price: "3,500", category: "Special Coffees" },
      { name: "Irish Coffee", desc: "Coffee with Irish whiskey and cream", price: "6,000", category: "Special Coffees" },
      { name: "Irish Spice Coffee", desc: "Spiced Irish coffee", price: "8,000", category: "Special Coffees" },
      { name: "For Long Journey", desc: "Strong energizing coffee blend", price: "6,000", category: "Special Coffees" },
      
      // Iced Coffee
      { name: "Iced Americano", desc: "Cold americano coffee", price: "3,000", category: "Iced Coffee" },
      { name: "Iced Latte", desc: "Cold latte with ice", price: "3,500", category: "Iced Coffee" },
      { name: "Iced Mocha", desc: "Cold mocha with ice", price: "4,000", category: "Iced Coffee" },
      { name: "Iced Cappuccino", desc: "Cold cappuccino with ice", price: "3,500", category: "Iced Coffee" },
      { name: "Iced Chocolate", desc: "Cold chocolate coffee", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Caramel Latte", desc: "Cold caramel latte", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Coconut Latte", desc: "Cold coconut latte", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Caramel Macchiato", desc: "Cold caramel macchiato", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Vanilla Latte", desc: "Cold vanilla latte", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Hazelnut Latte", desc: "Cold hazelnut latte", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Cinnamon Latte", desc: "Cold cinnamon latte", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Almond Latte", desc: "Cold almond latte", price: "4,500", category: "Iced Coffee" },
      { name: "Iced White Mocha", desc: "Cold white mocha", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Strawberry Latte", desc: "Cold strawberry latte", price: "4,500", category: "Iced Coffee" },
      { name: "Iced Soya Latte", desc: "Cold soya milk latte", price: "4,500", category: "Iced Coffee" },
      
      // Specialty Coffee
      { name: "V60", desc: "Pour-over specialty coffee", price: "4,000", category: "Specialty Coffee" },
      { name: "French Press", desc: "French press specialty coffee", price: "4,000", category: "Specialty Coffee" },
      
      // Milk Shakes
      { name: "Oreo Milk Shake", desc: "Creamy Oreo cookie shake", price: "6,000", category: "Milk Shakes" },
      { name: "Strawberry Shake", desc: "Fresh strawberry milk shake", price: "5,000", category: "Milk Shakes" },
      { name: "Chocolate Shake", desc: "Rich chocolate milk shake", price: "5,000", category: "Milk Shakes" },
      { name: "Double Shake", desc: "Double chocolate shake", price: "6,000", category: "Milk Shakes" },
      { name: "Peanut Butter Shake", desc: "Creamy peanut butter shake", price: "6,000", category: "Milk Shakes" },
      { name: "Vanilla Milk Shake", desc: "Classic vanilla shake", price: "5,000", category: "Milk Shakes" },
      
      // Fresh Juices
      { name: "Apple Juice", desc: "Fresh pressed apple juice", price: "8,000", category: "Fresh Juices" },
      { name: "Mango Juice", desc: "Fresh mango juice", price: "8,000", category: "Fresh Juices" },
      { name: "Pineapple Juice", desc: "Fresh pineapple juice", price: "5,000", category: "Fresh Juices" },
      { name: "Lemonade", desc: "Fresh lemon juice", price: "4,000", category: "Fresh Juices" },
      { name: "Papaya Juice", desc: "Fresh papaya juice", price: "5,000", category: "Fresh Juices" },
      { name: "Tree Tomato Juice", desc: "Fresh tree tomato juice", price: "5,000", category: "Fresh Juices" },
      { name: "Passion Juice", desc: "Fresh passion fruit juice", price: "5,000", category: "Fresh Juices" },
      { name: "Carrot Juice", desc: "Fresh carrot juice", price: "7,000", category: "Fresh Juices" },
      { name: "Orange Juice", desc: "Fresh orange juice", price: "8,000", category: "Fresh Juices" },
      { name: "Avocado Juice", desc: "Fresh avocado juice", price: "4,000", category: "Fresh Juices" },
      { name: "Cocktail Juice", desc: "Mixed fruit cocktail juice", price: "7,000", category: "Fresh Juices" },
      { name: "Beet Root & Pineapple Juice", desc: "Healthy beet and pineapple blend", price: "5,000", category: "Fresh Juices" },
      { name: "Create Your Juice", desc: "Custom juice blend", price: "7,000", category: "Fresh Juices" },
      { name: "Detox Green Juice", desc: "Healthy green detox juice", price: "7,000", category: "Fresh Juices" },
      
      // Mojito
      { name: "Virgin Mojito", desc: "Non-alcoholic mojito", price: "7,000", category: "Mojito" },
      { name: "Alcoholic Mojito", desc: "Classic mojito with rum", price: "15,000", category: "Mojito" },
      { name: "Strawberry Mojito", desc: "Strawberry flavored mojito", price: "7,500", category: "Mojito" },
      { name: "Classic Lemonade", desc: "Fresh lemonade", price: "7,000", category: "Mojito" },
      { name: "Pineapple Mojito", desc: "Pineapple mojito", price: "7,000", category: "Mojito" },
      { name: "Apple Mojito", desc: "Apple flavored mojito", price: "7,000", category: "Mojito" },
      { name: "Orange Mojito", desc: "Orange flavored mojito", price: "7,000", category: "Mojito" },
      
      // Fruits Tea
      { name: "Strawberry Tea", desc: "Fresh strawberry tea", price: "3,400", category: "Fruits Tea" },
      { name: "Tree Tomato Tea", desc: "Tree tomato flavored tea", price: "4,000", category: "Fruits Tea" },
      { name: "Apple Tea", desc: "Apple flavored tea", price: "4,000", category: "Fruits Tea" },
      { name: "Pineapple Tea", desc: "Pineapple flavored tea", price: "4,000", category: "Fruits Tea" },
      { name: "Orange Tea", desc: "Orange flavored tea", price: "4,000", category: "Fruits Tea" },
      { name: "Mixed Fruit Tea", desc: "Mixed fruit tea blend", price: "4,500", category: "Fruits Tea" },
      
      // Iced Fruits Tea
      { name: "Iced Strawberry Tea", desc: "Cold strawberry tea", price: "4,500", category: "Iced Fruits Tea" },
      { name: "Iced Passion Tea", desc: "Cold passion fruit tea", price: "4,500", category: "Iced Fruits Tea" },
      { name: "Iced Tree Tomato Tea", desc: "Cold tree tomato tea", price: "4,500", category: "Iced Fruits Tea" },
      { name: "Iced Apple Tea", desc: "Cold apple tea", price: "4,500", category: "Iced Fruits Tea" },
      { name: "Iced Pineapple Tea", desc: "Cold pineapple tea", price: "4,500", category: "Iced Fruits Tea" },
      { name: "Iced Orange Tea", desc: "Cold orange tea", price: "4,500", category: "Iced Fruits Tea" },
      { name: "Iced Mixed Fruit Tea", desc: "Cold mixed fruit tea", price: "5,000", category: "Iced Fruits Tea" },
      
      // Smoothies
      { name: "Mango Breeze", desc: "Refreshing mango smoothie", price: "6,000", category: "Smoothies" },
      { name: "Mango Banana Smoothie", desc: "Mango and banana blend", price: "6,000", category: "Smoothies" },
      { name: "Mango Pineapple Smoothie", desc: "Tropical mango pineapple", price: "6,000", category: "Smoothies" },
      { name: "Avocado Banana Smoothie", desc: "Creamy avocado banana", price: "6,000", category: "Smoothies" },
      { name: "Avocado Smoothie", desc: "Smooth avocado blend", price: "6,000", category: "Smoothies" },
      { name: "Tropical Smoothie", desc: "Tropical fruit blend", price: "6,000", category: "Smoothies" },
      { name: "Strawberry Smoothie", desc: "Fresh strawberry smoothie", price: "6,000", category: "Smoothies" },
      { name: "Stafford Special Smoothie", desc: "House special smoothie blend", price: "7,000", category: "Smoothies" },
      { name: "Banana Smoothie", desc: "Classic banana smoothie", price: "6,000", category: "Smoothies" },
      { name: "Create Your Own Smoothie", desc: "Custom smoothie blend", price: "7,000", category: "Smoothies" },
      
      // Blended Coffees
      { name: "Caramel Drizzle Kawaccino", desc: "Blended caramel coffee", price: "6,000", category: "Blended Coffees" },
      { name: "Mochamania Kawaccino", desc: "Blended mocha coffee", price: "6,000", category: "Blended Coffees" },
      { name: "White Mochamania Kawaccino", desc: "Blended white mocha", price: "6,000", category: "Blended Coffees" },
      { name: "Vanilla Drizzle Kawaccino", desc: "Blended vanilla coffee", price: "6,000", category: "Blended Coffees" },
      { name: "Strawberry Kawaccino", desc: "Blended strawberry coffee", price: "6,000", category: "Blended Coffees" },
      
      // Tea
      { name: "African Tea", desc: "Traditional African tea", price: "3,000", category: "Tea" },
      { name: "Spiced Tea", desc: "Aromatic spiced tea", price: "3,000", category: "Tea" },
      { name: "Ginger Tea", desc: "Warming ginger tea", price: "3,000", category: "Tea" },
      { name: "Lemon Tea", desc: "Fresh lemon tea", price: "3,000", category: "Tea" },
      { name: "Umucyayicyayi Tea", desc: "Traditional herbal tea", price: "2,500", category: "Tea" },
      { name: "Umwenya Tea", desc: "Traditional herbal tea", price: "2,500", category: "Tea" },
      { name: "Green Tea", desc: "Fresh green tea", price: "2,000", category: "Tea" },
      { name: "Black Tea", desc: "Classic black tea", price: "2,000", category: "Tea" },
      { name: "Hibiscus Tea", desc: "Hibiscus flower tea", price: "3,000", category: "Tea" },
      { name: "Hot Chocolate", desc: "Rich hot chocolate", price: "3,000", category: "Tea" },
      { name: "Detox Tea", desc: "Healthy detox tea blend", price: "3,000", category: "Tea" },
      
      // Iced Tea
      { name: "Iced African Tea", desc: "Cold African tea", price: "3,500", category: "Iced Tea" },
      { name: "Iced Spiced Tea", desc: "Cold spiced tea", price: "3,500", category: "Iced Tea" },
      { name: "Iced Ginger Tea", desc: "Cold ginger tea", price: "2,500", category: "Iced Tea" },
      { name: "Iced Lemon Tea", desc: "Cold lemon tea", price: "2,500", category: "Iced Tea" },
      { name: "Iced Umucyayicyayi Tea", desc: "Cold herbal tea", price: "3,000", category: "Iced Tea" },
      { name: "Iced Umwenya Tea", desc: "Cold herbal tea", price: "3,000", category: "Iced Tea" },
      { name: "Iced Hibiscus Tea", desc: "Cold hibiscus tea", price: "3,500", category: "Iced Tea" },
      
      // Wines
      { name: "Cabernet Merlot", desc: "Red wine blend", price: "45,000", category: "Wines" },
      { name: "Cabernet Chardonnay", desc: "White wine", price: "45,000", category: "Wines" },
      { name: "Merlot Longchamps", desc: "Premium merlot", price: "45,000", category: "Wines" },
      { name: "Proseco Rose", desc: "Sparkling rosé wine", price: "50,000", category: "Wines" },
      { name: "Pinta Negra", desc: "Red wine", price: "45,000", category: "Wines" },
      { name: "Elie Pretre", desc: "Premium wine", price: "45,000", category: "Wines" },
      { name: "Lamontpe Red Classic", desc: "Classic red wine", price: "35,000", category: "Wines" },
      { name: "Lamontpe White", desc: "White wine", price: "35,000", category: "Wines" },
      { name: "Four Cousine", desc: "Wine blend", price: "35,000", category: "Wines" },
      { name: "Isabelle de France Skipt", desc: "Premium French wine", price: "45,000", category: "Wines" },
      { name: "Fenikia", desc: "Wine selection", price: "35,000", category: "Wines" },
      { name: "Sauvignon Blanc", desc: "White wine", price: "45,000", category: "Wines" },
      { name: "Sauvignon Demon Noir", desc: "Red wine", price: "45,000", category: "Wines" },
      
      // Sparkling Wine
      { name: "Moscato", desc: "Sweet sparkling wine", price: "40,000", category: "Sparkling Wine" },
      { name: "Pinta Negra Sparkling", desc: "Sparkling red wine", price: "60,000", category: "Sparkling Wine" },
      { name: "Classic White Sparkling", desc: "Sparkling white wine", price: "35,000", category: "Sparkling Wine" },
      { name: "Frexenet", desc: "Spanish sparkling wine", price: "80,000", category: "Sparkling Wine" },
      
      // Champagne
      { name: "Moët", desc: "Premium champagne", price: "20,000", category: "Champagne" },
      { name: "Veuve Clicquot", desc: "Luxury champagne", price: "220,000", category: "Champagne" },
      
      // Whisky
      { name: "Jameson Irish", desc: "Irish whiskey shot/bottle", price: "5,000/100,000", category: "Whisky" },
      { name: "Jameson Black", desc: "Premium Irish whiskey", price: "7,000/150,000", category: "Whisky" },
      { name: "Jack Daniel", desc: "American whiskey", price: "7,000/150,000", category: "Whisky" },
      { name: "Red Label", desc: "Johnnie Walker Red", price: "5,000/160,000", category: "Whisky" },
      { name: "Double Black", desc: "Johnnie Walker Double Black", price: "8,000/250,000", category: "Whisky" },
      { name: "Ballantines", desc: "Scotch whisky", price: "3,500/70,000", category: "Whisky" },
      { name: "Black Label", desc: "Johnnie Walker Black", price: "8,000/110,000", category: "Whisky" },
      
      // Beer
      { name: "Leffe", desc: "Belgian beer", price: "6,000", category: "Beer" },
      { name: "Savanna", desc: "Cider beer", price: "5,000", category: "Beer" },
      { name: "Exo", desc: "Local beer", price: "5,000", category: "Beer" },
      { name: "Stella", desc: "Premium lager", price: "5,000", category: "Beer" },
      { name: "Desperados", desc: "Tequila beer", price: "5,000", category: "Beer" },
      { name: "Corona Extra", desc: "Mexican beer", price: "5,000", category: "Beer" },
      { name: "Carlsberg", desc: "Danish beer", price: "5,000", category: "Beer" },
      { name: "Smirnoff Black Ice", desc: "Vodka beer", price: "3,000", category: "Beer" },
      { name: "Smirnoff Guarana", desc: "Guarana flavored beer", price: "5,000", category: "Beer" },
      { name: "Tusker Malt", desc: "Malt beer", price: "3,000", category: "Beer" },
      { name: "Small Skol Malt", desc: "Small malt beer", price: "2,000", category: "Beer" },
      { name: "Small Mutzig", desc: "Small beer", price: "2,000", category: "Beer" },
      { name: "Amstel Malt", desc: "Malt beer", price: "2,000", category: "Beer" },
      { name: "Heineken", desc: "Premium lager", price: "2,500", category: "Beer" },
      { name: "Guinness", desc: "Irish stout", price: "3,000", category: "Beer" },
      { name: "Small Vipung", desc: "Small local beer", price: "2,000", category: "Beer" },
      
      // Tequila
      { name: "Tequila Camino", desc: "Tequila shot/bottle", price: "4,000/60,000", category: "Tequila" },
      { name: "Tequila Patron", desc: "Premium tequila", price: "8,000/150,000", category: "Tequila" },
      { name: "Tequila Olmeca Silver", desc: "Silver tequila", price: "5,000/80,000", category: "Tequila" },
      { name: "Tequila Olmeca Gold", desc: "Gold tequila", price: "5,000/80,000", category: "Tequila" },
      { name: "Tequila Olmeca Dark", desc: "Dark tequila", price: "5,000/80,000", category: "Tequila" },
      
      // Gin
      { name: "Golden Gin", desc: "Gin shot/bottle", price: "8,000/100,000", category: "Gin" },
      { name: "Domaine Gin Bio", desc: "Organic gin", price: "10,000/120,000", category: "Gin" },
      { name: "Hendricks Gin", desc: "Premium gin", price: "8,000/180,000", category: "Gin" },
      { name: "Beefeater", desc: "London dry gin", price: "4,000/80,000", category: "Gin" },
      
      // Cognac
      { name: "Hennessy VSOP", desc: "Premium cognac", price: "15,000/260,000", category: "Cognac" },
      { name: "Remy Martin", desc: "Cognac", price: "15,000/260,000", category: "Cognac" },
      { name: "Martel VSOP", desc: "Premium cognac", price: "15,000/260,000", category: "Cognac" },
      
      // Cocktails
      { name: "Stanford Cocktail", desc: "Campari, gin, maracuja, lemon slice", price: "20,000", category: "Cocktails" },
      { name: "Long Island Ice Tea", desc: "Vodka, gin, rum, tequila, lime, cola", price: "18,000", category: "Cocktails" },
      { name: "Aperol Spritz", desc: "Aperol, prosecco, sparkling water", price: "20,000", category: "Cocktails" },
      { name: "Whiskey Sour", desc: "Bourbon, lime juice, sugar syrup, egg white", price: "18,000", category: "Cocktails" },
      { name: "Negroni", desc: "Gin, Martini Rosso, Campari, bitters", price: "16,000", category: "Cocktails" },
      { name: "Margarita", desc: "Lime juice, Cointreau, tequila, sugar syrup", price: "18,000", category: "Cocktails" },
      { name: "Espresso Martini", desc: "Vodka, Kahlua, sugar syrup, espresso", price: "15,000", category: "Cocktails" },
      { name: "Mojito", desc: "Lime juice, sugar syrup, rum, mint, soda", price: "15,000", category: "Cocktails" },
      { name: "Side Car", desc: "Brandy, Cointreau, lime juice, sugar syrup", price: "18,000", category: "Cocktails" },
      { name: "French 75", desc: "Lime juice, sugar syrup, gin, prosecco", price: "18,000", category: "Cocktails" },
      { name: "D Stanford", desc: "Tequila, lime juice, sugar syrup, grapefruit", price: "16,000", category: "Cocktails" },
      { name: "Spice Passion", desc: "Passion juice, vodka, triple sec, lime, ginger", price: "15,000", category: "Cocktails" },
      { name: "Irish Coffee", desc: "Whiskey, sugar syrup, espresso, cream", price: "15,000", category: "Cocktails" },
    ],
  },
];

// Menu Item Card Component
function MenuItemCard({ item, index }: { item: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative h-80 cursor-pointer perspective"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {/* Front of card */}
        <motion.div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-zinc-900 rounded-2xl overflow-hidden border border-amber-900/30 shadow-lg"
        >
          {/* Placeholder image background */}
          <div className="w-full h-3/5 bg-gradient-to-b from-amber-900 to-zinc-900 relative overflow-hidden group">
            <motion.div
              className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-900"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {item.badge && (
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                  item.badge === "chef"
                    ? "bg-amber-500 text-zinc-900"
                    : "bg-red-500 text-white"
                }`}
              >
                {item.badge === "chef" ? "Chef's Pick" : "New"}
              </motion.div>
            )}
          </div>

          {/* Card content */}
          <div className="p-4 h-2/5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg text-white font-semibold truncate">
                {item.name}
              </h3>
              <p className="text-xs text-amber-200/70 line-clamp-2 mt-1">
                {item.desc}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-serif text-xl text-amber-400">
                {item.price} RWF
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 bg-amber-500 text-zinc-900 text-xs font-semibold rounded-md hover:bg-amber-400 transition-colors"
              >
                Add
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
          className="absolute w-full h-full bg-zinc-800 rounded-2xl overflow-hidden border border-amber-900/30 shadow-lg p-4 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-serif text-lg text-white font-semibold mb-3">
              {item.name}
            </h3>
            <div className="space-y-2 text-xs text-amber-100">
              <p>
                <span className="text-amber-400 font-semibold">Description:</span>{" "}
                {item.desc}
              </p>
              <p>
                <span className="text-amber-400 font-semibold">Allergens:</span>{" "}
                May contain nuts, dairy, gluten
              </p>
              <p>
                <span className="text-amber-400 font-semibold">Calories:</span>{" "}
                ~450 cal
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-amber-500 text-zinc-900 font-semibold rounded-md hover:bg-amber-400 transition-colors"
          >
            Add to Order
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Category Navigation with animated underline
function CategoryNav({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: any[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}) {
  const underlineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeButton = navRef.current?.querySelector(
      `[data-category="${activeCategory}"]`
    ) as HTMLElement;

    if (activeButton && underlineRef.current) {
      gsap.to(underlineRef.current, {
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [activeCategory]);

  return (
    <div
      ref={navRef}
      className="sticky top-20 z-40 bg-zinc-950/95 backdrop-blur border-b border-amber-900/30 px-6 md:px-12 py-4"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex overflow-x-auto gap-2 md:gap-4 pb-2 md:pb-0 relative">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              data-category={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                activeCategory === cat.id
                  ? "text-zinc-900"
                  : "text-amber-200/70 hover:text-amber-200"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
          <motion.div
            ref={underlineRef}
            className="absolute bottom-0 h-1 bg-amber-500 rounded-full"
            initial={false}
          />
        </div>
      </div>
    </div>
  );
}

// Search Bar Component
function SearchBar({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 right-12 bg-zinc-900 border border-amber-900/30 rounded-lg p-3"
          >
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-800 text-white placeholder-amber-200/50 outline-none text-sm"
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-amber-500 text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors"
      >
        <Search size={20} />
      </motion.button>
    </motion.div>
  );
}

// Back to Top Button
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-40 w-12 h-12 bg-amber-500 text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCategories = menuCategories.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item: any) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  const currentCategory = filteredCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-400 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <SiteHeader />

      {/* Hero Section with Parallax */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-transparent"
          style={{ y: scrollProgress * 0.3 }}
        />
        <div className="mx-auto max-w-[1200px] text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-amber-400 mb-6"
          >
            Authentic African Cuisine
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl md:text-8xl leading-[0.95] text-white"
          >
            Our <span className="text-amber-400">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg text-amber-200/70 max-w-2xl mx-auto"
          >
            Experience authentic African flavors with international influences.
            From breakfast to dinner, we offer a diverse selection of dishes.
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNav
        categories={menuCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Menu Items Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <AnimatePresence mode="wait">
            {currentCategory && currentCategory.items.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl mb-12 text-amber-400">
                  {currentCategory.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCategory.items.map((item: any, idx: number) => (
                    <MenuItemCard key={idx} item={item} index={idx} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-amber-200/70">
                  No items found matching "{searchQuery}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-zinc-900/50 border-y border-amber-900/30 py-16 md:py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl mb-6 text-white"
          >
            Ready to Dine?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-amber-200/70 mb-8 max-w-2xl mx-auto"
          >
            Call us to make a reservation or visit us in person. We're open
            Wednesday to Saturday.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:+250795304581"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-zinc-900 font-medium rounded-md hover:bg-amber-400 transition-colors"
            >
              +250 795 304 581
            </motion.a>
            <motion.a
              href="mailto:info@afripotcuisine.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-500 text-amber-400 font-medium rounded-md hover:bg-amber-500/10 transition-colors"
            >
              info@afripotcuisine.com
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Back to Top Button */}
      <BackToTopButton />

      <SiteFooter />
    </div>
  );
}
