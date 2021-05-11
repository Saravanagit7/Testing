({
    doInit : function(component, event, helper) {
        helper.getImagesForLatestSurvey(component, event, helper);
    },
    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true);
    },

    hideSpinner : function(component,event,helper){
        component.set("v.Spinner", false);
    },
    redirectToSurvey  : function(component,event,helper){
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId" : component.get('v.surveyId'),
            "slideDevName" :"detail"
        });
        navEvt.fire();
    },
})