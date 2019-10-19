$(document).ready(() => {
    $('.back-to-top>a').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    }); 
});