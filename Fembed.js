( function() {
    tinymce.PluginManager.add( 'fembed', function( editor, url ) {

        
        editor.addButton( 'fembed_button_key', {

            text: 'Fembed',
            icon: false,
            onclick: function() {
               
                editor.windowManager.open( {
                    title: 'Embed facebook video',
                    body: [{
                        type: 'textbox',
                        name: 'link',
                        label: 'link'
                    }],
                    onsubmit: function( e ) {
                        
                        console.log(e.data.link);
                        var qlink = e.data.link;
                        if(/^https:\/\/www\.facebook\.com/.test(qlink)===false){
                        alert('Invalid facebook video link');
                        return false;
                        }
                        var clearq_id = /\d+/.exec(qlink);
                        editor.insertContent('<center><iframe src="https://www.facebook.com/video/embed?video_id='+clearq_id+'" width=90% height=400px></iframe></center>' );
                    }

                } );
            }

        } );

    } );

} )();
