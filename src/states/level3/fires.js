var height = 7000;

const fires = [
	// {
	// 	x: 1000,
	// 	y: 6800
	// },
	// {
	// 	x: 1500,
	// 	y: 6800
	// },
	{
		x: 875,
		y: height - 3650
	},
	{
		x: 925,
		y: height - 3650
	},
	{
		x: 975,
		y: height - 3650
	},

	{
		x: 1550,
		y: height - 3650
	},
	{
		x: 1600,
		y: height - 3650
	},
	{
		x: 1650,
		y: height - 3650
	},
	{
		x: 1500,
		y: height - 2100
	},
	{
		x: 2400,
		y: height - 2050
	},	 
	{
        x : 450,
        y : height - 1950
    },
    {
    	x: 850,
    	y: height - 700
    },






	{
		x: 2100,
		y: height - 5650
	},
	{
		x: 475,
		y: height - 5650
	},
];
function fireTraps (x,y) {
	for(var i = 0; i < 8; i++)
		fires.push ({
			x: x + 50*i,
			y: y
		});
}
fireTraps (110, height - 3025);
fireTraps (785, height - 2300);
fireTraps (110, height - 950);
fireTraps (2080, height - 550);

fireTraps (30, height - 4850);
fireTraps (2130, height - 4850);


export default fires;