// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const missionTarget = document.getElementById("missionTarget");
  // Here is the HTML formatting for our mission target div.
  missionTarget.innerHTML = 
              `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (!testInput) {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  } else {
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All Fields Are Required");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Make Sure to Enter Valid Information for Each Field");
  } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000 && cargoLevel >= 10000) {
      fuelStatus.innerHTML = "Fuel level too low for launch";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
      fuelStatus.innerHTML = "Fuel level too low for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    } else {
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {
  planets = [
    {
      name: "Tatooine",
      diameter: "10465 km",
      star: "Tatoo I & Tatoo II",
      distance: "43000 light years from galactic core",
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/03/earthsun20170412.png",
      moons: 3,
    },
    {
      name: "Pern",
      diameter: "measurement is under dispute",
      star: "Alpha Sagittarius (a.k.a. Rukbat)",
      distance: "Varies - find a library",
      image:
        "https://smd-cms.nasa.gov/wp-content/uploads/2023/07/stsci-01h44ay5ztcv1npb227b2p650j-temp-medium.jpg?w=2560&format=webp",
      moons: 2,
    },
    {
      name: "Saturn/Titan",
      diameter: "5149.5 km",
      star: "Sol",
      distance: "1.4 billion km from Earth",
      image:
        "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
      moons: 0,
    },
    {
      name: "Mars",
      diameter: "6779 km",
      star: "Sol",
      distance: "225 million km from Earth",
      image:
        "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
      moons: 2,
    },
    {
      name: "K2-18b",
      diameter: "34500 km",
      star: "K2-18",
      distance: "110 light years from Earth",
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/09/sep-11-23-stsci-01h9r8bbf7kfspgq2xx3a8sz34-1k.jpg",
      moons: "unknown",
    },
    {
      name: "Jupiter/Europa",
      diameter: "3,121.6 km",
      star: "Sol",
      distance: "628.3 million km from Earth",
      image: "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
      moons: 0,
    },
  ];
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
