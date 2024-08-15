window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let list = document.getElementById("faultyItems");

  list.style.visibility = "hidden";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pilotInput = document.querySelector("input[name = pilotName]");
    let pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name = copilotName]");
    let copilot = copilotInput.value;

    let cargoMassInput = document.querySelector("input[name = cargoMass]");
    let cargoLevel = Number(cargoMassInput.value);

    let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    let listedPlanets = [];
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
        
      })
      .then(function () {
        

        let storedPlanet = pickPlanet(listedPlanets);
        if (
          fuelLevel < 10000 ||
          cargoLevel >= 10000 ||
          typeof pilot === "number" ||
          typeof copilot === "number"
        ) {
          confirm("Mission Grounded! Check All Fields...");
          event.preventDefault();
        } else return addDestinationInfo(document, storedPlanet.name, storedPlanet.diameter, storedPlanet.star, storedPlanet.distance, storedPlanet.moons, storedPlanet.image);
      });
  });
});
