// const data = {
//     userId: $('#userId').val(),
//     roleId: $('#roleId').val()
// };
var userId = null; //for updation
var details = {};

const showclaimmaster = claimmasterList => {
    $('#claimmastertbl').dataTable().fnDestroy();
    $('.claimmasterData').empty();
    var tblData = '';
    for (let k of claimmasterList.keys()) {
        let claim = claimmasterList.get(k);
        tblData +="<tr>";
        // tblData +="<td>"+originise.Taxname+"</td>";
        tblData +="<td>"+claim.claim+"</td>";

        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editclaimmasterList(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removeclaimmasterList(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('.claimmasterData').html(tblData);
    $('#claimmastertbl').dataTable({
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


const editclaimmasterList = claimmasterListId => {
    claimmasterListId = claimmasterListId.toString();
    if (claimmasterList.has(claimmasterListId)) {
        $('.claimmasterlist').hide();
        $('#newclaimmaster').load('edit_claim.php');
        const vendor = claimmasterList.get(claimmasterListId);
        userId = claimmasterListId;
        details = vendor;
    } else {
        alert('something goes wrong');
    }
}

const removeclaimmasterList = claimmasterListId => {
    claimmasterListId = claimmasterListId.toString();
    if (claimmasterList.has(claimmasterListId)) {

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
        url:url+'deleteclaim.php',
        type:'POST',
        data:{
          claimmasterId:claimmasterListId
        },
        dataType:'json',
        success:function(response){

          if(response.Responsecode==200){
            claimmasterList.delete(claimmasterListId.toString());
            showclaimmaster(claimmasterList);
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
    });
  } else {
      swal("The Claim is safe!");
  }
});

}
}

function addClaimMaster() {
    $('.claimmasterlist').hide();
    $('#newclaimmaster').load('add_claim.php');
}

function goback() {
    $('#newclaimmaster').empty();
    $('.claimmasterlist').show();
}
