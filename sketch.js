var s;
var scl = 5;//8.25

function setup() 
{
	createCanvas(850, 850);
	s = new Snake();
	// frameRate(10) 
}

function draw()
{
	background(60);
	s.update();
	s.show();
}

function keyPressed() {
	if(keyCode ==	UP_ARROW){
		s.dir(0,-1);
	}else if(keyCode == DOWN_ARROW){
		s.dir(0,1);
	}else if(keyCode == RIGHT_ARROW){
		s.dir(1,0);
	}else if(keyCode == LEFT_ARROW){
		s.dir(-1,0 )
	}
}
