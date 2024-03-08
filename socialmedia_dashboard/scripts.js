// Simulated data for demonstration purposes
const dummyFeeds = [
    { platform: 'Twitter', username: 'twitter_user1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { platform: 'Facebook', username: 'facebook_user1', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { platform: 'Instagram', username: 'instagram_user1', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
];

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginSection = document.getElementById('login-section');
    const feedsSection = document.getElementById('feeds-section');
    const loginForm = document.getElementById('login-form');

    // Display login section when login button is clicked
    loginBtn.addEventListener('click', () => {
        loginSection.style.display = 'block';
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        // Simulated login process (replace with actual authentication)
        if (username === 'user' && password === 'password') {
            // Display feeds section if login is successful
            loginSection.style.display = 'none';
            feedsSection.style.display = 'block';
            displayFeeds();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    // Function to display dummy feeds (replace with actual feed retrieval logic)
    function displayFeeds() {
        dummyFeeds.forEach(feed => {
            const feedElement = document.createElement('div');
            feedElement.classList.add('feed');
            feedElement.innerHTML = `
                <div><strong>${feed.platform}</strong> - ${feed.username}</div>
                <div>${feed.content}</div>
            `;
            feedsSection.appendChild(feedElement);
        });
    }
});