<?php
function beautybop_widgets_init () {
    register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', 'beautybop' ),
				'footer'  => __( 'Secondary menu', 'beautybop' ),
			)
		);
}

add_action( 'widgets_init', 'beautybop_widgets_init' );

