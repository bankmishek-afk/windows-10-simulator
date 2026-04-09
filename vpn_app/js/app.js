document.addEventListener('DOMContentLoaded', () => {
    const connectBtn = document.getElementById('connect-btn');
    const statusEl = document.getElementById('status');
    let isConnected = false;

    connectBtn.addEventListener('click', () => {
        if (isConnected) {
            // Disconnect
            statusEl.textContent = 'Disconnected';
            statusEl.style.color = '#333';
            connectBtn.textContent = 'Connect';
            isConnected = false;
        } else {
            // Connect
            statusEl.textContent = 'Connecting...';
            statusEl.style.color = '#f0ad4e';
            connectBtn.textContent = 'Connecting...';

            setTimeout(() => {
                statusEl.textContent = 'Connected';
                statusEl.style.color = '#5cb85c';
                connectBtn.textContent = 'Disconnect';
                isConnected = true;
            }, 2000); // Simulate connection time
        }
    });

    const serverListItems = document.querySelectorAll('.server-list li');
    serverListItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!isConnected) {
                // You can add logic here to select a server
                console.log(`Server selected: ${item.querySelector('span').textContent}`);
            }
        });
    });
});
