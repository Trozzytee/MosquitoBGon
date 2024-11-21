// Simulate device connection status
let deviceConnected = false; // Initially disconnected

// Function to toggle device connection (for simulation)
function toggleDeviceConnection() {
  deviceConnected = !deviceConnected;
  const status = document.getElementById('status');
  if (deviceConnected) {
    status.innerText = "Device Status: Online";
    hideErrorMessage();
  } else {
    status.innerText = "Device Status: Offline";
    showErrorMessage("Device is disconnected or switched off!");
  }
}

// Simulate a button to toggle connection (for testing)
const statusBar = document.getElementById('status');
statusBar.addEventListener('click', toggleDeviceConnection);

// Event listeners for buttons with device check
document.getElementById('sprayButton').addEventListener('click', () => {
  if (!deviceConnected) {
    showErrorMessage("Device is disconnected or switched off!");
    return;
  }
  document.getElementById('status').innerText = "Device Status: Spray Activated";
  hideErrorMessage();
});

document.getElementById('soundButton').addEventListener('click', () => {
  if (!deviceConnected) {
    showErrorMessage("Device is disconnected or switched off!");
    return;
  }
  document.getElementById('status').innerText = "Device Status: Sound Activated";
  hideErrorMessage();
});

// Timer setting with device check
document.getElementById('setTimerButton').addEventListener('click', () => {
  if (!deviceConnected) {
    showErrorMessage("Device is disconnected or switched off!");
    return;
  }

  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;
  const duration = document.getElementById('duration').value;

  if (!startTime || !endTime) {
    showErrorMessage('Start and End times must be specified!');
    return;
  }

  if (duration <= 0) {
    showErrorMessage('Duration must be greater than 0 minutes.');
    return;
  }

  document.getElementById('status').innerText = "Timer Set Successfully!";
  hideErrorMessage();
});

// Error message functions
function showErrorMessage(msg) {
  const errorDiv = document.getElementById('errorMessages');
  errorDiv.innerText = msg;
  errorDiv.style.display = 'block';
}

function hideErrorMessage() {
  document.getElementById('errorMessages').style.display = 'none';
}

// Simulate battery drain
let batteryLevel = 100;
setInterval(() => {
  if (batteryLevel > 0) batteryLevel -= 1;
  document.getElementById('batteryBar').style.width = `${batteryLevel}%`;
}, 1000);

// Generate QR Code
new QRCode(document.getElementById('qrcode'), {
  text: window.location.href,
  width: 150,
  height: 150,
});
