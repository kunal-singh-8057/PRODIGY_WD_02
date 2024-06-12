const clock = document.getElementById("clock");
let sec = 0;
let min = 0;
let hr = 0;

const start = ()=>{
 a = setInterval(()=>{
if(sec<59)
    {
        sec++;
    }

    else if(min >=59)
        {
            min=0;
            hr++;
        }
  else{
   sec=0;
   min++;
   }

 second = String(sec).padStart(2,"0");
 minute = String(min).padStart(2,"0");
 hour = String(hr).padStart(2,"0");



clock.innerHTML=`${hour}:${minute}:${second}`;
}, 1000);
} 

const stop = ()=>{
clearInterval(a);
}

const Reset = ()=>{
     few = `00:00:00`
     sec=0;
    clock.innerHTML=(`${few}`);
}