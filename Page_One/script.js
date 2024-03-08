//  °C
$(document).ready(function() {


    $.ajax({
        // http://api.weatherapi.com/v1/forecast.json?key=eaac2ed3fb354158ab080556240503 &q=Belgrade&days=7&aqi=yes&alerts=yes
        url: 'http://api.weatherapi.com/v1/forecast.json?',
        method: 'GET',
        data: {
            key: 'eaac2ed3fb354158ab080556240503',
            q: 'Belgrade',
            aqi: 'yes',
            days: 7,
            alerts: 'yes'
        },
        success: function(response) {

            if(response.current.condition['text'] == 'Sunny') {
                $('.backgroundImg').css({
                    'background-image': 'url(/img/6.jpg)'
                })
            } else if (response.current.condition['text'] == 'Partly cloudy') {
                $('.backgroundImg').css({
                    'background-image': 'url(/img/7.jpg)'
                })
            } else if (response.current.condition['text'] == 'Heavy rain' || response.current.condition['text'] == 'Moderate rain') {
                $('.backgroundImg').css({
                    'background-image': 'url(/img/8.jpg)'
                })
            }

            // trenutna vrednost izabranog grada
            $('#country').text(response.location['name']);
            $('#temperatureNumber').text(`${response.current['temp_c']}°C`);
            $('#weather').text(response.current.condition['text'])
            $('#lowPressure').text(`L:${response.current['pressure_in']}°`)
            $('#highPressure').text(`H:${response.current['pressure_mb']}°`)

            // prognoza po satu
            // 12 am 00
            $('.time1').text(`12AM`)
            $('.imgIcon1').attr('src', response.forecast.forecastday[0]['hour'][0].condition['icon'])
            $('.styledTemperature1').text(`${response.forecast.forecastday[0]['hour'][0]['temp_c']}°C`)


            // NOW
            $('.time2').text(`NOW`)
            $('.imgIcon2').attr('src', response.current.condition['icon'])
            $('.styledTemperature2').text(`${response.current['temp_c']}°C`)

            // 14PM
            $('.time3').text(`14PM`)
            $('.imgIcon3').attr('src', response.forecast.forecastday[0]['hour'][6].condition['icon'])
            $('.styledTemperature3').text(`${response.forecast.forecastday[0]['hour'][6]['temp_c']}°C`)

            // 20PM
            $('.time4').text(`20PM`)
            $('.imgIcon4').attr('src', response.forecast.forecastday[0]['hour'][18].condition['icon'])
            $('.styledTemperature4').text(`${response.forecast.forecastday[0]['hour'][18]['temp_c']}°C`)

            // 23PM
            $('.time5').text(`23PM`)
            $('.imgIcon5').attr('src', response.forecast.forecastday[0]['hour'][23].condition['icon'])
            $('.styledTemperature5').text(`${response.forecast.forecastday[0]['hour'][23]['temp_c']}°C`)
        },
    })


    $('#btn1').click(function() {
        $('.item2').css({
            'background-image': 'linear-gradient(#2E335A, #1C1B33)'
        })
        $.ajax({
            // http://api.weatherapi.com/v1/forecast.json?key=eaac2ed3fb354158ab080556240503 &q=Belgrade&days=7&aqi=yes&alerts=yes
            url: 'http://api.weatherapi.com/v1/forecast.json?',
            method: 'GET',
            data: {
                key: 'eaac2ed3fb354158ab080556240503',
                q: 'Belgrade',
                aqi: 'yes',
                days: 7,
                alerts: 'yes'
            },
            success: function(response) {
    
                // trenutna vrednost izabranog grada
                $('#country').text(response.location['name']);
                $('#temperatureNumber').text(`${response.current['temp_c']}°C`);
                $('#weather').text(response.current.condition['text'])
                $('#lowPressure').text(`L:${response.current['pressure_in']}°`)
                $('#highPressure').text(`H:${response.current['pressure_mb']}°`)
    
                // prognoza po satu
                // 12 am 00
                $('.time1').text(`12AM`)
                $('.imgIcon1').attr('src', response.forecast.forecastday[0]['hour'][0].condition['icon'])
                $('.styledTemperature1').text(`${response.forecast.forecastday[0]['hour'][0]['temp_c']}°C`)
    
    
                // NOW
                $('.time2').text(`NOW`)
                $('.imgIcon2').attr('src', response.current.condition['icon'])
                $('.styledTemperature2').text(`${response.current['temp_c']}°C`)
    
                // 14PM
                $('.time3').text(`14PM`)
                $('.imgIcon3').attr('src', response.forecast.forecastday[0]['hour'][6].condition['icon'])
                $('.styledTemperature3').text(`${response.forecast.forecastday[0]['hour'][6]['temp_c']}°C`)
    
                // 20PM
                $('.time4').text(`20PM`)
                $('.imgIcon4').attr('src', response.forecast.forecastday[0]['hour'][18].condition['icon'])
                $('.styledTemperature4').text(`${response.forecast.forecastday[0]['hour'][18]['temp_c']}°C`)
    
                // 23PM
                $('.time5').text(`23PM`)
                $('.imgIcon5').attr('src', response.forecast.forecastday[0]['hour'][23].condition['icon'])
                $('.styledTemperature5').text(`${response.forecast.forecastday[0]['hour'][23]['temp_c']}°C`)
            },
        })
    })


    $('#btn2').click(function() {
        $('.item2').css({
            'background-image': 'none'
        })
        $.ajax({
            url: 'http://api.weatherapi.com/v1/forecast.json?',
            method: 'GET',
            data: {
                key: 'eaac2ed3fb354158ab080556240503',
                q: 'Belgrade',
                aqi: 'yes',
                days: 7,
                alerts: 'yes'
            },
            success: function(response) {
                // console.log(response);
    
                // prognoza po danu
                // ponedeljak
                $('.time1').text(`THU`)
                $('.imgIcon1').attr('src', response.forecast.forecastday[0]['day'].condition['icon'])
                $('.styledTemperature1').text(`${response.forecast.forecastday[0]['day']['maxtemp_c']}°C`)
    
    
                // utorak
                $('.time2').text(`FRI`)
                $('.imgIcon2').attr('src', response.forecast.forecastday[1]['day'].condition['icon'])
                $('.styledTemperature2').text(`${response.forecast.forecastday[1]['day']['maxtemp_c']}°C`)
    
                // sreda
                $('.time3').text(`SAT`)
                $('.imgIcon3').attr('src', response.forecast.forecastday[2]['day'].condition['icon'])
                $('.styledTemperature3').text(`${response.forecast.forecastday[2]['day']['maxtemp_c']}°C`)
    
                // cetvrtak
                $('.time4').text(`SUN`)
                $('.imgIcon4').attr('src', response.forecast.forecastday[3]['day'].condition['icon'])
                $('.styledTemperature4').text(`${response.forecast.forecastday[3]['day']['maxtemp_c']}°C`)
    
                // petak
                $('.time5').text(`MON`)
                $('.imgIcon5').attr('src', response.forecast.forecastday[4]['day'].condition['icon'])
                $('.styledTemperature5').text(`${response.forecast.forecastday[4]['day']['maxtemp_c']}°C`)
            },
        })
    })
        

})