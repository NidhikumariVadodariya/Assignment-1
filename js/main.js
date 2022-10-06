/* WEB303 Assignment 2 
Name: Nidhikumari Vadodariya
Student id: 0788964
*/

$(document).ready(function(){
    
        $("#content-wrapper a#prospect").click(function(){
            $("#content").load("prospect.html", function(responseTxt2, pContent){
                if(pContent == "success")
                {
                    alert("Prospect content loaded successfully!");
                    $("#content").fadeIn(1000);
                }
           });
        });


        $("#content-wrapper a#convert").click(function(){
            $("#content").load("convert.html", function(responseTxt2, cContent){
                if(cContent == "success")
                {
                    alert("Convert content loaded successfully!");
                    $("#content").fadeIn(1000);
                }
           });
        });

        $("#content-wrapper a#retain").click(function(){
            $("#content").load("retain.html", function(responseTxt2, rContent){
                if(rContent == "success")
                {
                    alert("Retain content loaded successfully!");
                    $("#content").fadeIn(1000);
                }
           });
        });
        
    });
