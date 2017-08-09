function setHeaderHeightScreenHeight(height){
    var currentHeight=jQuery(window).height();
    if(currentHeight>690){
        jQuery('.header').height(height);
        jQuery('.overlay-layer-wrap').height(height);
    }
    else{
        jQuery('.header').height(690);
        jQuery('.overlay-layer-wrap').height(690);
    }
}

jQuery(document).ready(function(){
    
    setHeaderHeightScreenHeight(jQuery(window).height());
});

jQuery(window).resize(function(){
    setHeaderHeightScreenHeight(jQuery(window).height());
});

