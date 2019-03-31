/**
* JS for: public/module-ajax/views/view-name.php.
*
* @link       http://example.com
* @since      1.0.0
*
* @package    chsie-popups
* @subpackage chsie-popups/public/module-ajax/js
*/
( function($) {

  'use strict';

  $( document ).ready( function() {

    console.log( "forms-ajax.js loaded." );

    const $closeButton = $('<a href="#" id="chsie-popups-close-button"></a>');
    const $noShow = $('<div id="chsie-popups-no-show"><label for="chsie-popups-no-show-checkbox">Don\'t show this again:<input id="chsie-popups-no-show-checkbox" type="checkbox" /><span class="checkmark"></span></label></div>');

    const $form = $( '.frm_forms' );
    const $submit = $form.find( 'button.frm_button_submit' );
    const hasError = $form.find( '.frm_error_style' ).length > 0;
    const submitDone = $form.find( '.frm_message' ).length > 0;

    const popupId = window.chsiePopups.popup_id;
    const ajaxUrl = window.chsiePopups.ajax_url;
    const nonce = window.chsiePopups.chsie_popups_nonce;

    if ( !submitDone ) {
      $form.prepend( $closeButton ).append( $noShow );
    } else {
      $form.prepend( $closeButton );
    }

    if ( !hasError && submitDone ) {
      console.log("Form success detected.  Saving popup ID to chsie_popups_no_show.");
      saveToNoShow( popupId );
    }

    // Close the popup on click, and save user preferences if checked:
    $closeButton.click( () => {
      const checked = $noShow.find('input').is(':checked')
      if ( checked ) {
        console.log("Box was checked.");
        saveToNoShow( popupId );
      }

      $form.remove()
    } );


    function saveToNoShow( popupId ) {
      const body = {
        action: 'save_no_show_to_db',
        popup_id: 111,  // TESTING, should be popupId
        chsie_popups_nonce: nonce,
      }

      $.post( ajaxUrl, body )
      .then(
        res => console.log("saveToNoShow received response:", JSON.parse(res) )
      );
    }

  }); // END OF: $( document ).ready( function() {

  })(jQuery);
