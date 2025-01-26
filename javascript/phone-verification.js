


document.addEventListener('DOMContentLoaded', function () {
    // Retrieve loan amount and tenure from sessionStorage
    const loanAmount = sessionStorage.getItem('loanAmountInSession');
    const loanTenure = sessionStorage.getItem('loanDurationInSession');
    const reasonForLoan = sessionStorage.getItem('reasonForLoan');
    const firstName = sessionStorage.getItem('firstNameSession');
    const lastName = sessionStorage.getItem('lastNameSession');
    const dob = sessionStorage.getItem('dob');
    const address = sessionStorage.getItem('address');
    const email = sessionStorage.getItem('email');
    console.log("this is loan reason " + reasonForLoan);
    console.log("this is loan reason " + firstName);
    console.log("this is loan reason " + lastName);
    console.log("this is loan reason " + dob);
    console.log("this is loan reason " + address);
    console.log("this is loan reason " + email);

    // Check if values exist
    if (loanAmount && loanTenure) {
        console.log(`Loan Amount: AUD ${loanAmount}`);
        console.log(`Loan Tenure: ${loanTenure} months`);
        // You can also display these values on the page if needed
        document.getElementById('temp-loan-user').textContent = 
            `Loan Amount: AUD ${loanAmount}, Loan Tenure: ${loanTenure} months`;
    } else {
        console.error('No loan data found in sessionStorage.');
    }
});