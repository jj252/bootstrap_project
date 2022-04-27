$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("i").hasClass("fa fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
    } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause"); 
    }
});

    $("#aboutme").mouseover(function(){
        if ($("#about").children("img").has("src")) {
            $('#homeCarousel').carousel(1);
            $("#about_img").attr('src', 'img/react-lake2.jpg'); 

            $("#edu_img").attr('src', 'img/react-lake3.jpg'); 
            $("#edu_div h3").html("About Me");
            //$("#edu_link h3").html("About Me");
            
            $("#web_img").attr('src', 'img/react-lake4.jpg');
            $("#web_div h3").html("About Me");
            
            $(".carousel").carousel("cycle");
       } else {
            console.log('It worked');
        }
    });
    $("#aboutme").mouseout(function(){
        if ($("#about").children("img").has("src")) {
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#edu_div h3").html("Education");
            
            $("#web_div h3").html("Website Projects");
            $(".carousel").carousel("cycle");
        } else {
            console.log('It worked');
        }
    });
    
    $("#education").mouseover(function(){
        if ($("#edu").children("img").has("src")) {
            $('#homeCarousel').carousel(2);
            $("#about_img").attr('src', 'img/chrome-river2.jpg');
            $("#about_div h3").html("Education");
            
            $("#web_img").attr('src', 'img/chrome-river3.jpg');
            $("#web_div h3").html("Education");
              
            $(".carousel").carousel("cycle");
        } else {
            console.log('It worked');
        }
    });
    $("#education").mouseout(function(){
        if ($("#about").children("img").has("src")) {
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");

            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");
           
            $(".carousel").carousel("cycle");
        } else {
            console.log('It worked');
        }
    });
    $("#projects").mouseover(function(){
            $('#homeCarousel').carousel(3);
            $("#about_img").attr('src', 'img/breadcrumb-trail2.jpg');
            $("#about_div h3").html("Website Projects");
            
            $("#edu_img").attr('src', 'img/breadcrumb-trail3.jpg');
            $("#edu_div h3").html("Website Projects");
            
            $(".carousel").carousel("cycle");
    });
    $("#projects").mouseout(function(){
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");

            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");

            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");
            
            $(".carousel").carousel("cycle");
    });
});
$("#aboutme").click(function(){
        if ($("#edu_section").css("display", "block") || $("#pro_section").css("display", "block")) {
            $("#pro_section").css("display", "none");
            $("#edu_section").css("display", "none");
            $("#about_section").css("display", "block");
        } 
        
});
$("#education").click(function(){
        if ($("#about_section").css("display", "block") || $("#pro_section").css("display", "block")) {
            $("#about_section").css("display", "none");
            $("#pro_section").css("display", "none");
            $("#edu_section").css("display", "block");
        }  
});
$("#projects").click(function(){
        if ($("#about_section").css("display", "block") || $("#edu_section").css("display", "block")) {
            $("#about_section").css("display", "none");
            $("#edu_section").css("display", "none");
            $("#pro_section").css("display", "block");
        } 
        
});
$("#course_link").mouseover(function(){
    
            $("#course_link").attr('class', 'bg-warning');

            $("#edu2").attr('class', 'carousel-item');
            $("#edu3").attr('class', 'carousel-item');
        
            $("#about_img").attr('src', 'img/course3.jpg');
            $("#about_div h3").html("Nucamp Course");
            
            $("#web_img").attr('src', 'img/course4.jpg');
            $("#web_div h3").html("Nucamp Course");
            
            $("#edu_img").attr('src', 'img/course5.jpg');
            $("#edu_div h3").html("Nucamp Course");
          
});
$("#course_link").mouseout(function(){
            $("#course_link").attr('class', '');
            $("#edu2").attr('class', 'carousel-item2 d-none to_back');
            $("#edu3").attr('class', 'carousel-item2 d-none to_back');
            
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");
            
            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");
            $('#homeCarousel').carousel(1);
            
});
$("#course_link2").mouseover(function(){
            $("#course_link2").attr('class', 'bg-warning');
            $("#about_img").attr('src', 'img/cis.jpg');
            $("#about_div h3").html("Course Topic");

            $("#edu_img").attr('src', 'img/compfor.jpg');
            $("#edu_div h3").html("Course Topic");

            $("#web_img").attr('src', 'img/cyber.jpg');
            $("#web_div h3").html("Course Topic");
          
            $(".carousel").carousel("cycle");
});
$("#course_link2").mouseout(function(){
            $("#course_link2").attr('class', '');
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");

            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");
            
});
$("#course_link3").mouseover(function(){
            $("#course_link3").attr('class', 'bg-warning');
            $("#about_img").attr('src', 'img/ccent.jpg');
            $("#about_div h3").html("Certification");

            $("#edu_img").attr('src', 'img/ccna.jpg');
            $("#edu_div h3").html("Certification");
          
            $(".carousel").carousel("cycle");
});
$("#course_link3").mouseout(function(){
            $("#course_link3").attr('class', '');
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");
            
});

$("#about_skills").mouseover(function(){
            $("#about_img").attr('src', 'img/about12.jpg');
            $("#about_div h3").html("");

            $("#edu_img").attr('src', 'img/about13.jpg');
            $("#edu_div h3").html("");

            $("#web_img").attr('src', 'img/about14.jpg');
            $("#web_div h3").html("");
    $('#inner').append('<div id="s1" class="carousel-item"><img class="d-block w-100" src="img/about2.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s2" class="carousel-item"><img class="d-block w-100" src="img/about3.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s3" class="carousel-item"><img class="d-block w-100" src="img/about4.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s4" class="carousel-item"><img class="d-block w-100" src="img/about5.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s5" class="carousel-item"><img class="d-block w-100" src="img/about6.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s6" class="carousel-item"><img class="d-block w-100" src="img/about7.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s7" class="carousel-item"><img class="d-block w-100" src="img/about8.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s8" class="carousel-item"><img class="d-block w-100" src="img/about9.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s9" class="carousel-item"><img class="d-block w-100" src="img/about10.jpg" alt="Chrome River Campground" /></div>');
    $('#inner').append('<div id="s10" class="carousel-item"><img class="d-block w-100" src="img/about11.jpg" alt="Chrome River Campground" /></div>');
});

$("#about_skills").mouseout(function(){
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");

            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");

    //const edu_link = document.getElementById("edu2");
    //console.log(edu_link);
    
    /*elem1 = document.getElementById('s1');
    elem2 = document.getElementById('s2');
    elem3 = document.getElementById('s3');
    elem4 = document.getElementById('s4');
    elem5 = document.getElementById('s5');
    elem6 = document.getElementById('s6');
    elem7 = document.getElementById('s7');
    elem8 = document.getElementById('s8');
    elem9 = document.getElementById('s9');
    elem10 = document.getElementById('s10');
    elem.parentNode.removeChild(elem);
    //var i = 1;
    //var elem = document.getElementById("s1");*/
    $("#web").attr('class', 'carousel-item active');
    for (i = 1; i < 10; i++){
        elem = document.getElementById(`s${i}`);
        elem.parentNode.removeChild(elem);
    }
    

    
        
    

    
    
            
            
  
    
       
    
    
});