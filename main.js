statusc="";
objectS=[];



function preload()
{
    video=createVideo('video.mp4');
}

function setup()
{

canvas = createCanvas(850, 450);
canvas.center();
video.hide();


}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("mario").innerHTML="detectando cosas";
}
function draw()
{
   image(video, 0 , 0 , 850 , 450);
   if (statusc != "") 
   {
    objectDetector.detect(video,gotResult)
    for ( i = 0; i<objectS.length; i++)
    {
   document.getElementById("mario").innerHTML="status:objetos decectados";
        document.getElementById("number_of_objects").innerHTML="numero de cosos raros son : " + objectS.length;

   fill("#FF0000");
   percent=floor(objectS[i].confidence * 100)
    text(objectS[i].label + " " + percent + "%", objectS[i].x + 15 , objectS[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objectS[i].x , objectS[i].y , objectS[i].width , objectS[i].height);
}
}
}
function modelLoaded(){
    console.log("ha cargado el modelo con exito haora es hora de morir tin");
    statusc=true;
video.loop();
video.speed(1);
video.volume(0);
}
function gotResult(error,results)
{
    if (error){
        console.log(error);
    }
    console.log(results)
    objectS=results;
}