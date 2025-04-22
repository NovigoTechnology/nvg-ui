// Copyright (c) 2025, Novigo Technology and contributors
// For license information, please see license.txt
frappe.provide("heracles.utils");

$.extend(heracles.utils, {
	__: function (text, variable, context) {
		return frappe._(text, variable, context);
	},
});

// Exportar la función __
export const __ = heracles.utils.__;
