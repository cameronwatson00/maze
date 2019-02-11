function Cell(c, r){
	this.c = c;
	this.r = r;
	this.walls = [true,true,true,true];  // top, right, bottom, left
	this.visted = false;

	this.checkNeighbors = function(){
		var neighbors = [];
		var top = grid[index(this.c, this.r - 1)];
		var right = grid[index(this.c + 1, this.r)];
		var bottom = grid[index(this.c, this.r + 1)];
		var left = grid[index(this.c - 1, this.r)];

		if(top && !top.visted){
			neighbors.push(top);
		}
		if(right && !right.visted){
			neighbors.push(right);
		}
		if(bottom && !bottom.visted){
			neighbors.push(bottom);
		}
		if(left && !left.visted){
			neighbors.push(left);
		}

		if(neighbors.length > 0){
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		}
		else{
			return undefined;
		}
	}

	this.highlight = function(){
		var x = this.c * size;
		var y = this.r * size;	
		noStroke();
		fill(0,0,255,100);
		rect(x,y,size,size);
	}


	this.show = function(){
		var x = this.c * size;
		var y = this.r * size;	
		strokeWeight(2);	
		stroke(255);
		if(this.walls[0]){
			line(x,y,x+size,y); // top
		}
		if(this.walls[1]){
			line(x+size,y,x+size,y+size); // right
		}
		if(this.walls[2]){
			line(x+size,y+size,x,y+size); // bottom
		}
		if(this.walls[3]){
			line(x,y+size,x,y); // left
		}

		if(this.visted){
			noStroke();
			fill(255,0,200,100);
			rect(x,y,size,size);
		}
	}
}