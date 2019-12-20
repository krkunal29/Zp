// const data = {
//     userId: $('#userId').val(),
//     roleId: $('#roleId').val()
// };
var userId = null; //for updation
var details = {};

const showrolemaster = rolemasterlist => {
    $('#rolemastertbl').dataTable().fnDestroy();
    $('.rolemasterData').empty();
    var tblData = '';
    for (let k of rolemasterList.keys()) {
        let roles = rolemasterList.get(k);
        tblData +="<tr>";
        // tblData +="<td>"+originise.Taxname+"</td>";
        tblData +="<td>"+roles.role+"</td>";

        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editrolemasterlist(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removerolemasterlist(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('.rolemasterData').html(tblData);
    $('#rolemastertbl').dataTable({
        searching: true,
        retrieve: true,
        paging: true,
        bPaginate: $('tbody tr').length > 10,
        order: [],
        columnDefs: [{ orderable: false, targets: [0, 1] }],
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf'],
        destroy: true
    });
}


const editrolemasterlist = rolemasterlistId => {
    rolemasterlistId = rolemasterlistId.toString();
    if (rolemasterList.has(rolemasterlistId)) {
        $('.rolemasterlist').hide();
        $('#newrolemaster').load('edit_rolemaster.php');
        const vendor = rolemasterList.get(rolemasterlistId);
        userId = rolemasterlistId;
        details = vendor;
    } else {
        alert('something goes wrong');
    }
}

const removerolemasterlist = rolemasterlistId => {
    rolemasterlistId = rolemasterlistId.toString();
    if (rolemasterList.has(rolemasterlistId)) {

        swal({
                title: "Are you sure?",
                text: "Do you really want to remove this flow ?",
                icon: "warning",
                buttons: ["Cancel", "Delete Now"],
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
    $.ajax({
        url:url+'deleteroles.php',
        type:'POST',
        data:{
          rolemasterlistId:rolemasterlistId
        },
        dataType:'json',
        success:function(response){

          if(response.Responsecode==200){
            rolemasterList.delete(rolemasterlistId.toString());
            showrolemaster(rolemasterList);
            swal({
                title: "Deleted",
                text: response.Message,
                icon: "success",
            });
          }
          else{
            // alert(response.Message);
              swal("Already Used Can't Delete");
          }
        }
    })
  } else {
      swal("The Role is safe!");
  }
});

}
}

function addRolemaster() {
    $('.rolemasterlist').hide();
    $('#newrolemaster').load('add_rolemaster.php');
}

function goback() {
    $('#newrolemaster').empty();
    $('.rolemasterlist').show();
}
