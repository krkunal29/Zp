// const data = {
//     userId: $('#userId').val(),
//     roleId: $('#roleId').val()
// };
var userId = null; //for updation
var details = {};

const showOriganisationType = origanisationlist => {
    $('#origanisationtbl').dataTable().fnDestroy();
    $('.origanisationData').empty();
    var tblData = '';
    for (let k of OriganisationTypeList.keys()) {
        let originise = OriganisationTypeList.get(k);
        tblData +="<tr>";
        // tblData +="<td>"+originise.Taxname+"</td>";
        tblData +="<td>"+originise.OrganizationTypeName+"</td>";

        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editoriganisationlist(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removeoriganisationlist(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('.origanisationData').html(tblData);
    $('#origanisationtbl').dataTable({
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


const editoriganisationlist = origanisationlistId => {
    origanisationlistId = origanisationlistId.toString();
    if (OriganisationTypeList.has(origanisationlistId)) {
        $('.origanisationlist').hide();
        $('#neworiganisation').load('edit_origanisationtype.php');
        const vendor = OriganisationTypeList.get(origanisationlistId);
        userId = origanisationlistId;
        details = vendor;
    } else {
        alert('something goes wrong');
    }
}

const removeoriganisationlist = origanisationlistId => {
    origanisationlistId = origanisationlistId.toString();
    $.ajax({
        url:url+'deleteoriganisationtype.php',
        type:'POST',
        data:{
          origanisationlistId:origanisationlistId
        },
        dataType:'json',
        success:function(response){

          if(response.Responsecode==200){
            OriganisationTypeList.delete(origanisationlistId.toString());
            showOriganisationType(OriganisationTypeList);
          }
          else{
            // alert(response.Message);
              alert("Already Used Can't Delete");
          }
        }
    });
}

function addOriganisationType() {
    $('.origanisationlist').hide();
    $('#neworiganisation').load('add_origanisationtype.php');
}

function goback() {
    $('#neworiganisation').empty();
    $('.origanisationlist').show();
}
