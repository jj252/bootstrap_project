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
            $("#head_clink").attr('class', 'blink_me');

            $("#about_img").attr('src', 'img/course1.jpg');
            $("#about_div h3").html("Nucamp Course");
            
            $("#web_img").attr('src', 'img/course2.jpg');
            $("#web_div h3").html("Nucamp Course");
            
            $("#edu_img").attr('src', 'img/course3.jpg');
            $("#edu_div h3").html("Nucamp Course");
            
            $('#inner').append('<div id="s1" class="carousel-item"><img class="d-block w-100" src="img/course4.jpg" alt="Chrome River Campground" /><div class="carousel-caption new_cap"><h3>Nucamp Course</h3></div></div>');
            $('#inner').append('<div id="s2" class="carousel-item"><img class="d-block w-100" src="img/course5.jpg" alt="Chrome River Campground" /><div class="carousel-caption new_cap"><h3>Nucamp Course</h3></div></div>');
            $(".carousel").carousel("cycle");
    
          
});
$("#course_link").mouseout(function(){
            $("#course_link").attr('class', '');
            $("#head_clink").attr('class', '');
            $(".carousel").carousel("pause");
            
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");
            
            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");
            $('#homeCarousel').carousel(0);
            $("#web").attr('class', 'carousel-item active');
            $(".carousel").carousel("cycle");
            //$('#homeCarousel').carousel(1);
            
            
            for (i = 1; i <= 2; i++){
                elem = document.getElementById(`s${i}`);
                elem.parentNode.removeChild(elem);
            }
            $(".carousel").carousel("cycle");
            
});
$("#course_link2").mouseover(function(){
            $("#course_link2").attr('class', 'bg-warning');
            $("#head_clink2").attr('class', 'blink_me');

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
            $("#head_clink2").attr('class', '');
            $(".carousel").carousel("pause");
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");

            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");
            //$("#web").attr('class', 'carousel-item active');
            $('#homeCarousel').carousel(0);
            $("#web").attr('class', 'carousel-item active');
            $(".carousel").carousel("cycle");           
});
$("#course_link3").mouseover(function(){
            $("#course_link3").attr('class', 'bg-warning');
            $("#head_clink3").attr('class', 'blink_me');
            $("#about_img").attr('src', 'img/ccent.jpg');
            $("#about_div h3").html("Certification");

            $("#edu_img").attr('src', 'img/ccna.jpg');
            $("#edu_div h3").html("Certification");
          
            $(".carousel").carousel("cycle");
});
$("#course_link3").mouseout(function(){
            $("#course_link3").attr('class', '');
            $("#head_clink3").attr('class', '');
            $(".carousel").carousel("pause");
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");
            //$("#web").attr('class', 'carousel-item active');
            $('#homeCarousel').carousel(0);
            $("#web").attr('class', 'carousel-item active');
            $(".carousel").carousel("cycle");
            
});

$("#about_skills").mouseover(function(){
            $("#about_skills").attr('class', 'd-flex mr-3 img-thumbnail thumb_border');
            $("#about_jj").attr('class', 'text-white blink_me');
            $("#about_img").attr('src', 'img/about12.jpg');
            $("#about_div h3").html("Skill");

            $("#edu_img").attr('src', 'img/about13.jpg');
            $("#edu_div h3").html("Skill");

            $("#web_img").attr('src', 'img/about14.jpg');
            $("#web_div h3").html("Skill");
            $('#inner').append('<div id="s1" class="carousel-item"><img class="d-block w-100" src="img/about2.jpg" alt="Actionscript3" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s2" class="carousel-item"><img class="d-block w-100" src="img/about3.jpg" alt="Html5" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s3" class="carousel-item"><img class="d-block w-100" src="img/about4.jpg" alt="Premiere" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s4" class="carousel-item"><img class="d-block w-100" src="img/about5.jpg" alt="Photoshop" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s5" class="carousel-item"><img class="d-block w-100" src="img/about6.jpg" alt="Flash" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s6" class="carousel-item"><img class="d-block w-100" src="img/about7.jpg" alt="VMworkstation" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s7" class="carousel-item"><img class="d-block w-100" src="img/about8.jpg" alt="Total Video Converter" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s8" class="carousel-item"><img class="d-block w-100" src="img/about9.jpg" alt="Adobe Audition" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s9" class="carousel-item"><img class="d-block w-100" src="img/about10.jpg" alt="Animationshop" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $('#inner').append('<div id="s10" class="carousel-item"><img class="d-block w-100" src="img/about11.jpg" alt="Docker Desktop" /><div class="carousel-caption new_cap"><h3>Skill</h3></div></div>');
            $(".carousel").carousel("cycle");
});

$("#about_skills").mouseout(function(){
            $("#about_skills").attr('class', 'd-flex mr-3 img-thumbnail');
            $("#about_jj").attr('class', 'text-white');
            $(".carousel").carousel("pause");
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");

            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");
  
            for (i = 1; i <= 10; i++){
                elem = document.getElementById(`s${i}`);
                elem.parentNode.removeChild(elem);
            }
            $('#homeCarousel').carousel(0);
            $("#web").attr('class', 'carousel-item active');
            $(".carousel").carousel("cycle");
});
$("#accordion1").mouseover(function(){
    $("#accordion1").attr('class', 'text-white blink_me');
    $("#about_img").attr('src', 'img/milly.jpg');
    $("#about_div h3").html("Python Project");

    $("#edu_img").attr('src', 'img/milly2.jpg');
    $("#edu_div h3").html("Python Project");

    $("#web_img").attr('src', 'img/milly3.jpg');
    $("#web_div h3").html("Python Project");
    
    $(".carousel").carousel("cycle");
});

$("#accordion1").mouseout(function(){
            $("#accordion1").attr('class', 'text-white');
            $("#about_img").attr('src', 'img/react-lake.jpg');
            $("#about_div h3").html("About Me");
            
            $("#edu_img").attr('src', 'img/chrome-river.jpg');
            $("#edu_div h3").html("Education");

            $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
            $("#web_div h3").html("Website Projects");

});

$("#accordion2").mouseover(function(){
    $("#accordion2").attr('class', 'text-white blink_me');
    $("#about_img").attr('src', 'img/imposter.jpg');
    $("#about_div h3").html("Html/css/javascript Project");

    $("#edu_img").attr('src', 'img/imposter2.jpg');
    $("#edu_div h3").html("Html/css/javascript Project");

    $("#web_img").attr('src', 'img/imposter3.jpg');
    $("#web_div h3").html("Html/css/javascript Project");
    
    $(".carousel").carousel("cycle");
});

$("#accordion2").mouseout(function(){
    $("#accordion2").attr('class', 'text-white');
    $("#about_img").attr('src', 'img/react-lake.jpg');
    $("#about_div h3").html("About Me");
    
    $("#edu_img").attr('src', 'img/chrome-river.jpg');
    $("#edu_div h3").html("Education");

    $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
    $("#web_div h3").html("Website Projects");

});

$("#accordion3").mouseover(function(){
    $("#accordion3").attr('class', 'text-white blink_me');
    $("#about_img").attr('src', 'img/franchise.jpg');
    $("#about_div h3").html("DeVops Project");

    $("#edu_img").attr('src', 'img/franchise2.jpg');
    $("#edu_div h3").html("DeVops Project");

    $("#web_img").attr('src', 'img/franchise3.jpg');
    $("#web_div h3").html("DeVops Project");
    
    $(".carousel").carousel("cycle");
});

$("#accordion3").mouseout(function(){
    $("#accordion3").attr('class', 'text-white');
    $("#about_img").attr('src', 'img/react-lake.jpg');
    $("#about_div h3").html("About Me");
    
    $("#edu_img").attr('src', 'img/chrome-river.jpg');
    $("#edu_div h3").html("Education");

    $("#web_img").attr('src', 'img/breadcrumb-trail.jpg');
    $("#web_div h3").html("Website Projects");
});