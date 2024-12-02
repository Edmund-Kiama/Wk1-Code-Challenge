//speed detector main function
const speedDetector = ( speed ) => {
    if ( speed < 0 || !speed ){
        return console.log("Invalid input. Please try again.")
    } else if ( speed < 70 ) { //checks if speed is at speed limit (70)
        return console.log('Ok')
    } else { 
        //initialize demerit
        let demerit;
        let speedLimit = 70 //sets the speed limit to 70
        let per5KmPerHr = 5 //for every 5km/hr over 70lm/hr, 1 demerit point is to be awarded

        demerit = Math.floor(( speed - speedLimit ) / per5KmPerHr) //calculate demerit points
        console.log(`Points: ${demerit}`)

        //checks if demerit is over 12
        if ( demerit > 12 ) {
            console.log(`License suspended`)
        }
    }
}

speedDetector(100);
