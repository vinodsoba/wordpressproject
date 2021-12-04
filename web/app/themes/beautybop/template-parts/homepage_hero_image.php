<?php

?>

<div class="row">
<div class="col-md-12">
    <p>image source goes here</p>
    <?php $image = get_field('image_hero'); ?>
    <img src="<?php echo $image; ?>" width="100%" height="437">

    <h1><?php echo get_field('header_title'); ?></h1>
</div>

</div>


