<!DOCTYPE html>
<html lang="es">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/x-icon" href="assets/images/icon.png">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/bootstrap4/bootstrap.min.css">
		
		<link rel="stylesheet" type="text/css" href="assets/styles/responsive.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/prueba/single_styles.css"> <!--IMPORTANTE-->
		<link rel="stylesheet" type="text/css" href="assets/styles/single_responsive.css">
		<link rel="stylesheet" href="assets/styles/prueba/button_cart.css">
		<link rel="stylesheet" href="assets/styles/loader.css">
		<link href="css/DescriptionProduct.css" rel="stylesheet">
		<title>Productos</title>

	</head>

	<body>

		<header>
				<div class="Esplogo">
					<a href="http://127.0.0.1:5500/HTML/Index.html"><img src="imagenes/Logo.png" id="Logo" alt="Logo Principal corporativo"></a>
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
						<li><a href="http://127.0.0.1:5500/HTML/Index.html">Inicio</a></li>
						<li><a href="">Quienes Somos</a></li>
						<li><a href="http://localhost/Products/">Productos</a>
							<ul>
								<br><li id="Titulo1SubMenu"><b>Phone & Smart Wash</b></li><br>
								<li><a href="">Phone</a></li>
								<li><a href="">Accessories</a></li>
								<li><a href="">protection</a></li>
								<li><a href="">SmartWash</a></li>
								<li><a href="">Wireless headphones</a></li>
								<li><a href="">Tablets</a></li>
								<li><a href="">recommended</a></li>  
								<!-- Siguiente columna -->                
								<br><li id="Titulo1SubMenu"><b>Computing</b></li><br>
								<li><a href="http://localhost/Products/">desktop computer</a></li>
								<li><a href="http://localhost/Products/?opcion_submenu=tienda">Accessories</a></li>
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

				<div class="super_container">
					
					<?php

					//include('funciones/funciones_Computing.php');
					//$idProd = isset($_POST['idProd']) ? $_POST['idProd'] : $_GET['idProd'];
					//$resultadoDetalleProduct = detalles_producto_seleccionado($con, $idProd);
					?>




<?php
// Definir el archivo a incluir por defecto
$archivoIncluir = 'funciones/funciones_Computing.php';

// Verificar si se ha enviado una opción_submenu en la URL
if(isset($_GET['opcion_submenu'])) {
    // Obtener la opción_submenu de la URL
    $opcion_submenu = $_GET['opcion_submenu'];

    // Determinar qué archivo incluir dependiendo de la opción_submenu
    switch($opcion_submenu) {
        case 'tienda':
            $archivoIncluir = 'funciones/funciones_tienda.php';
            break;
        // Agregar más casos según sea necesario para otras opciones
        // case 'OtraOpcion':
        //     $archivoIncluir = 'funciones/funciones_OtraOpcion.php';
        //     break;
        default:
            // Si la opción_submenu no coincide con ningún caso, incluir el archivo por defecto
            $archivoIncluir = 'funciones/funciones_Computing.php';
            break;
    }
}

// Imprimir el valor actual de la variable
echo "El valor actual de \$archivoIncluir es: $archivoIncluir";

// Incluir el archivo determinado
include($archivoIncluir);

// Resto del código de detallesArticulo.php
$idProd = isset($_POST['idProd']) ? $_POST['idProd'] : $_GET['idProd'];
$resultadoDetalleProduct = detalles_producto_seleccionado($con, $idProd);
?>






					<div class="container single_product_container">
						<div class="row">
							<?php
							while ($dataProduct = mysqli_fetch_array($resultadoDetalleProduct)) { ?>
								<div class="col-lg-7">
									<div class="single_product_pics">
										<div class="row">
											<div class="col-lg-3 thumbnails_col order-lg-1 order-2">
												<div class="single_product_thumbnails">
													<ul>
														<li class="hoverAnimationProduct">
															<img src="<?php echo $dataProduct["foto2"]; ?>" alt="" data-image="<?php echo $dataProduct["foto2"]; ?>">
														</li>
														<li class="active hoverAnimationProduct">
															<img src="<?php echo $dataProduct["foto1"]; ?>" alt="" data-image="<?php echo $dataProduct["foto1"]; ?>">
														</li>
														<li class="hoverAnimationProduct">
															<img src="<?php echo $dataProduct["foto3"]; ?>" alt="" data-image="<?php echo $dataProduct["foto3"]; ?>">
														</li>
													</ul>
												</div>
											</div>
											<div class="col-lg-9 image_col order-lg-2 order-1">
												<div class="single_product_image">
													<div class="single_product_image_background" style="background-image:url(<?php echo $dataProduct["foto1"]; ?>)"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-5">
									<div class="product_details">
										<div class="product_details_title">
											<h2 id="titleArticulo">
												<a href="index.php">
													<i class="fas fa-angle-left" style="color: #666;"></i>
												</a>
												&nbsp;
												<?php echo $dataProduct['nameProd']; ?>
											</h2>
											<p>
												<?php echo $dataProduct['description_Prod']; ?>
											</p>
										</div>

										<div class="product_price">$<?php echo number_format($dataProduct['precio'], 0, '', '.'); ?> </div>

										<div class="quantity d-flex flex-column flex-sm-row align-items-sm-center">
											<span style="font-size: 18px;">Cantidad:</span>
											<div class="quantity_selector">
												<span class="minus">
												</span>
												<span id="quantity_value" style="font-weight:bold;">1</span>
												<span class="plus">
												</span>
											</div>
											<div class="red_button add_to_cart_button">
												&nbsp;&nbsp;
												&nbsp;&nbsp;
											</div>
											&nbsp;&nbsp;

											<p>
												<button class="button cart-button btn block" onclick="agregarCarrito(this, '<?php echo $dataProduct['prodId']; ?>', '<?php echo $dataProduct['precio']; ?>')">
													<span>Agregar a Carrito</span>
													<div class="cart">
														<svg viewBox="0 0 36 26">
															<polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
															<polyline points="15 13.5 17 15.5 22 10.5"></polyline>
														</svg>
													</div>
												</button>
											</p>

										</div>

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

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
		<script src="script.js"></script> 

	</body>
</html>