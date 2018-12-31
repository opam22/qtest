<?php

function getPrimes($num){

  $result = [];

  for($i = 1; $i < $num; $i++){

          $counter = 0; 
          for($j = 1; $j <= $i; $j++){ 


                if($i % $j==0){ 
                      $counter++;
                }
          }

        if($counter == 2){
               array_push($result, $i);
        }
    }

    print_r($result);
} 

getPrimes(10);

?>