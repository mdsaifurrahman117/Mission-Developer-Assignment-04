// Problem 04 : Calculate Admission Final Score

function calculateFinalScore(obj) {

            if (typeof obj !== 'object' || obj === null) {
                        return "Invalid Input";
            } 

            if (
                        typeof person.name !== "string" ||
                        typeof person.testScore !== "number" && typeof person.testScore <= 50 ||
                        typeof person.schoolScore !== "number" && typeof person.schoolScore <= 30 || 
                        typeof person.isFFamily !== "boolean"
            ) {
                        return "invalid input";
            }

            const testScore = person.testScore;
            const schoolScore = person.schoolScore;
            let totalScore = testScore + schoolScore;
            
            if ( person.isFFamily === true ) {
                        totalScore += 20;
            }

            if (totalScore >= 80 && totalScore <= 100){
                        return true;
            }

            return false;
            
}

const person = {
            name: "Saif",
            testScore: 45,
            schoolScore: 25,
            isFFamily: true
}
// const person = "hello";
const score = calculateFinalScore (person);
console.log(score);


