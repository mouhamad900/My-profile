// JavaScript to toggle bio text visibility
function toggleBio() {
    const bioText = document.getElementById('bio-text');
    const showMoreButton = document.getElementById('show-more-btn');

    if (bioText.classList.contains('hidden')) {
        bioText.classList.remove('hidden');
        showMoreButton.textContent = 'Show Less';
    } else {
        bioText.classList.add('hidden');
        showMoreButton.textContent = 'Show More';
    }
}
