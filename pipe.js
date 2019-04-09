class Pipe {
	constructor() {
		this.top = random(height / 2)
		this.bottom = random(height / 2)
		this.x = width
		this.width = 20
		this.speed = 3
		this.highlight = false
	}
	show() {
		if (this.highlight) {
			fill(255, 0, 0)
		} else {
			fill(39, 174, 96)
		}
		rect(this.x, 0, this.width, this.top)
		rect(this.x, height - this.bottom, this.width, this.bottom)
	}
	update() {
		this.x -= this.speed
	}
	hit(sprite) {
		if (sprite.y < this.top || sprite.y > height - this.bottom) {
			if (sprite.x > this.x && sprite.x < this.x + this.width) {
				this.highlight = true
				return true
			}
		}
		return false
	}
}