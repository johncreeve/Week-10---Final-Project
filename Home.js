var Home = {}

Home.BaseURL = "http://localhost:52025";


//create Account function
function CreateAccount() {
    var username = $("#username").val();
    var password = $("#password").val();
    var emailAdd = $("#emailAdd").val();
    var emailCon = $("#emailCon").val();
    }

//function to display a successful 'create account' message, and update the div element
function(success){
    $('createAccountDisplayMessage').innerHTML="Account Created";
}

//CreateAccount AJAX request

$.ajax({
    type: 'get',
    url: '/Home/CreateAccount',
    success: function(CreateAccount(username, password, emailAdd, emailCon)){
        var data = JSON.parse(result);
        },
        error: $('createAccountMessageDisplay).replaceWith($(response)){
        switch(failure){
            case UsernameTooShort:
                if this.username = length.username<6;
                break;
            case UsernameExists:
                if this.username = next.username;
                break;
            case PasswordInvalid;
                if this.password = password.length<7;
                break;
            case EmailInvalid;
                if this.emailAdd = emailAdd.contains("@");//should be 'does not contain'
                break;
            case EmailMismatch;
                if this.emailAdd != this.emailCon;
                break;
            default(success);
})

//function to display a successful 'login' message, and update the div element
            function(success){
                $('loginDisplayMessage').innerHTML="Login Successful"; 
                error: $('logintMessageDisplay).replaceWith($(response)){
               
     })

}

//AddOrUpdateElement function
$.ajax({
    type: 'get',
    url: '/Home/CreateAccount',
    success: function(AddOrUpdateElement(username, GPA, emailAdd, emailCon)){
        var data = JSON.parse(result);
      
    },
        error: $('login'.replaceWith($(response)){
          
        switch(failure){
            case UsernameDoesNotExist:
        if this.username = next.username;
        break;
            case UpdateEmail:
            if this.emailAdd= new email();
            break;
            case EnterGPA:
            if this.GPA>-0.00001{
                $.('EnterGPA').innterHTML: "GPA Updated"}
            default(success);
else:
    replaceLoginDisplayMessage();
}



//replace div LoginDisplayMessage
function replaceWith.$(LoginDisplayMessage){
    "LoginDisplayMessage".replaceWith($(
     <input id="elementName"> ElementName: </input>
    <input id="elementValue"> ElementValue: </input>
    <button id="btnAdd">AddK/button>
    }


//replace div CreateAccountDisplayMessage
            function replaceWith.$('UpdateGPA'){
                "CreateAccountMessage".replaceWith($(
                 <input id=emailAdd"> ElementName: </input><button id="btnUpdate>Update</button>
                 <input id="GPA"> ElementValue: </input><button id="btnUpdate>Update</button>
            
            }
            })
//
       
//function to display a successful 'Account Info updated' message, and update the div element
            function(success){
                $('UpdateDisplayMessage').innerHTML="Account Update Successful"; 
                error: $('UpdateMessageDisplay).replaceWith($(response)){
               
                })


//Login AJAX request
#.ajax({
    type:'get',
    url:'/Home/CreateAccount',
    success: function(Login(username, password)){
        switch(failure){
            case UsernameNotFound:
                if this.username != next.username;
                break;
            case PasswordIncorrect;
                if this.username & "-"&this.password != (username&password).Json.parse();
                break;
            default(success);
                error: (failure);
           

    }
})

$(document).ready(function () {
    document.getElementById("btnCreateAccount").addEventListener("click", CreateAccount, false)
    document.getElementById("btnLogin").addEventListener("click"), Login, false)
});