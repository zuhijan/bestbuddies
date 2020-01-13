function pay(amount, email) {
  var widget = new cp.CloudPayments();
  widget.charge({ // options
          publicId: 'test_api_00000000000000000000001',  //id из личного кабинета
          description: 'Пример оплаты (деньги сниматься не будут)', //назначение
          amount: amount, //сумма
          currency: 'RUB', //валюта
          invoiceId: '1234567', //номер заказа  (необязательно)
          accountId: email, //идентификатор плательщика (необязательно)
          skin: "classic", //дизайн виджета
          data: {
              myProp: 'myProp value' //произвольный набор параметров
          }
      },
      function (options) { // success
          //действие при успешной оплате
      },
      function (reason, options) { // fail
          //действие при неуспешной оплате
      });
};

export { pay };