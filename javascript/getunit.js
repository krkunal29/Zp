var tableData = new Map();//from getallstaff.php names only
function setunitmaster(tableData){
  var html ='';
  $('#tablemain').dataTable().fnDestroy();
  $("#tablebody").empty();
  var i=0;
  for(let k of tableData.keys())
  {
        let cityName ="-";
        var TableData= tableData.get(k);
        html +="<tr>";

        html +="<td>"+TableData.unit+"</td>";
        html +='<td style="width:10%"><div class="btn-group" role="group" aria-label="Basic Example">';
        html +='<button class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Edit" onclick="editStyle('+k+')"><i class="fa fa-edit"></i></button><button class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Delete" onclick="removeStyle('+k+')"><i class="fa fa-remove"></i></button></div></td>';
        html +="</tr>";
        i++;
  }
  $("#tablebody").html(html);
  $('#tablemain').DataTable({
  searching: true,
  retrieve: true,
  bPaginate: $('tbody tr').length>10,
  order: [],
  columnDefs: [{ orderable: false, targets: []}],
  dom: 'Bfrtip',
  buttons: [],
  destroy: true
  });
}

getunit();
// This function is created for Get All Style Data.
function getunit(){
     $.ajax({
         type: "GET",
         url: api_url+"getAllUnits.php",
      
         beforeSend: function() {
               $(".preloader").show();
         },
         success: function(response) {
           // console.log(response);
           var count;
            if(response['Data']!=null){
               count= response['Data'].length;
            }
            for(var i=0;i<count;i++)
            {
            tableData.set(response.Data[i].unitId,response.Data[i]);
            }
            setunitmaster(tableData);
         },
         complete:function(response){
           // console.log("after");
           $(".preloader").hide();
         }
     });
}
