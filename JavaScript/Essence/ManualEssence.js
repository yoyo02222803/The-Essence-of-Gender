function ManualGrowthScale() {
    return 1 //(player.Height / 160)
} // I put this a function to make it easier to trial different formulas.


function EssenceCost(what) {
    return Math.min(2000, Math.round((30 * Math.pow(1.05, what.Size))));
};

function EssenceExtraCost(what) {
    return Math.round((30 * Math.pow(3, what.length)));
};

DocId("EssenceAuto").addEventListener("click", function () {
    Settings.EssenceAuto = Settings.EssenceAuto ? false : true;
    DocId("EssenceAuto").innerHTML = Settings.EssenceAuto ? "Essence Auto" : "Essence Manual";
    // Settings.BalanceParts = false;
});

DocId("GrowBalls").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    BallsButtons();
});
DocId("GrowPussy").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    PussyButtons();
});
DocId("GrowBreast").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    BreastButtons();
});
DocId("GrowDick").addEventListener("click", function () {
    DocId("EssenceStart").style.display = 'none';
    DocId("ManualOrgans").style.display = 'block';
    DickButtons();
});

function BreastButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var Extraboobs = ButtonButton(`Extra breasts ${EssenceExtraCost(player.Boobies)}F`);
    Extraboobs.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Boobies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Boob = {
                Size: 0,
                Type: player.Race,
                Milk: 0,
                MilkBaseRate: 0,
                MilkRate: 0,
                MilkMax: 0

            }
            player.Boobies.push(Boob);
        }
        BreastButtons();
    });
    ManualOrgans.appendChild(Extraboobs);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Boobies) {
        ManualOrgans.appendChild(BreastButton(e));
    }
}

function BreastButton(e) {
    var boob = ButtonButton(`${BoobSizeConvertor(OrganSize(e.Size))} ${EssenceCost(e)}Feminity`)
    boob.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            e.Size += 1 * ManualGrowthScale();
            e.MilkMax = Math.round(e.Size * 400);
        }
        BreastButtons();
    });
    return boob;
}

function PussyButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraPussy = ButtonButton(`Extra pussy ${EssenceExtraCost(player.Pussies)}F`);
    ExtraPussy.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Pussies);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            var Pussy = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Pussies.push(Pussy);
            PussyButtons();
        }
    });
    ManualOrgans.appendChild(ExtraPussy);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Pussies) {
        ManualOrgans.appendChild(PussyButton(e))
    };
}

function PussyButton(e) {
    var pussy = ButtonButton(`${CmToInch(OrganSize(e.Size))} ${EssenceCost(e)}Feminity`)
    pussy.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Femi >= cost) {
            player.Femi -= cost;
            e.Size += 1 * ManualGrowthScale();
            PussyButtons();
        }
    });
    return pussy;
}

function DickButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraDick = ButtonButton(`Extra dick ${EssenceExtraCost(player.Dicks)}M`);
    ExtraDick.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Dicks);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            var Dick = {
                Size: 5,
                Type: player.Race,
                Virgin: true
            }
            player.Dicks.push(Dick);
            DickButtons();
        }
    });
    ManualOrgans.appendChild(ExtraDick);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Dicks) {
        ManualOrgans.appendChild(DickButton(e));
    }
}

function DickButton(e) {
    var Dick = ButtonButton(`${CmToInch(OrganSize(e.Size))} ${EssenceCost(e)}Masculinity`);
    Dick.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            e.Size += 1 * ManualGrowthScale();
            DickButtons();
        }
    });
    return Dick;
}

function BallsButtons() {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    var ExtraBall = ButtonButton(`Extra Balls ${EssenceExtraCost(player.Balls)}M`);
    ExtraBall.addEventListener("click", function () {
        var cost = EssenceExtraCost(player.Balls);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            var Ball = {
                Size: 2,
                Type: player.Race,
                CumMax: 2,
                Cum: 0,
                CumRate: 0,
                CumBaseRate: 0.5
            }
            player.Balls.push(Ball);
            BallsButtons();
        }
    });
    ManualOrgans.appendChild(ExtraBall);
    ManualOrgans.appendChild(ManualOrgansClose());
    ManualOrgans.appendChild(document.createElement("br"));
    for (var e of player.Balls) {
        ManualOrgans.appendChild(BallsButton(e));
    }
}

function BallsButton(e) {
    var Ball = ButtonButton(`${CmToInch(OrganSize(e.Size))} ${EssenceCost(e)}Masculinity`)
    Ball.addEventListener("click", function () {
        var cost = EssenceCost(e);
        if (player.Masc >= cost) {
            player.Masc -= cost;
            e.Size += 1 * ManualGrowthScale();
            BallsButtons();
        }
    });
    return Ball;
}

function ManualOrgansClose() {
    var Close = ButtonButton("Back");
    Close.addEventListener("click", function () {
        DocId("EssenceStart").style.display = 'block';
        ManualOrgans.style.display = 'none';
        while (ManualOrgans.hasChildNodes()) {
            ManualOrgans.removeChild(ManualOrgans.firstChild);
        }
    });
    return Close;
}

DocId("EssenceOptionsLeave").addEventListener("click", function () {
    var ManualOrgans = DocId("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    DocId("EssenceStart").style.display = 'block';
    DocId("ManualGrowth").style.display = 'none';
    DisplayNone();
    DisplayGame();
});