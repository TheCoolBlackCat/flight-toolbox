var atis = {
    // getData: function(apt) {
    //     var apiURL = "https://www.pilotedge.net/atis/"+apt+".json";
    //     console.log(apiURL);
    //     $.getJSON(apiURL)
    //     .done(function(data) {
    //         console.log(data);
    //     });
    // }
    
    atisBox: document.getElementById("atisICAO"),

    fillDeparture: function() {
        const apt = document.getElementById("Departure").value;
        this.atisBox.value = apt;
    },
    fillArrival: function() {
        const apt = document.getElementById("Arrival").value;
        this.atisBox.value = apt;
    },
    fillAlternate: function() {
        const apt = document.getElementById("Alternate").value;
        this.atisBox.value = apt;
    }
};

// atis.getData("KSBP");