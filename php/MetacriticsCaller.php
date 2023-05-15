<?php

namespace Metacritic;

include 'APImetacritic.php';

$metacritic_api = new API\MetacriticAPI();

$gamename = $_GET['gamename'];

$metacritic_api->getMetacriticPage($gamename);
$json_reponse = $metacritic_api->getMetacriticScores();

echo $json_reponse;
