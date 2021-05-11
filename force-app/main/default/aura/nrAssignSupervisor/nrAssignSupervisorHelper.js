({
    getSupervisorList : function(component, event, helper){
        var woId = component.get('v.recordId');
        var action = component.get('c.getSupervisorProfileUsers');
        action.setParams({"workOrderId": woId}); 
        action.setCallback(this, function(response){
            /*<response.getState()> returns response status as SUCCESS/ERROR/INCOMPLETE etc.*/
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log("The Supervisor List: ", response.getReturnValue());
                var supervisorList = response.getReturnValue();
                var mapEmpty = Reflect.ownKeys(supervisorList).length;
                if(mapEmpty == 0){
                    console.log('supervisor List is Empty');
                    component.set("v.isSupervisorList", false); 
                } else {
                    var userIdNameMap = []
                    for(var key in supervisorList){
                        console.log('Key:'+key+'now userIdNameMap: '+userIdNameMap);
                        userIdNameMap.push({label: supervisorList[key], value: key});
                    }
                    component.set("v.userIdNameMap", userIdNameMap);
                   
                }
            }
        });
        $A.enqueueAction(action);
    },
    
    changeSelectedSupervisor : function(component, event, helper){
        var selectedSupervisorId = event.getParam("value");        
        component.set('v.selectedSupervisorId',selectedSupervisorId);
    },
    
    assignSelectedSupervisor : function(component, event, helper){
        var selectedSupervisorId = component.get('v.selectedSupervisorId');
        if(selectedSupervisorId === undefined || selectedSupervisorId=='' || selectedSupervisorId==='NULL'){
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Error!",
                "message": "Please select a Supervisor to assign Work order.",
                "type" : 'error'
            });
            toastEvent.fire();
        }else{
            var woId = component.get('v.recordId');
            var action = component.get('c.shareWOWithSelectedSupervisor');
            action.setParams({
                "workOrderId": woId,
                "supervisorId" : selectedSupervisorId
            }); 
            action.setCallback(this, function(response){
                /*<response.getState()> returns response status as SUCCESS/ERROR/INCOMPLETE etc.*/
                var state = response.getState();
                console.log('state: ',state)
                if (state === "SUCCESS"){
                    var supervisorName = response.getReturnValue();
                    $A. get("e.force:closeQuickAction").fire();
                    console.log('Inside success');
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": "Work order has been successfully assigned to : "+supervisorName,
                        "type" : 'success'
                    });
                    toastEvent.fire();
                }else if (state === "ERROR") {
                    var errors = action.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log(errors[0].message);
                        }
                    }
                }
            });
            $A.enqueueAction(action);
        }
    }
})