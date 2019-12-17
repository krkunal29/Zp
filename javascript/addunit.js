
// This function is created For Add Button New Style
function addTax(){
  $("#showtable").hide();
  $("#showform").show();
  $("#unitval").val("");
  $("#savebtn").show();
  $("#updatebtn").hide();
}

// This function is created For Edit Button
function editStyle(id){
var HoliData=tableData.get(id.toString());
$("#unitid").val(HoliData.unitId);
$("#unitval").val(HoliData.unit);
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
  var unitval = $("#unitval").val();

  if(unitval===""){
    alert("Parameter Missing");
  }
  else {
      $.ajax({
          url:api_url+'addUnit.php',
          type:'POST',
          data:{
            unit:unitval
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
                tableData.set(response.Data[0].unitId,response.Data[0]);
                setunitmaster(tableData);
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
  var unitid = $("#unitid").val();
  var unitval = $("#unitval").val();
  var obj = {
    unitId: unitid,
    unit:unitval
    };
    if(unitval===""){
      alert("Parameter Missing");
    }
    else {
  $.ajax({
      url:api_url+'editUnit.php',
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
           tableData.set(unitid.toString(),obj);
           setunitmaster(tableData);

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
      url:api_url+'deleteUnit.php',
      type:'POST',
      data:{
        unitId:id
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
          setunitmaster(tableData);
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
