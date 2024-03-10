$(document).ready(function() {
    var textArray = ["  Telecommunication Engineer", " Backend Developer"];
    var currentIndex = 0;
    var typingSpeed = 100; // Adjust typing speed as needed
  
    function typeText() {
        var currentText = textArray[currentIndex];
        var currentTextLength = currentText.length;
        var currentTextIndex = 0;
        var typingInterval = setInterval(function() {
            if (currentTextIndex < currentTextLength) {
                $('#typing-effect').append(currentText[currentTextIndex]);
                currentTextIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(deleteText, 1000); // Wait for 1 second before deleting text
            }
        }, typingSpeed);
    }
  
    function deleteText() {
        var currentText = textArray[currentIndex];
        var currentTextLength = currentText.length;
        var currentTextIndex = currentTextLength;
        var deletingInterval = setInterval(function() {
            if (currentTextIndex > 0) {
                $('#typing-effect').text(currentText.substring(0, currentTextIndex - 1));
                currentTextIndex--;
            } else {
                clearInterval(deletingInterval);
                currentIndex = (currentIndex + 1) % textArray.length; // Move to the next text
                setTimeout(typeText, 1000); // Wait for 1 second before typing next text
            }
        }, typingSpeed);
    }
  
    typeText(); // Start typing the first text
  });