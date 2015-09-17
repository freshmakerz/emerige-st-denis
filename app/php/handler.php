<?php

require 'vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Mailgun\Mailgun;

$dbCredentials = [
    'DEV' => [
        'driver'    => 'mysql',
        'host'      => '127.0.0.1',
        'database'  => 'emerige-massy',
        'username'  => 'freshmakerz',
        'password'  => '',
        'charset'   => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix'    => '',
    ],
    'PROD' => [
        'driver'    => 'mysql',
        'host'      => 'centbizonqmarket.mysql.db',
        'database'  => 'centbizonqmarket',
        'username'  => 'centbizonqmarket',
        'password'  => 'LandWeb2015',
        'charset'   => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix'    => '',
    ],
];

$table = [
    'DEV' => 'contacts',
    'PROD' => 'emerigeMassy_contacts'
];

$capsule = new Capsule;

$capsule->addConnection($dbCredentials[$_POST['env']]);

$capsule->setAsGlobal();

$params = [];

foreach($_POST as $k => $v){
    if($k !== 'env'){
        if(isset($v) & $v !== null & $v !== ''){
            $params[$k] = $v;
        }
    }
}
$params['date_creation'] = date('Y-m-d H:i:s');

$contact = Capsule::table($table[$_POST['env']])->insert($params);

$mg = new Mailgun("key-038d046dc6fb8d994032f8b4b6fa804c");
$domain = "3cent60.biz";

$mailBody = '<p>Bonjour</p>';
$mailBody .= '<p>vous avez reçu une nouvelle demande de contact pouir le programme Emerige Massy.<p>';
$mailBody .= '<ul>';
foreach($params as $key => $value){
    $mailBody .= '<li>'.$key.': '.$value.'</li>';
}
$mailBody .= '<ul>';

$mg->sendMessage($domain, array(
    'from'    => 'contact@emerige.com', 
    'to'      => 'besnardthomas.job@gmail.com',
    'cc'      => ['v.reynaud@3cent60.net'],
    'subject' => 'Ex Demande de rdv landig page Massy', 
    'html'    => $mailBody
    )
);

echo json_encode(array('success' => true, 'contact' => $contact));