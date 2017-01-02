////alert("hello");
//$(function ($) {
//    function init_map1() {
//        var myLocation = new google.maps.LatLng(38.885516, -77.09327200000001);
//        var mapOptions = {
//            center: myLocation,
//            zoom: 16
//        };
//        var marker = new google.maps.Marker({
//            position: myLocation,
//            title: "Property Location"
//        });
//        var map = new google.maps.Map(document.getElementById("map1"),
//            mapOptions);
//        marker.setMap(map);
//    }
//    init_map1();
//});

$(document).ready(function () {
      function fireAfterPageLoad() {
            populateCountries("country", "state");

            $('#country').change(function () {
                debugger;
                if ($(this).val() === '-1') {
                    $("#state").attr('disabled', true);
                } else {
                    $("#state").attr('disabled', false);
                }

            });
        }
        if (window.attachEvent) {
            window.attachEvent('onload', fireAfterPageLoad);
        } else {
            if (window.onload) {
                var curronload = window.onload;
                var newonload = function (evt) {
                    curronload(evt);
                    fireAfterPageLoad(evt);
                };
                window.onload = newonload;
            } else {
                window.onload = fireAfterPageLoad;
            }
        }


        $(document.body).on('click', '.js-contact-form', function (event) {
            event.preventDefault();
            var self = $(this);
            debugger;
            var postData = $('#contact-form').serialize();
          
            $.ajax({
                cache: false,
                async: true,
                type: "GET",
                url: "/umbraco/Surface/ContactSurface/FormData",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: postData,
                beforeSend: function () {
                    //self[0].innerText = "Loading...";
                },
                complete: function () {
                   // self[0].innerText = "More Press Release";
                },
                success: function (response) {
                    var dasd = response;
                  //  var filterdata = $(response).filter('#pressReleseContent').find('li');
                    //var moreLink = $(response).filter('#pressReleasePageNo');
                    //if (moreLink && moreLink.length) {
                    //    var pageId = moreLink.val();
                    //    self.attr("data-page", pageId);
                    //}
                    //else {
                    //    $(".js-pressButtonDiv").hide();
                    //}
                    //$("#pressreleasediv ul").append(filterdata);
                },
                error: function (f) {
                    console.log(f);
                }
            });
        });










    //form validations



        var toValidate = "#fname, #lname,#email,#country,#state,#subject,#message";

        $('.js-contactform-section').on("change", toValidate, function (e) {
        
            var valid = false;
            var emailValid = false;
   
   
   
            if ($("#fname").val().length > 0 && $("#lname").val().length > 0 && $("#country").val() != null && $("#state").val().length > 0
                           && $("#subject").val().length > 0 && $("#message").val().length > 0) {
                valid = true;
            }
    
    
            // Check if Email is Valid or Not
            if ($("#email").val().length > 0) {
                var email = $("#email").val();
                var emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (!emailReg.test(email)) {
                    $("#emailid").html('<span style="color:red" class="email-error">Email seems invalid</span');
                    emailValid = false;
                } else {
                    $("#emailid").html('');
                    emailValid = true;
                }
                if ($("#email").val() === '') {
                    $("#emailid").html('<span style="color:red" class="email-error">Email seems invalid</span');
                }
            }

            if (valid === true && emailValid == true) {
                //$('input[type=submit]').prop('disabled', false);
                $("#js-btn-submit").attr('disabled', false);
            } else {
                //$('input[type=submit]').prop('disabled', true);
                $("#js-btn-submit").attr('disabled', true);
                return false;
            }
   
   
   
            e.stopPropagation();
        });


});
