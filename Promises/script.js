var userLoggedIn = true;

function checkUserLoggedIn(){
    var promise = new Promise((resolve,reject) => {

        // Wait for 1 sec
        setTimeout( () => {
    
            // promise is resolve
            if(userLoggedIn){
            resolve("User Logged In");
            }else{
                //Reject
                reject();
            }
    
        },1000);
    
    });
    return promise;
}



setTimeout(() => {
    userLoggedIn = true;
},500);

checkUserLoggedIn().then((successMsg) => {
    console.log(successMsg);
}).catch(() =>{
    console.log("User Not Logged In")
})