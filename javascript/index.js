

document.addEventListener('DOMContentLoaded', function () {

document.getElementById('index-submit').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way
  
  const productName = document.getElementById('full-name-form').value;
  const productPrice = document.getElementById('phone-num-form').value;

  fetch('http://localhost:8080/call-get-api-test/FoodApi', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
          productName: productName,
          productPrice:  productPrice
      })
  })
  .then(response => response.text())
  .then(result => {
      console.log(result); // Log server response
  })
  .catch(error => {
      console.error('Error:', error);
  });
});

});


function fetchFoodItems() {
  fetch('http://localhost:8080/call-get-api-test/FoodApi')
      .then(response => response.json())
      .then(jsonObject => {
          const foodList = document.getElementById('foodList');
          
          // Clear existing list
          foodList.innerHTML = '';

          // Create list items for each food
          jsonObject.forEach(food => {
              const li = document.createElement('li');
              li.textContent = `${food.name} - $${food.price}`;
              foodList.appendChild(li);
          });
      })
      .catch(error => {
          console.error('Error fetching food items:', error);
      });
}


document.addEventListener('DOMContentLoaded', function () {

document.getElementById('fetchFoods').addEventListener('click', async () => {

  fetchFoodItems()

})
});




















// const apiKey = 'Mzg2ODMyOTQtMmM4ZS00Nzg4LTk2YTYtYmVhZjEwMDk3YmNiOmNlMWM4ZDdhLWVlNzQtNDIzZi1iZmQxLTJjYzdmNDQ2M2FhZA==';

// // Step 1: Authenticate to get access token
// const getAccessToken = async () => {
//   try {
//     const response = await fetch('https://au-api.basiq.io/token', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Basic ${apiKey}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'basiq-version': '3.0',
//       },
//       body: new URLSearchParams({ 'scope': 'SERVER_ACCESS' })
//     });

//     if (!response.ok) {
//       throw new Error('Failed to obtain access token');
//     }

//     const data = await response.json();
//     return data.access_token;
//   } catch (error) {
//     console.error('Failed to obtain access token:', error.message);
//     throw error;
//   }
// };




  // try {
  //     const response = await fetch('http://localhost:8080/call-get-api-test/FoodApi');
  //     const foods = await response.json();
      
  //     const foodListDiv = document.getElementById('foodList');
      
  //     // Create table
  //     const table = document.createElement('table');
  //     const thead = document.createElement('thead');
  //     thead.innerHTML = `
  //         <tr>
  //             <th>ID</th>
  //             <th>Name</th>
  //             <th>Price</th>
  //         </tr>
  //     `;
  //     table.appendChild(thead);

  //     // Create table body
  //     const tbody = document.createElement('tbody');
  //     foods.forEach(food => {
  //         const row = document.createElement('tr');
  //         row.innerHTML = `
  //             <td>${food.id}</td>
  //             <td>${food.name}</td>
  //             <td>$${food.price}</td>
  //         `;
  //         tbody.appendChild(row);
  //     });
  //     table.appendChild(tbody);

  //     // Clear previous content and add new table
  //     foodListDiv.innerHTML = '';
  //     foodListDiv.appendChild(table);
  // } catch (error) {
  //     console.error('Error fetching food items:', error);
  //     document.getElementById('foodList').innerHTML = 'Failed to load food items.';
  // }


// document.getElementById('fetchFoods').addEventListener('click', function() {
//   fetch('http://localhost:8080/call-get-api-test/FoodApi')
//       .then(response => {
//           if (!response.ok) {
//               throw new Error('Network response was not ok');
//           }
//           return response.json();
//       })
//       .then(foods => {
//           const foodListDiv = document.getElementById('foodList');
          
//           // Create table
//           const table = document.createElement('table');
//           const thead = document.createElement('thead');
//           thead.innerHTML = `
//               <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Price</th>
//               </tr>
//           `;
//           table.appendChild(thead);

//           // Create table body
//           const tbody = document.createElement('tbody');
//           foods.forEach(food => {
//               const row = document.createElement('tr');
//               row.innerHTML = `
//                   <td>${food.id}</td>
//                   <td>${food.name}</td>
//                   <td>$${food.price}</td>
//               `;
//               tbody.appendChild(row);
//           });
//           table.appendChild(tbody);

//           // Clear previous content and add new table
//           foodListDiv.innerHTML = '';
//           foodListDiv.appendChild(table);
//       })
//       .catch(error => {
//           console.error('Error fetching food items:', error);
//           document.getElementById('foodList').innerHTML = 'Failed to load food items. ' + error.message;
//       });
// });

////////////phone verification

// const readline = require('readline');

// // Twilio API credentials

// const { accountSid, authToken } = require('./key.js');

// // Phone number and service SID
// const serviceSid = 'VA9959c16922db9dd834150a6cda13ce8f';
// const phoneNumber = '+61422501169'; // Replace with your phone number

// // Function to send verification code
// async function sendVerificationCode() {
//     const url = `https://verify.twilio.com/v2/Services/${serviceSid}/Verifications`;

//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//             To: phoneNumber,
//             Channel: 'sms',
//         }),
//     });

//     const result = await response.json();
//     if (response.ok) {
//         console.log('Verification code sent:', result);
//     } else {
//         console.error('Error sending verification code:', result);
//         process.exit(1);
//     }
// }

// // Function to verify the code entered by the user
// async function verifyCode(verificationCode) {
//     const url = `https://verify.twilio.com/v2/Services/${serviceSid}/VerificationCheck`;

//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//             To: phoneNumber,
//             Code: verificationCode,
//         }),
//     });

//     const result = await response.json();
//     if (response.ok && result.valid) {
//         console.log('Verification successful!');
//     } else {
//         console.error('Verification failed:', result.message || result);
//     }
// }

// // Function to prompt the user for input
// function promptUser(query) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     return new Promise((resolve) => rl.question(query, (answer) => {
//         rl.close();
//         resolve(answer);
//     }));
// }

// // Main function
// (async () => {
//     try {
//         // Step 1: Send the verification code
//         await sendVerificationCode();

//         // Step 2: Prompt the user for the verification code
//         const userCode = await promptUawser('Enter the verification code you received: ');

//         // Step 3: Verify the code
//         await verifyCode(userCode);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// })();


