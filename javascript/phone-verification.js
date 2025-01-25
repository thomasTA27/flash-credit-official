


document.addEventListener('DOMContentLoaded', function () {
    // Retrieve loan amount and tenure from sessionStorage
    const loanAmount = sessionStorage.getItem('loanAmount1');
    const loanTenure = sessionStorage.getItem('loanTenure1');

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