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
class CHSIE_Popups_Admin_Form_Data_Handler {

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


  /**
  * Set data to be passed to the admin area.
  *
  * @since    1.0.0
  */
  public function set_popup_form_data() {

    global $wpdb;

    // $wpdb->show_errors();

    $forms = $wpdb->get_results( "
      SELECT id, name
      FROM {$wpdb->prefix}frm_forms
      WHERE status = 'published'
    ",
    OBJECT_K );

    // $wpdb->print_error();
    // $wpdb->hide_errors();

    // Frontend data for data table:
    wp_localize_script(

      $this->plugin_title . '-admin-js',

      'chsieFormData',

      array(
        'forms' => json_encode( $forms ),
      )

    );

    // Add'l calls to wp_localize_script() for add'l data sets go here:

  }


}
