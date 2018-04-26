$(document).ready(function () {
    $("#EnviarForm").click(function () {
        var nombre = $("#nombre").val();
        var telefono = $("#telefono").val();
        var correo = $("#correo").val();
        var mensaje = $("#mensaje").val();
        if (nombre.length < 1) {
            alert("El nombre es obligatorio");
            return false;
        }
        if (telefono.length < 1) {
            alert("El telefono es obligatorio");
            return false;
        }
        if (correo.length < 1) {
            alert("La correo es obligatorio");
            return false;
        }
        if (mensaje.length < 1) {
            alert("El mensaje es obligatorio");
            return false;
        }
        $.ajax({
            url: 'module/frmcontactenos.php',
            type: 'POST',
            data: {nombre: nombre, telefono: telefono, correo: correo, mensaje: mensaje},
            datatype: 'html',
            beforeSend: function () {
                $("#dialog").dialog({
                    resizable: false,
                    modal: true,
                    autoOpen: true,
                    width: 350,
                    height: 120
                });
                $("#dialog #rpta").html("Enviando...");
            },
            success: function (html) {
                $("#dialog #rpta").html(html);
            }
        });
    });
});
