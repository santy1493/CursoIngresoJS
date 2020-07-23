/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     let cantidad=parseInt(document.getElementById("txtIdCantidad").value);
     let marca=document.getElementById("Marca").value;
     let ingresoBruto;

     let precio=cantidad*35;

     if (cantidad==3) {

        if (marca=="ArgentinaLuz") {

            precio=precio*0.85;
        }
        else if (marca=="FelipeLamparas") {

            precio=precio*0.90;
        }
        else {

            precio=precio*0.95;
        }
     }

     else if (cantidad==4) {

        if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") {

            precio=precio*0.75;
        }
        else {

            precio=precio*0.80;
        }
     }

     else if (cantidad==5) {

        if (marca=="ArgentinaLuz") {

            precio=precio*0.60;
        }
        else {

            precio=precio*0.70;
        }
    }
    else if (cantidad>=6) {

        precio=precio*0.50;
    }

    if (precio>120) {

        ingresoBruto=precio*0.10;
        precio=precio+ingresoBruto;

        document.getElementById("txtIdprecioDescuento").value=precio.toFixed(2);

        alert("IIBB Usted pago " +ingresoBruto);
    }
    else {

        document.getElementById("txtIdprecioDescuento").value=precio.toFixed(2);
    }
}
