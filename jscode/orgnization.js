// const data = {
//     userId: $('#userId').val(),
//     roleId: $('#roleId').val()
// };
var userId = null; //for updation
var details = {};

const showOriganisation = origanisationlist => {
    $('#origanisationmaintbl').dataTable().fnDestroy();
    $('.origanisationmainData').empty();
    var tblData = '';
    for (let k of OriganisationList.keys()) {
        let originise = OriganisationList.get(k);
        tblData +="<tr>";
        // tblData +="<td>"+originise.Taxname+"</td>";
        tblData +="<td>"+originise.OrganizationName+"</td>";
        tblData +="<td>"+originise.OrganizationTypeName+"</td>"
        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editoriganisation(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removeoriganisation(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('.origanisationmainData').html(tblData);
    $('#origanisationmaintbl').dataTable({
        searching: true,
        retrieve: true,
        paging: true,
        bPaginate: $('tbody tr').length > 10,
        order: [],
        columnDefs: [{ orderable: false, targets: [0, 1,2] }],
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf'],
        destroy: true
    });
}


const editoriganisation = origanisationlistId => {
    origanisationlistId = origanisationlistId.toString();
    if (OriganisationList.has(origanisationlistId)) {
        $('.origanisationlist').hide();
        $('#neworiganisation').load('edit_origanisation.php');
        const vendor = OriganisationList.get(origanisationlistId);
        userId = origanisationlistId;
        details = vendor;
    } else {
        alert('something goes wrong');
    }
}

const removeoriganisation = origanisationlistId => {
    origanisationlistId = origanisationlistId.toString();
    if (OriganisationList.has(origanisationlistId)) {

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
        url:url+'deleteoriganisation.php',
        type:'POST',
        data:{
          organizationID:origanisationlistId
        },
        dataType:'json',
        success:function(response){

          if(response.Responsecode==200){
            OriganisationList.delete(origanisationlistId.toString());
            showOriganisation(OriganisationList);
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
      swal("The Origanisation is safe!");
  }
});

}
}

function addOriganisation() {
    $('.origanisationlist').hide();
    $('#neworiganisation').load('add_origanisation.php');
}

function goback() {
    $('#neworiganisation').empty();
    $('.origanisationlist').show();
}
