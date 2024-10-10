
# Developer BINGO (PWA)

This project is a simple Bingo game built using JavaScript, jQuery, HTML, and CSS. Additionally, the project is configured as a Progressive Web App (PWA), allowing the game to be installed and used offline.

## Features

- Displays a Bingo grid with values fetched from a `data.json` file.
- Allows users to select and deselect cells by clicking on them.
- Checks if the selected cells match the winning combination.
- Displays a win message when the correct cells are selected.
- Uses the Fisher-Yates algorithm (optional) for shuffling the grid.
- PWA functionality allows the game to be installed and used offline.

## PWA Features

- **Service Worker**: Manages caching of app resources, enabling offline use.
- **Manifest**: Ensures that users can install the app on their devices and use it as a standalone app.
- **Offline Support**: Users can continue using the app when offline as resources are cached in advance.

## How It Works

1. **Data Loading**: Game data, such as the question, cell values, and winning combination (`winnums`), is loaded from an external `data.json` file.
2. **Cell Interaction**: Users can click on cells to select or deselect them. The selected state is visually indicated by adding or removing a `selected` class.
3. **Winning Condition**: The game checks if the selected cells match the predefined winning combination. If the correct cells are selected, the win message is displayed, and the game board is hidden.
4. **Installation and Offline Support**: Users can install the app on their device and use it offline via PWA capabilities.

## Files

### `index.html`

This is the main HTML file that contains the structure for the Bingo board, win message, and debug information. It also includes necessary meta tags for PWA functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#317EFB"/>
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="style.css">
    <title>Bingo Game</title>
</head>
<body>
    <div id="gameBoard">
        <h1 id="header"></h1>
        <p id="question"></p>
        <div id="cells">
            <!-- Cells 0-24 for the bingo grid -->
            <div class="cell" id="cell0"></div>
            <!-- ... repeat for cells 1 to 24 ... -->
        </div>
    </div>
    <div id="win">
        <h2 id="winText"></h2>
        <p id="gift"></p>
    </div>
    <script src="main.js"></script>
</body>
</html>
```

### `main.js`

This file contains the game logic, including:
- Loading the game data from the JSON file.
- Handling cell clicks and toggling their selected state.
- Checking if the selected cells match the winning combination.
- Displaying the win message and allowing the user to restart the game.

Key functions:
- **`checkSelectedCells(cells, indexes)`**: Checks if the selected cells match the indexes provided in the `winnums` array.
- **`shuffleArray(array)`**: (Optional) Shuffles the array of cell values using the Fisher-Yates algorithm.
- **Cell click event**: Toggles the selection of the clicked cell and checks the winning condition.

### `data.json`

This file contains the game data, including:
- `title`: The title of the game.
- `header`: The heading displayed on the game board.
- `bingo`: The main Bingo text.
- `win`: The message displayed when the player wins.
- `question`: The question or instruction for the player.
- `winnums`: The array of indexes representing the winning cells.
- `cell`: An array of objects representing the values and selected state of each cell.

### Example `data.json`:

```json
{
    "title": "BINGO",
    "header": "Developer BINGO",
    "bingo": "BINGO",
    "win": "You won!",
    "question": "Mammals?",
    "cell": [
        {"id": "cell0", "value": "Elephant", "selected": false},
        {"id": "cell1", "value": "Eagle", "selected": false},
        {"id": "cell2", "value": "Tiger", "selected": false},
        {"id": "cell3", "value": "Lizard", "selected": false},
        {"id": "cell4", "value": "Shark", "selected": false},
        {"id": "cell5", "value": "Frog", "selected": false},
        {"id": "cell6", "value": "Dolphin", "selected": false},
        {"id": "cell7", "value": "Crocodile", "selected": false},
        {"id": "cell8", "value": "Kangaroo", "selected": false}
    ],
    "winnums": [0, 2, 6, 8],
    "gift": "You can ask the organizers for a gift!"
}
```

### `manifest.json`

This file provides PWA metadata, including icons, the app's name, and color scheme, allowing the app to be installed on devices.

Example `manifest.json`:

```json
{
  "name": "Developer BINGO",
  "short_name": "BINGO",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#317EFB",
  "icons": [
    {
      "src": "icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

### `service-worker.js`

This file manages the caching of resources to enable offline usage.

Example `service-worker.js`:

```javascript
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('bingo-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/main.js',
                '/data.json',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
```

## How to Play

1. Open the app and see the Bingo grid with a question.
2. Click on the cells to select them. The selected state is visually displayed.
3. When the correct cells are selected, a win message is displayed, and the game can be restarted.
4. Install the app via PWA functionality and enjoy offline gameplay.

## Setup and Installation

1. Clone the repository or download the project files.
   
   ```bash
   git clone https://github.com/your-username/bingo-game.git
   ```

2. Ensure you have the `data.json` file with the necessary game data (as shown above).
3. Open `index.html` in your browser to play the game.
4. The app supports PWA functionality, so you can install it and use it offline.

## Dependencies

- [jQuery](https://jquery.com/) is used for DOM manipulation and event handling.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
