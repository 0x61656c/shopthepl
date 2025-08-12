function togglePlayButton3() {
    // Select all elements with the .cs-video-wrapper class
    const pictures = document.querySelectorAll('#hero-2154 .cs-video-wrapper');
    // Select all elements with the .cs-play class
    const buttons = document.querySelectorAll('#hero-2154 .cs-play');

    // Add a click event listener to each .cs-video-wrapper element
    pictures.forEach(picture => {
        picture.addEventListener('click', () => {
            // Loop through each .cs-play element and toggle the cs-hide class
            buttons.forEach(button => {
                button.classList.toggle('cs-hide');
            });
        });
    });
}

// Call the function to activate the event listeners
togglePlayButton3();

function toggleVideoPlayback3() {
    // Select the video element
    const video = document.querySelector('#hero-2154 video');

    // Add a click event listener to the video
    video.addEventListener('click', () => {
        // Check if the video is paused
        if (video.paused) {
            video.play(); // Play the video if it is paused
        } else {
            video.pause(); // Pause the video if it is playing
        }
    });
}

// Call the function to activate the event listener
toggleVideoPlayback3();
                            