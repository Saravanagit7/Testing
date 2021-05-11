({
    doInit : function(component, event, helper) {
        //   
        var action = component.get("c.getOfBlockSurvey");
        action.setParams({"blkSrvyId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                var blockSurveyIns = response.getReturnValue();
                
                if(blockSurveyIns.NR_Status__c === 'New'){
                    component.set("v.isReadyToEdit", "true");
                } else{
                    // ########## Closing Tab #############
                    var workspaceAPI = component.find("workspace");
                    workspaceAPI.getFocusedTabInfo().then(function(response) {
                        var focusedTabId = response.tabId;
                        workspaceAPI.closeTab({tabId: focusedTabId});
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                    // ########## Closing Tab #############
                    
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        title: "WARN!",
                        type: 'error',
                        message: "Status [" + blockSurveyIns.NR_Status__c + "] is not applicable to edit."
                    });
                    toastEvent.fire();
                }
            } else if (state === "INCOMPLETE") {
                //Offline message display logic.
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "OFFLINE!",
                    "message": "You are in offline."
                });
                toastEvent.fire();
            }else if (state === "ERROR") {
                //Error message display logic.
                var errors = response.getError();
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "ERROR!",
                    "message": errors[0].message
                });
                toastEvent.fire();
            }else {
                //Unknown message display logic.
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "UNKOWN!",
                    "message": "Unknown error."
                });
                toastEvent.fire();
            }
        });        
        $A.enqueueAction(action);

    },

    handleCloseFromParent : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.closeTab({tabId: focusedTabId});
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})