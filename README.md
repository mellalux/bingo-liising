
# Developer BINGO

Developer BINGO is a simple web application where users can interact with a grid of cells containing different statements related to electric vehicle experiences. The goal is to select the relevant cells and achieve a winning combination.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [Service Worker](#service-worker)
- [License](#license)

## Features

- Interactive grid with statements related to electric vehicle experiences.
- Multiple winning conditions (e.g., corners, diagonals).
- Visual feedback when selecting cells.
- Shuffle functionality to randomize the grid.
- Responsive design using Bootstrap.
- Service worker for offline functionality.

## Project Structure

```
.
├── index.html         # Main HTML file
├── manifest.json      # Web manifest file for PWA
├── service-worker.js  # Service worker for offline support
├── data.json          # JSON file containing the Bingo data
├── js/main.js         # JavaScript file for game logic
├── css/styles.css     # Custom CSS for the application
└── icons/             # Application icons for different devices
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository or download the project files.
2. Open `index.html` in your web browser.

Alternatively, you can deploy the project on any static web server for wider access.

## How to Play

1. The Bingo grid displays several statements. Click on the cells that apply to you.
2. When a winning pattern (e.g., a diagonal or corners) is achieved, a success message will appear.
3. Use the "Reset" button to clear your selections and start a new game.

## Customization

You can customize the game by editing the `data.json` file. This file allows you to:

- Change the Bingo grid statements.
- Modify the winning patterns and associated messages.
- Enable or disable the shuffle option for the grid.

## Technologies Used

- **HTML5** for structuring the web page.
- **CSS3 (Bootstrap)** for responsive design and layout.
- **JavaScript (ES6)** for game logic and dynamic updates.
- **jQuery** for DOM manipulation and event handling.
- **Service Worker** for offline capabilities (as a Progressive Web App).

## Service Worker

The `service-worker.js` file enables the app to work offline by caching important files, such as HTML, CSS, JavaScript, and images. This improves performance and allows users to access the app without an internet connection.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the application with proper attribution.
