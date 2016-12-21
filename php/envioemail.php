<?php
	
	$captcha = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=6LcpRR8TAAAAAF9yMHG5T-kDrScw3XYnr-SuTykT&response='.$_POST['g-recaptcha-response'].'&remoteip='.$_SERVER['REMOTE_ADDR']),TRUE);
    if($captcha['success']=== TRUE){
        $destino = "dpinfo.es@gmail.com";
		$nombre = $_POST['nombre'];
		$apellidos = $_POST['apellidos'];
		$email = $_POST['email'];
		$mensaje = $_POST['mensaje'];
		$asunto = "Formulario de: " . $email;
	
		$contenido = "Servicio: " . $_POST['servicio'] .
		"\nNombre: " . $nombre . 
		"\nApellidos: " . $apellidos . 
		"\nEmail: " . $email . 
		"\n\n". $mensaje;
		mail($destino,$asunto,$contenido);
    } else {
       header("Location:../error-captcha.html");
       exit();
    }
?>

<script type="text/javascript">
	alert('El formulario se envió correctamente. En breve nos pondremos en contacto con usted.');
	window.location.assign("../contacto.html");
</script>


