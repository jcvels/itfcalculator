exports.calculateITF14 = (barcode, qtty) =>
{
    let factor = 3;
    let sum = 0;
    let responce = 
        {
            notification:null,
            values:[]
        };

    if( barcode.length != 13)
    {
        responce.notification = "El valor de EAN13 ingresado no es valido o esta incompleto";
    }
    else
    {
        for ( version=1; version<=qtty; version++)
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
            responce.values.push( { version:version, code:itf } );
        }
    }

    return responce;
}

exports.validate13 = (barcode) =>
{
    let responce = 
    {
        notification:null,
        values:[]
    };

    if( barcode.length != 13)
    {
        responce.notification = "El valor de EAN13 ingresado no es valido o esta incompleto";
    }

    return responce;
}

exports.validate14 = (barcode) =>
{
    let responce = 
    {
        notification:null,
        values:[]
    };

    if( barcode.length != 14)
    {
        responce.notification = "El valor de ITF14 ingresado no es valido o esta incompleto";
    }

    return responce;
}
