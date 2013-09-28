
module.exports = function(game, opts) {
  return new Wall(game, opts)
}

module.exports.Wall = Wall

function Wall(game, opts) {
  if (!(this instanceof Wall)) return new Wall(game, opts)
  this.game = game
  this.opts = opts || {}
  this.height = this.opts.height || 5
  this.width = this.opts.width || 5
  this.material = this.opts.material || 'brick'

  this.buildVerticalStack = function(position){
    for (var i = 0; i < this.height; i++) {
      var pos = [position.x, position.y + i, position.z]
      this.game.setBlock(pos, this.material)
    }
  }
}

Wall.prototype.place = function(position) {
  for(var i = 0; i < this.width; ++i){
    var pos = {x: position.x + i, y: position.y, z: position.z}
    this.buildVerticalStack(pos)
  }
}