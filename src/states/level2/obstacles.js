const obstacles = [
	{
		x: 0,
		y: 500,
		width: 100,
		height: 30

	},
	{
		x: 600,
		y: 550,
		width: 80,
		height: 150

	},
	{
		x: 0,
		y: 750,
		width: 180,
		height: 50

	},
	{
		x: 160,
		y: 750,
		width: 50,
		height: 130

	},
	{
		x: 0,
		y: 1150,
		width: 640,
		height: 100

	},
	{
		x: 300,
		y: 850,
		width: 100,
		height: 200

	},
	{
		x: 600,
		y: 900,
		width: 40,
		height: 350

	},
	{
		x: 600,
		y: 900,
		width: 70,
		height: 40

	},
	{
		x: 800,
		y: 800,
		width: 70,
		height: 40

	},
	{
		x: 400,
		y: 400,
		width: 150,
		height: 40

	},
	{
		x: 600,
		y: 1250,
		width: 70,
		height: 250

	},
	{
		x: 900,
		y: 1250,
		width: 70,
		height: 250

	},
	{
		x: 1200,
		y: 1250,
		width: 70,
		height: 250

	},
	{
		x: 1500,
		y: 1250,
		width: 70,
		height: 450

	},
	{
		x: 1500,
		y: 1700,
		width: 600,
		height: 50

	},
	{
		x: 850,
		y: 1150,
		width: 450,
		height: 30

	},
	{
		x: 1300,
		y: 700,
		width: 200,
		height: 480

	},
	{
		x: 600,
		y: 1450,
		width: 900,
		height: 40

	},
	{
		x: 1500,
		y: 1150,
		width: 250,
		height: 40

	},
	{
		x: 1650,
		y: 350,
		width: 320,
		height: 50

	},
	{
		x: 2000,
		y: 550,
		width: 320,
		height: 50

	},
	{
		x: 2300,
		y: 700,
		width: 320,
		height: 50

	},
	{
		x: 2450,
		y: 750,
		width: 40,
		height: 100

	},
	{
		x: 1900,
		y: 850,
		width: 1400,
		height: 50

	},
	{
		x: 3300,
		y: 700,
		width: 50,
		height: 200

	},
	{
		x: 3300,
		y: 700,
		width: 250,
		height: 50

	},
	{
		x: 3300,
		y: 500,
		width: 400,
		height: 50

	},
	{
		x: 3550,
		y: 500,
		width: 80,
		height: 250

	},
	{
		x: 3800,
		y: 400,
		width: 50,
		height: 1200

	},
	{
		x: 3500,
		y: 1250,
		width: 300,
		height: 50

	},
	{
		x: 2400,
		y: 1100,
		width: 1100,
		height: 50

	},
	{
		x: 2100,
		y: 850,
		width: 50,
		height: 550

	},
	{
		x: 2100,
		y: 1400,
		width: 650,
		height: 50

	},
	{
		x: 2750,
		y: 1300,
		width: 50,
		height: 150

	},
	{
		x: 2900,
		y: 1600,
		width: 600,
		height: 50

	},
	{
		x: 3700,
		y: 1300,
		width: 150,
		height: 600

	},
	{
		x: 3300,
		y: 1900,
		width: 400,
		height: 50

	},
	{
		x: 2600,
		y: 1900,
		width: 400,
		height: 50

	},
	{
		x: 2100,
		y: 1700,
		width: 300,
		height: 50

	},
	{
		x: 1900,
		y: 1400,
		width: 100,
		height: 50

	},
	{
		x: 2000,
		y: 2200,
		width: 50,
		height: 500

	},
	{
		x: 2000,
		y: 2700,
		width: 1700,
		height: 50

	},
	{
		x: 3600,
		y: 2000,
		width: 50,
		height: 750

	},
	{
		x: 2050,
		y: 2500,
		width: 200,
		height: 40

	},
	{
		x: 3400,
		y: 2500,
		width: 200,
		height: 40

	},
	{
		x: 1500,
		y: 1500,
		width: 50,
		height: 1400

	},
	{
		x: 1500,
		y: 2350,
		width: 150,
		height: 40

	},
	{
		x: 1500,
		y: 2650,
		width: 150,
		height: 40

	},
	{
		x: 1900,
		y: 2500,
		width: 100,
		height: 40

	},
	{
		x: 1500,
		y: 2900,
		width: 500,
		height: 50

	},
	{
		x: 2000,
		y: 2850,
		width: 300,
		height: 100

	},
	{
		x: 2250,
		y: 2950,
		width: 50,
		height: 150

	},
	{
		x: 2300,
		y: 3050,
		width: 1300,
		height: 50

	},
	{
		x: 2500,
		y: 2950,
		width: 150,
		height: 50

	},
	{
		x: 2900,
		y: 2900,
		width: 150,
		height: 50

	},
	{
		x: 3200,
		y: 2950,
		width: 150,
		height: 50

	},
	{
		x: 3700,
		y: 2700,
		width: 50,
		height: 600

	},
	{
		x: 1800,
		y: 3300,
		width: 1950,
		height: 50

	},
	{
		x: 1800,
		y: 2900,
		width: 50,
		height: 450

	},
	{
		x: 2300,
		y: 3200,
		width: 50,
		height: 100

	},
	


	
	/*
	{
		x: 700,
		y: 700,
		width: 40,
		height: 300

	},
	{
		x: 700,
		y: 700,
		width: 200,
		height: 40

	},
	{
		x: 1100,
		y: 500,
		width: 100,
		height: 500

	},
	{
		x: 1300,
		y: 300,
		width: 300,
		height: 50

	},
	{
		x: 1700,
		y: 200,
		width: 300,
		height: 50

	},
	{
		x: 1900,
		y: 700,
		width: 300,
		height: 50

	},
	{
		x: 2025,
		y: 700,
		width: 40,
		height: 400

	},*/
	
];

export default obstacles;