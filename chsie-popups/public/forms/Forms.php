<?php

/**
* Handles the display logic for the front-end popups.
*
* @since      1.0.0
*
* @package    chsie-popups
* @subpackage chsie-popups/public/forms
*/

/**
* Does one thing well.
*
* Here's the description of how it does it.
*
* @package    chsie-popups
* @subpackage chsie-popups/public/forms
* @author     Ben Hoverter <ben.hoverter@gmail.com>
*/
class CHSIE_Popups_Public_Forms {

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
  * The version of this plugin.
  *
  * @since    1.0.0
  * @access   private
  * @var      int    $post_id    The ID of the current WP_Post.
  */
  private $post_id;


  /**
  * The saved popups whose 'published' value is true.
  *
  * @since    1.0.0
  * @access   private
  * @var      array    $live_popups    The saved popups whose 'published' value is true.
  */
  private $live_popups;

  /**
  * The array of popup IDs to not show for this user.
  *
  * @since    1.0.0
  * @access   private
  * @var      array    $no_show    The array of popup IDs to not show for this user.
  */
  private $no_show;

  /**
  * The live popups not IDed in $no_show.
  *
  * @since    1.0.0
  * @access   private
  * @var      array    $showable    The live popups not IDed in $no_show.
  */
  private $showable;


  /**
  * Initialize the class and set its properties.
  *
  * @since    1.0.0
  * @param      string    $plugin_title       The name of the plugin.
  * @param      string    $version    The version of this plugin.
  */
  public function __construct( $plugin_title, $version ) {

    $this->plugin_title = $plugin_title;
    $this->version = $version;

  }


  /**
  * Send data to be passed to the frontend.
  *
  * @since    1.0.0
  */
  public function popup_config_to_frontend() {

    $this->set_the_post_id(); // Move this to the wrapper function.
    $this->set_live_popups();
    $this->set_no_show();
    $this->set_showable( $this->live_popups, $this->no_show );


    // Frontend data for data table:
    wp_localize_script(

      $this->plugin_title . '-public-js',

      'chsiePopups',

      array(
        'rulestring' =>         $this->get_rulestring( 'cats', 'dogs' ),
        'post_id' =>            $this->post_id,
        'ajax_url' =>           admin_url( 'admin-ajax.php' ),
        'chsie_popups_nonce' => wp_create_nonce( 'chsie_popups_nonce' ),
        'categories' =>         $this->get_all_categories(),
        'tags' =>               $this->get_all_tags(),
        'post_types' =>         array_values( get_post_types() ),
        // 'live_popups' =>        $this->live_popups, // array
        // 'no_show' =>            $this->no_show,  // array of ids
        'showable' =>           $this->showable,
        'popups' =>             get_option( 'chsie_popups' ), // object keyed by uuid
        'post_categories' =>    $this->get_page_cats( $this->post_id ),
        'post_tags' =>          $this->get_page_tags( $this->post_id ),
        'post_type' =>          get_post_type( $this->post_id ),
      )

    );

    // Add'l calls to wp_localize_script() for add'l data sets go here:

  }


  /**
  * Render popup before the content.
  *
  * @since    1.0.0
  */
  public function render_form_before_content( $content ) {

    $form_sc = do_shortcode( ' [formidable id=2] ' ); // Testing, testing...

    return $form_sc . $content;

  }



  /**
  * Gets all popups whose 'published' property is set to 'true'.
  *
  * @since    1.0.0
  * @return   array   The array of popup objects whose 'published' property is set to 'true'.
  */
  private function set_live_popups() {
    $popups = get_option( 'chsie_popups' );
    $live = array();

    if( empty($popups) ) {
      $this->live_popups = false;
    }

    foreach( $popups as $id => $popup ) {
      if( $popup['published'] ) {
        $live[$id] = $popup;
      }
    }

    $this->live_popups = $live;
  }


  /**
  * Gets all popup IDs in this user's 'chsie_popups_no_show' wp_usermeta entry.
  *
  * @since    1.0.0
  * @return   array   The array of popup IDs stored in the usermeta.
  */
  private function set_no_show() {
    $no_show = get_user_meta( wp_get_current_user()->ID, 'chsie_popups_no_show', true ); //Empty string on DNE.
    // Return an empty array rather than an empty string:
    $this->no_show = is_string( $no_show ) ? array() : $no_show;
  }


  /**
  * Compares live popups with the no-show ID array.
  * Sets the live popups not on the no-show list.
  *
  * @since    1.0.0
  */
  private function set_showable( $live_popups, $no_show ) {
    $showable = array();

    if( !$live_popups ) {
      $this->showable = false;
    }

    foreach( $live_popups as $id => $live ) {
      if( !in_array( $id, $no_show ) ) {
        $showable[$id] = $live;
      }
    }

    $this->showable = $showable;
  }


  /**
  * Handles the rule string creation for later evaluation.
  *
  * @since    1.0.0
  * @param    array   $tax    The array of rules from one taxonomy in one popup.
  * @return   string  The rulestring for that taxonomy,
  *                   to be concat'ed with the others from that popup.
  */
  // private function do_rules() {
  //   $showable = $this->showable;
  //
  //   foreach( $showable as $id => $popup ) {
  //
  //     $rules = $popup['rules'];
  //     foreach( $rules as $taxonomy => $rule_array ) { // [ '|$hrsa', '&!nwhfc' ]
  //
  //       if( !empty( $rule_array ) ) {
  //         $rulestring = $this->get_rulestring( $taxonomy, $rule_array ); // '|| $category === "hrsa" && $category !== "nwhfc" '
  //
  //       }
  //     }
  //   }
  //
  // }


  /**
  * Handles the rule string creation for later evaluation.
  *
  * @since    1.0.0
  * @param    array   $tax    The array of rules from one taxonomy in one popup.
  * @return   string  The rulestring for that taxonomy,
  *                   to be concat'ed with the others from that popup.
  */
  private function get_rulestring( $taxonomy, $rule_array ) {
    $string = '';

    //TESTING:
    $taxonomy = 'postTypes';

    $tax_singular = '';
    switch( $taxonomy ) {
      case 'categories':
        $tax_singular = 'category';
        break;

      case 'tags':
        $tax_singular = 'tag';
        break;

      case 'postTypes':
        $tax_singular = 'post_type';
        break;
    }

    //TESTING:
    $rule_array = $this->showable['4eadd420-9049-4357-943f-cf254ea87ea9']['rules'][$taxonomy];

    // Pattern: '&& $taxonomy === "hrsa"'
    foreach( $rule_array as $rule ) {

      $string .= $rule[0] . $rule[0] . " $$tax_singular "; // Gives '$category' ?
      $string .= ( $rule[1] === '$' ) ? '===' : '!==';
      $string .= " '" . substr( $rule, 2 ) . "' ";

    }

    return $string;
  }




  /**
  * Wrapper method to set $post_id property.
  *
  * @since    1.0.0
  */
  private function set_the_post_id() {
    $this->post_id = get_the_ID();
  }


  /**
  * Get the categories of the current page.
  *
  * @since    1.0.0
  * @param      int       $post_id       The current post ID.
  * @return     mixed     String on success, Bool( false ) on failure.
  */
  public function get_page_cats( $post_id ) {

    // Get a list of categories and extract their names
    $post_categories = get_the_terms( $post_id, 'category' );
    if ( ! empty( $post_categories ) && ! is_wp_error( $post_categories ) ) {
      return wp_list_pluck( $post_categories, 'name' );
    }
    return false;
  }


  /**
  * Get the tags of the current page.
  *
  * @since    1.0.0
  * @param      int       $post_id       The current post ID.
  * @return     mixed     String on success, Bool( false ) on failure.
  */
  public function get_page_tags( $post_id ) {

    // Get a list of tags and extract their names
    $post_tags = get_the_terms( $post_id, 'post_tag' );
    if ( ! empty( $post_tags ) && ! is_wp_error( $post_tags ) ) {
      return wp_list_pluck( $post_tags, 'name' );
    }
    return false;
  }


  /**
  * Get the tags of the current page.
  *
  * @since    1.0.0
  * @param      int       $post_id       The current post ID.
  * @return     mixed     String on success, Bool( false ) on failure.
  */
  public function get_all_categories() {

    // Get a list of tags and extract their names
    $cats = get_categories();
    if ( ! empty( $cats ) && ! is_wp_error( $cats ) ) {
      return wp_list_pluck( $cats, 'name' );
    }
    return false;
  }


  /**
  * Get the tags of the current page.
  *
  * @since    1.0.0
  * @param      int       $post_id       The current post ID.
  * @return     mixed     String on success, Bool( false ) on failure.
  */
  public function get_all_tags() {

    // Get a list of tags and extract their names
    $tags = get_tags();
    if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
      return wp_list_pluck( $tags, 'name' );
    }
    return false;
  }



  /**
  * Do the thing.
  *
  * @since    1.0.0
  * @param      string    $your_param       Param description.
  * @return     string    $return_var       The var this method returns.
  */
  public function method( $your_param ) {

    // Do the thing.

  }


}
