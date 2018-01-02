$(document).ready(function(){
    
    function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

    $("#scrollButton").click(function() {
   scrollToAnchor('scrollPoint');
    });

});