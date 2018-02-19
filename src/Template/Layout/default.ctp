<?php
use Cake\Core\Configure;
?>
<!DOCTYPE html>
<head>
    <?php echo $this->Html->charset(); ?>
  <title>App  | Description </title>
    <?php
    echo $this->Html->meta('icon');
    ?>
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
<div id="app">
  <app></app>
</div>
<?php
// Enables HMR when application is in debug mode
if(Configure::read('debug')) {
    echo $this->Html->script('https://localhost:8028/js/app.js');
}
else {
    echo $this->Html->script('app.js');
}
?>
</body>
</html>
