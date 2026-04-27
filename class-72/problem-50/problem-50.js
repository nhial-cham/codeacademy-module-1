/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Solution: Movie watchlist
*/

let watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];

// 1. Print the total number of movies in the watchlist.
console.log("\n***********************************************");
console.log(`Movies in watchlist: ${watchlist.length}`);
console.log("***********************************************");

// 2. Add the movie`"The Dark Knight"` to the watchlist.
console.log("\n***********************************************");
watchlist.push("The Dark Knight");

// 3. Add the movie `"Avatar"` to the watchlist.
watchlist.push("Avatar");
console.log("***********************************************");

// 4. Remove the last movie from the watchlist.
watchlist.pop();

// 5. Print the first movie in the watchlist.
console.log("First movie:", watchlist[0]);

// 6. Print the last movie in the watchlist.
console.log("Last movie:", watchlist[watchlist.length - 1]);

// 7. Check if the watchlist has 4 or more movies:
if (watchlist.length >= 4) {
    console.log("You have many movies to watch!"); // - If true, print `"You have many movies to watch!"`
} else {
    console.log("Your watchlist is small."); //    - If false, print `"Your watchlist is small."`
}

// 8. Print all movies in the watchlist with their position number, starting from 1.
console.log("\n***********************************************");
console.log(`Movies in watchlist: ${watchlist.length}`);

for (let i = 0; i < watchlist.length; i++) {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(`${i + 1} - ${watchlist[i]}`);
}
