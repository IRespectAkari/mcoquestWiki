const img = document.createElement("img");
img.src = "img/cursorImg.png";

const cursorFollow = (event)=>{
  console.log("cursorFollow done");

  var x = event.clientX;
  var y = event.clientY;
  img.style.left = x;
  img.style.top = y;
  
  return;
}

// const body = document.querySelectorAll("body");
// console.log(body[0]);
// body[0].addEventListener("mousemove", cursorFollow);
// body[0].addEventListener("mousemove", console.log("mousemove"));

// const frame = document.getElementById("wiki");
// frame.addEventListener("mousemove", console.log("mousemove !"));
