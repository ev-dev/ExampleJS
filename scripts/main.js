// import $ from 'jquery';

$(document).ready(() => {
    $('#query-input').focus(function () {
        $('#text-above-footer').hide();
        $('#bottom-description').hide();
    });

    $('#search-button').click(function () {
        $('#text-above-footer').show();
        $('#bottom-description').show();
    })
});