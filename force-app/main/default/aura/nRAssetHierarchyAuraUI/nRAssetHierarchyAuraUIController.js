({
    doInit : function(component, event, helper) {
        var action = component.get("c.getAssetHierarchy");
        action.setParams({"currentAssetId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.items", response.getReturnValue());
            }
        });        
        $A.enqueueAction(action);
    },
    
    handleOnselect  : function(component,event,helper){
        /*alert("1:::::::::::::::::::"+event.getParam('name'));
        alert("2:::::::::::::::::::"+event.getParam('label'));
        alert("3:::::::::::::::::::"+event.getParam('expanded'));*/
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