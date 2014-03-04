/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
(function ( $, window, document, undefined ) {
    
    //  When DOM is loaded
    $( function ( ) {
        
        /**
         *  Function to detect the id of document by param 
         *
         */ 
        var Url = String( location.href );
        if ( Url.search( /index.html/i ) ) {
            
            Url         = Url.replace( /.*\?(.*?)/, "$1" );
            Variables   = Url.split ( "&" );
            for ( i = 0; i < Variables.length; i++ ) {
                
                Separ   = Variables[ i ].split( "=" );
                if ( Separ[ 1 ] != undefined && Separ[ 1 ] != null ) {
                    
                    eval ( 'var ' + Separ[ 0 ] + '="' + Separ[ 1 ] + '"' );
                }
            }
        }
        
        var err;
        if ( err != undefined && err != null ) {
            
            var expression      = new RegExp( '%20', 'gi' );
            err = err.replace( expression, ' ' );
            var errorMessage    = '<p>' + err + '</p>';
            errorMessage        = errorMessage.replace( /%C3%B3/gi, 'ó' )
            CMVDF.openAlert( 'Error', errorMessage );
        }
        
        if ( $( ".loader" ).exists() ) {
            
            $( '.alert_background' ).fadeOut( 300 );
            $( ".loader" ).fadeOut( 300 );
        }
        
        //  Control del background
        if ( $( '#background' ).exists() ) {
            
            var windowWidth = $( window ).innerWidth();
            $( '#background' ).width( windowWidth );
        }
        if ( $( 'figure' ).exists() ) {
            
            $( 'figure.scene' ).width( $( window ).innerWidth() )
        }
        if ( $( "h1" ).exists() ) {
            
            $( "h1" ).centerWidth();
        }
        if ( $( ".rocket" ).exists() ) {
            
            $( ".rocket" ).centerWidth();
        }
        if ( $( ".session" ).exists() ) {
            
            $( ".session" ).centerWidth();
        }
        if ( $( ".vertical_points" ).exists() ) {
            
            $( ".vertical_points" ).centerWidth();
        }
        if ( $( ".arrow" ).exists() ) {
            
            $( ".arrow" ).centerWidth();
        }
        if ( $( ".hands" ).exists() ) {
            
            $( ".hands" ).centerWidth();
        }
        if ( $( "#DG_Logo" ).exists() ) {
            
            $( "#DG_Logo" ).centerWidth();
        }
        if ( $( "#six .points" ).exists() ) {
            
            var pointOne    = CMVDF.getCenterWidth( $( "#six .points" ).eq( 0 ) ) - 80;
            var pointTwo    = CMVDF.getCenterWidth( $( "#six .points" ).eq( 1 ) ) + 80;
            
            $( "#six .points" ).eq( 0 ).css( { 
                left: pointOne + 'px'
            } );
            $( "#six .points" ).eq( 1 ).css( { 
                left: pointTwo + 'px'
            } );
        }
        if ( $( "h3" ).exists() ) {
            
            $( "h3" ).centerWidth();
        }
        if ( $( "h4" ).exists() ) {
            
            $( "h4" ).centerWidth();
        }
        if ( $( "form" ).exists() ) {
            
            $( "form" ).centerWidth();
        }
    } );
    
    //  When DOM is ready
    $( document ).on( 'ready', function ( e ) {
            
        //  !Crea una instancia de jQuery Overlay
        if ( $( '.alert_box' ).exists() ) {
            
            CMVDF.doOverlay( $( 'a.alert_trigger' ), {
                effect: 'apple',
                close: $( '.alert_box a.close' ),
                closeOnClick: true,
                closeOnEsc: true, 
                speed: 'normal',
                fixed: false,
                onBeforeLoad: function ( e ) {
                    
                    $( '.alert_background' ).height( '100%' );
                    $( '.alert_background' ).width( $( window ).innerWidth() );
                    $( '.alert_box' ).centerWidth();
                    $( '.alert_box' ).centerHeight();
                },
                onLoad: function() {
                    $( '.alert_background' ).fadeIn( 300 );
                },
                onBeforeClose:  function ( ){
                    
                    $( '.alert_box' ).fadeOut( 10, function ( ) {
                        
                        $( '.alert_background' ).fadeOut( 10 );
                        $( '.alert_box h4' ).text( '' );
                        $( '.alert_box p' ).remove( );
                        $( '.alert_box form' ).remove( );
                        $( '.alert_box table' ).remove( );
                        $( '.alert_box div' ).remove( );
                        $( '.alert_box button' ).remove( );
                        $( '.alert_box div.confirm' ).remove( );
                    } );
                },
                onClose: function ( e ) {}
            } );
            
            CMVDF.overlay    = $( '.alert_trigger' ).data( 'overlay' );
            
            $( '.alert_background' ).height( $( 'body' ).height() );
            
            $( window ).on( {
                resize: function ( e ) {
                    
                    $( '.alert_box' ).centerWidth();
                },
                touchstart: function ( e ) {
                    
                    $( '.alert_box' ).centerWidth();
                }, 
                touchend: function ( e ) {
                    
                    $( '.alert_box' ).centerWidth();
                }
            } );
        }
        
        if ( $( 'a.close' ).exists() ) {
            
            $( 'a.close' ).on( 'click', function ( e ) {
                
                CMVDF.closeAlert();
            } );
        }
        
        // Validación de los formularios
        if ( $( 'form' ).exists() ) {
            
            var rules   = { 
                    mail_verifier: {
                        required: true
                    }, 
                    session: {
                        required: true
                    }
                };
            var messages    = {
                    mail_verifier: "Por favor, selecciona una opción", 
                    session: "Por favor, selecciona una opción", 
                    required: "Por favor, selecciona una opción", 
                    minlength: "Por favor, haga su respuesta más amplia.", 
                    maxlength: "Por favor, acorte su respuesta", 
                    email: "Escriba un email válido",
                    number: "Escriba solo números", 
                    digits: "Escriba solo números", 
                }
            
            CMVDF.validateForms( rules, messages );
        }
        
        if ( $( 'figure.scene' ).exists() ) {
            
            /*$( 'figure.scene' ).parallax( {
              calibrateX: false,
              calibrateY: true,
              invertX: false,
              invertY: true,
              limitX: false,
              limitY: 10,
              scalarX: 2,
              scalarY: 8,
              frictionX: 0.2,
              frictionY: 0.8
            } );*/
        }
        
        if ( $( '#background' ).exists() ) {
            
            CMVDF.smoothScroll( $( '.rocket' ), 300 );
            
            $( window ).on( 'scroll', function ( e ) {
                CMVDF.tool = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                
                console.log( CMVDF.tool );
                
                var backgroundHeight    = ( $( '#background' ).height() ) - ( $( window ).innerHeight() ) ;
                
                
                /*if ( CMVDF.tool == 0 ) {
                    $( '.rocket' ).animate( {
                        top:        '-310px', 
                        bottom:     'auto'
                    }, 1000 );
                }*/
                
                if ( CMVDF.tool > 0 && CMVDF.tool < ( backgroundHeight - 1 ) ) {
                    
                    $( '.rocket' ).css( {
                        position:   'fixed'
                    } );
                    $( '.rocket' ).animate( {
                        bottom:     'auto',
                        top:        '50%',
                    }, 1000 );
                }
                
                if ( CMVDF.tool == backgroundHeight ) {
                    
                    $( '.rocket' ).css( {
                        position:   'absolute'
                    } );
                    $( '.rocket' ).animate( {
                        top:        'auto',
                        bottom:     '-155px'
                    }, 1000 );
                }
            } );
        }
    } );
    
})( jQuery, window, document );