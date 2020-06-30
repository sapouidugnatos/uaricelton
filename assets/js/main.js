window.onload = function() {
    document.getElementById("theo-button").onclick = function() {
        document.getElementById("shader").style.display = "flex";
    }

    document.getElementById("box-close").onclick = function() {
        document.getElementById("shader").style.display = "none";
    }
};