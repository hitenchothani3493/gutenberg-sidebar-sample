<?php
/*
Plugin Name: Hello Johnny
Plugin URI: 
Description: Johnny will help you through development
Version: 1.0
Author: Johnny Bravo
Author URI: 
*/



/*//Register Hello Johnny Meta Box
function johnny_add_meta_box() {
	add_meta_box( 'johnny_meta_box', 'Hello Johnny', 'johnny_tooglecontrol_metabox_callback', 'post' );
}
add_action( 'add_meta_boxes', 'johnny_add_meta_box' );

function johnny_tooglecontrol_metabox_callback( $post ) {
	$value = get_post_meta( $post->ID, '_johnny_tooglecontrol', true );
	$value = $value ? "checked" : "";
	?>
	<input type="checkbox" name="_johnny_tooglecontrol" id="_johnny_tooglecontrol" value="1" <?php echo $value; ?> />
	<label for="_johnny_tooglecontrol">'Toogle Control this post?'</label>
	<?php
}

//Hello Johnny Metabox Save
function johnny_metabox_save( $post_id ) {

	if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;

	if( isset( $_POST['_johnny_tooglecontrol'] ) )
        update_post_meta( $post_id, '_johnny_tooglecontrol', esc_attr( $_POST['_johnny_tooglecontrol'] ) );
}
add_action( 'save_post', 'johnny_metabox_save' );*/

/**
** Register Script and Styles
** Register meta
**/
function johnny_backend_gutenberg_scripts_register() {
    wp_register_script(
        'johnny-backend-gutenberg-js',
        plugins_url( '/assets/js/dist/index.js', __FILE__ ),
        array( 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-compose' )
    );

    register_meta( 'post', '_johnny_textcontrol', array(
	    'show_in_rest' => true,
	    'auth_callback' => '__return_true',
	    'single' => true,
	    'type' => 'string',
	) );

    register_meta( 'post', '_johnny_tooglecontrol', array(
	    'show_in_rest' => true,
	    'auth_callback' => '__return_true',
	    'single' => true,
	    'type' => 'boolean',
	) );

	wp_register_style(
        'johnny-backend-gutenberg-css',
        plugins_url( '/assets/css/plugin-sidebar.css', __FILE__ )
    );
}
add_action( 'init', 'johnny_backend_gutenberg_scripts_register' );


/**
** Enqueue gutenberg block editor script
**/
function johnny_backend_gutenberg_scripts_enqueue() {
    wp_enqueue_script( 'johnny-backend-gutenberg-js' );
}
add_action( 'enqueue_block_editor_assets', 'johnny_backend_gutenberg_scripts_enqueue' );


/**
** Enqueue gutenberg block style
**/
function johnny_backend_gutenberg_style_enqueue() {
    wp_enqueue_style( 'johnny-backend-gutenberg-css' );
}
add_action( 'enqueue_block_assets', 'johnny_backend_gutenberg_style_enqueue' );



?>