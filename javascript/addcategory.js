
// This function is created For Add Button New Style
function addTax(){
  $("#showtable").hide();
  $("#showform").show();
  $("#categoryval").val("");
  $("#savebtn").show();
  $("#updatebtn").hide();
}

// This function is created For Edit Button
function editStyle(id){
var HoliData=tableData.get(id.toString());
$("#categoryid").val(HoliData.categoryId);
$("#categoryval").val(HoliData.category);
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
  var categoryval = $("#categoryval").val();

  if(categoryval===""){
    alert("Parameter Missing");
  }
  else {
      $.ajax({
          url:api_url+'addCategory.php',
          type:'POST',
          data:{
            category:categoryval
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
                tableData.set(response.Data[0].categoryId,response.Data[0]);
                setcategorymaster(tableData);
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
  var categoryid = $("#categoryid").val();
  var categoryval = $("#categoryval").val();
  var obj = {
    categoryId: categoryid,
    category:categoryval
    };
    if(categoryval===""){
      alert("Parameter Missing");
    }
    else {
  $.ajax({
      url:api_url+'editProductCategory.php',
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
           tableData.set(categoryid.toString(),obj);
           setcategorymaster(tableData);

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
      url:api_url+'deleteProductCategory.php',
      type:'POST',
      data:{
        categoryId:id
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
          setcategorymaster(tableData);
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
