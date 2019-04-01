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

    const toShow = window.chsiePopups.to_show;
    // console.log("toShow:", toShow);

    if( Object.keys(toShow).length ) {

      const popupId = Object.keys(toShow)[0]; // Only show the first popup.
      // console.log("popupId is", popupId);

      const popup = toShow[popupId];
      // console.log("popup is", popup);

      const wrapperId = `#frm_form_${popup.formId}_container`;
      // console.log( "wrapperId is ", wrapperId );



      const $wrapper = $( wrapperId ).addClass( 'chsie-popups-form' );
      const $form = $wrapper.find( 'form' );

      // Include the popup title and description for this form:
      $form
        .prepend( '<p class="chsie-popups-description"></p>' )
        .prepend( '<h3 class="chsie-popups-title"></h3>' );

      const $title = $form.find( '.chsie-popups-title' );
      $title.html( popup.title );

      const $desc = $form.find( '.chsie-popups-description' );
      $desc.html( popup.description );

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

      $form.find( 'label' ).css({
        color: popup.bodyColor,
      });

    }

  });

})( jQuery );
