({
    doInit : function(component, event, helper) {
        var action = component.get("c.getWOSurveyTypeForLocation");
        action.setParams({"blockSurveyId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            /*<response.getState()> return response status as SUCCESS/ERROR/INCOMPLETE etc.*/
            var state = response.getState();
            if (state === "SUCCESS"){
                var woSurveyType = response.getReturnValue();
                if(woSurveyType != null && (woSurveyType == "Recon" || woSurveyType == "All")){
                    //console.log("=====Type="+woIns.NR_Survey_Type__c);
                    component.set("v.isReadyToCreateSurvey", true);
                } else{
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "WARN!",
                        "message": "Creation Location Survey is only applicable for Recon or All Type Survey.",
                        "mode": "sticky",
                        "type": 'error'
                    });
                    toastEvent.fire();

                    $A.get("event.force:closeQuickAction").fire();
                }               
            }
        });
        
        $A.enqueueAction(action);
    },

    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true);
    },

    hideSpinner : function(component,event,helper){
        component.set("v.Spinner", false);
    }
})