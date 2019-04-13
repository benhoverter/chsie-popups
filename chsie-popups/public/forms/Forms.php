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
  * The popups to show on the frontend.
  *
  * @since    1.0.0
  * @access   private
  * @var      array    $popups_to_show    The popups to show on the frontend.
  */
  private $popups_to_show;


  /**
  * The categories of the current post.
  *
  * @since    1.0.0
  * @access   private
  * @var      array    $post_categories    The categories of the current post.
  */
  private $post_categories;


  /**
  * The tags of the current post.
  *
  * @since    1.0.0
  * @access   private
  * @var      array    $post_tags    The tags of the current post.
  */
  private $post_tags;


  /**
  * The post type for the current post.
  *
  * @since    1.0.0
  * @access   private
  * @var      string    $post_type    The post type for the current post.
  */
  private $post_type;


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
  public function set_popup_properties() {

    $this->set_the_post_id(); // Move this to the wrapper function.
    $this->set_post_cats();
    $this->set_post_tags();
    $this->post_type = get_post_type( $this->post_id );

    $this->set_live_popups();
    $this->set_no_show();
    $this->set_showable();
    $this->set_popups_to_show();

    // var_dump("set_popup_properties DONE.") ;
  }


  /**
  * Send data to be passed to the frontend.
  *
  * @since    1.0.0
  */
  public function popup_config_to_frontend() {

    $this->set_popup_properties();

    // Frontend data for data table:
    wp_localize_script(

      $this->plugin_title . '-public-js',

      'chsiePopups',

      array(
        'to_show' =>            $this->popups_to_show,
        'post_id' =>            $this->post_id,
        'ajax_url' =>           admin_url( 'admin-ajax.php' ),
        'chsie_popups_nonce' => wp_create_nonce( 'chsie_popups_nonce' ),
        // 'categories' =>         $this->get_all_categories(),
        // 'tags' =>               $this->get_all_tags(),
        // 'post_types' =>         array_values( get_post_types() ),
        // 'live_popups' =>        $this->live_popups, // array
        // 'no_show' =>            $this->no_show,  // array of ids
        // 'showable' =>           $this->showable,
        // 'popups' =>             get_option( 'chsie_popups' ), // object keyed by uuid
        'post_categories' =>    $this->post_categories,
        'post_tags' =>          $this->post_tags,
        'post_type' =>          $this->post_type, // get_rulestring() uses taxonomy arrays--force before input.
      )

    );

    // var_dump("popup_config_to_frontend DONE.") ;

  }


  /**
  * Render popup before the content.
  *
  * @since    1.0.0
  */
  public function render_form_before_content( $content ) {

    // $this->set_popup_properties();
    $to_show = $this->popups_to_show;

    if( empty( $to_show ) ) {
      // return "To_show not set." . $content; // FOR ERROR.
      return $content;
    }

    // Only show the first popup in $to_show:
    $form_id = $to_show[array_keys($to_show)[0]]['formId'];

    $shortcode = do_shortcode( ' [formidable id=' . $form_id . '] ' );

    return $shortcode . $content;

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
    $this->no_show = (array)$no_show;
  }


  /**
  * Compares live popups with the no-show ID array.
  * Sets the live popups not on the no-show list.
  *
  * @since    1.0.0
  */
  private function set_showable() {
    $live_popups = $this->live_popups;
    $no_show = $this->no_show;
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
  private function set_popups_to_show() {
    $showable = $this->showable;
    $to_show = array(); // The final array of popups.

    // var_dump( $showable );
    foreach( $showable as $id => $popup ) {

      $rules = $popup['rules'];
      // var_dump( $rules );

      foreach( $rules as $taxonomy => $rule_array ) { // 'categories' => [ '|$hrsa', '&!nwhfc' ]
        // var_dump( $rule_array );

        if( !empty( $rule_array ) ) {
          $rulestring = $this->get_rulestring( $taxonomy, $rule_array );
          // var_dump( $rulestring );

          $conditional .= $rulestring;
        }
      }

      // Add $popup to $to_show if it passes the conditional:
      $conditional = substr( $conditional, 3 ); // Trim the initial || operator.

      $conditional = 'return ' . $conditional .';';

      // Get the arrays to be assessed in the conditional:
      $categories = $this->post_categories;
      $tags = $this->post_tags;
      $post_type = array( $this->post_type );

      // var_dump( $categories );
      // Evaluate the conditional for this popup:
      try {

        if( eval( $conditional ) ) {
          $to_show[$id] = $popup;
        }

      } catch ( Throwable $t ) {
        $to_show[] = $t;
      }

      // var_dump( $conditional );
      // var_dump( eval( $conditional ) );
      // var_dump( $to_show );
      // $to_show[] = $conditional; // Just to check the conditional string!
    }

    $this->popups_to_show = $to_show;
  }


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

    // post_type needs to be an array(1).
    $tax_singular = ( $taxonomy === 'postTypes' ) ? 'post_type' : $taxonomy;

    foreach( $rule_array as $rule ) {

      // $string .= $rule[0] . $rule[0] . " $$tax_singular "; // Gives '$category' ?
      // $string .= ( $rule[1] === '$' ) ? '===' : '!==';
      // $string .= " '" . substr( $rule, 2 ) . "' ";

      //NEW hotness:
      // "|| in_array( 'test2', $categories ) && !in_array( 'test1', $categories ) "
      $string .= $rule[0] . $rule[0] . ' ';
      $string .= $rule[1] === '!' ? '!' : '';
      $string .= "in_array( '" . substr( $rule, 2 ) . "', $" . $tax_singular . " ) ";

      // $string .= 'in_array( \'' . substr( $rule, 2 ) . '\', \$' . $tax_singular . ' ) ';
    }

    // TESTING:
    // print_r( $string ); //TODO: TESTING!

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
  public function set_post_cats() {

    // Get a list of categories and extract their names
    $post_categories = get_the_terms( $this->post_id, 'category' );

    if ( !empty( $post_categories ) && !is_wp_error( $post_categories ) ) {
      $this->post_categories = wp_list_pluck( $post_categories, 'name' );

    } else {
      $this->post_categories = array(
        'error' => 'set_post_cats ERROR',
      );
    }
  }


  /**
  * Get the tags of the current page.
  *
  * @since    1.0.0
  * @param      int       $post_id       The current post ID.
  * @return     mixed     String on success, Bool( false ) on failure.
  */
  public function set_post_tags() {

    // Get a list of tags and extract their names
    $post_tags = get_the_terms( $this->post_id, 'post_tag' );
    if ( ! empty( $post_tags ) && ! is_wp_error( $post_tags ) ) {
      $this->post_tags = wp_list_pluck( $post_tags, 'name' );
    } else {
      $this->post_tags = 'set_post_tags ERROR';
    }
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
