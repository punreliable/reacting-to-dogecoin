


let timerLength: number = 25000;

function delayAndReturnTrue( timerLength: number ): Promise<boolean> {
    return new Promise( ( resolve ) => {
        setTimeout(
            () => {
                resolve(true);
            },
            timerLength
        );
    });
}
  
  // Example usage:
  const timerLengthInMilliseconds = 3000; // Replace with your desired timer length
  delayAndReturnTrue(timerLengthInMilliseconds)
    .then((result) => {
      console.log(result); // This will be true after the specified time
    })
    .catch((error) => {
      console.error(error);
    });