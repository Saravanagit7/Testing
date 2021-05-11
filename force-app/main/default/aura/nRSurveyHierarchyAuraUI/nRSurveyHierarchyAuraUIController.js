({
    doInit : function(component, event, helper) {
        var action = component.get("c.getSurveyHierarchy");
        action.setParams({"crntSurveyId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.items", response.getReturnValue());
            }
        });        
        $A.enqueueAction(action);
    },
    
    handleOnselect  : function(component,event,helper){
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId" : event.getParam('name'),
            "slideDevName" :"detail"
        });
        navEvt.fire();
    },

    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true);
    },

    hideSpinner : function(component,event,helper){
        component.set("v.Spinner", false);
    }
})