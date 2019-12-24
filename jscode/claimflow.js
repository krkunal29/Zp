var claimFlowlist = new Map();
var details = {};
const loadFlowList = () => {
    $.ajax({
        url: url + 'getAllcliamflows.php',
        type: 'POST',
        dataType: 'json',
        success: function(response) {
            // console.log(response);
            if (response.Responsecode == 200) {
                if (response.Data != null) {
                    const count = response.Data.length;
                    for (var i = 0; i < count; i++) {
                        claimFlowlist.set(response.Data[i].ClaimTypeFlowID, response.Data[i]);
                    }
                }
                showFlowList(claimFlowlist);
            }
        }
    });
}
loadFlowList();
const showFlowList = claimFlowlist => {
    $('#flowMaster').dataTable().fnDestroy();
    $('#flowData').empty();
    var tblData = '';
    for (let k of claimFlowlist.keys()) {
        let claimflow = claimFlowlist.get(k);
        tblData += '<tr><td>' + claimflow.claim + '</td>';
        tblData += '<td>' + claimflow.FlowOrder + '</td>';
        tblData += '<td>' + claimflow.role + '</td>';
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
            targets: [0, 1, 2, 3]
        }],
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf'],
        destroy: true
    });
}
const editFlow = flowId => {
    flowId = flowId.toString();
    if (claimFlowlist.has(flowId)) {
        $('.flowlist').hide();
        $('#newFlow').load('edit_claim_flow.php');
        const flowOrder = claimFlowlist.get(flowId);
        details = flowOrder;
    }
}

const removeFlow = flowId => {
    flowId = flowId.toString();
    if (claimFlowlist.has(flowId)) {

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
                        url: url + 'removeClaimflow.php',
                        type: 'POST',
                        data: {
                            ClaimTypeFlowID: flowId
                        },
                        dataType: 'json',
                        success: function(response) {
                            if (response.Responsecode == 200) {
                                claimFlowlist.delete(flowId);
                                showFlowList(claimFlowlist);
                                swal({
                                    title: "Deleted",
                                    text: response.Message,
                                    icon: "success",
                                });
                            }
                        }
                    })
                } else {
                    swal("The Flow Order is safe!");
                }
            });

    }
}

function addFlow() {
    $('.flowlist').hide();
    $('#newFlow').load('add_claim_flow.php');
}

function goback() {
    $('#newFlow').empty();
    $('.flowlist').show();
}
