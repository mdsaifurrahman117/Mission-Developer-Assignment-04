// Problem-03: Checking Digits Inside a Name

function checkDigitsInName(name) {
            
            if (typeof name !== "string") {
                        return "Invalid Input";
            }
            for (const num of name) {
                        if (!isNaN(num) && num !== "") {
                                    return true;
                        }
            }
            return false;

}
  
const name = checkDigitsInName ("saif11");
console.log(name);
