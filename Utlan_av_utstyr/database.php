<?php
  // connect to database
  $conn = mysqli_connect('localhost', 'mdt', 'Skole123*', 'utlan');

  // check connection
  if(!$conn){
    echo 'Connection error: ' . mysqli_connect_error();
  }

  // write query for all utlan
  $sql = 'SELECT Pc, Lader, Ruter, Switch FROM it_utstyr';

  // make query & get result
  $result = mysqli_query($conn, $sql);

  // fetch the resulting rows as an array
  $utstyr = mysqli_fetch_all($result, MYSQLI_ASSOC);

  mysqli_free_result($result);

  // close connection
  mysqli_close($conn)

  print_r($utstyr);
 ?>
