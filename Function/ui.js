var Link = {
    "SetColor": function (color) {
        $('a').css("color", color);
    }
}

var Body = {
    "SetColor": function (color) {
        $('body').css("color", color);
    },
    "SetBackgroundColor": function (color) {
        $('body').css("backgroundColor", color);
    }
}

var Theme = {
    "isNight": false,
    "NightDayInvert": function (button) {
        if (this.isNight) {
            // if night theme -> day
            Body.SetColor('black');
            Body.SetBackgroundColor('white');
            Link.SetColor('#20CC20');
            this.isNight = false;
            button.value = "NIGHT";
        } else {
            // if day theme -> night
            Body.SetColor('white');
            Body.SetBackgroundColor('black');
            Link.SetColor('#00DD00');
            this.isNight = true;
            button.value = "DAY";
        }
    }
}
