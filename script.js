document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-music');
    
    // Function to play the audio
    function playAudio() {
        audio.play().catch(error => {
            console.log('Autoplay was prevented, user interaction required to play the audio.');
        });
    }

    // Try to play the audio once the page loads
    playAudio();

    // If autoplay was prevented, play the audio when the user clicks anywhere on the page
    document.body.addEventListener('click', playAudio, { once: true });
});
