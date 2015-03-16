$(document).ready(function() {
    countdown.setLabels(
        ' millissekund| sekund| minut| timme| dag| vecka| månad| år| decenium| sekel| millenium',
        ' millissekunder| sekunder| minuter| timmar| dagar| veckor| månader| år| décadas| séculos| milênios',
        ' och ',
        ', ',
        'kvar');
    var name = "Engelberg";
    var startDate = moment("2015-03-20 00:00:01");
    var today = moment(new Date());
    var timerId = countdown(startDate, function(ts) {
        $(".tid").text(ts + " kvar till " + name + "!");
    });
    if (today.isBefore(startDate)) {
        $(".konfa").text("Nope!");
    } else {
        window.clearInterval(timerId);
        $(".konfa").text("Jepp!");
    }
});
