# 🛒 Quality Web E-commerce App

![React](https://img.shields.io/badge/React-18-blue?logo=react) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwind-css) ![Vite](https://img.shields.io/badge/Vite-4.4-purple?logo=vite)

A **React + Tailwind CSS** e-commerce web application with a responsive **product catalog** and **Add to Cart modal**. Built with **React Router** for multi-page navigation and modern UI design.

---

## 🚀 Features

- Responsive **Products Page** with dynamic product rendering
- **Add to Cart Modal** with product details confirmation
- **React Router** for Home, Products, and Cart pages
- Reusable components for easier maintenance
- Fully **mobile-friendly** with Tailwind CSS

---

## 🌐 Live Demo

You can try the app live here:
[🔗 Add your deployed link here]

---

## 🛠 Tech Stack

- **Frontend:** React 18
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

---

## 📂 Project Structure

```bash
src/
 ├─ assets/
 │    └─ clothing1.jpg
 ├─ components/
 │    ├─ Header.jsx
 │    ├─ Products.jsx
 │    ├─ Modal.jsx
 │    ├─ Home.jsx
 │    └─ listing-objects.js
 ├─ App.jsx
 ├─ main.jsx
 └─ App.css
```

---

## ⚡ Installation

```bash
# Clone the repo
git clone https://github.com/your-username/quality-web.git
cd quality-web

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧩 Usage

- Go to **Products Page** to see the list of products.
- Click **Add to Cart** on any product → **modal appears** with product info.
- Navigate to **Cart Page** (currently a placeholder).

---

## 📦 Adding Products

Edit `src/components/listing-objects.js`:

```javascript
export const products = [
  { id: 1, name: "Headphones", price: "$99", image: clothing1 },
  { id: 2, name: "Keyboard", price: "$79", image: clothing1 },
  // Add more products here
];
```

---

## 🎨 Styling

- Tailwind CSS handles all UI, responsive layout, and hover effects.
- Modal has overlay and centered content.

---

## 🔮 Future Improvements

- Full cart functionality with quantity and total price
- Checkout integration (PayPal, Stripe, etc.)
- Search and filter products
- Smooth **fade/slide animations** for modal and transitions

---

## 📄 License

[MIT License](LICENSE) – free to use and modify.

