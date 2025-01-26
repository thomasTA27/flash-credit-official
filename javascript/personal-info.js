
document.addEventListener('DOMContentLoaded', function () {



    
    // Retrieve loan amount and tenure from sessionStorage
    const loanAmount = sessionStorage.getItem('loanAmountInSession');
    const loanTenure = sessionStorage.getItem('loanDurationInSession');

    // Check if values exist
    if (loanAmount && loanTenure) {
        console.log(`Loan Amount: AUD ${loanAmount}`);
        console.log(`Loan Tenure: ${loanTenure} months`);
        // You can also display these values on the page if needed
        document.getElementById('temp-loan-use-info').textContent = 
            `Loan Amount: AUD ${loanAmount}, Loan Tenure: ${loanTenure} months`;
    } else {
        console.error('No loan data found in sessionStorage.');
    }


    // Get the user info 
    document.getElementById("person-basic-info").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission for validation
      
        // Title
        const title = document.querySelector('input[name="title"]:checked').value;
           

        const firstName = document.getElementById("first-name-input").value;
      
        // Middle name
        const middleName = document.getElementById("middle-name-input").value;
      
        // Last name
        const lastName = document.getElementById("last-name-input").value;
        if (lastName === "") {
          alert("Please specify your last name.");
          return;
        }
      
        // Date of birth
        const dob = document.getElementById("dob-input").value;
        const currentDate = new Date();
        const birthDate = new Date(dob);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        if (dob === "") {
          alert("Please specify your date of birth.");
          return;
        }
        if (age < 18) {
          alert("You must be 18 or older.");
          return;
        }
      
        // Address
        const address = document.getElementById("location-input").value;
      
        // Apt/Suite (Optional)
        const apt = document.querySelector('input[placeholder="Apt, Suite, etc (optional)"]').value;
      
        // City
        const city = document.getElementById("locality-input").value;
      
        // State/Province
        const state = document.getElementById("administrative_area_level_1-input").value;
      
        // Zip/Postal code
        const postalCode = document.getElementById("postal_code-input").value;
      
        // Country
        const country = document.getElementById("country-input").value;
      
        // Mobile number
        const mobileNumber = document.getElementById("phone-num-input").value;
        if (mobileNumber === "") {
          alert("Please specify your mobile number.");
          return;
        }
      
        // Email
        const email = document.getElementById("email-input").value;
        if (email === "") {
          alert("Please specify your email.");
          return;
        }
      
        // Terms & Marketing consent
        const termsChecked = document.getElementById("terms") ? document.getElementById("terms").checked : true; // Optional check, if you're using it.


        //  if (termsChecked === "") {
        //   alert("Please accept the term and condition.");
        //   return;
        // }
      
        if (termsChecked) {
            // Collect form data into an object for further use or validation
            const formData = {
              title,
              firstName,
              middleName,
              lastName,
              dob,
              address: address || "N/A", // Set "N/A" if address is empty
              apt: apt || "N/A", // Set "N/A" if apt is empty
              city: city || "N/A", // Set "N/A" if city is empty
              state: state || "N/A", // Set "N/A" if state is empty
              postalCode: postalCode || "N/A", // Set "N/A" if postalCode is empty
              country: country || "N/A", // Set "N/A" if country is empty
              mobileNumber,
              email,
              
            };
        
            console.log("Form data:", formData);
        
            // Save values to sessionStorage (you can adjust these values if you prefer different keys)
            sessionStorage.setItem('titleSession', title);
            sessionStorage.setItem('firstNameSession', firstName);
            sessionStorage.setItem('middleNameSession', middleName);
            sessionStorage.setItem('lastNameSession', lastName);
            sessionStorage.setItem('dobSession', dob);
            sessionStorage.setItem('addressSession', address || "N/A");
            sessionStorage.setItem('aptSession', apt || "N/A");
            sessionStorage.setItem('citySession', city || "N/A");
            sessionStorage.setItem('stateSession', state || "N/A");
            sessionStorage.setItem('postalCodeSession', postalCode || "N/A");
            sessionStorage.setItem('countrySession', country || "N/A");
            sessionStorage.setItem('mobileNumberSession', mobileNumber);
            sessionStorage.setItem('emailSession', email);

            document.location.href = "phone-verification.html";
        
          // You can then proceed to send this data to a server or further validation
        } else {
          alert("You must accept the terms and conditions to proceed.");
        }
      });

});
