// Problem-01 : Tax Calculator

function calculateTax(income, expenses) {

            if (0 <= income && 0 <= expenses) {
                        if (income >= expenses) {
                                    let profit = income - expenses;
                                    const tax = profit * 0.20;
                                    return tax;
                        } else {
                                    return "Invalid Input";
                        }
            } else {
                        return "Invalid Input";
            }

}

const tax = calculateTax (10000, 30000);
console.log(tax);




