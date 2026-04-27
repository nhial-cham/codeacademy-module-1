// Author: Nhial Abraham Maluac Nhial <nhial-cham>


let cities = ["Paris", "London", "Berlin"];

console.log(`
    The list of cities are: ${cities}
    The total of cities is: ${cities.length}
    The first city is: ${cities[0]}
    The Last city is: ${cities[2]}
    The Last city is: ${cities[cities.length - 1]}
    `)

    console.log(`List of cities: ${cities}`);
    let secondCity = cities[1];
    console.log(`The second city is: ${secondCity}`);
    console.log(`The second city is: ${cities[1]}`);

    cities[1] = "Tokyo";
    secondCity = cities[1];

    console.log(`List of cities: ${cities}`);
    console.log(`The second city is: ${secondCity}`);
    console.log(`The second city is: ${cities[1]}`);

    