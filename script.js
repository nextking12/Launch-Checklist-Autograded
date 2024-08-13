/*const { formSubmission } = require("./scriptHelper");*/

const { myFetch, addDestinationInfo, validateInput, formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
/*document.getElementById("formSubmit").addEventListener("click", formSubmission)*/
window.addEventListener("load", function() {
   /*subButton = document.getElementById("formSubmit")
   subButton.addEventListener("click", formSubmission());*/
   let form = document.querySelector("form");
   let list = document.getElementById("faultyItems");

   list.style.visibility = "hidden";

   form.addEventListener("submit", function(event) {
    event.preventDefault();

    let pilotInput = document.querySelector("input[name = pilotName]");
    let pilot = pilotInput.value

    let copilotInput = document.querySelector("input[name = copilotName]");
    let copilot = copilotInput.value

    let cargoMassInput = document.querySelector("input[name = cargoMass]");
    let cargoLevel = Number(cargoMassInput.value);

    let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
 });

    let listedPlanets = [];
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets.push = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       return addDestinationInfo(pickPlanet(listedPlanetsResponse));
    }  )    

 });
