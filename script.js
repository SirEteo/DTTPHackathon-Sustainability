function toggleContent(containerId) {
    var contentId = containerId + 'Content';
    var content = document.getElementById(contentId);

    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}