# Workout Tracker

Welcome to the MERN Workout Tracker! This application is designed to help you keep track of your workouts and monitor your progress. It's built using the MERN (MongoDB, Express.js, React, Node.js) stack, providing a robust and efficient platform for managing your fitness routine.

## Features

1. **Add New Workout:**
   - Easily add a new workout to your routine.
   - Specify details such as exercise type, duration, sets, and repetitions.
   - Log both cardio and resistance workouts.

2. **Delete Completed Workouts:**
   - Mark a workout as completed and remove it from your active list.
   - Maintain a clean and updated workout log.

3. **Track Progress:**
   - Visualize your workout history to track your progress over time.
   - Gain insights into your fitness journey and set new goals.


## Technologies Used

- **MongoDB:** Database for storing workout data.
- **Express.js:** Web application framework for handling server-side logic.
- **React:** Frontend library for building user interfaces.
- **Node.js:** Server-side JavaScript runtime.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kxrishx03/workout-tracker.git
   cd mern-workout-tracker
      
# Install server-side dependencies
   cd server
   npm install

# Install client-side dependencies
   cd ../client
  npm install

# Set up MongoDB
    Create a MongoDB Atlas account or set up a local MongoDB instance.
    Update the connection string in server/config/db.js with your MongoDB URI.

# Start the server
   cd ../server
   npm start

# Start the client (in a separate terminal)
cd ../client
npm start

# Open in browser
    
    
