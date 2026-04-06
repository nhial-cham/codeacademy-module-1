// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Request user input for player level and VIP status 
let level = parseInt(prompt("Enter player level:"));
let vip = prompt("Is the player VIP? (yes or no):").toLowerCase();


if (isNaN(level)) {
    alert("The player level should be a number.");
}
else if (vip !== "yes" && vip !== "no") {
    alert("Invalid VIP status.");
} 
else if (level < 1) {
    alert("Invalid player level.");
} else if (level >= 10) {
    alert("Access granted.");
} 
else if (vip === "yes") {
    alert("Access granted.");
} else {
    alert("Access denied.");
}

/*
---------------------------------------
Desktop Test
---------------------------------------

level = 12     vip = no
=> Access granted.
---------------------------------------

level = 7      vip = yes
=> Access granted.
---------------------------------------

level = 7      vip = no
=> Access denied.
---------------------------------------

level = 0      vip = yes
=> Invalid player level.
---------------------------------------

level = 5      vip = maybe
=> Invalid VIP option.
---------------------------------------
*/