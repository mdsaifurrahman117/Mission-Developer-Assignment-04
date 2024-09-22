// Problem 05:  Predict Average Waiting Time

function waitingTime(waitingTimes, serialNumber) {

            if ( 
                        !Array.isArray(waitingTimes) ||
                        typeof serialNumber !== "number"
            ) {
                        return "Invalid Input";
            }
            
            let sum = 0;
            for (const number of waitingTimes) {
                        sum = sum + number;
            }
            
            let length = waitingTimes.length;
            const averageTime = Math.round(sum / length);
            
            const remainingCandidates = serialNumber - waitingTimes.length - 1;

            const time = remainingCandidates * averageTime;

            return time;
            
}

const participants = [10, 5, 8, 12, 15];
// const participants = 10;
const serialNumber = 10;
const time = waitingTime (participants, serialNumber);

console.log(time);


