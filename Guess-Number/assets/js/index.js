$(document).ready(function(){
    
    let target_num;
    let tedad_shanse;

    $('.btn-start').click(function(){
        let max_num = $('.max-num').val();
        target_num = Math.floor(Math.random() * max_num) +1;
        tedad_shanse = Math.floor(Math.log2(max_num));
        if(max_num<10){
            alert(' عدد وارد شده نباید کمتر از 10 باشد ')
        }else{
            $('.tedad-shans').text(tedad_shanse);
            $('.max_num_txt').text(max_num);

            $('.step1').hide();
            $('.step2').show();
        }
    });

    $('.btn-guess').click(function(){
        let my_guess = $('.guess_number').val();
        $('.guess_number').val('');
        tedad_shanse = tedad_shanse - 1;
        $('.tedad-shans').text(tedad_shanse);
        if(my_guess > target_num){

            let my_span = $('<span class="px-3 text-primary">  </span>');
            my_span.text(my_guess);
            $('.guess_list').prepend(my_span);

        }else if(my_guess < target_num){

            let my_span = $('<span class="px-3 text-danger">  </span>');
            my_span.text(my_guess);
            $('.guess_list').prepend(my_span);

        }else if(my_guess ==  target_num){

            $('.step2').hide();
            $('.win_message').show();

        }

        if(tedad_shanse == 0 && (my_guess !=  target_num)){
            $('.step2').hide();
            $('.lose_message').show();
            let my_span = $('<span class="px-3 text-danger"></span>');
            $('.h2_lose_message').append(target_num);
        }
    });

    $('.btn_reset').click(function(){
        location.reload();
    });
});