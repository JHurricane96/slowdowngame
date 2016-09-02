/*function sightCheck(enemyPos, playerPos, obstacles) {
  var enemyX = enemyPos.x;
  var enemyY = enemyPos.y;
  var playerX = playerPos.x;
  var playerY = playerPos.y;
  var slope = ( (playerY - enemyY)/(playerX - enemyX) ),
    coll;
  for(var count = 0; count < obstacles.length; count++) {
    var obstaclePos = [obstacles[count].body.position.y, obstacles[count].body.position.y + obstacles[count].height];

    for(var num = 0; num <= 1; num++)
      if(playerY != enemyY) {
        var xLine = enemyX + ( 1/slope )*(obstaclePos[num] - enemyY);
          
        if ((enemyY < obstaclePos[num]  &&  playerY > obstaclePos[num]) || (enemyY > obstaclePos[num]  &&  playerY < obstaclePos[num]))
        if(xLine > obstacles[count].body.position.x  &&  xLine < obstacles[count].body.position.x + obstacles[count].width) {
          coll = "yes";
          break;
        }     
      }
    if(coll === "yes") 
      break;
  }
  if(coll)
    return coll;
  
  for(var count = 0; count < obstacles.length; count++) {
    var obstaclePos = obstacles[count].body.position.x;
    if(playerX != enemyX) {
      var yLine = enemyY + slope*(obstaclePos - enemyX);

      if ((enemyX < obstaclePos  &&  playerX > obstaclePos) || (enemyX > obstaclePos  &&  playerX < obstaclePos))
      if(yLine > obstacles[count].body.position.y  &&  yLine < obstacles[count].body.position.y + obstacles[count].height) {
        coll = "yes";
        break;
      }     
    }
  }
  return coll;
}*/

class Raycaster {
  castRay(thisPos, thatPos, obstacles) {
    const ray = new Phaser.Line(thisPos.x, thisPos.y, thatPos.x, thatPos.y);

    for (const obstacle of obstacles) {
      const edges = obstacle.getEdges();

      for (const edge of edges) {
        const intersect = Phaser.Line.intersects(ray, edge);
        if (intersect) {
          return true;
            // Uncomment to find the closest intersection
            /*distance =
                this.game.math.distance(ray.start.x, ray.start.y, intersect.x, intersect.y);
            if (distance < distanceToWall) {
                distanceToWall = distance;
                closestIntersection = intersect;
            }*/
        }
      }
    }

    return false;
  }
}

export default Raycaster;