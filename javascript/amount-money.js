
document.addEventListener('DOMContentLoaded', function() {
    // Format number as currency
    function formatCurrency(value) {
        return new Intl.NumberFormat('au-AU', {
            style: 'currency',
            currency: 'aud',
            maximumFractionDigits: 0
        }).format(value).replace('aud', 'aud');
    }

    // Loan Amount Slider
    const loanAmountSlider = document.getElementById('loanAmount');
    const loanAmountValue = document.getElementById('loanAmountValue');

    loanAmountSlider.addEventListener('input', function() {
        loanAmountValue.textContent = formatCurrency(this.value);
    });

    // Loan Tenure Slider
    const loanTenureSlider = document.getElementById('loanTenure');
    const loanTenureValue = document.getElementById('loanTenureValue')

    loanTenureSlider.addEventListener('input', function() {
        loanTenureValue.textContent = `${this.value} month${this.value > 1 ? 's' : ''}`;
    });
    
    const continueButton = document.getElementById('amount-money-submit');
    continueButton.addEventListener('click', function (event) {
        // Prevent the default navigation behavior
        event.preventDefault();

        // Get the values of loan amount and loan tenure
         loanAmount = loanAmountSlider.value;
         loanTenure = loanTenureSlider.value;
         sessionStorage.setItem('loanAmount1', loanAmount);
         sessionStorage.setItem('loanTenure1', loanTenure);

         console.log("this is loan inside" + loanAmount);

         document.location.href = "personal-info.html";//forward to personal info page
    });
});