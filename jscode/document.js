// const data = {
//     userId: $('#userId').val(),
//     roleId: $('#roleId').val()
// };
var userId = null; //for updation
var details = {};

const showdocumentmaster = documentmasterlist => {
    $('#documentmastertbl').dataTable().fnDestroy();
    $('.documentmasterData').empty();
    var tblData = '';
    for (let k of documentmasterList.keys()) {
        let document = documentmasterList.get(k);
        tblData +="<tr>";
        // tblData +="<td>"+originise.Taxname+"</td>";
        tblData +="<td>"+document.DocTypeDesc+"</td>";

        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editdocumentmasterlist(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removedocumentmasterlist(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('.documentmasterData').html(tblData);
    $('#documentmastertbl').dataTable({
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


const editdocumentmasterlist = documentmasterlistId => {
    documentmasterlistId = documentmasterlistId.toString();
    if (documentmasterList.has(documentmasterlistId)) {
        $('.documentmasterlist').hide();
        $('#newdocumentmaster').load('edit_documentmaster.php');
        const vendor = documentmasterList.get(documentmasterlistId);
        userId = documentmasterlistId;
        details = vendor;
    } else {
        alert('something goes wrong');
    }
}

const removedocumentmasterlist = documentmasterlistId => {
    documentmasterlistId = documentmasterlistId.toString();
    $.ajax({
        url:url+'deletedocument.php',
        type:'POST',
        data:{
          documentId:documentmasterlistId
        },
        dataType:'json',
        success:function(response){

          if(response.Responsecode==200){
            documentmasterList.delete(documentmasterlistId.toString());
            showdocumentmaster(documentmasterList);
          }
          else{
            // alert(response.Message);
              alert("Already Used Can't Delete");
          }
        }
    });
}

function adddocumentmaster() {
    $('.documentmasterlist').hide();
    $('#newdocumentmaster').load('add_documentmaster.php');
}

function goback() {
    $('#newdocumentmaster').empty();
    $('.documentmasterlist').show();
}
