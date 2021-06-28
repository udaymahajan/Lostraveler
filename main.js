
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBKtQyihGtPrO220GodMrPF2l95AbW-yC8",
  authDomain: "mywebsite-6ac58.firebaseapp.com",
  databaseURL: "https://mywebsite-6ac58.firebaseio.com",
  projectId: "mywebsite-6ac58",
  storageBucket: "mywebsite-6ac58.appspot.com",
  messagingSenderId: "1071509605417",
  appId: "1:1071509605417:web:4e406302eda4daaf706038",
  measurementId: "G-SGS1WWYG4L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//refernce messgaes collection
var messagesRef = firebase.database().ref('messages');


document.getElementById('resform').addEventListener('submit', submitForm);
function submitForm(e)
{e.preventDefault();



//get values
var name=getInputVal('name');
var email=getInputVal('email');
var number=getInputVal('number');
var feedback=getInputVal('feedback');



        saveMessage(name,email,number,feedback);

        //show alert
        document.querySelector('.alert-formcompleted').style.display='block';
        
        //hide aler after 2 seconds
        setTimeout(function(){
        document.querySelector('.alert-formcompleted').style.display='none';
        },2000);
        
        document.getElementById('resform').reset();
        
}

        

//function to get form values
function getInputVal(id)
{
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name,email,number,feedback)
{
    var newMessageRef=messagesRef.push();
    newMessageRef.set(
        {name:name,
        email:email,
        number:number,
        feedback:feedback
  });
    
    

}
