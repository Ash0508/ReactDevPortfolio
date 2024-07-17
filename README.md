# MERN Portfolio Website

# 📋 Project Overview

This portfolio website is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and showcases a multi-page layout. It is designed to be fully responsive, ensuring optimal viewing across various devices.

Live Demo: [Portfolio Website](#) <!-- Replace # with the actual link to your live demo -->

GitHub Repository: [Portfolio-Website-MERN](https://github.com/Ash0508/portfolio-website)

# ✨ Features

- **Styled with React and Custom CSS**: Easy to customize colors and styles using React and CSS.
- **Fully Responsive**: Designed to be responsive and user-friendly on all devices.

# 📦 Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing data.
- **Node.js**: A JavaScript runtime for server-side development.
- **Mongoose**: A MongoDB object modeling tool for Node.js.
- **Axios**: A promise-based HTTP client for the browser and Node.js.

# 🚀 How to Get Started?

To get started with this project, follow these instructions. Ensure you have Node.js and Git installed globally on your machine.

# 🛠 Installation and Setup Instructions

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/Ash0508/portfolio-website.git
    ```

2. **Navigate to the Project Directory:**
    ```sh
    cd portfolio-website
    ```

3. **Install Server Dependencies:**
    ```sh
    cd backend
    npm install
    ```

4. **Install Client Dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

5. **Set Up Environment Variables:**
    - Create a `.env` file in the `backend` directory and add the following variables:
        ```plaintext
        MONGO_URI=<your_mongo_db_connection_string>
        PORT=5000
        ```
    - Create a `.env.local` file in the `frontend` directory and add the following variable:
        ```plaintext
        REACT_APP_API_URL=http://localhost:5000/api
        ```

6. **Start the Development Server:**
    - Start the backend server:
        ```sh
        cd backend
        npm start
        ```
    - Start the frontend development server:
        ```sh
        cd ../frontend
        npm start
        ```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

# 🤝 Contributing

We welcome contributions to enhance this project. Feel free to fork the repository and create a pull request with your changes. Here are some ways you can contribute:

- **Bug Reports & Feature Requests**: If you encounter any issues or have feature suggestions, please create a GitHub issue.
- **Pull Requests**: If you'd like to contribute code, please fork the repository and submit a pull request.

Show some ❤️ by giving a star ⭐ to this repository!
