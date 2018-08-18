// checks for updates on whatsapp chat

function getNewMessages (messages=false, list=[]) {
  if(!messages){
    messages = document.getElementsByClassName('selectable-text')
  }
  let newMessages = document.getElementsByClassName('selectable-text')
  if(messages.length < newMessages.length){
    for(let i =messages.length-1; i< newMessages.length ; i++){
      list.push(messages[i].innerText)
    }
    list.map(element => console.log(element))
  }

  setTimeout(()=>{getNewMessages(messages, list)}, 4000)
}


for(let i =0 ; i< messages.length; i++){
  try{
    console.log(messages[i].innerText)
  } catch(e){ console.log(e)}
}

// to get date and name use:
.attributes['data-pre-plain-text'].nodeValue

let test1 = document.querySelectorAll("span.copyable-text, div.copyable-text")
for(let i =0 ; i< test1.length; i++){
	if(test1[i].tagName === "DIV"){
    try {
      console.log(test1[i].attributes['data-pre-plain-text'].nodeValue)

    } catch (e){
      console.error("NOPE")
    }
  }else if (test1[i].tagName ==="SPAN"){
    try{
    console.log(test1[i].innerText)
    } catch (e){
      console.error("NOPE")
    }
  } 
} 

//Getting data from bolb
//blob:https://web.whatsapp.com/32c1cff5-9d55-4ca1-a833-9ea18e152166
var blob = new Blob(["Hello, world!"], { type: 'text/plain' });
var blobUrl = URL.createObjectURL(blob);

var xhr = new XMLHttpRequest;
xhr.responseType = 'blob';

xhr.onload = function() {
   var recoveredBlob = xhr.response;

   var reader = new FileReader;

   reader.onload = function() {
     var blobAsDataUrl = reader.result;
     window.location = blobAsDataUrl;
   };

   reader.readAsDataURL(recoveredBlob);
};

xhr.open('GET', "blob:https://web.whatsapp.com/32c1cff5-9d55-4ca1-a833-9ea18e152166");
xhr.send();