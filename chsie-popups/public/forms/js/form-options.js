/**
 * JS for: public/module/views/view-name.php.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    chsie-popups
 * @subpackage chsie-popups/public/module/js
 */

(function( $ ) {
	'use strict';

    $( document ).ready( function() {
        console.log( "form-options.js loaded." );

        const popup = window.chsiePopups.live_popups[0]; // Call differently when restructured.
        const titleText = popup.title;
        const descText = popup.description;

        const $wrapper = $( '.frm_forms' );
        const $form = $wrapper.find( 'form' );

        // Include the popup title and description for this form:
        $form
          .prepend( '<p class="chsie-popups-description"></p>' )
          .prepend( '<h3 class="chsie-popups-title"></h3>' );

        const $title = $form.find( '.chsie-popups-title' );
        $title.html( titleText );

        const $desc = $form.find( '.chsie-popups-description' );
        $desc.html( descText );

        // Add the styling from the options:
        $wrapper.addClass( 'chsie-popups-position-' + popup.position )

        $wrapper.css({
          backgroundColor: popup.backgroundColor,
          border: `${popup.borderWidth} ${popup.borderStyle} ${popup.borderColor}`,
        });

        $title.css({
          color: popup.titleColor,
        });

        $desc.css({
          color: popup.descriptionColor,
        });

        $form.find( 'label, button' ).css({
          color: popup.bodyColor,
        });



    });

})( jQuery );
