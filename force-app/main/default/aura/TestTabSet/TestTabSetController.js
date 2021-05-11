({
	 doInit : function(component, event, helper) {
		var comp1=component.get("v.Component1");
         var comp2=component.get("v.Component2");
         var comp3=component.get("v.Component3");
         
         component.set("v.search",comp1);
         component.set("v.profileMenu",comp2);
         component.set("v.navBar",comp3);
	}
})