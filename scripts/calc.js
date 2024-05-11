
$(document).ready(function() {
    // Получаем актуальный курс юаня при загрузке страницы
    $.ajax({
        url: 'https://www.cbr-xml-daily.ru/daily_json.js',
        dataType: 'json',
        success: function(data) {
            var yuanRate = data.Valute.CNY.Value;
            $('#yuanRate').text(yuanRate.toFixed(4));

            // Функция для перевода валют
            function convertCurrency() {
                var amount = parseFloat($('#amount').val());
                var fromCurrency = $('#fromCurrency').val();
                var toCurrency = $('#toCurrency').val();

                if (isNaN(amount)) {
                    $('#result').val('');
                    return;
                }

                if (fromCurrency === 'RUB' && toCurrency === 'CNY') {
                    var result = amount / yuanRate;
                    $('#result').val(result.toFixed(2));
                } else if (fromCurrency === 'CNY' && toCurrency === 'RUB') {
                    var result = amount * yuanRate;
                    $('#result').val(result.toFixed(2));
                }
            }

            // Обработчики событий для полей ввода
            $('#amount, #fromCurrency, #toCurrency').on('input', convertCurrency);
        }
    });
});