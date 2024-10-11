// Function to check if specific cells are selected
function checkSelectedCells(cells, indexes) {
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
            console.error("Cell at index " + index + " is not valid.");
            return false;
        }
    });

    return allSelected; // Return true if all cells are selected, else false
}

// Function to shuffle an array using Fisher-Yates (Knuth) Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

$(document).ready(function() {

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

        // Shuffle the cell array
        //var cell = shuffleArray(data.cell.slice());
        cells = data.cell.slice();

        // Populate HTML elements with shuffled values       
        for (let i = 0; i < cells.length; i++) {
            $("#cell" + i).text(cells[i].value);
        }

    }).fail(function() {
        console.error('Failed to load JSON data.');
        $("#debug").text("Failed to load JSON data.");
    });

    // Add click event for .col elements
    $(".cell").click(function() {
        var id = $(this).attr("id");

        // Find the corresponding cell in the array
        var cellIndex = cells.findIndex(cells => cells.id === id);

        // Toggle the selected state
        cells[cellIndex].selected = !cells[cellIndex].selected;

        // Toggle the visual appearance based on the selected state
        if (cells[cellIndex].selected) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }

        // Update the debug information with the current state of cells
        // $("#debug").text("Debug: Cell " + cellIndex + " is " + (cells[cellIndex].selected ? "selected" : "unselected"));

        for (let i = 0; i < winnums.length; i++) {
            if (checkSelectedCells(cells, winnums[i].num)) {
                $("#winText").text(winnums[i].win);
                $("#gift").text(winnums[i].gift);
        
                $('#win').show();
            }                
        }

    });

    $('#win').click(function() {
        location.reload(true);  // Forces the browser to reload the page from the server (ignoring the cache)
    });

    $('#reset').click(function() {
        location.reload(true);  // Forces the browser to reload the page from the server (ignoring the cache)
    });


    // $("#debug").text("Debug");
    
});

