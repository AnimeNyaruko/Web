var inputF = document.getElementById("WritingF");

var FViewer = document.getElementById("FView");

var loops = null;

let promise = Promise.resolve();  // Used to hold chain of typesetting calls

function typeset(code) {
  promise = promise.then(() => MathJax.typesetPromise(code()))
                   .catch((err) => console.log('Typeset failed: ' + err.message));
  return promise;
}

// var promise = new Promise(onWriting);

function onWriting(event){
    loops = setInterval(()=>{
        if(inputF.value != "" && event.data !== "\\"){


            //Converting input value to string
            var temp = inputF.value;
            temp = String(temp);

            //Output input value
            var text = "$$"+temp+"$$";
            FViewer.innerHTML = text;
            MathJax.typesetPromise();
        }
    },2500);
}

function doneWriting(){
    clearInterval(loops);
}

inputF.addEventListener("focus",onWriting);
inputF.addEventListener("blur",doneWriting);