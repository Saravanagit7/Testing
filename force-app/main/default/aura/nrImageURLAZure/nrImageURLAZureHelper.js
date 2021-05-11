({
	getImagesURL : function(component, event, helper) {
		var action = component.get('c.getSurveyImageURL');
        action.setCallback(this, function(response){
            /*<response.getState()> returns response status as SUCCESS/ERROR/INCOMPLETE etc.*/
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log("The Images: ", response.getReturnValue());
                var imgList = response.getReturnValue();               
                if(imgList.length == 0 || imgList === undefined){
                       console.log('Image List is Empty');
                } else {
                        console.log("=====ImageList="+imgList);                        
                        component.set("v.contents",imgList);                
                }
        	}
        });
        $A.enqueueAction(action);
	}
})