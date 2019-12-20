const data = {
    userId:1
};
var claimlist = new Map();
var details = {};
const loadClaimList = () => {
    $.ajax({
        url: url + 'getAllClaims.php',
        type: 'POST',
        dataType: 'json',
        data:{userId:data.userId},
        success: function(response) {
            console.log(response);
            if (response.Responsecode == 200) {
                if (response.Data != null) {
                    const count = response.Data.length;
                    for (var i = 0; i < count; i++) {
                        claimlist.set(response.Data[i].claimId, response.Data[i]);
                    }
                }
                showClaimList(claimlist);
            }
        }
    });
}
loadClaimList();
const showClaimList = claimlist => {
    $('#flowMaster').dataTable().fnDestroy();
    $('#flowData').empty();
    var tblData = '';
    for (let k of claimlist.keys()) {
        let claimflow = claimlist.get(k);
        tblData += '<tr><td>' + claimflow.fname +' '+claimflow.lname + '</td>';
        tblData += '<td>' + claimflow.claimDate + '</td>';
        tblData += '<td>' + claimflow.claim + '</td>';
        tblData += '<td>' + claimflow.ClaimStatusDescription + '</td>';
        tblData += '<td>' + claimflow.phone + '</td>';
        tblData += '<td>' + claimflow.email + '</td>';
        tblData += '<td><div class="table-actions">';
        tblData += '<a href="#" onclick="editFlow(' + (k) + ')"><i class="ik ik-edit-2"></i></a>';
        tblData += '<a href="#" class="list-delete" onclick="removeFlow(' + (k) + ')"><i class="ik ik-trash-2"></i></a>';
        tblData += '</div></td></tr>';
    }
    $('#flowData').html(tblData);
    $('#flowMaster').dataTable({
        searching: true,
        retrieve: true,
        bPaginate: $('tbody tr').length > 10,
        order: [],
        columnDefs: [{
            orderable: false,
            targets: [0, 1, 2, 3,4,5,6]
        }],
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf'],
        destroy: true
    });
}
// const editFlow = flowId => {
//     flowId = flowId.toString();
//     if (claimFlowlist.has(flowId)) {
//         $('.flowlist').hide();
//         $('#newFlow').load('edit_claim_flow.php');
//         const flowOrder = claimFlowlist.get(flowId);
//         details = flowOrder;
//     }
// }

// const removeFlow = flowId => {
//     flowId = flowId.toString();
//     if (claimFlowlist.has(flowId)) {

//         swal({
//                 title: "Are you sure?",
//                 text: "Do you really want to remove this flow ?",
//                 icon: "warning",
//                 buttons: ["Cancel", "Delete Now"],
//                 dangerMode: true,
//             })
//             .then((willDelete) => {
//                 if (willDelete) {
//                     $.ajax({
//                         url: url + 'removeClaimflow.php',
//                         type: 'POST',
//                         data: {
//                             ClaimTypeFlowID: flowId
//                         },
//                         dataType: 'json',
//                         success: function(response) {
//                             if (response.Responsecode == 200) {
//                                 claimFlowlist.delete(flowId);
//                                 showFlowList(claimFlowlist);
//                                 swal({
//                                     title: "Deleted",
//                                     text: response.Message,
//                                     icon: "success",
//                                 });
//                             }
//                         }
//                     })
//                 } else {
//                     swal("The Flow Order is safe!");
//                 }
//             });

//     }
// }

function addFlow() {
    $('.flowlist').hide();
    $('#newFlow').load('add_new_claim.php');
}

function goback() {
    $('#newFlow').empty();
    $('.flowlist').show();
}