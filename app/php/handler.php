<?php

require 'vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Mailgun\Mailgun;

$dbCredentials = [
    'DEV' => [
        'driver'    => 'mysql',
        'host'      => '127.0.0.1',
        'database'  => 'emerige-saint-denis',
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
    'PROD' => 'emerigeSaintDenis_contacts'
];

$capsule = new Capsule;

$capsule->addConnection($dbCredentials[$_POST['env']]);

$capsule->setAsGlobal();

$params = [];

foreach($_POST as $k => $v){
    if($k !== 'env'){
        if(isset($v) & $v !== null & $v !== ''){
            if(is_array($v)){
                $param = '';
                foreach($v as $item){
                    if ($item === end($v)){
                        $param .= $item;
                    }else{
                        $param .= $item.'|';
                    }
                }
                $params[$k] = $param;
            }else{
                $params[$k] = $v;
            }
        }
    }
}
$params['date_creation'] = date('Y-m-d H:i:s');

$contact = Capsule::table($table[$_POST['env']])->insert($params);

$mg = new Mailgun("key-038d046dc6fb8d994032f8b4b6fa804c");
$domain = "3cent60.biz";

$mailBody = '<p>Bonjour</p>';
$mailBody .= '<p>vous avez reçu une nouvelle demande de contact pour le programme Emerige Saint-Denis 93.<p>';
$mailBody .= '<ul>';
foreach($params as $key => $value){
    $mailBody .= '<li>'.$key.': '.$value.'</li>';
}
$mailBody .= '<ul>';

$mg->sendMessage($domain, array(
    'from'    => 'contact@emerige.com', 
    'to'      => 'formulaire.emerige@marketing-lab.com',
    'cc'      => ['v.reynaud@3cent60.net', 'besnardthomas.job@gmail.com'],
    'subject' => 'Demande de rdv landing page Saint-Denis 93', 
    'html'    => $mailBody
    )
);

$tpl = file_get_contents('email.html');

$civilities = [
    'mme' => 'Madame',
    'mr' => 'Monsieur'
];

$mailTpl = strtr($tpl, array(
    '{civilite}' => ucfirst($civilities[$params['civilite']]),
    '{nom}' => ucfirst($params['nom']),
    '{prenom}' => ucfirst($params['prenom']),
));

$mg->sendMessage($domain, array(
    'from'    => 'contact@emerige.com', 
    'to'      => $params['email'],
    'subject' => 'Demande d’information en avant-première – Saint-Denis 93', 
    'html'    => $mailTpl
    )
);

echo json_encode(array('success' => true, 'contact' => $contact));