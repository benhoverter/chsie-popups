<?php

/**
* The WP admin settings functionality of the plugin.
*
* @since      1.0.0
*
* @package    chsie-popups
* @subpackage chsie-popups/admin
*/

/**
* The WP admin settings functionality of the plugin.
*
* Defines the plugin slug, as well as the options page, sections and fields.
*
* @package    chsie-popups
* @subpackage chsie-popups/admin
* @author     Ben Hoverter <ben.hoverter@gmail.com> (modifier)
* @author     Tareq Hasan, WeDevs Settings API creator
*/
class CHSIE_Popups_Settings {

    /**
    * The ID of this plugin.
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $plugin_title    The ID of this plugin.
    */
    private $plugin_title;

    /**
    * The snake_case slug of this plugin.
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $plugin_slug    The snake_case slug of this plugin.
    */
    private $plugin_slug;

    /**
    * The version of this plugin.
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $version    The current version of this plugin.
    */
    private $version;

    /**
    * The object instance of the WeDevs Settings API class.
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $settings_api    The object instance of the WeDevs Settings API class.
    */
    private $settings_api;


    /**
    * Initialize the class and set its properties.
    *
    * @since    1.0.0
    * @param      string    $plugin_title       The name of this plugin.
    * @param      string    $version    The version of this plugin.
    */
    public function __construct( $plugin_title, $version ) {

        $this->plugin_title = $plugin_title;
        $this->plugin_slug = $this->get_plugin_slug( $plugin_title );

        $this->version = $version;


    }


    /**
    * Generate the snake_case slug from the $plugin_title.
    *
    * @since    Custom addition for WeDevs Settings API.
    * @author   Ben Hoverter
    */
    private function get_plugin_slug( $plugin_title ) {

        $plugin_slug = str_replace( array( ' ', '-' ), '_', strtolower( $plugin_title ) );

        return $plugin_slug;
    }


    /**
    * Add a top-level menu item containing all Settings  pages.
    *
    * NOTE: Call this method in define_settings_hooks() if you want the plugin's
    *       settings to show as a top-level menu item, NOT a Settings menu item.
    *
    * Additional menu items can be generated with new calls to add_menu_page().
    * $plugin_title and $plugin_slug are followed by customizable text.
    *
    * @author   Ben Hoverter (modifier)
    */
    public function admin_menu() {
        /**
        * An instance of this class should be passed as the second parameter
        * of the run() function defined in CDD_Loader
        * as all of the hooks are defined in that particular class.
        *
        * The CDD_Loader will then create the relationship
        * between the defined hooks and the functions defined in this
        * class.
        */
        add_menu_page( $this->plugin_title, $this->plugin_title, 'manage_options', $this->plugin_slug . '_settings', array($this, 'chsie_popups_app') );
    }


    /**
    * Callback function to generate HTML elements for Settings Page.
    * Required for add_options_page().
    *
    * Must be duplicated and made unique for add'l Options pages.
    *
    * @since    Custom addition for WeDevs Settings API.
    *
    */
    public function chsie_popups_app() {
        echo '<div class="wrap">';
          echo '<h1>CHSIE Popups</h1>';
          settings_errors();
          echo '<div id="chsie_popups_app"></div>';
        echo '</div>';
    }


    /**
    * Retrieves all pages on the site for use in the Settings API.
    * WP's get_pages() takes parameters to filter pages retrieved.
    *
    * @since    Custom addition for WeDevs Settings API.
    * @return   Array of page names indexed by ID.
    */
    private function get_pages() {
        $pages = get_pages();
        $pages_options = array();
        if ( $pages ) {
            foreach ($pages as $page) {
                $pages_options[$page->ID] = $page->post_title;
            }
        }

        return $pages_options;
    }

}
