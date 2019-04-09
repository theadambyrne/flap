let bird;
let pipes = [];
let score = 0;



function setup() {
	createCanvas(400, 600)
	bird = new Bird()
	pipes.push(new Pipe())



}

function draw() {

	background(52, 152, 219)

	for (let i = 0; i < pipes.length; i++) {
		pipes[i].show()
		pipes[i].update()


		if (pipes[i].x < 0) {
			pipes.splice(i, 1)
			bird.score += 1

		}
		if (pipes[i].hit(bird)) {
			bird.highlight = true
			bird.velocity = 0
			bird.gravity = 0
			pipes = ""

		}


	}

	bird.show()
	bird.update()

	if (frameCount % 80 == 0) {
		pipes.push(new Pipe())
	}


}

function keyPressed() {
	if (key == ' ') {
		bird.up()
	}
}

window.addEventListener("mousedown", function () {
	bird.up()
})
