({
    doInit : function(component, event, helper) {
        var action = component.get("c.getWOSurveyTypeForAsset");
        action.setParams({"locSurveyId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                var woSurveyType = response.getReturnValue();
                console.log("=====Type="+woSurveyType);
                if(woSurveyType != null && woSurveyType != "Recon"){
                    component.set("v.isSupportedSurveyType", true);
                } else{
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "WARN!",
                        "message": "Creation Asset Survey is not applicable for Survey Type [ " + woSurveyType + "]",
                        "mode": "sticky",
                        "type": "Error"
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