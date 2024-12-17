// z2sk5pf0pxgl4eDqQnIAE2y80Qgxvwjfb2DQaGsc


function displayImage(data) {
    // $('<img>', {
    //     src: data.url,
    //     height: '100%',
    //     width: '100%'
    // }).appendTo('#image-container');


    $(document.createElement('img')).attr('src',data.url).appendTo('#image-container');
    
    
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    data: {
        api_key: 'DEMO_KEY',
        date: '2018-06-05'
    },
    success: displayImage
});








// function fetchRandomDogImage(){
    
//     var xhrRequest = new XMLHttpRequest();

//     xhrRequest.onload = function(){
        
//         console.log(xhrRequest.response);
//         var responseJSON = JSON.parse(xhrRequest.response);
//         // JSON.str
//         var imageUrl = responseJSON.message;
//         $('#dog-image').attr('src',imageUrl);

//     };
//     xhrRequest.onerror = function(){
//         console.log("Request Failed");
//     };

//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random', true);
//     xhrRequest.send('');



    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function(data){
    //         // var responseJSON = JSON.parse(xhrRequest.response);      
    //         var imageUrl = data.message;
    //         $('#dog-image').attr('src',imageUrl);
    //     },

    // }).fail(function(){
    //   console.log('error');
    // });



    // $.get('https://dog.ceo/api/breeds/image/random',function(data){
    //     var imageUrl = data.message;
    //     $('#dog-image').attr('src', imageUrl);

    // }).fail(function(xhr, textStatus, errorThrown){
    //     console.log("Request Failed");

    // });





// }


// $('#fetch-dog-image-button').click(fetchRandomDogImage);