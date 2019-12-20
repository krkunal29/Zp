Dropzone.autoDiscover = false;
$(".dropzone").dropzone({
    // init: function() {
    //     thisDropzone = this;
    //     var link = url + 'getImages.php';
    //     $.get('apis/getImages.php', {
    //         productId: uproductId
    //     }, function(response) {
    //         $.each(response.Data, function(key, value) {

    //             var mockFile = {
    //                 name: value.name,
    //                 size: value.size
    //             };

    //             thisDropzone.options.addedfile.call(thisDropzone, mockFile);

    //             thisDropzone.options.thumbnail.call(thisDropzone, mockFile, "apis/upload/" + value.name);

    //         });

    //     });
    // },
    addRemoveLinks: true,
    removedfile: function(file) {
        var name = file.name;
        $.ajax({
            type: 'POST',
            url: url + 'upload.php',
            data: {
                name: name,
                request: 2
            },
            sucess: function(data) {
                console.log('success: ' + data);
            }
        });
        var _ref;
        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    }
});