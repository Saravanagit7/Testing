({
    doInit : function(component, event, helper) {
        var action = component.get("c.isValidated");
        action.setParams({"siteSurveyId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            /*<response.getState()> return response status as SUCCESS/ERROR/INCOMPLETE etc.*/
            var state = response.getState();
            if (state === "SUCCESS"){
                var retVal = response.getReturnValue();
                if(retVal == "SUCCESS"){
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "SUCCESS!",
                        "message": "Validated Successfully.",
                        "type":"success"
                    });
                    toastEvent.fire();                    
                    window.location.reload();
                } else{
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "ERROR!",
                        "message": retVal,
                        "mode": "sticky",
                        "type":"error"
                    });
                    toastEvent.fire();
                }
                
                //$A.get('e.force:refreshView').fire();
                $A.get("event.force:closeQuickAction").fire();               
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