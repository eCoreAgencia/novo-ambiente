// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.



$(document).ready(function() {
    setTimeout(()=> {
      $('tr.item-unavailable span').html(
          '<style>' +
        ' .item-unavailable{font-size: 12px !important;font-weigth: unset !important;padding-left:6px;}'+
          '</style>'+
          '    <span class="help-arrow top-arrow"></span>	' +
          '        <span data-bind="visible: unavailableForDelivery" data-i18n="cart.unavailableForDelivery">E-commerce de produtos Herman Miller disponível apenas para os estados de SP e RJ.' +
          '        Para os demais estados entre em contato através dos seguintes canais:<br/>' +
          '        Tel (21) 2543-2136 | (21) 96772-5927 WhatssApp <br> <span style="color: #08c; font-weight: bold;">ecommerce@novoambiente.com</span>' +
          '    </span>');
      }, 5000);
  });