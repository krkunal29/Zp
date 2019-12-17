<!doctype html>
<html>
    <head>
        <title>Delete the uploaded file from Dropzone.js - PHP</title>

        <!-- CSS -->
        <link href="style.css" rel="stylesheet" type="text/css">
        <link href="dropzone.css" rel="stylesheet" type="text/css">

        <!-- Script -->
        <script src='jquery-3.2.1.min.js'></script>
        <script src="dropzone.js" type="text/javascript"></script>


    </head>
    <body >
        <div class="container" >
            <div class='content'>
            <form action="#" class="dropzone" id="myAwesomeDropzone">
            </form>
            </div>
        </div>

        <!-- Script -->
        <script type='text/javascript'>
        Dropzone.autoDiscover = false;
        $(".dropzone").dropzone({
            addRemoveLinks: true,
            removedfile: function(file) {
                var name = file.name;

                $.ajax({
                    type: 'POST',
                    url: 'upload.php',
                    data: {name: name,request: 2},
                    sucess: function(data){
                        console.log('success: ' + data);
                    }
                });
                var _ref;
                return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
            }
        });
        </script>
    </body>
</html>
