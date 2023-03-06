var inputF = document.getElementById("WritingF");
inputF.focus();


var FViewer = document.getElementById("FView");

var loops = null;

let promise = Promise.resolve();  // Used to hold chain of typesetting calls

function typeset(code) {
  promise = promise.then(() => MathJax.typesetPromise(code()))
                   .catch((err) => console.log('Typeset failed: ' + err.message));
  return promise;
}

function onWriting(event){
    var word = String(event.data);
    // console.log(word);
    if(word.includes(String.fromCharCode(92)) == false)
        if(inputF.value != ""){
            //Converting input value to string
            var temp = inputF.value;
            temp = String(temp);    

            //Output input value
            var text = "$$"+temp+"$$";
            FViewer.innerHTML = text;
            MathJax.typesetPromise().catch((error)=>{
                console.log("error occured");
                window.location.reload();
            });
        }
        else FViewer.innerHTML = "";
}

function doneWriting(event){
    console.log(event);
    clearInterval(loops);
}

inputF.addEventListener("input",onWriting);
inputF.addEventListener("blur",doneWriting);