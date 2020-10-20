const barcode = require("barcodejs")
 
exports.svgMakerITF14 = (code) =>
{
    let response = barcode.renderBarcodeToSVG(barcode.encodeCode39( code ), { width: "100%", height: "20mm" });
    return response;
}

exports.calculateITF14 = (barcode) =>
{
    let factor = 3;
    let sum = 0;
    let responce = [];
    let status = null;

    if( barcode.length != 13)
    {
        status = { notification:"El valor de EAN13 ingresado no es valido o esta incompleto" };
    }
    else
    {
        for ( version=1; version<10; version++)
        {
            sum = sum + version * factor;
            factor = 4 - factor;
            
            for ( index=0; index<12; index++)
            {
                sum = sum + barcode.substring(index, index + 1) * factor;
                factor = 4 - factor;
            }
            
            verificador = ((1000 - sum) % 10);
            let itf = version.toString() + barcode.substring(0, 12) + verificador.toString()
            responce.push( { version:version, code:itf } );
        }
    }
    return responce;
}
