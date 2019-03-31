<?php

/**
* Retrieves popup config data and manages data capture when a form is submitted.
*
* @since      1.0.0
*
* @package    chsie-popups
* @subpackage chsie-popups/public/popup-ajax
*/

/**
* Does one thing well.
*
* Here's the description of how it does it.
*
* @package    chsie-popups
* @subpackage chsie-popups/public/popup-ajax
* @author     Ben Hoverter <ben.hoverter@gmail.com>
*/
class CHSIE_Popups_Public_Forms_Ajax {

    /**
    * The ID of this plugin.
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $plugin_title    The ID of this plugin.
    */
    private $plugin_title;

    /**
    * The version of this plugin.
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $version    The current version of this plugin.
    */
    private $version;

    /**
    * The data object for public AJAX functions.
    *
    * @since    1.0.0
    * @access   private
    * @var      associative array    $ajax_data    The data for public AJAX functions.
    */
    private $ajax_data;

    /**
    * The nonce for the AJAX call.  Must be available to public_ajax_callback().
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $ajax_nonce    The nonce for the AJAX call.
    */
    private $ajax_nonce;

    /**
    * The current post ID.  Needed for AJAX (otherwise unavailable).
    *
    * @since    1.0.0
    * @access   public
    * @var      object    $post_id    The current post ID.
    */
    public $post_id;


    /**
    * Initialize the class and set its properties.
    *
    * @since    1.0.0
    * @param      string    $plugin_title       The name of the plugin.
    * @param      string    $version           The version of this plugin.
    */
    public function __construct( $plugin_title, $version ) {

        $this->plugin_title = $plugin_title;
        $this->version = $version;

    }


    // ***** PRE-CALL METHODS ***** //


    /**
    * Render a view before the content.
    * Different hooks will require separate render_{} methods.
    *
    * @since    1.0.0
    */
    // public function render_view_before_content( $content ) {
    //
    //   $view = file_get_contents( plugin_dir_path( __FILE__ ) . 'views/view-name.php' );
    //
    //   return $view . $content;
    //
    // }


    // ***** POST-CALL METHODS ***** //


    /**
    * AJAX callback called on wp_ajax_save_no_show_to_db hook, from popup.
    *
    * @since    1.0.0
    */
    public function save_no_show_to_db() { // For action 'save_no_show_to_db'
      // Initialize the default response:
      $response = array(
        'message' => "chsie_popups_no_show not updated by save_no_show_to_db().",
        'no_show' => [],
      );

      $popup_id = ($_POST['popup_id']) ?? -1 ;

      if ( $popup_id < 0 ) {
        $response['message'] = "save_no_show_to_db did not receive a valid popup ID.";
        echo( json_encode( $response ) ) ;
        wp_die();
      }

      check_ajax_referer( 'chsie_popups_nonce', 'chsie_popups_nonce' ); // OK?

      $user_id = wp_get_current_user()->ID;
      $maybe_array = get_user_meta( $user_id, 'chsie_popups_no_show', true ) ; // Returns empty string on DNE.
      $no_show = !is_string( $maybe_array ) ? $maybe_array : array() ;

      if ( !in_array( $popup_id, $no_show ) ) {
        $no_show[] = $popup_id;

        $response['message'] = update_user_meta( $user_id, 'chsie_popups_no_show', $no_show )
        ? "chsie_popups_no_show updated to include popup #$popup_id."
        : "chsie_popups_no_show not updated by update_user_meta ( save ).";
      }

      $response['no_show'] = get_user_meta( $user_id, 'chsie_popups_no_show', true );

      echo( json_encode( $response ) ) ;
      wp_die();

    }



    /**
    * AJAX callback function to bind to wp_ajax_{action_name} hook.
    *
    * @since    1.0.0
    */
    public function module_ajax_callback() {

        check_ajax_referer( 'abbr_module_ajax_data_nonce', 'ajax_nonce' ); // Dies if false.

        // Call the handler function.
        echo $this->handler_function();

        // Needed to return AJAX:
        wp_die();

    }


    /**
    * Handler function called by module_ajax_callback().
    *
    * @since    1.0.0
    */
    private function handler_function() {

    }


}
