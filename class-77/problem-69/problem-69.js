/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham.
*/


/**
 * format a full name into a username
 * @param {string[]} names - An array of full names
 * @returns {string[]} An array of formatted usernames
 */
function formatUsername(fullName) {
    return fullName.toLowerCase().replace(/s+/g, "");
}

/**
 * generate usernames from a list of full names
 * @param {string[]} names 
 * @returns {string[]} 
 */
function generateUsernames(names) {

    const usernames = [];
    for (const name of names) {
        
        const username = formatUsername(name);
        usernames.push(username);
    }
return usernames;
}

// Example usage
const names = ["Johny Frank", "Will Smith", "Alex Rosse", "Emily Davis", "  Nhial Abraham Maluac Nhial  "];
const result = generateUsernames(names);
console.log(`Result: ${result}`);
