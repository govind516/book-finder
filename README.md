# Book Finder App

Welcome to the **Book Finder App**! This application allows users to search for books by title, author, and language using the Open Library API. The app displays search results with book covers, titles, authors, and publication details in an interactive and visually appealing interface.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Requirements](#requirements)
4. [Project Setup](#project-setup)
5. [Running the App](#running-the-app)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [API Details](#api-details)
9. [Screenshots](#screenshots)
10. [License](#license)

---

## Features

- Search for books by **title**, **author**, and **language**.
- Interactive and user-friendly interface with:
  - Book covers (or placeholders when unavailable).
  - Titles, authors, and publication details.
- Beautiful **hover effects** for book cards.
- Loading spinner animation during API requests.
- Error handling for failed requests.
- Responsive design optimized for desktop and mobile screens.

---

## Tech Stack

The app uses the following technologies:

- **Frontend:** React.js (with Hooks)
- **Styling:** Tailwind CSS
- **API Integration:** Open Library API
- **Package Manager:** npm (Node Package Manager)

---

## Requirements

Before running this project, ensure you have the following installed:

1. **Node.js** (v14 or higher) - [Download Here](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. A code editor like **VS Code**.

---

## Project Setup

Follow these steps to set up and run the project:

### 1. Clone the Repository

Clone the project to your local machine using Git:

```bash
https://github.com/govind516/book-finder.git
```

Navigate into the project directory:

```bash
cd book-finder
```

### 2. Install Dependencies

Install the required npm packages by running:

```bash
npm install
```

### 3. Tailwind CSS Configuration (if needed)

Ensure Tailwind CSS is correctly set up in your project. If you need to configure it manually, run:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then, add the following to your `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Include Tailwind's CSS in your `src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Running the App

To start the development server, run:

```bash
npm start
```

The app will be available at **`http://localhost:3000`**.

---

## Usage

1. Enter the **title** or **author** of a book in the search inputs.
2. Use the dropdown menu to select a specific **language** (optional).
3. Click the **Search** button to retrieve results.
4. View the results displayed as cards with book details:
   - Book cover image (if available).
   - Book title.
   - Author(s).
   - First publication year.
5. If no cover image is available, a placeholder will be displayed.

---

## Project Structure

The project has the following structure:

```
book-finder/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js       # Main React Component
│   ├── index.js     # ReactDOM Rendering
│   ├── index.css    # TailwindCSS Styling
│   ├── assets/      # Images or static assets (optional)
│   └── components/  # Reusable components (optional)
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

---

## API Details

The app integrates with the **Open Library API**:

- **Base Endpoint:** `https://openlibrary.org/search.json`
- **Query Parameters:**
  - `title`: Search for a book by title.
  - `author`: Search for a book by the author.
  - `language`: Search for books in a specific language.
- **Cover Images:** Book covers are fetched using:

```
https://covers.openlibrary.org/b/id/{cover_id}-L.jpg
```

Example request:

```
https://openlibrary.org/search.json?title=Leaves+of+Grass&author=Walt+Whitman
```

---

## Screenshots

### Home Page with Search Form

![Screenshot 2024-12-15 231249](https://github.com/user-attachments/assets/2b19f4b4-373f-498a-8769-4cefeb727386)

### Book Results

![Screenshot 2024-12-15 231150](https://github.com/user-attachments/assets/6e5c6b21-7c40-4905-969d-20abbee45d43)

### No Cover Placeholder

![Screenshot 2024-12-15 231226](https://github.com/user-attachments/assets/083d2920-9fa3-4c49-a27c-b62767ed6457)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out the **Book Finder App**! Feel free to open an issue if you have any questions or suggestions. 😊

