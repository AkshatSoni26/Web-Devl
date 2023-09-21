// Get the current UTC date and time
const currentDate = new Date();

// Get UTC year, month, day, hours, minutes, and seconds
const utcYear = currentDate.getUTCFullYear();
const utcMonth = currentDate.getUTCMonth() + 1; // Months are zero-indexed
const utcDay = currentDate.getUTCDate();
const utcHours = currentDate.getUTCHours();
const utcMinutes = currentDate.getUTCMinutes();
const utcSeconds = currentDate.getUTCSeconds();

console.log(`UTC Date and Time: ${utcYear}-${utcMonth}-${utcDay} ${utcHours}:${utcMinutes}:${utcSeconds}`);
