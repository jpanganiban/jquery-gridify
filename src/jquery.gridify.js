(function($) {

$.fn.gridifyOptions = {
  tileClassName: 'tile',
  gridColumns: 10,
  gridRows: 10
}; 

$.fn.gridify = function(options) {

  var options = $.extend($.fn.gridifyOptions, options);

  this.each(function() {
    for(row=0; row<options.gridRows; row++) {
      for(column=0; column<options.gridColumns; column++) {
        $(this).append("<div class='" + options.tileClassName +
          " row-" + row + " column-" + column + "'></div>");
        var $tile = $(".tile.row-" + row + ".column-" + column)
        var width = $tile.innerWidth();
        var height = $tile.innerHeight();
        $tile.css({position: 'absolute',
                   display: 'block',
                   float: 'left',
                   top: row * height,
                   left: column * width});
      }
    }
  });

};

})(jQuery);
