function initModel() {
	var sUrl = "/MARTIN/goes/your/serviceurl/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}