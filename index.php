<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title></title>
    <link href="./style.css" media="screen" rel="stylesheet" type="text/css"/>
    <link href="./uniform.css" media="screen" rel="stylesheet" type="text/css"/>
     <script type="text/javascript" src="./itf_calc.js"></script>
</head>
<body>
 
<div class="TTWForm-container">

	<div class="TTWForm" >   

		<div class="field f_25">
			<label for="ver">Versión del embalaje</label>
			<select id="ver" required="required">
				<option value="1">Versión 1</option>
				<option value="2">Versión 2</option>
				<option value="3">Versión 3</option>
				<option value="4">Versión 4</option>
				<option value="5">Versión 5</option>
				<option value="6">Versión 6</option>
				<option value="7">Versión 7</option>
				<option value="8">Versión 8</option>
				<option value="9">Versión 9</option>
			</select>
		</div>
	
		<div class="field f_25">
			<label for="ean">EAN13 del producto</label>
			<input type="text" id="ean" required="required" >
		</div>

		<div class="field f_25 clearfix submit">
			<input type="submit" onclick="calcular_itf14();" value="Calcular">
		</div>

		<div class="field f_25 submit result">
			<label id="res"></label>
		</div>
		
	</div>

</div>
 
</body>
</html>