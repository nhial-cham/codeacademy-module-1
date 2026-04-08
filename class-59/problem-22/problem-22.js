// Author: Nhial Abraham Maluac Nhial <nhial-cham>
//User role
const role = "editor";

//Global variable to store the user role
let message = "";

switch (role) {
    case "admin":
        message = "Full access to the system.";
        break;
    case "editor":
        message = "You can edit content.";
        break;
    case "viewer":
        message = "You can view content.";
        break;
    default:
        message = "Unknown role.";
}
console.log("validation:", message);   

/*
---------------------------------------
Desktop Test
---------------------------------------

role = "admin"
=> Full access to the system.

role = "editor"
=> Can edit content.

role = "viewer"
=> Can only view content.

role = "guest"
=> Unknown role.

role = ""
=> Unknown role.

---------------------------------------
*/