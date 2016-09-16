const height = 7000;
const enemyNavs = [
	
	{
		x: 1090,
		y: height - 780,
		width: 10,
		height: 50
	},
	{
		x: 1200,
		y: height - 780,
		width: 10,
		height: 50
	},

	{
		x: 2120,
		y: height - 1250,
		width: 10,
		height: 50
	},
	{
		x: 2225,
		y: height - 1250,
		width: 10,
		height: 50
	},

	{
		x: 2320,
		y: height - 1400,
		width: 10,
		height: 50
	},
	{
		x: 2425,
		y: height - 1400,
		width: 10,
		height: 50
	},

	{
		x: 370,
		y: height - 1730,
		width: 10,
		height: 50
	},
	{
		x: 475,
		y: height - 1730,
		width: 10,
		height: 50
	},

	{
		x: 145,
		y: height - 2400,
		width: 10,
		height: 50
	},
	{
		x: 250,
		y: height - 2400,
		width: 10,
		height: 50
	},

	{
		x: 1470,
		y: height - 2825,
		width: 10,
		height: 50
	},
	{
		x: 1575,
		y: height - 2825,
		width: 10,
		height: 50
	},

	{
		x: 2125,
		y: height - 2450,
		width: 10,
		height: 50
	},
	{
		x: 2225,
		y: height - 2450,
		width: 10,
		height: 50
	},


	{
		x: 2315,
		y: height - 1750,
		width: 10,
		height: 50
	},
	{
		x: 2425,
		y: height - 1750,
		width: 10,
		height: 50
	},

	{
		x: 2350,
		y: height - 3450,
		width: 10,
		height: 50
	},
	{
		x: 2450,
		y: height - 3450,
		width: 10,
		height: 50
	},


	{
		x: 0,
		y: height - 3450,
		width: 10,
		height: 50
	},
	{
		x: 100,
		y: height - 3450,
		width: 10,
		height: 50
	},

	{
		x: 140,
		y: height - 1550,
		width: 10,
		height: 50
	},
	{
		x: 250,
		y: height - 1550,
		width: 10,
		height: 50
	},


	{
		x: 820,
		y: height - 3325,
		width: 10,
		height: 50
	},
	{
		x: 925,
		y: height - 3325,
		width: 10,
		height: 50
	},


	{
		x: 1020,
		y: height - 4525,
		width: 10,
		height: 50
	},
	{
		x: 1125,
		y: height - 4525,
		width: 10,
		height: 50
	},


	{
		x: 1470,
		y: height - 4525,
		width: 10,
		height: 50
	},
	{
		x: 1575,
		y: height - 4525,
		width: 10,
		height: 50
	},


	{
		x: 820,
		y: height - 4700,
		width: 10,
		height: 50
	},
	{
		x: 925,
		y: height - 4700,
		width: 10,
		height: 50
	},


	{
		x: 1670,
		y: height - 4700,
		width: 10,
		height: 50
	},
	{
		x: 1770,
		y: height - 4700,
		width: 10,
		height: 50
	},


	{
		x: 895,
		y: height - 5400,
		width: 10,
		height: 50
	},
	{
		x: 995,
		y: height - 5400,
		width: 10,
		height: 50
	},


	{
		x: 1595,
		y: height - 5400,
		width: 10,
		height: 50
	},
	{
		x: 1695,
		y: height - 5400,
		width: 10,
		height: 50
	},


	{
		x: 20,
		y: height - 1950,
		width: 10,
		height: 50
	},
	{
		x: 75,
		y: height - 5400,
		width: 10,
		height: 50
	},


	{
		x: 370,
		y: height - 5400,
		width: 10,
		height: 50
	},
	{
		x: 470,
		y: height - 5400,
		width: 10,
		height: 50
	},


	{
		x: 5,
		y: height - 2500,
		width: 10,
		height: 50
	},
	{
		x: 70,
		y: height - 2500,
		width: 10,
		height: 50
	},

	{
		x: 545,
		y: height - 2500,
		width: 10,
		height: 50
	},
	{
		x: 645,
		y: height - 2500,
		width: 10,
		height: 50
	},



	{
		x: 1470,
		y: height - 2525,
		width: 10,
		height: 50
	},
	{
		x: 1575,
		y: height - 2525,
		width: 10,
		height: 50
	},

	{
		x: 1670,
		y: height - 2650,
		width: 10,
		height: 50
	},
	{
		x: 1770,
		y: height - 2650,
		width: 10,
		height: 50
	},


	{
		x: 2495,
		y: height - 2800,
		width: 10,
		height: 50
	},
	{
		x: 2570,
		y: height - 2800,
		width: 10,
		height: 50
	},


	{
		x: 2120,
		y: height - 3000,
		width: 10,
		height: 50
	},
	{
		x: 2220,
		y: height - 3000,
		width: 10,
		height: 50
	},


	{
		x: 655,
		y: height - 4900,
		width: 10,
		height: 50
	},
	{
		x: 745,
		y: height - 4900,
		width: 10,
		height: 50
	},


	{
		x: 1020,
		y: height - 5050,
		width: 10,
		height: 50
	},
	{
		x: 1120,
		y: height - 5050,
		width: 10,
		height: 50
	},


	{
		x: 1850,
		y: height - 4900,
		width: 10,
		height: 50
	},
	{
		x: 1940,
		y: height - 4900,
		width: 10,
		height: 50
	},


	{
		x: 1470,
		y: height - 5050,
		width: 10,
		height: 50
	},
	{
		x: 1570,
		y: height - 5050,
		width: 10,
		height: 50
	},


	{
		x: 1520,
		y: height - 5050,
		width: 10,
		height: 50
	},
	{
		x: 1720,
		y: height - 5050,
		width: 10,
		height: 50
	},

	{
		x: 2170,
		y: height - 5050,
		width: 10,
		height: 50
	},
	{
		x: 2370,
		y: height - 5050,
		width: 10,
		height: 50
	},


	{
		x: 1195,
		y: height - 5050,
		width: 10,
		height: 50
	},
	{
		x: 1395,
		y: height - 5050,
		width: 10,
		height: 50
	},











	// {
	// 	x: 650,
	// 	y: 640,
	// 	width: 10,
	// 	height: 50
	// },
	// {
	// 	x: 940,
	// 	y: 640,
	// 	width: 10,
	// 	height: 50
	// },
	// {
	// 	x: 1500,
	// 	y: 970,
	// 	width: 10,
	// 	height: 50
	// },
	// {
	// 	x: 1910,
	// 	y: 970,
	// 	width: 10,
	// 	height: 50
	// }
];

export default enemyNavs;