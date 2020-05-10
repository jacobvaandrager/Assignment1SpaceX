

var ship = {
				parameters: {
					fuel: 290000000,
					throttle: 560,
					speed: 3600,
					acceleration: 35,
					movement: 0,

				},

				environment: {
					gravity: 2.4,
					distanceTraveled: 0,
					atmosphere: 96,
				},

				supplies: {
					food: 98,
					water: 78,
				},

				metrics: {
					gravityConverter: 5.2,
					marsMilesToEarthMilesConverter: 96,
				},
};


document.getElementById("fuel").innerHTML = ship.parameters.fuel;
document.getElementById("throttle").innerHTML = ship.parameters.throttle;
document.getElementById("speed").innerHTML = ship.parameters.speed;
document.getElementById("acceleration").innerHTML = ship.parameters.acceleration;

document.getElementById("gravity").innerHTML = ship.environment.gravity;
document.getElementById("distanceTraveled").innerHTML = ship.environment.distanceTraveled;
document.getElementById("atmosphere").innerHTML = ship.environment.atmosphere;

document.getElementById("food").innerHTML = ship.supplies.food;
document.getElementById("water").innerHTML = ship.supplies.water;

document.getElementById("gravityConverter").innerHTML = ship.metrics.gravityConverter;
document.getElementById("marsMilesToEarthMilesConverter").innerHTML = ship.metrics.marsMilesToEarthMilesConverter;

console.log(ship.parameters.fuel);


/* Seconds instance
var yourMotorcycle = {brand: 'Triumph', color: 'black', engine: 660};

console.log(yourMotorcycle.color);
*/

/* Objects in objects
var tire = {material: 'rubber', size: 110};
myMotorcycle.frontTire = {material: 'rubber', size: 110};
myMotorcycle.rearTire = {material: 'rubber', size: 220};

*/