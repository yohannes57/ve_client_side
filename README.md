# React + Vite

# VisitEthiopia Frontend

This project was my capstone project for Per Scholas final assessement .
Welcome to the frontend repository for the VisitEthiopia website. This project aims to provide comprehensive information for travelers about various destinations in Ethiopia.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Setup](#setup)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

The VisitEthiopia website is designed to offer detailed information about Ethiopia’s destinations, including historical sites, natural wonders, and cultural landmarks. This frontend application is built with React and styled with Bootstrap, aiming for a responsive and user-friendly interface.

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
├── src/
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

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yohannes57/ve_client_side.git
   cd ve_client_side
   ```
   npm install

## Backend Repository

The backend for this project can be found at: [VisitEthiopia Backend](https://github.com/yohannes57/ve_server_side.git)

Make sure to set up the backend by following the instructions in its README file.
