    // let deferredPrompt;
    // const addToHomeScreenButton = document.getElementById('install');

    // // Listen for beforeinstallprompt event
    // window.addEventListener('beforeinstallprompt', (e) => {
    //   e.preventDefault(); // Prevent the automatic mini-infobar
    //   deferredPrompt = e;

    //   // Show the Add to Home Screen button
    //   addToHomeScreenButton.style.display = 'block';

    //   // Add click event to button
    //   addToHomeScreenButton.addEventListener('click', () => {
    //     // Show the install prompt
    //     deferredPrompt.prompt();
        
    //     // Wait for user to respond to the prompt
    //     deferredPrompt.userChoice.then((choiceResult) => {
    //       if (choiceResult.outcome === 'accepted') {
    //         console.log('User accepted the install prompt');
    //       } else {
    //         console.log('User dismissed the install prompt');
    //       }
    //       deferredPrompt = null; // Reset the prompt
    //     });
    //   });
    // });

    // // Listen for appinstalled event
    // window.addEventListener('appinstalled', (event) => {
    //   console.log('PWA installed');
      
    //   // Hide the Add to Home Screen button once installed
    //   addToHomeScreenButton.style.display = 'none';
    // });

$(document).ready(function() {
    
    // Function to check if specific cells are selected
    const checkSelectedCells = (function(cells, indexes) {
        // Ensure that 'indexes' is an array
        if (!Array.isArray(indexes)) {
            console.error("The 'indexes' parameter must be an array.");
            return false;
        }

        // Ensure that 'cells' is defined and has enough elements
        if (!Array.isArray(cells) || cells.length === 0) {
            console.error("The 'cells' array is not defined or empty.");
            return false;
        }

        // Use 'every()' to check if all specific cells are selected
        var allSelected = indexes.every(function(index) {
            // Ensure the index is valid within the cells array
            if (cells[index] && cells[index].selected !== undefined) {
                return cells[index].selected; // Return true if the cell is selected
            } else {
                return false;
            }
        });
        
        return allSelected; // Return true if all cells are selected, else false
    });

    // Function to shuffle an array using Fisher-Yates (Knuth) Shuffle
    const shuffleArray = (function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    });

    const resetStates = (function() {
        $.each(cells, function(index, cell) {
            cells[index].selected = false;
            $('#'+cells[index].id).removeClass('selected');
        });
    });

    // Disable text selection globally
    $('body').css({
        'user-select': 'none',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none'
    });

    var cells = [];
    var winnums;
    
    $('#win').hide();

    // Fetch the JSON data from an external file
    $.getJSON("data.json", function(data) {

        winnums = data.variant;

        $("#title").text(data.title);
        $("#header").text(data.header);
        $("#question").text(data.question);
        $("#bigText").text(data.bingo);
        $("#reset").text(data.reset);
        $("#install").text(data.install);

        // Shuffle the cell array
        // var cell = shuffleArray(data.cell.slice());
     //   cells = data.cell.slice();

        const texts = data.cell.slice();
            
        // Leia massiivi pikkus
        var elementCount = texts.length;

        // Arvuta ruutjuur massiivi pikkusest
        var gridSize = Math.sqrt(elementCount);

        // Leia HTML element, kuhu grid pannakse
        var $grid = $('#grid');
        $grid.empty(); // Tühjenda, kui midagi on

        // Kontrolli, kas ruutjuur on täisarv
        if (gridSize % 1 !== 0) {
            $grid.append("<p><strong>Error</strong>: The number of massive elements does not form a square!</p>");
            return;
        }

        // Jaga elemendid ridadesse
        $.each(texts, function(index, cell) {
            // Iga `gridSize`-nda elemendi järel loo uus rida
            if (index % gridSize === 0) {
                $grid.append('<div class="row justify-content-center"></div>');
            }

            // Lisa veerg viimati loodud ritta
            var $lastRow = $grid.children().last();

            // Initialize cells[index] as an object
            cells[index] = {};  // <--- Ensure cells[index] is an object
            cells[index].id = 'cell' + index;
            cells[index].text = cell;
            cells[index].selected = false;

            // Create a new column with custom HTML
            var $newCol = $('<div>', { id: 'cell' + index, class: 'col cell unselected' });

            // Add the HTML content into the column
            $newCol.html(cell);

            // Append the new column to the last row
            $lastRow.append($newCol);

        });

    }).fail(function() {
        console.error('Failed to load JSON data.');
        $("#debug").text("Failed to load JSON data.");
    });

    // Add click event for dynamically created .cell elements using event delegation
    $(document).on('click', '.cell', function() {
        var id = $(this).attr("id");

        // Find the corresponding cell in the array
        var cellIndex = cells.findIndex(cell => cell.id === id);

        // Toggle the selected state
        cells[cellIndex].selected = !cells[cellIndex].selected;

        // Toggle the visual appearance based on the selected state
        if (cells[cellIndex].selected) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }

        for (let i = 0; i < winnums.length; i++) {
            if (checkSelectedCells(cells, winnums[i].num)) {
                $("#winText").text(winnums[i].win);
                $("#gift").text(winnums[i].gift);
        
                $('#win').show();
            }                
        }

    });

    $('#win').on('click', function() {
        resetStates();
        $('#win').hide();
    });

    $('#reset').on('click', function() {
        resetStates();
    });

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('Service worker registered with scope:', registration.scope);
        }).catch(function(error) {
            console.log('Service worker registration failed:', error);
        });
    }

});
