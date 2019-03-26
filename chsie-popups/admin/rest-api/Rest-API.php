<?php

/**
* Does one thing well.
*
* @since      1.0.0
*
* @package    chsie-popups
* @subpackage chsie-popups/admin/form-data-handler
*/

/**
* Manages data fetching and updating for the admin app.
*
* @package    chsie-popups
* @subpackage chsie-popups/admin/form-data-handler
* @author     Ben Hoverter <ben.hoverter@gmail.com>
*/
class CHSIE_Popups_Admin_Rest_API {

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
  * The data array for admin AJAX functions.
  *
  * @since    1.0.0
  * @access   public
  * @var      array    $ajax_data    The data for admin AJAX functions.
  */
  public $ajax_data;

  /**
  * The nonce for the AJAX call.  Must be available to event_mats_ajax_save().
  *
  * @since    1.0.0
  * @access   public
  * @var      string    $ajax_nonce    The nonce for the AJAX call.
  */
  public $ajax_nonce;

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
  * @param      string    $plugin_title       The name of this plugin.
  * @param      string    $version    The version of this plugin.
  */
  public function __construct( $plugin_title, $version/* , $conn, $query_master_list */ ) {

      $this->plugin_title = $plugin_title;
      $this->version = $version;

  }


    // ***** PRE-CALL METHODS ***** //

    /**
    * Set data to be passed to the frontend.
    *
    * @since    1.0.0
    */
    public function set_cp_data() {

        // Frontend data:
        wp_localize_script(

            $this->plugin_title . '-admin-js',

            'cp_data',

            array(
                'site_url' => site_url(),
            )

        );

        // Add'l calls to wp_localize_script() for add'l data sets go here:

    }


  // ***** REST API ENDPOINT ***** //
  /**
  * Create a REST API endpoint for requesting wp_options->chsie_popups.
  *
  * @since    1.0.0
  */
  public function create_api_get_endpoint() {
    register_rest_route( 'chsie_popups/v1', 'popups', array(
      'methods' => 'GET',
      'callback' => array( $this, 'get_popups' )
    ) );
  }


  /**
  * Handler function called by create_cp_rest_api_endpoint().
  *
  * @since    1.0.0
  */
  public function get_popups() {
    $option = get_option( 'chsie_popups' );

    if( empty( $option ) ) {
      return false;
    }

    return $option;
  }


  /**
  * Create a REST API endpoint for updating wp_options->chsie_popups.
  *
  * @since    1.0.0
  */
  public function create_api_post_endpoint() {
    register_rest_route( 'chsie_popups/v1', 'popups', array(
      'methods' => 'POST',
      'callback' => array( $this, 'update_popups' )
    ) );
  }


  /**
  * Handler function called by create_cp_rest_api_endpoint().
  *
  * @since    1.0.0
  */
  public function update_popups( $request ) {

    $json = $request->get_json_params();

    $updated = update_option( 'chsie_popups', $json );

    if ( $updated ) {
      $new = get_option( 'chsie_popups' );
      return $new;
    }

    return $updated;
  }


}
