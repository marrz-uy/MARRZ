/*Start Developer title funcionality*/

//text output
const output = document.querySelector(".output");
//result
let res;
//typing speed
let typeSpeed = 300;
//removing/backspace speed
let removeSpeed = 100;
//word identifier
let id = 0;

/*Words to be typed
"\xa0" = Space
*/
const words = [
    "Mateu",
    "Arocha",
    "Rodríguez",
    "Romero",
    "Zapata"
];
//colors for the individual words
const colors = [
    "rgba(255 , 255 , 255)"
];

//amount of letters
let charCount = 0;

//set initial interval on the type function
let time = setInterval(type,typeSpeed);

//typing letters
function type(){
  /*Filter out of the amount of 
    letters from the word*/
    res = words[id].substr(0,charCount);
    // change word color
    output.style.color = colors[id]
    /*When all letters are typed out, 
      stop typing and start removing
    *//*Adding the '3' pauses, the typing for
        a moment when it reaches teh end
     */
    if (charCount >= words[id].length + 3){
        //stop typing
        clearInterval(time);
        //reset character count 
        charCount = 1;
        //start removing
        time = setInterval (remove, removeSpeed);
    }
    //output the results
    output.innerHTML = res;
    //add another letter 
    charCount ++;
};
//removing letters
function remove(){
    /*Filter out the amount of 
      letters from the word, reserved*/
      res = words[id].substr(0,words[id].length - charCount);
      /*When all letters are removed, stop removing 
      and re start typing*/
    if (res.length <=0) {
        //chekc if all words have been typed out
        if (id >= words.length - 1) {
            //If so, go back to the first word
            id = 0;
        }
        //else
        else {
            //Change the next word
            id++;
        }
        //stop removing
        clearInterval(time);
        //reset character count
        charCount = 0;
        //start typing again
        time = setInterval(type, typeSpeed);
    }
    //output the result
    output.innerHTML = res;
    //Remove another letter
    charCount++;
};