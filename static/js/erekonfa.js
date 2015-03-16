var getQueryVariable = function(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }

    return (false);
};
countdown.setLabels(
    ' millissekund| sekund| minut| timme| dag| vecka| månad| år| decenium| sekel| millenium',
    ' millissekunder| sekunder| minuter| timmar| dagar| veckor| månader| år| décadas| séculos| milênios',
    ' och ',
    ', ',
    'kvar');

$(document).ready(function() {
    var name = getQueryVariable("namn") || "Engelberg";
    var start = getQueryVariable("start") || "2015-03-20 00:00:01";
    var slut = getQueryVariable("slut") || "2015-03-23 19:00:00";
    var startDate = moment(start);
    var stopDate = moment(slut);
    var today = moment(new Date());
    var timerId = countdown(startDate, function(ts) {
        $(".tid").text(ts + " kvar till " + name + "!");
    });

    if (today.isBefore(startDate)) {
        $(".konfa").text("Nope!");
    } else if (today.isAfter(stopDate)) {
        $(".konfa").text("Nope! den är över :(");
        $(".tid").hide();
    } else {
        $(".konfa").text("Jepp!");
        $(".tid").hide();
    }
});
