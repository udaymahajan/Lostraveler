// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA76WoTXnYVb0BlNMZmrZrP7DFHkbzlevk",
    authDomain: "registerations-46b3b.firebaseapp.com",
    databaseURL: "https://registerations-46b3b.firebaseio.com",
    projectId: "registerations-46b3b",
    storageBucket: "registerations-46b3b.appspot.com",
    messagingSenderId: "709497113867",
    appId: "1:709497113867:web:4a9b41a42b30303e15260e",
    measurementId: "G-187WYPXCJK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  
  //refernce messgaes collection
  var regRef = firebase.database().ref('registerations');
  
  
  document.getElementById('accform').addEventListener('submit', submitForm);
  function submitForm(e)
  {e.preventDefault();
  
  
  
  //get values
 
  var Email=getInputVal('Email');
  var Password=getInputVal('Password');



 if(validateModal(true))
    {
        saveReg(Email,Password);
  
        //show alert
        document.querySelector('.alert-modalcompleted').style.display='block';
        
        //hide aler after 2 seconds
        setTimeout(function(){
        document.querySelector('.alert-modalcompleted').style.display='none';
        },2000);
        
        document.getElementById('accform').reset();
  
    }

}
  
  //function to get form values
  function getInputVal(id)
  {
      return document.getElementById(id).value;
  }
  
  //save message to firebase
  function saveReg(Email,Password)
  {
      var newRegRef=regRef.push();
      newRegRef.set(
          {
          Email:Email,
          Password:Password          
    });
      
      
  }

  function validateModal() {
    
    var email = document.forms["accform"]["Email"].value;
    
    var password = document.forms["accform"]["Password"].value;
    if (email == "") {
  
      document.querySelector('.alert-Email').style.display='block';
      
      setTimeout(function(){
        document.querySelector('.alert-Email').style.display='none';
        },2000);
      return false;
    }
    else if (password == "") {
      document.querySelector('.alert-Password').style.display='block';
      
      setTimeout(function(){
        document.querySelector('.alert-Password').style.display='none';
        },2000);
      return false;
    
  }
  else
  {
      return true;
  }
}