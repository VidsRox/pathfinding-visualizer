# Pathfinding Visualizer

## Overview

This Pathfinding Visualizer is an interactive web application built using **React**, **TypeScript**, and **TailwindCSS**. It allows users to explore and visualize popular maze generation and pathfinding algorithms. The app provides a hands-on way to understand how these algorithms work, their efficiency, and how they handle real-world scenarios.

## Features

- **Maze Generation Algorithms:**
  - Binary Tree
  - Recursive Division

- **Pathfinding Algorithms:**
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - Dijkstra's Algorithm

- **Custom Maze Creation:**
  - Users can manually create and edit mazes on the grid.
  - Watch how different algorithms work in real-time.

- **Interactive Visualization:**
  - Control the speed of the visualization process.
  - Watch pathfinding algorithms dynamically explore the grid.

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - TailwindCSS

## Project Structure

The project follows a standard React project structure, organized as follows:

```bash
src/
├── components/        # Reusable React components (Grid, Node, Controls)
├── algorithms/        # Pathfinding and maze generation algorithms
├── styles/            # TailwindCSS configuration and styles
├── utils/             # Helper functions and utilities
└── App.tsx            # Main application component
```

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pathfinding-visualizer.git
   cd pathfinding-visualizer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## How to Use

1. **Select a Maze Algorithm**: Choose a maze generation algorithm to create a random maze.
2. **Select a Pathfinding Algorithm**: Pick one of the pathfinding algorithms to visualize how it explores the maze.
3. **Create Custom Mazes**: Draw obstacles manually on the grid for custom scenarios.
4. **Adjust Speed**: Control the speed of the visualization for a more dynamic experience.

## Learnings

- **Algorithm Efficiency**: Building this project enhanced my understanding of algorithm efficiency, edge cases, and how different algorithms solve similar problems with varying performances.
- **CS Fundamentals**: I deepened my knowledge of graph traversal and shortest-path algorithms by implementing them in a visual and practical manner.
  
## Credits

Big shoutout to [TechPrep](https://www.youtube.com/@TechPrep) for the inspiration!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or suggestions for improvements!

