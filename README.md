# Lottery Game

Welcome to the Lottery Game! This is a simple React application where users can play a lottery game by generating tickets and checking if they have won.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Concepts Implemented](#concepts-implemented)
- [Contributing](#contributing)

## Introduction
This project is a React-based lottery game. Users can generate tickets with random numbers and check if the sum of the numbers on their ticket equals a winning condition. The winning condition in this game is that the sum of the numbers on the ticket should be 15.
Following are the key points:
- Componnets with proper hierarchy. 
- Current winnig condition is when sum of ticket numbers is equal to 15 but it is highly dynamic can be changed by just changing the return statement of winCondition function
- Ticket of anynumbers can be generated

## Installation
To run this project locally, follow these steps:
1. Clone the repository: `git clone https://github.com/your-username/your-repository.git`
2. Navigate to the project directory: `cd your-repository`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and go to `http://localhost:3000` to view the application.

## Usage
Once the application is running, you'll see the Lottery Game interface. Here's how to use it:
- You'll see a ticket with randomly generated numbers.
- Click the "Get New Ticket" button to generate a new ticket.
- If the sum of the numbers on your ticket equals 15, you'll see a "Congratulations you won!" message.

## Concepts Implemented
This project implements several concepts including:
- React components and props
- State management with React hooks (useState)
- Conditional rendering based on win conditions
- Modular code organization using helper functions and separate components
- CSS styling for visual representation

## Contributing
Contributions are welcome! If you want to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Make sure to follow the existing code style and conventions.



