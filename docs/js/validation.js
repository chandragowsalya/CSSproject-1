$(document).ready(function() {
    $('#signup-form').validate({
        rules: {
            fname: {
                required: true,
                minlength: 4
            },
            surname: {
                required: true
            },
            mnum: {
                required: true,
                minlength: 10,
                type: "number"
            },
            pass: {
                required: true,
                minlength: 8
            },
            date: {
                required: true
            },
            month: {
                required: true
            },
            year: {
                required: true
            }
        }
    })
});