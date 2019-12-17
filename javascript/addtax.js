
// This function is created For Add Button New Style
function addTax(){
  $("#showtable").hide();
  $("#showform").show();
  $("#taxval").val("");
  $("#savebtn").show();
  $("#updatebtn").hide();
}

// This function is created For Edit Button
function editStyle(id){
var HoliData=tableData.get(id.toString());
$("#taxid").val(HoliData.TaxId);
$("#taxval").val(HoliData.Tax);
$("#showtable").hide();
$("#showform").show();
$("#savebtn").hide();
$("#updatebtn").show();
}



// This function is created For Refresh Action / Backbutton
$('#reloadbtn').on('click',function(event){
  event.preventDefault();
  $("#showtable").show();
  $("#showform").hide();
  $("#savebtn").show();
  $("#updatebtn").hide();
});

// This function is created For Save Style Data
$('#savebtn').on('click',function(event){
  event.preventDefault();
  var taxval = $("#taxval").val();

  if(taxval===""){
    alert("Parameter Missing");
  }
  else {
      $.ajax({
          url:api_url+'addTax.php',
          type:'POST',
          data:{
            tax:taxval
          },
          dataType:'json',
          beforeSend: function() {
                $(".preloader").show();
                // console.log("before");
          },
          success:function(response){
              if(response.Responsecode==200){
                $("#showtable").show();
                $("#showform").hide();
                tableData.set(response.Data[0].TaxId,response.Data[0]);
                settaxmaster(tableData);
              }
              else{
                // alert(response.Message);
                // alert("Please Retry Again");
              }
          },
          complete:function(response){
            $(".preloader").hide();
            // console.log("after");
          }
      });
  }

});

//This function is created For Update Style Data
$('#updatebtn').on('click',function(event){
  event.preventDefault();
  var taxid = $("#taxid").val();
  var taxval = $("#taxval").val();
  var obj = {
    TaxId: taxid,
    Tax:taxval
    };
    if(taxval===""){
      alert("Parameter Missing");
    }
    else {
  $.ajax({
      url:api_url+'editTax.php',
      type:'POST',
      data:obj,
      dataType:'json',
      beforeSend: function() {
            $(".preloader").show();
            // console.log("before");
      },
      success:function(response){
          if(response.Responsecode==200){
            alert(response.Message);
          $("#showtable").show();
          $("#showform").hide();
           tableData.set(taxid.toString(),obj);
           settaxmaster(tableData);

           }
           else{
             // alert(response.Message);
             alert("Please Retry Again");
           }
      },
      complete:function(response){

        // console.log("after");
        $(".preloader").hide();
      }
  });
}
});

// This function is created For Remove Button
function removeStyle(id){
  $.ajax({
      url:api_url+'deleteTax.php',
      type:'POST',
      data:{
        TaxId:id
      },
      dataType:'json',
      beforeSend: function() {
            $(".preloader").show();
            // console.log("before");
      },
      success:function(response){

        if(response.Responsecode==200){
          $("#showtable").show();
          $("#showform").hide();
          tableData.delete(id.toString());
          settaxmaster(tableData);
          alert(response.Message);
        }
        else{
          // alert(response.Message);
            alert("Already Used Can't Delete");
        }
      },
      complete:function(response){

        // console.log("after");
        $(".preloader").hide();
      }
  });
}
