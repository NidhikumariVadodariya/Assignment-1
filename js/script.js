$(function () {
    $('#photo-viewer').show().on('click', '.photo-box', function x(e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here

        var modals = $("#imageModal");
       
       var modalImg = $("#img");
        $('.photo-box').on('click',  function(e){
            $(modals).show()
            $(modalImg).attr('src', $('.active').children('.Img').map(function () {
                return $(this).attr('src')
                }).get());
        })
        
        var span = $(".close");
        
        span.on('click', function(e) { 
            e.preventDefault();
            $(modals).hide();
        })

    });
});
