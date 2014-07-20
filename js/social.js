$(document).ready(function() {
    $('#social-container').one('mouseenter', function() {
        Socialite.load($(this)[0]);
    });
});