
<script>
	yepnope([{
	    load: [], //fichier qu'on va loader dans tous les cas
	        callback: function (url, result, key) {}
	    },{

	    test: Modernizr.touch,
	    yep: ['http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js','<?php echo $url ?>js/libs-touch.js', 'js/main-touch.js'], // touch on load jquery 2
	    nope: ['http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js','<?php echo $url ?>js/libs.js', 'js/main.js'],
	        callback: function (url, result, key) {}      
	}]);
</script>
