// const data = {
//     userId: $('#userId').val(),
//     roleId: $('#roleId').val()
// };
var userId = null; //for updation
var details = {};

const showcontactmaster = contactmasterlist => {
  // console.log(contactmasterlist);
    $('#contactmastertbl').dataTable().fnDestroy();
    $('.contactmasterData').empty();
    var tblData = '';
    for (let k of contactmasterList.keys()) {
        let contact = contactmasterList.get(k);
        tblData +="<tr>";
        // tblData +="<td>"+originise.Taxname+"</td>";
        tblData +="<td>"+contact.fname+" "+contact.lname+"</td>";
        tblData +="<td>"+contact.email+"</td>";
        tblData +="<td>"+contact.phone+"</td>";
        tblData +="<td>"+contact.address1+"</td>";

        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editcontactmasterlist(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removecontactmasterlist(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('.contactmasterData').html(tblData);
    $('#contactmastertbl').dataTable({
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


const editcontactmasterlist = contactmasterlistId => {
    contactmasterlistId = contactmasterlistId.toString();
    if (contactmasterList.has(contactmasterlistId)) {
        $('.contactmasterlist').hide();
        $('#newcontactmaster').load('edit_contactmaster.php');
        const vendor = contactmasterList.get(contactmasterlistId);
        userId = contactmasterlistId;
        details = vendor;
    } else {
        alert('something goes wrong');
    }
}


const removecontactmasterlist = contactmasterlistId => {
    contactmasterlistId = contactmasterlistId.toString();
    if (contactmasterList.has(contactmasterlistId)) {
    // console.log(contactmasterlistId);
        // swal({
        //         title: "Are you sure?",
        //         text: "Do you really want to remove this flow ?",
        //         icon: "warning",
        //         buttons: ["Cancel", "Delete Now"],
        //         dangerMode: true,
        //     })
        //     .then((willDelete) => {
        //         if (willDelete) {
        //           console.log(contactmasterlistId);
    $.ajax({
        url:url+'deletecontact.php',
        type:'POST',
        data:{
          contactId:contactmasterlistId
        },
        dataType:'json',
        success:function(response){
          if(response.Responsecode==200){
            contactmasterList.delete(contactmasterlistId.toString());
            showcontactmaster(contactmasterList);
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
//   } else {
//       swal("The Document is safe!");
//   }
// });

}
}

function addcontactmaster() {
    $('.contactmasterlist').hide();
    $('#newcontactmaster').load('add_contactmaster.php');
}

function goback() {
    $('#newcontactmaster').empty();
    $('.contactmasterlist').show();
}
