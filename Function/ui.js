function GenerateListItem (ref, title) {
    document.write("<li><a href='" + ref + "'>" + title + "</a></li>");
}

function GenerateMenus () {
    GenerateListItem("WhoIsKoishi.html", "코이시는 누구인가요?");
    GenerateListItem("WhoIsBabyKoishi.html", "애기코이시는 어떤 코이시인가요?");
    GenerateListItem("HowToCare.html", "애기코이시 돌보는 방법");
    GenerateListItem("BabyKoishiArt.html", "애기코이시 아트");
}

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
