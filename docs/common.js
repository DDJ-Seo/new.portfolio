$('body').imagesLoaded(function() {
  let $grid = $('body').masonry();

  setTimeout(function() {
    
    $(window).scroll();
    $('.loading-box').addClass('hide');
  }, 500);
});



$(function () {
  $("#pc_nav ul li .navbg11").addClass("on")

  $("#pc_nav ul li:eq(0),#mobile_nav ul li:eq(0)").on('click', function (e) {
    e.preventDefault();

    var nowTop = $(".sc1").offset().top;

    $('html,body').stop().animate({
      "scrollTop": nowTop
    }, 500, "easeOutQuart")
  });

  $("#pc_nav ul li:eq(1),#mobile_nav ul li:eq(1)").on('click', function (e) {
    e.preventDefault();

    var nowTop = $(".sc2").offset().top;

    $('html,body').stop().animate({
      "scrollTop": nowTop
    }, 500, "easeOutQuart")
  });

  $("#pc_nav ul li:eq(2),#mobile_nav ul li:eq(2)").on('click', function (e) {
    e.preventDefault();

    var nowTop = $(".sc3").offset().top;

    $('html,body').stop().animate({
      "scrollTop": nowTop
    }, 500, "easeOutQuart")
  });

  $("#pc_nav ul li:eq(3),#mobile_nav ul li:eq(3)").on('click', function (e) {
    e.preventDefault();

    var nowTop = $(".sc4").offset().top;

    $('html,body').stop().animate({
      "scrollTop": nowTop
    }, 500, "easeOutQuart")
  });

  $("#pc_nav ul li:eq(0) a").mouseenter(function () {
    $("#pc_nav ul li .navbg1").addClass("on")
  });

  $("#pc_nav ul li:eq(0) a").mouseleave(function () {
    $("#pc_nav ul li .navbg1").removeClass("on")
    $("#pc_nav ul li .navbg1").css({
      transition: "all 0.8s"
    })
  });

  $("#pc_nav ul li:eq(1) a").mouseenter(function () {
    $("#pc_nav ul li .navbg2").addClass("on")
  });

  $("#pc_nav ul li:eq(1) a").mouseleave(function () {
    $("#pc_nav ul li .navbg2").removeClass("on")
  });

  $("#pc_nav ul li:eq(2) a").mouseenter(function () {
    $("#pc_nav ul li .navbg3").addClass("on")
  });

  $("#pc_nav ul li:eq(2) a").mouseleave(function () {
    $("#pc_nav ul li .navbg3").removeClass("on")
  });

  $("#pc_nav ul li:eq(3) a").mouseenter(function () {
    $("#pc_nav ul li .navbg4").addClass("on")
  });

  $("#pc_nav ul li:eq(3) a").mouseleave(function () {
    $("#pc_nav ul li .navbg4").removeClass("on")
  });

  $(window).scroll(function () {

    var i = $(window).scrollTop();

    var sc1 = $(".sc1").offset().top;
    var sc2 = $(".sc2").offset().top;
    var sc3 = $(".sc3").offset().top;
    var sc4 = $(".sc4").offset().top;

    if (i >= sc1 && i < sc2 - 100) {
      $("#pc_nav ul li .navbg11").addClass("on")
      $("#pc_nav ul li .menu-1").addClass("on")

    } else {
      $("#pc_nav ul li .navbg11").removeClass("on")
      $("#pc_nav ul li .menu-1").removeClass("on")
    }

    if (i >= sc2 - 80 && i < sc3 - 100) {
      $("#pc_nav ul li .navbg22").addClass("on")
      $("#pc_nav ul li .menu-2").addClass("on")

    } else {
      $("#pc_nav ul li .navbg22").removeClass("on")
      $("#pc_nav ul li .menu-2").removeClass("on")
    }

    if (i >= sc3 - 80 && i < sc4 - 800) {
      $("#pc_nav ul li .navbg33").addClass("on")
      $("#pc_nav ul li .menu-3").addClass("on")

    } else {
      $("#pc_nav ul li .navbg33").removeClass("on")
      $("#pc_nav ul li .menu-3").removeClass("on")
    }

    if (i >= sc4 - 800) {
      $("#pc_nav ul li .navbg44").addClass("on")
      $("#pc_nav ul li .menu-4").addClass("on")

    } else {
      $("#pc_nav ul li .navbg44").removeClass("on")
      $("#pc_nav ul li .menu-4").removeClass("on")
    }
  });

  //section1

  $(".s1img4box").mouseenter(function () {
    $(".s1img4").stop().animate({
      bottom: "300"
    }, 500, "easeOutBounce")

    $(".s1img5").stop().animate({
      opacity: "1"
    }, 500, "easeOutBounce")

    $(".s1img6").stop().animate({
      opacity: "0"
    }, 300)
  })

  $(".s1img4box").mouseleave(function () {
    $(".s1img4").stop().animate({
      bottom: "19%"
    }, 500, "easeOutBounce")

    $(".s1img5").stop().animate({
      opacity: "0"
    }, 500, "easeOutBounce")

    $(".s1img6").stop().animate({
      opacity: "1"
    }, 300)
  })

  //section2   

  $(window).scroll(function () {

    var height = $(window).scrollTop();

    if (height > 800) {
      $("svg text").addClass('on');

    } else if (height < 300) {
      $("svg text").removeClass('on');
    }
  });

  //section3

  //mainworks scrolltop

  $(window).scroll(function () {

    var w = $(window).scrollTop();
    var m = $("#mainworks").offset().top;

    if (w > m - 500) {
      $("#mainworks article:nth-of-type(1)").stop().animate({
        top: "0",
        opacity: "1"
      }, 800, "easeOutBounce");

    } else if (w < m - 1000) {
      $("#mainworks article:nth-of-type(1)").stop().animate({
        top: "-200",
        opacity: "0"
      });
    }

    if (w > m + 200) {
      $("#mainworks article:nth-of-type(2)").stop().animate({
        top: "0",
        opacity: "1"
      }, 800, "easeOutBounce");

    } else if (w < m - 1000) {
      $("#mainworks article:nth-of-type(2)").stop().animate({
        top: "-200",
        opacity: "0"
      });
    }

    if (w > m + 800) {
      $("#mainworks article:nth-of-type(3)").stop().animate({
        top: "0",
        opacity: "1"
      }, 800, "easeOutBounce");

    } else if (w < m - 1000) {
      $("#mainworks article:nth-of-type(3)").stop().animate({
        top: "-200",
        opacity: "0"
      });
    }

    if (w > m + 1500) {
      $("#mainworks article:nth-of-type(4)").stop().animate({
        top: "0",
        opacity: "1"
      }, 800, "easeOutBounce");

    } else if (w < m - 1000) {
      $("#mainworks article:nth-of-type(4)").stop().animate({
        top: "-200",
        opacity: "0"
      });
    }
  });

  //mainworks scrolltop end    

  //subwork scroll

  $(window).scroll(function () {

    var height = $(window).scrollTop();

    if (height > 5000 && height < 9000) {
      $('#subwork').addClass('on');
      $('#sc3subtitle').stop().animate({
        top: "10%",
        opacity: "1"
      }, 800, "easeOutBounce");

      var numAc = $("#subwork article").length;

      var widsec = 700 * numAc;

      var widtotal = widsec;

      var scroll = $(this).scrollTop();

      $('#subwork').height(widsec);
      $('#subwork').width(widtotal);
      $('#subwork').stop().animate({
        left: 5350 - scroll
      }, 700);

    } else {
      $('#subwork').removeClass('on');
      $('#sc3subtitle').stop().animate({
        top: "0%",
        opacity: "0"
      }, 1);
    }
  });

  $(".sc3").on("mousewheel", function (event, delta) {
    if (delta > 0) {
      $(".workimg img").addClass("left")
      $(".workimg img").removeClass("right")

    } else if (delta < 0) {
      $(".workimg img").removeClass("left")
      $(".workimg img").addClass("right")
    }
  });

  //subscroll end

  //section3 end 
});

function sendEmailForm(form) {
  if (form._replyto.value.length == 0) {
    alert('이메일 주소를 입력해주세요.');
    form._replyto.focus();
    return;
  }

  if (form.message.value.length == 0) {
    alert('메세지를 입력해주세요.');
    form.message.focus();
    return;
  }

  form.submit();

  form._replyto.value = '';
  form.message.value = '';
  form.submit1.innerHTML = '전송되었습니다.';
  form.submit1.disabled = true;
}