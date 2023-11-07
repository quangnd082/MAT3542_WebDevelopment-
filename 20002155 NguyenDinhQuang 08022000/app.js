//MSSV: 20002155
//Birtday: 08/02/2000
$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        var name = $('.auto-info input[name="name"]').val();
        var image = $('.auto-info input[name="image"]').val();
        var brand = $('.auto-info select[name="brand"]').val();
        var price = $('.auto-info input[name="price"]').val();
        var desc = $('.auto-info input[name="description"]').val();
        var userName = $('.auto-info input[name="user_name"]').val();
        var userPhone = $('.auto-info input[name="user_phone"]').val();
        var userEmail = $('.auto-info input[name="user_email"]').val();

        //Validate Email
        if(userEmail.indexOf('edu.vn') < 1){
            $('.error-email').text('Email của bạn phải bao gồm "edu.vn"');
            return;
        }

        //Validate Phone
        function containsOnlyNumbers(str) {
            return /^[0-9 ()+-]+$/.test(str);   
        }

        if ($.trim(userPhone) !="" && !containsOnlyNumbers(userPhone)) {
            $('.error-phone').text('Số điện thoại của bạn không được chưa kí tự chữ cái');
            return;
        }else if(userPhone.indexOf('08') < 2){
            $('.error-phone').text('Số điện thoại phải có 2 lần trùng ngày sinh của bạn');
            return;
        }

        //Validated
        var count = $('.auto-table tbody tr').length;

        $('.auto-table tbody').append(`
            <tr>
                <td>${count+1}</td>
                <td>${name}</td>
                <td>
                    <image src=${image} style="width: 80px;" />
                </td>
                <td>
                    ${brand}
                </td>
                <td>${price}</td>
                <td>${userName}</td>
                <td>${userPhone}</td>
                <td>${userEmail}</td>
            </tr>
        `);
    });

    $('#delete').on('click', function(){
        if(confirm('Do you want to remove?')){
            $('form input').each(function(){
                $(this).val("");
            })
        }
    });
});