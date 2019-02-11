var cols, rows;
var size = 20;
var grid = [];
var current;
var stack = [];

function setup(){
	createCanvas(600,600);
	frameRate(30);
	cols = floor(width / size);
	rows = floor(height / size);

	for(r = 0; r < rows; r++){
		for(c = 0; c < cols; c++){
			grid.push(new Cell(c, r));
		}
	}
	current = grid[0];
}

function draw(){
	background(51);
	for(i = 0; i < grid.length; i++){
		grid[i].show();
	}
	current.visted = true;
	current.highlight();
	var next = current.checkNeighbors();
	
	if(next){
		next.visted = true;
		stack.push(current);
		removeWalls(current, next);
		current = next;
	}
	else if (stack.length > 0){
		current = stack.pop();
	}
}

function index(c, r){
	if(c < 0 || r < 0 || c > cols - 1 || r > rows - 1 ){
		return -1;
	}
	return c + r * cols; 
}

function removeWalls(current, next){
	var x = current.c - next.c;
	if(x == 1){
		current.walls[3] = false;
		next.walls[1] = false;
	}
	else if(x == -1){
		current.walls[1] = false;
		next.walls[3] = false;
	}
	var y = current.r - next.r;
	if(y == 1){
		current.walls[0] = false;
		next.walls[2] = false;
	}
	else if(y == -1){
		current.walls[2] = false;
		next.walls[0] = false;
	}
}







