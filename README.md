voxel-wall
==========

Create walls for voxel.js games.

## Installation
```
npm install voxel-wall
```
## Lets create a brick wall!
```js
var createGame = require('voxel-engine')
var texturePath = require('painterly-textures')(__dirname)

//create a flat, grassy world.
var game = createGame({
	texturePath : texturePath,
	generate: function(x, y, z) {
    return y === 1 ? 1 : 0
  }
})

var container = document.body
game.appendTo(container)


//the wall will be 5 voxel high and 8 voxel wide.
//we will give our wall a brick texture
var wall = require('voxel-wall')(game, { height: 5, width: 8, material : 'brick' })

//lets make a player and have him/her stare at the new wall
var createRobot = require('voxel-player')(world)
var robot = createRobot('robot.png')
robot.possess()
robot.yaw.position.set(0,2,0)

//lets place our wall directly in front of player
wall.place({x:-4, y:2, z:-2})
```
## Options
```js
{ width : 8,
height: 5,
texture: 'brick' }
```
Defaults: width: 5, height: 5, texture: 'brick'

## License
BSD