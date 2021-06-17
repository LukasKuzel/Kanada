$(function () {
    let mesta = [];
    fetch('http://localhost:3000/api/towns')
        .then(response => { return response.json() })
        .then(json => { mesta = json; })
        .catch(function (error) {
            console.error('Chyba: \n', error);
        });


    $("#mesta").on('change', function(){
        $("#svg100 rect").toggle(500);
    });

    let puvodniBarva = '';

    $(function () {
        $("#svg100 path").on('mouseover', function () {
            if ($("#kraje:checked").val()) {
                puvodniBarva = $(this).css('fill');
                $(this).css('fill', 'red');
                $(this).popover({
                    'trigger': 'click',
                    'placement': 'left',
                    'offset': '5%, -105',
                    'title': $(this).find('title').text()
                });
            }
        });
    });
    $("#svg100 path").on('mouseout', function () {
        $(this).css('fill', puvodniBarva);
    });


    $(function () {
        let fillRect = $('rect').css('fill');


        $("#svg100 rect").on('click', function () {
            let id = $(this).attr('id');
            $("#svg100 rect").css('fill', fillRect);
            $(this).css({ 'fill': 'yellow' });
            let mesto = mesta.find(item => { return item.id == id });
            $('#info').fadeOut(1000, function () {
            $('#info').html(`<div class="pozadi"></div><div class="col-12"><h2 class="bg-primary">${mesto.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(mesto.peoples)} obvyvatel</small></h2></div><div class="col-2"><img src="img/${mesto.sign}" class="img-fluid"></div><div class"col-2"><img src="img/${mesto.flag}" class"img-fluid"></div><div class="col-10">${mesto.text}</div><div class="row"><div class="col-6"><img src="img/${mesto.photo}" class"img-fluid"></div></div></div></div></div>`)
            });
            $('#info').fadeIn(1000);
        });

    });

});