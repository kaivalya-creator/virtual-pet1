var dog, happyDog, database, foodStock;
var dogS;
var foodS = 0
function preload()
{
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dogS = createSprite(250, 250, 15, 15);
  dogS.addImage(dog);
  dogS.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);

}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dogS.addImage(happyDog);
}
drawSprites();
        
noStroke();
      textSize(20)
      fill("black")
      text("FoodStock" + foodS, 300, 100)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

database.ref("/").update({
  food:x - 1
})
}
 




