// const data = {
//     userId: $('#userId').val(),
//     roleId: $('#roleId').val()
// };
var userId = null; //for updation
var details = {};

const showusersmaster = usersmasterlist => {
    $('#usersmastertbl').dataTable().fnDestroy();
    $('.usersmasterData').empty();
    var tblData = '';
    for (let k of usersmasterList.keys()) {
        let users = usersmasterList.get(k);

        tblData +="<tr>";
        // tblData +="<td>"+originise.Taxname+"</td>";
        tblData +="<td>"+users.OrganizationName+"</td>";
        tblData +="<td>"+users.role+"</td>";
        tblData +="<td>"+users.fname+" "+users.lname+"</td>";
        tblData +="<td>"+users.emailId+"</td>";
        tblData +="<td>"+users.contactNumber+"</td>";
        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editusersmasterlist(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removeusersmasterlist(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('.usersmasterData').html(tblData);
    $('#usersmastertbl').dataTable({
        searching: true,
        retrieve: true,
        paging: true,
        bPaginate: $('tbody tr').length > 10,
        order: [],
        columnDefs: [{ orderable: false, targets: [0, 1,2,3,4,5] }],
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf'],
        destroy: true
    });
}


const editusersmasterlist = usersmasterlistId => {
    usersmasterlistId = usersmasterlistId.toString();
    if (usersmasterList.has(usersmasterlistId)) {
        $('.usersmasterlist').hide();
        $('#newusersmaster').load('edit_usersmaster.php');
        const vendor = usersmasterList.get(usersmasterlistId);
        userId = usersmasterlistId;
        details = vendor;
    } else {
        alert('something goes wrong');
    }
}

const removeusersmasterlist = usersmasterlistId => {
    usersmasterlistId = usersmasterlistId.toString();
    const vendor = usersmasterList.get(usersmasterlistId);
    // console.log(vendor.userId);
    var contactId = vendor.contactId;
    $.ajax({
        url:url+'deleteusers.php',
        type:'POST',
        data:{
          usersId:usersmasterlistId,
          contactId:contactId
        },
        dataType:'json',
        success:function(response){

          if(response.Responsecode==200){
            usersmasterList.delete(usersmasterlistId.toString());
            showusersmaster(usersmasterList);
          }
          else{
            // alert(response.Message);
              alert("Already Used Can't Delete");
          }
        }
    });
}

function addusermaster() {
    $('.usersmasterlist').hide();
    $('#newusersmaster').load('add_usersmaster.php');
}

function goback() {
    $('#newusersmaster').empty();
    $('.usersmasterlist').show();
}
