<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/x-icon" href="assets/images/icon.png">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
	<link rel="stylesheet" type="text/css" href="assets/styles/bootstrap4/bootstrap.min.css">

	<link rel="stylesheet" type="text/css" href="assets/styles/prueba/main_styles.css">  <!--IMPORTANTE-->
	<link rel="stylesheet" type="text/css" href="assets/styles/responsive.css">
	<link rel="stylesheet" href="assets/styles/loader.css">
	<link href="css/Style.css" rel="stylesheet">
	<title>Productos</title>
</head>

<body>

<header>
				<div class="Esplogo">
					<a href="Index.html"><img src="imagenes/Logo.png" id="Logo" alt="Logo Principal corporativo"></a>
				</div>

				<div class="Contenedor-mitades">

					<div class="Login">

						<div class="buscador">
						<!-- <textarea id="barrabusqueda" name="miTexto" rows="4" cols="50">                            
							</textarea> --> 
							<input type="text" id="barrabusqueda" name="miTexto" value="Buscar de Productos">
						</div>

						<div class="botones"> 
						
							<a href="../HTML/SignIn.html">
								<button class="custom-btn btn-1">Sign In</button>
							</a>
							
							
							<a href="../HTML/SignUp.html">
								<button class="custom-btn btn-1">Sign Up</button> 
							</a>
							
							
						</div> 

					</div>  
					
					<div class="Menu"></div>

					<ul class="nav">
						<li><a href="Index.html">Inicio</a></li>
						<li><a href="">Quienes Somos</a></li>
						<li><a href="Products.html">Productos</a>
							<ul>
								<br><li id="Titulo1SubMenu"><b>Phone & Smart Wash</b></li><br>
								<li><a href="http://localhost/CarritoCompra/">Phone</a></li>
								<li><a href="">Accessories</a></li>
								<li><a href="">protection</a></li>
								<li><a href="">SmartWash</a></li>
								<li><a href="">Wireless headphones</a></li>
								<li><a href="">Tablets</a></li>
								<li><a href="">recommended</a></li>  
								<!-- Siguiente columna -->                
								<br><li id="Titulo1SubMenu"><b>Computing</b></li><br>
								<li><a href="Computing.html">desktop computer</a></li>
								<li><a href="">Accessories</a></li>
								<li><a href="">protection</a></li>
								<li><a href="">Laptop</a></li>
								<li><a href="">printer</a></li>
								<li><a href="">network elements</a></li>
								<li><a href="">repowering</a></li>
								<!-- Siguiente columna -->
								<br><li id="Titulo1SubMenu"><b>TV, Audio/Video</b></li><br>
								<li><a href="">Smart TV</a></li>
								<li><a href="">Sound equipment</a></li>
								<li><a href="">Projectors</a></li>
								<li><a href="">Microphones</a></li>
								<li><a href="">Cabling</a></li>
								<li><a href="">Converters</a></li>
								<li><a href="">Consoles</a></li>
							</ul>                       
						</li>
						<li><a href="">Convenios</a></li>
						<li><a href="">Ofertas</a></li>
						<li><a href="">Rastreos</a></li>
						<li><a href="">Pedidos</a></li>
						<li><a href="">Ayuda</a></li>
					</ul>

				</div>    

						
			</header>

			<div id="Separator"></div>

		<!-- Cuerpo del sitio web -->

<main>

	<div class="page-loading active">
		<div class="page-loading-inner">
			<div class="page-spinner"></div>
			<span>cargando...</span>
		</div>
	</div>

	<?php
	include('funciones/funciones_tienda.php');	
	?>

	<div class="super_container">
		<div class="container mt-5 pt-5">			

		
			<?php
			$resultadoProductos = getProductData($con);
			?>

			<div class="row align-items-center">
				<?php
				while ($dataProduct = mysqli_fetch_array($resultadoProductos)) { ?>
					<div class="col-6 col-md-3 mt-5 text-center Products">
						<div class="card" style="max-height: 400px !important; min-height: 400px !important;">
							<div>
								<img class="card-img-top" src="<?php echo $dataProduct["foto1"]; ?>" alt="<?php echo $dataProduct['nameProd']; ?>" style="max-width: 200px;">
							</div>
							<div class=" card-body text-center">
								<h5 class="card-title card_title"><?php echo $dataProduct['nameProd']; ?></h5>
								<?php
								$isEven = $dataProduct["prodId"] % 2 == 0;

								for ($i = 1; $i <= 5; $i++) {
									echo '<span><i class="bi bi-star-fill" style="padding: 0px 2px; color:' . ($isEven ? '#ffb90c' : ($i <= 3 ? '#ffb90c' : '')) . ';"></i></span>';
								}
								?>
								<hr>
								<p class="card-text p_puntos ">
									$ <?php echo number_format($dataProduct['precio'], 0, '', '.'); ?>
								</p>
							</div>
							<a href="detallesArticulo.php?idProd=<?php echo $dataProduct["prodId"]; ?>" class="red_button btn_puntos" title="Ver <?php echo $dataProduct['nameProd']; ?>">
								Ver Producto
								<i class="bi bi-arrow-right-circle"></i>
							</a>
						</div>
					</div>

				<?php } ?>
			</div>

		</div>

		
	</div>
	<?php include('includes/js.html'); ?>

</main>

<!-- Pie de pagina del sitio web -->        
		<footer>
            <p id="titleFooter1">FireTronics</p>
            <p id="titleFooter2">Todos los derechos reservados</p>
            <p id="titleFooter3">Politécnico Colombiano Jaime Isaza Cadavid</p>
            <p id="titleFooter4">2024</p>

		</footer>
		<script src="script.js"></script> 

</body>

</html>