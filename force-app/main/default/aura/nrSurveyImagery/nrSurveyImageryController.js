({
	doInit : function(component, event, helper) {
		helper.getSurveyImagesHelper(component, event, helper);
	},
    
    setAreaSelected : function(component, event, helper) {
		var onClickAnchorId = event.target.id;
        var indexOfAnchor = event.currentTarget.dataset.record;
        console.log('Index of Anchor: ',indexOfAnchor);
        console.log('Event Id: ',onClickAnchorId);
        var transformToSet = -(indexOfAnchor * 100);
        console.log('Transform To set : ',transformToSet);
        component.set('v.contentEventId',onClickAnchorId);
        component.set('v.isAreaSelected',true);
        component.set('v.varTabIndex',0);
        //component.set('v.setTransform',transformToSet +'%');
        component.set('v.setTransform',transformToSet);
        console.log('Transform value:',component.get('v.setTransform'));
        component.set('v.indexOfImage',indexOfAnchor);
	},
    setAriaPressed : function(component, event, helper) {
        var ariaPressedValue = component.get('v.isAriaPressed');
        component.set('v.isAriaPressed',!ariaPressedValue);
	},
    
    handleSave : function(component, event, helper) {
        helper.saveImageComment(component, event, helper);        
    },
    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true);
    },

    hideSpinner : function(component,event,helper){
        component.set("v.Spinner", false);
    }
})