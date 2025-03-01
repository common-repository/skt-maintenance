jQuery(document).ready(function($) {
	jQuery('.header_logo_upload').click(function(e) {
        e.preventDefault();

        var custom_uploader = wp.media({
            title: 'Custom Image',
            button: {
                text: 'Upload Image'
            },
            multiple: false  // Set this to true to allow multiple files to be selected
        })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
           jQuery('.header_logo').attr('src', attachment.url);
           jQuery('.header_logo_url').val(attachment.url);

        })
        .open();
    });
});

jQuery(document).ready(function($) {
	jQuery('.header_back_upload').click(function(e) {
        e.preventDefault();

        var custom_uploader = wp.media({
            title: 'Custom Image',
            button: {
                text: 'Upload Image'
            },
            multiple: false  // Set this to true to allow multiple files to be selected
        })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
           jQuery('.header_back').attr('src', attachment.url);
           jQuery('.header_back_url').val(attachment.url);

        })
        .open();
    });
});