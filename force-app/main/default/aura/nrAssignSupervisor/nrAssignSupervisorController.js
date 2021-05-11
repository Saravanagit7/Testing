({
    doInit : function(component, event, helper) {
        helper.getSupervisorList(component, event, helper);
    },
    handleChange: function (component, event,helper) {
        helper.changeSelectedSupervisor(component, event);
    },
    handleSumbit: function (component, event,helper) {
        helper.assignSelectedSupervisor(component, event);
    },
    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true);
    },
    
    hideSpinner : function(component,event,helper){
        component.set("v.Spinner", false);
    }
})