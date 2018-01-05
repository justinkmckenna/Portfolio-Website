/*scroll button*/
$(document).ready(function(){
    
    function scroll_to_anchor(aid){
    var a_tag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: a_tag.offset().top},'slow');
    }

    $("#scroll_button").click(function() {
   scroll_to_anchor('scroll_point');
    });
});