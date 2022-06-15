 $(document).ready(function() {
            $('input[name="email"]').focusout(function() {
                $(this).siblings('.error').remove();
                var name = $(this).val();
                var regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/;
                var isvalid = regex.test(name);
                if (!isvalid) { //ha hamis
                    $(this).after('<span class="error">Please provide a valid e-mail!</span>'); 
                    $(this).before('<span class="error-circle"></span>');
                    $(this).css('border', 'solid 1px hsl(1, 100%, 69%)');
                } else {
                    $(this).css('border', 'solid 1px hsl(0, 36%, 70%)');
                    $('.error-circle').remove();
                }
            });
 });