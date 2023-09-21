function startCountdown(clock) {
    let seconds = clock.h * 60 * 60 + clock.m * 60 + clock.s; // 1 hour in seconds
    // console.log(object)
    const countdownInterval = setInterval(() => {
        const hoursRemaining = Math.floor(seconds / 3600);
        const minutesRemaining = Math.floor((seconds % 3600) / 60);
        const secondsRemaining = seconds % 60;

        let timer = `${hoursRemaining}:${minutesRemaining < 10 ? '0' : ''}${minutesRemaining}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`

        console.log(timer);


        if (seconds === 0) {
            clearInterval(countdownInterval);
            console.log("Countdown finished!");
        }

        seconds--;

        // return timer;

    }, 1000);
}

startCountdown({ h: 2, m: 10, s: 10 });
