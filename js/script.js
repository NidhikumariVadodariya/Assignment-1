/*
    Assignment #4
    {Nidhikumari Vadodariya - 0788964}
*/

$(document).ready(function(){

        let latitd;
        let lngtud;
        let acurcy;
            
        checkBrowerSetting();
        
        function checkBrowerSetting(){
            var geolocationError = function()
            {
                $("#locationhere").text("Please click allow location to access");
                alert("Click allow on the geolocation for accessing the code"); 
            };
            navigator.geolocation.getCurrentPosition(usersLocation, geolocationError);
        }
    
        function usersLocation(position){

            latitd= position.coords.latitude;
            lngtud= position.coords.longitude;
            acurcy= position.coords.accuracy;

            $("#locationhere").text("User's current location: ");
            $("#locationhere").append("Latitude is: " +latitd+ " Longitude is: " +lngtud+ "<br>");
            $("#locationhere").append("Accuracy is: " +acurcy);
            checkLocalStorage();
        }
    
        function checkLocalStorage(){
                if(localStorage.getItem("Latitude:"))
                {
                    $("#locationhere").append("<h2>"+"Latitude :"+localStorage.getItem("Latitude:")+" Longitude :"+localStorage.getItem("Longitude:")+"</h2>");
                    $("#locationhere").append("<h2>"+"Welcome back user"+"</h2>");                         
                    let dstnce = calcDistanceBetweenPoints(localStorage.getItem("Latitude:"),localStorage.getItem("Longitude:"),latitd,lngtud);
                    $("#locationhere").append("<p>"+"You have been travelled: "+dstnce+" Meters"+"</p>");
                    $("#locationhere").append("<p>"+"You have been travelled: "+(dstnce/1000)+" Km"+"</p>");
                }
               else
               {
                    $("#locationhere").append("<h2>"+"Welcome new user"+"</h2>");
                    window.localStorage.setItem('Latitude:',latitd);
                    window.localStorage.setItem('Longitude:',lngtud);
                }        

            window.localStorage.setItem('Latitude:',latitd);
            window.localStorage.setItem('Longitude:',lngtud);
        }
        

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


