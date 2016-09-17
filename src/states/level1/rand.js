var width=1920,height=1080;
const obstacles = [
// 	{
// 		x: 0,
// 		y: 980,
// 		width: 1920,
// 		height: 100
// 	},
// 	{
// 		x: 100,
// 		y: 650,
// 		width: 500,
// 		height: 500
// 	},
// 	{
// 		x: 1200,
// 		y: 400,
// 		width: 300,
// 		height: 100
// 	},
// 	{
// 		x: 1400,
// 		y: 500,
// 		width: 100,
// 		height: 480
// 	}
// ];00
	{//leftbord
	x:-500,
	y:0,
	width:500,
	height:1500
	},
	{//topbord
	x:0,
	y:-500,
	width:5*width,
	height:500
	},
	{
	x : -1000,
	y : -100,
	width : width,
	height : 100
	},
	{//10
    	x : 0,
    	y : height - 30,
    	width : width*(2+2/3),
    	height : 500
	},
	{//1
	x : 450,
	y : 0,
	width : 17,
	height : 150
	},
	{//2
	x : 450,
	y : 150,
	width : 912,
	height : 15
	},
	{
	x : -1000,
	y : -100,
	width : width,
	height : 100
	},
	{//4
    	x : width/8+500,
    	y : 3 * height/4 - 10,
    	width : 18 * width/40 +145,
    	height : 15
	},
	{//5
    	x : 5 * width/8 + width/40+540,
    	y : 3 * height/4 - 130,
    	width : 15 ,
    	height :  3 * height/4 - 10
	},
	{//6
    	x : 5 * width/8 + width/40+540,
    	y : 3 * height/4 - 130 ,
    	width : width/5,
    	height : 15
	},
	{//7
    	x : width/8+2040,
    	y : height/2,
    	width : 9 * width/40 ,
    	height : 15    	
	},
	{//8
    	x : 5 * width/8 + width/40+1030,
    	y : height/4 + 280,
    	width : 9 * width/40-180 ,
    	height : 15    	
	},
	{//9
    	x : width/8 +2040,
    	y : height/4 + 150,
    	width : 15 ,
    	height : height/2
        },
	{//11
    	x : width*3+552,
    	y : height+50,
    	width : 15,
    	height : 120
    	},
	{//12
	x:width*(2+2/3),
	y:height-30,
	width:10,
	height:200
	},
	{//13
	x:width*(2+2/3)+100,
	y:0,
	width:10,
	height:350
	},
	{//14
	x:width*(2+2/3),
	y:height*1.5,
	width:1000,
	height:10
	},
	{//15
	x:width*2,
	y:-height*2/1.5,
	width:500,
	height:10
	},
	{//15
	x:width*2,
	y:-height*1,
	width:500,
	height:10
	},
	{//16
	x:width*(2+2/3)+100,
	y:350,
	width:600,
	height:15
	},
	{//16a
	x:width*(2+2/3)+0,
	y:height+155,
	width:1000,
	height:15
	},
	{//17
	x:width*(2+2/3)+1200,
	y:350,
	width:500,
	height:15
	},
	{//17.5
	x:width*(2+2/3)+1200+530,
	y:350,
	width:200,
	height:15
	},
	{//18
	x:width*(2+2/3)+800,
	y:500,
	width:25,
	height:15
	},
	{//19
	x:width*(2+2/3)+1000,
	y:450,
	width:25,
	height:15
	},
	{//20
	x:width*(2+2/3)+990,
	y:650,
	width:1525,
	height:15
	},
	{//21
	x:width*(2+2/3)+1400,
	y:350,
	width:15,
	height:300
	},
	{//22
	x:width*(2+2/3)+1400,
	y:height,
	width:5000,
	height:15
	},
	{//23
	x:width*(2+2/3)+1930,
	y:350,
	width:15,
	height:175
	},
	{//24
	x:width*(2+2/3)+1930,
	y:525,
	width:125,
	height:15
	},
	{//25
	x:width*(2+2/3)+1930+110,
	y:350,
	width:15,
	height:175
	},	
	{//26
	x:width*(2+2/3)+1930+110,
	y:350,
	width:175,
	height:15
	},
	{//23.1
	x:width*(2+2/3)+1930+280,
	y:350,
	width:15,
	height:175
	},
	{//24.1
	x:width*(2+2/3)+1930+280,
	y:525,
	width:125,
	height:15
	},
	{//25.1
	x:width*(2+2/3)+1930+280+110,
	y:350,
	width:15,
	height:175
	},	
	{//26.1
	x:width*(2+2/3)+1930+390,
	y:350,
	width:175,
	height:15
	},
	{//23.2
	x:width*(2+2/3)+1930+280*2,
	y:350,
	width:15,
	height:175
	},
	{//24.2
	x:width*(2+2/3)+1930+280*2,
	y:525,
	width:125,
	height:15
	},
	{//25.2
	x:width*(2+2/3)+1930+280*2+110,
	y:350,
	width:15,
	height:175
	},	
	{//26.2
	x:width*(2+2/3)+1930+280*2+125,
	y:350,
	width:500,
	height:15
	},
	{//23.3
	x:width*(2+2/3)+1930+280*2+625,
	y:350,
	width:15,
	height:175
	},
	{//24.3
	x:width*(2+2/3)+1930+280*2+625,
	y:525,
	width:125,
	height:15
	},
	{//25.3
	x:width*(2+2/3)+1930+280*2+735,
	y:0,
	width:15,
	height:525
	},	
	{//26.3
	x:width*(2+2/3)+1930+280*2+125,
	y:350,
	width:500,
	height:15
	},
	{//Enemy under 8
    	x : 5 * width/8 + width/40+550,
    	y : height/4 + 420,
    	width : 9 * width/40+180*3-25 ,
    	height : 15    	
	},
	{//3 Enemy set
    	x : 5 * width/8 + width/40+1370,
    	y : height/4 + 410,
    	width : 9 * width/40+180*13+20 ,
    	height : 15    	
	}];
//export default obstacles;