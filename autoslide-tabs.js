var start_tab = 1;
var col_tab = 0;

jQuery('#meet-and-suite .elementor-tabs-wrapper div').on('click', function(){ // get current tab if we click and start new timer from here & for example selector
  var new_col = jQuery(this).attr('data-tab');
  start_tab = new_col;
});
jQuery('#meet-and-suite .elementor-tabs-wrapper div').each(function(){ // we get numbers all tabs & for example selector
  col_tab++;
});

function change_tab () {
  if( start_tab > col_tab){
    start_tab = 1;
  }

jQuery('#meet-and-suite .elementor-tabs-wrapper #elementor-tab-title-131' + start_tab).click(); 
  start_tab++;
}

setInterval(change_tab, 5000);