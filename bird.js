class Bird {
	constructor() {
		this.y = height / 2
		this.x = 64

		this.gravity = 0.7
		this.lift = 16
		this.velocity = 0

		this.score = 0
		this.highlight = false
	}
	show() {
		if (this.highlight) {
			fill(255, 0, 0)
		} else {
			fill(241, 196, 15)
		}
		ellipse(this.x, this.y, 32, 32)
		textFont("Courier");
		textSize(20);
		fill(0);
		text(this.score, this.x - 10, this.y + 8);
	}
	hide() {
		fill(0)
		ellipse(this.x, this.y, 32, 32)

	}
	update() {
		this.velocity += this.gravity
		this.velocity *= 0.9
		this.y += this.velocity

		if (this.y > height) {
			this.y = height
			this.velocity = 0
		} else if (this.y < 0) {
			this.y = 0
			this.velocity = 0
		}
	}
	up() {
		this.velocity -= this.lift
	}
}