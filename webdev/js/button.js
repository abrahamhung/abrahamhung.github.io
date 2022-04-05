// const rand = (max, min = 0) => Math.random() * (max - min) + min;
// const randColor = () => {
//     const [r,g,b] = [rand(255), rand(255), rand(255)];
//     return   "rgb("+r+","+g+","+b+")";
// };
// // change the color when pressed
// const elem = document.getElementsByTagName("button")[0];
// elem.addEventListener("click", (e)=>{
//     elem.style.backgroundColor=randColor();
//     document.body.style.backgroundColor = randColor();
// })

// var bgPage = document.body.background;

var r = 0,
g = 0,
b = 0;

function bgs () {
    
    //simple hsv, regular
    if(r<255 && g<=0){
        r++;
    }
	if(g<255 && b<=0){
        g++;
    }
    if(b<255 && r<=0){
        b++;
    }
    if(r>0 && g>=255){
        r--;
    }
    if(g>0 && b>=255){
        g--;
    }
    if(b>0 && r>=255){
        b--;
    }
    

	setTimeout(function() {
		bgs();
	}, 20);

	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}


