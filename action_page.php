<?php

/* Get the name of the uploaded file */
$filename = $_FILES['file']['name'];

/* Choose where to save the uploaded file */
$location = "upload/".$filename;

/* Save the uploaded file to the local filesystem */
 if(isset($_POST["submit"]))
{
    echo '<pre>';
    var_dump($_FILES);
    echo '</pre>';
    echo '<br />';

    echo 'C:\\fakepath\\' . $_FILES['myFile']['name'];
}
else { 
  echo 'Failure'; 
}
?>