$(document).ready(function() {
    $('#generate-btn').click(function() {
        var text = $('#text-input').val();
        $('#qrcode').empty();
        $('#qrcode').qrcode(text);
    });
});
