import $ from 'jquery';
import 'magnific-popup';

$(document).ready(function() {
    $('.agreeTerms').magnificPopup({
        items: {
            type: 'inline',
            src: '#agreeTermsText',
        }
    });

    $('.openForm').magnificPopup({
        items: {
            type: 'inline',
            src: '#formBox',
        }
    });

    $('img.checkOff').click(function() {
        $(this).hide();
        $('img.checkOn').show();
        $('input.agreeCheck').prop('checked', true);
    })
    $('img.checkOn').click(function() {
        $(this).hide();
        $('img.checkOff').show();
        $('input.agreeCheck').prop('checked', false);
    })

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
