function GenerateListItem (ref, title) {
  document.write("<li><a onclick='changeArticle(\"" + ref + "\")'>" + title + "</a></li>")
}

function GenerateMenus () {
  GenerateListItem("article/WhoIsKoishi.html", "코이시는 누구인가요?")
  GenerateListItem("article/WhoIsBabyKoishi.html", "애기코이시는 어떤 코이시인가요?")
  GenerateListItem("article/HowToCare.html", "애기코이시 돌보는 방법")
  GenerateListItem("article/BabyKoishiArt.html", "애기코이시 아트")
}
