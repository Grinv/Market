import $ from 'jquery';
import 'magnific-popup';

$(document).ready(function() {
    $('.agreeTerms').magnificPopup({
        items: {
            type: 'inline',
            src: '#agreeTermsText',
        }
    });

    $('.formSwitchItem').click(function() {
        $('.formSwitchItem').removeClass('selected');
        $(this).addClass('selected');
        var key = $(this).data('key');
        if (key === 'fiz') {
            $('.formContainer').hide();
            $('.registerLink').show();
        } else {
            $('.formContainer').show();
            $('.registerLink').hide();
        }
    });
});
