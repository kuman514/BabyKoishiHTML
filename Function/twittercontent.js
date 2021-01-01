function GenerateTweetItem (ref) {
    document.write("<blockquote class='twitter-tweet' lang='en'><a href='"
                    + ref + "'></a></blockquote>");
}

function GenerateTweets () {
    GenerateTweetItem("https://twitter.com/barororororon/status/1171698279173607424?s=20");
    GenerateTweetItem("https://twitter.com/beatmario/status/1159768551055454208?s=20");
}
