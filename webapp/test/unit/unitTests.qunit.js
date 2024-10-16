/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsap/ui5_training/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
