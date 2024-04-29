document.addEventListener('DOMContentLoaded', function(){
    const paymentOption = document.getElementById('payment-option');
    const creditCardFields = document.getElementById('credit-card-fields');
    const mobileBankingFields = document.getElementById('mobile-banking-fields');

    paymentOption.addEventListener('change', function () {
        const selectedOption = paymentOption.value;

        if (selectedOption === 'credit-card') {
            creditCardFields.style.display = 'block';
            mobileBankingFields.style.display = 'none';
        } else if (selectedOption === 'mobile-banking') {
            creditCardFields.style.display = 'none';
            mobileBankingFields.style.display = 'block';
        } else {
            creditCardFields.style.display = 'none';
            mobileBankingFields.style.display = 'none';
        }
    });
});