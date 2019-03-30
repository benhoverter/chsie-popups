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

    const $closeButton = $('<a href="#0" id="chsie-popups-close-button"></a>');
    const $noShow = $('<div id="chsie-popups-no-show"><label for="chsie-popups-no-show-checkbox">Don\'t show this again:<input id="chsie-popups-no-show-checkbox" type="checkbox" /><span class="checkmark"></span></label></div>');

    const $form = $( '.frm_forms' );
    const $submit = $form.find( 'button.frm_button_submit' );
    const hasError = $form.find( '.frm_error_style' ).length > 0;

    const popupId = window.chsiePopups.popup_id;
    const ajaxUrl = window.chsiePopups.ajax_url;
    const nonce = window.chsiePopups.chsie_popups_nonce;

    $form.prepend( $closeButton ).append( $noShow );

    // If the form loaded displaying errors, then it was submitted, and saveToNoShow() ran.
    // We need to remove the popup ID from chsie_popups_no_show in wp_usermeta:
    if ( hasError ) {
      // deleteFromNoShow( $popupId );
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

    // Save user completion on submit:
    $submit.click( () => {
      saveToNoShow( popupId );
    } );


    function saveToNoShow( popupId ) {
      const body = {
        action: 'save_no_show_to_db',
        popup_id: 11,  // TESTING, should be popupId
        chsie_popups_nonce: nonce,
      }


      $.post( ajaxUrl, body )
      .then(
        res => console.log("Database value updated to", JSON.parse(res) )
      );
    }

    function deleteFromNoShow( popupId ) {
      const body = {
        action: 'delete_from_no_show_in_db',
        popup_id: 11,  // TESTING, should be popupId
        chsie_popups_nonce: nonce,
      }


      $.post( ajaxUrl, body )
      .then(
        res => console.log("Database value updated to", JSON.parse(res) )
      );
    }


  }); // END OF: $( document ).ready( function() {

  })(jQuery);
