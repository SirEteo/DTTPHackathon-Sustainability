// Function to toggle the content visibility
function toggleContent(containerId) {
    var contentId = containerId + 'Content';
    var content = document.getElementById(contentId);

    // Toggle the visibility using classList.toggle
    content.classList.toggle('visible');
}