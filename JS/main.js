
$(function() {
    $(window).on("scroll", function() {
         if($(window).scrollTop() > 600) {
             $(".header").addClass("active");
         } else {
            $(".header").removeClass("active");
        }
     });
});

$('document').ready(function (){
	$('select').on('change', function(){
 		var option = $(this).val();
 		console.log(option);
 		$("html, body").animate({ scrollTop: $('#'+option).offset().top }, 1000);
 	});
 })



    /*for (i=0; i <=100; i++) {
            if(i%3===0 && i%5===0) {
                console.log('FizzBuzz', i);
            }
            else if(i%5===0) {
                console.log('Buzz');
            }
            else if(i%3===0){
                console.log('Fizz');
            }
            else { 
                console.log(i);
            }
 }*/




/*for (i=0; i <=100; i++) {
            if(i%3===0 && i%5===0) {
                document.write('<h1>FizzBuzz</h1>');
            }
            else if(i%5===0) {
                document.write('<h2>Buzz<h2>');
            }
            else if(i%3===0){
                document.write('<h3>Fizz</h3>');
            }
            else { 
                document.write(i);
            }
}*/


/*function fizzy(i) {  
    if(i%3===0 && i%5===0) {
        document.write("<h1>FizzBuzz</h1>"+'<h1>'+i+'</h1>'+"      ");
    }
    else if(i%5===0) {
        document.write('<h2>Buzz<h2>'+i+" ");
    }
    else if(i%3===0){
        document.write('<h1>Fizz</h1>');
    }
    else { 
        document.write('<h1>'+i+'</h1>');
    }
}

/* for (i=0; i <=100; i++){
         
     */



/*function initFizz() {     
    for (i=0; i <=100; i++){
        fizzy(i);
    }
    return false;   
}*/


// function get_color(color){
//     var approved = ["red", "blue", "green", "yellow"]
//     var a = approved.indexOf(color);
//     if (a === -1){
//         console.log("not approved");     
//     }
//     else {
//         console.log("approved");
//     }
// }

// get_color ("red")


// function get_color (color) {


// var approvedcol = ["red", "blue", "green"];
// var h= approvedcol.length;
//     for(i=0; i<h; i++){
//         console.log(approvedcol[i]);   
//     }
    
    

    // function myColors(color){
    //     var colCount= color.length;
    //     for(i=0; i<colCount; i++){
    //         console.log(color[i]);
    //     }
    // }
    
    // myColors(["blue", "red"]);


// function fizzBuzz() {
//     for (i=0, )
//     console.log(i);
// }




    // function myColours(a){
    //     console.log(a);
    // }
    
    // myColours("blue");

    


//     var a = approvedcol.indexOf(color);
//     if (a === -1){
//         console.log ("not approved");
//     }
//     else {
//         console.log ("approved");
//     }
// }

// get_color ("red");


// function get_color(color){
//     var approved = ["red", "blue", "green", "yellow"]
//     var a = approved.indexOf(color);
//     if (a === -1){
//         console.log("not approved");     
//     }
//     else {
//         console.log("approved");
//     }
//     if (not) {
//         console.log(arr);
//     }
// }

// get_color ("red")


// var a= { 
//     date: Date(),
//     cars: ["BMW","Honda"],
//     dealership: ["Don Valley North"],
//     getCars: function (e){
//     return this.dealership+" "+this.date+" "+this.cars[0]+" "+e;
//     }
// }

// // console.log(a.getCars("hello"));

// function checkForDealer(e){
//     var value= e.value;
//  console.log(a.getCars(value));
// }


// function fizzbuzz(i) { 
//     for (i=0; i <=100; i++) { 
//         if(i%3===0 && i%5===0) {
//             document.write("FizzBuzz");
//         }
//         else if(i%5===0) {
//             document.write('Buzz');
//         }
//         else if(i%3===0){
//             document.write('Fizz');
//         }
//         else { 
//             document.write(i);
//         }
//     }
// }



// var hotel= {
//     name:"The Quay",
//     totalRooms: 40,
//     bookedRooms: 25,
//     roomType: ["twin","double","suite"],
//     availability: function(){         
//     return this.totalRooms-this.bookedRooms;
//     }
// }


var hotel= {
    name:"The Quay",
    roomType: ["twin","double","suite"],
    rooms:{
        suite:{
            total: 10,
            booked: 4,
        },
        double:{
            total: 10,
            booked: 4,
        },
        twin:{
            total: 10,
            booked: 4,
        },
    },
    totalRooms: function(){
        var total = 0;
        for (room in this.rooms){
            total += this.rooms[room].total;
        }
        return total;
    },
    totalBooked: function(){
        var booked = 0;
        for (room in this.rooms){
            booked += this.rooms[room].booked;
        }
        return booked;
    },
    percAvail: function(){
        var perc = 0;
        perc = ((this.totalRooms() - this.totalBooked()) / this.totalRooms())* 100;
        return perc;
    },

    



}

console.log(hotel.totalRooms());

console.log(hotel.totalBooked());

console.log(hotel. percAvail());



//     }
//     roomType: ["twin","double","suite"],
//     availability: function(){         
//     return this.totalRooms-this.bookedRooms;
//     }
// }


// document.write(hotel.availability());

// console.log(hotel.availability());


// var h= hotel.roomType.length;
//     console.log(h);
//     for (i=0; i<h ; i++){
//         console.log(hotel.roomType[i]);
//     }


/*

One you’ve created your object 

- create a loop to log to the console all of the room types one-by-one. 
- Then, update the booked rooms to 30, 
- check the new availability
- display that in an alert box.

*/




