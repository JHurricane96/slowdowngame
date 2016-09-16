var height = 7000;
const obstacles = [

	{//CLOVERS
    	x : 1000,
    	y : height - 200,
    	width : 100,
    	height : 25
	},
	{
    	x : 1500,
    	y : height - 200,
    	width : 100,
    	height : 25 
	},
	{//TREE 3
    	x : 1200,
    	y : height - 400,
    	width : 200,
    	height : 400,
        type: "tree"
	},
	{//TREE 3
    	x : 1200,
    	y : height - 850,
    	width : 100,
    	height : 100 ,
        type: "tree"
	},		
	{ //+
    	x : 1200,
    	y : height - 800,
    	width : 200,
    	height : 250,
        type: "tree"
	},		
	{// normal
    	x : 1100,
    	y : height - 830,
    	width : 100,
    	height : 25 
	},

	{//BRANCHES
    	x : 1675,
    	y : height - 550,
    	width : 100,
    	height : 25
	},
	{
		x : 1475,
		y : height - 700,
		width : 100,
		height : 25
	},
	{//TREE 4
    	x : 1850,
    	y : height - 850,
    	width : 200,
    	height : 850,
        type: "tree"
	},
	{//BRANCHES
    	x : 2325,
    	y : height - 1000,
    	width : 100,
    	height : 25
	},
	{//normal
    	x : 2125,
    	y : height - 1200,
    	width : 100,
    	height : 25
	},
	{//normal
    	x : 2325,
    	y : height - 1350,
    	width : 100,
    	height : 25
	},
	{//TREE 4
    	x : 1850,
    	y : height - 1500,
    	width : 200,
    	height : 525,
        type: "tree"
	},

	{//BRANCHES
    	x : 825,
    	y : height - 1000,
    	width : 100,
    	height : 25
	},	
	{
    	x : 1025,
    	y : height - 1200,
    	width : 100,
    	height : 25
	},	
	{//TREE 3
    	x : 1200,
    	y : height - 1350,
    	width : 200,
    	height : 350,
        type: "tree"
	},	
	{//TREE 2
    	x : 550,
    	y : height - 1400,
    	width : 200,
    	height : 1400,
        type: "tree"
	},	
	{//BRANCHES
    	x : 150,
    	y : height - 1500,
    	width : 100,
    	height : 25
	},		
	{//normal
    	x : 375,
    	y : height - 1700,
    	width : 100,
    	height : 25
	},	 
	{//TREE 1 wave
    	x : 0,
    	y : height - 1875,
    	width : 75,
    	height : 1900,
        type: "tree"
	},
	{//wave
    	x : 0,
    	y : height - 2000,
    	width : 5,
    	height : 125,
        type: "tree"
	},	
    {//fire
        x : 375,
        y : height - 1900,
        width : 175,
        height : 25
    },  	
	{//BRANCHES normal
    	x : 150,
    	y : height - 2050,
    	width : 100,
    	height : 25
	},
	{//wave +
    	x : 375,
    	y : height - 2175,
    	width : 100,
    	height : 25
	},
	{//normal
    	x : 150,
    	y : height - 2325,
    	width : 100,
    	height : 25
	},		
	{//TREE 1
    	x : 0,
    	y : height - 2450,
    	width : 75,
    	height : 450,
        type: "tree"
	},
	{//wave
    	x : 0,
    	y : height - 2575,
    	width : 5,
    	height : 125,
        type: "tree"
	},	
	{//TREE 2
    	x : 550,
    	y : height - 2450,
    	width : 200,
    	height : 925,
        type: "tree"
	},	
	{//..wave
    	x : 625,
    	y : height - 2575,
    	width : 125,
    	height : 125,
        type: "tree"
	},
	{//BRANCHES
    	x : 1675,
    	y : height - 1400,
    	width : 100,
    	height : 25
	},
	{
    	x : 2325,
    	y : height - 1700,
    	width : 100,
    	height : 25
	},	
    {
        x : 2125,
        y : height - 1900,
        width : 100,
        height : 25
    },  
    {//TREE 4
        x : 1850,
        y : height - 2075,
        width : 200,
        height : 450,
        type: "tree"
    },
    {
        x: 1475,
        y: height - 2050,
        width: 200,
        height: 25   
    },      
    {//Branches GROUPPPPP
        x : 1525,
        y : height - 2275,
        width : 200,
        height : 25
    },          
    {//wave;
        x : 1475,
        y : height - 2475,
        width : 100,
        height : 25
    },     
    {//..wave;
        x : 1675,
        y : height - 2600,
        width : 100,
        height : 25
    },     
    {//normal;
        x : 1475,
        y : height - 2775,
        width : 100,
        height : 25
    },
    {
        x: 1675,
        y: height -  3100,
        width: 100,
        height: 25
    },

    {//tree3
        x : 1200,
        y : height - 2900,
        width : 200,
        height : 1350 ,
        type: "tree"
    },
    {//+
        x: 1200,
        y: height - 3050 ,
        width: 100,
        height: 150,
        type: "tree"
    }, 
    {//tree 4
        x: 1850,
        y: height -  3175,
        width: 200,
        height: 900,
        type: "tree"
    },


    {//BRANCHES
        x: 2325,
        y: height - 2225,
        width: 100,
        height: 25
    },
    {
        x: 2125,
        y: height - 2400,
        width: 100,
        height: 25
    },
    {//GROUPPPPP
        x: 2175,
        y: height - 2600,
        width: 200,
        height: 25
    },
    {
        x: 2125,
        y: height - 2950,
        width: 100,
        height: 25
    },
    {//Tree 5
        x : 2500,
        y : height - 2750,
        width : 75,
        height : 2750,
        type: "tree"
    },
    {
        x : 2570,
        y : height - 2875,
        width : 5,
        height : 125,
        type: "tree"
    },   
    {
        x : 2500,
        y : height - 3350,
        width : 75,
        height : 475,
        type: "tree"
    }, 
    {//5 end
        x : 2350,
        y : height - 3400,
        width : 225,
        height : 100,
        type: "top"
    }, 
    {//BRANCHES
        x : 1025,
        y : height - 2775,
        width : 100,
        height : 25
    }, 
    {//normal
        x : 825,
        y : height - 2975,
        width : 100,
        height : 25
    }, 
    {//TREE 2
        x : 550,
        y : height - 3200,
        width : 200,
        height : 450,
        type: "tree"
    }, 
    {//TREE 1
        x : 0,
        y : height - 3350,
        width : 75,
        height : 775,
        type: "tree"
    }, 
    {//tree 1 end
        x : -275,
        y : height - 3400,
        width : 500,
        height : 100,
        type: "top"
    }, 
    {// Branches
        x : 375,
        y : height - 3550,
        width : 100,
        height : 25
    }, 
    {
        x : 2125,
        y : height - 3550,
        width : 100,
        height : 25
    },
    {//Tree 2
        x : 550,
        y : height - 3750,
        width : 200,
        height : 425,
        type: "tree"
    },
    {//Tree 4
        x : 1850,
        y : height - 3750,
        width : 200 ,
        height : 425,
        type: "tree"
    },
    {//BRANCHES
        x : 1025,
        y : height - 3900,
        width : 100,
        height :25
    },
    {
        x : 1475,
        y : height - 3900,
        width : 100,
        height : 25
    },
    {//tree 3
        x : 1200,
        y : height - 4100,
        width : 200,
        height : 1050,
        type: "tree"
    },
    {//fire
        x : 850,
        y : height - 3600,
        width : 200,
        height : 25
    },
    {
        x : 1525,
        y : height - 3600,
        width : 200,
        height : 25
    },
    {//branches
        x : 825,
        y : height - 4300,
        width : 100,
        height : 25
    },
    {
        x : 1675,
        y : height - 4300,
        width : 100,
        height :25
    },
    {//normal
        x : 1025,
        y : height - 4475,
        width : 100,
        height :25
    },
    {//normal
        x : 1475,
        y : height - 4475,
        width : 100,
        height : 25
    },
    {//n
        x : 825,
        y : height - 4650,
        width : 100,
        height : 25
    },
    {//n
        x : 1675,
        y : height - 4650,
        width : 100,
        height : 25
    },
    {//tree2
        x : 550,
        y : height - 4800,
        width : 200,
        height : 850,
        type: "tree"
    },
    {//+ wave
        x : 550,
        y : height - 4950,
        width : 100,
        height : 150,
        type: "tree"
    },
    {//tree 4
        x : 1850,
        y : height - 4800,
        width : 200,
        height : 850,
        type: "tree"
    },
    {//+ wave
        x : 1950,
        y : height - 4950,
        width : 100,
        height : 150,
        type: "tree"
    },
    {//branches
        x : 1025,
        y : height - 5000,
        width : 100,
        height : 25
    },
    {
        x : 1475,
        y : height - 5000,
        width : 100,
        height : 25
    },
    {//tree 3 GROUPPPP
        x : 1200,
        y : height - 5200,
        width : 200,
        height : 950,
        type: "tree"
    },
    {//brANCHes Normal
        x : 900,
        y : height - 5350,
        width : 125,
        height : 25
    },
    {//normal
        x : 1600,
        y : height - 5350,
        width : 125,
        height : 25
    },
    {//tree 2 
        x : 550,
        y : height - 5500,
        width : 200,
        height : 550,
        type: "tree"
    },
    {// end
        x : 400,
        y : height - 5600,
        width : 500,
        height : 100,
        type: "top"
    },
    {//tree 4
        x : 1850,
        y : height - 5500,
        width : 200,
        height : 550,
        type: "tree"
    },
    {// end
        x : 1700,
        y : height - 5600,
        width : 500,
        height : 100,
        type: "top"
    },
    {//tree 3
        x : 1200,
        y : height - 5800,
        width : 200,
        height : 450,
        type: "tree"
    },
    {
        x : 1200,
        y : height - 6100,
        width : 200,
        height : 150,
        type: "tree"
    },
    {//3 end
        x : 300,
        y : height - 6200,
        width : 2000,
        height : 100,
        type: "top"
    },

    {//fires
        x : 75,
        y : height - 2975,
        width : 475,
        height : 25
    },
    {
        x : 750,
        y : height - 2250,
        width : 450,
        height : 25
    },
    {
        x : 75,
        y : height - 900,
        width : 475,
        height : 25
    },
    {
        x : 2050,
        y : height - 500,
        width : 450,
        height : 25
    },
    {
        x : 10,
        y : height - 4800,
        width : 530,
        height : 25
    },
    {
        x : 2060,
        y : height - 4800,
        width : 530,
        height : 25
    },
    {
        x: 2325,
        y: height - 2000,
        width: 175,
        height: 25
    }, 
    {//fire
        x : 750,
        y : height - 650, 
        width: 200,
        height: 25
    },   






    //0, 550, 1200, 1850, 2500
    //BRANCHES 150, 375,,,, 825, 1025,,,,1475, 1675,,,, 2125, 2325


    // {
    //     x : ,
    //     y : height - ,
    //     width : ,
    //     height :
    // },

	


	{
    	x : 0,
    	y : height - 30,
    	width : 2575,
    	height : 50,
        type: "floor"
	}


];
export default obstacles;
