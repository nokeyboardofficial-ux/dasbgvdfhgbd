let currentIndex = 0;
const items = document.getElementsByClassName('menu-item');

window.addEventListener('keydown', function(e) {
    // 38 = Up, 40 = Down
    if (e.keyCode === 38) { // Up
        items[currentIndex].classList.remove('selected');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        items[currentIndex].classList.add('selected');
    } 
    else if (e.keyCode === 40) { // Down
        items[currentIndex].classList.remove('selected');
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        items[currentIndex].classList.add('selected');
    }
    else if (e.keyCode === 13) { // Enter
        console.log("Selected: " + items[currentIndex].innerText);
        // Add your code here to send message back to Lua
    }
});

// Listen for messages from Lua
window.addEventListener('message', function(event) {
    if (event.data.action === "show") {
        document.body.style.display = "block";
    }
});
