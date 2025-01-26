
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

    const continueButton = document.getElementById('person-basic-info');
    continueButton.addEventListener('click', function (event) {
        // Prevent the default navigation behavior
        event.preventDefault();

       

         document.location.href = "phone-verification.html";//forward to personal info page
    });

});
