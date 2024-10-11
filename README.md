
# Elektriauto BINGO

This is a simple Bingo web application called **Elektriauto BINGO** where users can interact with a grid of cells related to electric vehicle experiences. The goal is to select cells based on the prompts, and if a winning combination is selected, a success message with a prize is displayed.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Customization](#customization)
- [Technologies Used](#technologies-used)

## Features

- Interactive Bingo grid with predefined prompts.
- Supports multiple winning patterns (e.g., corners, diagonal).
- Visual feedback on cell selection.
- Shuffle functionality for a new board on each reset.
- Fully responsive layout using Bootstrap.
- Simple JSON configuration for game settings and prompts.

## Project Structure

```text
.
├── index.html         # Main HTML file for the Bingo application
├── data.json          # JSON file containing Bingo prompts and win conditions
├── js/
│   └── main.js            # JavaScript file handling the game logic and interactivity
├── css/
│   └── styles.css     # Custom styles for the application
└── img/
    └── icon-512x512.png # Application icon
```

### Key Files

- **index.html**: This is the main layout file that structures the Bingo game, including the grid and buttons for interaction.
- **data.json**: Holds the content and configurations like Bingo prompts, winning patterns, and success messages.
- **main.js**: Contains all the game logic such as grid creation, handling clicks, checking win conditions, and resetting the game.

## Getting Started

1. Clone or download the project files.
2. Open `index.html` in any modern web browser.

Alternatively, you can host it on any static web server for better accessibility.

## How to Play

1. Start the game by interacting with the Bingo grid on the homepage.
2. Each cell has a prompt related to electric vehicles (e.g., "I've driven an electric car").
3. Click on a cell if it applies to you.
4. If a winning pattern is achieved (e.g., all corners or a diagonal line), you will see a congratulatory message and a prize description.
5. To reset the game, click the **Alusta uuesti** button.

## Customization

You can easily modify the game by editing the `data.json` file:

- **title**: The title of the game.
- **header**: The main header text displayed in the game.
- **bingo**: The text that appears when a Bingo is achieved.
- **reset**: The text for the reset button.
- **question**: The prompt displayed above the Bingo grid.
- **cell**: An array of Bingo prompts. Each item has an `id`, `value` (the prompt text), and `selected` (default is `false`).
- **variant**: Defines the winning conditions and corresponding messages.

## Technologies Used

- **HTML5** for structuring the web page.
- **Bootstrap** for responsive layout and styling.
- **jQuery** for DOM manipulation and event handling.
- **JSON** for storing the Bingo game data and configurations.
- **JavaScript (ES6)** for game logic and interactivity.

## License

This project is open-source and free to use under the MIT License.
