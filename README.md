# AppHub 📱

## Description

**AppHub** is a responsive web application designed to showcase mobile applications in a clean, user-friendly interface. Users can explore, search, and install apps with ease. The project focuses on interactivity, responsive design, and data visualization using JSON and charts.

Key Features:

- Responsive design for all devices.
- Explore apps with search, filters, and live updates.
- View app details including ratings, reviews, downloads, and description.
- Install apps with localStorage tracking and dynamic UI updates.
- Sort apps by size.
- Visualize app reviews using Recharts.
- Custom error page for invalid routes and loading animations during navigation and operations.
- Fully functional My Installation page to manage installed apps.

## Technologies Used

- **Frontend:** React.js, HTML5, TailwindCSS, JavaScript
- **Routing:** React Router
- **State Management & Hooks:** React Hooks
- **Charts:** Recharts
- **Notifications:** React Toastify
- **Data Storage:** LocalStorage
- **Version Control:** GitHub
- **Design Reference:** Figma

## Project Structure

- **Home Page**
  - Banner with App Store and Play Store buttons
  - States section with summary cards
  - Top Apps section showing popular apps
- **All Apps Page**
  - Searchable and filterable list of all apps
  - Displays total app count
  - Live search functionality with "No App Found" message
- **App Details Page**
  - App information including title, image, downloads, and rating
  - Install button with localStorage support
  - Review chart visualization
  - App description section
- **My Installation Page**
  - Displays all installed apps
  - Uninstall functionality with localStorage removal and Toast notification
  - Sort apps by downloads (High-Low / Low-High)
- **Error Page**
  - Custom page for invalid routes
- **Loading Animation**
  - Displayed during page navigation and search operations

## What I Learned from This Project

Working on **AppHub** was an enriching experience that helped me improve both my technical and design skills. Here’s a summary of my key learnings:

- **Responsive Web Design:** Learned how to make a web application responsive for all devices, ensuring a seamless user experience across mobile, tablet, and desktop screens.
- **React.js & Component-Based Architecture:** Gained hands-on experience building reusable components, managing state with React Hooks, and structuring a React application efficiently.
- **Routing & Navigation:** Implemented dynamic routing with React Router, including active route highlighting and custom error pages for invalid routes.
- **Data Handling & JSON:** Learned to manage app data using JSON arrays, filter and search data dynamically, and render lists based on user interactions.
- **LocalStorage Management:** Implemented localStorage to store installed apps, manage state persistence, and update the UI accordingly.
- **Interactivity & UX Enhancements:** Added interactive features like install/uninstall buttons, search with live updates, sorting by downloads, and Toast notifications for better user feedback.
- **Charts & Data Visualization:** Learned to visualize app reviews using the **Recharts** library to make data easy to interpret.
- **Loading Animations & Optimizations:** Implemented loading animations during navigation and search operations to improve user experience.
- **Git & Version Control:** Practiced maintaining a GitHub repository with meaningful commits and proper project documentation.
- **Figma Integration & Design Consistency:** Followed a Figma design reference to maintain visual consistency and create a polished UI.
- **Problem Solving & Debugging:** Gained experience in troubleshooting React issues, handling edge cases, and ensuring the application works error-free in production.

Overall, this project helped me strengthen my **React development skills, UI/UX design sense, and full-stack thinking** from handling data to deploying a fully functional web application.
