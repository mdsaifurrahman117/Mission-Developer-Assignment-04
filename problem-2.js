// Problem 02 : Notification Generator

function sendNotification(email) {

            const checkDoubleAtSymbol = email.split("@").length - 1;

            if (checkDoubleAtSymbol === 1) {
                                    const emailAddressParts = email.split("@");
                                    const userName = emailAddressParts[0];
                                    const domainName = emailAddressParts[1];
                                    const notification = userName + " sent you an email from " + domainName;
                                    return notification;
            }
            return "Invalid Input";
            
}

const mailAddress = sendNotification ("saifurrahman@@gmail.com");
console.log(mailAddress);
