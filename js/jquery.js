//Buttons

$(function () {

    $('#seeresum1').click(function () {
        $('#resum').slideDown();
    });
    $('#close').click(function () {
        $('#resum').slideUp();
    });

});
$(function () {

    $('#seeresum2').click(function () {
        $('#resum').slideDown();
    });
    $('#close').click(function () {
        $('#resum').slideUp();
    });

});

$(function () {

    $('#hire-me1').click(function () {
        $('#request').slideDown();
    });
    $('#close-request').click(function () {
        $('#request').slideUp();
    });

});
$(function () {

    $('#hire-me2').click(function () {
        $('#request').slideDown();
    });
    $('#close-request').click(function () {
        $('#request').slideUp();
    });

});

$(function () {

    $('#hire-me3').click(function () {
        $('#request').slideDown();
    });
    $('#close-request').click(function () {
        $('#request').slideUp();
    });

});

$(function () {

    $('#hire-me4').click(function () {
        $('#request').slideDown();
    });
    $('#close-request').click(function () {

        $('#request').slideUp();
    });

});


//work filter

$(function(){

    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat=='all'){
            $("[data-cat]").removeClass("hide");
        } else {
            
        

        $("[data-cat]").each(function(){
            let workCat = $(this).data('cat');
            
            if(workCat !=cat){
                $(this).addClass('hide')
            } else{
                $(this).removeClass('hide')
            }
        });
        }
    });

});