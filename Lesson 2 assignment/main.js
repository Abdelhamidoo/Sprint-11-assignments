// display "Hello!" on the screen every 2 secs

const HydrateFn = setInterval(() => {
    document.write("Hello!");
}, 2000);

// stop after 1 min

setTimeout(StopFn,  60000);

// define StopFn which clears the interval

function StopFn() {
    clearInterval(HydrateFn);
};