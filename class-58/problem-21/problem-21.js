// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Request the traffic light color from the user
const trafficLightColor = prompt(
    "Enter the traffic light color (red, yellow, green):").toLowerCase();

// Simulate the traffic light behavior
switch (trafficLightColor) {
    case "red":
        console.log("Stop the vehicle");
        break;
    case "yellow":
        console.log("Prepare to stop/go");
        break;
    case "green":
        console.log("You can go");
        break;
    default:
        console.log("Invalid traffic light color");
}
alert(message);

/*
--------------------------------------------------------------------------
Desktop Test
--------------------------------------------------------------------------

trafficLight = "red"        =>      "Stop the vehicle."
trafficLight = "yellow"     =>      "prepare to stop/go."
trafficLight = "green"      =>      "You can go."
trafficLight = "blue"       =>      "Invalid traffic light color."
trafficLight = 123          =>      "Invalid traffic light color."

--------------------------------------------------------------------------
*/
