const AudioElement = new Audio('music/1.mp3')
var song_card=document.getElementsByClassName("latest-release-song-card")

var songindex=0;  
var music_footer=document.getElementById("music-footer")
var myprogressbar = document.getElementById("myprogressbar")
var play_button = document.getElementById("proplay")
var button = Array.from(document.getElementsByClassName("song-card-play-button"));
let song_items = document.getElementsByClassName("song-card")


let songs = [
{filePath: "music/1.mp3"},
{filePath: "music/2.mp3"},
{filePath: "music/3.mp3"},
{filePath: "music/4.mp3"},
{filePath: "music/5.mp3"},
{filePath: "music/6.mp3"},
{filePath: "music/7.mp3"},
{filePath: "music/8.mp3"},
{filePath: "music/9.mp3"},
{filePath: "music/10.mp3"},
{filePath: "music/11.mp3"},
{filePath: "music/12.mp3"},
{filePath: "music/13.mp3"},
{filePath: "music/14.mp3"},
] 

var flag=0

button.forEach((Element)=>{
   Element.addEventListener('click',(e)=>{

      var songindex= parseInt(e.target.id)
      // console.log(e.target.getTime())
      if(flag==0)
      {
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
       flag=1; 
       AudioElement.src = `music/${songindex}.mp3`;
       AudioElement.currentTime = 0;
       AudioElement.play();
       
      }
      else {
       flag = 0;
       AudioElement.pause();
      e.target.classList.remove("fa-pause");
      e.target.classList.add("fa-play");
       
       
      }

   })
})

document.getElementById("next").addEventListener('click', ()=>{
   if (songindex>=14)
   {
      songindex=0
   }
   else{
      songindex+=1;
   }
   AudioElement.src = `music/${songindex}.mp3`;
       AudioElement.currentTime = 0;
       AudioElement.play();
       play_button.classList.remove("fa-play");
       play_button.classList.add("fa-pause");
})

document.getElementById("previous").addEventListener('click', ()=>{
   if (songindex<=0)
   {
      songindex=0
   }
   else{
      songindex-=1;
   }
   AudioElement.src = `music/${songindex}.mp3`;
       AudioElement.currentTime = 0;
       AudioElement.play();
       play_button.classList.remove("fa-play");
       play_button.classList.add("fa-pause");
})

//handle play pause button
play_button.addEventListener('click', function(){
   if(AudioElement.paused || AudioElement.currentTime<=0)
   {
      AudioElement.play()
      play_button.classList.remove("fa-play");
      play_button.classList.add("fa-pause");
   }
   else{
      AudioElement.pause()
      play_button.classList.remove("fa-pause");
       play_button.classList.add("fa-play");
   }
})

AudioElement.addEventListener('timeupdate',function(){
   console.log('timeupdate')
   //seek update
   progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);
   console.log(progress)
   myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',function(){
   AudioElement.currentTime = myprogressbar.value*AudioElement.duration/100;
})
