<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/x-icon" href="assets/imagenes/icon.png">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
	<link rel="stylesheet" type="text/css" href="assets/styles/bootstrap4/bootstrap.min.css">

	<link rel="stylesheet" type="text/css" href="assets/styles/prueba/main_styles.css">  <!--IMPORTANTE-->
	<link rel="stylesheet" type="text/css" href="assets/styles/responsive.css">
	<link rel="stylesheet" href="assets/styles/loader.css">
	<link href="css/ProductsIndex.css" rel="stylesheet">
	<link href="css/Style2.css" rel="stylesheet">	
	<title>Productos</title>

	<script>function redireccionar1() {
    window.location.href = 'http://localhost/Products/?opcion_submenu=Laptops#SectionDestino'; }</script>
	<script>function redireccionar2() {
    window.location.href = 'http://localhost/Products/?opcion_submenu=DesktopComputer#SectionDestino'; }</script> 
	<script>function redireccionar3() {
    window.location.href = 'http://localhost/Products/?opcion_submenu=Printers#SectionDestino'; }</script> 
	<script>function redireccionar4() {
    window.location.href = 'http://localhost/Products/?opcion_submenu=DesktopComputer#SectionDestino'; }</script> 
	<script>function redireccionar5() {
    window.location.href = 'http://localhost/Products/?opcion_submenu=Network#SectionDestino'; }</script> 


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

							<a href="http://127.0.0.1:5500/HTML/ShoppingCart.html">
                        <button id="carritoBtn" class="custom-btn btn-2">
                            <i class="bi bi-cart4" style="height: 20px; width: 20px;"></i>
                            <span id="cartItemCount"></span>
                        </button>
                    </a>
							
							
						</div> 

					</div>  
					
					<div class="Menu"></div>

						<ul class="nav">
							<li><a class="menu-link" href="http://127.0.0.1:5500/HTML/Index.html">Inicio</a></li>
							<li><a class="menu-link" href="">Quienes Somos</a></li>
							<li><a class="menu-link" href="">Productos</a>
								<ul>
									<br><li id="Titulo1SubMenu"><h1 class="h1Titulos">Phone & Smart Wash</h1></li><br>
									<li><a href="http://localhost/Products/?opcion_submenu=cellPhone#SectionDestino">Cell Phone</a></li>
									<li><a href="http://localhost/Products/?opcion_submenu=AccesoriesPhone#SectionDestino">Accessories</a></li>
									<li><a href="">protection</a></li>
									<li><a href="http://localhost/Products/?opcion_submenu=SmartWash#SectionDestino">SmartWash</a></li>  
									<li><a href="http://localhost/Products/?opcion_submenu=WirelessHeadphones#SectionDestino">Wireless headphones</a></li>
									<li><a href="http://localhost/Products/?opcion_submenu=Tablets#SectionDestino">Tablets</a></li>
									<li><a href="">recommended</a></li>  
									<!-- Siguiente columna -->                
									<br><li id="Titulo1SubMenu"><a href=""><h1 class="h1Titulos">Computer</h1></li><br></a>
								<!--<li><a href="http://localhost/Products/">desktop computer</a></li>-->
									<li><a href="http://localhost/Products/?opcion_submenu=DesktopComputer#SectionDestino">desktop computer</a></li>
									<li><a href="http://localhost/Products/?opcion_submenu=Accessories#SectionDestino">Accessories</a></li>
									<li><a href="">protection</a></li>
									<li><a href="http://localhost/Products/?opcion_submenu=Laptops#SectionDestino">Laptop</a></li>
									<li><a href="http://localhost/Products/?opcion_submenu=Printers#SectionDestino">Printers</a></li>
									<li><a href="http://localhost/Products/?opcion_submenu=Network#SectionDestino">network elements</a></li>
									<li><a href="">repowering</a></li>
									<!-- Siguiente columna -->
									<br><li id="Titulo1SubMenu"><h1 class="h1Titulos">TV, Audio/Video</h1></li><br>
									<li><a href="">Smart TV</a></li>
									<li><a href="">Sound equipment</a></li>
									<li><a href="">Projectors</a></li>
									<li><a href="">Microphones</a></li>
									<li><a href="">Cabling</a></li>
									<li><a href="">Converters</a></li>
									<li><a href="">Consoles</a></li>
								</ul>                       
							</li>
							<li><a class="menu-link" href="">Convenios</a></li>
							<li><a class="menu-link" href="">Ofertas</a></li>
							<li><a class="menu-link" href="">Rastreos</a></li>
							<li><a class="menu-link" href="">Pedidos</a></li>
							<li><a class="menu-link" href="">Ayuda</a></li>
						</ul>

					</div>    

						
			</header>

			<div id="Separator"></div>

		<!-- Cuerpo del sitio web -->

<main>

<?php
/*
include('funciones/funciones_tienda.php');	
*/
?>


<?php
// Variable para almacenar el nombre del archivo a incluir por defecto
$archivoIncluir = 'funciones/funciones_tienda.php';

// Verificar si se ha enviado un valor de opción desde el submenu
if(isset($_GET['opcion_submenu'])) {
    // Obtener la opción seleccionada del submenu
    $opcion_submenu = $_GET['opcion_submenu'];

    // Cambiar el nombre del archivo a incluir según la opción seleccionada
    switch($opcion_submenu) {
        case 'DesktopComputer':
            $archivoIncluir = 'funciones/funciones_DesktopComputer.php';
            break;
        case 'Printers':
            $archivoIncluir = 'funciones/funciones_Printers.php';
            break;
		case 'Laptops':
			$archivoIncluir = 'funciones/funciones_Laptops.php';
			break;
		case 'SmartWash':
			$archivoIncluir = 'funciones/funciones_SmartWash.php';
			break;
		case 'Tablets':
			$archivoIncluir = 'funciones/funciones_Tablets.php';
			break;
		case 'WirelessHeadphones':
				$archivoIncluir = 'funciones/funciones_WirelessHeadphones.php';
			break;
		case 'AccesoriesPhone':
				$archivoIncluir = 'funciones/funciones_AccesoriesPhone.php';
			break;
		case 'cellPhone':
				$archivoIncluir = 'funciones/funciones_cellPhone.php';
			break;
			case 'Network':
				$archivoIncluir = 'funciones/funciones_Network.php';
			break;


		case 'Accessories':
			$archivoIncluir = 'funciones/funciones_Accessories.php';
			break;			

		
        // Agregar más casos según sea necesario para otras opciones
        default:
            $archivoIncluir = 'funciones/funciones_tienda.php';
            break;
    }
}

// Incluir el archivo correspondiente
include($archivoIncluir);
?>

	<img src="imagenes/Computing.jpg" id="ImgComputing" alt="">

	<div class="page-loading active">
		<div class="page-loading-inner">
			<div class="page-spinner"></div>
			<span>cargando...</span>
		</div>
	</div>


	<!--<div class="ImgCategorias">
		<img src="imagenes/imagen1.png" alt="Imagen 1">
		<img src="imagenes/imagen2.png" alt="Imagen 2">
		<img src="imagenes/imagen3.png" alt="Imagen 3">
		<img src="imagenes/imagen4.png" alt="Imagen 4">
		<img src="imagenes/imagen5.png" alt="Imagen 5">
	</div> -->

	<div class="Imgcontainer">
		
		<div class="images">
			<img src="imagenes/imagen1.png" alt="Imagen 1" alt="Laptops " class="cambiar-cursor" onclick="redireccionar1()">
			<img src="imagenes/imagen2.png" alt="Imagen 2" alt="Image Computer Desktop " class="cambiar-cursor" onclick="redireccionar2()">
			<img src="imagenes/imagen3.png" alt="Imagen 3" alt="Printers " class="cambiar-cursor" onclick="redireccionar3()">
			<img src="imagenes/imagen4.png" alt="Imagen 4" alt="Monitors " class="cambiar-cursor" onclick="redireccionar4()">
			<img src="imagenes/imagen5.png" alt="Imagen 5" alt="Network " class="cambiar-cursor" onclick="redireccionar5()">
		</div>

    <div class="titles">
        <p>Laptops</p>
        <p>desktop computer</p>
        <p>Printers</p>
        <p>Monitors</p>
        <p>Networks</p>
    </div>
</div>

<div id="Separator"></div>

	

	<div class="super_container" id="SectionDestino">
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
							<a href="detallesArticulo.php?idProd=<?php echo $dataProduct["prodId"]; ?>&opcion_submenu=<?php echo isset($_GET['opcion_submenu']) ? $_GET['opcion_submenu'] : 'tienda'; ?>" class="red_button btn_puntos" title="Ver <?php echo $dataProduct['nameProd']; ?>">
								Ver Producto
								<i class="bi bi-arrow-right-circle"></i>
							</a>


								
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
		<script src="../../JavaScript/script.js"></script> 

</body>

</html>