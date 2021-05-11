({
    doInit : function(component, event, helper) {
        var action = component.get("c.getWODetails");
        action.setParams({"woId": component.get("v.recordId")});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                var woIns = response.getReturnValue();
                //if(woIns != null && (woIns.NR_Survey_Type__c != "Recon" && woIns.NR_Survey_Type__c != "All")){
                if(woIns != null && woIns.NR_Survey_Type__c != "Recon"){
                    if(woIns.Site_Surveys__r != null&& woIns.Site_Surveys__r.length > 0){
                        component.set("v.isReadyToClone", false);
                        var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "WARN!",
                            "message": "This Work Order has already Survey Record. Please check the related list for details.",
                            "mode": "sticky",
                            "type":"Error"
                        });
                        toastEvent.fire();
                        $A.get("event.force:closeQuickAction").fire();
                    } else{
                        component.set("v.isReadyToClone", true);
                        component.set("v.surveyType", woIns.NR_Survey_Type__c);
                        if(woIns.AssetId != null)
                            component.set("v.assetId", woIns.AssetId);
                        
                        /*var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "INFO!",
                            "message": "Cloning is in progress. You will received a mail once it will complete.",
                            "mode": "sticky",
                            "type":"Success"
                        });
                        toastEvent.fire();*/
                    }
                } else{
                    component.set("v.isReadyToClone", false);
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "WARN!",
                        "message": "Cloning is not applicable for Recon and All type Survey.",
                        "mode": "sticky",
                        "type":"Error"
                    });
                    toastEvent.fire();

                    $A.get("event.force:closeQuickAction").fire();
                }
                
                //Closing quick action.
                //$A.get("event.force:closeQuickAction").fire();
            }
        });
        
        $A.enqueueAction(action);
    },

    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true);
    },

    hideSpinner : function(component,event,helper){
        component.set("v.Spinner", false);
    },
    
    handleClose : function(component,event,helper){
        $A.get("event.force:closeQuickAction").fire();
    }
})