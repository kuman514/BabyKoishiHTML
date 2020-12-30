function GenerateListItem (ref, title) {
    document.write("<li><a href='" + ref + "'>" + title + "</a></li>");
}

function GenerateMenus () {
    GenerateListItem("WhoIsKoishi.html", "코이시는 누구인가요?");
    GenerateListItem("WhoIsBabyKoishi.html", "애기코이시는 어떤 코이시인가요?");
    GenerateListItem("HowToCare.html", "애기코이시 돌보는 방법");
    GenerateListItem("BabyKoishiArt.html", "애기코이시 아트");
}
