// Listen for visibility changes on the document
document.addEventListener('visibilitychange', () => {
    const video = document.querySelector('video'); // Get the video element
    if (!video) return;

    if (document.hidden) {
        // Pause the video when the tab is not visible
        if (!video.paused) {
            video.pause();
        }
    } else {
        // Resume the video when the tab becomes visible
        if (video.paused) {
            video.play();
        }
    }
});
