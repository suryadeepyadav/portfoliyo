$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });


    $('#download-cv').on('click', function(e) {
      console.log("download click")
      e.preventDefault(); 
      var cvUrl = './images/Suryadeep Y resume Recent.pdf';
      var link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Suryadeep_Yadav_CV.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
  
  });