/*
    Assignment 05
    {Nidhikumari Vadodariya - 0788964}
*/

$(document).ready(function () {
    // your code here

    class ContentItem {

        unique_ID;
        movie_Name;
        movie_Description;
        category_Genre;
       
       constructor(unique_ID, movie_Name, movie_Description, category_Genre)
       {
            this.unique_ID = unique_ID;
            this.movie_Name = movie_Name;
            this.movie_Description = movie_Description;
            this.category_Genre = category_Genre;
        }
       
       updateContentItem(unique_ID, movie_Name, movie_Description, category_Genre)
       {
            if(this.unique_ID == unique_ID && movie_Name && movie_Description && category_Genre)
            {
                this.unique_ID = unique_ID;
                this.movie_Name = movie_Name;
                this.movie_Description = movie_Description;
                this.category_Genre = category_Genre;
            }
       
        }
               
        toString()
        {
            return $('#content-item-list').append(`<div class="content-item-wrapper">

                <div id="content-item-${this.unique_ID}">
                <h2 class="name">${this.movie_Name}</h2>
                <p class="description">${this.movie_Description}</p>
                <div class="category">${this.category_Genre}</div>
                </div>

            </div>`);
        }
    }
           
    let content = [
        {
            "unique_ID": 0,
            "movie_Name": "Phir hera pheri",
            "movie_Description": "This movie is my favourite comedy movie that I have ever seen!!",
            "category_Genre": "Comedy "
        },
        {
            "unique_ID": 1,
            "movie_Name": "Man in black",
            "movie_Description": "This is a very interesting movie which provides like scientific expierience!!",
            "category_Genre": "Science and Fiction"
        },
        {
            "unique_ID": 2,
            "movie_Name": "Titanic",
            "movie_Description": "World's iconic movie that experienced like real one!!",
            "category_Genre": "Romantic"
        },
        {
            "unique_ID": 3,
            "movie_Name": "Tiger zinda hai",
            "movie_Description": "Action of this movie is actually relates for saving the country!!",
            "category_Genre": "Thriller"
        }
    ];
       
    $.each(content, function(key, val)
    {
        $('#content-item-list').append(`<div class="content-item-wrapper">
            
            <div id="content-item-${this.unique_ID}">
            <h2 class="movie_Name">${this.movie_Name}</h2>
            <p class="movie_Description">${this.movie_Description}</p>
            <div class="category_Genre">${this.category_Genre}</div>
            </div>

        </div>`);
    });
    
        $('.content-item-wrapper').css('border', 'double 5px black');
        
        $('.content-item-wrapper').css('padding', '25px');

        $('.content-item-wrapper').css('width', '75%');

        $('.content-item-wrapper').css('margin', 'auto'); 
        
        $('.content-item-wrapper').css('margin-bottom', '35px');
        
        $('.content-item-wrapper').css('marging-top', '35px');
                
});