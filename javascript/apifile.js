
var api_url = './apis/';
var pic_url = 'mobileimages/';
var img_url = 'uploadimage.php';
// getallbadgecount();
//
// function getallbadgecount() {
//     $.ajax({
//         type: "GET",
//         url: api_url + "getCountForBadges.php",
//         success: function(response) {
//             var count;
//             if (response['Data'] != null) {
//                 count = response['Data'].length;
//                 if (response['Data'][0].appointmentCount == 0) {
//                     $('#ap1').removeClass('heartbit');
//                     $('#ap2').removeClass('point');
//                 }
//                 if (response['Data'][0].ordersCount == 0) {
//                     $('#ap3').removeClass('heartbit');
//                     $('#ap4').removeClass('point');
//                 }
//                 if (response['Data'][0].productCount == 0) {
//                     $('#ap5').removeClass('heartbit');
//                     $('#ap6').removeClass('point');
//                 }
//                 if (response['Data'][0].fabricCount == 0) {
//                     $('#ap7').removeClass('heartbit');
//                     $('#ap8').removeClass('point');
//                 }
//                 if (response['Data'][0].alterCount == 0) {
//                     $('#ap9').removeClass('heartbit');
//                     $('#ap10').removeClass('point');
//                 }
//                 $("#b1").html('<strong>' + response['Data'][0].appointmentCount + '</strong>');
//                 $("#b2").html(response['Data'][0].ordersCount);
//                 $("#b3").html(response['Data'][0].productCount);
//                 $("#b4").html(response['Data'][0].fabricCount);
//                 $("#b5").html(response['Data'][0].alterCount);
//             }
//         }
//     });
// }
