// PRODUTO
$(document).ready(function () {
	$('#fraseEntrega p').html(
		'<style>' +
		' .cep-invalido p > span{font-size: 12px !important; color: #000; font-weigth: unset !important;padding-left:6px;}' +
		'</style>' +
		'    <span class="help-arrow top-arrow"></span>	' +
		'        <span data-bind="visible: unavailableForDelivery" data-i18n="cart.unavailableForDelivery">E-commerce de produtos Herman Miller disponível apenas para os estados de SP e RJ.' +
		'        Para os demais estados entre em contato através dos seguintes canais:<br/>' +
		'        Tel (21) 2543-2136 | (21) 96772-5927 WhatssApp <br> <span style="color: #08c; font-weight: bold;">ecommerce@novoambiente.com</span>' +
		'    </span>')
});
