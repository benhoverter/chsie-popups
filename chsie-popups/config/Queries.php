<?php

/**
* This class stores the plugin SQL queries. It is not instanced.
*
* NOTE: IMPORTANT! THIS FILE SHOULD BE INCLUDED IN YOUR .gitignore FILE.
*       Do not expose your SQL queries on your repository.
*
* @since      1.0.0
*
* @package    chsie-popups
* @subpackage chsie-popups/config
*/

/**
* This class stores the plugin SQL queries. It is not instanced.
* *
* @since      1.0.0
* @package    chsie-popups
* @subpackage chsie-popups/config
* @author     Your Name <email@example.com>
*/
class CHSIE_Popups_Queries {

    /**
    * This method retrieves the plugin SQL queries. It is called directly.
    *
    * @since    1.0.0
    */
    public static function get_queries() {
        return self::$queries;
    }


    /**
    * The array used to store all queries the plugin can run.
    * Values are examples only.
    *
    * @since    1.0.0
    * @access   private
    * @var      string    $queries    The array used to store all queries the plugin can run.
    *
    */
    public static $queries = array(
        // Queries go here.
    );

}
