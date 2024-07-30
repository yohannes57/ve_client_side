# React + Vite

# VisitEthiopia Frontend

- This project is my capstone project for the Per Scholas final assessment. Welcome to the frontend repository for the VisitEthiopia website. This application aims to provide comprehensive information for travelers about various destinations in Ethiopia, making it easier to explore and plan trips to this beautiful country. Through this project, I have integrated a wide range of technologies and best practices learned during the course to create a robust and user-friendly platform.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [Backend Repository](#Backend-repository)

## Project Overview

The VisitEthiopia website is designed to offer detailed information about Ethiopia’s destinations, including historical sites, natural wonders, and cultural landmarks. This frontend application is built with React and styled with Bootstrap, aiming for a responsive and user-friendly interface

## Features

- User Authentication (Sign Up and Sign In)
- Destination details fetching from the backend
- Crud operations availiable
- Protected routes for dashboard access
- Admin functionalities for managing destinations
- Responsive design

## Tech Stack

- **Frontend**: React, React Router, Bootstrap
- **State Management**: Context API with useReducer
- **React Hooks**: useContext,useEffect,useParams,useCookies,useState
- **HTTP Client**: Axios
- **Styling**: CSS Modules,Bootsrap,and some React Bootstarp
- **Authentication**: Custom Auth Context

## File Structure

visitE-client/

- ├── src/
  │ ├── components/
  │ │ ├── Footer/
  │ │ ├── Header/
  │ │ │ ├── Header.css
  │ │ │ ├── Header.jsx
  │ │ │ ├── HeaderProps.jsx
  │ │ ├── Sections/
  │ │ │ ├── Props_for_three.jsx
  │ │ │ ├── Props_one.jsx
  │ │ │ ├── Props_two.jsx
  │ │ │ ├── SectionOne.jsx
  │ │ │ ├── SectionThree.css
  │ │ │ ├── SectionThree.jsx
  │ │ │ ├── DB_data.jsx
  │ │ │ ├── DB_facts.jsx
  │ │ │ ├── Destination.jsx
  │ │ │ ├── EachDestination.jsx
  │ ├── pages/
  │ │ ├── Dashboard/
  │ │ │ ├── AddDestination_form.jsx
  │ │ │ ├── Dashboard.css
  │ │ │ ├── Dashboard.jsx
  │ │ │ ├── DeleteLinks.jsx
  │ │ │ ├── DestinationUpdate.jsx
  │ │ │ ├── Settings.jsx
  │ │ │ ├── UpdateLinks.jsx
  │ │ ├── Login/
  │ │ │ ├── Login.css
  │ │ │ ├── Login.jsx
  │ │ ├── Signup/
  │ │ │ ├── Signup.css
  │ │ │ ├── Signup.jsx
  │ ├── StateProvider/
  │ │ ├── StateProvider.jsx
  │ │ ├── Auth.jsx
  │ │ ├── ProtectedRoute.jsx
  │ ├── App.css
  │ ├── App.jsx
  │ ├── index.css
  │ ├── main.jsx
  │ ├── reducer.jsx
  │ ├── Routings.jsx

## Usage

- Navigate to the application: Open http://localhost:3000 in your browser.
- Login/Sign Up: Use the authentication features to sign up or log in.
- Explore Destinations: Browse the destinations via the header dropdown.
- Admin Dashboard: Access the dashboard (for authorized users) to add, update, or delete destinations, and settings feature to change color ,bg and font of the whole page

## Contributing

- Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Open a Pull Request.

## Contact

- For any questions or feedback, please contact:

- Name: Yohannes M.
- Email: ytmderes@gmail.com
- LinkedIn: Your https://linkedin.com/in/yohannes-molla

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yohannes57/ve_client_side.git
   cd ve_client_side
   ```
   npm install

## Backend Repository

- The backend for this project can be found at: [VisitEthiopia Backend](https://github.com/yohannes57/ve_server_side.git)

- Make sure to set up the backend by following the instructions in its README file.
