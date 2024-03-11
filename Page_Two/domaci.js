$(document).ready(function() {

    $.ajax({
        url: 'http://api.weatherapi.com/v1/current.json?',
        data: {
            key: 'eaac2ed3fb354158ab080556240503',
            q: 'Belgrade',
            aqi: 'yes',
        },
        success: function(response) {
            $('.city').text(response.location['name']);
            $('.temp').text(`${response.current['temp_c']}°C`)
            $('.cloud').attr('src', response.current.condition['icon'])
            $('.place').text(`${response.location['name']}, ${response.location['country']}`)
            $('.mood').text(response.current.condition['text'])
        }
    })

    $.ajax({
        url: 'http://api.weatherapi.com/v1/current.json?',
        data: {
            key: 'eaac2ed3fb354158ab080556240503',
            q: 'Niš',
            aqi: 'yes',
        },
        success: function(response) {
            $('.temp2').text(`${response.current['temp_c']}°C`)
            $('.cloud2').attr('src', response.current.condition['icon'])
            $('.place2').text(`${response.location['name']}, ${response.location['country']}`)
            $('.mood2').text(response.current.condition['text'])
        }
    })

    $.ajax({
        url: 'http://api.weatherapi.com/v1/current.json?',
        data: {
            key: 'eaac2ed3fb354158ab080556240503',
            q: 'Novi Sad',
            aqi: 'yes',
        },
        success: function(response) {
            $('.temp3').text(`${response.current['temp_c']}°C`)
            $('.cloud3').attr('src', response.current.condition['icon'])
            $('.place3').text(`${response.location['name']}, ${response.location['country']}`)
            $('.mood3').text(response.current.condition['text'])
        }
    })

})