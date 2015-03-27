( function() {
    "use strict";

    var pluginPath = $( "#es" ).attr( "src" ).replace( "js/emoji-shortnames.js", "" ),
        insertListener,
        applyTextcomplete,
        emojiStrategy;

    // Detect DOM Insertions
    // From: http://www.backalleycoder.com/2012/04/25/i-want-a-damnodeinserted/
    insertListener = function( e ) {
        if ( e.animationName === "nodeInserted" ) {
            applyTextcomplete( $( e.target ) );
        }
    };
    document.addEventListener("animationstart", insertListener, false);
    document.addEventListener("MSAnimationStart", insertListener, false);
    document.addEventListener("webkitAnimationStart", insertListener, false);

    // Emojione autocomplete
    // From: https://github.com/Ranks/emojione/blob/591e512a30dff5f4f18a6df0e56a9f7eaf840d07/demos/autocomplete.html#L286
    applyTextcomplete = function( $elm ) {
        $elm.textcomplete( [ {
            match: /\B:([\-+\w]*)$/,
            search: function( term, callback ) {
                var results = [],
                    results2 = [],
                    results3 = [],
                    newResults;

                $.each( emojiStrategy, function( shortname,data ) {
                    if ( shortname.indexOf( term ) > -1 ) {
                        results.push( shortname );
                    } else {
                        if ( ( data.aliases !== null ) && ( data.aliases.indexOf( term ) > -1 ) ) {
                            results2.push( shortname );
                        } else if ( ( data.keywords !== null ) && ( data.keywords.indexOf( term ) > -1 ) ) {
                            results3.push( shortname );
                        }
                    }
                } );

                if ( term.length >= 3 ) {
                    results.sort( function( a, b ) {
                        return ( a.length > b.length );
                    } );

                    results2.sort( function( a, b ) {
                        return ( a.length > b.length );
                    } );

                    results3.sort();
                }

                newResults = results.concat( results2 ).concat( results3 );

                callback( newResults );
            },
            template: function( shortname ) {
                return "<img class='emojione' src='" + pluginPath + "vendor/emojione/emojione/assets/png/" + emojiStrategy[ shortname ].unicode + ".png'/> :" + shortname + ":";
            },
            replace: function( shortname ) {
                return ":" + shortname + ": ";
            },
            index: 1,
            maxCount: 10
        } ],
        {
            footer: '<a href="http://www.emoji.codes" target="_blank">Browse All<span class="arrow">&raquo;</span></a>'
        } );

    };

    $.get( pluginPath + "vendor/emojione/emojione/emoji_strategy.json", function( data ) {
        emojiStrategy = data;

        applyTextcomplete( $( ".notice_data-text" ) );
    } );
}() );

