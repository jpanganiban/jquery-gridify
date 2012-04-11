jQuery Gridify
==============

Grid-ify your application.

Requirements
------------
You only need jQuery in order for this to work.

Installation
------------
Download the source and include it in your webpage.
    <script type=text/javascript src=/path/to/jquery.gridify.js></script>

Usage
-----

### Basic usage:

    $('#grid').gridify();

Generates a 10x10 grid inside of the selected element. Each tile has a class
of tile (which can be overriden) as well as it's row count and column count.

### Paramters:

* tileClassName: Tile's class. (default is 'tile')
* gridColumns: Grid's column count. (default is 10)
* gridRows: Grid's row count. (default is 10)


    $('#grid').gridify({
      tileClassName: 'tile',
      gridColumns: 10,
      gridRows: 10
    });
