// Define the phone number you want to search for
let phoneNumber = '123-456-7890';

// Construct the URL with the phone number parameter
let url = `http://localhost:8080/flash-credit/AssetServlet?phone_number=${phoneNumber}`;

// Make a GET request to the AssetServlet
fetch(url)
  .then(response => {
    if (!response.ok) {
      // If the response is not OK, throw an error
      throw new Error('No assets found or bad request');
    }
    return response.json();  // Parse the response as JSON
  })
  .then(thai => {
    // Process the asset data here
    console.log('Asset data:', thai);
    // For example, you can display the asset data in the HTML
    document.getElementById('assetDetails').innerText = `Phone: ${thai.phoneNumber}, Value: $${thai.value}`;
  })
  .catch(error => {
    // Handle errors (e.g., if no assets are found or if the request fails)
    console.error('Error fetching asset data:', error);
    document.getElementById('assetDetails').innerText = 'Error fetching asset data.';
  });