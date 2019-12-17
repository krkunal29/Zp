var tableData = new Map();//from getallstaff.php names only
function settaxmaster(tableData){
  var html ='';
  $('#tablemain').dataTable().fnDestroy();
  $("#tablebody").empty();
  var i=0;
  for(let k of tableData.keys())
  {
        let cityName ="-";
        var TableData= tableData.get(k);
        html +="<tr>";
        // html +="<td>"+(i+1)+"</td>";
        html +="<td>"+TableData.Tax+"</td>";
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

gettax();
// This function is created for Get All Style Data.
function gettax(){
     $.ajax({
         type: "GET",
         url: api_url+"getAllTaxes.php",
      
         beforeSend: function() {
               $(".preloader").show();
         },
         success: function(response) {
           var count;
            if(response['Data']!=null){
               count= response['Data'].length;
            }
            for(var i=0;i<count;i++)
            {
            tableData.set(response.Data[i].TaxId,response.Data[i]);
            }
            settaxmaster(tableData);
         },
         complete:function(response){
           // console.log("after");
           $(".preloader").hide();
         }
     });
}
