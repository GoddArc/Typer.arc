var Text="apple banana cat dog elephant forest guitar house ice cream jellyfish kite lemon moon notebook orange pineapple quilt rainbow sun tree umbrella violin watermelon xylophone yogurt zebra ant butterfly car dolphin eggplant fire grass hat ink jar key lighthouse mountain nest octopus pear queen rocket snake turtle unicorn vase whale xylophone yo-yo zipper aeroplane balloon cactus drum eagle feather giraffe hammock igloo jacket kiwi lantern mango nightingale ostrich pancake quill raccoon seashell tambourine ukulele volcano waterfalls xylophone yawn zucchini apricot blueberry coconut donut elephant flamingo garden hammock iguana jam koala lollipop mango night owl penguin quesadilla rocket spaceship tea umbrella violinist waffle xylophonist yeti zebra.";
let input=document.getElementById("input");
let nxtWord=document.getElementById("nextWord");
var textArray=[];
var reTry=document.getElementById("retry");
var fifteenSec=document.getElementById("fifteenSec");
var thirtySec=document.getElementById("thirtySec");
var sixtySec=document.getElementById("sixtySec");
let tempStr="";
for(var i=0; i<Text.length; i++) {
    if(Text[i]!=" "){
        tempStr+=Text[i];
    }
    else{
        textArray.push(tempStr+" ");
        tempStr="";
    }
}
var actualTimer=1;
var displayTimer=document.getElementById("showTimer");
var charTyped=0;
var index=0;
let currWord=document.getElementById("currentWord");
let speed=document.getElementById("speed");
var setTime=15;

thirtySec.addEventListener('click',()=>{
    setTime=30;
    thirtySec.classList.add("visited");
    fifteenSec.classList.remove("visited");
    sixtySec.classList.remove("visited");
})
fifteenSec.addEventListener('click',()=>{
    setTime=15;
    fifteenSec.classList.add("visited");
    thirtySec.classList.remove("visited");
    sixtySec.classList.remove("visited");
})
sixtySec.addEventListener('click',()=>{
    setTime=60;
    sixtySec.classList.add("visited");
    fifteenSec.classList.remove("visited");
    thirtySec.classList.remove("visited");
})

function reDo(){
    actualTimer=1;
    displayTimer.innerHTML=actualTimer;
    charTyped=0;
    index=Math.round(Math.random()*10);
    input.value="";
    input.focus();

    currWord.innerHTML=textArray[index%textArray.length];
    nxtWord.innerHTML=textArray[(index+1)%textArray.length];
    input.oninput=function(){
    if (input.value==textArray[index%textArray.length]){
        index++;
        input.value="";
        charTyped+=(textArray[index%textArray.length].length);
    }
    if(index>=1){
    currWord.innerHTML=textArray[index%textArray.length];
    
    nxtWord.innerHTML=textArray[(index+1)%textArray.length];
    }
    
}
    input.addEventListener('keypress',doStuff,{once : true});
}
reTry.addEventListener('click',reDo);




currWord.innerHTML=textArray[index%textArray.length];
nxtWord.innerHTML=textArray[(index+1)%textArray.length];
input.oninput=function(){
    if (input.value==textArray[index%textArray.length]){
        index++;
        input.value="";
        charTyped+=(textArray[index%textArray.length].length);
    }
    if(index>=1){
    currWord.innerHTML=textArray[index%textArray.length];
    
    nxtWord.innerHTML=textArray[(index+1)%textArray.length];
    }
    
}

function doStuff(){
var Stuff =setInterval(()=>{
    displayTimer.innerHTML=actualTimer;
    actualTimer++;
    speed.innerHTML="You have speed of "+Math.round(((charTyped)/5)/(actualTimer/60))+" WPM";
    if(actualTimer>setTime){
        clearInterval(Stuff);
        input.blur();
    }
},1000);
}

input.addEventListener('keypress',doStuff,{once : true});

