sap.ui.controller("ntt.bodycote.zui_pp_wkcenter.ext.controller.ListReportExt", {
	onClickActionZC_WorkCenter1: function (oEvent) {
		var oNavigationController = this.extensionAPI.getNavigationController();
		//var oBindingContext = oEvent.getSource().getBindingContext();
		//var oObject = oBindingContext.getObject();
		var sOutbound = "toWorkCenter";
		oNavigationController.navigateExternal( sOutbound );
		// {	"anyParamName": WorkCenter// Note this is the proprty name from odata	});
		return true;
	}
});