// startup message for devs
console.log("Welcome to the Community Portal! - Dev console");

// Wait until page finishes loading
window.addEventListener('load', function () {
  // quick check
  alert("Page loaded and JS connected."); 
});

// basic event data
const eventTitle = "Park Yoga Session";
const eventDay = "2025-06-30";
let spotsLeft = 18;

// log combined info
let eventInfo = `${eventTitle} | ${eventDay} | Remaining: ${spotsLeft}`;

console.log(eventInfo);

// simulate user reg
spotsLeft--;  // someone booked a seat
console.log("Updated seats: ", spotsLeft);

// show only valid events
const allEvts = [
  { name: "Community Talk", date: "2025-06-15", seats: 0 },
  { name: "Food Fair", date: "2025-06-22", seats: 15 },
  { name: "Old Event", date: "2024-11-01", seats: 10 }
];

// filter out old or full
allEvts.forEach(ev => {
  let today = new Date();
  let evDate = new Date(ev.date);

  if (evDate >= today && ev.seats > 0) {
    console.log("Active Event:", ev.name);
  } else {
    // ignoring past or full events
   console.warn(`Not shown: ${ev.name}`);

  }
});

// test registration logic
function tryRegister(evName) {
  try {
    let found = allEvts.find(e => e.name === evName);
    if (!found || found.seats === 0) {
      throw new Error("Cannot register: full or not found");
    }
    found.seats -= 1;
    console.log(`✔ Registered for ${evName}`);
  } catch (e) {
    console.error(e.message);
  }
}

tryRegister("Food Fair");