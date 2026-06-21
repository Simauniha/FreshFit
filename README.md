# Fresh Fit

> A modern, responsive e-commerce product page built with React.js & Tailwind CSS.

Fresh Fit is a clean and scalable frontend project designed to showcase products with an intuitive user experience. It includes dynamic product rendering, interactive UI components, and a responsive layout optimized for all devices.

---

## Live Demo

https://freshfit-nine.vercel.app/

## Features

* **Product Gallery**
  Interactive image gallery with thumbnail switching

* **Dynamic Product Data**
  Displays product name, price, rating, and description

* **Size Selection**
  Select product sizes with active state UI

* **Trust Badges**

  * 100% Original Products
  * Cash on Delivery Available
  * Easy Return Policy

* **Tabbed Interface**
  Toggle between Description & Customer Reviews

* **Fully Responsive**
  Mobile-first design using Tailwind CSS

* **Modern UI/UX**
  Smooth transitions and clean layout

---

## Tech Stack

| Category         | Technology       |
| ---------------- | ---------------- |
| Frontend         | React.js         |
| Routing          | React Router DOM |
| Styling          | Tailwind CSS     |
| Icons            | React Icons      |
| State Management | Context API      |
| Build Tool       | Vite             |

---

## Installation & Setup

### 1 Clone the repository

```bash
git clone https://github.com/Simauniha/fresh-fit.git
cd fresh-fit
```

### 2 Install dependencies

```bash
npm install
```

### 3 Run development server

```bash
npm run dev
```

### 4 Open in browser

```
http://localhost:5173
```

---

## Project Structure

```
fresh-fit/
├── public/
├── src/
│   ├── Components/
│   │   └── Product/
│   │       └── Product.jsx
│   ├── Context/
│   │   └── ShopContext.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## Key Components

### Product.jsx

Handles:

* Fetching product data via `useParams`
* Context integration using `ShopContext`
* Image gallery logic
* Size selection state
* Tabs for description & reviews

---

### ShopContext.jsx

Provides global state:

* `products` array
* `currency` symbol

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add your feature"
   ```
4. Push to GitHub

   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## Author

**Simauniha**
🔗 GitHub: https://github.com/Simauniha
🔗 LinkedIn: https://www.linkedin.com/in/omisha-simauniha-39b000361

---
