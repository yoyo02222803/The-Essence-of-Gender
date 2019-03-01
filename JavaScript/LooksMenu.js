document.getElementById("Perks").addEventListener("click", function () {
    // Moved everything to the button to clean up the player var.
    DisplayNone();
    var div = document.getElementById("StatLevels");
    while (div.hasChildNodes()){
        div.removeChild(div.lastChild);
    }
    var h3 = document.createElement("h3");
    var h3Text = document.createTextNode("Stats:");
    h3.appendChild(h3Text);
    div.appendChild(h3);

    var RawStats = document.createElement("div");
    RawStats.style.display = 'inline-block';
    RawStats.style.marginRight = "5px";
    var Stats = document.createElement("div");
    Stats.style.display = 'inline-block';

    var RawH4 = document.createElement("h4");
    var RawH4Text = document.createTextNode("Raw:");
    RawH4.appendChild(RawH4Text);
    RawStats.appendChild(RawH4);

    var RawP = document.createElement("ol");
    RawP.innerHTML = "<li>Str: " + player.Str + "</li><li>End: " + player.End + "</li><li>Will: " + player.Will + 
    "</li><li>Charm: " + player.Charm + "</li><li>Int: " + player.Int + "</li><li>Sex skill: " + player.SexSkill +"</li>";
    RawStats.appendChild(RawP);

    var H4 = document.createElement("h4");
    var H4Text = document.createTextNode("Total:");
    H4.appendChild(H4Text);
    Stats.appendChild(H4);

    var P = document.createElement("ol");
    P.innerHTML = "<li>Str: " + TotalStr() + "</li><li>End: " + TotalEnd() + "</li><li>Will: " + TotalWill() + 
        "</li><li>Charm: " + TotalCharm() + "</li><li>Int: " + TotalInt() + "</li><li>Sex skill: " + TotalSexSkill() + "</li>";
    Stats.appendChild(P);

    div.appendChild(RawStats);
    div.appendChild(Stats);
    document.getElementById("Levels").style.display = 'block';

    var printPerks = "<h3>Perks:</h3><ol>";
    for (var i = 0; i < Object.keys(player.Perks).length; i++) {
        if (player.Perks[Object.keys(player.Perks)[i]].Count > 0) {
            printPerks += "<li>" + Object.keys(player.Perks)[i] + ": " + player.Perks[Object.keys(player.Perks)[i]].Count + "</li>";
        }
    }
    document.getElementById("PerkLevels").innerHTML = printPerks + "</ol>";

    var Races = "<h3>Race:</h3><ol>";
    var RaceTotal = 0;
    for (var e = 0; e < player.RaceEssence.length; e++) {
        RaceTotal += player.RaceEssence[e].amount;
    }
    if (RaceTotal < 100) {
        RaceTotal = 100;
    }
    for (var e = 0; e < player.RaceEssence.length; e++) {
        Races += "<li>" + player.RaceEssence[e].Race + ": " + Math.round(player.RaceEssence[e].amount / RaceTotal * 100) + "%  (" + player.RaceEssence[e].amount + ")</li>"
    }
    document.getElementById("RaceEssences").innerHTML = Races + "</ol>";

    if (Settings.Vore) {
        var printVore = "<h3>Vore:</h3><ol>";
        var v = player.Vore.VorePerks;
        if (Object.keys(v).length > 0) {
            for (var i = 0; i < Object.keys(v).length; i++) {
                printVore += "<li>"+ Object.keys(v)[i] + ": " + v[Object.keys(v)[i]].Count + "</li>";
            }
        }
        document.getElementById("VLevels").innerHTML = printVore + "</ol>";
    } else
        document.getElementById("VLevels").innerHTML = "";
});

document.getElementById("CloseLevel").addEventListener("click", function () {
    document.getElementById("Levels").style.display = 'none';
    DisplayGame();
});

document.getElementById("ExtraInfo").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("DetailedInfo").style.display = 'block';
    document.getElementById("FullRace").innerHTML = player.Race + " " + player.SecondRace + "<br><br>" + DetailedRaceDesc();
    document.getElementById("Pregnancy").innerHTML = "Times you have impregnated: " + Flags.Impregnations + "<br> Times you have been pregnant: " + Flags.Pregnations;
    document.getElementById("ExtraStats").innerHTML = "Virility: " + player.Virility + "<br>Fertility: " + player.Fertility + "<br>Essence drain: " + player.EssenceDrain +
        "<br>Give essence: " + player.GiveEssence + "<br> passive rest rate: " + player.RestRate;
});

document.getElementById("CloseExtra").addEventListener("click", function () {
    document.getElementById("DetailedInfo").style.display = 'none';
    DisplayGame();
});

document.getElementById("Looks").addEventListener("click", function () {
    DisplayNone();
    Settings.EssenceAuto ? EssenceCheck(player) : false;
    document.getElementById("ShowLooks").style.display = 'block';
    // Update for Looksmenu #Moved it here because there is no need to have it update every loop.
    document.getElementById("StatusMascFemi").innerHTML = "Masculinity: " + Math.round(player.Masc) + "<br> Femininity: " + Math.round(player.Femi);

    document.getElementById("looks2").innerHTML = "You are " + player.Name + " " + player.LastName + ", a " + CmToInch(Math.round(player.Height)) + " tall " + RaceDesc(player) + " " + Pronoun(CheckGender(player)) +
        ". Looking at yourself in a mirror you see " + player.Face.HairColor + " " + player.Face.HairLength + " hair, " + player.Face.Eyes + " eyes and " + player.Skincolor + " skin.";

    if (player.Pregnant.Babies.length > 0) {
        document.getElementById("looks2").innerHTML += (player.Pregnant.Babies[0].BabyAge < 30) ? "<br><br> You are pregnant" :
            "<br><br> You are " + Math.round(player.Pregnant.Babies[0].BabyAge / 30) + " months pregnant.";
    }
    document.getElementById("StatusFitness").innerHTML = "Age: " + player.Age + "years old<br>Weight: " + KgToPound(player.Weight) + "<br>" + "Fat: " + KgToPound(player.Fat) + "<br>Muscle: " + KgToPound(player.Muscle) + "<br>" + Fitness(player);
    document.getElementById("genitals2").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
    // End update Looksmenu
});

document.getElementById("CloseLooks").addEventListener("click", function () {
    document.getElementById("ShowLooks").style.display = 'none';
    DisplayGame();
});