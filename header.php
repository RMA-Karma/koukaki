<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
            <div class="top-nav">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                 <span class="line line1"></span>
                 <span class="line line2"></span>
                 <span class="line line3"></span>
                </button>
            <a class="site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            </div>
            <ul>
                <img class="logo-nav" src="wp-content/themes/foce-child/logo_menu.png" alt="logo Fleurs d'oranger & chats errants">
                <li class="li-story"><a href="#story">Histoire</a></li>
                <li class="li-characters"><a href="#characters">Personnages</a></li>
                <li class="li-place"><a href="#place">Lieu</a></li>
                <li class="li-studio"><a href="#studio">Studio Koukaki</a></li>
                <p>Studio Koukaki</p>
            </ul>

		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
