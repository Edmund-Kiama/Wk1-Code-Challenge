//speed detector main function
const speedDetector = ( speed ) => {
    //checks if speed is at speed limit (70)
    if ( speed < 70 ) {
        return console.log('Ok')
    } else { 
        //initialize demerit
        let demerit;
        demerit = Math.floor(( speed - 70 ) / 5) //calculate demerit points
        console.log(`Points: ${demerit}`)

        //checks if demerit is over 12
        if ( demerit > 12 ) {
            console.log(`License suspended`)
        }
    }
}

speedDetector(70);
