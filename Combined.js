// player variable
var player = {
    Name: "",
    LastName: "",
    Skincolor: "",
    MaxHealth: 100,
    Health: 100,
    MaxWillHealth: 100,
    WillHealth: 100,
    Str: 10,
    Int: 10,
    Charm: 10,
    Will: 10,
    End: 10,
    SexSkill: 10,
    Orgasm: 0, // Need to get rid of
    Arousal: 0, // This to shouldn't be saved between game sessions.
    Gold: 0,
    Exp: 0,
    level: 1,
    SkillPoints: 0,
    PerkPoints: 0,
    RaceEssence: [
        Human = {
            Race: "Human",
            amount: 100
        }
    ],
    Race: "human",
    SecondRace: "human",
    isTaur: "false", // Testing, Not sure if useless or not
    OrganMod: {
        Dick: {
            Size: 0
        },
        Boobies: {
            Size: 0
        },
        Balls: {
            Size: 0
        },
        Pussy: {
            Size: 0
        },
        Anal: {
            Size: 0
        }
    },
    Dicks: [],
    Balls: [],
    Pussies: [],
    Boobies: [
        Boob = {
            Size: 1,
            Type: "human",
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 0
        }
    ],
    Anal: [
        Anal = {
            Size: 0,
            Type: "human",
            Virgin: true,
            stretch: 1,
        }
    ],
    Tails: [],
    Perks: {
        ExtraHealth: {
            Count: 0
        },
        ExtraWillHealth: {
            Count: 0
        },
        FasterRest: {
            Count: 0
        },
        StealMore: {
            Count: 0
        },
        GiveEssence: {
            Count: 0
        }
    },
    RestRate: 1,
    EssenceDrain: 5,
    GiveEssence: 0,
    Map: "Start",
    Area: "First",
    Quests: [],
    Weight: 60,
    Height: 160,
    Fat: 10,
    Muscle: 20,
    Masc: 0,
    Femi: 0,
    Fertility: 10,
    Virility: 5,
    Pregnant: {
        Status: false,
        Babies: []
    },
    Children: [],
    Inventory: [],
    Age: 18,
    Face: {
        Eyes: "brown",
        HairStyle: "curly",
        HairColor: "brown",
        HairLength: "shoulder-length"
    },
    Vore: {
        Level: 0,
        Exp: 0,
        VorePoints: 0,
        VorePerks: {},
        Stomach: [],
        StomachExp: 0,
        TaurStomach: [],
        TaurStomachExp: 0,
        Vagina: [],
        VaginaExp: 0,
        Balls: [],
        BallsExp: 0,
        Anal: [],
        AnalExp: 0,
        Breast: [],
        BreastExp: 0
    },
    cumGround: 0, // Need to get rid of
    MagicAffinity: {
        Fire: 0,
        Elemental: 0, // Fire, ice, water, stone, etc
        Restoration: 0 // Healing, returning to orginal shape/age.
    },
    Mana: 100,
    Spells: [ // Array so that I can add more without problems
    ],
    Blessings: {
        MountainShrine: {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            Malepreg: 0
        },
        ChimeraShrine: {
            Donated: 0,
            Points: 0
        }
    }
};

// House variable
var House = {
    Owned: false,
    BedLevel: 0,
    Dorm: 0,
    Kitchen: 0,
    Gym: 0,
    Brothel: 0,
    Dormmates: [],
    Portal: {
        Owned: false,
        Mountain: false,
        BlackMarket: false
    },
    Nursery: 0
};

// Flag variables
var Flags = {
    BanditLord: false,
    Impregnations: 0,
    Pregnations: 0,
    Date: {
        Year: 1200,
        Month: 0,
        Day: 0,
        Hour: 0
    },
    LastTrain: {
        Day: 0,
        Month: 0,
        Year: 0
    },
    FairiesBeaten: 0,
    FirstCityLike: 0
};

// Settings variables
var Settings = {
    BackColor: "#9099a7",
    MapColor: "#808080",
    TextColor: "#000000",
    BorderColor: "#B22222",
    TextFont: "Verdana, Geneva, sans-serif",
    FontSize: 1,
    MapPercent: 0.8,
    GiveEssence: "Both",
    Skip: false,
    Vore: false,
    ImgPack: false,
    EssenceAuto: true,
    // For testing animals
    // AnimalSpawn: true,
    LogLength: 100,
    Pronoun: {
        Status: false,
        Herm: "hermaphrodite",
        Male: "male",
        Female: "female",
        Doll: "doll",
        DickGirl: "dickgirl",
        CuntBoy: "cuntboy"
    },
    MaxLimbs: {
        MaxBoobs: 5,
        MaxVaginas: 5,
        MaxDicks: 5,
        MaxBalls: 5
    },
    Brothel: {
        ServeMasc: true,
        ServeFemi: true
    },
    Inch: false,
    Approx: false,
    VoreSettings: {
        StomachDigestion: true,
        CumTF: true,
        ChildTF: false,
        VCumDigestion: true,
        MilkTF: true,
        AnalDigestion: true,
        AbsorbEssence: true
    },
    BalanceParts: false,
    BalanceSettings: {
        StepPussy: 1500,
        StepBoobs: 1000,
        StepPenis: 1000,
        StepBalls: 1500
    },
    Cheats: {
        Enabled: false,
        Gold: false,
        Masc: false,
        Femi: false,
        Exp: false,
        VoreExp: false,
        FastTime: false
    },
    HighLightDoors: false
}

var Partners = {
    Succubus: {
        FirstName: "Lynnlea",
        LastName: "Qinienne",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0,
        Beaten: false
    },
    FarmOwner: {
        FirstName: "Teoviz",
        LastName: "",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0
    },
    TribeChief: {
        FirstName: "",
        LastName: "",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0
    },
    TribeChiefWife: {
        FirstName: "",
        LastName: "",
        Equal: false,
        Yours: false,
        Like: 0,
        Submit: 0
    }
}

// Start values for canvas
var medium = Math.ceil((document.documentElement.clientHeight / 20) * Settings.MapPercent) * 20;
var grid = (medium / 20);
var sprite = {
    x: grid,
    y: grid,
    Size: 1
};

// Start page
document.getElementById("GoToCharCreator").addEventListener("click", function () {
    CharCreator();
    document.getElementById("CharCreator").style.display = 'flex';
    document.getElementById("StartPage").style.display = 'none';
});

function CharCreator() { // No need have these active for players who use load.
    // Maybe a bit overkill but did it to train.
    const BeginButton = document.getElementById("Begin"),
        BackHomeButton = document.getElementById("BackHome"),
        StartAutoEssenceButton = document.getElementById("StartAutoEssence"),
        startgameButton = document.getElementById("startgame"),
        VoreStartButton = document.getElementById("VoreStart"),
        CharCreator = document.getElementById("CharCreator"),
        page2 = document.getElementById("page2");

    BeginButton.addEventListener("click", begin)
    BackHomeButton.addEventListener("click", BackHome)
    StartAutoEssenceButton.addEventListener("click", StartAutoEssence)
    startgameButton.addEventListener("click", startgame)
    VoreStartButton.addEventListener("click", VoreStart)

    function begin() {
        const form = document.forms.CreatePlayer.elements;

        console.log(form[0].value);
        CharCreator.style.display = 'none';
        page2.style.display = 'flex';
        player.Name = form[0].value;
        player.LastName = form[1].value;
        // Will remove hair and skincolor later, as I want customize player to be a part of the game.
        player.Face.HairColor = form[2].value;
        player.Skincolor = form[3].value;
        player.Spells.push(SpellDictLite.MinorHealing);
        document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
        document.getElementById("looks").innerHTML = "You are  " + player.Name + " " + player.LastName + ", a " + Math.round(player.Height) + "cm tall " + Pronoun(CheckGender(player)) +
            ", who weighs " + KgToPound(player.Weight) + ". Looking at yourself in a mirror you see " + player.Face.HairColor + " hair and " + player.Skincolor +
            " skin; hopefully the last time you see your body absent of any other details or personality.<br><br>For today, you will forge your own way in this world.";

        requestAnimationFrame(loop);
        DateEngine();
    };

    function BackHome() {
        CharCreator.style.display = 'none';
        document.getElementById("StartPage").style.display = 'grid';
        RemoveListerners();
    };

    function StartAutoEssence() {
        Settings.EssenceAuto = !Settings.EssenceAuto;
        StartAutoEssenceButton.value = "Auto TF " + Settings.EssenceAuto;
        if (Settings.BalanceParts) {
            Settings.BalanceParts = false;
        }
    };

    function startgame() {
        page2.style.display = 'none';
        DisplayGame();
        HemScale();
        RemoveListerners();
    };

    function VoreStart() {
        Settings.Vore = Settings.Vore ? false : true;
        VoreStartButton.value = "Vore " + Settings.Vore;
    };

    function RemoveListerners() {
        BeginButton.removeEventListener("click", begin);
        BackHomeButton.removeEventListener("click", BackHome)
        StartAutoEssenceButton.removeEventListener("click", StartAutoEssence)
        startgameButton.removeEventListener("click", startgame)
        VoreStartButton.removeEventListener("click", VoreStart)
    }
}



// Sets display to none used for menu buttons
function DisplayNone() {
    battle = true;
    const DisplayNoneArray = [
        "map", "optionpage", "ShowLooks", "LevelMenu", "LoadMenu", "SaveMenu", "PerkOptionsMenu",
        "ShowQuests", "DetailedInfo", "Levels", "ShowVore", "EssenceOptionsMenu",
        "PronounForm", "Inventory", "ChildrenMenu", "SpellBook"
    ].forEach(function (src) {
        document.getElementById(src).style.display = 'none';
    });
    if (window.innerHeight < 600) {
        const MobileNone = ["map", "buttons", "status", "EventLog"].forEach(function (src) {
            document.getElementById(src).style.display = 'none';
        })

    }
}

function DisplayGame() {
    battle = false;
    const DisplayGameArray = ["map", "buttons", "status", "EventLog"].forEach(function (src) {
        document.getElementById(src).style.display = 'block';
    });
    document.getElementById("EmptyButtons").style.display = 'none';
    if (MobileButtons) {
        document.getElementById("buttons").style.width = 18 + "%";
        document.getElementById("buttons").style.maxWidth = 260 + "px";
        document.getElementById("FirstButtons").style.display = 'none';
        document.getElementById("SecondButtons").style.display = 'none';
        MobileButtons = false;
    }
}
// More buttons for small screen height
document.getElementById("MoreButtons").addEventListener("click", function () {
    document.getElementById("FirstButtons").style.display = 'none';
    document.getElementById("SecondButtons").style.display = 'block';
});

document.getElementById("LessButtons").addEventListener("click", function () {
    document.getElementById("FirstButtons").style.display = 'block';
    document.getElementById("SecondButtons").style.display = 'none';
});

document.getElementById("Quests").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("ShowQuests").style.display = 'block';

    let questText = " ";
    for (var e of player.Quests) {
        let Tier = "";
        if (e.hasOwnProperty("Tier")) {
            Tier = "<br>Tier: " + e.Tier;
            if (e.Tier > 4) {
                Tier += " max";
            }
        }
        questText += `<div><h4>${e.Name}</h4>Completed: ${e.Completed} <br>Count:  ${e.Count} ${Tier} <br><br></div>`;
    }
    document.getElementById("QuestTexts").innerHTML = questText;
});

document.getElementById("QuestsLeave").addEventListener("click", function () {
    document.getElementById("ShowQuests").style.display = 'none';
    DisplayGame();
});

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function RandomString(array) {
    return array[Math.floor(Math.random() * array.length)];
}


var battle = false;

function Pronoun(gender) {
    switch (gender) {
        case "hermaphrodite":
            return Settings.Pronoun.Status ? Settings.Pronoun.Herm : gender;
        case "cuntboy":
            return Settings.Pronoun.Status ? Settings.Pronoun.CuntBoy : gender;
        case "male":
            return Settings.Pronoun.Status ? Settings.Pronoun.Male : gender;
        case "female":
            return Settings.Pronoun.Status ? Settings.Pronoun.Female : gender;
        case "dickgirl":
            return Settings.Pronoun.Status ? Settings.Pronoun.DickGirl : gender;
        case "doll":
            return Settings.Pronoun.Status ? Settings.Pronoun.Doll : gender;

    }
}

function CheckTitle(who) {
    // Titles to seperate a herm with 30femi and 2500masc from a herm with 200femi and 200masc 
    if (who.Masc < who.Femi) {
        return "feminine"
    } else if (who.Femi < who.Masc) {
        return "masculine" // Need more titles for like ultra masculine
    }
}

function CheckGender(who) {
    let gender;
    if (who.Dicks.length > 0 && who.Pussies.length > 0) {
        gender = "hermaphrodite";
    } else if (who.Dicks.length > 0 && Math.floor(who.Boobies.some(e => e.Size > 1))) {
        gender = "dickgirl";
    } else if (who.Dicks.length > 0) {
        gender = "male";
    } else if (who.Pussies.length > 0 && who.Boobies.some(e => e.Size < 1)) { // Check all rows of boobs
        gender = "cuntboy";
    } else if (who.Pussies.length > 0) {
        gender = "female";
    } else {
        gender = "doll"
    }
    return gender;
}
// Level System

function ExpCheck() {
    const MaxExp = 30 * Math.pow(1.05, player.level - 1);
    document.getElementById("StatusLevel").style.width = Math.min(100 * (player.Exp / MaxExp), 100) + "%";
    document.getElementById("LevelButton").style.display = (player.SkillPoints > 0 || player.PerkPoints > 0) ? 'inline-block' : 'none';

    if (player.Exp >= MaxExp) {
        player.Exp = player.Exp - MaxExp;
        player.level++;
        player.SkillPoints += 3;
        player.PerkPoints += 1;
        return;
    }
}

function StringCounter(array, string) {
    var counts = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === string) {
            counts++;
        }
    }
    return counts;
}

// function to update player & enemy stats, check if you win or lose and deal damage to player

var enemies = [];

document.getElementById("ImgPack").addEventListener("click", function () {
    switch (Settings.ImgPack) {
        case false:
            Settings.ImgPack = "Mode1";
            break;
        case "Mode1":
            Settings.ImgPack = "Mode2";
            break;
        case "Mode2":
            Settings.ImgPack = "Mode3";
            break;
        default:
            Settings.ImgPack = false;
            break;
    }
    document.getElementById("ImgPack").value = `Img pack: ${Settings.ImgPack}`;
});

function ImgChose(who, what, who2) {
    var myimg = new Image();
    var a = who.Race;
    var b = CheckGender(who);
    var c = what;
    var d = who2.Race;
    var e = CheckGender(who2);
    var source;
    switch (Settings.ImgPack) {
        case "Mode1":
            source = a + b + c;
            break;
        case "Mode2":
            source = d + e + c;
            break;
        case "Mode3":
            source = a + b + c + d + e;
            break;
        default:
            break;
    }
    console.log(source);
    myimg.src = "imgPack/" + source + ".jpg";
    myimg.onload = function () {
        document.getElementById("MyImg").src = "imgPack/" + source + ".jpg";
    }
    myimg.onerror = function () {
        document.getElementById("MyImg").src = "imgPack/Default.jpg";
    }
}

function checkImageExists(src, callback) {
    var myimg = new Image();
    myimg.src = "../imgPack/" + src + ".jpg";
    myimg.onload = function () {
        var a = true;
        return true;
    }
    myimg.onerror = function () {
        return false;
    }
}

//    document.getElementById("PlayerLooks").innerHTML = BoobLook(player) + "<br>" + PussyLook(player) + "<br>" + DickLook(player);
//    document.getElementById("EnemyLooks").innerHTML = BoobLook(enemies[EnemyIndex]) + "<br>" + PussyLook(enemies[EnemyIndex]) + "<br>" + DickLook(enemies[EnemyIndex]);

function HeightSystem(me, they) {
    let a;
    if (me.Height > they.Height) {
        if (me.Height * 0.95 < they.Height) {
            a = "Your opponent is almost as tall as you.";
        } else if (me.Height * 0.9 < they.Height) {
            a = "You are a head taller than your opponent.";
        } else if (me.Height * 0.8 < they.Height) {
            a = "You are taller than your opponent."
        } else if (me.Height * 0.7 < they.Height) {
            a = "You are taller than your opponent."
        } else if (me.Height * 0.6 < they.Height) {
            a = "You are taller than your opponent."
        } else if (me.Height * 0.5 < they.Height) {
            a = "You are taller than your opponent."
        } else if (me.Height * 0.4 < they.Height) {
            a = "Your opponent is short enough for their head to be almost be in level with your groin, how convenient.";
        } else if (me.Height * 0.3 < they.Height) {
            a = "Looking down at your opponent you see that they are almost tall enough to reach your groin.";
        } else if (me.Height * 0.2 < they.Height) {
            a = "Looking down at your opponent you see that they are just tall enough to reach over your knees.";
        } else if (me.Height * 0.1 < they.Height) {
            a = "Your opponent is so short, that they can't reach over your knees!";
        } else {
            a = "Your opponent is so small than you could hold them in one hand."
        }
    } else if (me.Height == they.Height) {
        a = "You and your opponent exact same height! What are the odds?"
    } else {
        if (they.Height * 0.95 < me.Height) {
            a = "You are almost as tall as your opponent."
        } else if (they.Height * 0.9 < me.Height) {
            a = "You are a head shorter than your opponent."
        } else {
            a = "Your opponent is taller than you."
        }
    }
    return a;
};

function SexColor(who, where) {
    const WS = document.getElementById(where + "Sex").style;
    switch (CheckGender(who)) {
        case "cuntboy":
        case "female":
            WS.backgroundColor = "rgba(255, 192, 203, 0.7)";
            WS.border = "5px ridge rgba(255, 192, 203)";
            break;
        case "dickgirl":
        case "male":
            WS.backgroundColor = "rgba(0, 0, 255, 0.3)";
            WS.border = "5px ridge rgba(0, 0, 255)";
            break;
        case "hermaphrodite":
            WS.backgroundColor = "rgba(128, 0, 128, 0.3)";
            WS.border = "5px ridge rgba(128, 0, 128)";
            break;
        case "doll":
            WS.backgroundColor = "rgba(245, 245, 220)";
            WS.border = "5px ridge rgb(201, 201, 182)";
            break;
    }
}

function HealthWillBars() {
    const health = document.getElementById("StatusHealth"),
        will = document.getElementById("StatusWillHealth");
    health.innerHTML = Math.round(player.Health);
    health.style.width = Math.min(100 * (player.Health / player.MaxHealth), 103) + "%";
    will.innerHTML = Math.round(player.WillHealth);
    will.style.width = Math.min(100 * (player.WillHealth / player.MaxWillHealth), 103) + "%";
    // Trial of making the bars darker the lower as health goes down.
    let red = 150 + 105 * (player.Health / player.MaxHealth),
        blue = 150 + 105 * (player.WillHealth / player.MaxWillHealth);
    health.style.backgroundColor = "rgb(" + red + ",0,0)";
    will.style.backgroundColor = "rgb(0,0," + blue + ")";
}

function HouseEngine() {
    if (House.Gym > 0) {
        var maxMuscle;
        for (var e = 0; e < House.Dormmates.length; e++) {
            maxMuscle = (House.Dormmates[e].Height / 3) * (House.Gym * 0.1);
            if (House.Dormmates[e].Fat > 1 && (House.Dormmates[e].Muscle < maxMuscle)) {
                House.Dormmates[e].Muscle += 0.1;
                House.Dormmates[e].Fat -= 0.4;
            }
        }
    }
    if (House.Kitchen > 0) {
        var maxFat;
        for (var e = 0; e < House.Dormmates.length; e++) {
            maxFat = (House.Dormmates[e].Height / 2) * (House.Kitchen * 0.1);
            if (House.Dormmates[e].Fat < maxFat) {
                House.Dormmates[e].Fat += 0.4;
            }
        }
    }
    if (House.Dormmates.length > 0) {
        player.Gold += 0.001 * House.Dormmates.length;
        for (var esf = 0; House.Dormmates.length > esf; esf++) {
            if (Settings.Brothel.ServeMasc && Settings.Brothel.ServeFemi) {
                House.Dormmates[esf].Masc += 0.05 * House.Brothel;
                House.Dormmates[esf].Femi += 0.05 * House.Brothel;
            } else if (Settings.Brothel.ServeFemi) {
                House.Dormmates[esf].Femi += 0.1 * House.Brothel;
            } else if (Settings.Brothel.ServeMasc) {
                House.Dormmates[esf].Masc += 0.1 * House.Brothel;
            }
        }
        if (House.hasOwnProperty("Brothel")) {
            player.Gold += 0.01 * House.Dormmates.length * House.Brothel;
        }
    }
};

function GenitalChange(what) {
    for (var e of player.Dicks) {
        e.Type = what;
    }
    for (var e = 0; e < player.Balls.length; e++) {
        player.Balls[e].Type = what;
    }
    for (var e = 0; e < player.Boobies.length; e++) {
        player.Boobies[e].Type = what;
    }
    for (var e = 0; e < player.Pussies.length; e++) {
        player.Pussies[e].Type = what;
    }
    for (var e = 0; e < player.Anal.length; e++) {
        player.Anal[e].Type = what;
    }
}

function addMilk(amount) {
    for (var b = 0; b < player.Boobies.length; b++) {
        if (player.Boobies[b].Milk <= player.Boobies[b].MilkMax)
            player.Boobies[b].Milk += Math.min(player.Boobies[b].MilkMax - player.Boobies[b].Milk, amount);
    }
}

function DateEngine() {
    setInterval(DateTracker, 1000);
}

function FoodEngine() {
    // health/will && fat burn
    /*  for (var e = 0; e < player.FoodStomach.length; e++) {
          player.FoodStomach[e].Kcal -= player.FoodStomach[e].KcalRate;
          player.Fat += player.FoodStomach[e].KcalRate;
          if (player.FoodStomach[e].Kcal < 0) {
              player.FoodStomach.splice(e, 1)
          }
      }*/
    player.Fat -= 0.0002;
}

function Npc(Name, RealName, X, Y, width, height, Color) {
    this.Name = Name,
        this.RealName = RealName,
        this.X = X,
        this.Y = Y,
        this.Width = width,
        this.Height = height,
        this.Color = Color
};

var EnemyIndex;

function BattleSetup(who) {
    document.getElementById("map").style.display = 'none';
    document.getElementById("Encounter").style.display = 'grid';
    document.getElementById("status").style.display = 'none';
    document.getElementById("buttons").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'none';
    document.getElementById("EventLog").style.display = 'none';
    document.getElementById("BattleText").innerHTML = null;
    document.getElementById("BattleText2").innerHTML = null;
    battle = true;
    who.Health = who.FullHealth;
    who.WillHealth = who.FullWillHealth;
    player.Mana = 100; // Remember to Change
    UpdateStats(true);
}



function Touching() {
    if (battle === true) {
        return;
    }

    for (let j in enemies) {
        if (sprite.x + grid * sprite.Size >= enemies[j].XPos && sprite.x < enemies[j].XPos + enemies[j].Size &&
            sprite.y + grid * sprite.Size >= enemies[j].YPos && sprite.y < enemies[j].YPos + enemies[j].Size) {
            if (mousedowner) {
                clearInterval(mFunction);
                mousedowner = false;
            }
            EnemyIndex = j;
            EssenceCheck(enemies[j]);
            enemies[j].XPos = RandomInt(2, 18) * grid;
            enemies[j].YPos = RandomInt(2, 18) * grid;
            BattleSetup(enemies[j]);
        }
    }
};

var fps = [];

function loop() {
    requestAnimationFrame(loop);
    var d = new Date();
    var n = d.getTime();
    fps.push(n);
    if (fps.length > 1) {
        var Thefps = fps[1] - fps[0];
        fps.pop();
        fps.pop();
    }

    document.getElementById("StatusArea").innerHTML = "Area: " + player.Area + " and Map: " + player.Map;
    player.MaxHealth = player.End * 10 + player.Perks.ExtraHealth.Count * 20;
    player.MaxWillHealth = player.Will * 10 + player.Perks.ExtraWillHealth.Count * 20;
    document.getElementById("StatusName").innerHTML = player.Name + " " + player.LastName;
    HealthWillBars();
    document.getElementById("StatusLevel").innerHTML = player.level;
    document.getElementById("Gold").innerHTML = "Gold: " + Math.floor(player.Gold);
    document.getElementById("Hunger").innerHTML = (player.Fat <= player.Height / 100) ? "You are starving" : null
    document.getElementById("EssenceTracker").innerHTML = "Masculinity: " + Math.round(player.Masc) + " and Femininity: " + Math.round(player.Femi);
    document.getElementById("BlackMarketEssence").innerHTML = "Masculinity: " + Math.round(player.Masc) + " and Femininity: " + Math.round(player.Femi);
    document.getElementById("VoreLooks").style.display = Settings.Vore ? 'inline-block' : 'none'
    ExpCheck();

    if (!battle) {
        var startarea = document.getElementById("hem");
        var ctx = startarea.getContext("2d");
        startarea.width = medium;
        startarea.height = medium;

        if (Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20 !== medium) {
            HemScale();
        };
        CurrentMap();
        Settings.Vore ? VoreEngine() : false; // However it does shrink the size of code quite a lot... idk
        Settings.Cheats.Enabled ? CheatEngine() : false;
        (enemies.length > 0) ? PrintEnemies(): false;
        ctx.fillStyle = "BlueViolet";
        ctx.fillRect(sprite.x, sprite.y, grid * sprite.Size, grid * sprite.Size);
        Laglimiter++;
        if (Laglimiter % 80 == 0) {
            Laglimiter = 0;
            Settings.EssenceAuto ? EssenceCheck(player) : false;
            EssenceBalance();
            player.Fat = Math.max(0.1, player.Fat);
            player.Muscle = Math.max(1, player.Muscle);
            player.Weight = Math.round(player.Height * 0.15 + player.Fat + player.Muscle);
            player.Height = Math.max(5, player.Height);
            player.Health = Math.max(1, player.Health);
            player.WillHealth = Math.max(1, player.WillHealth);

            sprite.Size = 1; //Math.min(0.8 + player.Height / 320, 1.2);
            if (typeof Thefps === "number") { // Stop typing NaN but I still need to figure out why NaN in first place
                document.getElementById("Fps").innerHTML = Math.round(1000 / Thefps) + "fps";
            }
        }
    };
};
var Laglimiter = 0;


(function () {
    var a = RandomInt(1, 6);
    a === 1 ? console.log("One") : a === 2 ? console.log("Two") : a === 3 ? console.log("Three") :
        a === 4 ? console.log("Four") : a === 5 ? console.log("Five") : console.log("Six");
    var b = [1, 2, 3],
        c = [4, 5, 6],
        d = [...b, ...c];
    console.log(d);
    setTimeout(() => {
        console.log("Hello")
    }, 2000)
    setTimeout(() => {
        console.log("Future")
    }, 4000);
})()
function AfterBattleButtons(Sex = true, Vored = false) {
    const div = document.getElementById("SexButtons");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }

    // Main Collumns 
    const Mouth = document.createElement("div"),
        Pussy = document.createElement("div"),
        Dick = document.createElement("div"),
        Anal = document.createElement("div"),
        Breast = document.createElement("div"),
        Siphon = document.createElement("div"),
        Right = document.createElement("div"); // Container for stop & capture

    const DickOne = document.createElement("div"),
        DickTwo = document.createElement("div");
    Dick.appendChild(DickOne);
    Dick.appendChild(DickTwo);
    const PlayerMaxOrgasm = Math.round(player.End / 8),
        ee = enemies[EnemyIndex];
    if (Sex) {
        if (PlayerMaxOrgasm >= player.Orgasm) {
            const GetRimjob = InputButton("Receive rimjob"),
                GiveRimjob = InputButton("Give rimjob");
            GetRimjob.addEventListener("click", SexActGetRimjob);
            Anal.appendChild(GetRimjob);

            GiveRimjob.addEventListener("click", SexActGiveRimjob);
            Anal.appendChild(GiveRimjob);

            if (ee.Pussies.length > 0) {
                const GiveCunnilingus = InputButton("Give Cunnilingus");
                GiveCunnilingus.addEventListener("click", SexActGiveCunnilingus)
                Mouth.appendChild(GiveCunnilingus);

                if (player.Pussies.length > 0) {
                    const Scissoring = InputButton("Scissoring");
                    Scissoring.addEventListener("click", SexActScissoring);
                    Pussy.appendChild(Scissoring);
                }

            }
            if (ee.Dicks.length > 0) {
                const GiveBlowjob = InputButton("Give blowjob");
                GiveBlowjob.addEventListener("click", SexActGiveBlowjob);
                Mouth.appendChild(GiveBlowjob);

                if (player.Pussies.length > 0) {
                    const RideCowgirl = InputButton("Ride cowgirl");
                    RideCowgirl.addEventListener("click", SexActRideCowgirl);
                    Pussy.appendChild(RideCowgirl);
                }
            }
            if (player.Pussies.length > 0) {
                const GetCunnilingus = InputButton("Receive cunnilingus");
                GetCunnilingus.addEventListener("click", SexActGetCunnilingus);
                Mouth.appendChild(GetCunnilingus);

                if (ee.Dicks.length > 1) {
                    // Dual pen old value Get dual penetrated
                    const DualFuckt = InputButton("");
                    Pussy.appendChild(DualFuckt);
                }

                if (ee.Height * 9 < player.Height) {
                    const Insertion = InputButton("Insertion");
                    Insertion.addEventListener("click", SexActInsertion);
                    Pussy.appendChild(Insertion);
                }


            }
            if (player.Dicks.length > 0) {
                const GetBlowjob = InputButton("Receive blowjob");
                GetBlowjob.addEventListener("click", SexActGetBlowjob);
                DickOne.appendChild(GetBlowjob);

                if (player.Dicks.length > 1 && ee.Pussies.length > 0) {
                    const DualPen = InputButton("");
                    DualPen.addEventListener("click", SexActDualPen);
                    DickTwo.appendChild(DualPen);
                    // Dual pen
                }
                if (player.Dicks.length > 2 && ee.Pussies.length > 1) {
                    // Multi pen
                    const MultiPen = InputButton("");
                    MultiPen.addEventListener("click", SexActMultiPen);
                    DickTwo.appendChild(MultiPen);
                }

                if (ee.Pussies.length > 0) {
                    const Missionary = InputButton("Missionary"),
                        DoggyStyle = InputButton("Doggy style");

                    Missionary.addEventListener("click", SexActMissionary);
                    DickOne.appendChild(Missionary);

                    DoggyStyle.addEventListener("click", SexActDoggyStyle);
                    DickOne.appendChild(DoggyStyle);
                }

                const DoggyStyleAnal = InputButton("Anal doggy style");
                DoggyStyleAnal.addEventListener("click", SexActDoggyStyleAnal);
                DickTwo.appendChild(DoggyStyleAnal);

            }
            let Milktotal = 0;
            for (let b = 0; b < player.Boobies.length; b++) {
                Milktotal += player.Boobies[b].Milk;
            }
            if (Milktotal > 100) {
                const BreastFeed = InputButton("Breast feed");
                BreastFeed.addEventListener("click", SexActBreastFeed);
                Breast.appendChild(BreastFeed);
            }
            let dickCount = DickOne.childElementCount + DickTwo.childElementCount
            if (window.innerHeight < 800 && dickCount > 3) {
                DickTwo.style.display = "none";
                const DickAction = InputButton("More");
                DickAction.addEventListener("click", function () {
                    if (DickTwo.style.display === "none") {
                        DickOne.style.display = "none";
                        DickTwo.style.display = "block";
                    } else {
                        DickOne.style.display = "block";
                        DickTwo.style.display = "none";
                    }
                });
                Dick.appendChild(DickAction);
            }
        }
    }
    const Stop = InputButton("Stop sex");
    Dungeon ? Stop.addEventListener("click", DungeonStopButton) :
        Stop.addEventListener("click", StopSexButton);
    Right.appendChild(Stop);
    if (!Vored) {
        if (ee.Orgasm > 4 && House.Dormmates.length < (House.Dorm * 3)) {
            const Capture = InputButton("Take them home");
            Dungeon ? Capture.addEventListener("click", DungeonCapture) :
                Capture.addEventListener("click", SexActCapture);
            Right.appendChild(Capture);
        }
        if (player.SessionOrgasm > 0 && player.Perks.GiveEssence.Count > 0) {
            if (player.Masc > 0) {
                const InjectM = InputButton("Infuse masculinity");
                InjectM.addEventListener("click", DrainInjectM);
                Siphon.appendChild(InjectM);
            } else { //filler button to stop player from missclicking
                const InjectM = InputButton("Empty");
                Siphon.appendChild(InjectM);
            }
            if (player.Femi > 0) {
                const InjectF = InputButton("Infuse femininity");
                InjectF.addEventListener("click", DrainInjectF);
                Siphon.appendChild(InjectF);
            } else {
                const InjectF = InputButton("Empty");
                Siphon.appendChild(InjectF);
            }

        }
        if (ee.SessionOrgasm > 0) {
            if (ee.Masc > 0) {
                const DrainM = InputButton("Siphon masculinity");
                DrainM.addEventListener("click", DrainDrainM);
                Siphon.appendChild(DrainM);
            } else {
                const DrainM = InputButton("Drained");
                Siphon.appendChild(DrainM);
            }

            if (ee.Femi > 0) {
                const DrainF = InputButton("Siphon femininity");
                DrainF.addEventListener("click", DrainDrainF);
                Siphon.appendChild(DrainF);
            } else {
                const DrainF = InputButton("Drained");
                Siphon.appendChild(DrainF);
            }
        }
        if (Settings.Vore) {
            if (StomachCapacity() > enemies[EnemyIndex].Weight) {
                const OralVore = InputButton("Eat them");
                OralVore.addEventListener("click", VoreActionsOralVore);
                Mouth.appendChild(OralVore);
            }
            if (VaginaCapacity() > enemies[EnemyIndex].Weight) {
                const Unbirth = InputButton("Unbirth");
                Unbirth.addEventListener("click", VoreActionsUnbirth);
                Pussy.appendChild(Unbirth);
            }
            if (BallsCapacity() > enemies[EnemyIndex].Weight) {
                const CockVore = InputButton("Cock vore");
                CockVore.addEventListener("click", VoreActionsCockVore);
                DickOne.appendChild(CockVore);
            }
            if (BreastCapacity() > enemies[EnemyIndex].Weight) {
                const BreastVore = InputButton("Breast vore");
                BreastVore.addEventListener("click", VoreActionsBreastVore);
                Breast.appendChild(BreastVore);
            }
            if (AnalCapacity() > enemies[EnemyIndex].Weight) {
                const AnalVore = InputButton("Anal vore");
                AnalVore.addEventListener("click", VoreActionsAnalVore);
                Anal.appendChild(AnalVore);
            }
        }
    }
    const Frag = document.createDocumentFragment(),
        divs = [Mouth, Pussy, Dick, Anal, Breast, Siphon, Right].forEach(function (div) {
            Frag.appendChild(div);
        });
    div.appendChild(Frag);

}
function AgeEngine() {
    var AgelimitMod = 1;

    switch (player.Race) {
        case "human":
            if (player.Age > 100 + AgelimitMod) {
                return "Dead";
            } else if (player.Age > 90) {
                return "old";
            } else {
                return "";
            }
        case "elf":
            if (player.Age > 90) {
                return "young adult";
            } else {
                return "";
            }
        case "equine":
            if (player.Age > 30) {
                return "Dead";
                /* probably to short, but could work with option to contuine 
                               with heir or means prolong life */
            } else if (player.Age > 25) {
                return "old";
            } else if (player.Age > 20) {
                return "adult";
            } else {
                return "young adult";
            }
    }
}
// Ideas for blessing to add later to unlock
var Blessings = {
    Incubator: 0, /* add behind baby age at preg engine to change time before birth have like a quest to get it*/
    Breeder: 0, // same but for dorm servants
    TwinsChance: 0 // remake impregnation so you can have twins or more
}

// Ideas for curses player can get stuck with until finding way to get rid of
var Curses = {
    Hunger: 0, // increase fatburn to force player into overeating to stop starving
    Sub: 0, // Gives player a random chance to just lose a battle
    Race: "Race" // Makes it so player contantly changes to a race
}
function BarFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Local bar");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.innerHTML = "The local tavern is small and cozy, quite calm for being a tavern but not that" +
        "surprising given the small number of patrons. The smell from the kitchen is very appetizing, maybe you should buy a meal?"
    p.classList.add("TextBox");
    div.appendChild(p);

    var ShopMenu = document.createElement("div");
    ShopMenu.addEventListener("mouseover", function(e) {
        p.innerHTML = e.target.title;
    })

    var input1 = new InputButton("Rest 5g", "Spend the night to recover health and will")
    input1.addEventListener("click", function () {
        if (player.Gold >= 5 && (player.Health < player.MaxHealth || player.WillHealth < player.MaxWillHealth)) {
            player.Gold -= 5;
            player.Health = player.MaxHealth;
            player.WillHealth = player.MaxWillHealth;
            Flags.Date.Day++;
            document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input1);

    var input2 = new InputButton("Medium meal 10g","+2kg fat")
    input2.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 2;
            /*  var BarMeal = {
                  Kcal: 1200,
                  KcalRate: 0.05
              }
              player.FoodStomach.pop();
              player.FoodStomach.push(BarMeal); */
            player.Gold -= 10;
            player.Health += 20;
            player.WillHealth += 20;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input2);
    var br = document.createElement("br");
    ShopMenu.appendChild(br);

    var input3 = new InputButton("Large meal 30g","+4kg fat");
    input3.addEventListener("click", function () {
        if (player.Gold > 30) {
            player.Fat += 4;
            /*    var BarMeal = {
                    Kcal: 1800,
                    KcalRate: 0.1
                }
                player.FoodStomach.pop();
                player.FoodStomach.push(BarMeal); */
            player.Gold -= 30;
            player.Health += 50;
            player.WillHealth += 50;
            return;
        } else {
            return;
        }
    });
    ShopMenu.appendChild(input3);

    var input4 = new InputButton("Buffet 50g","+8kg fat");
    input4.addEventListener("click", function () {
        if (player.Gold > 10) {
            player.Fat += 8;
            /*    var BarMeal = {
                    Kcal: 3200,
                    KcalRate: 0.2
                }
                player.FoodStomach.pop();
                player.FoodStomach.push(BarMeal); */
            player.Gold -= 50;
            player.Health += 70;
            player.WillHealth += 70;
            return;
        }
    });
    ShopMenu.appendChild(input4);
    div.appendChild(ShopMenu);

    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(ShopMenu);
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function BarberFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Barber");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var DyeCon = document.createElement("div");
    var CutCon = document.createElement("div");

    function DyeButton(e, p) {
        var dye = document.createElement("input");
        dye.setAttribute("type", "button");
        dye.setAttribute("value", e);
        dye.addEventListener("click", function () {
            player.Face.HairColor = e.toLowerCase()
            p.innerHTML = "Looking into the barbers mirror you see your hair dying is complete and your hair is now " + player.Face.HairColor;
        });
        dye.addEventListener("mouseover", function () {
            p.innerHTML = e + " dye";
        })
        return dye;
    }

    function CutButton(e) {
        var cut = document.createElement("input");
        cut.setAttribute("type", "button");
        cut.setAttribute("value", e);
        cut.addEventListener("click", function () {
            console.log(e);
        });
        cut.addEventListener("mouseover", function () {
            console.log("Cut " + e);
        })
        return cut;
    }
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "Dye");
    input1.addEventListener("click", function () {
        if (DyeCon.hasChildNodes()) {
            while (DyeCon.hasChildNodes()) {
                DyeCon.removeChild(DyeCon.firstChild);
            };
        } else {
            while (CutCon.hasChildNodes()) {
                CutCon.removeChild(CutCon.firstChild);
            };
            var Dyes = ["Red", "Blonde", "Dark brown", "Black", "Pink", "Purple"];
            for (var e of Dyes) {
                DyeCon.appendChild(DyeButton(e, p));
            };
        }
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "Cut");
    input2.addEventListener("click", function () {
        if (CutCon.hasChildNodes()) {
            while (CutCon.hasChildNodes()) {
                CutCon.removeChild(CutCon.firstChild);
            };
        } else {
            while (DyeCon.hasChildNodes()) {
                DyeCon.removeChild(DyeCon.firstChild);
            };
            var Cuts = ["Shaved", "Buzz cut", "Short", "Medium", "Ear length", "Chin length", "Shoulder length",
                "Armpit length", "Mid-back length", "Hip length", "Knee length", "Floor length"
            ];
            for (var e of Cuts) {
                CutCon.appendChild(CutButton(e, p));
            };
        }
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    var br = document.createElement("br");
    div.appendChild(br);
    div.appendChild(DyeCon);
    div.appendChild(CutCon);

    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
    // Black market code
    document.getElementById("SellLimbs").addEventListener("click", function () {
        document.getElementById("LimbSale").style.display = 'block';
        document.getElementById("SellLimbs").style.display = 'none';
        LimbSale();
    });

    function LimbSale() {
        var SellDicks = [];
        for (var e = 0; e < player.Dicks.length; e++) {
            var temp = "<button onclick=\"SellDicks(" + e + "); LimbSale()\">Dick: " + (e + 1) + ", " + CmToInch(player.Dicks[e].Size) + "</button>";
            SellDicks += temp;
        }
        document.getElementById("SellDicks").innerHTML = SellDicks;
        var SellDickSize = [];
        for (var e = 0; e < player.Dicks.length; e++) {
            var temp = "<button onclick=\"SellDickSize(" + e + "); LimbSale()\">Dick: " + (e + 1) + ", " + CmToInch(player.Dicks[e].Size) + "</button>";
            SellDickSize += temp;
        }
        document.getElementById("SellDickSize").innerHTML = SellDickSize;

        var SellBalls = [];
        for (var e = 0; e < player.Balls.length; e++) {
            var temp = "<button onclick=\"SellBalls(" + e + "); LimbSale()\">Ball: " + (e + 1) + ", " + CmToInch(player.Balls[e].Size) + "</button>";
            SellBalls += temp;
        }
        document.getElementById("SellBalls").innerHTML = SellBalls;
        var SellBallSize = [];
        for (var e = 0; e < player.Balls.length; e++) {
            var temp = "<button onclick=\"SellBallSize(" + e + "); LimbSale()\">Ball: " + (e + 1) + ", " + CmToInch(player.Balls[e].Size) + "</button>";
            SellBallSize += temp;
        }
        document.getElementById("SellBallSize").innerHTML = SellBallSize;

        var SellBreasts = [];
        for (var e = 1; e < player.Boobies.length; e++) {
            var temp = "<button onclick=\"SellBreasts(" + e + "); LimbSale()\">Boobs: " + (e + 1) + ", " + CmToInch(player.Boobies[e].Size) + "</button>";
            SellBreasts += temp;
        }
        document.getElementById("SellBreasts").innerHTML = SellBreasts;
        var SellBreastSize = [];
        for (var e = 0; e < player.Boobies.length; e++) {
            var temp = "<button onclick=\"SellBreastSize(" + e + "); LimbSale()\">Boobs: " + (e + 1) + ", " + CmToInch(player.Boobies[e].Size) + "</button>";
            SellBreastSize += temp;
        }
        document.getElementById("SellBreastSize").innerHTML = SellBreastSize;

        var SellVaginas = [];
        for (var e = 0; e < player.Pussies.length; e++) {
            var temp = "<button onclick=\"SellVaginas(" + e + "); LimbSale()\">Pussy: " + (e + 1) + ", " + CmToInch(player.Pussies[e].Size) + "</button>";
            SellVaginas += temp;
        }
        document.getElementById("SellVaginas").innerHTML = SellVaginas;
        var SellVaginaSize = [];
        for (var e = 0; e < player.Pussies.length; e++) {
            var temp = "<button onclick=\"SellVaginaSize(" + e + "); LimbSale()\">Pussy: " + (e + 1) + ", " + CmToInch(player.Pussies[e].Size) + "</button>";
            SellVaginaSize += temp;
        }
        document.getElementById("SellVaginaSize").innerHTML = SellVaginaSize;
    }

    function SellDicks(e) {
        player.Gold += player.Dicks[e].Size * 30;
        player.Dicks.splice(e, 1);
    }

    function SellDickSize(e) {
        if (player.Dicks[e].Size - 1 < 1) {
            player.Dicks[e].Size = 1;
        } else {
            player.Gold += 25;
            player.Dicks[e].Size--;
        }
    }

    function SellBalls(e) {
        player.Gold += player.Balls[e].Size * 30;
        player.Balls.splice(e, 1);
    }

    function SellBallSize(e) {
        if (player.Balls[e].Size - 1 < 1) {
            player.Balls[e].Size = 1;
        } else {
            player.Gold += 25;
            player.Balls[e].Size--;
        }
    }

    function SellBreasts(e) {
        player.Gold += player.Boobies[e].Size * 30;
        player.Boobies.splice(e, 1);
    }

    function SellBreastSize(e) {
        if (player.Boobies[e].Size - 1 < 0) {
            player.Boobies[e].Size = 0;
        } else {
            player.Gold += 25;
            player.Boobies[e].Size--;
        }
    }

    function SellVaginas(e) {
        player.Gold += player.Pussies[e].Size * 30;
        player.Pussies.splice(e, 1);
    }

    function SellVaginaSize(e) {
        if (player.Pussies[e].Size - 1 < 1) {
            player.Pussies[e].Size = 1;
        } else {
            player.Gold += 25;
            player.Pussies[e].Size--;
        }
    }
    document.getElementById("SellFemininity").addEventListener("click", function () {
        if (player.Femi >= 50) {
            player.Femi -= 50;
            player.Gold += 100;
        } else {
            player.Gold += Math.max(0, player.Femi);
            player.Femi = 0;
        }
    });
    document.getElementById("SellMasculinity").addEventListener("click", function () {
        if (player.Masc >= 50) {
            player.Masc -= 50;
            player.Gold += 100;
        } else {
            player.Gold += Math.max(0, player.Masc);
            player.Masc = 0;
        }
    });
    document.getElementById("BlackMarket").addEventListener("mouseover", function (e) {
        document.getElementById("BlackMarketText").innerHTML = e.target.title;
    });
    document.getElementById("BlackMarketWhy").addEventListener("click", function () {
        document.getElementById("BlackMarketText").innerHTML = "Yeah we are only buying essence here, you see we have a contract with guys in the capital where we can sell for a lot more to nobles.  Nobles you might ask aren’t they the ones who preach about how you should only have as much essence you can conquer!" +
            " The thing is though while they say trading essence are forbidden and for the weak, the rich don’t follow the rules they only pretend to in order to maintain their image. ";
    });
    document.getElementById("LeaveBlackMarket").addEventListener("click", function () {
        document.getElementById("LimbSale").style.display = 'none';
        document.getElementById("SellLimbs").style.display = 'inline-block';
    });
    // End Black market

document.getElementById("SacRaceEss").addEventListener("click", function () {
    var SacMenu = document.getElementById("SacRaceEssMenu");
    if (SacMenu.style.display === 'grid') {
        SacMenu.style.display = 'none';
    } else {
        SacMenu.style.display = 'grid';
        SacRaces();
    }
});

function SacRaces(amount = 50) {
    var SacMenu = document.getElementById("SacRaceEssMenu");
    var SacFrag = document.createDocumentFragment();
    while (SacMenu.hasChildNodes()) {
        SacMenu.removeChild(SacMenu.firstChild);
    }

    var Sliderdiv = document.createElement("DIV");

    var SliderOut = document.createElement("P");
    SliderOut.innerHTML = "Donate: " + amount;
    Sliderdiv.appendChild(SliderOut);

    var Slider = document.createElement("input");
    Slider.setAttribute("type", "range");
    Slider.min = 0;
    Slider.max = 1000;
    Slider.value = amount;
    Slider.oninput = function () {
        SliderOut.innerHTML = "Donate: " + this.value;
    }
    Slider.onmouseup = function () {
        SacRaces(this.value);
    }
    Slider.ontouchend = function () {
        SacRaces(this.value);
    }
    Sliderdiv.appendChild(Slider);
    SacFrag.appendChild(Sliderdiv);

    var Condiv = document.createElement("DIV");
    Condiv.setAttribute("class", "TwoColumn");
    var RaceEss = player.RaceEssence;
    for (var e = 0; e < player.RaceEssence.length; e++) {
        var div = document.createElement("DIV");
        var Race = document.createElement("INPUT");
        Race.setAttribute("type", "button");
        Race.setAttribute("data-index", e);
        Race.setAttribute("value", RaceEss[e].Race + " " + RaceEss[e].amount);
        Race.addEventListener("click", function (event) {
            var e = event.target.dataset.index; // lol, I think this works without problem?
            if (amount > RaceEss[e].amount) {
                player.Blessings.ChimeraShrine.Donated += RaceEss[e].amount;
                player.RaceEssence.splice(e, 1);
            } else {
                player.Blessings.ChimeraShrine.Donated += amount;
                RaceEss[e].amount -= amount;
            }
            player.Blessings.ChimeraShrine.Points = Math.floor(Math.sqrt(player.Blessings.ChimeraShrine.Donated));
            SacRaces(amount);
        });
        div.appendChild(Race)
        Condiv.appendChild(div);
    }
    SacFrag.appendChild(Condiv);
    SacMenu.appendChild(SacFrag);

}
// "Friendly" shop in dungeon area
var items = { // export to items.js when done!
    itemTemplate: {
        Name: "Name of the item",
        Equip: "No", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
        Drop: true, // or false
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
        Use: function (who) {
            EventLog(who.Name + " used the item")
        }
    },
    Whip: {
        Name: "Basic whip",
        Equip: function () {
            /** Function to equip whip think I will make so that where dmg is calulated will use 
             *  something like TotalStr() instead of player.str 
             *  */
        }
    }
}
function GymFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Gym");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var row1 = document.createElement("div");
    row1.addEventListener("mouseover", function(e) {
        p.innerHTML = e.target.title;
    });

    var input1 = InputButton("Train muscle", "Gain muscle.");
    input1.addEventListener("click", function () {
        if (Flags.LastTrain.Day == Flags.Date.Day && Flags.LastTrain.Month == Flags.Date.Month && Flags.LastTrain.Year == Flags.Date.Year) {
            p.innerHTML = "You have already trained today.";
        } else {
            if (player.Fat > (player.Weight * 0.1)) {
                var gains = Math.min(player.Height / 80, Math.round((player.Height / (player.Muscle * 4)) * (player.Str / 20)));
                var burn = 0 * Math.round(gains * 4);
                player.Muscle += gains;
                player.Fat -= burn;
                p.innerHTML = "You burn " + KgToPound(burn) + " of fat and gain " + KgToPound(gains) + " of muscle." +
                "<br>" + Math.round(player.Muscle);
                Flags.LastTrain = {
                    Day: Flags.Date.Day,
                    Month: Flags.Date.Month,
                    Year: Flags.Date.Year,
                    Count: Flags.LastTrain.Count + 1
                };
                if (Flags.LastTrain.Count > 10 && false) {
                    // Event to buy steriods or similiar
                }
            } else {
                p.innerHTML = "You are to skinny."
            }
        }
    });
    row1.appendChild(input1);

    var input2 = InputButton("Cardio", "Lose some fat.");
    input2.addEventListener("click", function () {
        if (player.Fat > player.Weight * 0.1) {
            var burn = Math.round(player.Fat * 0.09);
            player.Fat -= burn;
            p.innerHTML = "You speent an hour doing cardio, when stepping on the scale in the shower room you are happy to see you lost " + KgToPound(burn) + "." +
            "<br>" + Math.round(player.Fat);
        } else {
            p.innerHTML = "Buring more fat would be dangerous!";
        }
    });
    row1.appendChild(input2);

    var input3 = InputButton("Lose muscle", "Sacrifice your gains to the shining swole bro.")
    input3.addEventListener("click", function () {
        var Sacrifice = Math.round(player.Muscle / 10 * 10) / 10;
        console.log(Sacrifice)
        player.Muscle -= Sacrifice;
        p.innerHTML = "Mesmerized by the swole bro’s flexing you cannot look away from " +
            "show of displaying his sculpted muscle in a routine of poses, once finished he thanks for " +
            "the audience.<br><br> Looking at him walking away he seems to have gained muscle," +
            " looking at yourself in the mirror you seems to have lost muscle?(" + KgToPound(Sacrifice) + ")";
    });
    row1.appendChild(input3);

    div.appendChild(row1);
    var Leave = InputButton("Leave", "")
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function LocalPortalFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        var h1 = document.createElement("h1");
        var h1text = document.createTextNode("Portal");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    if (player.Map === "Outlaws" && House.Portal.BlackMarket === false) {
        var Activate = InputButton("Activate", "Sync this local portal with your home portal");
        Activate.addEventListener("click", function () {
            House.Portal.BlackMarket = true;
            p.innerHTML = "Sync"
            LocalPortalFunc();
        });
        Activate.addEventListener("mouseover", function () {
            p.innerHTML = "Sync this local portal with your home portal";
        });
        div.appendChild(Activate);
    }
    if (player.Map === "MountainPlateau" && House.Portal.MountainPlateau != true) {
        var Activate = InputButton("Activate", "Sync this local portal with your home portal");
        Activate.addEventListener("click", function () {
            House.Portal.MountainPlateau = true;
            p.innerHTML = "Sync"
            LocalPortalFunc();
        });
        Activate.addEventListener("mouseover", function () {
            p.innerHTML = "Sync this local portal with your home portal";
        });
        div.appendChild(Activate);
    }

    var input1 = InputButton("Home")
    input1.addEventListener("click", function () {
        player.Area = "First";
        player.Map = "RoadToHome";
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        DisplayGame();
    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        var Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("EmptyButtons").style.display = 'none';
            document.getElementById("status").style.display = 'block';
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        div.appendChild(Mountain);
    }

    if (House.Portal.BlackMarket) {
        var BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("EmptyButtons").style.display = 'none';
            document.getElementById("status").style.display = 'block';
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        BlackMarket.addEventListener("mouseover", function () {

        });
        div.appendChild(BlackMarket);
    }
    if (House.Portal.MountainPlateau) {
        var MountainPlateau = InputButton("Mountain plateau")
        MountainPlateau.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainPlateau";
            battle = false;
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("EmptyButtons").style.display = 'none';
            document.getElementById("status").style.display = 'block';
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        MountainPlateau.addEventListener("mouseover", function () {

        });
        div.appendChild(MountainPlateau);
    }
    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    Buildings.style.display = "block";
}
// Test of new way to add quests, in order to avoid public vars.
function PregQuests() {
    var div = document.getElementById("Buildings")
    var x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var Impreg = document.createElement("INPUT");
    Impreg.setAttribute("type", "button");
    Impreg.setAttribute("value", "Impreg");
    Impreg.setAttribute("title", "Impregnate our maidens.");
    Impreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        p.innerHTML = "I wish of you to impregnate our local maidens, our scripture only allows temple" +
            " maidens to copulate with those who can defeat them in battle.<br><br> Usually they would find a mate " +
            "among the local dragons, but after their tribe leader defeated by our strongest maiden his pride" +
            " got wounded souring our relationship. <br><br> It’ s a shame he could not defeat her, she has grown" +
            " quite bitter over time and I believe that finally losing her virginity and becoming a mother" +
            " would improve her personalty.";

        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "Impregnate maidens",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    var ImpregReward = document.createElement("INPUT");
    ImpregReward.setAttribute("type", "button");
    ImpregReward.setAttribute("value", "Impreg reward");
    ImpregReward.setAttribute("title", "Impregnate our maidens.");
    ImpregReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
        console.log(player.Quests[index])
        player.Blessings.MountainShrine.Points += player.Quests[index].Count;
        player.Quests.splice(index, 1);
        PregQuests();
    });

    var GetImpreg = document.createElement("INPUT");
    GetImpreg.setAttribute("type", "button");
    GetImpreg.setAttribute("value", "Get Impreg");
    GetImpreg.setAttribute("title", "Get impregnated.");
    GetImpreg.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        p.innerHTML = "Get impregnated while carrying our goddesses blessing," +
            " when the child is born we will send a cartage to collect so it can be raised here at our temple."

        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "Get Impregnated",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            PregQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            PregQuests();
        });
        x.appendChild(Accept);
        x.appendChild(Decline);
    });

    var GetImpregReward = document.createElement("INPUT");
    GetImpregReward.setAttribute("type", "button");
    GetImpregReward.setAttribute("value", "Get Impreg");
    GetImpregReward.setAttribute("title", "Get impregnated.");
    GetImpregReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "Get Impregnated");
        console.log(player.Quests[index])
        player.Blessings.MountainShrine.Points += player.Quests[index].Count * 7; // Getting yourself pregnant is harder to repeat therefore higher reward.
        player.Quests.splice(index, 1);
        PregQuests();
    });
    if (!player.Quests.some(e => e.Name === "Get Impregnated")) {
        x.appendChild(GetImpreg);
    } else if (player.Quests.some(e => e.Name === "Get Impregnated" && e.Completed)) {
        x.appendChild(GetImpregReward);
    }
    if (!player.Quests.some(e => e.Name === "Impregnate maidens")) {
        x.appendChild(Impreg);
    } else if (player.Quests.some(e => e.Name === "Impregnate maidens" && e.Completed)) {
        x.appendChild(ImpregReward);
    }

    var back = document.createElement("input");
    back.setAttribute("type", "button");
    back.setAttribute("value", "Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    })

    var row1 = document.createElement("div");
    row1.appendChild(x);
    div.appendChild(row1);
    var row2 = document.createElement("div");
    row2.appendChild(back);
    div.appendChild(row2);
}

function MountainShrineFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Shrine");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var row1 = document.createElement("div");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "Blessings");
    input1.addEventListener("click", function () {
        FertTempleBlessings();
    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "Quests");
    input2.addEventListener("click", function () {
        PregQuests();
    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    div.appendChild(row1);

    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
};

function FertTempleBlessings(text = "") {
    var div = document.getElementById("Buildings")
    var x = document.createElement("div");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var h5 = document.createElement("h5");
    h5.innerHTML = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points + " faith";
    div.appendChild(h5);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    p.innerHTML = text;

    div.appendChild(p);

    var PregPoints = Flags.Impregnations + Flags.Pregnations * 5 + player.Blessings.MountainShrine.Points;

    var Incubator = document.createElement("input");
    Incubator.setAttribute("value", "Incubator");
    Incubator.setAttribute("type", "button");
    Incubator.setAttribute("title", "Makes your pregnancy faster.");
    Incubator.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.Incubator + 1
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Incubator++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Incubator);

    var IncubatorSeed = document.createElement("input");
    IncubatorSeed.setAttribute("value", "Mature seeds");
    IncubatorSeed.setAttribute("type", "button");
    IncubatorSeed.setAttribute("title", "Makes your servant's pregnancies faster.");
    IncubatorSeed.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.IncubatorSeed + 1;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.IncubatorSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    })
    div.appendChild(IncubatorSeed);

    var Broodmother = document.createElement("input");
    Broodmother.setAttribute("value", "Broodmother");
    Broodmother.setAttribute("type", "button");
    Broodmother.setAttribute("title", "Chance for twins or more for player.");
    Broodmother.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.Broodmother * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Broodmother++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(Broodmother);

    var BroodmotherSeed = document.createElement("input");
    BroodmotherSeed.setAttribute("value", "Branching seeds");
    BroodmotherSeed.setAttribute("type", "button");
    BroodmotherSeed.setAttribute("title", "Chance for twins or more for others.");
    BroodmotherSeed.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.BroodmotherSeed * 2 + 2;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.BroodmotherSeed++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(BroodmotherSeed);

    var MalePreg = document.createElement("input");
    MalePreg.setAttribute("value", "Anal Incubator");
    MalePreg.setAttribute("type", "button");
    MalePreg.setAttribute("title", "Enables player non-female pregnancy.");
    MalePreg.addEventListener("click", function () {
        var cost = player.Blessings.MountainShrine.Malepreg * 5;
        if (PregPoints > cost) {
            player.Blessings.MountainShrine.Malepreg++;
            FertTempleBlessings("I pray for you to parent healthy children.");
        } else {
            FertTempleBlessings("I’m sorry your faith isn’t strong enough to receive that.");
        }
    });
    div.appendChild(MalePreg);

    var back = document.createElement("input");
    back.setAttribute("type", "button");
    back.setAttribute("value", "Back");
    back.addEventListener("click", function () {
        MountainShrineFunc();
    });
    div.appendChild(back);
}
function PortalShopFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    if (window.innerHeight > 600) { // Skip title on smaller screens
        var h1 = document.createElement("h1");
        var h1text = document.createTextNode("Portal shop");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var input1 = InputButton("Pocket portal 1000g", "Are you tired of walking home? Then pocket portal is for you, now with 99 uses! #Note seller is not responsible if you waste them by using them without owning a home portal.");
    input1.addEventListener("click", function () {
        if (player.Gold >= 1000) {
            player.Gold -= 1000;
            SnowInventoryAdd(ItemDict.PocketPortal, 99);
            if (!House.Portal.Owned) {
                p.innerHTML = "Now you just need to build a portal at home..."
            }
        } else {
            p.innerHTML = "You can't afford a pocket portal..."
        }
    });
    input1.addEventListener("mouseover", function () {
        p.innerHTML = "Are you tired of walking home? Then pocket portal is for you, now with 99 uses!<br>#Note seller is not responsible if you waste them by using them without owning a home portal."
    });
    div.appendChild(input1);

    if (House.Portal.Mountain === false) {
        var input2 = InputButton("Portal to mountain region 500g", "A beautiful land with wonderful views, but be vary as it’s the home for plenty dangerous races and tribes.");
        input2.addEventListener("click", function () {
            if (player.Gold >= 500) {
                if (House.Portal.Mountain) {
                    p.innerHTML = "You already own this."
                } else {
                    player.Gold -= 500;
                    House.Portal.Mountain = true;
                    if (House.Portal.Owned) {
                        p.innerHTML = "A new destination have been unlocked at your home portal."
                    } else {
                        p.innerHTML = "Now you just need to build a portal at home..."
                    }
                }
            } else {
                p.innerHTML = "You can't afford it..."
            }
        });
        input2.addEventListener("mouseover", function () {
            p.innerHTML = "A beautiful land with wonderful views, but be vary as it’s the home for plenty dangerous races and tribes."
        });
        div.appendChild(input2);
    }

    var br = document.createElement("br");
    div.appendChild(br);

    div.appendChild(LeaveBuilding()); // Call to leave building function; returns a leave button

    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
function ShopFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Shop");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var innerdiv = document.createElement("div");

    var StrPotion = InputButton("Potion of Strength 100g");
    StrPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Str++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your body becoming stronger."
            p.innerHTML += "<br>" + player.Str;
        }
    });

    var ChaPotion = InputButton("Potion of Charm 100g");
    ChaPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Charm++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your charms grow."
            p.innerHTML += "<br>" + player.Charm;
        }
    });
    innerdiv.appendChild(StrPotion);
    innerdiv.appendChild(ChaPotion);
    var br = document.createElement("br")
    innerdiv.appendChild(br);

    var EndPotion = InputButton("Potion of Endurance 100g")
    EndPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.End++
            player.MaxHealth += 5; // This is bad, need something that mod maxhealth dependent on end and other buffs.
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your endurance growing."
            p.innerHTML += "<br>" + player.End;
        }
    });
    var IntPotion = InputButton("Potion of Intelligence 100g")
    IntPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Int++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your mind becoming sharper."
            p.innerHTML += "<br>" + player.Int;
        }
    });
    innerdiv.appendChild(EndPotion);
    innerdiv.appendChild(IntPotion);
    var br2 = document.createElement("br")
    innerdiv.appendChild(br2);


    var WillPotion = InputButton("Potion of Willpower 100g")
    WillPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.Will++
            player.MaxWillHealth += 5;
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you can feel your willpower growing."
            p.innerHTML += "<br>" + player.Will;
        }
    });
    var SexPotion = InputButton("Potion of Sexskill 100g"); // Needs to be renamed, sounds stupid.
    SexPotion.addEventListener("click", function () {
        if (player.Gold >= 100) {
            player.SexSkill++
            player.Gold -= 100;
            p.innerHTML = "You pay 100gold proced to drink the potion, once the fluid enter your stomach you get a feeling that somehow your bedskills have grown."
            p.innerHTML += "<br>" + player.SexSkill;
        }
    });
    innerdiv.appendChild(WillPotion);
    innerdiv.appendChild(SexPotion);

    div.appendChild(innerdiv);

    var Leave = InputButton("Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
} // Saved 13 lines with inputbutton, wow... but looks better to me atleast!    
// Test of new way to add quests, in order to avoid public vars.
function TownHallQuests(text = "") {
    var div = document.getElementById("Buildings");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Quests");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);
    p.innerHTML = text;

    var buttons = document.createElement("div");

    var BanditLord = InputButton("BanditLord");
    BanditLord.addEventListener("click", function () {
        if (Flags.BanditLord) {
            p.innerHTML = "The bandit are still humiliated from the defeat of their lord, but if you are willing please defeat them again to make sure they don't regain their confidence."
        } else {
            p.innerHTML = "The bandits up to the north has become braver with their new leader, if you are strong enough please beat them into submission. <br> <br>" +
                "You will be greatly awarded for your effort and we will grant you the right to buy the old mansion located east from the city."
        }
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        var Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "BanditLord",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        var Decline = InputButton("Decline");
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    var ElfHunt = InputButton("Elf hunt")
    ElfHunt.addEventListener("click", function () {
        p.innerHTML = "The elves to the south is becoming a problem, defeat atleast three of them and you will be awarded."
        while (buttons.hasChildNodes()) {
            buttons.removeChild(buttons.firstChild);
        }
        var Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "ElfHunt",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        var Decline = InputButton("Decline")
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        buttons.appendChild(Accept);
        buttons.appendChild(Decline);
    });
    if (!player.Quests.some(e => e.Name === "ElfHunt")) {
        buttons.appendChild(ElfHunt);
    } else if (player.Quests.some(e => e.Name === "ElfHunt" && e.Completed)) {
        var ElfHuntReward = InputButton("Elf hunt reward")
        ElfHuntReward.addEventListener("click", function () {
            var Tier = 1;
            for (var i = 0; i < player.Quests.length; i++) {
                if (player.Quests[i].Name === "ElfHunt") {
                    if (player.Quests[i].hasOwnProperty("Tier")) {
                        Tier += Math.pow(2, player.Quests[i].Tier - 1)
                    }
                    player.Quests.splice(i, 1);
                }
            }
            player.Exp += 50 * Tier;
            player.Gold += 100 * Tier;
            Flags.FirstCityLike += 1 * Tier;
            TownHallQuests("You are rewarded: " + 50 * Tier + "Exp and " + 100 * Tier + "gold");
        });
        buttons.appendChild(ElfHuntReward);

    }
    if (!player.Quests.some(e => e.Name === "BanditLord")) {
        buttons.appendChild(BanditLord);
    } else if (player.Quests.some(e => e.Name === "BanditLord" && e.Completed)) {
        var BanditLordReward = InputButton("Banditlord reward")
        BanditLordReward.addEventListener("click", function () {
            player.Exp += 300;
            player.Gold += 500;
            for (var i = 0; i < player.Quests.length; i++) {
                if (player.Quests[i].Name === "BanditLord") {
                    player.Quests.splice(i, 1);
                }
            }
            if (Flags.BanditLord) {
                TownHallQuests("You are rewared: 300Exp and 500gold");
            } else {
                if (!Flags.BanditLord) {
                    Flags.BanditLord = true
                    TownHallQuests("You are now allowed to buy a house. <br> You are rewared: 300Exp and 500gold");
                };
            }
        });
        buttons.appendChild(BanditLordReward);
    };

    var back = InputButton("Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    div.appendChild(buttons);
    div.appendChild(back);
}

function TownhallFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }

    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Townhall");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    p.innerHTML = "Inside the local town hall there isn’t much to see, for being a town hall it’s honestly not" +
        " that impressive at all. But this is just a small outpost after all, hopefully they do at least have work for you."
    div.appendChild(p);

    var row1 = document.createElement("div");
    var input1 = InputButton("Quests")
    input1.addEventListener("click", function () {
        TownHallQuests();
    });
    row1.appendChild(input1);

    if (House.Owned === false && Flags.BanditLord) {
        var input2 = InputButton("Buy house 100g")
        input2.addEventListener("click", function () {
            if (player.Gold >= 100) {
                House.Owned = true;
                TownhallFunc();
                return;
            } else {
                return;
            }
        });
        row1.appendChild(input2);
    }

    var input3 = InputButton("Services")
    input3.addEventListener("click", function () {
        TownHallService();
    });
    row1.appendChild(input3);

    var input4 = InputButton("(placeholder)Reputation");
    input4.addEventListener("click", function () {
        p.innerHTML = Flags.FirstCityLike + "<br> They temp temp you.";
    });
    row1.appendChild(input4);
    div.appendChild(row1);

    div.appendChild(LeaveBuilding());

    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}

function TownHallService() {
    var div = document.getElementById("Buildings");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    // Container for services, atm there is only name change
    var inputs = document.createElement("div");

    // Container for accept and back [Yes/No]
    var YN = document.createElement("div");

    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Service");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var CN = InputButton("Change name");
    CN.addEventListener("click", function () {
        while (inputs.hasChildNodes()) {
            inputs.removeChild(inputs.firstChild);
        }
        var FName = document.createElement("input");
        FName.setAttribute("type", "text");
        FName.setAttribute("value", player.Name);
        FName.setAttribute("id", "ServiceFName724");

        var FNameLabel = document.createElement("label");
        FNameLabel.setAttribute("for", "ServiceFName724");
        FNameLabel.innerHTML = ("First name:")
        inputs.appendChild(FNameLabel);
        inputs.appendChild(FName);

        var LName = document.createElement("input");
        LName.setAttribute("type", "text");
        LName.setAttribute("value", player.LastName);
        LName.setAttribute("id", "ServiceLName244");

        var LNameLabel = document.createElement("label");
        LNameLabel.setAttribute("for", "ServiceLName244")
        LNameLabel.innerHTML = "Last name:";
        inputs.appendChild(LNameLabel);
        inputs.appendChild(LName);

        var Accept = InputButton("Accept");
        Accept.addEventListener("click", function () {
            player.Name = FName.value;
            player.LastName = LName.value;
            TownHallService();
        });
        YN.appendChild(Accept);
    });
    inputs.appendChild(CN);

    var back = InputButton("Back");
    back.addEventListener("click", function () {
        TownhallFunc();
    });

    YN.appendChild(back);

    div.appendChild(inputs);
    div.appendChild(YN);
}
function WitchHutFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Witch hut");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");

    div.appendChild(p);

    var row1 = document.createElement("div");
    row1.addEventListener("mouseover", function(e) {
        p.innerHTML = e.target.title;
    })

    var elf = new InputButton("Elf delight 200g", "Tired of being a human? Do you feel a desire to possess pointy ears? Become an elf today!")
    elf.addEventListener("click", function () {
        if (player.Race == "elf") {
            p.innerHTML = "You are already a elf!";
            return;
        }
        if (TF.Status) {
            p.innerHTML = "Your body is currently transforming!";
            return;
        }
        if (player.Gold >= 200) {
            player.Gold -= 200;
            PotionDrunk("elf");
            p.innerHTML = "You drink the potion and get a strange feeling running through your entire body.";
        } else {
            p.innerHTML = "You can't afford the potion";
        }
    });
    row1.appendChild(elf);

    var Perkup = new InputButton("Perk Up 1000g", "This pill glows green and yellow, and seems to hover slightly above your hand. Eat it to get a perk point!")
    Perkup.addEventListener("click", function () {
        if (player.Gold >= 1000) {
            player.Gold -= 1000;
            player.PerkPoints++;
            p.innerHTML = "You eat the pill, and hear something like a bell ringing in your ears.";
        } else {
            p.innerHTML = "You can't afford the pill, and you don't have any emeralds to barter with.";
        }
    });
    row1.appendChild(Perkup);

    if (Settings.Vore) {
        var VoreUp = InputButton("Eating Up 1000g", "This red pill makes your mouth water and stomach growl. Eat it for an other perk point! (Below it is a little disclaimer: 'store owner not responsible for ineffective pills.')")
        // Move to more fitting place and need new title
        // title ideas
        // Ilegal item, made from havrested souls from the last great battle.
        VoreUp.addEventListener("click", function () {
            if (player.Gold >= 1000) {
                player.Gold -= 1000;
                player.Vore.VorePoints++;
                p.innerHTML = "You eat the pill, and get a strange feeling running through your entire body.";
            } else {
                p.innerHTML = "You can't afford the pill, and it looks so tasty...";
            }
        });
        row1.appendChild(VoreUp);
    }

    var Fireball = new InputButton("Fireball 500g", "Basic quick course on elemental magic, includes how to cast a fireball.")
    //Fireball.setAttribute("title", "This little ball allows you to cast a single fireball spell per ball you own, per battle! (Don't set yourself on fire, please.)");
    Fireball.addEventListener("click", function () {
        if (!Array.isArray(player.Spells)) { // Remove later
            player.Spells = [];
        }
        if (player.Spells.some(e => e.Name === "Fireball")) {
            // Maybe add some affinity gain
            console.log("Nah");
            p.innerHTML = "You already know the basics"
            return;
        } else if (player.Gold >= 500) {
            player.Gold -= 500;
            player.Spells.push(SpellDictLite.Fireball);

            p.innerHTML = "Putting the ball in your pocket, you hope it works as advertised.";
        } else {
            // to poor
        }
    });
    row1.appendChild(Fireball);

    var HumanTF = new InputButton("Potion of Humanity 250g", "Do you not remember who you are anymore? Feel like you have lost you humanity?");
    HumanTF.addEventListener("click", function () {
        if (player.Gold >= 250) {
            player.Gold -= 250;
            PotionDrunk("human");
            p.innerHTML = "You drink the potion and get a familiar feeling running through your entire body.";
        } else {
            p.innerHTML = "You can't afford the potion";
        }
    });
    row1.appendChild(HumanTF);

    var EyeColor = new InputButton("Eye color 50g", "Not happy with the eyes you were born with?");
    EyeColor.addEventListener("click", function () {
        var row2 = document.createElement("div");
        row2.addEventListener("mouseover", function(e) {
            p.innerHTML = e.target.title;
        })
        var EyeColors = [
            "brown", "hazel", "blue", "green", "silver", "amber"
        ]
        for (var e of EyeColors) {
            var inputs = new InputButton(e.Capitalize(), " " + e.Capitalize() + " eyes")
            inputs.addEventListener("click", function (a) {
                console.log(e); 
                if (player.Gold >= 50) {
                    player.Face.Eyes = a.target.value.toLowerCase();
                    p.innerHTML = "Looking in the mirror your eyes are now " + player.Face.Eyes;
                } else {
                    p.innerHTML = "Insufficient gold!"
                }
            });
            row2.appendChild(inputs);
        };

        var close = new InputButton("Close", "Close eye color menu");
        close.addEventListener("click", function () {
            WitchHutFunc();
        })
        row2.appendChild(close);
        div.appendChild(row2);
    });
    row1.appendChild(EyeColor);

    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(row1);
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
document.getElementById("WitchShop").addEventListener("click", function (e) {
    var Chosen;
    if (e.target.type == "button") {
        Chosen = String(e.target.id);
        if (Chosen == "Grow" && player.Gold >= 50) {
            var growth = Math.round((180 / player.Height) * 100) / 100;
            player.Gold -= 50;
            player.Height += growth;
            document.getElementById("WitchShopText").innerHTML = "You grow " + growth + "cm.";
        } else if (Chosen == "Shrink" && player.Gold >= 50) {
            var shrunk = Math.round((player.Height / 100) * 100) / 100;
            player.Gold -= 50;
            player.Height -= shrunk;
            document.getElementById("WitchShopText").innerHTML = "You shrink " + shrunk + "cm.";
        } else if (Chosen == "FertilityAdd" && player.Gold >= 30) {
            player.Gold -= 30;
            player.Fertility++;
            document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more fertil.";
        } else if (Chosen == "FertilitySub" && player.Gold >= 70) {
            player.Gold -= 70;
            player.Fertility -= 3;
            document.getElementById("WitchShopText").innerHTML = "You feel your body becoming more barren."
        } else if (Chosen == "VirilityAdd" && player.Gold >= 70) {
            player.Gold -= 70;
            player.Virility++;
            document.getElementById("WitchShopText").innerHTML = "You feel your virility increasing.";
        } else if (Chosen == "VirilitySub" && player.Gold >= 30) {
            player.Gold -= 30;
            player.Virility -= 3;
            document.getElementById("WitchShopText").innerHTML = "You feel your virility decreasing";
        } else if (Chosen == "CumRateAdd" && player.Gold >= 100 && player.Balls.length > 0) {
            player.Gold -= 100;
            for (var e = 0; e < player.Balls.length; e++) {
                player.Balls[e].CumRate += 0.1;
            }
            document.getElementById("WitchShopText").innerHTML = "You get a tingling feeling in your balls, you think it works!"
        } else if (Chosen == "CumRateSub" && player.Gold >= 20 && player.Balls.length > 0) {
            player.Gold -= 20;
            for (var e = 0; e < player.Balls.length; e++) {
                player.Balls[e].CumRate -= 0.5;
            }
            document.getElementById("WitchShopText").innerHTML = "You get a strange feeling in your balls, you think it works!"
        }
    }
});
document.getElementById("WitchShop").addEventListener("mouseover", function (e) {
    document.getElementById("WitchShopText").innerHTML = e.target.title;
});
// Cheats to help me with development and aid those who don't like grinding. 
function CheatEngine() {
    if (Settings.Cheats.Gold) {
        player.Gold++;
    }
    if (Settings.Cheats.Masc) {
        player.Masc++;
    }
    if (Settings.Cheats.Femi) {
        player.Femi++;
    }
    if (Settings.Cheats.Exp) {
        player.Exp++;
    }
    if (Settings.Cheats.VoreExp) {
        player.Vore.Exp++;
    }
    if (Settings.Cheats.FastTime) {
        Flags.Date.Hour++;
    }
}

document.getElementById("Gold").addEventListener("click", function () {
    var gold = document.getElementById("Gold");
    var clicked = gold.dataset.clicked;
    clicked++;
    gold.dataset.clicked = clicked;
    if (clicked > 10) {
        DisplayNone();
        document.getElementById("CheatMenu").style.display = 'block';
        document.getElementById("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
        document.getElementById("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
        document.getElementById("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
        document.getElementById("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
        document.getElementById("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
        document.getElementById("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
        document.getElementById("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
    }
});
document.getElementById("CheatsEnabled").addEventListener("click", function () {
    Settings.Cheats.Enabled = !Settings.Cheats.Enabled;
    document.getElementById("CheatsEnabled").value = "Cheats Enabled " + Settings.Cheats.Enabled;
});
document.getElementById("CheatsGold").addEventListener("click", function () {
    Settings.Cheats.Gold = !Settings.Cheats.Gold;
    document.getElementById("CheatsGold").value = "Gold " + Settings.Cheats.Gold;
});
document.getElementById("CheatsMasc").addEventListener("click", function () {
    Settings.Cheats.Masc = !Settings.Cheats.Masc;
    document.getElementById("CheatsMasc").value = "Masc " + Settings.Cheats.Masc;
});
document.getElementById("CheatsFemi").addEventListener("click", function () {
    Settings.Cheats.Femi = !Settings.Cheats.Femi;
    document.getElementById("CheatsFemi").value = "Femi " + Settings.Cheats.Femi;
});
document.getElementById("CheatsExp").addEventListener("click", function () {
    Settings.Cheats.Exp = !Settings.Cheats.Exp;
    document.getElementById("CheatsExp").value = "Exp " + Settings.Cheats.Exp;
});
document.getElementById("CheatsVoreExp").addEventListener("click", function () {
    Settings.Cheats.VoreExp = !Settings.Cheats.VoreExp;
    document.getElementById("CheatsVoreExp").value = "Vore Exp " + Settings.Cheats.VoreExp;
});
document.getElementById("CheatsFastTime").addEventListener("click", function () {
    Settings.Cheats.FastTime = !Settings.Cheats.FastTime;
    document.getElementById("CheatsFastTime").value = "FastTime " + Settings.Cheats.FastTime;
});
document.getElementById("CloseCheatMenu").addEventListener("click", function () {
    document.getElementById("CheatMenu").style.display = 'none';
    DisplayGame();
});
function CheckArousal() {
    AfterBattleButtons();
    const ee = enemies[EnemyIndex],
        SexText = document.getElementById("SexText");
    if (ee.Arousal >= 100) {
        ee.Orgasm++;
        ee.SessionOrgasm++;
        ee.Arousal = 0;
        if (LastPressed == "RideCowgirl" && !player.Pregnant.Status) {
            Impregnate(player, ee, "B", "");
        }
        if (LastPressed == "GiveBlowjob") {
            const cum = Cumming(ee);
            SexText.innerHTML = "Your opponent’s grip on your head tightens as they start humping you mouth in earnest. You gladly oblige their request starting to deepthroat them to the base of their cock. Their rhythm starts to falter as you push their cock to the back of your throat." +
                " You push your head deep into their crotch as they make one last desperate thrust"
            SexText.innerHTML += cum > 0 ? ", depositing " + LToGal(cum) + " deep into your gullet." : "."
            SexText.innerHTML += "Your opponent takes deep breathes as they lie completely spent. You rise from between their legs admiring your work and begin to plan your next move."
        } else if (LastPressed == "RideCowgirl") {
            const cum = Cumming(ee);
            SexText.innerHTML += "<br>Reading their body language, you know they are close to cumming."
            SexText.innerHTML += cum > 0 ?
                " Pulling them deep inside you, they release " + LToGal(cum) + " of cum into your pussy." :
                " Nothing comes out, as they're already drained."
        } else if (LastPressed == "GiveCunnilingus") {
            SexText.innerHTML += "<br>Reading their body language, you know they are close to cumming. Shoving your tongue as deep as you can into them, your face gets splashed with their nectar."
        } else if (false) SexText.innerHTML += " Nothing comes out, as they're already drained."
    }
    if (player.Arousal >= 100) {
        player.Orgasm++;
        player.Arousal = 0;
        player.SessionOrgasm++;
        switch (Settings.GiveEssence) {
            case "Both":
                ee.Masc += Math.round(player.GiveEssence / 2);
                ee.Femi += Math.round(player.GiveEssence / 2);
                break;
            case "Masculinity":
                ee.Masc += Math.round(player.GiveEssence);
                break;
            case "Femininity":
                ee.Femi += Math.round(player.GiveEssence);
                break;
            case "None":
                break;
        }
        EssenceCheck(ee);
        const ImpregActions = ["DoggyStyle", "Missionary", "DualPen", "MultiPen"],
            AnalImpregActions = ["DoggyStyleAnal"];
        if (ImpregActions.indexOf(LastPressed) != -1) {
            if (!ee.hasOwnProperty("Pregnant")) {
                ee.Pregnant = {
                    Status: false
                }
            }
            if (!ee.Pregnant.Status) {
                for (let b of player.Balls) {
                    if (b.Cum > 10) {
                        Impregnate(ee, player);
                        b.Cum -= 10;
                    }
                }
            }
        } else if (AnalImpregActions.indexOf(LastPressed) != -1 && player.Blessings.MountainShrine.Malepreg > 0) {
            if (!ee.hasOwnProperty("Pregnant")) {
                ee.Pregnant = {
                    Status: false
                }
            }
            if (!ee.Pregnant.Status) {
                for (var b of player.Balls) {
                    if (b.Cum > 10) {
                        Impregnate(ee, player);
                        b.Cum -= 10;
                    }
                }
            }
        }
        if (LastPressed == "GetBlowjob") {
            const cum = Cumming(player);
            SexText.innerHTML = "You reach down and grab your opponent’s head, giving a bestial grunt as you approach your climax. You ram your cock as far as you can into " + enemies[EnemyIndex].FirstName + "'s throat."
            if (player.Balls.length > 0) {
                SexText.innerHTML += "Your balls tense up as you pump your " + LToGal(cum) + " load down their gullet, thrusting erratically, holding your opponent tight as you empty your sac into them. You bend over their head, making small jabs into their mouth as each wave of cum is sent to their stomach."
            }
            SexText.innerHTML += "You stand there for a while, enjoying your afterglow, before you pull out, causing your opponent to fall over, gasping for air. You smile deviously as you ponder how you should use them next.";
            ee.Cumin.Stomach += cum;
            if (ee.Cumin.Stomach > (ee.Height / 100) * 2) {
                SexText.innerHTML += "<br><br> Their stomach is overflowing with your cum; as you pull out, your excess cum follows.";
                player.cumGround += ee.Cumin.Stomach - (ee.Height / 100) * 2;
                ee.Cumin.Stomach = (ee.Height / 100) * 2;
            } else if (ee.Cumin.Stomach > ee.Height / 100) {
                SexText.innerHTML += "<br><br> Their stomach bulges visibly, filled with your cum."
            }
        } else if (LastPressed == "Missionary") {
            const cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            SexText.innerHTML = "<br>Feeling close you thrust deep inside them";
            if (cum > 0) {
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    SexText.innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else {
                SexText.innerHTML += ", but nothing comes out of your dick."
            }
        } else if (LastPressed == "DoggyStyle") {
            const cum = Cumming(player);
            ee.Cumin.Pussy += cum;
            SexText.innerHTML = "<br>Feeling close, you firmly grab their hips, and thrust deep into their pussy"
            if (cum > 0) {
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their pussy."
                if (ee.Cumin.Pussy > (ee.Height / 100)) {
                    SexText.innerHTML += "<br><br> Their quim is overflowing with your cum; as you pull out, your excess seed follows.";
                    player.cumGround += ee.Cumin.Pussy - ee.Height / 100;
                    ee.Cumin.Pussy = ee.Height / 100;
                } else if (ee.Cumin.Stomach > ee.Height / 200) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            } else document.getElementById("SexText").innerHTML += ", but nothing comes out."
        } else if (LastPressed == "DoggyStyleAnal") {
            const cum = Cumming(player);
            SexText.innerHTML = "<br>Feeling close, you firmly grab their waist, and thrust deep into their bowels"
            if (cum > 0) {
                ee.Cumin.Ass += cum;
                SexText.innerHTML += ", releasing " + LToGal(cum) + " of cum into their ass."
                if (ee.Cumin.Ass > (ee.Height / 50)) {
                    SexText.innerHTML += "<br><br> Their ass is overflowing with your cum; as you pull out, your excess seed leaks out."
                    player.cumGround += ee.Cumin.Ass - ee.Height / 50;
                    ee.Cumin.Ass = ee.Height / 50;
                } else if (ee.Cumin.Stomach > ee.Height / 100) {
                    SexText.innerHTML += "<br><br> Their belly bulges visibly, filled with your cum."
                }
            }
        } else if (false) {
            SexText.innerHTML += ", but nothing comes out."
        }
        SexText.innerHTML += (player.cumGround > 20000 ? // If 
            "<br><br>Your opponent is caked white and heavily panting, cum still flowing out of their overfilled holes. Your extreme output has covered them, and all of the ground nearby, in your semen. You're glad that you don't have to clean this up..." :
            player.cumGround > 5000 ? // if else
            "<br><br>You've covered your (ex-)opponent in your cum, and left a sizable puddle underneath them. They're still dripping..." :
            player.cumGround > 500 ?
            "<br><br>You've made quite a mess; they weren't able to handle your output, and have been covered in what their body couldn't handle." :
            player.cumGround > 0 ?
            "<br><br>Their body bulges with your load, but it's not enough - what they couldn't keep inside, they're now wearing outside." :
            "" // else
        )
        CheckArousal();
    }
    const PlayerLooks = document.getElementById("PlayerLooks"),
        EnemyLooks = document.getElementById("EnemyLooks");

    PlayerLooks.innerHTML = window.innerHeight > 800 ?
        BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player) : "";
    EnemyLooks.innerHTML = window.innerHeight > 800 ?
        BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee) : "";

    if (player.Pregnant.Babies.length > 0) {
        let age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        age < 0 ? age = "Impregnated" : age = age + " months pregnant";
        PlayerLooks.innerHTML += "<br>" + age;
    }
    if (ee.hasOwnProperty("Pregnant")) {
        if (ee.Pregnant.Status) {
            EnemyLooks.innerHTML += "<br>Pregnant";
        }
    }


    const BaseSexAttack = Math.round((RandomInt(4, 7) * player.SexSkill) / 2),
        BaseESexAttack = Math.round((RandomInt(4, 7) * enemies[EnemyIndex].SexSkill) / 2);
    // SexAttack is a global should probably change that, but how?
    SexAttack = Math.min(RandomInt(45, 77), BaseSexAttack * (BaseSexAttack / BaseESexAttack));
    ESexAttack = Math.max(RandomInt(15, 32), BaseESexAttack * (BaseESexAttack / BaseSexAttack));


    DocId("PName").innerHTML = `${player.Name} ${player.LastName}<br>${player.Race} ${Pronoun(CheckGender(player))}`;
    DocId("EName").innerHTML = `${ee.FirstName} ${ee.LastName}<br>${ee.Name} ${ee.Race} ${Pronoun(CheckGender(ee))}`;
    DocId("Mascu").innerHTML = Math.round(player.Masc);
    DocId("Femin").innerHTML = Math.round(player.Femi);
    DocId("PArousal").innerHTML = Math.round(player.Arousal);
    DocId("EMascu").innerHTML = ee.Masc;
    DocId("EFemin").innerHTML = ee.Femi;
    DocId("EArousal").innerHTML = Math.round(ee.Arousal);
    // Divide by bigest value amoung both player and enemy
    let DelatMed = (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) ?
        (100 / player.Masc) : (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) ?
        (100 / player.Femi) : (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) ?
        (100 / ee.Masc) : (100 / ee.Femi);

    DocId("Mascu").style.width = player.Masc * DelatMed + "%";
    DocId("Femin").style.width = player.Femi * DelatMed + "%";
    DocId("PArousal").style.width = Math.max(1, player.Arousal) + "%";
    DocId("EMascu").style.width = ee.Masc * DelatMed + "%";
    DocId("EFemin").style.width = ee.Femi * DelatMed + "%";
    DocId("EArousal").style.width = Math.max(1, ee.Arousal) + "%";

    DocId("SexStats").innerHTML = " ";
    DocId("EnemyOrgasm").style.display = 'block';
    DocId("EnemyOrgasm").innerHTML = ee.Orgasm;
    DocId("PlayerOrgasm").style.display = 'block';
    DocId("PlayerOrgasm").innerHTML = player.Orgasm;

    SexColor(player, "Player");
    SexColor(ee, "Enemy");
}

function Cumming(who) {
    if (who.Balls.length > 0) {
        let Cum = 0;
        for (let b of who.Balls) {
            Cum += Math.min(b.Cum, Math.max(10, b.Cum / 8));
            b.Cum -= Math.min(b.Cum, Math.max(100, b.Cum / 8));
        }
        Cum = Math.round((Cum / 1000) * 100) / 100;
        return Cum;
    }
}

function SexLooksExactAndKinda() { // A function to be able to enter a bunch of "local global consts"
    const EnemyKinda = DocId("EnemyKinda"),
        EnemyExact = DocId("EnemyExact"),
        SexStats = DocId("SexStats"),
        playerKinda = DocId("playerKinda"),
        playerExact = DocId("playerExact"),
        EnemySex = DocId("EnemySex"),
        PlayerSex = DocId("PlayerSex");
    EnemySex.addEventListener("click", function () {
        if (EnemyKinda.style.display == 'none') {
            SexStats.innerHTML = " ";
            EnemyKinda.style.display = 'block';
            EnemyExact.style.display = 'none';
            EnemyExact.innerHTML = "";
        } else {
            const ee = enemies[EnemyIndex];
            SexStats.innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
            EnemyKinda.style.display = 'none';
            EnemyExact.style.display = 'block';
            EnemyExact.innerHTML = `<p>${ExactBoobLook(ee)+ExactPussyLook(ee)+ExactDickLook(ee)+ExactBallLook(ee)}</p>`;
        }
    });
    EnemySex.addEventListener("mouseenter", function () {
        const ee = enemies[EnemyIndex];
        SexStats.innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
        EnemyKinda.style.display = 'none';
        EnemyExact.style.display = 'block';
        EnemyExact.innerHTML = `<p>${ExactBoobLook(ee) + ExactPussyLook(ee) + 
            ExactDickLook(ee) + ExactBallLook(ee)}</p>`;
    });
    EnemySex.addEventListener("mouseleave", function () {
        SexStats.innerHTML = " ";
        EnemyKinda.style.display = 'block';
        EnemyExact.style.display = 'none';
        EnemyExact.innerHTML = "";
    });
    PlayerSex.addEventListener("click", function () {
        if (playerKinda.style.display == 'none') {
            playerKinda.style.display = 'block';
            playerExact.style.display = 'none';
            playerExact.innerHTML = "";
        } else {
            playerKinda.style.display = 'none';
            playerExact.style.display = 'block';
            playerExact.innerHTML = `<p>${ExactBoobLook(player) + ExactPussyLook(player) + 
                ExactDickLook(player) + ExactBallLook(player)}</p>`
        }
    });
    PlayerSex.addEventListener("mouseenter", function () {
        playerKinda.style.display = 'none';
        playerExact.style.display = 'block';
        playerExact.innerHTML = `<p>${ExactBoobLook(player) + ExactPussyLook(player) + 
            ExactDickLook(player) + ExactBallLook(player)}</p>`
    });
    PlayerSex.addEventListener("mouseleave", function () {
        playerKinda.style.display = 'block';
        playerExact.style.display = 'none';
        playerExact.innerHTML = "";
    });
}
SexLooksExactAndKinda();
function DoorHandler(NESW) {
    var startarea = document.getElementById("hem");
    if (NESW === "N") {
        sprite.y = startarea.height - 3 * grid;
        enemies = [];
    } else if (NESW === "E") {
        sprite.x = 2 * grid;
        enemies = [];
    } else if (NESW === "S") {
        sprite.y = 2 * grid;
        enemies = [];
    } else if (NESW === "W") {
        sprite.x = startarea.width - 3 * grid;
        enemies = [];
    }
}

function MakeDoor(x, y, width, height, NESW) {
    this.x = x,
        this.y = y,
        this.width = width,
        this.height = height,
        this.NESW = NESW
};

function CheckDoor() {
    var startarea = document.getElementById("hem");
    DoorE = new MakeDoor(startarea.width - 2 * grid, startarea.height / 2 - 3 * grid, grid, 5 * grid, "E");
    DoorS = new MakeDoor(startarea.width / 2 - 3 * grid, startarea.height - 2 * grid, grid * 5, grid, "S");
    DoorW = new MakeDoor(0, startarea.height / 2 - 3 * grid, grid, 5 * grid, "W");
    DoorN = new MakeDoor(startarea.width / 2 - 3 * grid, 0, grid * 5, grid, "N");
    var Doors = [DoorE, DoorS, DoorN, DoorW];
    for (var i = 0; i < Doors.length; i++) {
        var Door = Doors[i].NESW;
        if (sprite.x + grid * sprite.Size >= Doors[i].x && sprite.x <= Doors[i].x + Doors[i].width &&
            sprite.y + grid * sprite.Size >= Doors[i].y && sprite.y <= Doors[i].y + Doors[i].height) {
            switch (player.Area) {
                case "First":
                    switch (player.Map) {
                        case "Start":
                            if (Door == "E") {
                                player.Map = "RoadToCity";
                                DoorHandler("E");
                            }
                            break;
                        case "RoadToCity":
                            if (Door == "S") {
                                player.Map = "RoadToCity2";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "Start";
                                DoorHandler("W");
                            } else if (Door == "N") {
                                player.Map = "Bandit";
                                DoorHandler("N");
                            }
                            break;
                        case "Bandit":
                            if (Door == "S") {
                                player.Map = "RoadToCity";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToCity2":
                            if (Door == "N") {
                                player.Map = "RoadToCity";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "City";
                                DoorHandler("E");
                            }
                            break;
                        case "City":
                            if (Door == "W") {
                                player.Map = "RoadToCity2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "RoadToHome";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Forest";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToHome":
                            if (Door == "W") {
                                player.Map = "City";
                                DoorHandler("W");
                            } else if (Door == "E" && House.Owned == true) {
                                battle = true;
                                sprite.x = startarea.width - 3 * grid;
                                document.getElementById("map").style.display = 'none';
                                document.getElementById("buttons").style.display = 'none';
                                document.getElementById("EmptyButtons").style.display = 'block';
                                document.getElementById("Home").style.display = 'block';
                                document.getElementById("HomeText").style.display = 'block';
                                if (House.Dorm > 0) {
                                    document.getElementById("Dorm").style.display = "inline-block";
                                } else {
                                    document.getElementById("Dorm").style.display = "none"
                                }
                                if (House.Portal.Owned) {
                                    document.getElementById("Portal").style.display = 'inline-block'
                                } else {
                                    document.getElementById("Portal").style.display = 'none'
                                }
                                if (House.Brothel > 0) {
                                    document.getElementById("Brothel").style.display = 'inline-block';
                                } else {
                                    document.getElementById("Brothel").style.display = 'none';
                                }
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch";
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch":
                            if (Door == "S") {
                                player.Map = "RoadToHome";
                                DoorHandler("S");
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch2"
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch2":
                            if (Door == "S") {
                                player.Map = "RoadToWitch";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Witch";
                                DoorHandler("E");
                            }
                            break;
                        case "Witch":
                            if (Door == "W") {
                                player.Map = "RoadToWitch2";
                                DoorHandler("W");
                            }
                            break;
                        case "Forest":
                            if (Door == "N") {
                                player.Map = "City";
                                DoorHandler("N");
                            } else if (Doors[i].NESW == "S") {
                                player.Map = "Forest2";
                                DoorHandler("S");
                            }
                            break;
                        case "Forest2":
                            if (Door == "N") {
                                player.Map = "Forest";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws";
                                player.Area = "Second";
                                DoorHandler("S");
                            }
                            break;
                    }
                    break;
                case "Second":
                    switch (player.Map) {
                        case "PathToOutlaws":
                            if (Door == "N") {
                                player.Map = "Forest2";
                                player.Area = "First";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "Cave1";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("S");
                            }
                            break;
                        case "PathToOutlaws2":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Outlaws";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Farm";
                                DoorHandler("E");
                            }
                            break;
                        case "Farm":
                            if (Door == "W") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("W");
                            }
                            break;
                        case "Outlaws":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("N");
                            }
                            break;
                        case "Cave1":
                            if (Door == "E") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "Cave2";
                                DoorHandler("W");
                            }
                            break;
                        case "Cave2":
                            if (Door == "E") {
                                player.Map = "Cave1";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Cave3";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave3":
                            if (Door == "N") {
                                player.Map = "Cave2";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Cave4";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave4":
                            if (Door == "N") {
                                player.Map = "Cave3";
                                DoorHandler("N");
                            }
                    }
                    break;
                case "Mountain":
                    switch (player.Map) {
                        case "MountainStart":
                            if (Door == "S") {
                                player.Map = "MountainClimb";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrinePath":
                            if (Door == "E") {
                                player.Map = "MountainStart";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "MountainShrine";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrine":
                            if (Door == "E") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                //player.Map = "";
                                //DoorHandler("W");
                            }
                            break;
                        case "MountainClimb":
                            if (Door == "N") {
                                player.Map = "MountainStart";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb2";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb2":
                            if (Door == "N") {
                                player.Map = "MountainClimb";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb3";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb3":
                            if (Door == "W") {
                                player.Map = "MountainClimb2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb4";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb4":
                            if (Door == "N") {
                                player.Map = "MountainClimb5";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "MountainClimb3";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainClimb5":
                            if (Door == "N") {
                                player.Map = "MountainClimb6";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb4";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb6":
                            if (Door == "N") {
                                player.Map = "MountainClimb7";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb5";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb7":
                            if (Door == "N") {
                                player.Map = "MountainClimb8";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb6";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "MountainTribe";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainTribe":
                            if (Door == "E") {
                                player.Map = "MountainClimb7";
                                DoorHandler("E");
                            } else if (Door == "N") {
                                player.Map = "MountainClimb9";
                                DoorHandler("N");
                            }
                            break
                        case "MountainClimb8":
                            if (Door == "W") {
                                player.Map = "MountainClimb9";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb7";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb9":
                            if (Door == "W") {
                                player.Map = "MountainClimb10";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb8";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "MountainTribe";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb10":
                            if (Door == "N") {
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb9";
                                DoorHandler("E");
                            }
                            break;
                    }
                    break
            }
        }
    }
};
// Checks flags, settings, etc at load
function CheckFlags() {
    // Flags

    // load Settings
    document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;

    document.body.style.backgroundColor = Settings.BackColor;
    MapColor = Settings.MapColor
    document.body.style.color = Settings.TextColor
    document.body.style.fontFamily = Settings.TextFont

    document.getElementById("backcolor").value = Settings.BackColor;
    document.getElementById("MapColor").value = Settings.MapColor;
    document.getElementById("textcolor").value = Settings.TextColor;
    document.getElementById("textfont").value = Settings.TextFont;

    if (!Settings.hasOwnProperty("MapPercent")) {
        Settings.MapPercent = 0.9;
        console.log("Added MapPercent")
    }
    if (!Settings.hasOwnProperty("FontSize")) {
        Settings.FontSize = 1;
    }
    document.body.style.fontSize = Settings.FontSize + "em";

    if (Settings.Vore) {
        if (!Settings.hasOwnProperty("VoreSettings")) {
            Settings.VoreSettings = {
                StomachDigestion: false,
                CumTF: false,
                ChildTF: false,
                VCumDigestion: false,
                MilkTF: false,
                AnalDigestion: false
            }
        }
        //More load fixing
        if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion"))
            Settings.VoreSettings.AnalDigestion = false;
        if (!Settings.VoreSettings.hasOwnProperty("AbsorbEssence")) {
            Settings.VoreSettings.AbsorbEssence = "Both";
        }
        if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion")) {
            Settings.VoreSettings.AnalDigestion = false;
        }
    }
    if (!Settings.hasOwnProperty("EssenceAuto")) {
        Settings.EssenceAuto = true;
        console.log("Added EssenceAuto");
    }
    if (!Settings.hasOwnProperty("Pronoun")) {
        Settings.Pronoun = {
            Status: false,
            Herm: "hermaphrodite",
            Male: "male",
            Female: "female",
            Doll: "doll",
            DickGirl: "dickgirl",
            CuntBoy: "cuntboy"
        }
        console.log("Added Settings pronoun");
    }
    if (!Settings.Pronoun.hasOwnProperty("CuntBoy")) {
        Settings.Pronoun.CuntBoy = "cuntboy"
        Settings.Pronoun.DickGirl = "dickgirl"
        console.log("Added more pronouns")
    }
    if (!player.Pregnant.hasOwnProperty("Babies")) {
        player.Pregnant = {};
        player.Pregnant.Babies = [];
        console.log("Added babies []");
    }
    if (!Array.isArray(player.Children)) {
        player.Children = [];
        console.log("Added Children []");
    }
    Flags.Pregnations = Math.max(0, Flags.Pregnations);
    if (!Flags.hasOwnProperty("Date")) {
        Flags.Date = {
            Year: 1200,
            Month: 0,
            Day: 0
        }
        console.log("Added date")
    }
    DateEngine();

    if (!House.hasOwnProperty("Gym")) {
        House.Gym = 0;
        console.log("Added gym");
    }
    if (!House.hasOwnProperty("Kitchen")) {
        House.Kitchen = 0;
        console.log("Added Kitchen");
    }
    if (!House.hasOwnProperty("Brothel")) {
        House.Brothel = 0;
        console.log("Added brothel")
    }
    if (!House.hasOwnProperty("Nursery")) {
        House.Nursery = 0;
        console.log("Added Nursery")
    }

    if (window.innerHeight < 800) {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
    } else {
        document.getElementById("SecondButtons").style.display = 'block';
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("MoreButtons").style.display = 'none';
        document.getElementById("LessButtons").style.display = 'none';
    }
    if (!Settings.hasOwnProperty("MaxLimbs")) {
        Settings.MaxLimbs = {
            MaxBoobs: 5,
            MaxVaginas: 5,
            MaxDicks: 5,
            MaxBalls: 5
        }
        console.log("Added MaxLimbs ")
    }
    if (!player.hasOwnProperty("Age")) {
        player.Age = 18;
        console.log("Added player age")
    }
    if (!player.hasOwnProperty("SecondRace")) {
        player.SecondRace = "human";
    }
    if (!Flags.Date.hasOwnProperty("Hour")) {
        Flags.Date.Hour = 0;
        console.log("Added hour")
    }

    if (!player.hasOwnProperty("Face")) {
        player.Face = {
            Eyes: "brown",
            HairStyle: "curly",
            HairColor: player.Haircolor,
            HairLength: "shoulder-length"
        }
    }
    if (!Settings.hasOwnProperty("Brothel")) {
        Settings.Brothel = {
            ServeMasc: true,
            ServeFemi: true
        }
        console.log("Added brothel settings");
    }
    if (!Settings.hasOwnProperty("LogLength")) {
        Settings.LogLength = 100;
        console.log("Added Settings loglength");
    }
    if (!Settings.hasOwnProperty("Inch")) {
        Settings.Inch = false;
        console.log("Added Inch")
    }
    if (!Flags.hasOwnProperty("BeatSuccubus")) {
        Flags.BeatSuccubus = false;
        console.log("Added beat succubus");
    }
    if (!Flags.hasOwnProperty("FirstCityLike")) {
        Flags.FirstCityLike = 0;
    }
    if (!Settings.hasOwnProperty("BalanceParts")) {
        Settings.BalanceParts = false;
    }
    if (!House.hasOwnProperty("Portal")) {
        House.Portal = {
            Owned: false,
            Mountain: false
        }
        console.log("Added house portal owned false");
    } else if (!House.Portal.hasOwnProperty("Owned")) {
        if (House.Portal) {
            House.Portal = {
                Owned: true,
                Mountain: false
            }
            console.log("Added house portal owned true");
        } else {
            House.Portal = {
                Owned: false,
                Mountain: false
            }
            console.log("Added house portal owned false");
        }
    }
    if (window.innerHeight < 600) {
        document.getElementById("FirstButtons").style.display = 'none';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'inline-block';
    } else if (window.innerHeight < 800) {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'none';
    } else {
        document.getElementById("SecondButtons").style.display = 'block';
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("MoreButtons").style.display = 'none';
        document.getElementById("LessButtons").style.display = 'none';
        document.getElementById("MobileButtons").style.display = 'none';
    }

    if (!player.hasOwnProperty("Blessings")) {
        player.Blessings.MountainShrine = {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            MalePreg: 0
        }
    }
    if (!player.Blessings.hasOwnProperty("MountainShrine")) {
        player.Blessings = {};
        player.Blessings.MountainShrine = {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            MalePreg: 0
        }
    }

    FluidsEngine();
    if (!player.hasOwnProperty("RaceEssence")) {
        player.RaceEssence = [
            Human = {
                Race: "Human",
                amount: 100
            }
        ]
        console.log("Added race essence");
    };
    if (!player.hasOwnProperty("OrganMod")) {
        player.OrganMod = {
            Dick: {
                Size: 0
            },
            Boobies: {
                Size: 0
            },
            Balls: {
                Size: 0
            },
            Pussy: {
                Size: 0
            },
            Anal: {
                Size: 0
            }
        }
    }
    if (!Flags.hasOwnProperty("LastTrain")) {
        Flags.LastTrain = {
            Day: 0,
            Month: 0,
            Year: 0,
            Count: 0
        };
        console.log("Added LastTrain");
    } else if (!Flags.LastTrain.hasOwnProperty("Count")) {
        Flags.LastTrain = {
            Day: 0,
            Month: 0,
            Year: 0,
            Count: 0
        };
        console.log("Modded LastTrain")
    }
    if (!Settings.hasOwnProperty("Cheats")) {
        Settings.Cheats = {
            Enabled: false,
            Gold: false,
            Masc: false,
            Femi: false,
            Exp: false,
            VoreExp: false,
            FastTime: false
        }
        console.log("Added cheats");
    }
    if (!player.Blessings.hasOwnProperty("ChimeraShrine")) {
        player.Blessings.ChimeraShrine = {
            Donated: 0,
            Points: 0
        }
    }
    /**
       else if (player.Blessings.ChimeraShrine.hasOwnProperty("placeholder")){
                   player.Blessings.ChimeraShrine = {
                    Donated: player.Blessings.ChimeraShrine.Donated,
                    Points: player.Blessings.ChimeraShrine.Points,
                    Perk1: 0
        }
       } */
    // Convert old willpower to new will, so it's the same as player.
    for (var e of House.Dormmates) {
        if (e.hasOwnProperty("Willpower")) {
            e.Will = e.Willpower
        }
    }
    if (Settings.Vore) {
        for (var e of player.Vore.Stomach) {
            e.Will = e.Willpower;
        }
        for (var e of player.Vore.Vagina) {
            e.Will = e.Willpower;
        }
        for (var e of player.Vore.Balls) {
            e.Will = e.Willpower;
            console.log(e)
        }
        for (var e of player.Vore.Anal) {
            e.Will = e.Willpower;
        }
        for (var e of player.Vore.Breast) {
            e.Will = e.Willpower;
        }
    }
    if (!player.hasOwnProperty("Mana")) {
        player.Mana = 100;
    }
    if (Array.isArray(player.Spells) !== true) {
        player.MagicAffinity = {
            Fire: 0,
            Elemental: 0, // Fire, ice, water, stone, etc
            Restoration: 0 // Healing, returning to orginal shape/age.
        }
        player.Spells = [ // Array so that I can add more without problems
            Fireball = {
                Name: "Fireball",
                Exp: 0
            }
        ]
        console.log("Changed player.spells to an array");
    }
    if (House.Portal.hasOwnProperty("BlackMarket") === false) {
        House.Portal.BlackMarket = false;
    }

    if (player.Inventory.findIndex(e => e.Name === "SpellBook") === -1) {
        console.log(player.Inventory.findIndex(e => e.Name === "SpellBook"))
        player.Inventory.push(ItemDict.SpellBook);
    }
    HemScale();
}
// Hopefully obselite
/**
 *     for (var e of player.Inventory) {
        var itemarray = Object.values(ItemDict);
        for (var b of itemarray) {
            if (e.Name === b.Name) {
                e.Use = b.Use
            }
        }
    }
 */
document.getElementById("Children").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("ChildrenMenu").style.display = 'block';
    Childs();
});
document.getElementById("LeaveChildrenMenu").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("DetailedInfo").style.display = 'block';
})

function Childs() {
    var Children = [];
    Children += "<div>By you<br>"
    for (var e = 0; e < player.Children.length; e++) {
        var age = Math.round(player.Children[e].AgeCounter / 365);
        if (age < 1) {
            age = Math.round(player.Children[e].AgeCounter / 30) + " months";
        } else {
            age += " years"
        }
        var Child = "<button type=\"button\">Child " + (e + 1) + "<br>Father: " + player.Children[e].Father +
            "<br>" + age + " old</button>"
        Children += Child;
    }
    Children += "</div>"
    if (House.Dormmates.length > 0) {
        for (var e of House.Dormmates) {
            if (e.Children.length > 0) {
                Children += "<div>" + e.FirstName + " " + e.LastName + "<br>"
                for (var i = 0; i < e.Children.length; i++) {
                    var age = Math.round(e.Children[i].AgeCounter / 365);
                    if (age < 1) {
                        age = Math.round(e.Children[i].AgeCounter / 30) + " months";
                    } else {
                        age += " years"
                    }
                    Child = "<button type=\"button\">Child " + (i + 1) + "<br>" + age + " old </button>"
                    Children += Child;
                }
                Children += "</div>"
            }
        }
    }
    console.log(player.Children)
    document.getElementById("ChildCorner").innerHTML = Children;
}
function UpdateStats(YourTurn = true) {
    let ee = enemies[EnemyIndex];
    CombatButtons();
    const ESH = document.getElementById("EnemyStatusHealth"),
        ESWH = document.getElementById("EnemyStatusWillHealth"),
        SH = document.getElementById("StatusHealth2"),
        SWH = document.getElementById("StatusWillHealth2"),
        BE = document.getElementById("BattleEnemy"),
        SN = document.getElementById("StatusName2");
    // Enemy Status
    BE.innerHTML = `${ee.Name}<br>${ee.Race} ${Pronoun(CheckGender(ee))}`;
    ESH.innerHTML = Math.round(ee.Health);
    ESH.style.width = `${100 * (ee.Health / ee.FullHealth)}%`;
    ESWH.innerHTML = Math.round(ee.WillHealth);
    ESWH.style.width = `${100 * (ee.WillHealth / ee.FullWillHealth)}%`;
    // Player Status
    SN.innerHTML = `${player.Name} ${player.LastName}`;
    SH.innerHTML = Math.round(player.Health);
    SH.style.width = `${Math.min(103, 100 * (player.Health / player.MaxHealth))}%`;
    SWH.innerHTML = Math.round(player.WillHealth);
    SWH.style.width = `${Math.min(103, 100 * (player.WillHealth / player.MaxWillHealth))}%`;
    player.Mana += 2; // Slow in combat mana rec

    if (ee.Health <= 0 || ee.WillHealth <= 0) {
        WinBattle();
        return;
    } else if (player.Health <= 0 || player.WillHealth <= 0) {
        Lose();
        return;
    }

    if (YourTurn === false) {
        EnemyAttack();
    }


}

function EnemyAttack() {
    const PhysicalAttacks = [
            "kicks", "hits", "grapple with"
        ],
        BT = document.getElementById("BattleText2");

    let ee = enemies[EnemyIndex];
    if (ee.Str >= ee.Charm) {
        let EAttack = (RandomInt(1, 5) * ee.Str) / 2;
        player.Health -= EAttack;
        BT.innerHTML = "Your opponent " + RandomString(PhysicalAttacks) + " you, causing " + EAttack + " dmg.";
        UpdateStats();
        return;
    } else { // if (ee.Str < ee.Charm) Unnesary?
        let LustAttacks = ["tease you"];
        if (ee.Boobies[0].Size > 5) {
            let boob = "fondle their breast in a seductive manner";
            LustAttacks.push(boob);
        }
        if (ee.Balls.length > 0) {
            let ball = "fondle their balls in a teasing manner";
            LustAttacks.push(ball);
        }
        let EAttack = (RandomInt(1, 5) * ee.Charm) / 2;
        BT.innerHTML = `Your opponent ${RandomString(LustAttacks)} causing your will to suffer by ${EAttack}.`;
        player.WillHealth -= EAttack;
        UpdateStats();
        return;
    }
}
/**
 * Need to make enemy attack more flavour full
 * Make it so enemies tease with different movement & hit with stuff like kick, sweeps, slashing, etc..
 * Race specific is extra needed, succubus can tex tease by fucking themselfs with their tail maybe?
 */

// Battle attack buttons
// Ideas for new combat system I want to add resistence and other things for more depth
/** Ideas to add
 *  Ways to ignore resistance like pierce?
 *  Ways to do extra dmg like they have 5% res but you have 12% something so they get -7% res
 *  Pets & allies attack
 */

function LusRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.Will + 0.01 * who.Charm)));
}

function PhyRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.End + 0.01 * who.Str)));
}

function MagRes(who) {
    return Math.min(1, Math.max(0.2, 1 - (0.02 * who.Will + 0.01 * who.Int)));
}

function CombatFunc() { // Whole combat div
    const Combat = document.getElementById("Encounter");
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    const h1text = document.createTextNode("Battle");
    h1.appendChild(h1text);
    div.appendChild(h1);

    // Enemy
    const TheEnemy = document.createElement("div");
    TheEnemy.setAttribute("id", "TheEnemy");
    TheEnemy.classList.add("d");

    const BattleEnemy = document.createElement("p");
    BattleEnemy.setAttribute("id", "BattleEnemy");

    const EH = document.createElement("div");
    EH.setAttribute("id", "EnemyStatusHealth");
    EH.classList.add("StatusHealth");

    const EHOD = document.createElement("div");
    EHOD.classList.add("FullBar");
    EHOD.appendChild(EH);

    const EHL = document.createElement("label");
    EHL.setAttribute("for", "EnemyStatusHealth");
    EHL.innerHTML("Health");
};

function CombatButtons() { // Just combat buttons
    let ee = enemies[EnemyIndex];
    const Combat = document.getElementById("CombatButtons"),
        BT = document.getElementById("BattleText");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    let row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const Hit = ButtonButton();
    Hit.innerHTML = `Hit<br>${Math.floor(4 * player.Str / 2)}-${Math.floor(8 * player.Str / 2)}dmg`;
    Hit.addEventListener("click", function () {
        const PAttack = Math.floor(RandomInt(4, 8) * player.Str / 2); // * PhyRes(ee);
        ee.Health -= PAttack;
        BT.innerHTML = "You dealt " + PAttack + " dmg.";
        UpdateStats(false);
    });
    row1.appendChild(Hit);
    Combat.appendChild(row1);

    const NonTease = [ // Insert enemies who can't be beaten by tease
        "Feral"
    ];
    if (NonTease.some(e => e === ee.Name)) {
        // Nothing for now will later make it so tease doesn't get created.
        console.log("Non tease")
    } else {
        const Tease = ButtonButton();
        Tease.innerHTML = "Tease<br>" + Math.floor(4 * player.Charm / 2) + "-" + Math.floor(8 * player.Charm / 2) + "Will"
        Tease.addEventListener("click", function () {
            const PAttack = Math.floor(RandomInt(4, 8) * player.Charm / 2); // * LusRes(ee);
            ee.WillHealth -= PAttack;
            BT.innerHTML = "You dealt " + PAttack + " will dmg."
            UpdateStats(false);
        });
        row2.appendChild(Tease);
        Combat.appendChild(row2);
    }
    if (player.Spells.length > 0) {
        for (let e = 0; e < Math.min(player.Spells.length, 3); e++) {
            const Spell = SpellButton(e);
            row3.appendChild(Spell);
        }
        // if more than 3 spells spawn a spell book
        // Todo make it so that instead of spell with index 0,1,2 spawn at outside book make it so
        // that last casted spells is at the "quick cast" menu 
        if (player.Spells.length >= 2) {
            const book = InputButton("Spellbook");
            book.addEventListener("click", function () {
                Spellbook();
            });
            row3.appendChild(book);
        }
        Combat.appendChild(row3)
    }

    const FleeBattle = InputButton("Flee");
    FleeBattle.addEventListener("click", function () {
        const a = RandomInt(1, 10);
        if (a > 7) {
            battle = false;
            DisplayGame();
            document.getElementById("Encounter").style.display = 'none';
            BT.innerHTML = "Success!"
        }
        UpdateStats(false);
        BT.innerHTML = "You failed to get away."
    });
    row4.appendChild(FleeBattle);

    const Surrender = InputButton("Surrender");
    Surrender.addEventListener("click", function () {
        Lose();
    });
    row4.appendChild(Surrender);
    Combat.appendChild(row4);
}

function Spellbook() {
    // Replace all buttons with spells
    const Combat = document.getElementById("CombatButtons");
    // Purge old children
    while (Combat.hasChildNodes()) {
        Combat.removeChild(Combat.firstChild);
    }

    const row1 = document.createElement("div"),
        row2 = document.createElement("div"),
        row3 = document.createElement("div"),
        row4 = document.createElement("div");

    const CloseBook = InputButton("Close book");
    CloseBook.addEventListener("click", function () {
        CombatButtons();
    });
    row4.appendChild(CloseBook);

    // Using same e
    for (var e = 0; e < Math.min(player.Spells.length, 3); e++) {
        const Spell = SpellButton(e);
        row1.appendChild(Spell);
    }
    if (player.Spells.length > 2) {
        for (e = 3; e < Math.min(player.Spells.length, 7); e++) {
            const Spell = SpellButton(e);
            row2.appendChild(Spell);
        }
    }
    if (player.Spells.length > 6) {
        for (e = 7; e < Math.min(player.Spells.length, 10); e++) {
            const Spell = SpellButton(e);
            row3.appendChild(Spell);
        }
    }
    const Frag = document.createDocumentFragment();
    Rows = [row1, row2, row3, row4].forEach(function (src, index, array) {
        Frag.appendChild(src);
        if (index + 1 === array.length) {
            Combat.appendChild(Frag);
        }
    });
}

function SpellButton(index) { // Instead of repeating, Can only add fireball now need a const dic for spells
    const it = player.Spells[index],
        DictIt = SpellDict[it.Name],
        Spell = document.createElement("button"), // + " Mana-cost: " + ManaCost;
        ee = enemies[EnemyIndex];
    Spell.setAttribute("type", "button");
    Spell.setAttribute("title", SpellDictLite[it.Name].Title);
    Spell.innerHTML = `${DictIt.Name} ${DictIt.ManaCost()}M<br>${DictIt.Does(it.Exp)}`;
    Spell.addEventListener("click", function () {
        DictIt.Cast(index, ee);
        UpdateStats(false);
        console.log(it);
    });
    return Spell;
}
function PrintDoor(NESW) {
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    this.NESW = NESW;
    if (NESW == "E") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(startarea.width - grid, startarea.height / 2 - 3 * grid, grid, grid * 6);
    } else if (NESW == "S") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(startarea.width / 2 - 3 * grid, startarea.height - grid, grid * 6, grid);
    } else if (NESW == "W") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(0, startarea.height / 2 - 3 * grid, grid, grid * 6);
    } else if (NESW == "N") {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(startarea.width / 2 - 3 * grid, 0, grid * 6, grid);
    }
}

function ImageLoad(arr, callback) { // Preload images to stop flickering
    this.images = {};
    var loaded = 0;

    if (Array.isArray(arr)) {
        for (var e of arr) {
            var img = new Image();
            img.onload = ImageLoaded;
            img.src = "Tiles/" + e + ".png";
            images[e] = img;
        }
    } else {
        return
    }

    function ImageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback();
        }
    }
}
var _images = {};
var loader = ImageLoad(["Bandit", "Cave1", "Cave2", "Cave3", "Cave4", "City", "Forest", "Forest2", "Outlaws",
    "PathToOutlaws", "PathToOutlaws2", "RoadToCity", "RoadToCity2", "RoadToHome", "RoadToWitch", "RoadToWitch2",
    "rtb2", "Start", "Witchhut"
], function () {
    _images = this.images;
    // Stop player from starting before tiles are loaded
    document.getElementById("LoadingImagesProgress").style.visibility = "hidden";
    document.getElementById("GoToCharCreator").style.visibility = "visible"
    document.getElementById("LoadButton").style.visibility = "visible"
});

function PrintImage() { // New and improved
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    if (typeof _images[player.Map] !== "undefined") {
        ctx.clearRect(0, 0, startarea.width, startarea.height);
        ctx.drawImage(_images[player.Map], 0, 0, startarea.width, startarea.height);
    } else {
        PaintBackground()
    }
};

function CurrentMap() {
    var Npcs = []; // Moved here to avoid public handling of npcs, need to double check so I haven't
    // forgoten avoid any refernce to Npcs somewhere
    PrintImage()
    //First Town
    var Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)");
    var Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)");
    var Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)")
    // RtW
    var Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)");
    var WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 6, grid * 4.5, grid * 10, "RGB(133,94,66)");
    // Witch
    var WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)");
    var ChimeraShrine = new Npc("ChimeraShrine", "Chimera shrine", grid * 3, grid * 17, grid * 2, grid * 2, "RGB(133,94,66)");
    // Misc
    var Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)");

    function Portal(Xpos, Ypos) { // Portal is function so I can change X-position & Y-position
        return new Npc("LocalPortal", "Portal", grid * Xpos, grid * Ypos, grid * 4, grid * 4, "RGB(96, 47, 107)")
    }
    var Barber = new Npc("Barber", "Hair salon", grid * 15, grid, grid * 5, grid * 4, "RGB(133,94,66)");
    var PortalShop = new Npc("PortalShop", "Portal shop", grid, grid * 15, grid * 4, grid * 4, "RGB(133,94,66)");
    //Outlaw
    var BlackMarket = new Npc("BlackMarket", "Black market", grid * 12, grid * 5, grid * 5, grid * 3, "RGB(133,94,66)");
    // Dungeons
    var FirstDungeon = new Npc("FirstDungeon", "Dungeon", grid * 8, grid * 18, grid * 4, grid * 2, "RGB(133,94,66)");
    // Farm
    var FarmOwner = new Npc("FarmOwner", "Teoviz", grid * 5, grid * 2, grid, grid, "RGB(133,94,66)");
    var FarmBarn = new Npc("FarmBarn", "Barn", grid * 13, grid, grid * 5, grid * 7, "RGB(133,94,66)");
    // Shrine
    var MountainShrine = new Npc("MountainShrine", "Shrine", grid * 5, grid * 1, grid * 2, grid * 2, "Pink");
    var ShrinePriestess = new Npc("ShrinePriestess", "Priestess", grid * 15, grid, grid, grid, "Pink");
    // Dragons
    var TribeChief = new Npc("TribeChief", "", grid * 2, grid * 8, grid, grid, "#841A31");
    var TribeChiefWife = new Npc("TribeChiefWife", "", grid * 2, grid * 10, grid, grid, "#841A31");
    var TribeShop = new Npc("TribeShop", "", grid * 12, grid * 15, grid * 4, grid * 5, "RGB(133,94,66)");

    //Animal testing
    /*	var aSpawn = Math.random();
    	if (enemies.length < 1 && Settings.AnimalSpawn)
    	{
    		enemies = [animalSpawn(player.Height), animalSpawn(player.Height)];
    		return;
        }*/
    PrintMap();
    switch (player.Area) {
        case "First":
            switch (player.Map) {
                case "Start":
                    if (enemies.length < 1) {
                        enemies = [EncounterStart(), EncounterStart(), EncounterStart()];
                    }
                    PrintImage("Start");
                    break;
                case "RoadToCity":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath1(), EncounterPath1(), EncounterPath1()];
                    }
                    PrintImage("RoadToCity")
                    break;
                case "Bandit":
                    if (enemies.length < 1) {
                        enemies = [EncounterBandit(), EncounterBandit(), EncounterBandit(), EncounterBanditLord()];
                    }
                    PrintImage("Bandit");
                    break;
                case "RoadToCity2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath2(), EncounterPath2(), EncounterPath2()];
                    }
                    PrintImage("RoadToCity2");
                    break;
                case "City":
                    enemies = [];
                    Npcs = [Townhall, Bar, Shop];
                    PrintImage("City");
                    break;
                case "RoadToHome":
                    enemies = [];
                    Npcs = [ChimeraShrine];
                    PrintImage("RoadToHome");
                    break;
                case "RoadToWitch":
                    enemies = [];
                    Npcs = [Gym, WitchShop, Barber];
                    PrintImage("RoadToWitch");
                    break;
                case "RoadToWitch2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2()];
                    }
                    PrintImage("RoadToWitch2");
                    break;
                case "Witch":
                    enemies = [];
                    Npcs = [WitchHut];
                    PrintImage("Witchhut");
                    break;
                case "Forest":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest(), EncounterForest(), EncounterForest(), RespawnBlocker()];
                    }
                    PrintImage("Forest");
                    break
                case "Forest2":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest2(), EncounterForest2(), EncounterForest2(), EncounterForest2(), RespawnBlocker()];
                    }
                    PrintImage("Forest2");
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    if (enemies.length < 1) {

                    }
                    PrintImage("PathToOutlaws");
                    break;
                case "PathToOutlaws2":
                    if (enemies.length < 1) {

                    }
                    PrintImage("PathToOutlaws2");
                    break;
                case "Farm":
                    PrintDoor("W");
                    if (enemies.length < 1) {}
                    Npcs = [FarmOwner, FarmBarn]
                    break;
                case "Outlaws":
                    if (enemies.length < 1) {

                    }
                    Npcs = [BlackMarket, PortalShop, Portal(15,15)]
                    PrintImage("Outlaws");
                    break;
                case "Cave1":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1()]
                    }
                    PrintImage("Cave1");
                    break;
                case "Cave2":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2()]
                    }
                    PrintImage("Cave2");
                    break;
                case "Cave3":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave3(), EncounterCave3(), EncounterCave3()]
                    }
                    PrintImage("Cave3");
                    break;
                case "Cave4":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave4(), EncounterCave4(), EncounterCave4(), EncounterCave4()]
                    }
                    Npcs = [FirstDungeon];
                    PrintImage("Cave4");
                    break;
            }
            break;
        case "Mountain":
            switch (player.Map) {
                case "MountainStart":
                    PrintDoor("S");
                    PrintDoor("W");
                    if (enemies.length < 1) {

                    }
                    Npcs = [Portal(2, 2)];
                    break;
                case "MountainShrinePath":
                    PrintDoor("E");
                    PrintDoor("W");
                    if (enemies.length < 1) {
                        var a = RandomInt(2, 4);
                        enemies = [];
                        for (var e = 0; e < a; e++) {
                            enemies.push(EncounterMaiden());
                        }
                    }
                    break;
                case "MountainShrine":
                    PrintDoor("E");
                    PrintDoor("W");
                    if (enemies.length < 1) {

                    }
                    Npcs = [MountainShrine];
                    break;
                case "MountainClimb":
                    PrintDoor("S");
                    PrintDoor("N");
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainClimb2":
                    PrintDoor("E");
                    PrintDoor("N");
                    if (enemies.length < 1) {
                        enemies = [EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy()]
                    }
                    break;
                case "MountainClimb3":
                    PrintDoor("E");
                    PrintDoor("W");
                    if (enemies.length < 1) {
                        enemies = [];
                    }
                    break;
                case "MountainClimb4":
                    PrintDoor("W");
                    PrintDoor("N");
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind()];
                    }
                    break;
                case "MountainClimb5":
                    PrintDoor("S");
                    PrintDoor("N");
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterAnthroDragon()];
                    }
                    break;
                case "MountainClimb6":
                    PrintDoor("S");
                    PrintDoor("N");
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterAnthroDragon(), EncounterAnthroDragon()]
                    }
                    break;
                case "MountainClimb7":
                    PrintDoor("S");
                    PrintDoor("N");
                    if (enemies.length < 1) {
                        enemies = [EncounterAnthroDragon(), EncounterAnthroDragon(), EncounterAnthroDragon()];
                    }
                    break;
                case "MountainTribe":
                    PrintDoor("E");
                    PrintDoor("N");
                    Npcs = [TribeChief, TribeChiefWife, TribeShop];
                    enemies = [];
                    break;
                case "MountainClimb8":
                    PrintDoor("S");
                    PrintDoor("W");
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainClimb9":
                    PrintDoor("W");
                    PrintDoor("E");
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainClimb10":
                    PrintDoor("N");
                    PrintDoor("E");
                    if (enemies.length < 1) {

                    }
                    Npcs = [Portal(2, 2)];
                    break;
            }
            break;
        default:
            switch (player.Map) {
                case "TempCity":
                    if (enemies.length < 1) {

                    }
                    Npcs = [Portal(18, 18)];
                    break;
            }
    }
    Npcs.length > 0 ? (PrintNpcs(Npcs), TouchNpc(Npcs)) : false;
}

function PrintNpcs(Npcs) {
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    var needPrint = ["FarmBarn", "FarmOwner", "LocalPortal", "PortalShop", "Barber", "MountainShrine", "ChimeraShrine"];
    // Switched it so new npcs always print
    var DontneedPrint = ["Townhall", "Shop", "Bar", "Gym", "WitchShop", "WitchHut", "BlackMarket"];
    for (var e of Npcs) {
        if (DontneedPrint.indexOf(e.Name) === -1) {
            ctx.fillStyle = e.Color;
            ctx.fillRect(e.X, e.Y, e.Width, e.Height);
        }
        ctx.fillStyle = Settings.TextColor;
        ctx.font = "4vh Arial";
        ctx.textAlign = "center";
        ctx.fillText(e.RealName, e.X + e.Width / 2, e.Y + e.Height / 1.8);
    }
};

function TouchNpc(Npcs) {
    for (var n of Npcs) {
        if (sprite.x + grid * sprite.Size >= n.X && sprite.x < n.X + n.Width &&
            sprite.y + grid * sprite.Size >= n.Y && sprite.y < n.Y + n.Height) {
            if (mousedowner) {
                clearInterval(mFunction);
                mousedowner = false;
            }
            battle = true;
            var startarea = document.getElementById("hem");
            sprite.x = startarea.width / 2 - grid;
            sprite.y = startarea.height / 2;
            UpdateNpc(n.Name);
            document.getElementById("SellLimbs").style.display = Settings.EssenceAuto ? 'none' : 'inline-block';
        }
    }
}

function UpdateNpc(name) {
    var isfunction = window[name + "Func"];
    if (typeof isfunction === "function") { // Start replacing html building/npcs with javascript functions
        document.getElementById("map").style.display = 'none';
        document.getElementById("buttons").style.display = 'none';
        document.getElementById("EmptyButtons").style.display = 'block';
        isfunction();
    } else {
        document.getElementById(name).style.display = 'block';
        document.getElementById("map").style.display = 'none';
        document.getElementById("buttons").style.display = 'none';
        document.getElementById("EmptyButtons").style.display = 'block';
        document.getElementById("Leave" + name).addEventListener("click", function () {
            battle = false;
            document.getElementById(name).style.display = 'none';
            document.getElementById("map").style.display = 'block';
            document.getElementById("buttons").style.display = 'block';
            document.getElementById("EmptyButtons").style.display = 'none';
            document.getElementById("status").style.display = 'block';
            document.getElementById(name + "Text").innerHTML = null;
            return;
        });
    }
}

function PaintBackground() {
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    ctx.fillStyle = Settings.MapColor;
    ctx.fillRect(0, 0, startarea.width, startarea.height);

    // Wall around map
    ctx.fillStyle = Settings.BorderColor;
    ctx.fillRect(0, 0, grid / 2, startarea.height);
    ctx.fillRect(0, 0, startarea.width, grid / 2);
    ctx.fillRect(startarea.width - (grid / 2), 0, grid / 2, startarea.height);
    ctx.fillRect(0, startarea.height - (grid / 2), startarea.width, grid / 2);
}
function DateTracker() {
    if (!battle) {
        Flags.Date.Hour++;
        HouseEngine();
        FluidsEngine();
        if (Flags.Date.Hour > 24) {
            Flags.Date.Day++;
            Flags.Date.Hour = 0;
            if (Flags.Date.Day > 30) {
                Flags.Date.Day = 1;
                Flags.Date.Month++;
                if (Flags.Date.Month > 12) {
                    Flags.Date.Month = 1;
                    Flags.Date.Year++;
                    player.Age++;
                }
            }
            document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
            PregnanyEngine();
        }
        FoodEngine();
        // health/will && fat burn
        player.RestRate = 1 + player.Perks.FasterRest.Count * 1;
        if (player.Health < player.MaxHealth && player.Fat >= player.Height / 100) {
            if ((player.Health + player.RestRate) > player.MaxHealth) {
                player.Health = player.MaxHealth;
            } else {
                player.Health += player.RestRate;
            }
        }
        if (player.WillHealth < player.MaxWillHealth && player.Fat >= player.Height / 100) {
            if ((player.WillHealth + player.RestRate) > player.MaxWillHealth) {
                player.WillHealth = player.MaxWillHealth;
            } else {
                player.WillHealth += player.RestRate;
            }
        }
        if (player.Fat <= player.Height / 100) {
            player.Health -= 1;
            player.WillHealth -= 1;
        }
        if (Settings.Vore) {
            if (player.Vore.VorePerks.hasOwnProperty("PredatorsMeta")) {
                var RestRate = player.Vore.VorePerks.PredatorsMeta.Count * 2;
                if (player.Health < player.MaxHealth && player.Fat >= player.Height / 100) {
                    if ((player.Health + RestRate) > player.MaxHealth) {
                        player.Health = player.MaxHealth;
                    } else {
                        player.Health += RestRate;
                    }
                }
                if (player.WillHealth < player.MaxWillHealth && player.Fat >= player.Height / 100) {
                    if ((player.WillHealth + RestRate) > player.MaxWillHealth) {
                        player.WillHealth = player.MaxWillHealth;
                    } else {
                        player.WillHealth += RestRate;
                    }
                }
                if ((player.Fat / player.Weight) * 100 > 18) {
                    player.Fat -= player.Fat/100 * player.Vore.VorePerks.PredatorsMeta.Count;
                }
            }
        }
    }
}
function TestDialog() {
    var Npc = document.getElementById("Npcs");
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.lastChild)
    };

    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode("Testsson");
    h1.appendChild(h1Text);
    Npc.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    Npc.appendChild(p);

    var Inputs = document.createElement("div");

    var Option1 = InputButton("Option 1");
    Option1.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option11 = InputButton("Option 1-1");
        Option11.addEventListener("click", function () {

        });
        Inputs.appendChild(Option11);

        var Option12 = InputButton("Option 1-2");
        Option12.addEventListener("click", function () {

        });
        Inputs.appendChild(Option12);
    });
    Inputs.appendChild(Option1);

    var Option2 = InputButton("Option 2a");
    Option2.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option21 = InputButton("Option 2-1");
        Option21.addEventListener("click", function () {

        });
        Inputs.appendChild(Option21);

        var Option22 = InputButton("Option 2-2");
        Option22.addEventListener("click", function () {

        });
        Inputs.appendChild(Option22);
    });
    Inputs.appendChild(Option2);

    Npc.appendChild(Inputs);
}
function RaceDrain(whose) {
    const RaceEss = player.RaceEssence,
        a = RaceEss.findIndex(e => e.Race == whose.Race);
    if (a > -1) {
        RaceEss[a].amount += RandomInt(2, 10);
    } else {
        const Race = {
            Race: whose.Race,
            amount: RandomInt(2, 10)
        }
        RaceEss.push(Race);
    }
    const b = RaceEss.findIndex(e => e.Race == whose.SecondRace);
    if (b > -1) {
        RaceEss[b].amount += RandomInt(1, 5);
    } else {
        const Race = {
            Race: whose.SecondRace,
            amount: RandomInt(1, 5)
        }
        RaceEss.push(Race);
    }
};

function DrainDrainM() {
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    var enemy = enemies[EnemyIndex];
    if (player.EssenceDrain >= enemies[EnemyIndex].Masc && enemies[EnemyIndex].Masc > 0) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedFemale)
            player.Femi += enemies[EnemyIndex].Masc;
        else
            player.Masc += enemies[EnemyIndex].Masc;
        enemies[EnemyIndex].Masc = 0;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon the last essence of masculinity from them leaving them with no signs of masculinity left." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.EssenceDrain < enemies[EnemyIndex].Masc) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedFemale)
            player.Femi += player.EssenceDrain;
        else
            player.Masc += player.EssenceDrain;
        enemies[EnemyIndex].Masc -= player.EssenceDrain;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon essence of masculinity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }
    RaceDrain(enemy);
    AfterBattleButtons();
    CheckArousal();
    return;
};

function DrainDrainF() {
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    var enemy = enemies[EnemyIndex];
    if (player.EssenceDrain >= enemies[EnemyIndex].Femi && enemies[EnemyIndex].Femi > 0) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedMale)
            player.Masc += enemies[EnemyIndex].Femi;
        else
            player.Femi += enemies[EnemyIndex].Femi;
        enemies[EnemyIndex].Femi = 0;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon the last essence of femininity from them leaving them with no signs of femininity left. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.EssenceDrain < enemies[EnemyIndex].Femi) {
        enemies[EnemyIndex].SessionOrgasm--;
        if (player.ForcedMale)
            player.Masc += player.EssenceDrain;
        else
            player.Femi += player.EssenceDrain;
        enemies[EnemyIndex].Femi -= player.EssenceDrain;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You siphon essence of femininity from them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }
    RaceDrain(enemy);
    AfterBattleButtons();
    CheckArousal();
    return;
};

function DrainInjectM() {
    var q = Math.min(player.GiveEssence, player.Masc);
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    if (player.GiveEssence >= player.Masc && player.Masc > 0) {
        player.SessionOrgasm--;
        player.Masc -= q;
        enemies[EnemyIndex].Masc += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You inject them with your last essence of masculinity, leaving yourself male-free." + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.GiveEssence < player.Masc) {
        player.SessionOrgasm--;
        player.Masc -= q;
        enemies[EnemyIndex].Masc += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You inject essence of masculinity into them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }

    AfterBattleButtons();
    CheckArousal();
    return;
};

function DrainInjectF() {
    var q = Math.min(player.GiveEssence, player.Femi);
    var old = JSON.parse(JSON.stringify(player));
    var eold = JSON.parse(JSON.stringify(enemies[EnemyIndex]));
    if (player.GiveEssence >= player.Femi && player.Femi > 0) {
        player.SessionOrgasm--;
        player.Femi -= q;
        enemies[EnemyIndex].Femi += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You give them the last of your femininity, leaving yourself female-free. " + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    } else if (player.GiveEssence < player.Femi) {
        player.SessionOrgasm--;
        player.Femi -= q;
        enemies[EnemyIndex].Femi += q;
        EssenceCheck(enemies[EnemyIndex]);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        document.getElementById("SexText").innerHTML = "You inject essence of femininity into them.<br>" + DrainChanges(old, player, eold, enemies[EnemyIndex]);
    }
    AfterBattleButtons();
    CheckArousal();
    return;
};

function IntToAge(int) {
    switch (int) {
        case 1:
            return "one year";
        case 2:
            return "two years";
        case 3:
            return "three years";
        case 4:
            return "four years";
        case 5:
            return "five years";
        case 6:
            return "six years";
        default:
            return int + "years";
    }
}

function DrainChangesEnemy(eold, ecurrent) {
    var b = "";
    if (eold.Dicks.length > ecurrent.Dicks.length) {
        if (ecurrent.Dicks.length < 1) {
            b += "You see their dick shrinking completely into their body, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "They lost a dick"
        }
    } else if (eold.Dicks.length < ecurrent.Dicks.length) {
        b += "They have grown a dick"
    } else if (ecurrent.Dicks.length > 0) {
        for (var e = 0; e < eold.Dicks.length; e++) {
            if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick shrinking" //Need to add what dick e.g. their second dick shrinks etc
            } else if (Math.round(eold.Dicks[e].Size) > Math.round(ecurrent.Dicks[e].Size)) {
                b = "You see their dick growing"
            }
        }
    }

    if (eold.Balls.length > ecurrent.Balls.length) {
        if (ecurrent.Balls.length < 1) {
            b += "<br>They lost a pair of balls"
        } else {
            b += "<br>They lost a pair of balls"
        }
    } else if (eold.Balls.length < ecurrent.Balls.length) {
        b += "<br>They have grown a pair of balls"
    } else if (ecurrent.Balls.length > 0) {
        for (var e = 0; e < ecurrent.Balls.length; e++) {
            if (Math.round(eold.Balls[e].Size) > Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls shrinking"
            } else if (Math.round(eold.Balls[e].Size) < Math.round(ecurrent.Balls[e].Size)) {
                b += "<br>You see their balls growing"
            }
        }
    }

    if (eold.Boobies.length > ecurrent.Boobies.length) {
        b += "<br>They loost a pair of breasts";
    } else if (eold.Boobies.length < ecurrent.Boobies.length) {
        b += "<br>They have grown a pair of breasts";
    } else {
        for (var e = 0; e < eold.Boobies.length; e++) {
            if (Math.round(eold.Boobies[e].Size) > Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts shrinking."
            } else if (Math.round(eold.Boobies[e].Size) < Math.round(ecurrent.Boobies[e].Size)) {
                b += "<br>You see their breasts growing."
            }
        }
    }

    if (eold.Pussies.length > ecurrent.Pussies.length) {
        if (ecurrent.Pussies.length < 1) {
            b += "<br>You see their pussy closing completely and disappear, turning them into a " + Pronoun(CheckGender(ecurrent)) + ".";
        } else {
            b += "<br>They a lost a pussy"
        }
    } else if (eold.Pussies.length < ecurrent.Pussies.length) {
        b += "<br>They a have grown a pussy"
    } else if (ecurrent.Pussies.length > 0) {
        for (var e = 0; e < eold.Pussies.length; e++) {
            if (Math.round(eold.Pussies[e].Size) > Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy tightening"
            } else if (Math.round(eold.Pussies[e].Size) < Math.round(ecurrent.Pussies[e].Size)) {
                b += "You feel their pussy growing" //Need better word/phrase than growing
            }
        }
    }
    return b;
}

//Need to do same for player
function DrainChanges(old, current, eold, ecurrent) {
    var a = " ";
    var b = " ";

    if (old.Dicks.length < current.Dicks.length) {
        a = "You have grown a dick!";
    } else if (current.Dicks.length < old.Dicks.length) {
        if (current.Dicks.length < 1) {

        } else {
            a = "You have lost a dick";
        }

    } else if (current.Dicks.length > 0) {
        for (var e = 0; e < current.Dicks.length; e++) {
            if (Math.round(old.Dicks[e].Size) < Math.round(current.Dicks[e].Size)) {
                a += "<br>You feel your dick growing.";
            } else if (Math.round(current.Dicks[e].Size) < Math.round(old.Dicks[e].Size)) {
                a += "<br>You feel your dick shrinking.";
            }
        }
    }

    if (old.Balls.length < current.Balls.length) {
        a += "<br>you have grown a pair of balls"
    } else if (current.Balls.length < old.Balls.length) {
        a += "<br>you have lost a pair of balls"
    } else if (current.Balls.length > 0) {
        for (var e = 0; e < current.Balls.length; e++) {
            if (Math.round(old.Balls[e].Size) < Math.round(current.Balls[e].Size)) {
                a += "<br>you feel you balls growing"
            } else if (Math.round(current.Balls[e].Size) < Math.round(old.Balls[e].Size)) {
                a += "<br>you feel you balls shrinking"
            }
        }
    }

    if (old.Boobies.length < current.Boobies.length) {
        a += "<br>You have grown a new pair of breasts."
    } else if (current.Boobies.length < old.Boobies.length) {
        a += "<br>You have lost a pair of breasts"
    } else if (current.Boobies.length > 0) {
        for (var e = 0; e < current.Boobies.length; e++) {
            if (Math.round(old.Boobies[e].Size) < Math.round(current.Boobies[e].Size)) {
                a += "<br>You feel your breasts grow bigger.";
            } else if (Math.round(current.Boobies[e].Size) < Math.round(old.Boobies[e].Size)) {
                a += "<br>You feel your breasts shrinking.";
            }
        }
    }

    if (old.Pussies.length < current.Pussies.length) {
        a += "<br>You gave grown a pussy";
    } else if (current.Pussies.length < old.Pussies.length) {
        a += "<br>You have lost a pussy";
    } else if (current.Pussies.length > 0) {
        for (var e = 0; e < current.Pussies.length; e++) {
            if (Math.round(old.Pussies[e].Size) < Math.round(current.Pussies[e].Size)) {
                a += "<br>You feel your pussy grow";
            } else if (Math.round(current.Pussies[e].Size) < Math.round(old.Pussies[e].Size)) {
                a += "<br>You feel your pussy tighten";
            }
        }
    }
    if (CheckGender(old) != CheckGender(current)) {
        a += "<br><br>You have become a " + Pronoun(CheckGender(current)) + "!<br>";
    }
    b = DrainChangesEnemy(eold, ecurrent);
    return "<br>" + a + "<br>" + b;
}
function SnowInventoryAdd(item, quantity = 1) {
    var i = 0;
    for (i = 0; i < player.Inventory.length; i++) {
        var q = false;
        if (player.Inventory[i].Name === item.Name) {
            player.Inventory[i].Quantity += quantity;
            q = true;
            break;
        }
    }
    if (!q) {
        item.Quantity = quantity;
        player.Inventory.push(item);
    }
}

function DropSystem(who) {
    var dropRate = {
        "Human": 1.00,
        "Halfling": 1.00,
        "Orc": 1.00,
        "Troll": 1.00,
        "Farmer": 1.00,
        "Elf": 1.00,
        "Amazon": 1.00,
        "Fairy": 1.00,
        "Commoner": 1.00,
        "Thug": 1.00,
        "Dark elf": 1.00,
        "Imp": 1.00,
        "Goblin": 1.00,
        "Dhampir": 1.00,
        "Demon": 1.00,
        "Succubus": 1.00,
        "Incubus": 1.00,
        "Witch": 1.00
    }
    var e = who;
    var r = Math.random();
    if (r <= dropRate[e.Name]) {
        switch (e.Name) {
            case "Banditlord":
                SnowInventoryAdd(ItemDict.orcCum.Lite);
                break;
            case "Commoner":
                SnowInventoryAdd(ItemDict.halfPouch.Lite);
                break;
            case "Farmer":
                SnowInventoryAdd(ItemDict.milkJug.Lite);
                break;
            case "Thug":
                SnowInventoryAdd(ItemDict.halfPouch.Lite);
                break;
            case "Witch":
                SnowInventoryAdd(ItemDict.book.Lite);
                break;
            default:
                break;
        }
    }
    var r = Math.random();
    if (r <= dropRate[e.Race]) {
        switch (e.Race) {
            case "Fairy":
                SnowInventoryAdd(ItemDict.fairyDust.Lite);
                break;
            case "Human":
                SnowInventoryAdd(ItemDict.humanity.Lite);
                break;
            case "Halfling":
                SnowInventoryAdd(ItemDict.pouch.Lite);
                break;
            case "Orc":
                SnowInventoryAdd(ItemDict.orcBrew.Lite);
                break;
            case "Troll":
                SnowInventoryAdd(ItemDict.trollMilk.Lite);
                break;
            case "Elf":
                SnowInventoryAdd(ItemDict.elvenHair.Lite);
                break;
            case "Amazon":
                SnowInventoryAdd(ItemDict.amazonGirdle.Lite);
                break;
            case "Dark Elf":
                SnowInventoryAdd(ItemDict.elvenHair.Lite);
                break;
            case "Goblin":
                SnowInventoryAdd(ItemDict.fertilityIdol.Lite);
                break;
            case "Imp":
                SnowInventoryAdd(ItemDict.cockyRock.Lite);
                break;
            case "Demon":
                SnowInventoryAdd(ItemDict.infernalSemen.Lite);
                break;
            case "Dhampir":
                SnowInventoryAdd(ItemDict.infernalMilk.Lite);
                break;
            case "Succubus":
                SnowInventoryAdd(ItemDict.SuccMilk.Lite);
                break;
            case "Incubus":
                SnowInventoryAdd(ItemDict.IncSemen.Lite);
                break;
            default:
                break;
        }
    }
}
function EEChanges(ee) {
    switch (ee.Name) {
        case "Pure":
            ee.Name = "Depraved"
            break;
        default:
            break;
    }
    switch (ee.Race) {
        default:
            break;
    }
}
/* Not in use for the moment but I made it so that if I add more scenarios like pure maiden, it's easy 
    to expand on*/
const Equipment = {
    itemTemplate: {
        Name: "Name of the item",
        Equip: "No",
        Drop: true, // or false
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
    },
    blade: {
        Lite: {
            Name: "Blade"
        },
        // currently used in TestFlags.js
        Name: "Blade",
        //Use: "Yes",
        Equip: "Yes",
        Drop: true,
        Does: "Temp+5",
        Quantity: 1,
        Title: "Temp_Tempsson legendary temp sword gives +999 to testing."
    }
}
function GrowthScale(who) {
    return (who.Height / 160)
} // I put this a function to make it easier to trial different formulas.


function EssenceCheck(who) {
    function DickSize(e = 0) {
        return Math.min(who.Height / 3, (Math.sqrt(who.Masc / (e + 1)) + who.OrganMod.Dick.Size) * GrowthScale(who));
    }

    function DickMaker(e = 0) {
        const Dick = {
            Size: DickSize(e),
            Type: who.Race,
            Virgin: true
        }
        return Dick;
    }

    function BallsSize(e = 0) {
        return Math.min(who.Height / 3, (Math.sqrt(who.Masc / (e + 2) + who.OrganMod.Balls.Size) * GrowthScale(who)));
    }

    function BallMakes(e = 0) {
        const Ball = {
            Size: BallsSize(e),
            Type: who.Race,
            CumMax: 1 / 3 * Math.PI * Math.pow(BallsSize(e), 3),
            Cum: 1 / 6 * Math.PI * Math.pow(BallsSize(e), 3),
            CumRate: 0,
            CumBaseRate: 0.5
        }
        return Ball;
    }

    function BoobSize(e = 0) {
        return Math.min(who.Height / 3, (Math.sqrt(who.Femi / (e + 1) + who.OrganMod.Boobies.Size) * GrowthScale(who)));
    }

    function BoobMaker(e = 0) {
        const Boob = {
            Size: BoobSize(e),
            Type: who.Race,
            Milk: 0,
            MilkBaseRate: 0,
            MilkRate: 0,
            MilkMax: 1 / 3 * Math.PI * Math.pow(BoobSize(e), 3)
        }
        return Boob;
    }

    function PussySize(e = 0) {
        return Math.min(who.Height / 3, (Math.sqrt(who.Femi / (e + 2) + who.OrganMod.Pussy.Size) * GrowthScale(who)));
    }

    function PussyMaker(e = 0) {
        const Pussy = {
            Size: PussySize(e),
            Type: who.Race,
            Virgin: true
        }
        return Pussy;
    }
    if (!who.hasOwnProperty("OrganMod")) {
        who.OrganMod = {
            Dick: {
                Size: 0
            },
            Boobies: {
                Size: 0
            },
            Balls: {
                Size: 0
            },
            Pussy: {
                Size: 0
            },
            Anal: {
                Size: 0
            }
        }
    }
    if (!who.hasOwnProperty("Dicks")) {
        who.Dicks = [];
    }
    if (!who.hasOwnProperty("Balls")) {
        who.Balls = [];
    }
    if (!who.hasOwnProperty("Pussies")) {
        who.Pussies = [];
    }
    if (!who.hasOwnProperty("Boobies")) {
        who.Boobies = [];
    }
    if (!who.hasOwnProperty("Anal")) {
        who.Anal = []
    }

    if (DickSize() < player.Height * 0.03 && who.Dicks.length > 0) {
        who.Dicks.pop();
    } else {
        if (who.Dicks.length === 0) {
            who.Dicks.push(DickMaker());
            EssenceCheck(who); // Recursion might be a problem?
            return;
        }
        for (let e = 0; e < who.Dicks.length; e++) {
            who.Dicks[e].Size = DickSize(e);
            if (e + 1 === who.Dicks.length && who.Dicks[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxDicks > e) {
                who.Dicks.push(DickMaker(e + 1));
                EssenceCheck(who); // Recursion might be a problem?
                return;
            } else if (who.Dicks[e].Size < player.Height * 0.03 || e >= Settings.MaxLimbs.MaxDicks) {
                if (who.Dicks.length > 0) {
                    who.Dicks.pop();
                }
            }
        }
    }

    if (BallsSize() < player.Height * 0.03 && who.Balls.length > 0) {
        who.Balls.pop();
    } else {
        if (who.Balls.length === 0) {
            who.Balls.push(BallMakes());
            EssenceCheck(who);
            return;
        }
        for (let e = 0; e < who.Balls.length; e++) {
            who.Balls[e].Size = BallsSize(e);
            if (e == who.Balls.length - 1 && who.Balls[e].Size > who.Height / 6 && Settings.MaxLimbs.MaxBalls > e) {
                who.Balls.push(BallMakes(e + 1));
                EssenceCheck(who);
                return;
            } else if (who.Balls[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxBalls) {
                who.Balls.pop();
            }
        }

    }

    if (PussySize() < player.Height * 0.03 && who.Pussies.length > 0) {
        who.Pussies.pop();
    } else {
        if (who.Pussies.length === 0) {
            who.Pussies.push(PussyMaker());
            EssenceCheck(who);
            return;
        }
        for (var e = 0; e < who.Pussies.length; e++) {
            who.Pussies[e].Size = PussySize(e);
            if (e + 1 === who.Pussies.length && who.Pussies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxVaginas > e) {
                who.Pussies.push(PussyMaker(e + 1));
                EssenceCheck(who);
                return;
            } else if (who.Pussies[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxVaginas) {
                who.Pussies.pop();
            }
        }
    }
    if (who.Boobies.length === 0) {
        who.Boobies.push(BoobMaker());
        EssenceCheck(who);
        return
    }
    for (let e = 0; e < who.Boobies.length; e++) {
        if (e === 0) {
            who.Boobies[e].Size = Math.max(0, BoobSize(e));
        } else {
            who.Boobies[e].Size = BoobSize(e)
        }
        who.Boobies[e].MilkMax = 1 / 3 * Math.PI * Math.pow(who.Boobies[e].Size, 3);
        if (e + 1 === who.Boobies.length && who.Boobies[e].Size > who.Height / 5 && Settings.MaxLimbs.MaxBoobs > e) {
            who.Boobies.push(BoobMaker(e + 1));
            EssenceCheck(who);
            return
        } else if (who.Boobies.length > 1 && who.Boobies[e].Size < who.Height * 0.03 || e >= Settings.MaxLimbs.MaxBoobs) {
            who.Boobies.pop();
            console.log("pop")
        }
    }
    if (who.Anal.length === 0) {
        const Anal = {
            Size: who.Height / 12,
            Type: who.Race,
            Virgin: true,
            stretch: 1,
        }
        who.Anal.push(Anal);
    } else {
        who.Anal[0].Size = who.Height / 12;
    }
    return;

}
	    // Event log
	    var LogArray = [];

	    function EventLog(LogText) {
	    	var newText = LogText + "<br>";
	    	LogArray.unshift(newText);
	    	while (LogArray.length > Settings.LogLength) {
	    		LogArray.pop();
	    	}
	    	var LogHistory = "";
	    	for (var e = 0; e < LogArray.length; e++) {
	    		LogHistory += LogArray[e] + "<br>";
	    	}
	    	//LogHistory = newText + LogHistory;
	    	document.getElementById("EventText").innerHTML = LogHistory;
	    }
	    document.getElementById("HideEventLog").addEventListener("click", function () {
	    	if (document.getElementById("EventLogPart").style.display == 'none') {
				document.getElementById("EventLogPart").style.display = 'block';
				document.getElementById("EventLogH2").style.display = 'inline-block';
	    		document.getElementById("HideEventLog").value = "Hide";
	    	} else {
	    		document.getElementById("EventLogPart").style.display = 'none';
				document.getElementById("HideEventLog").value = "Show E";
				document.getElementById("EventLogH2").style.display = 'none';
	    	}
	    });
	    document.getElementById("HideFluids").addEventListener("click", function () {
	    	if (document.getElementById("FluidPart").style.display == 'none') {
				document.getElementById("FluidPart").style.display = 'block';
				document.getElementById("EventFluidsH2").style.display = 'inline-block';
				document.getElementById("FluidsMode").style.display = 'inline-block';
	    		document.getElementById("HideFluids").value = "Hide";
	    	} else {
				document.getElementById("FluidPart").style.display = 'none';
				document.getElementById("EventFluidsH2").style.display = 'none';
				document.getElementById("FluidsMode").style.display = 'none';
	    		document.getElementById("HideFluids").value = 'Show F';
	    	}
	    });
	    document.getElementById("FluidsMode").addEventListener("click", function () {
	    	var menu = document.getElementById("FluidContainer");
	    	var Fluid = document.getElementById("FluidsMode");
	    	switch (Fluid.value) {
	    		case "1":
	    			menu.setAttribute("class", "TwoColumn");
	    			Fluid.value = 2;
	    			break;
	    		case "2":
	    			menu.setAttribute("class", "ThreeColumn");
	    			Fluid.value = 3;
	    			break;
	    		case "3":
	    			menu.setAttribute("class", "AutoColumn");
	    			Fluid.value = "A";
	    			break;
	    		case "A":
	    			menu.setAttribute("class", "OneColumn");
	    			Fluid.value = 1;
	    			break;
	    	}
	    });
	    var EventMax = false;
	    document.getElementById("EventLogPart").addEventListener("click", function () {
	    	if (EventMax) {
	    		document.getElementById("EventLog").style.width = 20 + "vw";
	    		document.getElementById("EventLog").style.maxHeight = 50 + "vh";
	    		EventMax = false;
	    	} else {
	    		document.getElementById("EventLog").style.width = 80 + "vw";
	    		document.getElementById("EventLog").style.maxHeight = 80 + "vh";
	    		EventMax = true;
	    	}
	    	console.log("Clicks")
	    });
function FluidsEngine() {
    document.getElementById("FemcumBar").style.display = 'none';
    if (player.Balls.length > 0) {
        for (var b = 0; b < player.Balls.length; b++) {
            player.Balls[b].CumMax = 1 / 3 * Math.PI * Math.pow(player.Balls[b].Size, 3),
                player.Balls[b].CumBaseRate = player.Balls[b].CumMax / 500;
            if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                player.Balls[b].Cum += Math.max(0, player.Balls[b].CumRate + player.Balls[b].CumBaseRate);
            }
        }
        document.getElementById("CumBar").style.display = 'block';
        var TotalCum = 0,
            TotalCumMax = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            TotalCum += player.Balls[e].Cum;
            TotalCumMax += player.Balls[e].CumMax
        }
        var CumPercent = TotalCum / TotalCumMax;
        if (false) {
            EventLog("Your balls are so full that you can barely hold it!")
        }
        document.getElementById("FluidCum").innerHTML = Math.round((Math.round(TotalCum) / 1000) * 10) / 10 + "L";
        document.getElementById("FluidCum").style.width = Math.min(1, CumPercent) * 100 + "%";

    } else {
        document.getElementById("CumBar").style.display = 'none';
    }
    if (player.Boobies.length > 0 && GotMilk(player)) {
        document.getElementById("MilkBar").style.display = 'block';
        var TotalMilk = 0,
            TotalMilkMax = 0;
        for (var b = 0; b < player.Boobies.length; b++) {
            if (!Settings.EssenceAuto) {
                player.Boobies[b].MilkMax = 1 / 3 * Math.PI * Math.pow(player.Boobies[b].Size, 3);
            }
            if (player.Boobies[b].MilkRate > 0) {
                player.Boobies[b].Milk += player.Boobies[b].MilkRate;
            }
        }
        for (var e = 0; e < player.Boobies.length; e++) {
            TotalMilk += player.Boobies[e].Milk;
            TotalMilkMax += player.Boobies[e].MilkMax
        }
        var MilkPercent = TotalMilk / TotalMilkMax;
        if (false) {
            EventLog("You breasts are so full that they have started leaking!")
        }
        document.getElementById("FluidMilk").innerHTML = Math.round((Math.round(TotalMilk) / 1000) * 10) / 10 + "L";
        document.getElementById("FluidMilk").style.width = Math.min(1, MilkPercent) * 100 + "%";

    } else {
        document.getElementById("MilkBar").style.display = 'none';
    }
    if (House.Dormmates.length > 0) {
        for (var e = 0; e < House.Dormmates.length; e++) {
            EssenceCheck(House.Dormmates[e]);
            if (House.Dormmates[e].Balls.length > 0) {
                for (var b = 0; b < House.Dormmates[e].Balls.length; b++) {
                    House.Dormmates[e].Balls[b].CumMax = 1 / 3 * Math.PI * Math.pow(House.Dormmates[e].Balls[b].Size, 3),
                        House.Dormmates[e].Balls[b].CumBaseRate = House.Dormmates[e].Balls[b].CumMax / 500;
                    if (House.Dormmates[e].Balls[b].Cum < House.Dormmates[e].Balls[b].CumMax) {
                        House.Dormmates[e].Balls[b].Cum += Math.max(0, House.Dormmates[e].Balls[b].CumRate + House.Dormmates[e].Balls[b].CumBaseRate);
                    }
                }
            }

        }
    }
}
//Well, this disables *everything* below. Moving it out of the function.
function GotMilk(who) {
    for (var e of who.Boobies) {
        if (e.MilkRate > 0) {
            return true;
        }
    }
    return false;
}
function HairGrowth() {
    player.Face.HairLength++;
}
    // Makes sure map scales correctly when user change screen size.
    function HemScale() {
        if (window.innerHeight < 500) {
            document.getElementById("FirstButtons").style.display = 'none';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
            document.getElementById("MobileButtons").style.display = 'inline-block';
        } else if (window.innerHeight < 850) {
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MoreButtons").style.display = 'inline-block';
            document.getElementById("LessButtons").style.display = 'inline-block';
            document.getElementById("MobileButtons").style.display = 'none';
        } else {
            document.getElementById("SecondButtons").style.display = 'block';
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MoreButtons").style.display = 'none';
            document.getElementById("LessButtons").style.display = 'none';
            document.getElementById("MobileButtons").style.display = 'none';
        }
        var startarea = document.getElementById("hem");
        var OldMap = medium;
        medium = Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20;
        startarea.width = medium;
        3
        startarea.height = medium;
        var NewMap = medium;
        grid = (startarea.height / 20);
        sprite.x = sprite.x * NewMap / OldMap;
        sprite.y = sprite.y * NewMap / OldMap;
        for (var j = 0; j < enemies.length; j++) {
            enemies[j].Size = enemies[j].Size * (NewMap / OldMap);
            enemies[j].XPos = enemies[j].XPos * (NewMap / OldMap);
            enemies[j].YPos = enemies[j].YPos * (NewMap / OldMap);
        }
        return;
    }
var BrothelLogArray = [];

/* Instead of constant passive gain through brothel, servants will gain gold & essence 
in burst through customers. */

// Recycled eventlog for brothel
function BrothelLog(LogText) {
    var newText = LogText + "<br>";
    BrothelLogArray.unshift(newText);
    while (BrothelLogArray.length > Settings.LogLength) {
        LogArray.pop();
    }
    var BrothelLogHistory = "";
    for (var e of BrothelLogArray) {
        BrothelLogHistory += e + "<br>";
    }
    //LogHistory = newText + LogHistory;
    document.getElementById("").innerHTML = BrothelLogHistory; // Make a brothelTextLog
} // This will be inside brothel at home.
function BrothelEngine() {
    for (var e of House.Dormmates) {
        var male = 0,
            female = 0;
        if (Settings.Brothel.ServeFemi) {
            /* Remember to make it so on randomint(min,max) min is affect by servants essence e.g. a 
            servant with say high masculinity attracts more customers.*/
            var a = RandomInt(1, 30 + 20 * House.Brothel);
            female = a;
        }
        if (Settings.Brothel.ServeMasc) {
            var a = RandomInt(1, 20 + 20 * House.Brothel);
            male = a
        }
        if (male > 40 && female > 40) {
            // serve herm or maybe a mixed gender group? (if you're lucky)
            BrothelLog(e.FirstName + " served a ");
        } else if (male > 40) {
            // serve male
        } else if (female > 40) {
            // serve female
        } else {
            // no luck
        }
    }
}

/* ToDo options to whore yourself. maybe give bonus dependent on level/rank? 
Like customer find it exciting to fuck a high rank adventurer(need add ranks). */
document.getElementById("Dorm").addEventListener("click", function () {
    document.getElementById("HomeStart").style.display = 'none';
    document.getElementById("TheDorm").style.display = 'block';
    document.getElementById("ButtonMates").style.display = 'grid';
    document.getElementById("DivMates").style.display = 'none';
    document.getElementById("LeaveDorm").style.display = 'inline-block'
    document.getElementById("flex").style.display = 'none';
    ButtonMates();

    if (House.Dormmates.length > 0 && player.Balls.length > 0) {
        document.getElementById("ImpregOrgy").style.display = 'inline-block';
        document.getElementById("GetImpregOrgy").style.display = 'inline-block';
    } else {
        document.getElementById("ImpregOrgy").style.display = 'none';
        document.getElementById("GetImpregOrgy").style.display = 'none';
    }


});

function ButtonMates() {
    var Inputs = [];
    for (var e = 0; e < House.Dormmates.length; e++) {
        var color;
        switch (CheckGender(House.Dormmates[e])) {
            case "female":
                color = "Pink";
                break;
            case "male":
                color = "Blue";
                break;
            case "hermaphrodite":
                color = "Purple";
                break;
            case "doll":
                color = "Beige";
                break;
        }
        var DormName = "";
        if (House.Dormmates[e].hasOwnProperty("FirstName")) {
            DormName += House.Dormmates[e].FirstName;
        };
        if (House.Dormmates[e].hasOwnProperty("LastName")) {
            DormName += " " + House.Dormmates[e].LastName;
        };
        var Input = "<button type=\"button\" class=\"" + color + "\" onclick=\"MateDiv(" + e + ")\">" + DormName + "<br>" +
            House.Dormmates[e].Name + " " + House.Dormmates[e].Race + "</button  >"
        Inputs += Input;
    }
    document.getElementById("ButtonMates").innerHTML = Inputs;
}

var MateIndex;

function MateDiv(e) {
    MateIndex = e;
    var rm = House.Dormmates[e];
    document.getElementById("ButtonMates").style.display = 'none';
    document.getElementById("DivMates").style.display = 'flex';
    document.getElementById("flex").style.display = 'grid';
    var RoomMate = "<div id=\"" + e + "\"></div>"
    document.getElementById("DivMates").innerHTML = RoomMate;
    var PregnantStatus = "";
    if (rm.hasOwnProperty("Pregnant")) {
        if (rm.Pregnant.Status) {
            var age = Math.round(rm.Pregnant.Baby / 10000);
            if (age < 1) {
                PregnantStatus = "<br>Impregnated";
            } else {
                PregnantStatus = "<br>" + age + " months pregnant";
            }
        }
    }
    var DormName = "";
    if (rm.hasOwnProperty("FirstName")) {
        DormName += rm.FirstName;
    };
    if (rm.hasOwnProperty("LastName")) {
        DormName += " " + rm.LastName;
    };
    document.getElementById(e).innerHTML = "<div>" + DormName + "<br>" + rm.Name + " " + rm.Race + "<br>" + Pronoun(CheckGender(rm)) +
        "<br><br>Height: " + CmToInch(Math.round(rm.Height)) + "<br>Weight: " + KgToPound(rm.Weight) + "<br>Muscle: " + KgToPound(rm.Muscle) + "<br>Fat: " + KgToPound(rm.Fat) +
        "<br>" + PregnantStatus + "<br><br>" + BoobLook(rm) + DickLook(rm) + BallLook(rm) + PussyLook(rm) + "<div> Strength: " + rm.Str +
        "<br>Charm: " + rm.Charm + "<br>Endurance: " + rm.End + "<br>Int: " + rm.Int + "<br>Sexskill: " + rm.SexSkill +
        "<br> Willpower: " + rm.Will + "</div></div>   "
    document.getElementById(e).style.display = 'block'
    document.getElementById("LeaveRoom").style.display = 'block';
    document.getElementById("LeaveDorm").style.display = 'none';
    document.getElementById("ImpregOrgy").style.display = 'none';
    document.getElementById("GetImpregOrgy").style.display = 'none';
    document.getElementById("KickOut").style.display = 'block';
    document.getElementById("Fuck").style.display = 'block';
    document.getElementById("Rename").style.display = 'block';
}
document.getElementById("KickYes").addEventListener("click", function () {
    document.getElementById("flex").style.display = 'grid';
    document.getElementById("KickYesNo").style.display = 'none';
    document.getElementById("HomeStart").style.display = 'block';
    document.getElementById("TheDorm").style.display = 'none';
    document.getElementById("ImpregOrgy").style.display = 'inline-block';
    document.getElementById("GetImpregOrgy").style.display = 'inline-block';
    House.Dormmates.splice(MateIndex, 1);
    return;
});
document.getElementById("KickNo").addEventListener("click", function () {
    document.getElementById("flex").style.display = 'grid';
    document.getElementById("KickYesNo").style.display = 'none';
});
document.getElementById("Fuck").addEventListener("click", function () {
    document.getElementById("Home").style.display = 'none';
    document.getElementById("FuckDorm").style.display = 'grid';
    document.getElementById("status").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'none';
    document.getElementById("EventLog").style.display = 'none';
    DormSex();
});
document.getElementById("Rename").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (e.hasOwnProperty("FirstName")) {
        document.getElementById("DormFirstName").value = e.FirstName;
    }
    if (e.hasOwnProperty("LastName")) {
        document.getElementById("DormLastName").value = e.LastName
    }
    document.getElementById("DormNameChangeForm").style.display = 'block';
    document.getElementById(MateIndex).style.display = 'none';
    document.getElementById("flex").style.display = 'none';
});
document.getElementById("AcceptDormName").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    e.FirstName = document.getElementById("DormFirstName").value;
    e.LastName = document.getElementById("DormLastName").value;
    document.getElementById("DormNameChangeForm").style.display = 'none';
    MateDiv(MateIndex);
});

function DormSex() {
    var e = House.Dormmates[MateIndex];
    EssenceCheck(e);
    if (Settings.EssenceAuto) {
        EssenceCheck(player);
    }
    document.getElementById("DormPName").innerHTML = player.Name + " " + player.LastName;
    document.getElementById("DormEName").innerHTML = e.Name + "<br>" + e.Race + " " + Pronoun(CheckGender(e));
    document.getElementById("DormMascu").innerHTML = Math.round(player.Masc);
    document.getElementById("DormFemin").innerHTML = Math.round(player.Femi);
    document.getElementById("DormEMascu").innerHTML = Math.round(e.Masc);
    document.getElementById("DormEFemin").innerHTML = Math.round(e.Femi);
    document.getElementById("DormPlayerLooks").innerHTML = BoobLook(player) + DickLook(player) + BallLook(player) + PussyLook(player);
    document.getElementById("DormEnemyLooks").innerHTML = BoobLook(e) + DickLook(e) + BallLook(e) + PussyLook(e);
    SexColor(player, "PlayerDorm");
    SexColor(e, "EnemyDorm");
    if (e.Pregnant.Status || player.Balls.length == 0) {
        document.getElementById("Impregnate").style.display = 'none';
    } else {
        document.getElementById("Impregnate").style.display = 'inline-block';
    }
    if (player.Pregnant.Status) {
        document.getElementById("GetImpregnated").style.display = 'none';
        var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
        if (age < 1) {
            document.getElementById("DormPlayerLooks").innerHTML += "<br>Impregnated";
        } else {
            document.getElementById("DormPlayerLooks").innerHTML += "<br>" + age + " months pregnant";
        }


    } else {
        if (e.Balls.length < 1) {
            document.getElementById("GetImpregnated").style.display = 'none';
        } else {
            document.getElementById("GetImpregnated").style.display = 'inline-block';
        }
    }

    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            var age = Math.round(e.Pregnant.Baby / 10000);
            if (age < 1) {
                document.getElementById("DormEnemyLooks").innerHTML += "<br>Impregnated";
            } else {
                document.getElementById("DormEnemyLooks").innerHTML += "<br>" + age + " months pregnant";
            }
        }
    }
    var DelatMed = 2;
    if (player.Masc >= e.Masc && player.Masc >= e.Femi && player.Masc >= player.Femi) {
        DelatMed = 100 / player.Masc;
    } else if (player.Femi >= e.Masc && player.Femi >= e.Femi && player.Femi >= player.Masc) {
        DelatMed = 100 / player.Femi;
    } else if (e.Masc >= player.Masc && e.Masc >= e.Femi && e.Masc >= player.Femi) {
        DelatMed = 100 / e.Masc;
    } else {
        DelatMed = 100 / e.Femi;
    }

    document.getElementById("DormMascu").style.width = player.Masc * DelatMed + "%";
    document.getElementById("DormFemin").style.width = player.Femi * DelatMed + "%";
    document.getElementById("DormEMascu").style.width = e.Masc * DelatMed + "%";
    document.getElementById("DormEFemin").style.width = e.Femi * DelatMed + "%";
    return;
};
document.getElementById("DormDrainMasc").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.EssenceDrain >= e.Masc && e.Masc > 0) {
        player.Masc += e.Masc;
        e.Masc = 0;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon masc";
        return;
    } else if (player.EssenceDrain < e.Masc) {
        player.Masc += player.EssenceDrain;
        e.Masc -= player.EssenceDrain;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon masc";
        return;
    } else {
        return;
    }
});
document.getElementById("DormDrainFemi").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.EssenceDrain >= e.Femi && e.Femi > 0) {
        player.Femi += e.Femi;
        e.Femi = 0;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon femi";
        return;
    } else if (player.EssenceDrain < e.Femi) {
        player.Femi += player.EssenceDrain;
        e.Femi -= player.EssenceDrain;
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Siphon femi";
        return;
    } else {
        return;
    }
});
document.getElementById("DormInjMasc").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.Masc > 0) {
        e.Masc += Math.min(100, player.Masc);
        player.Masc -= Math.min(100, player.Masc);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Inject masc";
        return;
    }
});
document.getElementById("DormInjFemi").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (player.Femi > 0) {
        e.Femi += Math.min(100, player.Femi);
        player.Femi -= Math.min(100, player.Femi);
        EssenceCheck(e);
        if (Settings.EssenceAuto) {
            EssenceCheck(player);
        }
        DormSex();
        document.getElementById("DormSexText").innerHTML = "Inject femi";
        return;
    }
});
document.getElementById("Impregnate").addEventListener("click", function () {
    document.getElementById("DormSexText").innerHTML = "You fuck your servant hoping to impregnate them, but you fail."
    var e = House.Dormmates[MateIndex];
    if (e.Pussies.length > 0) {
        var pussypicker = RandomInt(0, e.Pussies.length - 1)
        if (e.Pussies[pussypicker].Virgin) {
            e.Pussies[pussypicker].Virgin = false;
        }
    }
    if (e.hasOwnProperty("Pregnant")) {
        if (e.Pregnant.Status) {
            document.getElementById("DormSexText").innerHTML = "You have already impregnated her!"
            DormSex();
            return;
        }
    } else {
        e.Pregnant = {};
        e.Pregnant.Status = false;
        e.Pregnant.Baby = 0;
    }
    for (var b = 0; b < player.Balls.length; b++) {
        if (player.Balls[b].Cum > 50) {
            Impregnate(e, player, "A", "Dorm");
            player.Balls[b].Cum -= 50;
        } else {
            document.getElementById("DormSexText").innerHTML = "You try but there is to little cum in your balls."
        }

    }
    DormSex();
});
var Setup = true;
document.getElementById("GetImpregnated").addEventListener("click", function () {
    var e = House.Dormmates[MateIndex];
    if (Setup) {
        document.getElementById("DormSexText").innerHTML = "Desiring to get pregnant you call " + e.FirstName + " " + e.LastName + " a servant whom you feel are worthy " +
            "fathering you child. Firmly pushing them down on the bed you get on top them straddling their face grinding your pussy against their mouth, once you feel ready you shift focus to their groin removing their clothes and free their " + CmToInch(e.Dicks[0].Size) + " " + e.Dicks[0].Type + " dick. " +
            "Positions your pussy on top of their glans letting it slowly enter, once accustomed speeding up."
    } else {
        document.getElementById("DormSexText").innerHTML = "Not giving up you continue riding them.";
    }
    if (player.Pregnant.Status) {
        document.getElementById("DormSexText").innerHTML = "You are already pregnant.";
        DormSex();
        return;
    } else if (e.Balls.length > 0) {
        Setup = false;
        for (var b = 0; b < e.Balls.length; b++) {
            if (e.Balls[b].Cum >= 10) {
                Impregnate(player, e, "B", "Dorm");
                e.Balls[b].Cum -= 10;
                if (!player.Pregnant.Status) {
                    document.getElementById("DormSexText").innerHTML += "<br><br>They failed to impregnate you";
                }
                break;
            } else {
                document.getElementById("DormSexText").innerHTML += "<br><br>Their balls are dry, you have to let them recover.(10ml needed  )";
            }
        }
    }
    var pussypicker = RandomInt(0, player.Pussies.length - 1)
    if (player.Pussies[pussypicker].Virgin) {
        player.Pussies[pussypicker].Virgin = false;
    }
    DormSex();
});
document.getElementById("LeaveDormSex").addEventListener("click", function () {
    document.getElementById("Home").style.display = 'block';
    document.getElementById("FuckDorm").style.display = 'none';
    document.getElementById("status").style.display = 'block';
    document.getElementById("EmptyButtons").style.display = 'block';
    document.getElementById("DormSexText").innerHTML = " "
    MateDiv(MateIndex);
    Setup = true;
});
document.getElementById("LeaveRoom").addEventListener("click", function () {
    document.getElementById("DivMates").style.display = 'none';
    document.getElementById("ButtonMates").style.display = 'grid';
    document.getElementById("LeaveRoom").style.display = 'none';
    document.getElementById("LeaveDorm").style.display = 'inline-block'
    document.getElementById("ImpregOrgy").style.display = 'inline-block';
    document.getElementById("GetImpregOrgy").style.display = 'inline-block';
    document.getElementById("KickOut").style.display = 'none';
    document.getElementById("Fuck").style.display = 'none';
    document.getElementById("Rename").style.display = 'none';
    document.getElementById("DormChildren").style.display = 'none';
    ButtonMates();
    return;
});
document.getElementById("KickOut").addEventListener("click", function () {
    document.getElementById("flex").style.display = 'none';
    document.getElementById("KickYesNo").style.display = 'block';
});
document.getElementById("ImpregOrgy").addEventListener("click", function () {
    document.getElementById("HomeText").innerHTML = "Orgy<br>"
    var CumTotal = 0;
    for (var b = 0; b < player.Balls.length; b++) {
        CumTotal += player.Balls[b].Cum;
    }
    while (CumTotal >= 10) {
        for (var non = 0; non < House.Dormmates.length; non++) {
            if (House.Dormmates[non].Pregnant.Status) {
                CumTotal--;
                continue;
            } else {
                Impregnate(House.Dormmates[non], player, "A", "Dorm");
                CumTotal -= 10;
                if (House.Dormmates[non].Pregnant.Status) {
                    document.getElementById("HomeText").innerHTML += House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + " is impregnated! "
                }
            }
        }
    }
    for (var non = 0; non < House.Dormmates.length; non++) {
        if (!House.Dormmates[non].Pregnant.Status) {
            document.getElementById("HomeText").innerHTML += "You failed to impregnate " + House.Dormmates[non].FirstName + " " + House.Dormmates[non].LastName + "...";

        }
    }
    for (var b = 0; b < player.Balls.length; b++) {
        player.Balls[b].Cum = 0;
    }
    FluidsEngine();
});
document.getElementById("TheDorm").addEventListener("mouseover", function (e) {
    document.getElementById("HomeText").innerHTML = e.target.title;
});
document.getElementById("GetImpregOrgy").addEventListener("click", function () {
    document.getElementById("HomeText").innerHTML = "Orgy";
    var CumTotal = 0;
    for (var a = 0; a < House.Dormmates.length; a++) {
        for (var b = 0; b < House.Dormmates[a].Balls.length; b++) {
            CumTotal += House.Dormmates[a].Balls[b].Cum;
            while (House.Dormmates[a].Balls[b].Cum >= 10) {
                if (player.Pregnant.Status) {
                    break;
                } else {
                    Impregnate(player, House.Dormmates[a], "B", "Dorm")
                    House.Dormmates[a].Balls[b].Cum -= 10;
                    console.log(House.Dormmates[a].Balls[b].Cum)
                }
            }
        }
    }
    document.getElementById("HomeText").innerHTML += "<br><br> By the end of the night they have cummed " + (Math.round(CumTotal / 1000 * 100) / 100) + "L into you.";
});
document.getElementById("LeaveDorm").addEventListener("click", function () {
    document.getElementById("HomeStart").style.display = 'block';
    document.getElementById("TheDorm").style.display = 'none';
    document.getElementById("HomeText").innerHTML = "";
    return;
});
// Home
document.getElementById("Sleep").addEventListener("click", function () {
    if (player.Health < player.MaxHealth + House.BedLevel * 5) {
        player.Health = player.MaxHealth + House.BedLevel * 5;
    }
    if (player.WillHealth < player.MaxWillHealth + House.BedLevel * 5) {
        player.WillHealth = player.MaxWillHealth + House.BedLevel * 5;
    }
    battle = false;
    for (var e = 0; e < 8; e++) {
        DateTracker();
    }
    battle = true;
    document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
    document.getElementById("HomeText").innerHTML = "You sleep well, restoring your health and willpower.";
});


// Portal
document.getElementById("Portal").addEventListener("click", function () {
    document.getElementById("LeaveHome").style.display = 'none';
    var Buildings = document.getElementById("PortalMenu")
    document.getElementById("HomeStart").style.display = "none";
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        var h1 = document.createElement("h1");
        var h1text = document.createTextNode("Portal");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    var p = document.getElementById("HomeText");

    // TODO in future when there is more portals make main buttons for each region
    if (House.Portal.Mountain) {
        var Mountain = InputButton("Mountain")
        Mountain.addEventListener("click", function () {
            player.Area = "Mountain";
            player.Map = "MountainStart";
            document.getElementById("HomeStart").style.display = 'block';
            LeaveHome();
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        Mountain.addEventListener("mouseover", function () {

        });
        div.appendChild(Mountain);
    }

    if (House.Portal.BlackMarket) {
        var BlackMarket = InputButton("BlackMarket")
        BlackMarket.addEventListener("click", function () {
            player.Area = "Second";
            player.Map = "Outlaws";
            document.getElementById("HomeStart").style.display = 'block';
            LeaveHome();
            Buildings.style.display = 'none';
            while (Buildings.hasChildNodes()) {
                Buildings.removeChild(Buildings.firstChild);
            }
            return;
        });
        BlackMarket.addEventListener("mouseover", function () {

        });
        div.appendChild(BlackMarket);
    }

    var LeavePortal = InputButton("Back");
    LeavePortal.addEventListener("click", function () {
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        document.getElementById("HomeStart").style.display = 'block';
        document.getElementById("PortalMenu").style.display = 'none';
        document.getElementById("LeaveHome").style.display = 'inline-block';
    })
    div.appendChild(LeavePortal);
    Buildings.appendChild(div);
    Buildings.style.display = 'block';
});
document.getElementById("LeavePortal").addEventListener("click", function () {
    document.getElementById("HomeStart").style.display = 'block';
    document.getElementById("PortalMenu").style.display = 'none';
});
document.getElementById("Portals").addEventListener("click", function (e) {
    Npcs = [];
    var Chosen;
    if (e.target.type == "button") {
        Chosen = String(e.target.id);
        switch (Chosen) {
            case "TempLand":
                player.Area = Chosen;
                player.Map = "TempCity";
                LeaveHome();
                break
            case "Mountain":
                player.Area = Chosen;
                player.Map = "MountainStart";
                LeaveHome();
                break
            case "Lumindera":
                /**                    player.Area = "Lumindera";
                player.Map = "nice";
                LeaveHome(); */
                break;
            default:
                break;

        }
    }
});

document.getElementById("Brothel").addEventListener("click", function () {
    document.getElementById("TheBrothel").style.display = 'block';
    document.getElementById("HomeStart").style.display = 'none';
});
document.getElementById("ServeMasc").addEventListener("click", function () {
    Settings.Brothel.ServeMasc = !Settings.Brothel.ServeMasc;
    document.getElementById("ServeMasc").value = "Masculine customers? " + Settings.Brothel.ServeMasc;
});
document.getElementById("ServeFemi").addEventListener("click", function () {
    Settings.Brothel.ServeFemi = !Settings.Brothel.ServeFemi;
    document.getElementById("ServeFemi").value = "Feminine customers? " + Settings.Brothel.ServeFemi;
});
document.getElementById("CloseBrothel").addEventListener("click", function () {
    document.getElementById("TheBrothel").style.display = 'none';
    document.getElementById("HomeStart").style.display = 'block';
});

document.getElementById("LeaveHome").addEventListener("click", function () {
    LeaveHome();
    return;
});

function LeaveHome() {
    document.getElementById("Home").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'none';
    battle = false;
    DisplayGame();
}
// End home
    document.getElementById("UpgradeHome").addEventListener("click", function () {
        UpgradeHomeMenu();
    })

    function UpgradeHomeMenu() {
        document.getElementById("HomeStart").style.display = 'none';
        document.getElementById("HomeText").style.display = 'none';
        document.getElementById("Upgrades").style.display = 'block';

        var Upgrades = document.getElementById("Upgrades");
        while (Upgrades.hasChildNodes()) {
            Upgrades.removeChild(Upgrades.firstChild);
        }

        var p = document.createElement("p");
        p.classList.add("TextBox");
        Upgrades.appendChild(p);

        var h2 = document.createElement("h2");
        var h2Text = document.createTextNode("Upgrades");
        h2.appendChild(h2Text);
        Upgrades.appendChild(h2);

        function BedCost() {
            return Math.round(50 * Math.pow(1.2, House.BedLevel));
        }
        var UpgradeBed = InputButton("Upgrade bedroom " + BedCost() + "g");
        UpgradeBed.addEventListener("click", function () {
            if (player.Gold >= BedCost()) {
                House.BedLevel++;
                player.Gold -= BedCost();
                if (House.BedLevel < 5) {
                    p.innerHTML = "You have upgraded your master bedroom, this will allow you to wake up with extra health and will."
                } else {
                    p.innerHTML = "You upgrade your master bedroom.";
                }
                UpgradeBed.setAttribute("value", "Upgrade bedroom " + BedCost() + "g")
            } else {
                p.innerHTML = "You can't afford to upgrade your bedroom.";
            }
        });
        UpgradeBed.addEventListener("mouseover", function () {
            p.innerHTML = "An upgraded bedroom makes you wake up bonus health & willpower."
        })
        Upgrades.appendChild(UpgradeBed);

        function DormCost() {
            return Math.round(250 * Math.pow(1.2, House.Dorm));
        }
        if (House.Dorm > 0) {
            var BuildDorm = InputButton("Upgrade dorm " + DormCost() + "g")

        } else {
            var BuildDorm = InputButton("Build dorm " + DormCost() + "g")
        }
        BuildDorm.addEventListener("click", function () {
            if (player.Gold >= DormCost()) {
                House.Dorm++;
                player.Gold -= DormCost();
                if (House.Dorm < 2) {
                    document.getElementById("Dorm").style.display = "inline-block";
                    p.innerHTML = "Hiring construction workers you give orders to build a dorm to house servants. <br><br>" +
                        "Looking outside you see the newly built dorm. You can now take home opponent you have made orgasm five times."
                } else {
                    p.innerHTML = "You expand your dorm to house three more servants.(" + House.Dorm * 3 + ")";
                }
                BuildDorm.setAttribute("value", "Upgrade dorm " + DormCost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildDorm.addEventListener("mouseover", function () {
            p.innerHTML = "A building to house former opponents whom chose to join you either trough submission or other means."
        })
        Upgrades.appendChild(BuildDorm);

        function Gymcost() {
            return Math.round(200 * Math.pow(1.2, House.Gym));
        }
        if (House.Gym > 0) {
            var BuildGym = InputButton("Upgrade gym " + Gymcost() + "g")
        } else {
            var BuildGym = InputButton("Build gym " + Gymcost() + "g")
        }
        BuildGym.addEventListener("click", function () {
            if (player.Gold >= Gymcost()) {
                if (House.Gym < 1) {
                    p.innerHTML = "You built a gym for your servants, they can now go there in order to burn fat and build muscle.";
                } else {
                    p.innerHTML = "You upgrade your gym so your servants can gain more muscle."
                }
                House.Gym++;
                player.Gold -= Gymcost();
                BuildGym.setAttribute("value", "Upgrade gym " + Gymcost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildGym.addEventListener("mouseover", function () {
            p.innerHTML = "A gym will make your servant can gain muscle over time."
        })
        Upgrades.appendChild(BuildGym);

        function Kitchencost() {
            return Math.round(200 * Math.pow(1.2, House.Kitchen));
        }
        if (House.Kitchen > 0) {
            var BuildKitchen = InputButton("Upgrade kitchen " + Kitchencost() + "g")
        } else {
            var BuildKitchen = InputButton("Build kitchen " + Kitchencost() + "g")
        }
        BuildKitchen.addEventListener("click", function () {
            if (player.Gold >= Kitchencost()) {
                if (House.Kitchen < 1) {
                    p.innerHTML = "You have built a kitchen where your servant can go and eat. Be aware that if you don't build a gym they will get fat, unless that's what you are into to."
                } else {
                    p.innerHTML = "You upgrade your kitchen servants can now gain more fat.";
                }
                House.Kitchen++;
                player.Gold -= Kitchencost();
                BuildKitchen.setAttribute("value", "Upgrade kitchen " + Kitchencost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildKitchen.addEventListener("mouseover", function () {
            p.innerHTML = "A kitchen will make your servants gain fat over time.";
        })
        Upgrades.appendChild(BuildKitchen)

        function Brothelcost() {
            return Math.round(500 * Math.pow(1.2, House.Brothel));
        }
        if (House.Brothel > 0) {
            var BuildBrothel = InputButton("Upgrade brothel " + Brothelcost() + "g")
        } else {
            var BuildBrothel = InputButton("Build brothel " + Brothelcost() + "g")
        }
        BuildBrothel.addEventListener("click", function () {
            if (player.Gold >= Brothelcost()) {
                player.Gold -= Brothelcost();
                if (House.Brothel < 1) {
                    p.innerHTML = "You have built a brothel where your servants will whore themself out, allowing you to gain extra income."
                } else {
                    p.innerHTML = "You upgrade your brothel for extra income.";
                }
                House.Brothel++;
                document.getElementById("Brothel").style.display = 'inline-block';
                BuildBrothel.setAttribute("value", "Upgrade brothel " + Brothelcost() + "g")
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        Upgrades.appendChild(BuildBrothel);

        function Nurserycost() {
            return Math.round(200 * Math.pow(1.2, House.Nursery));
        }
        if (House.Nursery > 0) {
            var BuildNursery = InputButton("Upgrade nursery " + Nurserycost() + "g");
        } else {
            var BuildNursery = InputButton("Build nursery " + Nurserycost() + "g");
        }
        BuildNursery.addEventListener("click", function () {
            if (player.Gold >= Nurserycost()) {
                player.Gold -= Nurserycost();
                if (House.Nursery < 1) {
                    p.innerHTML = "You have built a nursery."
                } else {
                    p.innerHTML = "You upgrade your nursery.";
                }
                House.Nursery++;
                BuildNursery.setAttribute("value", "Upgrade nursery " + Nurserycost() + "g");
            } else {
                p.innerHTML = "You can't afford it.";
            }
        });
        BuildNursery.addEventListener("mouseover", function () {
            //p.innerHTML = "Speeds up aging of non-adult children, hopefully without consequences..."
            p.innerHTML = "Accelerate your children’s growth towards adulthood, childhood isn’t that important right?"
        });
        Upgrades.appendChild(BuildNursery);

        if (House.Portal.Owned === false) {
            var BuildPortal = InputButton("Build portal 1000g")
            BuildPortal.addEventListener("click", function () {
                if (player.Gold >= 1000) {
                    player.Gold -= 1000;
                    House.Portal.Owned = true;
                    p.innerHTML = "Congratulations you now own a personal portal, a true sign of wealth for peasants to envy!"
                    document.getElementById("Portal").style.display = 'inline-block';
                    Upgrades.removeChild(BuildPortal)
                } else {
                    p.innerHTML = "	Sadly you lack funds to afford commissions the construction of a portal…" +
                        "<br><br>You will have to continue walking like the poor peasant you are."
                }
            });
            BuildPortal.addEventListener("mouseover", function () {
                p.innerHTML = "Why would you walk in a magic world, that's for peasants!"
            });
            Upgrades.appendChild(BuildPortal);
        }

        var Close = InputButton("Close");
        Close.addEventListener("click", function () {
            document.getElementById("HomeStart").style.display = 'block';
            document.getElementById("Upgrades").style.display = 'none';
            document.getElementById("HomeText").style.display = 'block';

            var Upgrades = document.getElementById("Upgrades");
            while (Upgrades.hasChildNodes()) {
                Upgrades.removeChild(Upgrades.firstChild);
            }
        });
        Upgrades.appendChild(Close);

        // Barn.innerHTML = "Allows you to milk your lactating servants. The milk can be brought with you as a travel snack or you can sell it for gold."
    }
function Twins(who, by) {
    // The +1 gives a 1% or less chance for non blessed to birth twins 
    // Old saves might fail totaly
    const Twins = 1 + player.Blessings.Broodmother * 1;
    switch (who.Race) {
        case "":
            Twins += 5;
            break;
        default:
            break;
    }
    switch (who.SecondRace) {
        case "":
            Twins += 5;
            break;
        default:
            break;
    }
    switch (by.Race) {
        case "":
            Twins += 5;
            break;
        default:
            break;
    }
    switch (by.SecondRace) {
        case "":
            Twins += 5;
            break;
        default:
            break;
    }
    // Some races will have higher chance
    var NoTwins = RandomInt(0, 100);
    if (NoTwins < Twins * 2) {
        return 3;
    } else if (NoTwins < Twins) {
        return 2;
    } else {
        return 1;
    }
}

function BabyMaker(who, by) {
    who.Pregnant.Status = true;
    Flags.Impregnations++;
    if (!Array.isArray(who.Pregnant.Babies)) {
        who.Pregnant.Babies = [];
    }
    if (player.Quests.some(e => e.Name === "Impregnate maidens") && who.Name == "Maiden") {
        var i = player.Quests.findIndex(e => e.Name == "Impregnate maidens");
        player.Quests[i].Count++;
        player.Quests[i].Completed = true;
        who.Name = "Priestess";
        var x = Twins(who, by);
        for (var e = 0; e < x; e++) {
            var Baby = {
                BabyAge: 0,
                BabyRace: player.Race,
                Father: by.Name + " " + by.LastName,
                Mother: who.FirstName + " " + who.LastName,
                Blessed: "Fertility" // Not in use for the moment, but I want it so children made during quest is different. 
                //Maybe they leave house to join the shrine
            }
            who.Pregnant.Babies.push(Baby);
        }
    } else {
        var x = Twins(who, by);
        for (var e = 0; e < x; e++) {
            var Father = RandomInt(1, 4);
            if (Father > 2) {
                Father = by;
            } else {
                Father = who;
            }
            var Baby = {
                BabyAge: 0,
                BabyRace: Father.Race,
                Father: by.Name + " " + by.LastName,
                Mother: who.FirstName + " " + who.LastName
            }
            who.Pregnant.Babies.push(Baby);
        }
    }
}

function playerBabyMaker(by) {
    Flags.Pregnations++;
    player.Pregnant.Status = true;
    if (player.Quests.some(e => e.Name === "Get Impregnated")) {
        var i = player.Quests.findIndex(e => e.Name == "Get Impregnated");
        player.Quests[i].Completed = true;
        var x = Twins(player, by);
        for (var e = 0; e < x; e++) {
            var Baby = {
                BabyAge: 0,
                BabyRace: who.Race,
                Father: by.FirstName + " " + by.LastName,
                Mother: player.Name + " " + player.LastName,
                Blessed: "Fertility"
            }
            player.Pregnant.Babies.push(Baby);
            player.Quests[i].Count++;
        }
    } else {
        var x = Twins(player, by);
        for (var e = 0; e < x; e++) {
            var Father = RandomInt(1, 4);
            if (Father > 2) {
                Father = by;
            } else {
                Father = player;
            }
            var Baby = {
                BabyAge: 0,
                BabyRace: Father.Race,
                Father: by.FirstName + " " + by.LastName,
                Mother: player.Name + " " + player.LastName
            }
            player.Pregnant.Babies.push(Baby);
        }
    }
}

function Impregnate(who, by, mode = "A", where = "") {
    if (who.hasOwnProperty("Pregnant")) {
        if (who.Pregnant.Status) {
            return;
        }
    }
    if (mode == "A") {
        var Impregnation = RandomInt(0, 100);
        switch (CheckGender(who)) {
            case "cuntboy":
                if (by.Virility >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated him!"
                }
                break;
            case "female":
                if (by.Virility >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexStats").innerHTML = "You have impregnated her!"
                }
                break;
            case "hermaphrodite":
                if (by.Virility >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "You have impregnated hir!"
                }
                break;
            case "male":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate him!"
                }
                break;
            case "dickgirl":
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnate her!"
                }
                break;
            default:
                if (by.Virility - 100 >= Impregnation) {
                    BabyMaker(who, by);
                    document.getElementById(where + "SexText").innerHTML = "Due your extreme virility you have managed to impregnated the doll!"
                }
                break;
        }
    } else if (mode == "B") {
        var Impregnation = RandomInt(0, (500 - by.Masc));
        switch (CheckGender(who)) {
            case "cuntboy":
            case "female":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker(by);
                    document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "hermaphrodite":
                if (who.Fertility >= Impregnation) {
                    playerBabyMaker(by);
                    document.getElementById(where + "SexText").innerHTML = "You have been impregnated!"
                }
                break;
            case "dickgirl":
            case "male":
                if (false) { //Need to make a way to enable make impreg (item/blessing/curse)
                    if (who.Fertility - 50 >= Impregnation) {
                        playerBabyMaker(by);
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                }
                break;
            default:
                if (false) {
                    if (who.Fertility - 50 >= Impregnation) {
                        playerBabyMaker(by);
                        document.getElementById(where + "SexText").innerHTML = "Due your extreme fertility and their virility you have been impregnated!"
                    }
                }
                break;
        }
    }
    return;
}
function CmToInch(cm) {
    if (Settings.Inch) {
        var Inch = Math.round(cm / 2.54);
        var Feet = Math.floor(Inch / 12)
        Inch = Inch % 12;
        if (Feet > 0) {
            return Feet + " feet and " + Inch + " inches"
        } else {
            return Inch + " inches"
        }
    } else {
        if (cm < 1) {
            return Math.round(cm * 10) + "mm"
        } else {
            return Math.round(cm) + "cm";
        }
    }
}

function CmToInchDecimal(cm) {
    if (Settings.Inch) {
        var Inch = Math.round(cm / 2.54 * 10) / 10;
        var Feet = Math.floor(Inch / 12)
        Inch = Inch % 12;
        if (Feet > 0) {
            return Feet + " feet and " + Inch + " inches"
        } else {
            return Inch + " inches"
        }
    } else {
        return Math.round(cm * 10) / 10 + "cm";
    }
}

function KgToPound(kg) {
    if (Settings.Inch) {
        return Math.round(kg * 2.2046) + "lb"
    } else {
        if (kg < 10) {
            return Math.round(kg * 10) / 10 + "kg";
        } else if (kg < 1) {
            return Math.round(kg * 1000) / 1000 + "g"
        } else {
            return Math.round(kg) + "kg";
        }
    }
}

function LToGal(L) {
    if (Settings.Inch) {
        if (Math.round(0.264172052 * L) < 1) {
            return Math.round(L * 4.22675284) + "cups"
        } else {
            return Math.round(L * 0.264172052) + "gallon"
        }
    } else if (Settings.Approx) {
        if (L < 10)
            return "an almost-unnoticable amount"
        else if (L < 50)
            return "a few sprays"
        else if (L < 100)
            return "a decent load"
        else if (L < 250)
            return "a cupful"
        else if (L < 750)
            return "cupfuls"
        else if (L < 2000)
            return "a small bucket's worth"
        else if (L <= 5000)
            return "a bucket load"
        else if (L > 5000)
            return "a torrent of"
        else
            return "Snow's overfilled! (Error: " + L + ")";
    } else {
        if (L < 0.1) {
            return Math.round(L * 100) + "cl";
        } else if (L < 1) {
            return Math.round(L * 10) + "dl";
        } else {
            return Math.round(L) + "L";
        }
    }
}
document.getElementById("ShowInventory").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("Inventory").style.display = 'grid';
    //document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
    Items2();
});

function Use(item) {
    var thing = player.Inventory[item];
    if (thing.hasOwnProperty("Use") && typeof thing.Use == 'function') {
        thing.Use(player, thing)
    } else {
        console.log("this item has not been refactored: " + item.Name);
        switch (thing.Name) {
            default:
                EventLog("Uh... Something went wrong...");
                break;
        }
    }
    if (typeof player.Inventory[item].Quantity === "number") {
        player.Inventory[item].Quantity--;
        if (player.Inventory[item].Quantity <= 0) {
            player.Inventory.splice(item, 1);
        }
    }
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)
}

function Equip(item) {
    ItemDict[player.Inventory[item].Name].Equip();
    return console.log(player.Inventory[item]);
}

function Read(item) {
    ItemDict[player.Inventory[item].Name].Read();
    return console.log(player.Inventory[item]);
}

function Drop(item) {
    player.Inventory.splice(item, 1);
    document.getElementById("InventoryBag").innerHTML = Items(player.Inventory)

}
document.getElementById("InventoryLeave").addEventListener("click", function () {
    document.getElementById("Inventory").style.display = 'none';
    DisplayGame();
});

// Trial of new inventory system so I can stop saving unnecessary data
function Items2() {
    var div = document.getElementById("InventoryBag");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    var KeyItems = ["Pocket portal", "SpellBook"]; // Make sure important items are first in iventory
    var Exists = 0;
    for (var k of KeyItems) {
        Exists++;
        var index = player.Inventory.findIndex(f => f.Name === k)
        if (player.Inventory.some(f => f.Name === k) && index !== Exists) {
            var temp = player.Inventory[index]
            player.Inventory.splice(index, 1);
            player.Inventory.unshift(temp);
        }
    }
    for (var e of player.Inventory) {
        var itemarray = Object.values(ItemDict);
        for (var b of itemarray) {
            if (e.Name === b.Name) {
                var item = new InventoryThing(e, b)
                div.appendChild(item);
            }
        }
    }
}

function InventoryThing(e, b) {
    var item = document.createElement("div");
    item.setAttribute("title", b.Title)

    var p = document.createElement("p");
    p.innerHTML = b.Name
    if (typeof e.Quantity === "number") {
        p.innerHTML += " (" + e.Quantity + ")"
    }
    item.appendChild(p);

    if (typeof b.Use === "function") {
        var use = InputButton("Use");
        use.addEventListener("click", function () {
            document.getElementById("InventoryText").innerHTML = b.Use(player, e);
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    var index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();

        });
        item.appendChild(use)
    }
    if (typeof b.Equip === "function") {
        var Equip = InputButton("Equip");
        Equip.addEventListener("click", function () {
            b.Equip();
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    var index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();

        });
        item.appendChild(Equip)
    }
    if (b.Drop === true) {
        var drop = InputButton("Drop");
        drop.addEventListener("click", function () {
            if (typeof e.Quantity === "number") {
                e.Quantity--;
                if (e.Quantity <= 0) {
                    var index = player.Inventory.findIndex(a => a.Name === e.Name);
                    player.Inventory.splice(index, 1);
                }
            }
            Items2();
        });
        item.appendChild(drop);
    }
    var what = InputButton("?");
    what.addEventListener("mouseover", function () {
        document.getElementById("InventoryText").innerHTML = b.Title
    });
    what.addEventListener("click", function () {
        document.getElementById("InventoryText").innerHTML = b.Title
    });
    item.appendChild(what);

    return item;
}
// default items. You can still create others if they respect the template
const ItemDict = {
    itemTemplate: {
        Lite: { // What should be saved between games, quantity is added to this
            Name: "Name of the item",
        },
        Name: "Name of the item",
        Equip: "No", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
        Drop: true, // or false
        Does: "Short desc.",
        Quantity: 1,
        Title: "Long description of the item",
        Use: function (who) {
            //EventLog(who.Name + " used the item") Lets stop spamming the eventlog!
            return who.Name + " used the item"
        }
    },
    orcCum: {
        Lite: {
            Name: "Orc cum"
        },
        Name: "Orc cum",
        Use: function (who) {
            who.Masc += 50;
            //if (who == who.
            return "After drinking the orc cum, " + who.Name + " absorbs the manly essence of it."
        },
        Equip: "No",
        Drop: true,
        Does: "Heals 10% of HP.",
        Title: "Low-quality beer. It'll heal a bit."
    },
    fairyDust: {
        Lite: {
            Name: "Fairy dust"
        },
        Name: "Fairy dust",
        Use: function (who) {
            who.Height -= 5;
            return "Inhaling the fairy dust you see the world grow before you, or maybe it's you who became shorter?"
        },
        Use: "Yes",
        Equip: "No",
        Drop: true,
        Does: "Shrinks you 5 cm",
        Title: "Sparkly, commonly used as prank item to shrink people."
    },
    humanity: {
        Lite: {
            Name: "Humanity"
        },
        Name: "Humanity",
        Use: function (who) {
            PotionDrunk("human");
            return "You try to gain some humanity."
            // if player already have alot of human race ess maybe say strengtn?
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you human",
        Title: "One way to get your humanity back."
    },
    pouch: {
        Lite: {
            Name: "Pouch"
        },
        Name: "Pouch",
        Use: function (who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            who.Gold += z;
            return "What's in the bag? It's " + z + " coins!"
        },
        Equip: "No",
        Drop: true,
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    halfPouch: {
        Lite: {
            Name: "Small Pouch",
        },
        Name: "Small Pouch",
        Use: function (who) {
            var z = Math.round(Math.random() * 40) + 10;
            z = parseInt(z);
            who.Gold += z;
            return "What's in the bag? It's " + z + " coins!";
        },
        Equip: "No",
        Drop: true,
        Does: "Gives gold.",
        Title: "Jingles faintly; probably has money in it."
    },
    orcBrew: {
        Lite: {
            Name: "Orc brew"
        },
        Name: "Orc brew",
        Use: function (who) {
            var z = Math.min(Math.round(who.MaxHealth / 10), who.MaxHealth - who.Health);
            who.Health += z;
            if (z > 0) {
                return "Bottoms up!<br><br>" + "You gained " + z + " health back!";
            } else if (z < 0) {
                return "Bottoms up!<br><br>" + "Bleh. That ruined your night's sleep.";
            }
        },
        Title: "Heals?",
        Drop: true
    },
    trollMilk: {
        Lite: {
            Name: "Troll Milk"
        },
        Name: "Troll Milk",
        Use: function (who) {
            var z = Math.min(Math.round(who.MaxWillHealth / 10), who.MaxWillHealth - who.WillHealth);
            who.WillHealth += z;
            if (z > 0) {
                return "Bottoms up!<br><br>" + "You gained " + z + " willpower back!"
            } else if (z < 0) {
                return "Bottoms up!<br><br>" + "Bleh. That ruined your night's sleep."
            }
        },
        Equip: "No",
        Drop: true,
        Does: "Restores 10% of willpower.",
        Title: "Smells like it's already gone sour. Increases focus."
    },
    elvenHair: {
        Lite: {
            Name: "Elven hair"
        },
        Name: "Elven hair",
        Use: function (who) {
            PotionDrunk("elf");
            return "You try to become an elf..."
        },
        Equip: "No",
        Drop: true,
        Does: "Elf TF",
        Title: "This is all you need to become an elf, no potions needed."
    },
    amazonGirdle: {
        Lite: {
            Name: "Amazon's Girdle"
        },
        Name: "Amazon's Girdle",
        Use: function (who) {
            if (who.Masc > who.Femi + 100) {
                who.Masc -= 50;
                who.Femi += 50;
            } else if (who.Masc + 100 < who.Femi) {
                who.Masc += 50;
                who.Femi -= 50;
            } else {
                var z = Math.round((who.Masc + who.Femi) / 2);
                who.Masc = z;
                who.Femi = z;
            }
            return "Tightening the girdle, you feel your essences balancing..."
        },
        Equip: "No",
        Drop: true,
        Does: "Balances gender",
        Title: "Brings your essences closer together in strength."
    },
    milkJug: {
        Lite: {
            Name: "Milk Jug"
        },
        Name: "Milk Jug",
        Use: function (who) {
            for (var i = 0; i < who.Boobies.length; i++) {
                who.Boobies[i].MilkRate += 0.1;
            }
            return "Chugging the jug, you feel a shudder run through your chest..."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases lactation",
        Title: "It'll go straight to your chest!"
    },
    fertilityIdol: {
        Lite: {
            Name: "Fertility idol"
        },
        Name: "Fertility idol",
        Use: function (who) {
            who.Femi += 100;
            return "You absorb the statue's latent energies."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases femininity",
        Title: "Brings out your feminine side."
    },
    cockyRock: {
        Lite: {
            Name: "Cocky rock"
        },
        Name: "Cocky rock",
        Use: function (who) {
            who.Masc += 100;
            return "You absorb the rock's male essence."
        },
        Equip: "No",
        Drop: true,
        Does: "Increases masculinity",
        Title: "Brings out your masculine side."
    },
    infernalSemen: {
        Lite: {
            Name: "Infernal semen"
        },
        Name: "Infernal semen",
        Use: function (who) {
            who.Masc += who.Femi;
            who.Femi = 0;
            return "The infernally-hot semen burns your feminine essence, leaving you 100% male."
        },
        Equip: "No",
        Drop: true,
        Does: "Turns femininity into masculinity",
        Title: "Turns your feminine side into another masculine one."
    },
    infernalMilk: {
        Lite: {
            Name: "Infernal milk"
        },
        Name: "Infernal milk",
        Use: function (who) {
            who.Femi += who.Masc;
            who.Masc = 0;
            return "The infernally-hot milk burns your masculine essence, leaving you 100% female."
        },
        Equip: "No",
        Drop: true,
        Does: "Turns masculinity into femininity",
        Title: "Turns your masculine side into another feminine one."
    },
    SuccMilk: {
        Lite: {
            Name: "Milk+"
        },
        Name: "Milk+",
        Use: function (who) {
            var a = "",
                b = "";
            if (Settings.EssenceAuto == false && who.Boobies.length < 2) {
                if (who.Boobies[0].Size < 6) {
                    who.Boobies[0].Size = 6;
                    a = "your breasts swell";
                }
                who.Boobies[1] = who.Boobies[0];
                a += ", as another pair grow right below them to the same size!";
            } else if (Settings.EssenceAuto == false) {
                var c = 0;
                for (var i = 0; i < who.Boobies.length; i++) {
                    if (who.Boobies[i].Size < 6) {
                        who.Boobies[i].Size = 6;
                        c++;
                    }
                }
                if (c > 0)
                    a = "your smallest breasts swell to D-cups!";
            } else if (who.Femi <= 3560) {
                who.Femi = 3561;
                a = "your chest explodes with activity, leaving you with a feminized body, complete with massive breasts!";
            } else a = "your boobs vibrate with energy...";
            FluidsEngine();
            for (var i = 0; i < who.Boobies.length; i++) {
                if (who.Boobies[i].Milk < who.Boobies[i].MilkMax) {
                    who.Boobies[i].Milk = who.Boobies[i].MilkMax;
                    b = "<br>A few seconds later, they're completely filled with milk!";
                }
            }

            FluidsEngine();
            return "Feeling a flush of heat in your chest, you glance down just in time to see " + a + b
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you filled with milk!",
        Title: "Guarantees milkiness."
    },
    IncSemen: {
        Lite: {
            Name: "Semen+"
        },
        Name: "Semen+",
        Use: function (who) {
            var a = "",
                b = "";
            if (Settings.EssenceAuto == false && who.Balls.length < 2) {
                a = "your balls"
                if (who.Balls[0].Size < 6) {
                    who.Balls[0].Size = 6;
                    a += " swell";
                }
                who.Balls[1] = who.Balls[0];
                a += ", as another pair grow right beside them to the same size!";
            } else if (Settings.EssenceAuto == false) {
                var c = 0;
                for (var i = 0; i < who.Balls.length; i++) {
                    if (who.Balls[i].Size < 6) {
                        who.Balls[i].Size = 6;
                        c++;
                    }
                }
                if (c > 0)
                    a = "your smallest balls swell in size!";
            } else if (who.Masc <= 3560) {
                who.Masc = 3561;
                a = "your groin explode with activity, leaving you with a masculinized body, complete with massive dicks and balls!";
            } else a = "your balls vibrate with energy...";
            FluidsEngine();
            for (var i = 0; i < who.Balls.length; i++) {
                if (who.Balls[i].Cum < who.Balls[i].CumMax) {
                    who.Balls[i].Cum = who.Balls[i].CumMax;
                    b = " A few seconds later, they're completely filled with cum!";
                }
                FluidsEngine();
            }

            return "Feeling a flush of heat in your groin, you glance down just in time to see " + a + b
        },
        Equip: "No",
        Drop: true,
        Does: "Makes you filled with cum!",
        Title: "Guarantees cum-filling."
    },
    book: {
        Lite: {
            Name: "Book"
        },
        Name: "Book",
        Use: function (who) {
            who.Int++;
            who.Arousal = 99;
            return "A dirty magazine, that's made you extremely aroused..."
        },
        Equip: "No",
        Drop: true,
        Does: "Int +1",
        Title: "Magically connects to another dimension's internet, but only shows porn."
    },
    Milker: {
        Lite: {
            Name: "Milker500"
        },
        Name: "Milker500",
        Use: function (who, item) {
            var Milktotal = 0;
            for (var e of who.Boobies) {
                if (e.Milk > 0) {
                    Milktotal += e.Milk;
                    e.Milk = 0
                }
            }
            item.Quantity++; // Crude way to stop player from wasteing milker.
            if (Math.round(Milktotal / 500) > 0) {
                item.Quantity -= Math.max(1, Math.round(Milktotal / 1000));
            }
            if (Math.floor(Milktotal / 2000) > 0) {
                SnowInventoryAdd(ItemDict.LargeMilkBottle, Math.floor(Milktotal / 2000))
            }
            if (Math.floor(Milktotal % 2000 / 1000 > 0)) {
                SnowInventoryAdd(ItemDict.MilkBottle, Math.floor(Milktotal % 2000 / 1000))
            }
            if (Math.round((Milktotal % 1000 / 500))) { // Giving two bottles if over 1.5 seems fair
                SnowInventoryAdd(ItemDict.SmallMilkBottle, Math.round((Milktotal % 1000 / 500)));
            }
            FluidsEngine();
        },
        Equip: "No",
        Drop: true,
        Does: "Milk you",
        Title: "Milk yourself"
    },
    SmallMilkBottle: {
        Lite: {
            Name: "Small milk bottle"
        },
        Name: "Small milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 18) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 5;
            player.WillHealth += 5;
            player.Fat += 0.1;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A half liter bottle filled milk."
    },
    MilkBottle: {
        Lite: {
            Name: "Milk bottle"
        },
        Name: "Milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 17) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 12;
            player.WillHealth += 12;
            player.Fat += 0.3;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A one liter bottle filled milk."
    },
    LargeMilkBottle: {
        Lite: {
            Name: "Large milk bottle"
        },
        Name: "Large milk bottle",
        Use: function (who) {
            var a = RandomInt(1, 20);
            if (a > 16) {
                for (var e of who.Boobies) {
                    e.MilkRate++;
                    return "After drinking the milk you get a funny feeling in your chest."
                }
            }
            player.Health += 30;
            player.WillHealth += 30;
            player.Fat += 0.5;
            //Drink milk
        },
        Equip: "No",
        Drop: true,
        Does: "...",
        Title: "A two liter bottle filled milk."
    },
    PocketPortal: {
        Lite: {
            Name: "Pocket portal"
        },
        Name: "Pocket portal",
        Use: function (who, item) {
            console.log(House.Portal)
            if (who.Map === "RoadToHome") {
                document.getElementById("InventoryText").innerHTML = "... seriously?"
                item.Quantity++;
            } else if (House.Portal.Owned) {
                who.Area = "First";
                who.Map = "RoadToHome";
                DisplayGame();
                document.getElementById("Inventory").style.display = 'none';
            } else {
                item.Quantity++;
                document.getElementById("InventoryText").innerHTML = "You have no house portal.";
            }
        },
        Equip: "No",
        Does: "Teleport home",
        Drop: false, //I think?
        Title: "Never walk home again!"
    },
}

// Splited from main dict to keep it readable
ItemDict.SpellBook = {
    Lite: {
        Name: "SpellBook"
    },
    Name: "SpellBook",
    Equip: "", // this will be refactored to contain two attributes, Equip(who) and Unequip(who)
    Drop: false,
    Does: "Short desc.",
    Quantity: "bob", // Infinity
    Title: "Long description of the item",
    Use: function (who) {
        document.getElementById("Inventory").style.display = "none";

        var Div = document.getElementById("SpellBook");
        Div.style.display = "block";
        while (Div.hasChildNodes()) {
            Div.removeChild(Div.firstChild);
        }

        var h1 = document.createElement("h1");
        h1.innerHTML = "Spell book"
        Div.appendChild(h1);

        var p = document.createElement("p");
        p.classList.add("TextBox");
        Div.appendChild(p);

        for (var e = 0; e < player.Spells.length; e++) {
            var Spell = DictSpell(e);
            Div.appendChild(Spell);
        }

        function DictSpell(e) {
            var it = player.Spells[e];
            var DictIt = SpellDict[it.Name];
            var DictSpell = InputButton(DictIt.Name);
            DictSpell.addEventListener("click", function () {
                h1.innerHTML = DictIt.Name
                p.innerHTML = SpellDictLite[it.Name].Title + "<br><br>Manacost: " + DictIt.ManaCost(it.Exp) + "<br>Type: " + DictIt.Type +
                    "<br>Exp: " + it.Exp;
                console.log(e);
            });
            Div.appendChild(DictSpell);
            return DictSpell
        }
        var CloseBook = InputButton("Close book");
        CloseBook.addEventListener("click", function () {
            while (Div.hasChildNodes()) {
                Div.removeChild(Div.firstChild);
            }
            Div.style.display = "none";
            document.getElementById("Inventory").style.display = "block";
        });
        Div.appendChild(CloseBook);
    }
}
    // Level Menu
    document.getElementById("LevelButton").addEventListener("click", function () {
        DisplayNone();
        LevelMenuFunc();
        document.getElementById("LevelMenu").style.display = 'block';
    });
    // Incraese stats

    function LevelMenuFunc() {
        let div = document.getElementById("LevelMenu");
        while (div.hasChildNodes()) {
            div.removeChild(div.lastChild);
        }
        let innerdiv = document.createElement("div");
        innerdiv.classList.add("LPMenuInner");

        let Con = document.createElement("div");
        if (window.innerHeight > 600) {
            let h1 = document.createElement("h1");
            let h1text = document.createTextNode("Level menu")
            h1.appendChild(h1text);
            innerdiv.appendChild(h1);

        }

        let p = document.createElement("p");
        p.classList.add("MenuText");
        innerdiv.appendChild(p);

        Con.addEventListener("mouseover", function (e) {
            p.innerHTML = e.target.title;
        })

        let pl = document.createElement("p"); // PointsLeft
        pl.innerHTML = player.SkillPoints + " points left";
        innerdiv.appendChild(pl);

        let br = document.createElement("br"),
            br2 = document.createElement("br"),
            br3 = document.createElement("br");

        let Strength = InputButton("Strength: " + player.Str, "Makes physical attacks stronger");
        Strength.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Str++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Strength);

        let Charm = InputButton("Charm: " + player.Charm, "Makes tease stronger");
        Charm.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Charm++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Charm);
        Con.appendChild(br);

        let Endurance = InputButton("Endurance: " + player.End, "Gives you more health and every 8 point increase max orgasm");
        Endurance.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.End++;
                player.SkillPoints--;
                player.MaxHealth += 5;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Endurance);

        let Intelligence = InputButton("Intelligence: " + player.Int, "Increases spell effects");
        Intelligence.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Int++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Intelligence);
        Con.appendChild(br2);

        let Willpower = InputButton("Willpower: " + player.Will, "Increases your willhealth");
        Willpower.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.Will++;
                player.MaxWillHealth += 5;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Willpower);

        let Sexskill = InputButton("Sex skill: " + player.SexSkill, "When having sex your enemy gains more arousal");
        Sexskill.addEventListener("click", function () {
            if (player.SkillPoints > 0) {
                player.SexSkill++;
                player.SkillPoints--;
                LevelMenuFunc();
            } else {
                return;
            }
        });
        Con.appendChild(Sexskill);

        innerdiv.appendChild(Con);
        innerdiv.appendChild(br3);

        let PerkMenu = InputButton("Perk menu");
        PerkMenu.addEventListener("click", function () {
            PerkMenuFunc();
        });
        innerdiv.appendChild(PerkMenu);

        let Done = InputButton("Done");
        Done.addEventListener("click", function () {
            div.style.display = 'none';
            DisplayGame();
        })
        innerdiv.appendChild(Done);
        div.appendChild(innerdiv);
    }
function Loader(Load) {
    const LoadArray = JSON.parse(localStorage.getItem(Load));   
    player = LoadArray[0];
    House = LoadArray[1];
    Flags = LoadArray[2];
    Settings = LoadArray[3];
    CheckFlags();
    DisplayGame();
    requestAnimationFrame(loop);
    document.getElementById("LoadMenu").style.display = 'none';
    return;
}

// Game load button
document.getElementById("LoadButton").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'block';
    document.getElementById("StartPage").style.display = 'none';
    document.getElementById("StartLoad").style.display = 'inline-block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            document.getElementById("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
// Start page load button
document.getElementById("StartLoad").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'none';
    document.getElementById("StartPage").style.display = 'grid';
})

// Load handler
function Loaders() {
    for (let e = 1; e < 6; e++) {
        document.getElementById("LoadPlayer" + e).addEventListener("click", function () {
            enemies = [];
            if (localStorage.getItem('SavedPlayer' + e) === null) {
                return;
            } else {
                Loader('SavedPlayer' + e);
            }
            return;
        });
    }
}
Loaders();

document.getElementById("LoadFile").addEventListener("input", function () {
    var test = document.getElementById("LoadFile");
    var reader = new FileReader();
    reader.readAsText(test.files[0]);
    reader.onload = function () {
        var parseplayer = JSON.parse(reader.result);
        var LoadArray = [];
        LoadArray = parseplayer;
        player = LoadArray[0];
        House = LoadArray[1];
        Flags = LoadArray[2];
        Settings = LoadArray[3];
        battle = false;
        document.getElementById("StartPage").style.display = 'none';
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("status").style.display = 'block';
        document.getElementById("LoadMenu").style.display = 'none';
        CheckFlags();
        requestAnimationFrame(loop);
    }
});
document.getElementById("Load").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("MapLoad").style.display = 'block';
    document.getElementById("LoadMenu").style.display = 'block';
    document.getElementById("StartLoad").style.display = 'none';

    for (var e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            document.getElementById("LoadPlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
document.getElementById("LoadLeave").addEventListener("click", function () {
    document.getElementById("LoadMenu").style.display = 'none';
    DisplayGame();
})
// End Load handler
function IntToOne(i) {
    switch (i) {
        case 0:
            return "A "
        case 1:
            return ", below it there is a second "
        case 2:
            return ", followed by a third "
        default:
            return ", and a " + (i + 1) + "th ";
    }
}

function DickLook(who) {
    if (who.Dicks.length > 0) {
        var dicks = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            dicks = "Under your equine body, retracted into their penile sheath, you find "
        } else if (who.SecondRace == "equine") {
            dicks = "Retracted into their penile sheath, you find "
        }
        for (var d = 0; d < who.Dicks.length; d++) {
            if (who.Dicks[d].Virgin) {
                virgin = " virgin"
            }
            dicks += IntToOne(d) + CmToInch(who.Dicks[d].Size) + " long " + who.Dicks[d].Type.toLowerCase() + virgin + " dick";
        }
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function ExactDickLook(who) {
    if (who.Dicks.length > 0) {
        var dicks = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            dicks = "Under your equine body, retracted into their penile sheath, you find "
        } else if (who.SecondRace == "equine") {
            dicks = "Retracted into their penile sheath, you find "
        }
        for (var d = 0; d < who.Dicks.length; d++) {
            if (who.Dicks[d].Virgin) {
                virgin = " virgin"
            }
            dicks += IntToOne(d) + CmToInch(who.Dicks[d].Size) + " long " + who.Dicks[d].Type.toLowerCase() + virgin + " dick";
        }
        return dicks + ".<br><br>";
    } else {
        return "";
    }
}

function BallLook(who) {
    if (who.Balls.length > 0) {
        var balls = "";
        for (var b = 0; b < who.Balls.length; b++) {
            balls += IntToOne(b) + "pair of " + CmToInch(who.Balls[b].Size) + " wide balls, ";
            balls += Filled(who.Balls[b]) + " cum";
        }
        return balls + "<br><br>";
    } else {
        return "";
    }
}

function ExactBallLook(who) {
    if (who.Balls.length > 0) {
        var balls = "";
        for (var b = 0; b < who.Balls.length; b++) {
            balls += IntToOne(b) + "pair of " + CmToInch(who.Balls[b].Size) + " wide balls, ";
            balls += "filled with " + LToGal(who.Balls[b].Cum / 1000) + " cum";
        }
        return balls + "<br><br>";
    } else {
        return "";
    }
}

function Filled(what) {
    return "filled with " + LToGal(what.Cum / 1000)
    /**
     *     var Percent = what.Cum / what.CumMax;
        console.log(Percent);
        if (Percent > 0.9) {
            return "swollen with"
        } else if (Percent > 0.5) {
            return "filled with"
        } else if (Percent > 0.3) {
            return ""
        } else if (Percent > 0.1) {
            return "shrunken due their emptiness"
        } else if (Percent > 0.01) {
            return ""
        } else {
            return "completely emptied"
        }
     */
}

function PussyLook(who) {
    if (who.Pussies.length > 0) {
        var pussies = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            pussies = "At your equine backside are your mare genitals, ";
        }
        for (var p = 0; p < who.Pussies.length; p++) {
            if (who.Pussies[p].Virgin) {
                virgin = " virgin"
            }
            who.Pussies[p].Type + virgin + " pussy <br>";
            pussies += IntToOne(p) + CmToInch(who.Pussies[p].Size) + " deep " + who.Pussies[p].Type.toLowerCase() + virgin + " pussy";
        }
        return pussies + ".<br><br>";
    } else {
        return "";
    }
}

function ExactPussyLook(who) {
    if (who.Pussies.length > 0) {
        var pussies = "";
        var virgin = " ";
        if (who.SecondRace == "centaur") {
            pussies = "At your equine backside are your mare genitals, ";
        }
        for (var p = 0; p < who.Pussies.length; p++) {
            if (who.Pussies[p].Virgin) {
                virgin = " virgin"
            }
            who.Pussies[p].Type + virgin + " pussy <br>";
            pussies += IntToOne(p) + CmToInch(who.Pussies[p].Size) + " deep " + who.Pussies[p].Type.toLowerCase() + virgin + " pussy";
        }
        return pussies + ".<br><br>";
    } else {
        return "";
    }
}

function BoobLook(who) {
    if (who.Boobies.length > 0) {
        var boobies = "";
        for (var b = 0; b < who.Boobies.length; b++) {
            if (b == 0 && (Math.round(who.Boobies[0].Size) == 2 || Math.round(who.Boobies[0].Size) == 3)) {
                boobies += "An " + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else if (Math.round(who.Boobies[b].Size) > 1 && Math.round(who.Boobies[b].Size < 28)) {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + " chest";
            }
        }
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function ExactBoobLook(who) {
    if (who.Boobies.length > 0) {
        var boobies = "";
        for (var b = 0; b < who.Boobies.length; b++) {
            if (b == 0 && (Math.round(who.Boobies[0].Size) == 2 || Math.round(who.Boobies[0].Size) == 3)) {
                boobies += "An " + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else if (Math.round(who.Boobies[b].Size) > 1 && Math.round(who.Boobies[b].Size < 28)) {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + "-cup chest";
            } else {
                boobies += IntToOne(b) + BoobSizeConvertor(who.Boobies[b].Size) + " chest";
            }
        }
        return boobies + ".<br><br>";
    } else {
        return "";
    }
}

function AnalLook(who) {

}

function BoobSizeConvertor(Size) {
    switch (Math.round(Size)) {
        case 0:
        case 1:
            return "flat";
        case 2:
            return "AA";
        case 3:
            return "A";
        case 4:
            return "B";
        case 5:
            return "C";
        case 6:
            return "D";
        case 7:
            return "DD";
        case 8:
            return "F";
        case 9:
            return "Large F";
        case 10:
            return "G";
        case 11:
            return "Large G";
        case 12:
            return "H";
        case 13:
            return "Large H";
        case 14:
            return "I";
        case 15:
            return "Large I";
        case 16:
            return "J";
        case 17:
            return "Large J";
        case 18:
            return "K";
        case 19:
            return "Large K";
        case 20:
            return "L";
        case 21:
            return "Large L";
        case 22:
            return "M";
        case 23:
            return "Large M";
        case 24:
            return "N";
        case 25:
            return "Large N";
        case 26:
            return "O";
        case 27:
            return "Large O";
        default:
            return "scale-breaking"
    }
}

function PussySizeConvetor(Size) { // Could be fun to reuse with a strecht factor
    if (Size <= 1) {
        return "extremely tight";
    } else if (Size >= 2 && Size < 4) {
        return "very tight";
    } else if (Size >= 4 && Size < 6) {
        return "tight";
    } else if (Size >= 6 && Size < 8) {
        return "parted";
    } else if (Size >= 8 && Size < 10) {
        return "loose";
    } else {
        return "gaping";
    }
}

function Fitness(who) {
    var a, b, c;
    if ((who.Fat / who.Weight) * 100 <= 2) {
        a = "You look malnourished ";
    } else if ((who.Fat / who.Weight) * 100 <= 14) {
        a = "You have an athletic body ";
    } else if ((who.Fat / who.Weight) * 100 <= 18) {
        a = "You have a fit body ";
    } else if ((who.Fat / who.Weight) * 100 <= 26) {
        a = "You have a healthy body ";
    } else if ((who.Fat / who.Weight) * 100 <= 31) {
        a = "You have an pudgy body "; // Probably should change to more positive words, plus size? fat?
    } else if ((who.Fat / who.Weight) * 100 <= 36) {
        a = "You have a plump body "; // Obese
    } else {
        a = "You have a plus size body "; // morbidly obese
    }

    if (who.Muscle < who.Height * 0.18) {
        b = "with unnoticable muscle";
    } else if (who.Muscle < who.Height * 0.20) {
        b = "with some defined muscle";
    } else if (who.Muscle < who.Height * 0.22) {
        b = "with well-defined muscle";
    } else if (who.Muscle < who.Height * 0.26) {
        b = "with bulky muscle";
    } else if (who.Muscle < who.Height * 0.30) {
        b = "with hulking muscle";
    } else if (who.Muscle < who.Height * 0.34) {
        b = "with enormous muscle";
    } else {
        b = "with colossal muscle"; // This is relative does a fairy ever have colossal muscle?
    }


    if ((who.Fat / who.Weight) * 100 <= 25) {
        c = "."
    } else if ((who.Fat / who.Weight) * 100 <= 31 && who.Muscle < who.Height * 0.18) {
        c = " covered in fat.";
    } else if ((who.Fat / who.Weight) * 100 <= 38 && who.Muscle < who.Height * 0.20) {
        c = " buried in fat.";
    } else if ((who.Fat / who.Weight) * 100 <= 55 && who.Muscle > who.Height * 0.22) {
        c = "... Otherwise, you couldn't move.";
    } else if ((who.Fat / who.Weight) * 100 <= 55 && who.Muscle < who.Height * 0.22) {
        c = "... Your weight is a burden to your ability to move.";
    } else {
        c = "... No-one knows how you move.";
    }

    return a + b + c;
}
document.getElementById("Perks").addEventListener("click", function () {
    // Moved everything to the button to clean up the player var.
    DisplayNone();
    var div = document.getElementById("Levels");
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }

    var StatsLevel = document.createElement("div");

    var h3 = document.createElement("h3");
    var h3Text = document.createTextNode("Stats:");
    h3.appendChild(h3Text);
    StatsLevel.appendChild(h3);

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
        "</li><li>Charm: " + player.Charm + "</li><li>Int: " + player.Int + "</li><li>Sex skill: " + player.SexSkill + "</li>";
    RawStats.appendChild(RawP);

    var H4 = document.createElement("h4");
    var H4Text = document.createTextNode("Total:");
    H4.appendChild(H4Text);
    Stats.appendChild(H4);

    var P = document.createElement("ol");
    P.innerHTML = "<li>Str: " + TotalStr() + "</li><li>End: " + TotalEnd() + "</li><li>Will: " + TotalWill() +
        "</li><li>Charm: " + TotalCharm() + "</li><li>Int: " + TotalInt() + "</li><li>Sex skill: " + TotalSexSkill() + "</li>";
    Stats.appendChild(P);

    StatsLevel.appendChild(RawStats);
    StatsLevel.appendChild(Stats);
    div.appendChild(StatsLevel);
    document.getElementById("Levels").style.display = 'block';

    var Perks = document.createElement("div");
    Perks.style.display = "inline-block"
    var PerksH4 = document.createElement("h4");
    var PerksH4text = document.createTextNode("Perks:");
    PerksH4.appendChild(PerksH4text);
    Perks.appendChild(PerksH4);

    var PerksP = document.createElement("ol");

    for (var i = 0; i < Object.keys(player.Perks).length; i++) {
        if (player.Perks[Object.keys(player.Perks)[i]].Count > 0) {
            var perkLi = document.createElement("li");
            perkLi.innerHTML = Object.keys(player.Perks)[i] + ": " + player.Perks[Object.keys(player.Perks)[i]].Count;
            PerksP.appendChild(perkLi);
        }
    }
    Perks.appendChild(PerksP);
    div.appendChild(Perks);

    var Races = document.createElement("div");
    Races.style.display = "inline-block";

    var RacesH4 = document.createElement("h4");
    var RacesH4Text = document.createTextNode("Race essence:");
    RacesH4.appendChild(RacesH4Text);
    Races.appendChild(RacesH4);

    var RacesP = document.createElement("ol");
    var RaceTotal = 0;
    for (var e = 0; e < player.RaceEssence.length; e++) {
        RaceTotal += player.RaceEssence[e].amount;
    }
    if (RaceTotal < 100) {
        RaceTotal = 100;
    }
    for (var e = 0; e < player.RaceEssence.length; e++) {
        var RacesLi = document.createElement("li");
        RacesLi.innerHTML = player.RaceEssence[e].Race + ": " + Math.round(player.RaceEssence[e].amount / RaceTotal * 100) + "%  (" + player.RaceEssence[e].amount + ")";
        RacesP.appendChild(RacesLi);
    }
    Races.appendChild(RacesP);
    div.appendChild(Races);


    if (Settings.Vore) {
        var Vore = document.createElement("div");
        Vore.style.display = "inline-block";

        var VoreH4 = document.createElement("h4");
        var VoreH4Text = document.createTextNode("Vore perks:");
        VoreH4.appendChild(VoreH4Text);
        Vore.appendChild(VoreH4);

        var VoreP = document.createElement("ol");
        var v = player.Vore.VorePerks;
        if (Object.keys(v).length > 0) {
            for (var i = 0; i < Object.keys(v).length; i++) {
                var VoreLi = document.createElement("li");
                VoreLi.innerHTML = Object.keys(v)[i] + ": " + v[Object.keys(v)[i]].Count;
                VoreP.appendChild(VoreLi);
            }
        }
        Vore.appendChild(VoreP);
        div.appendChild(Vore);
    }

    var br = document.createElement("br");
    div.appendChild(br);

    var CloseLevel = InputButton("Close");
    CloseLevel.addEventListener("click", function () {
        document.getElementById("Levels").style.display = 'none';
        DisplayGame();
    });
    div.appendChild(CloseLevel);
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
document.getElementById("EnemyLoseSex").addEventListener("click", function () {
	if (document.getElementById("LoseEnemyKinda").style.display === 'none') {
		document.getElementById("LoseSexStats").innerHTML = " ";
		document.getElementById("LoseEnemyKinda").style.display = 'block';
		document.getElementById("LoseEnemyExact").style.display = 'none';
		document.getElementById("LoseEnemyExact").innerHTML = "";
	} else {
		var ee = enemies[EnemyIndex];
		document.getElementById("LoseSexStats").innerHTML = "Looking at them you estimate that they are about " + CmToInch(ee.Height) + " tall and look to weigh around " + KgToPound(ee.Weight);
		document.getElementById("LoseEnemyKinda").style.display = 'none';
		document.getElementById("LoseEnemyExact").style.display = 'block';
		document.getElementById("LoseEnemyExact").innerHTML = "<p>" + ExactBoobLook(ee) + ExactPussyLook(ee) + ExactDickLook(ee) + ExactBallLook(ee) +
			"</p>";
	}
});
document.getElementById("PlayerLoseSex").addEventListener("click", function () {
	if (document.getElementById("LoseplayerKinda").style.display === 'none') {
		document.getElementById("LoseplayerKinda").style.display = 'block';
		document.getElementById("LoseplayerExact").style.display = 'none';
		document.getElementById("LoseplayerExact").innerHTML = "";
	} else {
		document.getElementById("LoseplayerKinda").style.display = 'none';
		document.getElementById("LoseplayerExact").style.display = 'block';
		document.getElementById("LoseplayerExact").innerHTML = "<p>" + ExactBoobLook(player) + ExactPussyLook(player) + ExactDickLook(player) + ExactBallLook(player) +
			"</p>";
	}
});

function Lose(sex = true) {
	var ee = enemies[EnemyIndex];
	document.getElementById("LosePlayerLooks").innerHTML = ""; // BoobLook(player) + PussyLook(player) + DickLook(player) + BallLook(player);
	if (player.Pregnant.Babies.length > 0) {
		var age = Math.round(player.Pregnant.Babies[0].BabyAge / 30);
		if (age < 1) {
			age = "Impregnated";
		} else {
			age = age + " months pregnant";
		}
		document.getElementById("LosePlayerLooks").innerHTML += "<br>" + age;
	}
	document.getElementById("LoseEnemyLooks").innerHTML = ""; //BoobLook(ee) + PussyLook(ee) + DickLook(ee) + BallLook(ee);
	if (ee.hasOwnProperty("Pregnant")) {
		if (ee.Pregnant.Status) {
			document.getElementById("LoseEnemyLooks").innerHTML += "<br>Pregnant";
		}
	}
	Winner = false;
	document.getElementById("LosePName").innerHTML = player.Name + " " + player.LastName;
	document.getElementById("LoseEName").innerHTML = ee.Name + "<br>" + ee.Race + " " + Pronoun(CheckGender(ee));
	document.getElementById("LoseMascu").innerHTML = Math.round(player.Masc);
	document.getElementById("LoseFemin").innerHTML = Math.round(player.Femi);
	document.getElementById("LoseEMascu").innerHTML = Math.round(ee.Masc);
	document.getElementById("LoseEFemin").innerHTML = Math.round(ee.Femi);
	SexColor(player, "PlayerLose");
	SexColor(ee, "EnemyLose");
	var DelatMed = 2;
	if (player.Masc >= ee.Masc && player.Masc >= ee.Femi && player.Masc >= player.Femi) {
		DelatMed = 100 / player.Masc;
	} else if (player.Femi >= ee.Masc && player.Femi >= ee.Femi && player.Femi >= player.Masc) {
		DelatMed = 100 / player.Femi;
	} else if (ee.Masc >= player.Masc && ee.Masc >= ee.Femi && ee.Masc >= player.Femi) {
		DelatMed = 100 / ee.Masc;
	} else {
		DelatMed = 100 / ee.Femi;
	}

	document.getElementById("LoseMascu").style.width = player.Masc * DelatMed + "%";
	document.getElementById("LoseFemin").style.width = player.Femi * DelatMed + "%";
	document.getElementById("LoseEMascu").style.width = ee.Masc * DelatMed + "%";
	document.getElementById("LoseEFemin").style.width = ee.Femi * DelatMed + "%";

	document.getElementById("Encounter").style.display = 'none';
	document.getElementById("Lose").style.display = 'grid';
	document.getElementById("LeaveLose").style.display = 'none';
	document.getElementById("DungeonLose").style.display = 'none';
	if (sex) {
		if (document.getElementById("LoseSexText").style.display = 'none')
			document.getElementById("LoseSexText").style.display = 'block'
		document.getElementById("LoseSexText").innerHTML = "You lost to a " + Pronoun(CheckGender(ee)) + " " + ee.Race + " " + ee.Name;
		NameConq(ee);
	} else {
		document.getElementById("LoseSexText").style.display = 'none';
		document.getElementById("LoseStruggle").style.display = 'none';
		document.getElementById("LoseSubmit").style.display = 'none';
		if (Dungeon) {
			document.getElementById("DungeonLose").style.display = 'inline-block';
		} else {
			document.getElementById("LeaveLose").style.display = 'inline-block';
		}
	}
	return;
}
document.getElementById("LoseSubmit").addEventListener("click", function () {
	var take = Math.round(enemies[EnemyIndex].SexSkill * RandomInt(3, 5));
	var selectScene = SnowScenes();
	document.getElementById("LosePlayerOrgasm").innerHTML = loseScene(false, selectScene, enemies[EnemyIndex], player);
	if (selectScene === "forcedBJ" || selectScene === "getBJ" || selectScene === "getRidden" || selectScene === "getRiddenAnal") {
		take = Math.min(take, player.Masc);
		player.Masc -= take;
		enemies[EnemyIndex].Masc += take;
	} else if (selectScene === "forcedCunn" || selectScene === "getCunn" || selectScene === "getFucked" || selectScene === "getFuckedAnal") {
		take = Math.min(take, player.Femi);
		player.Femi -= take;
		enemies[EnemyIndex].Femi += take;
	} else {
		var takeM = Math.min(take, player.Masc) / 2;
		take = Math.min(take, player.Femi) / 2;
		player.Masc -= takeM;
		player.Femi -= take;
		enemies[EnemyIndex].Masc += takeM;
		enemies[EnemyIndex].Femi += take;
	}
	Lose(false);
});
document.getElementById("LoseStruggle").addEventListener("click", function () {
	var take = Math.round(enemies[EnemyIndex].SexSkill * RandomInt(1, 7));
	var selectScene = SnowScenes();
	document.getElementById("LosePlayerOrgasm").innerHTML = loseScene(true, selectScene, enemies[EnemyIndex], player);
	if (selectScene === "forcedBJ" || selectScene === "getBJ" || selectScene === "getRidden" || selectScene === "getRiddenAnal") {
		take = Math.min(take, player.Masc);
		player.Masc -= take;
		enemies[EnemyIndex].Masc += take;
	} else if (selectScene === "forcedCunn" || selectScene === "getCunn" || selectScene === "getFucked" || selectScene === "getFuckedAnal") {
		take = Math.min(take, player.Femi);
		player.Femi -= take;
		enemies[EnemyIndex].Femi += take;
	} else if (selectScene === "forcedRim" || selectScene === "getRim") {
		var takeM = Math.min(take, player.Masc) / 2;
		take = Math.min(take, player.Femi) / 2;
		player.Masc -= takeM;
		player.Femi -= take;
		enemies[EnemyIndex].Masc += takeM;
		enemies[EnemyIndex].Femi += take;
	} else {
		var shift = player.height / 2;
		player.height -= shift;
		enemies[EnemyIndex].height += shift;
		for (var i = 0; i < player.Boobies.length; i++) {
			shift = player.Boobies[i].Milk;
			player.Boobies[i].Milk = 0;
			enemies[EnemyIndex].Boobies[0].Milk = Math.min(enemies[EnemyIndex].Boobies[0].MilkMax, enemies[EnemyIndex].Boobies[0].Milk + shift);
		}
		for (var i = 0; i < player.Balls.length; i++) {
			shift = player.Balls[i].Cum;
			player.Balls[i].Cum = 0;
			enemies[EnemyIndex].Balls[0].Cum = Math.min(enemies[EnemyIndex].Balls[0].CumMax, enemies[EnemyIndex].Balls[0].Cum + shift);
		}
		shift = player.Gold / 2;
		enemies[EnemyIndex].Gold += shift;
		player.Gold /= 2;
	}
	Lose(false);
});
document.getElementById("LeaveLose").addEventListener("click", function () {
	battle = false;
	document.getElementById("Lose").style.display = 'none';
	document.getElementById("map").style.display = 'block';
	document.getElementById("status").style.display = 'block';
	document.getElementById("buttons").style.display = 'block';
	document.getElementById("LoseStruggle").style.display = 'inline-block';
	document.getElementById("LoseSubmit").style.display = 'inline-block';
	document.getElementById("LosePlayerOrgasm").innerHTML = " ";
	document.getElementById("EventLog").style.display = 'block';
	LastPressed = " ";
});

//Testing all scenes
/*document.getElementById("Cycle").addEventListener("click", function () {
	var sub = [true, false];
	var action = ["forcedBJ", "forcedCunn", "forcedRim", "getBJ", "getCunn", "getRim", "getFucked", "getFuckedAnal", "getRidden", "getRiddenAnal", "getVoreStomach", "getVoreBalls", "getVoreBoobs", "getVoreVagina", "getVoreAnal"];
	var gender = ["hermaphrodite", "cuntboy", "male", "female", "dickgirl", "doll"]
	console.log("Let's do this.");
    for(var a = 0; a < sub.length; a++)
	{
		for(var b = 0; b < action.length; b++)
		{
			for(var c = 0; c < gender.length; c++)
			{
				for(var d = 0; d < gender.length; d++)
				{
				try{
					console.log(loseScene(sub[a], action[b], gender[c], gender[d]));
				}
				catch {
					console.log("Error at "+sub[a]+ action[b]+ gender[c]+ gender[d]);
				}
				}
			}
		}
	}
});*/

//If you lose, and your opponent drains you. Set up for other uses, and milk if it gets implemented.
function fluid(who, what) {
	var part;
	if (what === "Cum")
		part = "Balls";
	else if (what === "Milk")
		part = "Breasts";
	else {
		console.log("Fluid drain error! " + what);
		return;
	}
	for (var i = 0; i < who.part.length; i++)
		who.part[i].what = 0;
}

function loseScene(struggle, selectScene, Enemy, Player) {
	var enemyCum = 0;
	var playerCum = 0;
	if (Enemy.hasOwnProperty("Balls")) {
		for (var i = 0; i < Enemy.Balls.length; i++)
			enemyCum += Enemy.Balls[i].Size / 4;
		enemyCum = LToGal(enemyCum) + " down your throat.";
	} else enemyCum = ".";

	if (Player.hasOwnProperty("Balls")) {
		for (var i = 0; i < Player.Balls.length; i++)
			playerCum += Player.Balls[0].Cum;
		playerCum = LToGal(playerCum);
	}
	var returnText;
	if (struggle) {
		switch (selectScene) {
			case "forcedBJ":
				returnText = Enemy.FirstName + " forces your head to their crotch, and starts thrusting their " + CmToInch(Enemy.Dicks[0].Size) + " dick into your mouth. Despite your intentions, your body betrays you and orgasms as they cum" + enemyCum;
				break;
			case "forcedCunn":
				returnText = Enemy.FirstName + " forces your head to their crotch, forcing you to start eating them out. "
				if (Enemy.Balls.length > 0) {
					returnText += "Their " + CmToInch(Enemy.Balls[0].Size) + " balls cover your face, forcing their musky scent into your nose. "
				}
				returnText += "Despite your intentions, your body betrays you and orgasms as they cover your face in girlcum."
				if (CheckGender(Enemy) === "hermaphrodite")
					returnText += "<br>You feel their balls twitch on your face, shooting cum over your back, eventually dripping into your hair."
				break;
			case "forcedRim":
				if (CheckGender(Enemy) != "doll")
					returnText = "Despite having more sensitive erogenous zones, " + Enemy.FirstName + " wants to maximize your humiliation by forcing you to eat their ass out. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				else if (CheckGender(Enemy) === "doll" && player.Dicks.length <= 0)
					returnText = "With no other way to get pleasure, " + Enemy.FirstName + " forces you to the ground and sit on your face, giving you no other option than to eat their ass out for pleasure. "
				else
					returnText = "Rather that let you use your dick on their only hole, " + Enemy.FirstName + " decides to force you to use your tongue. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				returnText += "<br>Despite your humiliating position, you find your body responding, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Forcing you onto your back, " + Enemy.FirstName + " expertly massages your cock and balls, quickly bringing you erect. "
				if (player.Pussies.length > 0)
					returnText += "They even tease your pussy a bit, all to make you cum quicker. "
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming " + playerCum + " down their throat seconds after their lips meet your dick's head.";
				fluid(player, Cum);
				break;
			case "getCunn":
				returnText = "Forcing you onto your back, " + Enemy.FirstName + " expertly fingers your pussy, quickly making you wet. "
				if (player.Balls.length > 0)
					returnText += "They even tease your balls a bit, all to make you cum quicker. "
				returnText += "<br>Unable to put up more than a feeble struggle, you find yourself cumming around their tongue seconds after it penetrates your lower lips."
				break;
			case "getRim":
				if (CheckGender(Player) === "doll" && enemies[EnemyIndex].Dicks.length > 0)
					returnText = "Rather than use their penis on your ass, they'd rather find a pussy instead. "
				else if (CheckGender(Player) != "doll")
					returnText = "Rather than pleasuring your more sensitive organs, they've decided to humiliate you instead. "
				returnText += "<br>Forcing you onto your stomach, your enemy repeatedly smacks your ass, bringing a blush to both sets of cheeks. Despite your humiliation (and your ass getting sore), you soon orgasm"
				if (CheckGender(Player) === "hermaphrodite")
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				else if (player.Dicks.length > 0)
					returnText += ", spurting cum from your dick onto your belly."
				else if (player.Pussies.length > 0)
					returnText += ",  soaking your thighs."
				else
					returnText += ", shuddering in unwanted pleasure."
				break;
			case "getFucked":
				returnText = "Forcing you on your back, your enemy fondles your clit just enough for your body to betray you and your pussy to get wet. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "Moving your balls to the side, they thrust in to you."
				else
					returnText += "Spreading your lips with one hand, they thrust into you."
				returnText += "<br>Knowing how to handle someone with as little experience as you, they pin your arms above your head and quickly bring you to orgasm, your shuddering walls causing them to cum inside you. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "Fortunately, you're alredy pregnant, and won't have to carry their child."
				else {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
						else
							returnText += "At least you weren't impregnated..."
				}*/
				break;
			case "getFuckedDoggy":
				returnText = "Your enemy forces your beaten body to its hands and knees; you can't even muster the energy to collapse. Your body, however, has other plans, and you feel your pussy start to drip. Your opponent wastes little time, and quickly gets into position, soon thrusting deeply into you. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				returnText += "Your enemy cums soon after, quickly filling your pussy and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "Fortunately, you're alredy pregnant, and won't have to carry their child."
				else {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
						else
							returnText += "At least you weren't impregnated..."
				}*/
				break;
			case "getFuckedAnal":
				returnText = "Your enemy forces your beaten body to its hands and knees; you can't even muster the energy to collapse. "
				if (player.Pussies.length > 0)
					returnText += "Your body, however, has other plans, and you feel your pussy start to drip. Even with such a clear signal, though, your enemy positions themselves a little higher. "
				returnText += "Having gotten into position, your enemy spreads your ass cheeks, and slowly works their dick into your bowels. Unable to respond, you feel your ass getting stretched. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping your balls and clit, sending little bursts of unintended pleasure through your organs.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				else if (player.Pussies.length > 0)
					returnText += "With every thrust, you feel their balls tapping your clit, sending little bursts of unintended pleasure through your pussy.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. "
				else if (player.Balls.length > 0)
					returnText += "With every thrust, you feel their balls tapping yours, sending little bursts of unintended pleasure through your dick.<br>It doesn't take long for you to orgasm, your balls unloading themselves onto your stomach and the ground. "
				else
					returnText += "<br>It doesn't take long for you to orgasm, a pleasurable heat spreading from your ass. "
				returnText += "Your enemy cums soon after, quickly filling your ass and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
					if(player.Pussies.length > 0) {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."
					}
					else {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... But you couldn't be pregnant - you don't have a pussy!"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You wish you could've chosen a better partner..."

					}
				}*/
				break;
			case "getRidden":
				returnText = "Pushing you over, your enemy fondles your balls, quickly giving you an erection. Straddling your groin, they quickly thrust down, riding your dick. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their pussy. They're not satisfied yet, though, and continue to ride you for several orgasms. "
				/*if(enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
				} else {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
						returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You wish you could've chosen your partner..."
				}*/
				break;
			case "getRiddenAnal":
				returnText = "Pushing you over, your enemy fondles your balls, quickly giving you an erection. Straddling your groin, they quickly thrust down, riding your dick. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their ass. They're not satisfied yet, though, and continue to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You wish you could've chosen your partner..."
				}*/
				break;
			case "getVoreStomach":
				returnText = "Grabbing your arms, they try to shove you down their throat, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBalls":
				returnText = "Grabbing your arms, they try to shove you down their dick, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBoobs":
				returnText = "Grabbing your arms, they try to shove you into their tits, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreVagina":
				returnText = "Grabbing your arms, they try to shove you into their vagina, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreAnal":
				returnText = "Grabbing your arms, they try to shove you into their ass, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			default:
				returnText = "This shouldn't be here - send snowspider a message, saying \"Loss: " + struggle + ", " + selectScene + "\""
				break;
		}
	} else {
		switch (selectScene) {
			case "forcedBJ":
				returnText = "They force your head to their crotch, and start thrusting their dick into you. You eagerly give them head, orgasming as they cum down your throat."
				break;
			case "forcedCunn":
				returnText = "They force your head to their crotch and you dive in, eagerly eating them out. "
				if (CheckGender(Enemy) === "hermaphrodite")
					returnText += "Their balls cover your nose, forcing their musky scent into your nose. "
				returnText += "As they cover your face in girlcum, your body orgasms, proud of its job. "
				if (CheckGender(Enemy) === "hermaphrodite")
					returnText += "<br>As they cover your face, you feel their balls twitch, shooting cum over your back. As they wind down, their cum drips into your hair, arousing you further."
				break;
			case "forcedRim":
				if (CheckGender(Enemy) != "doll")
					returnText = "Despite having more sensitive erogenous zones, they want to maximize your humiliation by forcing you to eat their ass out. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				else if (CheckGender(Enemy) === "doll" && player.Dicks.length <= 0)
					returnText = "With no other way to get pleasure, they force you to the ground and sit on your face, giving you no other option than to eat their ass out. "
				else
					returnText = "Rather that let you use your dick on their only hole, they decide to force you to use your tongue. They force you to the ground and sit on your face, giving you no other option than to eat their ass out for their pleasure. "
				returnText += "<br>You find your body responding well to the harsh treatment, reaching orgasm as you feel them shudder above you."
				break;
			case "getBJ":
				returnText = "Motioning you to lie down on your back, they expertly massage your cock and balls, quickly bringing you erect. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "They even tease your pussy a bit, adding to your growing pleasure. "
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming before they start blowing you, coating your stomach with your seed. Before you can go soft, though, they wrap their lips around your dick, giving you immense pleasure. Seconds later, you cum again, this time down their throat."
				break;
			case "getCunn":
				returnText = "Motioning you to lie down on your back, they expertly finger your pussy, quickly making you wet. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "They even tease your balls a bit, adding to your growing pleasure. "
				returnText += "<br>Eagerly responding to their actions, you find yourself cumming as their tongue approachess your cunt. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "<br>Your dick, refusing to be left out, coats your stomach with your seed. "
				returnText += "Before you can recover, though, they start eating you out, quickly driving you to several more orgasms."
				break;
			case "getRim":
				returnText = "<br>Motioning you onto your stomach, your enemy massages your butt cheeks, bringing you a surprising amount of pleasure. As they stick a finger up your ass, you orgasm"
				if (CheckGender(Player) === "hermaphrodite")
					returnText += ", spurting cum from your dick onto your belly and soaking your thighs."
				else if (player.Dicks.length > 0)
					returnText += ", spurting cum from your dick onto your belly."
				else if (player.Pussies.length > 0)
					returnText += ", soaking your thighs."
				else
					returnText += ", shuddering in pleasure."
				break;
			case "getFucked":
				returnText = "Motioning you onto your back, your enemy fondles your clit and lower lips, giving you a mini-orgasm. Appreciating your lack of resistance, they tenderly move above you. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "Shifting your balls to the side, they gently ease in to you."
				else
					returnText += "Spreading your lips with one hand, they gently ease in to you."
				returnText += "<br>Tenderly fucking your pussy, you're brought into a world of pleasure. Pinching your clit, you cum hard, soaking their crotch with your juices. Your quivering lips stimulate their dick, making them cum into you."
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "You're alredy pregnant, and feel a twinge of regret that you won't carry their child."
				if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
						else
							returnText += "You weren't impregnated, and you find yourself disappointed..."
				}*/
				break;
			case "getFuckedDoggy":
				returnText = "Your enemy eases your beaten body to its hands and knees, making sure you can keep your balance. Your body instincively responds to the position, and you feel your pussy start to drip. Your opponent teases your cunt, causing your body to shudder, before getting into position and thrusting deeply into you. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping into yours, sending little bursts of unintended pleasure through your dick. "
				if (player.Boobies[0].size > 3)
					returnText += "Bending over your back, they reach down and fondle your nipples, not stopping their thrusts. You let out a low moan, your pleasure mounting ever higher. "
				returnText += "<br>It doesn't take long for you to cum, your pussy's walls quivering around their dick. "
				if (CheckGender(Player) === "hermaphrodite") er
				returnText += "Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				returnText += "Your enemy cums soon after, quickly filling your pussy and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length > 0)
					returnText += "You're alredy pregnant, and feel a twinge of regret that you won't carry their child."
				else if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
						else
							returnText += "You weren't impregnated, and you find yourself disappointed..."
				}*/
				break;
			case "getFuckedAnal":
				returnText = "Your enemy eases your beaten body to its hands and knees, making sure you can keep your balance. "
				if (player.Pussies.length > 0)
					returnText += "Your body instincively responds to the position, and you feel your pussy start to drip. Your opponent teases your cunt, causing your body to shudder. Even with such a clear signal, though, your enemy positions themselves a little higher. "
				else
					"They massage your cheeks, causing your body to shudder, as your enemy positions their dick at your ass. "
				returnText += "Easing forwards, your enemy spreads your ass cheeks, and slowly works their dick into your bowels. Letting out a moan, you feel your ass getting stretched. "
				if (player.Boobies[0].size > 3)
					returnText += "Bending over your back, they reach down and fondle your nipples, not stopping their thrusts. You let out a low moan, your pleasure mounting ever higher. "
				if (CheckGender(Player) === "hermaphrodite")
					returnText += "With every thrust, you feel their balls tapping your balls and clit, sending little bursts of delicious pleasure through your organs.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. Your balls refuse to be left out, and unload themselves onto your stomach and the ground. "
				else if (player.Pussies.length > 0)
					returnText += "With every thrust, you feel their balls tapping your clit, sending little bursts of delicious pleasure through your pussy.<br>It doesn't take long for you to orgasm, your pussy's walls quivering, milking a nonexistent dick. "
				else if (player.Balls.length > 0)
					returnText += "With every thrust, you feel their balls tapping yours, sending little bursts of delicious pleasure through your dick.<br>It doesn't take long for you to orgasm, your balls unloading themselves onto your stomach and the ground. "
				else
					returnText += "<br>It doesn't take long for you to orgasm, a pleasurable heat spreading from your ass. "
				returnText += "Your enemy cums soon after, quickly filling your ass and collapses onto your back, spent. "
				/*if(player.Pregnant.Babies.length <= 0) {
					Impregnate(player, enemies[EnemyIndex], "B", "");
					if(player.Pussies.length > 0) {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... They couldn't have gotten you pregnant, could they?"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
					} else {
						if(player.Pregnant.Babies.length > 0 && Flags.Pregnations == 1)
							returnText += "You feel an odd filling sensation in your belly... But you couldn't be pregnant - you don't have a pussy!"
						else if (player.Pregnant.Babies.length > 0)
							returnText += "Well, looks like you've been knocked up again. You're surprisingly fine with this..."
					}
				}*/
				break;
			case "getRidden":
				returnText = "Telling you to sit down, your enemy kisses you deeply as they fondle your balls, quickly giving you an erection. Hugging your shoulders, they ease their pussy onto your dick, causing both of you to moan out loud. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their pussy. They're not satisfied yet, though, and give you a few seconds to recover, before continuing to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You hope they're alright with you being the father..."
				}*/
				break;
			case "getRiddenAnal":
				returnText = "Telling you to sit down, your enemy kisses you deeply as they fondle your balls, quickly giving you an erection. Hugging your shoulders, they ease their asshole onto your dick, causing both of you to moan out loud. "
				if (player.Boobies[0].size > 3 && enemies[EnemyIndex].Boobies[0].size > 3)
					returnText += "As they bounce up and down on your rod, they hug you close, mashing your nipples and theirs together, sending shivers of pleasure through your chest. "
				returnText = "<br>It doesn't take long before you cum, emptying your balls into their ass. They're not satisfied yet, though, and give you a few seconds to recover, before continuing to ride you for several orgasms. "
				/*if(!enemies[EnemyIndex].hasOwnProperty(Pregnant)) {
					Impregnate(enemies[EnemyIndex], player, "A", "");
					if(enemies[EnemyIndex].hasOwnProperty(Pregnant) && Flags.Impregnations == 1)
							returnText += "You see them rubbing their belly, looking content... They couldn't have gotten pregnant, could they?"
					else if (enemies[EnemyIndex].hasOwnProperty(Pregnant))
						returnText += "Well, looks like you've knocked someone up again. You hope they're alright with you being the father..."
				}*/
				break;
			case "getVoreStomach":
				returnText = "Grabbing your arms, they try to shove you down their throat, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBalls":
				returnText = "Grabbing your arms, they try to shove you down their dick, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreBoobs":
				returnText = "Grabbing your arms, they try to shove you into their tits, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreVagina":
				returnText = "Grabbing your arms, they try to shove you into their vagina, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			case "getVoreAnal":
				returnText = "Grabbing your arms, they try to shove you into their ass, then realize they aren't stretching enough. Maybe in a later update..."
				break;
			default:
				returnText = "This shouldn't be here - send snowspider a message, saying \"Loss: " + struggle + ", " + selectScene + "\""
				break;
		}
	}
	return returnText;
}

function SnowScenes() {
	var eLoss = enemies[EnemyIndex];
	var sceneList = {
		forcedBJ: false,
		forcedCunn: false,
		forcedRim: true,
		getBJ: false,
		getCunn: false,
		getRim: true,
		getFucked: false,
		getFuckedAnal: false,
		getRidden: false,
		getRiddenAnal: false,
		getVoreStomach: false,
		getVoreBalls: false,
		getVoreBoobs: false,
		getVoreVagina: false,
		getVoreAnal: false
	}; //Which scenes are possible? #Removed brackets they broke code when using VisualStudio beutify -Ugre
	// Need settings options if Player prey is enabled.
	if (Settings.Vore && false) {
		sceneList.getVoreAnal = true;
		sceneList.getVoreStomach = true;
		if (enemies[EnemyIndex].Dicks.length > 0 && enemies[EnemyIndex].Balls.length > 0)
			sceneList.getVoreBalls = true;
		if (enemies[EnemyIndex].Boobies.length > 0)
			sceneList.getVoreBoobs = true;
		if (enemies[EnemyIndex].Pussies.length > 0)
			sceneList.getVoreVagina = true;
	}
	if (enemies[EnemyIndex].Dicks.length > 0) {
		sceneList.forcedBJ = true;
		sceneList.getFuckedAnal = true;
	}
	if (enemies[EnemyIndex].Pussies.length > 0) {
		sceneList.forcedCunn = true;
	}
	if (player.Dicks.length > 0) {
		sceneList.getRiddenAnal = true;
		sceneList.getBJ = true;
		if (enemies[EnemyIndex].Pussies.length > 0)
			sceneList.getRidden = true;
	}
	if (player.Pussies.length > 0) {
		sceneList.getCunn = true;
		if (enemies[EnemyIndex].Dicks.length > 0)
			sceneList.getFucked = true;
	}

	var scenePoss = [];
//	console.log("Length " + Object.keys(sceneList).length);
	for (var i = 0; i < Object.keys(sceneList).length; i++) {
		if (sceneList[Object.keys(sceneList)[i]]) {
			scenePoss[scenePoss.length] = Object.keys(sceneList)[i];
			console.log("Object " + i + " " + Object.keys(sceneList)[i]);
			console.log(scenePoss[scenePoss.length - 1]);
		}
	}
	var selectScene = scenePoss[Math.floor(Math.random() * scenePoss.length)];
//	console.log("Selected: " + selectScene);
	return selectScene;
}


function RaceConq(enemy) {
	var race = enemy.Race.toLowerCase();
	var LoseText = document.getElementById("LoseSexText");
	switch (race) {
		case "human":
			var steal = Math.min(RandomInt(25, 200), player.Gold)
			player.Gold -= steal; // Robbed, why not. #Nerfed
			LoseText.innerHTML += "They steal " + steal + " gold from you.";
			break;
		case "orc":
			var Steal = Math.min(30, player.Masc);
			player.Femi += 30;
			player.Masc -= Steal;
			enemy.Masc += Steal;
			// player.Mind.Sub++
			if (enemy.Balls.length > 0) {
				var i = 0;
				while (i < 3 && !player.Pregnant.Status) { // try more than once
					Impregnate(player, enemy, "B");
				}
			}
			// LoseText.innerHTML = "Following their natrual instincts the orc try to breed you, " +
			// "while also transforminng you to better suit their preference."
			break;
		case "fairy":
			if (player.Height > 30) {
				player.Height -= Math.min(RandomInt(7, player.Height / 10), 50);
			}
			PotionDrunk("Fairy", RandomInt(10, 20));
			LoseText.innerHTML += "Attempting to transform you into a fairy they shrunk you"
			break;
		case "elf":
			break;
		case "dark elf":
			break;
		case "amazon":
			break;
		case "goblin":
			if (player.Balls.length > 0) {
				Impregnate(player, enemy, "B"); // Breeding stereotype
				// = "Stradling you they ride you, drain your balls trying to impregnate themself."
				if (enemy.Balls.length > 0) {
					Impregnate(enemy, player);
					// = " Once satisfied they move on to fucking with "
				}
			} else if (enemy.Balls.length > 0) {
				Impregnate(enemy, player);
				// = "They "
			}

			break;
		case "incubus":
			if (player.Masc > 0) {
				var take = player.Masc * Math.min(0.75, Math.random); // Up to 75%
				player.Masc -= take;
				enemy.Masc += take;
			}
			Impregnate(player, enemy, "B");
			// "drainging your masculinity "
			break;
		case "succubus":
			if (player.Femi > 0) {
				var take = player.Femi * Math.min(0.75, Math.random); // Up to 75%
				player.Femi -= take;
				enemy.Femi += take;
			}
			Impregnate(enemy, player);
			// "draining your feminity"
			break;
		case "dragon":
			if (player.RaceEssence.some(e => e.Race == "Dragon")) { // Dragon doesn't like weaklings being dragons. 
				var b = player.RaceEssence.findIndex(e => e.Race == "Dragon");
				player.RaceEssence[b].amount -= Math.min(RandomInt(1, 25), player.RaceEssence[b].amount)
			}
			break;
		case "Demon":
			// player.Mind.Corruption++;
		default:
			break;
	}
}

function NameConq(enemy) { // Name/title/type e.g. witch, maiden
	var Name = enemy.Name.toLowerCase();
	var LoseText = document.getElementById("LoseSexStats");
	switch (Name) {
		case "wizard":
			// Curse? Maybe add a organ mod on auto and shrink on manual; might make organmod effect manual
			if (Settings.EssenceAuto) {
				var Organs = ["Dicks", "Balls", "Boobies", "Pussies"];
				var a = RandomString(Organs);
				if (player[a].length > 0) {
					for (var e of player[a]) {
						if (e.Size > 0) {
							e.Size--;
						}
					}
					LoseText.innerHTML = "Something doesn't feel right..."; // 
				} else {
					LoseText.innerHTML = ""; // He failed
				}
			} else {
				var Organs = ["Dick", "Balls", "Boobies", "Pussy"];
				var a = RandomString(Organs);
				player.OrganMod[a].Size--; // Need to make a way to get rid of the penalty.
				LoseText.innerHTML = "Something doesn't feel right..."; // 
			}
		case "witch":
			PotionDrunk("Amphibian", RandomInt(1, 5));
			RaceConq(ee);
			break;
		case "maiden":
			Lose(false); // "No sex"
			LoseText.innerHTML = "Your defeat proves you unworthy to father her children, " +
				"she walks away avoiding wasting more time on you."
			break;
		default:
			RaceConq(ee); // Some enemies don't trigger race conq like e.g. maiden.
			break;
	}
}
function ManualGrowthScale() {
    return (player.Height / 160)
} // I put this a function to make it easier to trial different formulas.


function EssenceCost(what) {
    return Math.min(2000, Math.round((30 * Math.pow(1.05, what.Size))));
};

function EssenceExtraCost(what) {
    return Math.round((30 * Math.pow(3, what.length)));
};

document.getElementById("EssenceAuto").addEventListener("click", function () {
    Settings.EssenceAuto = !Settings.EssenceAuto;
    if (Settings.EssenceAuto) {
        document.getElementById("EssenceAuto").value = "Essence Auto";
        document.getElementById("ManualGrowth").style.display = 'none';

    } else {
        document.getElementById("EssenceAuto").value = "Essence Manual";
        document.getElementById("ManualGrowth").style.display = 'block';
        Settings.BalanceParts = false;
    }
});

document.getElementById("GrowBalls").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    BallsButtons();
});
document.getElementById("GrowPussy").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    PussyButtons();
});
document.getElementById("GrowBreast").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    BreastButtons();
});
document.getElementById("GrowDick").addEventListener("click", function () {
    document.getElementById("EssenceStart").style.display = 'none';
    document.getElementById("ManualOrgans").style.display = 'block';
    DickButtons();
});

function BreastButtons() {
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var Extraboobs = InputButton("Extra breasts " + EssenceExtraCost(player.Boobies) + "F");
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
    for (var e of player.Boobies) {
        ManualOrgans.appendChild(BreastButton(e));
    }
}

function BreastButton(e) {
    var boob = document.createElement("button");
    boob.setAttribute("type", "button");
    boob.innerHTML = BoobSizeConvertor(e.Size) + " " + EssenceCost(e) + "Feminity";
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
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraPussy = InputButton("Extra pussy " + EssenceExtraCost(player.Pussies) + "F");
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
    for (var e of player.Pussies) {
        ManualOrgans.appendChild(PussyButton(e))
    };
}

function PussyButton(e) {
    var pussy = document.createElement("button");
    pussy.setAttribute("type", "button");
    pussy.innerHTML = CmToInch(e.Size) + " " + EssenceCost(e) + "Feminity";
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
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }

    var ExtraDick = InputButton("Extra dick " + EssenceExtraCost(player.Dicks) + "M");
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
    for (var e of player.Dicks) {
        ManualOrgans.appendChild(DickButton(e));
    }
}

function DickButton(e) {
    var Dick = document.createElement("button");
    Dick.setAttribute("type", "button");
    Dick.innerHTML = CmToInch(e.Size) + " " + EssenceCost(e) + "Masculinity";
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
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    var ExtraBall = InputButton("Extra Balls " + EssenceExtraCost(player.Balls) + "M");
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
    ManualOrgans.appendChild(ManualOrgansClose())
    var br = document.createElement("br");
    ManualOrgans.appendChild(br);
    for (var e of player.Balls) {
        ManualOrgans.appendChild(BallsButton(e));
    }
}

function BallsButton(e) {
    var Ball = document.createElement("button");
    Ball.setAttribute("type", "button");
    Ball.innerHTML = CmToInch(e.Size) + " " + EssenceCost(e) + "Masculinity";
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
    var Close = InputButton("Back");
    Close.addEventListener("click", function () {
        document.getElementById("EssenceStart").style.display = 'block';
        ManualOrgans.style.display = 'none';
        while (ManualOrgans.hasChildNodes()) {
            ManualOrgans.removeChild(ManualOrgans.firstChild);
        }
    });
    return Close;
}

document.getElementById("EssenceOptionsLeave").addEventListener("click", function () {
    var ManualOrgans = document.getElementById("ManualOrgans");
    while (ManualOrgans.hasChildNodes()) {
        ManualOrgans.removeChild(ManualOrgans.firstChild);
    }
    document.getElementById("EssenceStart").style.display = 'block';
    document.getElementById("ManualGrowth").style.display = 'none';
    DisplayNone();
    DisplayGame();
});
function CheckDoor() {
    function DoorHandler(NESW) {
        const startarea = document.getElementById("hem");
        enemies = [];
        switch (NESW) {
            case "N":
                sprite.y = startarea.height - 3 * grid;
                break;
            case "E":
                sprite.x = 2 * grid;
                break;
            case "S":
                sprite.y = 2 * grid;
                break;
            case "W":
                sprite.x = startarea.width - 3 * grid;
                break;
        }
    }

    function MakeDoor(x, y, width, height, NESW) {
        this.x = x,
            this.y = y,
            this.width = width,
            this.height = height,
            this.NESW = NESW
    };
    const startarea = document.getElementById("hem"),
        DoorE = new MakeDoor(startarea.width - 2 * grid, startarea.height / 2 - 3 * grid, grid, 5 * grid, "E"),
        DoorS = new MakeDoor(startarea.width / 2 - 3 * grid, startarea.height - 2 * grid, grid * 5, grid, "S"),
        DoorW = new MakeDoor(0, startarea.height / 2 - 3 * grid, grid, 5 * grid, "W"),
        DoorN = new MakeDoor(startarea.width / 2 - 3 * grid, 0, grid * 5, grid, "N"),
        Doors = [DoorE, DoorS, DoorN, DoorW];
    for (let i of Doors) {
        let Door = i.NESW;
        if (sprite.x + grid * sprite.Size >= i.x && sprite.x <= i.x + i.width &&
            sprite.y + grid * sprite.Size >= i.y && sprite.y <= i.y + i.height) {
            switch (player.Area) {
                case "First":
                    switch (player.Map) {
                        case "Start":
                            if (Door == "E") {
                                player.Map = "RoadToCity";
                                DoorHandler("E");
                            }
                            break;
                        case "RoadToCity":
                            if (Door == "S") {
                                player.Map = "RoadToCity2";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "Start";
                                DoorHandler("W");
                            } else if (Door == "N") {
                                player.Map = "Bandit";
                                DoorHandler("N");
                            }
                            break;
                        case "Bandit":
                            if (Door == "S") {
                                player.Map = "RoadToCity";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToCity2":
                            if (Door == "N") {
                                player.Map = "RoadToCity";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "City";
                                DoorHandler("E");
                            }
                            break;
                        case "City":
                            if (Door == "W") {
                                player.Map = "RoadToCity2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "RoadToHome";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Forest";
                                DoorHandler("S");
                            }
                            break;
                        case "RoadToHome":
                            if (Door == "W") {
                                player.Map = "City";
                                DoorHandler("W");
                            } else if (Door == "E" && House.Owned == true) {
                                battle = true;
                                sprite.x = startarea.width - 3 * grid;
                                document.getElementById("map").style.display = 'none';
                                document.getElementById("buttons").style.display = 'none';
                                document.getElementById("EmptyButtons").style.display = 'block';
                                document.getElementById("Home").style.display = 'block';
                                document.getElementById("HomeText").style.display = 'block';

                                document.getElementById("Dorm").style.display = House.Dorm > 0 ? "inline-block" : 'none';
                                document.getElementById("Portal").style.display = House.Portal.Owned ? 'inline-block' : 'none';
                                document.getElementById("Brothel").style.display = House.Brothel ? 'inline-block' : 'none';
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch";
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch":
                            if (Door == "S") {
                                player.Map = "RoadToHome";
                                DoorHandler("S");
                            } else if (Door == "N") {
                                player.Map = "RoadToWitch2"
                                DoorHandler("N");
                            }
                            break;
                        case "RoadToWitch2":
                            if (Door == "S") {
                                player.Map = "RoadToWitch";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Witch";
                                DoorHandler("E");
                            }
                            break;
                        case "Witch":
                            if (Door == "W") {
                                player.Map = "RoadToWitch2";
                                DoorHandler("W");
                            }
                            break;
                        case "Forest":
                            if (Door == "N") {
                                player.Map = "City";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Forest2";
                                DoorHandler("S");
                            }
                            break;
                        case "Forest2":
                            if (Door == "N") {
                                player.Map = "Forest";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws";
                                player.Area = "Second";
                                DoorHandler("S");
                            }
                            break;
                    }
                    break;
                case "Second":
                    switch (player.Map) {
                        case "PathToOutlaws":
                            if (Door == "N") {
                                player.Map = "Forest2";
                                player.Area = "First";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "Cave1";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("S");
                            }
                            break;
                        case "PathToOutlaws2":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Outlaws";
                                DoorHandler("S");
                            } else if (Door == "E") {
                                player.Map = "Farm";
                                DoorHandler("E");
                            }
                            break;
                        case "Farm":
                            if (Door == "W") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("W");
                            }
                            break;
                        case "Outlaws":
                            if (Door == "N") {
                                player.Map = "PathToOutlaws2";
                                DoorHandler("N");
                            }
                            break;
                        case "Cave1":
                            if (Door == "E") {
                                player.Map = "PathToOutlaws";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "Cave2";
                                DoorHandler("W");
                            }
                            break;
                        case "Cave2":
                            if (Door == "E") {
                                player.Map = "Cave1";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "Cave3";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave3":
                            if (Door == "N") {
                                player.Map = "Cave2";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "Cave4";
                                DoorHandler("S");
                            }
                            break;
                        case "Cave4":
                            if (Door == "N") {
                                player.Map = "Cave3";
                                DoorHandler("N");
                            }
                    }
                    break;
                case "Mountain":
                    switch (player.Map) {
                        case "MountainStart":
                            if (Door == "S") {
                                player.Map = "MountainClimb";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrinePath":
                            if (Door == "E") {
                                player.Map = "MountainStart";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                player.Map = "MountainShrine";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainShrine":
                            if (Door == "E") {
                                player.Map = "MountainShrinePath";
                                DoorHandler("E");
                            } else if (Door == "W") {
                                //player.Map = "";
                                //DoorHandler("W");
                            }
                            break;
                        case "MountainClimb":
                            if (Door == "N") {
                                player.Map = "MountainStart";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb2";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb2":
                            if (Door == "N") {
                                player.Map = "MountainClimb";
                                DoorHandler("N");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb3";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb3":
                            if (Door == "W") {
                                player.Map = "MountainClimb2";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb4";
                                DoorHandler("E");
                            }
                            break;
                        case "MountainClimb4":
                            if (Door == "N") {
                                player.Map = "MountainClimb5";
                                DoorHandler("N");
                            } else if (Door == "W") {
                                player.Map = "MountainClimb3";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainClimb5":
                            if (Door == "N") {
                                player.Map = "MountainClimb6";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb4";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb6":
                            if (Door == "N") {
                                player.Map = "MountainClimb7";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb5";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb7":
                            if (Door == "N") {
                                player.Map = "MountainClimb8";
                                DoorHandler("N");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb6";
                                DoorHandler("S");
                            } else if (Door == "W") {
                                player.Map = "MountainTribe";
                                DoorHandler("W");
                            }
                            break;
                        case "MountainTribe":
                            if (Door == "E") {
                                player.Map = "MountainClimb7";
                                DoorHandler("E");
                            } else if (Door == "N") {
                                player.Map = "MountainClimb9";
                                DoorHandler("N");
                            }
                            break
                        case "MountainClimb8":
                            if (Door == "W") {
                                player.Map = "MountainClimb9";
                                DoorHandler("W");
                            } else if (Door == "S") {
                                player.Map = "MountainClimb7";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainClimb9":
                            if (Door == "W") {
                                player.Map = "MountainPlateau";
                                DoorHandler("W");
                            } else if (Door == "E") {
                                player.Map = "MountainClimb8";
                                DoorHandler("E");
                            } else if (Door == "S") {
                                player.Map = "MountainTribe";
                                DoorHandler("S");
                            }
                            break;
                        case "MountainPlateau":
                            if (Door == "E") {
                                player.Map = "MountainClimb9";
                                DoorHandler("E");
                            }
                            break;
                    }
                    break
            }
        }
    }
};
function ImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {};
    let loaded = 0;

    if (Array.isArray(arr)) {
        for (var e of arr) {
            let img = new Image();
            img.onload = ImageLoaded;
            img.src = `Tiles/${e}.png`;
            images[e] = img;
        }
    } else {
        return
    }

    function ImageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}
var _images = {};
const Tilesloader = ImageLoad(["Bandit", "Cave1", "Cave2", "Cave3", "Cave4", "City", "Forest", "Forest2", "Outlaws",
    "PathToOutlaws", "PathToOutlaws2", "RoadToCity", "RoadToCity2", "RoadToHome", "RoadToWitch", "RoadToWitch2",
    "rtb2", "Start", "Witch", "MountainStart", "MountainShrinePath", "MountainShrine", "MountainClimb", "MountainClimb2",
    "MountainClimb3", "MountainClimb4", "MountainClimb5", "MountainClimb6", "MountainClimb7", "MountainClimb8",
    "MountainClimb9", "MountainPlateau"
], function (images) {
    _images = images;
    // Stop player from starting before tiles are loaded
    document.getElementById("LoadingImagesProgress").innerHTML = "Tiles loaded";
    document.getElementById("LoadingImagesProgress").classList.remove("visible");
    document.getElementById("LoadingImagesProgress").classList.add("hidden");

});

function PrintImage() { // New and improved
    const startarea = document.getElementById("hem"),
        ctx = startarea.getContext("2d");
    if (typeof _images[player.Map] !== "undefined") {
        ctx.clearRect(0, 0, startarea.width, startarea.height);
        ctx.drawImage(_images[player.Map], 0, 0, startarea.width, startarea.height);
        if (Settings.HighLightDoors) {
            PrintDoors();
        }
    } else {
        PaintBackground();
        PrintDoors();
    }

    function PaintBackground() {
        ctx.fillStyle = Settings.MapColor;
        ctx.fillRect(0, 0, startarea.width, startarea.height);

        // Wall around map
        ctx.fillStyle = Settings.BorderColor;
        ctx.fillRect(0, 0, grid / 2, startarea.height);
        ctx.fillRect(0, 0, startarea.width, grid / 2);
        ctx.fillRect(startarea.width - (grid / 2), 0, grid / 2, startarea.height);
        ctx.fillRect(0, startarea.height - (grid / 2), startarea.width, grid / 2);
    }
};

function CurrentMap() {
    PrintImage()
    let Npcs = []; // Moved here to avoid public handling of npcs, need to double check so I haven't
    // forgoten avoid any refernce to Npcs somewhere
    //First Town
    const startarea = document.getElementById("hem"),
        ctx = startarea.getContext("2d"),
        Townhall = new Npc("Townhall", "Townhall", grid * 6, grid / 2, grid * 8, grid * 5.5, "RGB(133,94,66)"),
        Shop = new Npc("Shop", "Shop", grid / 2, grid * 14, grid * 5.5, grid * 5.5, "RGB(133,94,66)"),
        Bar = new Npc("Bar", "Bar", 14 * grid, 14 * grid, grid * 5.5, grid * 5.5, "RGB(133,94,66)"),
        // RtW
        Gym = new Npc("Gym", "Gym", grid / 2, grid * 5, grid * 4.5, grid * 10, "RGB(133,94,66)"),
        WitchShop = new Npc("WitchShop", "Witch shop", grid * 15, grid * 6, grid * 4.5, grid * 10, "RGB(133,94,66)"),
        // Witch
        WitchHut = new Npc("WitchHut", "Witch hut", grid * 12, grid * 5, grid * 8.5, grid * 10, "RGB(133,94,66)"),
        ChimeraShrine = new Npc("ChimeraShrine", "Chimera shrine", grid * 3, grid * 17, grid * 2, grid * 2, "RGB(133,94,66)"),
        // Misc
        Tempsson = new Npc("Temp_Tempsson", "Temp Tempsson", grid * 10, grid * 18, grid, grid, "RGB(133,94,66)"),


        Barber = new Npc("Barber", "Hair salon", grid * 15, grid, grid * 5, grid * 4, "RGB(133,94,66)"),
        PortalShop = new Npc("PortalShop", "Portal shop", grid, grid * 15, grid * 4, grid * 4, "RGB(133,94,66)"),
        //Outlaw
        BlackMarket = new Npc("BlackMarket", "Black market", grid * 12, grid * 5, grid * 5, grid * 3, "RGB(133,94,66)"),
        // Dungeons
        FirstDungeon = new Npc("FirstDungeon", "Dungeon", grid * 8, grid * 18, grid * 4, grid * 2, "RGB(133,94,66)"),
        // Farm
        FarmOwner = new Npc("FarmOwner", "Teoviz", grid * 5, grid * 2, grid, grid, "RGB(133,94,66)"),
        FarmBarn = new Npc("FarmBarn", "Barn", grid * 13, grid, grid * 5, grid * 7, "RGB(133,94,66)"),
        // Shrine
        MountainShrine = new Npc("MountainShrine", "Shrine", grid * 5.5, grid * 2.5, grid * 2.4, grid * 2.4, "Pink"),
        ShrinePriestess = new Npc("ShrinePriestess", "Priestess", grid * 15, grid, grid, grid, "Pink"),
        // Dragons
        TribeChief = new Npc("TribeChief", "", grid * 2, grid * 8, grid, grid, "#841A31"),
        TribeChiefWife = new Npc("TribeChiefWife", "", grid * 2, grid * 10, grid, grid, "#841A31"),
        TribeShop = new Npc("TribeShop", "", grid * 12, grid * 15, grid * 4, grid * 5, "RGB(133,94,66)");

    function Portal(Xpos, Ypos) { // Portal is function so I can change X-position & Y-position
        return new Npc("LocalPortal", "Portal", grid * Xpos, grid * Ypos, grid * 4, grid * 4, "RGB(96, 47, 107)")
    }
    //Animal testing
    /*	var aSpawn = Math.random();
    	if (enemies.length < 1 && Settings.AnimalSpawn)
    	{
    		enemies = [animalSpawn(player.Height), animalSpawn(player.Height)];
    		return;
        }*/
    PrintMap();
    switch (player.Area) {
        case "First":
            switch (player.Map) {
                case "Start":
                    if (enemies.length < 1) {
                        enemies = [EncounterStart(), EncounterStart(), EncounterStart()];
                    }
                    break;
                case "RoadToCity":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath1(), EncounterPath1(), EncounterPath1()];
                    }
                    break;
                case "Bandit":
                    if (enemies.length < 1) {
                        enemies = [EncounterBandit(), EncounterBandit(), EncounterBandit(), EncounterBanditLord()];
                    }
                    break;
                case "RoadToCity2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPath2(), EncounterPath2(), EncounterPath2()];
                    }
                    break;
                case "City":
                    Npcs = [Townhall, Bar, Shop];
                    break;
                case "RoadToHome":
                    Npcs = [ChimeraShrine];
                    break;
                case "RoadToWitch":
                    Npcs = [Gym, WitchShop, Barber];
                    break;
                case "RoadToWitch2":
                    if (enemies.length < 1) {
                        enemies = [EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2(), EncounterPathToWitch2()];
                    }
                    break;
                case "Witch":
                    Npcs = [WitchHut];
                    break;
                case "Forest":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest(), EncounterForest(), EncounterForest(), RespawnBlocker()];
                    }
                    break
                case "Forest2":
                    if (enemies.length < 1) {
                        enemies = [EncounterForest2(), EncounterForest2(), EncounterForest2(), EncounterForest2(), RespawnBlocker()];
                    }
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    break;
                case "PathToOutlaws2":
                    break;
                case "Farm":
                    if (enemies.length < 1) {}
                    Npcs = [FarmOwner, FarmBarn]
                    break;
                case "Outlaws":
                    if (enemies.length < 1) {

                    }
                    Npcs = [BlackMarket, PortalShop, Portal(15, 15)]
                    break;
                case "Cave1":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1(), EncounterCave1()]
                    }
                    break;
                case "Cave2":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2(), EncounterCave2()]
                    }
                    break;
                case "Cave3":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave3(), EncounterCave3(), EncounterCave3()]
                    }
                    break;
                case "Cave4":
                    if (enemies.length < 1) {
                        enemies = [EncounterCave4(), EncounterCave4(), EncounterCave4(), EncounterCave4()]
                    }
                    Npcs = [FirstDungeon];
                    break;
            }
            break;
        case "Mountain":
            switch (player.Map) {
                case "MountainStart":
                    Npcs = [Portal(14, 2)];
                    break;
                case "MountainShrinePath":
                    if (enemies.length < 1) {
                        var a = RandomInt(2, 4);
                        enemies = [];
                        for (var e = 0; e < a; e++) {
                            enemies.push(EncounterMaiden());
                        }
                    }
                    break;
                case "MountainShrine":
                    Npcs = [MountainShrine];
                    break;
                case "MountainClimb":
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainClimb2":
                    if (enemies.length < 1) {
                        enemies = [EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy(), EncounterHarpy()]
                    }
                    break;
                case "MountainClimb3":
                    if (enemies.length < 1) {
                        enemies = [];
                    }
                    break;
                case "MountainClimb4":
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind()];
                    }
                    break;
                case "MountainClimb5":
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterDragonKind(), EncounterAnthroDragon()];
                    }
                    break;
                case "MountainClimb6":
                    if (enemies.length < 1) {
                        enemies = [EncounterDragonKind(), EncounterAnthroDragon(), EncounterAnthroDragon()]
                    }
                    break;
                case "MountainClimb7":
                    if (enemies.length < 1) {
                        enemies = [EncounterAnthroDragon(), EncounterAnthroDragon(), EncounterAnthroDragon()];
                    }
                    break;
                case "MountainTribe":
                    Npcs = [TribeChief, TribeChiefWife, TribeShop];
                    enemies = [];
                    break;
                case "MountainClimb8":
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainClimb9":
                    if (enemies.length < 1) {

                    }
                    break;
                case "MountainPlateau":
                    if (enemies.length < 1) {

                    }
                    Npcs = [Portal(2, 12)];
                    break;
            }
            break;
        default:
            switch (player.Map) {
                case "TempCity":
                    if (enemies.length < 1) {

                    }
                    Npcs = [Portal(18, 18)];
                    break;
            }
    }
    Npcs.length > 0 ? (PrintNpcs(), TouchNpc()) : false;

    function PrintNpcs() {
        const DontneedPrint = ["Townhall", "Shop", "Bar", "Gym", "WitchShop", "WitchHut", "BlackMarket"];
        // var needPrint = ["FarmBarn", "FarmOwner", "LocalPortal", "PortalShop", "Barber", "MountainShrine", "ChimeraShrine"];
        // Switched it so new npcs always print
        for (var e of Npcs) {
            if (DontneedPrint.indexOf(e.Name) === -1) {
                ctx.fillStyle = e.Color;
                ctx.fillRect(e.X, e.Y, e.Width, e.Height);
            }
            ctx.fillStyle = Settings.TextColor;
            ctx.font = "4vh Arial";
            ctx.textAlign = "center";
            ctx.fillText(e.RealName, e.X + e.Width / 2, e.Y + e.Height / 1.8);
        }
    };

    function TouchNpc() {
        for (var n of Npcs) {
            if (sprite.x + grid * sprite.Size >= n.X && sprite.x < n.X + n.Width &&
                sprite.y + grid * sprite.Size >= n.Y && sprite.y < n.Y + n.Height) {
                if (mousedowner) {
                    clearInterval(mFunction);
                    mousedowner = false;
                }
                battle = true;
                sprite.x = startarea.width / 2 - grid;
                sprite.y = startarea.height / 2;
                UpdateNpc(n.Name);
                document.getElementById("SellLimbs").style.display = Settings.EssenceAuto ? 'none' : 'inline-block';
            }
        }

        function UpdateNpc(name) {
            var isfunction = window[name + "Func"];
            if (typeof isfunction === "function") { // Start replacing html building/npcs with javascript functions
                document.getElementById("map").style.display = 'none';
                document.getElementById("buttons").style.display = 'none';
                document.getElementById("EmptyButtons").style.display = 'block';
                isfunction();
            } else {
                document.getElementById(name).style.display = 'block';
                document.getElementById("map").style.display = 'none';
                document.getElementById("buttons").style.display = 'none';
                document.getElementById("EmptyButtons").style.display = 'block';
                document.getElementById("Leave" + name).addEventListener("click", function () {
                    battle = false;
                    document.getElementById(name).style.display = 'none';
                    document.getElementById("map").style.display = 'block';
                    document.getElementById("buttons").style.display = 'block';
                    document.getElementById("EmptyButtons").style.display = 'none';
                    document.getElementById("status").style.display = 'block';
                    document.getElementById(name + "Text").innerHTML = null;
                    return;
                });
            }
        }
    }
}
function PrintDoors() {
    function PrintDoor(NESW) {
        var startarea = document.getElementById("hem");
        var ctx = startarea.getContext("2d");
        this.NESW = NESW;
        if (NESW == "E") {
            ctx.fillStyle = Settings.MapColor;
            ctx.fillRect(startarea.width - grid, startarea.height / 2 - 3 * grid, grid, grid * 6);
        } else if (NESW == "S") {
            ctx.fillStyle = Settings.MapColor;
            ctx.fillRect(startarea.width / 2 - 3 * grid, startarea.height - grid, grid * 6, grid);
        } else if (NESW == "W") {
            ctx.fillStyle = Settings.MapColor;
            ctx.fillRect(0, startarea.height / 2 - 3 * grid, grid, grid * 6);
        } else if (NESW == "N") {
            ctx.fillStyle = Settings.MapColor;
            ctx.fillRect(startarea.width / 2 - 3 * grid, 0, grid * 6, grid);
        }
    }
    switch (player.Area) {
        case "First":
            switch (player.Map) {
                case "Start":
                    PrintDoor("E");
                    break;
                case "RoadToCity":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
                case "Bandit":
                    PrintDoor("S");
                    break;
                case "RoadToCity2":
                    PrintDoor("N");
                    PrintDoor("E");
                    break;
                case "City":
                    PrintDoor("E");
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "RoadToHome":
                    PrintDoor("N");
                    PrintDoor("W");
                    break;
                case "RoadToWitch":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "RoadToWitch2":
                    PrintDoor("S");
                    PrintDoor("E");
                    break;
                case "Witch":
                    PrintDoor("W");
                    break;
                case "Forest":
                    PrintDoor("N");
                    PrintDoor("S");
                    break
                case "Forest2":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
            }
            break;
        case "Second":
            switch (player.Map) {
                case "PathToOutlaws":
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "PathToOutlaws2":
                    PrintDoor("N");
                    PrintDoor("S");
                    PrintDoor("E");
                    break;
                case "Farm":
                    PrintDoor("W");
                    break;
                case "Outlaws":
                    PrintDoor("N");
                    break;
                case "Cave1":
                    PrintDoor("W");
                    PrintDoor("E");
                    break;
                case "Cave2":
                    PrintDoor("E");
                    PrintDoor("S");
                    break;
                case "Cave3":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "Cave4":
                    PrintDoor("N");
                    break;
            }
            break;
        case "Mountain":
            switch (player.Map) {
                case "MountainStart":
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "MountainShrinePath":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainShrine":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainClimb":
                    PrintDoor("N");
                    PrintDoor("S");
                    break;
                case "MountainClimb2":
                    PrintDoor("E");
                    PrintDoor("N");
                    break;
                case "MountainClimb3":
                    PrintDoor("E");
                    PrintDoor("W");
                    break;
                case "MountainClimb4":
                    PrintDoor("W");
                    PrintDoor("N");
                    break;
                case "MountainClimb5":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainClimb6":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainClimb7":
                    PrintDoor("S");
                    PrintDoor("N");
                    break;
                case "MountainTribe":
                    PrintDoor("E");
                    PrintDoor("N");
                    break;
                case "MountainClimb8":
                    PrintDoor("S");
                    PrintDoor("W");
                    break;
                case "MountainClimb9":
                    PrintDoor("W");
                    PrintDoor("E");
                    break;
                case "MountainPlateau":
                    PrintDoor("N");
                    PrintDoor("E");
                    break;
            }
            break;
        default:
            switch (player.Map) {
                case "TempCity":
                    break;
            }
    }
}
document.getElementById("HideWorldMap").addEventListener("click", function () {
    if (document.getElementById("WorldMapPart").style.display == 'none') {
        document.getElementById("WorldMapPart").style.display = 'block';
        PrintMap();
    } else {
        document.getElementById("WorldMapPart").style.display = 'none';
    }
});

// Tool to print mini-map
function TilePainter(x, y) {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    var Width = WorldMap.width * 0.2;
    var Height = WorldMap.height * 0.2;

    World.fillStyle = Settings.MapColor;
    World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);

    World.fillStyle = Settings.BorderColor;
    World.strokeRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
}

// Tool to highlight current map on mini-map
function CurrentTile(x, y) {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    var Width = WorldMap.width * 0.2;
    var Height = WorldMap.height * 0.2;

    World.fillStyle = Settings.BorderColor;
    World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
}

function PrintMap() {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    World.fillStyle = "#404040";
    World.fillRect(0, 0, WorldMap.width, WorldMap.height);

    World.strokeStyle = Settings.BorderColor;
    switch (player.Area) {
        case "First":
            TilePainter(0, 1); //Start
            TilePainter(1, 1); //RTC1
            TilePainter(1, 0); //Bandit
            TilePainter(1, 2); //RTC2
            TilePainter(2, 2); //City
            TilePainter(3, 2); //RTH
            TilePainter(2, 3); //Forest
            TilePainter(2, 4); //Forest2
            TilePainter(3, 1); //RTW
            TilePainter(3, 0); //RTW2
            TilePainter(4, 0); //Witch

            World.font = "2em Arial";
            World.strokeText("B", WorldMap.width * 0.27, WorldMap.height * 0.17);
            World.strokeText("C", WorldMap.width * 0.46, WorldMap.height * 0.57);
            World.strokeText("W", WorldMap.width * 0.85, WorldMap.height * 0.17);
            if (House.Owned == true) {
                TilePainter(4, 2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                World.strokeText("H", WorldMap.width * 0.87, WorldMap.height * 0.57);
            }

            World.font = "1em Arial";
            World.strokeText("⇩", WorldMap.width * 0.485, WorldMap.height)


            switch (player.Map) {
                case "Start":
                    CurrentTile(0, 1);
                    break;
                case "RoadToCity1":
                    CurrentTile(1, 1);
                    break;
                case "Bandit":
                    CurrentTile(1, 0);
                    break;
                case "RoadToCity2":
                    CurrentTile(1, 2);
                    break;
                case "City":
                    CurrentTile(2, 2);
                    break;
                case "RoadToHome":
                    CurrentTile(3, 2);
                    break;
                case "RoadToWitch":
                    CurrentTile(3, 1);
                    break;
                case "RoadToWitch2":
                    CurrentTile(3, 0);
                    break;
                case "Witch":
                    CurrentTile(4, 0);
                    break;
                case "Forest":
                    CurrentTile(2, 3);
                    break;
                case "Forest2":
                    CurrentTile(2, 4);
                    break;
            }
            break;
        case "Second":
            TilePainter(2, 0);
            TilePainter(1, 0);
            TilePainter(0, 0);
            TilePainter(0, 1);
            TilePainter(0, 2);
            TilePainter(2, 1);
            TilePainter(2, 2);
            TilePainter(3, 1);


            World.font = "2em Arial";
            World.strokeText("O", WorldMap.width * 0.46, WorldMap.height * 0.57);
            World.strokeText("F", WorldMap.width * 0.66, WorldMap.height * 0.37);

            World.font = "1em Arial";
            World.strokeText("⇧", WorldMap.width * 0.485, WorldMap.height * 0.07)

            switch (player.Map) {
                case "PathToOutlaws":
                    CurrentTile(2, 0);
                    break;
                case "PathToOutlaws2":
                    CurrentTile(2, 1);
                    break;
                case "Farm":
                    CurrentTile(3, 1);
                    break;
                case "Outlaws":
                    CurrentTile(2, 2);
                    break;
                case "Cave1":
                    CurrentTile(1, 0);
                    break;
                case "Cave2":
                    CurrentTile(0, 0);
                    break;
                case "Cave3":
                    CurrentTile(0, 1);
                    break;
                case "Cave4":
                    CurrentTile(0, 2);
                    break;
            }
            break;
        case "Mountain":
            TilePainter(1, 2);
            TilePainter(0, 2);

            TilePainter(2, 2);
            TilePainter(2, 3);
            TilePainter(2, 4);
            TilePainter(3, 4);
            TilePainter(4, 4);
            TilePainter(4, 3);
            TilePainter(4, 2);
            TilePainter(4, 1);
            TilePainter(4, 0);
            TilePainter(3, 0);
            TilePainter(2, 0);
            World.font = "1em Arial";
            World.strokeText("⇧", WorldMap.width * 0.485, WorldMap.height * 0.07)
            World.strokeText("⇦", 0, WorldMap.height * 0.525)

            switch (player.Map) {
                case "MountainStart":
                    CurrentTile(2, 2);
                    break;
                case "MountainShrinePath":
                    CurrentTile(1, 2);
                    break;
                case "MountainShrine":
                    CurrentTile(0, 2);
                    break;
                case "MountainClimb":
                    CurrentTile(2, 3);
                    break;
                case "MountainClimb2":
                    CurrentTile(2, 4);
                    break;
                case "MountainClimb3":
                    CurrentTile(3, 4);
                    break;
                case "MountainClimb4":
                    CurrentTile(4, 4);
                    break;
                case "MountainClimb5":
                    CurrentTile(4, 3);
                    break;
                case "MountainClimb6":
                    CurrentTile(4, 2);
                    break;
                case "MountainClimb7":
                    CurrentTile(4, 1);
                    break;
                case "MountainTribe":
                    CurrentTile(3, 1);
                    break;
                case "MountainClimb8":
                    CurrentTile(4, 0);
                    break;
                case "MountainClimb9":
                    CurrentTile(3, 0);
                    break;
                case "MountainPlateau":
                    CurrentTile(2, 0);
                    break;
            }
            break;
    }
};

// ⇦ ⇨ ⇩ ⇧ Unicode arrows
document.getElementById("EssenceOptions").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("EssenceOptionsMenu").style.display = 'block';
    document.getElementById("MaxMenu").style.display = 'none';
    if (Settings.EssenceAuto) {
        document.getElementById("EssenceAuto").value = "Essence Auto";
        document.getElementById("ManualGrowth").style.display = 'none';
    } else {
        document.getElementById("EssenceAuto").value = "Essence Manual";
        document.getElementById("ManualGrowth").style.display = 'block';
    }
    document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
    document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
    document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
    document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});

document.getElementById("BoobsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBoobs > 0) {
        Settings.MaxLimbs.MaxBoobs--;
    }
    document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
document.getElementById("BoobsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBoobs++;
    document.getElementById("BoobsLess").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "--";
    document.getElementById("BoobsMore").value = "Boobs " + Settings.MaxLimbs.MaxBoobs + "++";
});
document.getElementById("VaginasLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxVaginas > 0) {
        Settings.MaxLimbs.MaxVaginas--;
    }
    document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
document.getElementById("VaginasMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxVaginas++;
    document.getElementById("VaginasLess").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "--";
    document.getElementById("VaginasMore").value = "Pussies " + Settings.MaxLimbs.MaxVaginas + "++";
});
document.getElementById("DicksLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxDicks > 0) {
        Settings.MaxLimbs.MaxDicks--;
    }
    document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
document.getElementById("DicksMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxDicks++;
    document.getElementById("DicksLess").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "--";
    document.getElementById("DicksMore").value = "Dicks " + Settings.MaxLimbs.MaxDicks + "++";
});
document.getElementById("BallsLess").addEventListener("click", function () {
    if (Settings.MaxLimbs.MaxBalls > 0) {
        Settings.MaxLimbs.MaxBalls--;
    }
    document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});
document.getElementById("BallsMore").addEventListener("click", function () {
    Settings.MaxLimbs.MaxBalls++;
    document.getElementById("BallsLess").value = "Balls " + Settings.MaxLimbs.MaxBalls + "--";
    document.getElementById("BallsMore").value = "Balls " + Settings.MaxLimbs.MaxBalls + "++";
});


document.getElementById("NoExtra").addEventListener("click", function () {
    if (document.getElementById("MaxMenu").style.display == 'none') {
        document.getElementById("MaxMenu").style.display = 'block';
        document.getElementById("NoExtra").value = "Hide";
    } else {
        document.getElementById("MaxMenu").style.display = 'none';
        document.getElementById("NoExtra").value = "Max boobs/dicks etc";
    }
});
var MobileButtons = false;

document.getElementById("MobileButtons").addEventListener("click", function () {
    switch (MobileButtons) {
        case true:
            document.getElementById("buttons").style.width = 17 + "%";
            document.getElementById("buttons").style.maxWidth = 260 + "px";
            document.getElementById("FirstButtons").style.display = 'none';
            document.getElementById("SecondButtons").style.display = 'none';
            document.getElementById("MobileButtons").value = "Buttons";
            MobileButtons = false;
            break;
        default:
            document.getElementById("buttons").style.width = 70 + "vw";
            document.getElementById("buttons").style.maxWidth = 70 + "vw";
            document.getElementById("FirstButtons").style.display = 'block';
            document.getElementById("MobileButtons").value = "Buttons";
            MobileButtons = true;
            break;
    }
});

window.onload = function () {
    if (window.innerHeight < 500) {
        document.getElementById("FirstButtons").style.display = 'none';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'inline-block';
        document.body.style.fontSize = Settings.FontSize + "em";
        HemScale();
    } else if (window.innerHeight < 800) {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'none';
        document.body.style.fontSize = Settings.FontSize + "em";
    } else {
        document.getElementById("SecondButtons").style.display = 'block';
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("MoreButtons").style.display = 'none';
        document.getElementById("LessButtons").style.display = 'none';
        document.getElementById("MobileButtons").style.display = 'none';
    }
};
function TribeQuests() {
    var x = document.getElementById("TribeQuestsMenu");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }

    var TribeDragon = document.createElement("INPUT");
    TribeDragon.setAttribute("type", "button");
    TribeDragon.setAttribute("value", "Dragon");
    TribeDragon.setAttribute("title", "Prove you worth.");
    TribeDragon.addEventListener("click", function () {
        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TribeQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            TribeQuests();
        });
        document.getElementById("ShrineQuestsMenu").appendChild(Accept);
        document.getElementById("ShrineQuestsMenu").appendChild(Decline);
    });

    var TribeDragonReward = document.createElement("INPUT");
    TribeDragonReward.setAttribute("type", "button");
    TribeDragonReward.setAttribute("value", "reward");
    TribeDragonReward.setAttribute("title", "");
    TribeDragonReward.addEventListener("click", function () {
        var index = player.Quests.findIndex(e => e.Name == "");
        player.Quests.splice(index, 1);
        TribeQuests();
    });
};

function TribeShopFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Tribe shop");
    h1.appendChild(h1text);
    div.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var ShopMenu = document.createElement("div");
    var row1 = document.createElement("div");
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    row1.appendChild(input1);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    row1.appendChild(input2);

    ShopMenu.appendChild(row1);
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    div.appendChild(Leave);
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}

function TribeChiefFunc() {
    var Npc = document.getElementById("Npc")
    Npc.style.display = 'none';
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.firstChild);
    }

    var div = document.createElement("div");
    // Title / Name
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Tribe chief");
    h1.appendChild(h1text);
    div.appendChild(h1);
    // Textbox
    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "");
    input2.addEventListener("click", function () {

    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Npc.style.display = 'none';
        while (Npc.hasChildNodes()) {
            Npc.removeChild(Npc.firstChild);
        }
        return;
    });
    div.appendChild(Leave);

    Npc.appendChild(div);
    document.getElementById("Npc").style.display = 'block';
}

function TribeChiefWifeFunc() {
    var Npc = document.getElementById("Npc")
    Npc.style.display = 'none';
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.firstChild);
    }

    var div = document.createElement("div");
    // Title / Name
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Tribe chief's Wife");
    h1.appendChild(h1text);
    div.appendChild(h1);
    // Textbox
    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    // Buttons for interaction, quests, etc..
    var input1 = document.createElement("input");
    input1.setAttribute("type", "button");
    input1.setAttribute("value", "");
    input1.addEventListener("click", function () {

    });
    input1.addEventListener("mouseover", function () {

    });
    div.appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "button");
    input2.setAttribute("value", "");
    input2.addEventListener("click", function () {
        TestDialog();
    });
    input2.addEventListener("mouseover", function () {

    });
    div.appendChild(input2);

    // Leave button, kills all children so they don't take up space
    var Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Npc.style.display = 'none';
        while (Npc.hasChildNodes()) {
            Npc.removeChild(Npc.firstChild);
        }
        return;
    });
    div.appendChild(Leave);

    Npc.appendChild(div);
    document.getElementById("Npc").style.display = 'block';

}

function TestDialog() {
    var Npc = document.getElementById("Npc");
    while (Npc.hasChildNodes()) {
        Npc.removeChild(Npc.lastChild)
    };

    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode("Testsson");
    h1.appendChild(h1Text);
    Npc.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("TextBox");
    Npc.appendChild(p);

    var Inputs = document.createElement("div");

    var Option1 = InputButton("Option 1");
    Option1.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option11 = InputButton("Option 1-1");
        Option11.addEventListener("click", function () {

        });
        Inputs.appendChild(Option11);

        var Option12 = InputButton("Option 1-2");
        Option12.addEventListener("click", function () {

        });
        Inputs.appendChild(Option12);
    });
    Inputs.appendChild(Option1);

    var Option2 = InputButton("Option 2a");
    Option2.addEventListener("click", function () {
        while (Inputs.hasChildNodes()) {
            Inputs.removeChild(Inputs.firstChild)
        }

        var Option21 = InputButton("Option 2-1");
        Option21.addEventListener("click", function () {

        });
        Inputs.appendChild(Option21);

        var Option22 = InputButton("Option 2-2");
        Option22.addEventListener("click", function () {

        });
        Inputs.appendChild(Option22);
    });
    Inputs.appendChild(Option2);

    Npc.appendChild(Inputs);
}
// Movement buttons
var mousedowner = false,
    mFunction,
    mouseX, mouseY;

/**
 var Movement = {
    XSpeed: 0,
    YSpeed: 0,
    Drag: 1
}
function MovementEngine(x, y) {
    var M = Movement;
    M.XSpeed = Math.min(10, Math.max(-10, M.XSpeed));
    M.YSpeed = Math.min(10, Math.max(-10, M.YSpeed));
    if ((x > 0 && M.XSpeed < 0) || (x < 0 && M.XSpeed > 0)) {
        M.XSpeed = 0;
    } else if ((y > 0 && M.YSpeed < 0) || (y < 0 && M.YSpeed > 0)) {
        M.YSpeed = 0;
    }
    Movement.XSpeed += x > 0 ? 2 : x < 0 ? -2 : 0;
    Movement.YSpeed += y > 0 ? 2 : y < 0 ? -2 : 0;
    sprite.x += Movement.XSpeed
    sprite.y += Movement.YSpeed
}
**/

document.addEventListener('keydown', function (e) {
    const startarea = document.getElementById("hem");
    if (battle) {
        return;
    }
    if ((e.which === 37 || e.which === 65) && sprite.x > 0) {
        sprite.x -= grid;
    } else if ((e.which === 39 || e.which === 68) && sprite.x + grid * sprite.Size < startarea.width) {
        sprite.x += grid;
    }
    if ((e.which === 38 || e.which === 87) && sprite.y > 0) {
        sprite.y -= grid; // * sprite.Size;
    } else if ((e.which === 40 || e.which === 83) && sprite.y + grid * sprite.Size < startarea.height) {
        sprite.y += grid; // * sprite.Size;
    }
    Touching();
    CheckDoor();
});

function mousedownfunc() {
    const startarea = document.getElementById("hem"),
        MapRect = startarea.getBoundingClientRect();
    if (mouseX - MapRect.left > sprite.x + 1.5 * grid && sprite.x + grid * sprite.Size < startarea.width) {
        sprite.x += grid * sprite.Size;
    } else if (mouseX - MapRect.left + grid / 2 < sprite.x && sprite.x > 0) {
        sprite.x -= grid * sprite.Size;
    }
    if (mouseY - MapRect.top > sprite.y + 1.5 * grid && sprite.y < startarea.height) {
        sprite.y += grid * sprite.Size;
    } else if (mouseY - MapRect.top + grid / 2 < sprite.y && sprite.y > 0) {
        sprite.y -= grid * sprite.Size;
    }
    Touching();
    CheckDoor();
}

document.getElementById("hem").addEventListener('mousedown', function (e) {
    if (!mousedowner) {
        mousedowner = true;
        mouseX = e.pageX;
        mouseY = e.pageY;
        mFunction = setInterval(mousedownfunc, 100);
    }
});

document.getElementById("hem").addEventListener('touchstart', function (e) {
    if (!mousedowner) {
        mousedowner = true;
        mouseX = e.touches[e.touches.length - 1].clientX;
        mouseY = e.touches[e.touches.length - 1].clientY;
        mFunction = setInterval(mousedownfunc, 100);
    }
});

document.addEventListener('mouseup', function () {
    if (mousedowner) {
        clearInterval(mFunction);
        mousedowner = false;
    }
});

document.addEventListener('touchend', function () {
    if (mousedowner) {
        clearInterval(mFunction);
        mousedowner = false;
    }
});

document.getElementById("hem").addEventListener('mousemove', function (e) {
    if (mousedowner) {
        if (mouseX != e.pageX || mouseY != e.pageY) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }
    }
});

document.getElementById("hem").addEventListener('touchmove', function (e) {
    if (mousedowner) {
        if (mouseX != e.touches[e.touches.length - 1].clientX || e.touches[e.touches.length - 1].clientY) {
            mouseX = e.touches[e.touches.length - 1].clientX;
            mouseY = e.touches[e.touches.length - 1].clientY;
        }
    }
});
function EncounterCave1() {
    var RacesCave = ["Goblin", "Imp"];
    var OP = new enemy("Lesser", RandomString(RacesCave), RandomInt(7, 10), RandomInt(7, 10), RandomInt(7, 10), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(6, 15), 120, 150, RandomInt(25, 35), RandomInt(15, 30),
        'red', grid, RandomInt(120, 140));
    EssenceGiver(OP, 250);
    FatMuscle(OP, 8, 40);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave2() {
    var RacesCave2 = ["Goblin", "Demon"];
    var OP = new enemy("Cave", RandomString(RacesCave2), RandomInt(12, 18), RandomInt(12, 18), RandomInt(12, 18), RandomInt(8, 12),
        RandomInt(5, 8), RandomInt(16, 25), 190, 210, RandomInt(40, 60), RandomInt(35, 60),
        'red', grid, RandomInt(150, 180));
    EssenceGiver(OP, 500);
    FatMuscle(OP, 8, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave3() {
    var RacesCave3 = ["Dhampir", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(25, 40), RandomInt(25, 40), RandomInt(22, 38), RandomInt(18, 22),
        RandomInt(15, 18), RandomInt(50, 70), 370, 400, RandomInt(65, 85), RandomInt(55, 80),
        'red', grid, RandomInt(160, 190));
    EssenceGiver(OP, 750);
    FatMuscle(OP, 8, 70);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave4() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Lesser", RandomString(RacesCave4), RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 420, 550, RandomInt(85, 110), RandomInt(70, 120),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 2000);
    FatMuscle(OP, 10, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}
//var MountainHalfRaces = ["human", "elf"]
//var MountainRaces = ["dragon", "giant", "human", "harpy", ""]

// Mountain opponents
function DragonNameGiver(who) {
    var FemaleFirstNames = ["Adhonth","Rindyth","Hendro","Frarlei","Fukyss","Fover","Chaghess","Indarrass","Aeghentanth","Dodhisser","Nisses","Rephes","Eny","Qierleo","Qirass","Zevno","Persoan","Frairmossolth","Bayzassath","Pullontinth"];
    var MaleFirstNames = ["Kalzreot", "Pendryss", "Xierdiss", "Frayvrag", "Cyddrunth", "Zergyr", "Cennir", "Akosdiat", "Jygoda", "Qothasdyr", "Bryrgusdirth", "Frorvedeg", "Kytidum", "Jialdrum", "Pegis", "Ymrirth", "Dayddrog", "Byrvog", "Brenneg", "Kairranth"];
    var LastNames = [""];
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "dickgirl":
        case "doll":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}


function EncounterMaiden() {
    var MountainHalfRaces = ["human", "elf"]; //
    var OP = new enemy("Maiden", RandomString(MountainHalfRaces), RandomInt(1, 10), RandomInt(1, 10), RandomInt(20, 50), RandomInt(0, 5),
        RandomInt(5, 20), RandomInt(0, 5), 1500, 2000, RandomInt(50, 250), RandomInt(30, 100),
        "Pink", grid, RandomInt(150, 170));
    EssenceGiver(OP, 1500, "female");
    FatMuscle(OP, 15, 55);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
    /* Strong virgins, they are not virgin by choice it's their culture to not offer themself to anyone weaker
    which have made them very strong over generation but there is a lot of desire to be dominated.
    After beating them change their title to depraved or something.
    update: I think I prefer to say they are pure after thay have had say, feels odd to say they are 
    not pure by having sex when their religion is based on sex & breeding.
    */

}

function EncounterDragonKind() {
    var MountainHalfRaces = ["human", "elf"];//
    var OP = new enemy("Young", "Dragonkind", RandomInt(10, 50), RandomInt(10, 50), RandomInt(10, 30), RandomInt(30, 50),
        RandomInt(10, 50), RandomInt(10, 60), 5000, 5000, RandomInt(50, 500), RandomInt(50, 500),
        "Red", grid, RandomInt(160, 240), RandomString(MountainHalfRaces));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 12, 70);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterHarpy() {
    var OP = new enemy("Young", "Harpy", RandomInt(10, 30), RandomInt(30, 70), RandomInt(0, 20), RandomInt(10, 60),
        RandomInt(0, 10), RandomInt(20, 80), 6000, 4500, RandomInt(50, 500), RandomInt(50, 500),
        "Yellow", grid, RandomInt(70, 140));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 8, 45);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterAnthroDragon() {
    var OP = new enemy("Young", "Anthro dragon", RandomInt(30, 50), RandomInt(20, 50), RandomInt(25, 50), RandomInt(10, 30),
        RandomInt(20, 60), RandomInt(20, 70), 8000, 8000, RandomInt(100, 400), RandomInt(100, 300),
        "Red", grid, RandomInt(160, 220));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 12, 80);
    StandardEnemy(OP);
    DragonNameGiver(OP);
    return OP;
}

function EncounterAnthroDragon2() {
    var OP = new enemy("", "Anthro dragon", RandomInt(40, 60), RandomInt(30, 60), RandomInt(35, 60), RandomInt(15, 35),
        RandomInt(25, 65), RandomInt(25, 75), 8500, 8500, RandomInt(150, 470), RandomInt(140, 380),
        "Red", grid, RandomInt(170, 230));
    EssenceGiver(OP, 2300);
    FatMuscle(OP, 12, 80);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterShapeDragon() {
    var OP = new enemy("", "Dragon", RandomInt(60, 100), RandomInt(40, 80), RandomInt(40, 70), RandomInt(30, 50), RandomInt(20, 80),
        RandomInt(20, 70), 12000, 12000, RandomInt(200, 500), RandomInt(160, 450),
        "Red", grid * 1.1, RandomInt(300, 600));
    // Feral dragon when fighting Shapeshift to anthro when having sex.
    EssenceGiver(OP, 3500);
    FatMuscle(OP, 10, 220);
    StandardEnemy(OP);
    NameGiver(OP);
}
function enemy(EnemyName, EnemyRace, Strength, Endurance, Willpower, Charm,
    Intelligence, SexSkill, EnemyHealth, EnemyWillHealth, ExpDrop, GoldDrop,
    Color, Size, Height, EnemySecondRace = EnemyRace, EnemyFullHealth = EnemyHealth,
    EnemyFullWillHealth = EnemyWillHealth) {
    this.Name = EnemyName;
    this.Race = EnemyRace;
    this.Str = Strength;
    this.End = Endurance;
    this.Will = Willpower;
    this.Charm = Charm;
    this.Int = Intelligence;
    this.SexSkill = SexSkill;
    this.Health = EnemyHealth;
    this.WillHealth = EnemyWillHealth;
    this.Exp = ExpDrop;
    this.Gold = GoldDrop;
    this.Color = Color;
    this.Size = Size;
    this.Height = Height;
    this.SecondRace = EnemySecondRace;
    this.FullHealth = EnemyFullHealth;
    this.FullWillHealth = EnemyFullWillHealth;
}

// Feral concept list
//var FeralEnemy = ["Squirrel", "Rabbit", "Cat", "Wolf", "Boar", "Deer", "Horse", "Lion", "Bear", "Rhino", "Elephant", "Dragon"];
function NameGiver(who) {
    const FemaleFirstNames = ["Jaiden", "Judy", "Nia", "Kelis", "Chelsea", "Amani", "Veronica", "Kyra", "Lauryn", "Alicja", "Tate", "Colleen", "Melody", "Pippa", "Keziah", "Melissa", "Lana", "Marie", "Molly", "Sandra", "Dannielle", "Yusra", "Laiba", "Gabrielle", "Syeda", "Amirah",
            "Lindsay", "Karly", "Itzel", "Clarissa", "Ansley", "Leanna", "Briley", "Cara", "Katelynn", "Susan", "Alexis", "Kaia", "Marlee", "Emmy", "Genevieve", "Melany", "Jaylynn", "Amari", "Sharon", "Miah", "Karen", "Kylie"
        ],
        MaleFirstNames = ["Jerome", "Napoleon", "Duncan", "Brant", "Chance", "Dewitt", "Brendan", "Asim", "Faith", "Macy", "Landon", "Sulaiman", "Iestyn", "Gordon", "Hector", "Haris", "Lee", "Simran", "Ronnie", "Rishi", "Bartosz", "Shelley", "Virgil", "Howard", "Rio", "Prince",
            "Glenn", "Daniel", "Felipe", "Willie", "Aden", "Brennen", "Cale", "Arnav", "Quentin", "River", "Clarence", "Jamal", "Luca", "Brent", "Tyrone", "Ryan", "Damien", "Carmelo", "Reese", "Braiden", "Beckham"
        ],
        LastNames = ["Paine", "Ward", "Bostock", "Devine", "Heath", "Bone", "Dupont", "Patterson", "Garza", "Stein", "Madden", "Francis", "Villanueva", "Perry", "Lyssa", "Beach", "Crouch", "Sharp", "Clifford", "Wade", "Vargas", "Hatfield", "Mata", "Lozano", "Everett",
            "Krueger", "Jimenez", "Fitzpatrick", "Nelson", "Scott", "Vaughn", "Lee", "Hodge", "Blackburn", "Wall", "Hernandez", "Valdez", "Summers", "Mercado", "Villarreal", "Mitchell", "Duran", "David", "Black", "Hopkins", "Hughes", "Rangel"
        ];
    //LastNames.RemoveDup();
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "dickgirl":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
        case "doll":
            who.FirstName = RandomInt(0, 10) < 5 ? RandomString(FemaleFirstNames) : RandomString(MaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}

function EvilNameGiver(who) {
    const EvilMaleFirstNames = ["Neclord", "Virion", "Dario", "Grumio", "Auron", "Jaymes", "Fark", "Cidolfus", "Bartholomew", "Arthur"],
        EvilFemaleFirstNames = ["Autumn", "Imeena", "Margorie", "Draven", "Lauden", "Ethel", "Cat", "Raven", "Senka", "Jinx"],
        EvilLastNames = ["Crimson", "Kane", "Duke", "Interfector", "Geulimja", "Ebonywood", "Grove", "Helion", "Church", "Geulimja", "Moonfall", "Winter", "Hart", "Calarook", "Crypt", "Wolf", "Rex", "Fadington", "Maganti", "Hook"];
    //EvilMaleFirstNames.RemoveDup();
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(EvilMaleFirstNames);
            break;
        case "hermaphrodite":
        case "dickgirl":
        case "female":
            who.FirstName = RandomString(EvilFemaleFirstNames);
            break;
        case "doll":
            who.FirstName = RandomInt(0, 10) < 5 ? RandomString(EvilFemaleFirstNames) : RandomString(EvilMaleFirstNames);
            break;
    }
    who.LastName = RandomString(EvilLastNames);
}

function GenderLock(who, amount, Genderlock) { // gives exact gender
    if (Genderlock == "male") {
        who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.Femi = 0;
    } else if (Genderlock == "cuntboy") {
        who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        who.OrganMod.Balls.Size = -Math.round(amount / 10);
        who.OrganMod.Boobies.Size = -Math.round(amount / 10);
        who.OrganMod.Dick.Size = -Math.round(amount / 10);
    } else if (Genderlock == "herm") {
        who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
        who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
    } else if (Genderlock == "dickgirl") {
        who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
        who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.OrganMod.Pussy.Size = -Math.round(amount / 10);
    } else if (Genderlock == "female") {
        who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.Masc = 0;
    }
}

function EssenceGiver(who, amount, GenderPref = 0) { // Gives random gender
    who.OrganMod = {
        Dick: {
            Size: 0
        },
        Boobies: {
            Size: 0
        },
        Balls: {
            Size: 0
        },
        Pussy: {
            Size: 0
        },
        Anal: {
            Size: 0
        }
    };
    var a = RandomInt(1, 13);
    a += GenderPref;
    /** Negative Genderpref gives more males and postive more girls. 
           e.g. -5 makes it's so only males to herm can spawn */
    if (a < 4) { // Boy
        who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.Femi = 0;
    } else if (a < 6) { // Dickgirl
        who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
        who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.OrganMod.Pussy.Size = -Math.round(amount / 10);
    } else if (a < 9) { // Herm
        who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
        who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
    } else if (a < 11) { // Cuntboy
        who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        who.OrganMod.Balls.Size = -Math.round(amount / 10);
        who.OrganMod.Boobies.Size = -Math.round(amount / 10);
        who.OrganMod.Dick.Size = -Math.round(amount / 10);
    } else { // Girl
        who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
        who.Masc = 0;
    }

}

function FatMuscle(who, minfatprocent, minweight) {
    var fatratio = RandomInt(minfatprocent, minfatprocent + 10);
    var muscleration = 100 - fatratio;
    who.Fat = minweight / 200 * fatratio;
    who.Muscle = minweight / 200 * muscleration;
    who.Weight = minweight + who.Fat + who.Muscle;
}

function EnemySetup(who) {
    who.Arousal = 0;
    who.Orgasm = 0;
}

function RandomPos(who) {
    who.XPos = RandomInt(2, 18) * grid;
    who.YPos = RandomInt(2, 18) * grid;
}

function StandardEnemy(who) {
    EnemySetup(who);
    RandomPos(who);
    RaceBonus(who);
    who.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    for (let a = 0; a < 10; a++) { // Loop for mor exact organs.
        EssenceCheck(who);
    }

    if (who.Pussies.length > 0) {
        if (RandomInt(1, 5) < 5) {
            who.Pussies[0].Virgin = false;
        }
    }
    if (who.Dicks.length > 0) {
        if (RandomInt(1, 5) < 5) {
            who.Dicks[0].Virgin = false;
        }
    }
}

// Encounter function
function EncounterStart() {
    const Races = ["Human", "Halfling"],
        Names = ["Commoner", "Farmer", "Thug"]
    let OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    EssenceGiver(OP, 50);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function RespawnBlocker() {
    var Races = ["Human", "Halfling"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    EssenceGiver(OP, 50);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    NameGiver(OP);
    OP.XPos = 99 * grid;
    OP.YPos = 99 * grid;
    return OP;
}

function animalSpawn(maxSize) { // Here's the mess of concept code
    var randomAnimalScore = RandomInt(0, Math.floor(Math.min(Math.pow(maxSize / 10, 0.5), FeralEnemy.length))); // Spawns animals based on height - wolves and lower at start of the game
    console.log("RandScore: " + randomAnimalScore);
    var essence = 10 * Math.max(1, Math.pow(randomAnimalScore, 2)); //The larger the creature, the greater its essence
    console.log("Essence: " + essence);
    var M = 0;
    var F = 0; //Only males or females, no intersex
    console.log("M: " + M + " F: " + F);
    if (Math.random() > 0.5)
        M = essence;
    else F = essence;
    var OP = new enemy("Feral", // Always named feral for description
        FeralEnemy[randomAnimalScore], // Race is their species 
        M, F, //Essence!
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Strength based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Endurance based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Unused willpower based on size
        0, 0, 0, 0, 0, // No charm, Intelligence, SexSkill, Arousal, or Orgasm
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore),
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore), // HP and Will based on size
        RandomInt(2, 18) * grid, RandomInt(2, 18) * grid, // Same positioning
        RandomInt(Math.floor(randomAnimalScore / 2), Math.floor(randomAnimalScore * 1.5)), RandomInt(randomAnimalScore + 1, (randomAnimalScore + 1) * 10), // XP and gold based on size 
        'Chocolate', // Why not
        grid * (Math.floor(randomAnimalScore / 4) + 0.4), // Thought this determined dimensions, was supposed to be steps based on size
        Math.max(0.5, Math.pow(3, randomAnimalScore / 2)), // Why does weight affect size appearance?
        Math.pow(5, randomAnimalScore), // Massive sizes!
        Math.pow(2, randomAnimalScore), // Muscle?
        Math.pow(2, randomAnimalScore)); // Fat?
    EssenceCheck(OP); // They still have genitals
    OP.LastName = ""; // No named animals
    return OP;
}

function EncounterPath1() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6),
        RandomInt(3, 6), RandomInt(7, 10), 80, 80, RandomInt(20, 25), RandomInt(8, 18),
        'Chocolate', grid, RandomInt(140, 180));
    EssenceGiver(OP, 60);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPath2() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7),
        RandomInt(4, 7), RandomInt(8, 12), 100, 100, RandomInt(23, 30), RandomInt(12, 25),
        'green', grid, RandomInt(140, 180));
    EssenceGiver(OP, 70);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBandit() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Bandit", RandomString(RacesBandit), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15),
        RandomInt(8, 15), RandomInt(10, 15), 170, 170, RandomInt(30, 45), RandomInt(30, 55),
        'tomato ', grid, RandomInt(140, 180));
    GenderLock(OP, 500, "male");
    FatMuscle(OP, 7, 70);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBanditLord() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Banditlord", RandomString(RacesBandit), RandomInt(20, 35), RandomInt(10, 15), RandomInt(20, 35), RandomInt(20, 35),
        RandomInt(20, 35), RandomInt(40, 60), 350, 300, RandomInt(55, 85), RandomInt(75, 150),
        'tomato', 1.5 * grid, RandomInt(160, 200));
    GenderLock(OP, 1000, "male");
    FatMuscle(OP, 7, 80);
    StandardEnemy(OP);
    var startarea = document.getElementById("hem");
    OP.XPos = startarea.width / 2 - grid;
    OP.YPos = grid;
    NameGiver(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest() {
    var RacesForest = ["Elf", "Amazon"];
    var OP = new enemy("Forest", RandomString(RacesForest), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    EssenceGiver(OP, 300, 5);
    FatMuscle(OP, 11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest2() {
    var RacesForest2 = ["Elf", "Fairy"];
    var OP = new enemy("Forest", RandomString(RacesForest2), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    EssenceGiver(OP, 400, 5);
    FatMuscle(OP, 11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPathToWitch2() {
    var RacesWitch = ["Human", "Elf", "Dark elf"];
    var OP = new enemy("Witch", RandomString(RacesWitch), RandomInt(1, 5), RandomInt(3, 7), RandomInt(7, 16), RandomInt(10, 40),
        RandomInt(30, 70), RandomInt(20, 80), 150, 300, RandomInt(30, 60), RandomInt(30, 70),
        'IndianRed', grid, RandomInt(140, 170));
    EssenceGiver(OP, 350);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    switch (CheckGender(OP)) {
        case "male":
        case "cuntboy":
        case "doll":
            OP.Name = "Wizard"
            break;
        default:
            OP.Name = "Witch"
            break;
    }
    return OP;
}
function EnemyImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {};
    var loaded = 0;
    if (Array.isArray(arr)) {
        for (var e of arr) {
            var img = new Image();
            img.onload = EmageLoaded;
            img.src = "Res/" + e + ".png";
            images[e] = img;
        }
    } else {
        return
    }

    function EmageLoaded() {
        loaded++;
        if (loaded >= arr.length) {
            callback(images);
        }
    }
}
var Enemy_images = {};
const Enemyloader = EnemyImageLoad(["orc"], function (images) {
    Enemy_images = images;
});

function PrintEnemies() {
    function Color() {
        var color;
        switch (CheckGender(enemies[e])) {
            case "cuntboy":
                color = "blue";
                break;
            case "female":
                color = "rgb(231, 84, 128)";
                break;
            case "dickgirl":
                color = "rgb(231, 84, 128)";
                break;
            case "male":
                color = "Blue";
                break;
            case "hermaphrodite":
                color = "Purple";
                break;
            case "doll":
                color = "Beige";
                break;
        }
        return color
    }
    var startarea = document.getElementById("hem");
    var ctx = startarea.getContext("2d");
    for (var e = 0; e < enemies.length; e++) {
        var ee = enemies[e];
        for (var i = e + 1; i < enemies.length; i++) {
            if (ee.XPos == enemies[i].XPos) {
                ee.XPos = RandomInt(2, 18) * grid;
            }
        }
        ctx.fillStyle = ee.Color;
        let image = ee.Race.toLowerCase(); // + gender?
        if (typeof Enemy_images[image] !== "undefined") {
            ctx.drawImage(Enemy_images[image], ee.XPos, ee.YPos, ee.Size, ee.Size);
            ctx.fillStyle = Color();
            ctx.fillRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos - enemies[e].Size + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
            ctx.fillStyle = "Black";
            ctx.strokeRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
        } else {
            ctx.fillRect(enemies[e].XPos, enemies[e].YPos, enemies[e].Size, enemies[e].Size);
            ctx.fillStyle = Color();
            ctx.fillRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
            ctx.fillStyle = "Black";
            ctx.strokeRect(enemies[e].XPos + enemies[e].Size / 3, enemies[e].YPos + enemies[e].Size / 3, enemies[e].Size / 3, enemies[e].Size / 3);
        }
        ctx.fillStyle = Settings.TextColor;
        ctx.font = "1vh Arial";
        ctx.textAlign = "center";
        ctx.fillText(enemies[e].Name + " " + enemies[e].Race, enemies[e].XPos + enemies[e].Size / 2, enemies[e].YPos);
    }
};
function FirstWave() {
    var RacesCave = ["Goblin", "Imp"];
    var OP = new enemy("Guard", RandomString(RacesCave), RandomInt(10, 13), RandomInt(10, 13), RandomInt(10, 13), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(9, 18), 150, 180, RandomInt(30, 40), RandomInt(20, 35),
        'red', grid, RandomInt(120, 140));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SecondWave() {
    var RacesCave2 = ["Goblin", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave2), RandomInt(15, 21), RandomInt(15, 21), RandomInt(15, 21), RandomInt(11, 15),
        RandomInt(8, 11), RandomInt(19, 28), 220, 240, RandomInt(45, 65), RandomInt(40, 65),
        'red', grid, RandomInt(150, 180));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function ThirdWave() {
    var RacesCave3 = ["Dhampir", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(30, 45), RandomInt(30, 45), RandomInt(27, 43), RandomInt(23, 27),
        RandomInt(20, 23), RandomInt(55, 75), 420, 450, RandomInt(75, 95), RandomInt(65, 85),
        'red', grid, RandomInt(160, 190));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function FourthWave() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Guard", RandomString(RacesCave4), RandomInt(10, 15), RandomInt(50, 65), RandomInt(55, 70), RandomInt(55, 70),
        RandomInt(35, 55), RandomInt(95, 135), 500, 600, RandomInt(110, 140), RandomInt(90, 140),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SuccubusBoss() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Mistress", RandomString(RacesCave4), RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(4500, 7000);
        OP.Masc = 0;
        OP.Name = "Mistress";
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(4500, 7000);
        OP.Name = "Master";
    }
    return OP;
}

function SuccubusBossUnique() {
    var OP = new enemy("Dungeon Mistress", "Succubus", RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 3000, "female");
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}
var Dungeon = false;
var Wave = 0;
document.getElementById("EnterDungeon").addEventListener("click", function () {
    enemies = [];
    if (false) {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBossUnique()];
    } else {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBoss()];
    }

    EnemyIndex = Wave;
    BattleSetup(enemies[Wave]);

    document.getElementById("FirstDungeon").style.display = 'none';
    document.getElementById("FirstDungeonText").innerHTML = "Wave " + (Wave + 2);
    EssenceCheck(enemies[Wave]);
    Dungeon = true;
});

function DungeonStopButton() {
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';

    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("FirstDungeon").style.display = 'block';
    Wave++;
    if (Wave == 4 && !Flags.BeatSuccubus && false) {
        Flags.BeatSuccubus = true;
        document.getElementById("FirstDungeonText").innerHTML = "Having beaten her you found a teleport shard to a new world,"
        if (House.Portal) {
            document.getElementById("FirstDungeonText").innerHTML += " you can use it at your portal at home!"
        } else {
            document.getElementById("FirstDungeonText").innerHTML += " you should build a portal at your mansion so you can use it."
        }
    }
    if (Wave == 5) {
        Wave = 0;
        document.getElementById("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
};

function DungeonCapture() {
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';

    House.Dormmates.push(enemies[EnemyIndex]);
    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("FirstDungeon").style.display = 'block';
    Wave++;
    LastPressed = " ";
    if (Wave == 4) {
        Wave = 0;
        document.getElementById("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
};
document.getElementById("DungeonLose").addEventListener("click", function () {
    battle = false;
    document.getElementById("Lose").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("LoseStruggle").style.display = 'inline-block';
    document.getElementById("LoseSubmit").style.display = 'inline-block';
    document.getElementById("LosePlayerOrgasm").innerHTML = " ";
    document.getElementById("EventLog").style.display = 'block';
    enemies = [];
    Dungeon = false;
    Wave = 0;
});
document.getElementById("LeaveFirstDungeon").addEventListener("click", function () {
    enemies = [];
    battle = false;
    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';
    LastPressed = " ";
    Dungeon = false;
    Wave = 0;
    return;
});

// change these to document.get... adventlistners
function MakeHerEqual() {
    // Some friendly sex
    Partners.Succubus.Equal = true;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Like += 100;
}

function MakeHerSubmit() {
    // Some rougher sex
    Partners.Succubus.Equal = false;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Submit += 100; // Points so it's possible to change route, but 100 is a lot so this choice matters
}

function UseAndIgonore() {
    // Sex where you skip taking her as partner
}
function PerkHandler(perket) {
    player.PerkPoints--;
    player.Perks[perket].Count++
}
// Changeing perk menu to a func so I can make a more advanced perk menu e.g. unlocked perk etc..
function PerkMenuFunc() {
    let div = document.getElementById("LevelMenu");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    let innerdiv = document.createElement("div");
    innerdiv.classList.add("LPMenuInner");

    if (window.innerHeight > 600) { // Testing spawning titles only when screen is big to help mobile users.
        let h1 = document.createElement("h1");
        let h1text = document.createTextNode("Perk menu");
        h1.appendChild(h1text);
        innerdiv.appendChild(h1);
    }

    let p = document.createElement("p");
    p.classList.add("MenuText");
    innerdiv.appendChild(p);

    let pp = document.createElement("p");
    pp.innerHTML = "You have " + player.PerkPoints + " perk points left.";
    innerdiv.appendChild(pp);

    let active = document.createElement("div");
    active.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    });
    let activeh3 = document.createElement("h3");
    let activeh3Text = document.createTextNode("Active");
    activeh3.appendChild(activeh3Text);

    let passive = document.createElement("div");
    passive.addEventListener("mouseover", function (e) {
        p.innerHTML = e.target.title;
    })
    let passiveh3 = document.createElement("h3");
    let passiveh3Text = document.createTextNode("Passive");
    passiveh3.appendChild(passiveh3Text);

    let ExtraHealth = document.createElement("input");
    ExtraHealth.setAttribute("type", "button");
    ExtraHealth.setAttribute("title", "Increase max health by 20")
    ExtraHealth.setAttribute("value", player.Perks.ExtraHealth.Count > 0 ?
        ("Extra Health +" + player.Perks.ExtraHealth.Count) : ("Extra Health"));
    ExtraHealth.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraHealth);

    let ExtraWillHealth = document.createElement("input");
    ExtraWillHealth.setAttribute("type", "button");
    ExtraWillHealth.setAttribute("title", "Increase willpower by 20");
    ExtraWillHealth.setAttribute("value", player.Perks.ExtraWillHealth.Count > 0 ?
        ("Extra Willhealth +" + player.Perks.ExtraWillHealth.Count) : ("Extra Willhealth"));
    ExtraWillHealth.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("ExtraWillHealth");
            PerkMenuFunc();
        }
    });
    passive.appendChild(ExtraWillHealth);

    let FasterRest = document.createElement("input");
    FasterRest.setAttribute("type", "button");
    FasterRest.setAttribute("title", "Increases your passive rest with +0.01hp/tick. This will also increase rate burning fat.");
    FasterRest.setAttribute("value", player.Perks.FasterRest.Count > 0 ?
        ("Faster Rest +" + player.Perks.FasterRest.Count) : ("Faster Rest"));
    FasterRest.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("FasterRest");
            PerkMenuFunc();
        }
    });
    passive.appendChild(FasterRest);

    let StealMore = document.createElement("input");
    StealMore.setAttribute("type", "button");
    StealMore.setAttribute("title", "Increases the amount of essence you take when your enemy orgasms");
    StealMore.setAttribute("value", player.Perks.StealMore.Count > 0 ?
        ("More essence +" + player.Perks.StealMore.Count) : ("More essence"));
    StealMore.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("StealMore");
            PerkMenuFunc();
        }
    });
    active.appendChild(StealMore);

    let GiveEssence = document.createElement("input");
    GiveEssence.setAttribute("type", "button");
    GiveEssence.setAttribute("title", "Gives your enemy your femininity and/or masculinity when you orgasm");
    GiveEssence.setAttribute("value", player.Perks.GiveEssence.Count > 0 ?
        ("Give essence +" + player.Perks.GiveEssence.Count) : ("Give essence"));
    GiveEssence.addEventListener("click", function () {
        if (player.PerkPoints > 0) {
            PerkHandler("GiveEssence");
            PerkMenuFunc();
        }
    });
    active.appendChild(GiveEssence);

    innerdiv.appendChild(passiveh3);
    innerdiv.appendChild(passive);
    innerdiv.appendChild(activeh3);
    innerdiv.appendChild(active)

    let back = InputButton("Back")
    back.addEventListener("click", function () {
        LevelMenuFunc();
    });

    let close = InputButton("Close");
    close.addEventListener("click", function () {
        DisplayNone();
        DisplayGame();
    });

    let br = document.createElement("br");
    innerdiv.appendChild(br);
    innerdiv.appendChild(back);
    innerdiv.appendChild(close);
    div.appendChild(innerdiv);
}
function PregnanyEngine() {
    if (player.Children.length > 0) {
        for (var e = 0; e < player.Children.length; e++) {
            player.Children[e].AgeCounter++;
            if (player.Children[e].AgeCounter % 365 == 0) {
                var age = Math.round(player.Children[e].AgeCounter / 365);
                EventLog("Your child has grown " + IntToAge(age) + " old.");
            }
        }
    }
    if (player.Pregnant.Babies.length > 0) {
        for (var e = 0; e < player.Pregnant.Babies.length; e++) {
            player.Pregnant.Babies[e].BabyAge++;
            if (player.Pregnant.Babies[e].BabyAge > Math.max(2, 274 - player.Blessings.MountainShrine.Incubator * 5)) {
                if (player.Pregnant.Babies[e].hasOwnProperty("Blessed")) {
                    var Child = {
                        AgeCounter: 0,
                        Race: player.Pregnant.Babies[e].BabyRace,
                        Mother: player.Pregnant.Babies[e].Mother,
                        Father: player.Pregnant.Babies[e].Father,
                        Blessed: player.Pregnant.Babies[e].Blessed
                    };
                } else {
                    var Child = {
                        AgeCounter: 0,
                        Race: player.Pregnant.Babies[e].BabyRace,
                        Mother: player.Pregnant.Babies[e].Mother,
                        Father: player.Pregnant.Babies[e].Father
                    };
                }
                player.Children.push(Child);
                EventLog("You have given birth!")
                player.Pregnant.Babies.splice(e, 1);
                if (player.Pregnant.Babies.length < 1) {
                    player.Pregnant.Status = false;
                }
            }
        }
        for (var b = 0; b < player.Boobies.length; b++) {
            if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                player.Boobies[b].MilkBaseRate = player.Boobies[b].MilkMax / 50000;
                player.Boobies[b].Milk += player.Boobies[b].MilkBaseRate;
            }
        }
    } else {
        player.Pregnant.Status = false;
    }
    for (var e of House.Dormmates) {
        if (!e.hasOwnProperty("Pregnant")) {
            e.Pregnant = {
                Status: false,
                Babies: []
            };
        }
        if (!Array.isArray(e.Children)) {
            e.Children = [];
        }
        if (e.Pregnant.Status) {
            for (var b = 0; b < e.Pregnant.Babies.length; e++) {
                e.Pregnant.Babies[e].BabyAge++;
                if (e.Pregnant.Babies.BabyAge > Math.max(2, 274 - player.Blessings.MountainShrine.IncubatorSeed * 5)) {
                    var Child = {
                        AgeCounter: 0,
                        Race: e.Race,
                        Mother: e.Pregnant.Mother,
                        Father: e.Pregnant.Father
                    };
                    e.Children.push(Child);
                    e.Babies.splice(e, 1);
                    if (e.Pregnant.Babies.length < 1) {
                        e.Pregnant.Status = false;
                    }
                    EventLog(e.FirstName + " " + e.LastName + " have given birth!");
                }
            }
        }
        if (e.Children.length > 0) {
            for (var b of e.Children) {
                var age = Math.round(b.AgeCounter / 365);
                b.AgeCounter++;
                if (b.AgeCounter % 365 == 0) {
                    EventLog("Your child with " + e.FirstName + " " + e.LastName + " has grown " + age + " years old.");
                }
                if (House.Nursery > 0 && age < 18) {
                    if (!b.hasOwnProperty("NuseryBoost")) {
                        b.NuseryBoost = 0;
                    } else {
                        b.NuseryBoost += House.Nursery
                        if (b.NuseryBoost > 40) {
                            console.log("Extra day");
                            b.NuseryBoost = 0;
                            b.AgeCounter++; //Faster aging with nusery
                            if (b.AgeCounter % 365 == 0) {
                                EventLog("Your child with " + e.FirstName + " " + e.LastName + " has grown " + age + " years old.");
                            }
                        }
                    }
                }
                // Need to add death of age.
            }
        }
    }
}
document.getElementById("HideWorldMap").addEventListener("click", function () {
    if (document.getElementById("WorldMapPart").style.display == 'none') {
        document.getElementById("WorldMapPart").style.display = 'block';
        PrintMap();
    } else {
        document.getElementById("WorldMapPart").style.display = 'none';
    }
});

// Tool to print mini-map
function TilePainter(x, y) {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    var Width = WorldMap.width * 0.2;
    var Height = WorldMap.height * 0.2;

    World.fillStyle = Settings.MapColor;
    World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);

    World.fillStyle = Settings.BorderColor;
    World.strokeRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
}

// Tool to highlight current map on mini-map
function CurrentTile(x, y) {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    var Width = WorldMap.width * 0.2;
    var Height = WorldMap.height * 0.2;

    World.fillStyle = Settings.BorderColor;
    World.fillRect(WorldMap.width * (0.2 * x), WorldMap.height * (0.2 * y), Width, Height);
}

function PrintMap() {
    var WorldMap = document.getElementById("WorldMap");
    var World = WorldMap.getContext("2d");
    World.fillStyle = "#404040";
    World.fillRect(0, 0, WorldMap.width, WorldMap.height);

    World.strokeStyle = Settings.BorderColor;
    switch (player.Area) {
        case "First":
            TilePainter(0, 1); //Start
            TilePainter(1, 1); //RTC1
            TilePainter(1, 0); //Bandit
            TilePainter(1, 2); //RTC2
            TilePainter(2, 2); //City
            TilePainter(3, 2); //RTH
            TilePainter(2, 3); //Forest
            TilePainter(2, 4); //Forest2
            TilePainter(3, 1); //RTW
            TilePainter(3, 0); //RTW2
            TilePainter(4, 0); //Witch

            World.font = "2em Arial";
            World.strokeText("B", WorldMap.width * 0.27, WorldMap.height * 0.17);
            World.strokeText("C", WorldMap.width * 0.46, WorldMap.height * 0.57);
            World.strokeText("W", WorldMap.width * 0.85, WorldMap.height * 0.17);
            if (House.Owned == true) {
                TilePainter(4, 2, WorldMap.width * 0.2, WorldMap.height * 0.2);
                World.strokeText("H", WorldMap.width * 0.87, WorldMap.height * 0.57);
            }

            World.font = "1em Arial";
            World.strokeText("⇩", WorldMap.width * 0.485, WorldMap.height)


            switch (player.Map) {
                case "Start":
                    CurrentTile(0, 1);
                    break;
                case "RoadToCity1":
                    CurrentTile(1, 1);
                    break;
                case "Bandit":
                    CurrentTile(1, 0);
                    break;
                case "RoadToCity2":
                    CurrentTile(1, 2);
                    break;
                case "City":
                    CurrentTile(2, 2);
                    break;
                case "RoadToHome":
                    CurrentTile(3, 2);
                    break;
                case "RoadToWitch":
                    CurrentTile(3, 1);
                    break;
                case "RoadToWitch2":
                    CurrentTile(3, 0);
                    break;
                case "Witch":
                    CurrentTile(4, 0);
                    break;
                case "Forest":
                    CurrentTile(2, 3);
                    break;
                case "Forest2":
                    CurrentTile(2, 4);
                    break;
            }
            break;
        case "Second":
            TilePainter(2, 0);
            TilePainter(1, 0);
            TilePainter(0, 0);
            TilePainter(0, 1);
            TilePainter(0, 2);
            TilePainter(2, 1);
            TilePainter(2, 2);
            TilePainter(3, 1);


            World.font = "2em Arial";
            World.strokeText("O", WorldMap.width * 0.46, WorldMap.height * 0.57);
            World.strokeText("F", WorldMap.width * 0.66, WorldMap.height * 0.37);

            World.font = "1em Arial";
            World.strokeText("⇧", WorldMap.width * 0.485, WorldMap.height * 0.07)

            switch (player.Map) {
                case "PathToOutlaws":
                    CurrentTile(2, 0);
                    break;
                case "PathToOutlaws2":
                    CurrentTile(2, 1);
                    break;
                case "Farm":
                    CurrentTile(3, 1);
                    break;
                case "Outlaws":
                    CurrentTile(2, 2);
                    break;
                case "Cave1":
                    CurrentTile(1, 0);
                    break;
                case "Cave2":
                    CurrentTile(0, 0);
                    break;
                case "Cave3":
                    CurrentTile(0, 1);
                    break;
                case "Cave4":
                    CurrentTile(0, 2);
                    break;
            }
            break;
        case "Mountain":
            TilePainter(1, 2);
            TilePainter(0, 2);

            TilePainter(2, 2);
            TilePainter(2, 3);
            TilePainter(2, 4);
            TilePainter(3, 4);
            TilePainter(4, 4);
            TilePainter(4, 3);
            TilePainter(4, 2);
            TilePainter(4, 1);
            TilePainter(4, 0);
            TilePainter(3, 0);
            TilePainter(2, 0);
            World.font = "1em Arial";
            World.strokeText("⇧", WorldMap.width * 0.485, WorldMap.height * 0.07)
            World.strokeText("⇦", 0, WorldMap.height * 0.525)

            switch (player.Map) {
                case "MountainStart":
                    CurrentTile(2, 2);
                    break;
                case "MountainShrinePath":
                    CurrentTile(1, 2);
                    break;
                case "MountainShrine":
                    CurrentTile(0, 2);
                    break;
                case "MountainClimb":
                    CurrentTile(2, 3);
                    break;
                case "MountainClimb2":
                    CurrentTile(2, 4);
                    break;
                case "MountainClimb3":
                    CurrentTile(3, 4);
                    break;
                case "MountainClimb4":
                    CurrentTile(4, 4);
                    break;
                case "MountainClimb5":
                    CurrentTile(4, 3);
                    break;
                case "MountainClimb6":
                    CurrentTile(4, 2);
                    break;
                case "MountainClimb7":
                    CurrentTile(4, 1);
                    break;
                case "MountainTribe":
                    CurrentTile(3, 1);
                    break;
                case "MountainClimb8":
                    CurrentTile(4, 0);
                    break;
                case "MountainClimb9":
                    CurrentTile(3, 0);
                    break;
            }
            break;
    }
};

// ⇦ ⇨ ⇩ ⇧ Unicode arrows
// Capitalize first letter of a string
String.prototype.Capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

/* Checks if a array has duplicate value and if it does output a array without duplicate value
 to console so I can paste new array into code */
Array.prototype.RemoveDup = function () {
    this.sort();
    var removed = [];
    for (var e = 0; e < this.length; e++) {
        if (this[e] == this[e + 1]) {
            console.log("Array contains duplicates");
            removed.push(this.splice(e, 1));
            this.splice(e, 1);
        }
    }
    if (removed.length > 0) {
        console.log(this)
        console.log("Duplicates: " + removed);
    }
}

function InputButton(Value, Title = "") { // Save space and stop repeating same lines
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", Value);
    button.setAttribute("title", Title);
    return button;
}

function ButtonButton(Title = "") { // Same as above but for <button>
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("title", Title);
    return button;
}

function LeaveBuilding() {
    const Leave = document.createElement("input");
    Leave.setAttribute("type", "button");
    Leave.setAttribute("value", "Leave");
    Leave.addEventListener("click", function () {
        battle = false;
        document.getElementById("map").style.display = 'block';
        document.getElementById("buttons").style.display = 'block';
        document.getElementById("EmptyButtons").style.display = 'none';
        document.getElementById("status").style.display = 'block';
        Buildings.style.display = 'none';
        while (Buildings.hasChildNodes()) {
            Buildings.removeChild(Buildings.firstChild);
        }
        return;
    });
    return Leave
}

function DocId(id) { // Important Prototype.js must be loaded before where you want to use this!
    return document.getElementById(id);
}

window.mobilecheck = function () { // Check if mobile device from detectmobile
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

console.log(mobilecheck())
function RaceBonus(who) {
    switch (who.Race) {
        case "Halfling":
            who.Height = who.Height / 2;
            who.Weight = who.Weight / 2;
            break;
        case "Orc":
            who.Str += 1;
            break;
        case "Fairy":
            who.Height = Math.ceil(who.Height / 9);
            who.Weight = Math.ceil(who.Weight / 9);
            break;
        case "Elf":
            who.Int += 1;
            who.Charm += 1;
            break;
        case "Dark elf":
            who.SexSkill += 1;
            who.Charm += 1;
            break;
        case "Amazon":
            who.Str += 1;
            who.SexSkill += 2;
            break;
        case "Imp":
            if (who.Femi > who.Masc) {
                who.Masc = who.Femi;
            }
            who.Femi = 0;
            break;
        case "Demon":
            who.WillHealth += 20;
            who.FullWillHealth += 20;
            break;
        case "Dhampir":
            who.WillHealth += 40;
            who.WillFullHealth += 40;
            who.Will += 1;
            break;
        case "Succubus":
            who.Femi += who.Masc;
            who.Masc = 0;
            break;
        case "Incubus":
            who.Masc += who.Femi;
            who.Femi = 0;
            break;
    }
    return who;
};
function RaceBonus(who) {
    // 
    switch (who.Race) {
        case "Halfling":
            who.Height = who.Height / 2;
            who.Weight = who.Weight / 2;
            who.Size = who.Size * 0.8;
            break;
        case "Orc":
            who.Str += 1;
            break;
        case "Fairy":
            who.Height = Math.ceil(who.Height / 9);
            who.Weight = Math.ceil(who.Weight / 9);
            who.Size = who.Size * 0.4;
            break;
        case "Elf":
            who.Int += 1;
            who.Charm += 1;
            break;
        case "Dark elf":
            who.SexSkill += 1;
            who.Charm += 1;
            break;
        case "Amazon":
            who.Str += 1;
            who.SexSkill += 2;
            break;
        case "Imp":
            if (who.Femi > who.Masc) {
                who.Masc = who.Femi;
            }
            who.Femi = 0;
            break;
        case "Demon":
            who.WillHealth += 20;
            who.FullWillHealth += 20;
            break;
        case "Dhampir":
            who.WillHealth += 40;
            who.WillFullHealth += 40;
            who.Will += 1;
            break;
        case "Succubus":
            who.Femi += who.Masc;
            who.Masc = 0;
            break;
        case "Incubus":
            who.Masc += who.Femi;
            who.Femi = 0;
            break;
    }
    return who;
};
function isTaur(mode = 1) {
    const Taur = ["centaur"],
        max = Math.min(3, player.RaceEssence.length),
        RaceEss = player.RaceEssence;
    for (let e in RaceEss) {
        if (mode === 1) {
            Taur.indexOf(RaceEss[e].Race) > -1 ? e : false
        } else {
            if (Taur.indexOf(RaceEss[e].Race) > -1) {} else {
                return e; // return biggest non taur race
            }
        }
    }
}


function EssenceBalance() { // Concept for calculating what species you're treated as
    const RaceEss = player.RaceEssence;
    if (RaceEss.some(e => e.Race !== e.Race.Capitalize())) { // Make sure all races have firt letter cap + rest lowercase
        console.log("Non cap race");
        for (let e of RaceEss) {
            e.Race = e.Race.Capitalize();
        }
    }
    if (RaceEss.some(e => e.amount < 1)) {
        for (let i in RaceEss) { // Clearing/Spicing out anything below 1
            if (RaceEss[i].amount < 1) {
                console.log("Spliced " + RaceEss[i].Race);
                RaceEss.splice(i, 1);
            }
        }
    }
    for (let e in RaceEss) { // Clearing/splicing duplicates
        for (let i in RaceEss) {
            if (RaceEss[e].Race == RaceEss[i].Race && e != i) {
                console.log("Duplicate race");
                RaceEss[e].amount += RaceEss[i].amount;
                RaceEss.splice(i, 1);
            }
        }
    }
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence

    let totalAbsorb = 0;
    for (let i of RaceEss) {
        totalAbsorb += i.amount;
    }

    /* Will convert to use this insted to I can make changed dependant on amount of essence.
Need to make it like earlier so that low essence doesn't give a race, 
e.g. you are not a dragon because you have 1 dragon essence.

Don't like that no race = human, maybe should add a special race?
    */
    const oldRace = player.Race,
        oldSecondRace = player.SecondRace;
    if (totalAbsorb < 100) {
        player.Race = "humanoid"; // No race is lowest form of human? or implement doll race?
        if (RaceEss[0].amount > 50) {
            player.SecondRace = RaceEss[0].Race;
            GenitalChange(player.SecondRace); // null dick? bland dick? average?
        } else {
            player.SecondRace = player.Race
            GenitalChange(player.SecondRace)
        }
    } else {
        let R1 = 0,
            R2 = 0,
            R3 = 0;
        if (RaceEss.length > 2) {
            R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
            R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
            R3 = Math.round(100 * RaceEss[2].amount / totalAbsorb);
        } else if (RaceEss.length > 1) {
            R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
            R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
        } else if (RaceEss.length > 0) {
            R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        }
        if (isTaur()) { // centaur always second race?
            player.Race = player.RaceEssence.length < 2 ? "human" : RaceEss[isTaur("B")].Race;
            player.SecondRace = RaceEss[isTaur()].Race;
            GenitalChange(RaceEss[isTaur()].Race);
        } else if (R1 + R2 + R3 < 50 && R1 > 0 && R2 > 0 && R3 > 0) {
            player.Race = "chimera";
            player.SecondRace = "chimera";
            GenitalChange(RaceEss[0].Race); // change GenitalsChange you can have organs from more than on race
        } else {
            if (R2 > 20) {
                player.Race = RaceEss[0].Race;
                player.SecondRace = RaceEss[1].Race
                GenitalChange(RaceEss[1].Race); // Will add options to chose what race genitals is.
            } else {
                player.Race = RaceEss[0].Race;
                player.SecondRace = player.Race;
                GenitalChange(RaceEss[0].Race);
            }
        }
        player.Race = player.Race.toLowerCase();
        player.SecondRace = player.Race.toLowerCase();
    }
    if (player.Race !== oldRace) { // Add a call to eventlog #TODO write text to reflect race change
        console.log("Race change!");
    }
    if (player.SecondRace !== oldSecondRace) {
        console.log("SecondRace change");
    }
}

function PotionDrunk(race, Dose = 50) {
    const RaceEss = player.RaceEssence,
        a = RaceEss.findIndex(e => e.Race === race.Capitalize());
    if (a > -1) {
        RaceEss[a].amount += Dose;
    } else {
        const Race = {
            Race: race.Capitalize(),
            amount: Dose
        }
        RaceEss.push(Race);
    }
}

function RaceDesc(who) {
    const Race = who.Race.toLowerCase(),
        SecondRace = who.SecondRace.toLowerCase();
    switch (Race) {
        case "human":
            if (SecondRace == "human") {
                return "human";
            } else if (SecondRace == "elf") {
                return "half elf";
            } else if (SecondRace == "centaur") {
                return "centaur";
            } else if (SecondRace == "equine") {
                return "satyr";
            }
        case "elf":
            if (SecondRace == "human") {
                return "half elf";
            } else if (SecondRace == "elf") {
                return "elf";
            } else if (SecondRace == "centaur") {
                return "centaur";
            } else if (SecondRace == "equine") {
                return "satyr";
            }
        case "equine":
            if (SecondRace == "human") {
                return "humanoid equine";
            } else if (SecondRace == "elf") {
                return "humanoid equine";
            } else if (SecondRace == "centaur") {
                return "anthropomorphic centaur";
            } else if (SecondRace == "equine") {
                return "equine";
            }
        default:
            return Race;
    }
}

function DetailedRaceDesc() {
    const RaceEss = player.RaceEssence;
    RaceEss.sort((a, b) => b.amount - a.amount); // Finding the new majority essence
    let totalAbsorb = 0;
    for (let i of RaceEss) {
        totalAbsorb += i.amount;
    }
    let R1 = 0,
        R2 = 0,
        R3 = 0;
    if (RaceEss.length > 2) {
        R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
        R3 = Math.round(100 * RaceEss[2].amount / totalAbsorb);
    } else if (RaceEss.length > 1) {
        R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
        R2 = Math.round(100 * RaceEss[1].amount / totalAbsorb);
    } else if (RaceEss.length > 0) {
        R1 = Math.round(100 * RaceEss[0].amount / totalAbsorb);
    }

    let text
    if (totalAbsorb < 100) {
        text = "Yor're an "
        if (RaceEss[0].amount > 20) {
            text += RaceEss[0].Race + " looking humaniod."
        } else {
            text += "humaniod."
        }
        return text;
    } else if (R1 > 99) {
        return "You're fully " + RaceEss[0].Race + "!";
    } else if (R1 + R2 + R3 < 50) {
        return "You're an unnatural mix of an assortment of creatures!";
    } else if (R1 > 90) {
        return "You're indistinguishable from any other " + RaceEss[0].Race;
    } else if (R1 > 80) {
        text = "You're mostly " + RaceEss[0].Race + ", but you've got";
        if (R2 > 10) {
            text += " some " + RaceEss[1].Race + " traits.";
        } else {
            text += " other traits mixed in.";
        }
        return text;
    } else if (R1 > 70) {
        text = "You're mostly " + RaceEss[0].Race + ", but"
        if (R2 > 20) {
            text += " could be confused for a half-" + RaceEss[1].Race + ".";
        } else if (R2 + R3 > 20) {
            text += " you've added a few other traits, notably " + RaceEss[1].Race + " and " +
                RaceEss[2].Race + ".";
        } else {
            text += " you've added a few other traits.";
        }
        return text;
    } else if (R1 < R2 + 10) {
        return "You're half-" + RaceEss[0].Race + ", half " + RaceEss[1].Race + ".";
    } else if (R1 < R2 + R3) {
        return "You're a curious hybrid, a mix between " + RaceEss[0].Race + ", " + RaceEss[1].Race + ", and " + RaceEss[2].Race + ".";
    } else {
        return "You're unmistakably an " + RaceEss[0].Race + ", but you're deep in an uncanny valley.";
    }
}
document.getElementById("Save").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("SaveMenu").style.display = 'block';
    for (let e = 1; e < 6; e++) {
        if (localStorage.getItem('SaveDate' + e) !== null) {
            document.getElementById("SavePlayer" + e).value = localStorage.getItem('SaveDate' + e);
        }
    }
});
document.getElementById("SaveLeave").addEventListener("click", function () {
    document.getElementById("SaveMenu").style.display = 'none';
    DisplayGame();
});

function SavePlayerButtons() {
    for (let e = 1; e < 6; e++) {
        document.getElementById("SavePlayer" + e).addEventListener("click", function () {
            const SaveArray = [player, House, Flags, Settings];
            localStorage.setItem('SavedPlayer' + e, JSON.stringify(SaveArray));
            localStorage.setItem('SaveDate' + e, Date());
            document.getElementById("SavePlayer" + e).value = Date();
            document.getElementById("LoadPlayer" + e).value = Date();
        });
    }
}
SavePlayerButtons();

document.getElementById("SaveText").addEventListener("click", function () {
    var SaveArray = [player, House, Flags, Settings];
    var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(SaveArray));
    newWindow = window.open(uriContent, 'neuesDokument');
});
document.getElementById("Options").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("optionpage").style.display = 'block';
    document.getElementById("ImgPack").value = "Img pack: " + Settings.ImgPack;
    document.getElementById("LogLength").innerHTML = Settings.LogLength;
    document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
    document.getElementById("Inch").value = "Inch " + Settings.Inch;
    document.getElementById("HighLightDoors").value = "Highlight doors " + Settings.HighLightDoors;
});

document.getElementById("FontSmaller").addEventListener("click", function () {
    Settings.FontSize -= 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

document.getElementById("FontBigger").addEventListener("click", function () {
    Settings.FontSize += 0.05;
    document.body.style.fontSize = Settings.FontSize + "em";
    document.getElementById("FontSize").innerHTML = Math.round(Settings.FontSize * 100) / 100 + "em"
});

document.getElementById("SetPronoun").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("PronounForm").style.display = 'block'
});

document.getElementById("Log+10").addEventListener("click", function () {
    Settings.LogLength += 10;
    document.getElementById("LogLength").innerHTML = Settings.LogLength;
});

document.getElementById("Log-10").addEventListener("click", function () {
    Settings.LogLength -= 10;
    document.getElementById("LogLength").innerHTML = Settings.LogLength;
});

document.getElementById("AcceptPronoun").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("optionpage").style.display = 'block';
    Settings.Pronoun = {
        Herm: document.getElementById("Herm").value,
        Male: document.getElementById("Male").value,
        Female: document.getElementById("Female").value,
        Doll: document.getElementById("Doll").value,
        DickGirl: document.getElementById("DickGirl").value,
        CuntBoy: document.getElementById("CuntBoy").value,
        Status: true
    };
});
document.getElementById("DisablePronoun").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("optionpage").style.display = 'block';
    Settings.Pronoun.Status = false;
});

document.getElementById("Inch").addEventListener("click", function () {
    Settings.Inch = Settings.Inch ? false : true;
    document.getElementById("Inch").value = "Inch " + Settings.Inch;
});

document.getElementById("FullScreen").addEventListener("click", function () {
    const elem = document.body,
        button = document.getElementById("FullScreen");
    if (document.fullscreenElement === null) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
        button.value = "W";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
        button.value = "F"
    }
});

// Save options
document.getElementById("saveoptions").addEventListener("click", function () {
    document.getElementById("optionpage").style.display = 'none';
    DisplayGame();

    document.body.style.backgroundColor = document.getElementById("backcolor").value;
    MapColor = document.getElementById("MapColor").value;
    document.body.style.color = document.getElementById("textcolor").value;
    document.body.style.fontFamily = document.getElementById("textfont").value;

    document.getElementById("status").style.backgroundColor = document.getElementById("SideBarColor").value;
    document.getElementById("buttons").style.backgroundColor = document.getElementById("SideBarColor").value

    Settings.MapPercent = document.getElementById("MapScale").value;
    Settings.BackColor = document.getElementById("backcolor").value;
    Settings.MapColor = document.getElementById("MapColor").value;
    Settings.TextColor = document.getElementById("textcolor").value;
    Settings.TextFont = document.getElementById("textfont").value;
    Settings.BorderColor = document.getElementById("BorderColor").value;

    HemScale();
});

document.getElementById("PerkOptions").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("PerkOptionsMenu").style.display = 'block';
    document.getElementById("Skip").value = "Skip " + Settings.Skip;
    document.getElementById("Vore").value = "Vore " + Settings.Vore;
});

document.getElementById("Skip").addEventListener("click", function () {
    Settings.Skip = Settings.Skip ? false : true;
    document.getElementById("Skip").value = "Skip " + Settings.Skip;
});

document.getElementById("OptionGiveEssence").addEventListener("click", function () {
    switch (Settings.GiveEssence) {
        case "Both":
            Settings.GiveEssence = "Femininity";
            break;
        case "Femininity":
            Settings.GiveEssence = "Masculinity";
            break;
        case "Masculinity":
            Settings.GiveEssence = "None";
            break;
        default:
            Settings.GiveEssence = "Both";
            break;
    }
    document.getElementById("OptionGiveEssence").value = Settings.GiveEssence;
});

document.getElementById("PerkOptionsLeave").addEventListener("click", function () {
    document.getElementById("PerkOptionsMenu").style.display = 'none';
    DisplayGame();
});

document.getElementById("HighLightDoors").addEventListener("click", function () {
    Settings.HighLightDoors = Settings.HighLightDoors ? false : true;
    document.getElementById("HighLightDoors").value = "Highlight doors " + Settings.HighLightDoors;
});
var PRL,
    RL,
    LastPressed;
// Mouth
function SexActGiveBlowjob() {
    const Text = DocId("SexText"),
        ee = enemies[EnemyIndex];
    if (Settings.ImgPack) {
        ImgChose(player, "GiveBlowjob", ee);
    }
    ee.Arousal += SexAttack / 2
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveBlowjob") {
        Text.innerHTML = `Your head continues to bob on their length as your tongue plays with their tip, 
        electing soft moans from your opponent. As ${enemies[EnemyIndex].FirstName} begins to softly hump into your throat, 
        you meet each thrust by pushing your head down as far as you can. You emphasize their thrusts by sucking hard on their throbbing length. You feel their hand being placed on your head, pushing you deeper into their crotch.`
        if (ee.Balls.length > 0) {
            Text.innerHTML += ` Your lips meet their crotch as their ${CmToInch(enemies[EnemyIndex].Balls[0].Size)} nuts start to bump into your chin with each hump.`
        }
        Text.innerHTML += ` Their breathing becomes deep and labored as you milk their cock for all it’s worth.`
    } else {
        RL = RandomInt(0, ee.Dicks.length - 1);
        Text.innerHTML = `Your foe lays on their back, chest heaving with exhaustion from the recent fight. 
        You make your way up to ${enemies[EnemyIndex].FirstName}'s body and crouch between their legs, 
        spreading them apart. In-between lies their ${CmToInch(enemies[EnemyIndex].Dicks[RL].Size)} ${enemies[EnemyIndex].Dicks[RL].Type} cock lewdly pulsing as it bobs side-to-side with each breath of your foe. You lick your lips in anticipation as you lower your head to your prize, wrapping your lips around the head of their dick and start sucking.` // They still lies on their stomach still spent from the battle. You grab their torso and flip them on their back for your viewing pleasure. Their dick lays flat against their stomach twitching almost expectantly. You lower your head between their legs and just before the they has time to protest you begin tending to their cock causing them to gasp.
    }
    CheckArousal();
    LastPressed = "GiveBlowjob";
    return;
};

function SexActGiveCunnilingus() {
    if (Settings.ImgPack) {
        ImgChose(player, "GiveCunnilingus", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 2;
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveCunnilingus") {
        document.getElementById("SexText").innerHTML = "Keeping them in place, you continue your tongue-lashing, electing soft moans from your opponent. Barely able to move, all " + enemies[EnemyIndex].FirstName + "can do is rest their hand on your head. You reach one hand to their clit and gently pinch it, sending a fresh wave of pleasure through their body.";
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Pussies.length - 1);
        document.getElementById("SexText").innerHTML = "Your foe lays on their back, chest heaving with exhaustion from the recent fight. You make your way up to " + enemies[EnemyIndex].FirstName + "'s body and crouch between their legs, spreading them apart. In-between lies their " + enemies[EnemyIndex].Pussies[RL].type + " pussy, engorged and dripping slightly, their clit twitching lewdly with each breath of your foe." +
            " You lick your lips in anticipation as you lower your head to your prize, spreading their lower lips with your fingers, and start eating them out.";
    }
    CheckArousal();
    LastPressed = "GiveCunnilingus";
    return;
};

function SexActGiveRimjob() {
    if (Settings.ImgPack) {
        ImgChose(player, "GiveRimjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 2;
    player.Arousal += ESexAttack / 3;
    if (LastPressed === "GiveRimjob") {
        document.getElementById("SexText").innerHTML = "You continue eating their ass out.";
    } else {
        document.getElementById("SexText").innerHTML = "You eat their ass out.";
    }
    CheckArousal();
    LastPressed = "GiveRimjob";
    return;
};
// Vagina
function SexActScissoring() {
    if (Settings.ImgPack) {
        ImgChose(player, "Scissoring", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Scissoring") {
        document.getElementById("SexText").innerHTML = "As you continue to grind your pussy against " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy, you reach down and toy with their clit, bringing more pleasure-filled moans to your ears.";
    } else {
        document.getElementById("SexText").innerHTML = "Looking down at " + enemies[EnemyIndex].FirstName + ", you feel a twinge of arousal pulse through your crotch. Straddling your opponent's thigh, you lift their other leg and bring your crotches together, grinding your pussy against theirs. Not leaving it at that, you bring their hand to your clit, and moan as they start playing with it.";
    }
    CheckArousal();
    LastPressed = "Scissoring";
    return;
};

function SexActGetCunnilingus() {
    if (Settings.ImgPack) {
        ImgChose(player, "GetCunnilingus", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetCunnilingus") {
        document.getElementById("SexText").innerHTML = "Keeping them in place, you force them to continue eating you out, electing soft moans from your throat. Barely able to move, all " + enemies[EnemyIndex].FirstName + "can do is continue eating you out. You reach one hand to their head and gently pet it, telling them they're doing a good job.";
    } else {
        RL = RandomInt(0, player.Pussies.length - 1);
        document.getElementById("SexText").innerHTML = "Your foe lays on their back, chest heaving with exhaustion from the recent fight. You make your way up " + enemies[EnemyIndex].FirstName + "'s body, licking your lips in anticipation. Squatting above their head, you line your crotch up with their mouth. Grabbing their head, you grind their face against your " + player.Pussies[RL].Type + " pussy, until they " +
            "start eating you out with " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Race + " tounge.";
    }
    CheckArousal();
    LastPressed = "GetCunnilingus";
    return;
};

function SexActRideCowgirl() {
    if (Settings.ImgPack) {
        ImgChose(player, "RideCowgirl", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "RideCowgirl") {
        document.getElementById("SexText").innerHTML = "Planting one hand on their chest, you continue riding " + HisHer(enemies[EnemyIndex]) + " " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick at an erratic pace, enjoying their groans of pleasure with each thrust."
        if (enemies[EnemyIndex].Balls.length > 0) {
            document.getElementById("SexText").innerHTML += " Every time your crotch meets theirs, you can feel their balls twitch, getting ready to cum."
        }
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
        PRL = RandomInt(0, player.Pussies.length - 1);
        document.getElementById("SexText").innerHTML = "Looking down at your defeated opponent, lying on " + HisHer(enemies[EnemyIndex]) + " back, you position yourself above their crotch. Spreading your lower lips with one hand and positioning " + HisHer(enemies[EnemyIndex]) + " " + CmToInch(enemies[EnemyIndex].Dicks[RL].Size) + " " + enemies[EnemyIndex].Dicks[RL].Type + " dick with your other, you wrap your " + player.Pussies[PRL].Type + " pussy around them.<br>Their dick " + Tightness(enemies[EnemyIndex], player, "B") + " your pussy.";
    }
    if (player.Pussies[PRL].Virgin) {
        player.Pussies[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>You have lost your virginity!"
    }
    CheckArousal();
    LastPressed = "RideCowgirl";
    return;
};

function SexActInsertion() {
    if (Settings.ImgPack) {
        ImgChose(player, "Insertion", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Insertion") {
        document.getElementById("SexText").innerHTML = "Allowing them only short breaks, you continue masturbating with your living dildo. Judging from their cute squeaks of pleasure, you're not the only one enjoying this.";
    } else {
        RL = RandomInt(0, enemies[EnemyIndex].Dicks.length - 1);
        PRL = RandomInt(0, player.Pussies.length - 1);

        document.getElementById("SexText").innerHTML = "Due to their small size, conventional sex would be difficult; looking closer at their small form, however, you realize they are about the size of a dildo. to your much larger body. " +
            "Grabbing them you bring them to your " + CmToInch(player.Pussies[PRL].Size) + " deep " + player.Pussies[PRL].Type + " vagina, telling them look closely at the wet folds they are about to be better acquainted with. Feet first, you gently insert them into your pussy with a soft moan of pleasure. Once you're sure they can survive it, you pick up the pace."
    }
    if (player.Pussies[PRL].Virgin) {
        player.Pussies[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>You have lost your virginity to your little dildo!"
    }
    CheckArousal();
    LastPressed = "Insertion";
    return;
};
// Dick
function SexActMissionary() {
    if (Settings.ImgPack) {
        ImgChose(player, "Missionary", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "Missionary") {
        document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        document.getElementById("SexText").innerHTML = "Positioning your opponent on " + HisHer(enemies[EnemyIndex]) + " back you fuck " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "Missionary";
    return;
};

function SexActDualPen() {
    enemies[EnemyIndex].Arousal += 2 * SexAttack;
    player.Arousal += 3 * ESexAttack;
    if (Settings.ImgPack) { //Going to need to split this, unless it's only for multiple orifices
        ImgChose(player, "DualPen", enemies[EnemyIndex]);
    }
    if (enemies[EnemyIndex].Pussies.length > 0) {
        if (LastPressed === "DualPen") {
            document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy and ass with your " + player.Dicks[PRL].Type + " dicks, enjoying the contrast between their ass and pussy's tightness and flexibility, and your rods separated by a thin wall of their flesh.";
            //Text 2: document.getElementById("SexText").innerHTML = "You pull your dicks out of " + HisHer(enemies[EnemyIndex]) + " holes slowly, enjoying the feeling of their pussy and ass trying to pull you back in. Without warning, you thrust forward suddenly, bottoming out again in an instant and forcing a shout of pleasure from their throat. You resume thrusting, a pleasured look on both of your faces."
        } else {
            document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you smile to yourself; they've got enough holes to use more than one dick. Spreading their legs, you line up your " + player.Dicks[0].Type + " with their " + enemies[EnemyIndex].Pussies[0].Type + " pussy and ass, and press in slowly. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        }
    } else {
        if (LastPressed === "DualPen") {
            document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
        } else {
            document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you notice a lack of vagina. Not willing to give one dick priority over the other, you spread their legs and line up your " + player.Dicks[0].Type + " dicks with their ass, and press in slowly. To your surprise, they stretch around your dicks with only mild (vocalized) discomfort. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.";
        }
    }
    if (player.Dicks[0].Virgin || player.Dicks[1].Virgin) {
        player.Dicks[0].Virgin = false;
        player.Dicks[1].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dicks are no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DualPen";
    return;
};

function SexActMultiPen() {
    if (enemies[EnemyIndex].Pussies.length * SexAttack > 200) {
        enemies[EnemyIndex].Arousal = 100;
        enemies[EnemyIndex].Orgasm += Math.floor(enemies[EnemyIndex].Pussies.length * SexAttack) - 1;
    } else
        enemies[EnemyIndex].Arousal += enemies[EnemyIndex].Pussies.length * SexAttack;
    if (player.Dicks.length * 2 * ESexAttack > 200) {
        player.Arousal = 100;
        player.Orgasm += Math.floor(enemies[EnemyIndex].Pussies.length * SexAttack) - 1;
    } else
        player.Arousal += player.Dicks.length * 2 * ESexAttack;
    if (Settings.ImgPack) { //Going to need to split this, surprise surprise.
        ImgChose(player, "MultiPen", enemies[EnemyIndex]);
    }
    if (LastPressed === "MultiPen") {
        document.getElementById("SexText").innerHTML = "Your mind's unable to handle the insane amount of pleasure, and you thrust wildly. Your entire world is focused on the pleasure your dicks are experiencing, fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " holes with your many dicks. Had you more awareness, you would've seen " + enemies[EnemyIndex].FirstName + "'s face in a state of ecstasy, unable to make a sound.";
    } else if (player.Dicks.length > enemies[EnemyIndex].Pussies.length + 1) //1st case: more dicks than all holes 
    {
        document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you are disheartened to see them lack enough holes for your arsenal of penises. Resolved to make the best of it, you pair them up and shove them into any orifice they can reach. Pressing in slowly, you're amazed at how much they stretch around your dicks, and how good it feels. Unable to control your body any longer, your mind takes a back seat as your hips thrust at a manic pace, drowning you in pleasure.";
    } else { //if(player.Dicks.length == enemies[EnemyIndex].Pussies.length + 1) {//2nd case: enough dicks for all holes
        document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you're ecstatic to see enough holes for your arsenal of penises. Resolved to make this an unforgettable experience, you line up your dicks and slowly ease in. Amazed at how much they stretch around your dicks, and how good it feels, your mind barely registers their hips meeting yours. Unable to control your body any longer, your conscious thoughts takes a back seat as your hips thrust at a manic pace, drowning you in pleasure.";
    }
    /*else {//3rd case: They've got enough pussies for your dicks 
    	if (LastPressed === "MultiPen") {
    		document.getElementById("SexText").innerHTML = "You continue fucking " + HisHer(enemies[EnemyIndex]) + " " + enemies[EnemyIndex].Pussies[0].Type + " pussy with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.<br>Their pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to you.";
    	} else {
    		document.getElementById("SexText").innerHTML = "Looking down at " + HisHer(enemies[EnemyIndex]) + " crotch, you notice a lack of vagina. Not willing to give one dick priority over the other, you spread their legs and line up your " + player.Dicks[0].Type" dicks with their ass, and press in slowly. To your surprise, they stretch around your dicks with only mild (vocalized) discomfort. As they adapt to your dicks, you start picking up speed, thrusting at an irregular pace due to all of the pleasure.";
    	}
    }*/
    var v = false;
    for (var i = 0; i < player.Dicks.length; i++) {
        if (player.Dicks[i].Virgin) {
            player.Dicks[i].Virgin = false;
            v = true;
        }
    }
    CheckArousal();
    LastPressed = "DualPen";
    return;
};

function SexActDoggyStyle() {
    if (Settings.ImgPack) {
        ImgChose(player, "DoggyStyle", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "DoggyStyle") {
        document.getElementById("SexText").innerHTML = "You continue fucking them from behind.<br>Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        document.getElementById("SexText").innerHTML = "Commanding " + HisHer(enemies[EnemyIndex]) + " to get down on their all fours you fuck " + HisHer(enemies[EnemyIndex]) + " from behind.<br> Their " + enemies[EnemyIndex].Pussies[0].Type + " pussy " + Tightness(player, enemies[EnemyIndex], "A") + " to your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyle";
    return;
};

function SexActGetBlowjob() {
    if (Settings.ImgPack) {
        ImgChose(player, "GetBlowjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetBlowjob") {
        // document.getElementById("SexText").innerHTML = "You continue humping your new toy at a constant pace. Your rhythm doesn’t falter as you use your muscles to the best of their ability. You lean back as you hilt into the back of their throat, eliciting a moan from you as you start breeding deep."
        if (player.Balls.length > 0) {
            document.getElementById("SexText").innerHTML = "Continuing to thrust, your " + CmToInch(player.Balls[0].Size) + " balls slap repeatedly against your foe, causing them to grunt in annoyance." +
                "Your thrusting continues as you make proper use of your opponent’ s mouth. You grab your foe 's forearm and guide it to your sac, grunting in demand as they start to fondle you.<br><br>"
        }
        document.getElementById("SexText").innerHTML = "Your thrusting continues as you make proper use of your opponent’s mouth. Your pounding of their throat continues even as your abdomen starts bumping into their nose with each thrust. Muffled groans escape from your mouth as " + enemies[EnemyIndex].FirstName + "’s mouth is pumped by your throbbing cock." //They moan as your cock snakes its way through their mouth greedily humps their throat."
    } else {
        document.getElementById("SexText").innerHTML = "You walk up to your defeated adversary as they attempt to get back on their feet. You stop them by catching their head and tilting it up to your face. You look back down at your crotch and nod to your " + CmToInch(player.Dicks[0].Size) + " cock expectantly." +
            " Just as your prize gets the idea and moves closer you eagerly thrust your hips into their mouth. You hold their head close starting a steady rhythm as you use their hole."
        // "Your last blow sends your foe recoiling back losing their footing and crashing to the floor. You make your way up to them until you cast a shadow of their body. Your adversary groans as they start to rise, only to be met with the sight of your (insert player dick size. small, average, hefty, enormous) member. Stunned by the position they are in you grab the back of their head and guide their mouth to its rightful place and begin to enjoy your prize"

    }
    CheckArousal();
    LastPressed = "GetBlowjob";
    return;
};
// Anal
function SexActDoggyStyleAnal() {
    if (Settings.ImgPack) {
        ImgChose(player, "DoggyStyleAnal", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack;
    player.Arousal += ESexAttack;
    if (LastPressed === "DoggyStyleAnal") {
        document.getElementById("SexText").innerHTML = "You keep " + HisHer(enemies[EnemyIndex]) + " head down and fuck " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    } else {
        PRL = RandomInt(0, player.Dicks.length - 1);
        document.getElementById("SexText").innerHTML = "You order you opponent down on " + HisHer(enemies[EnemyIndex]) + " knees, and position yourself behind them. Pushing " + HisHer(enemies[EnemyIndex]) + " head down, you start fucking " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[PRL].Size) + " " + player.Dicks[PRL].Type + " dick.";
    }
    if (player.Dicks[PRL].Virgin) {
        player.Dicks[PRL].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyleAnal";
    return;
};

function SexActDualPen() {
    enemies[EnemyIndex].Arousal += SexAttack * 2;
    player.Arousal += ESexAttack * 2;
    if (LastPressed === "DualPen") {
        document.getElementById("SexText").innerHTML = "You keep " + HisHer(enemies[EnemyIndex]) + " head down and fuck " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[0].Size) + " " + player.Dicks[0].Type + " dick.";
    } else {
        document.getElementById("SexText").innerHTML = "You order you opponent down on " + HisHer(enemies[EnemyIndex]) + " knees, and position yourself behind them. Pushing " + HisHer(enemies[EnemyIndex]) + " head down, you start fucking " + HisHer(enemies[EnemyIndex]) + " ass with your " + CmToInch(player.Dicks[0].Size) + " " + player.Dicks[0].Type + " dick.";
    }
    if (player.Dicks[0].Virgin) {
        player.Dicks[0].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your first dick is no longer virgin!"
    }
    if (player.Dicks[1].Virgin) {
        player.Dicks[1].Virgin = false;
        document.getElementById("SexText").innerHTML += "<br>Your second dick is no longer virgin!"
    }

    CheckArousal();
    LastPressed = "DoggyStyleAnal";
    return;
};

function SexActMultiPen() {

};

function SexActGetRimjob() {
    if (Settings.ImgPack) {
        ImgChose(player, "GetRimjob", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack / 3;
    player.Arousal += ESexAttack / 2;
    if (LastPressed === "GetRimjob") {
        document.getElementById("SexText").innerHTML = "You force your opponent to continue eating out your ass.";
    } else {
        document.getElementById("SexText").innerHTML = "You command your opponent to eat out your ass.";
    }
    CheckArousal();
    LastPressed = "GetRimjob";
    return;
};

function SexActBreastFeed() {
    if (Settings.ImgPack) {
        ImgChose(player, "BreastFeed", enemies[EnemyIndex]);
    }
    enemies[EnemyIndex].Arousal += SexAttack * 1.2;
    player.Arousal += ESexAttack;
    for (var b = 0; b < player.Boobies.length; b++) {
        player.Boobies[b].Milk -= 100 / player.Boobies.length;
    }
    if (LastPressed === "BreastFeed") {
        document.getElementById("SexText").innerHTML = "You continue feeding them your milk, releiving the pressure in your chest.";
    } else {
        document.getElementById("SexText").innerHTML = "The urge to nurture is strong due the hormones released from your lactating breasts. Wanting release, you take them into your lap and guide " + HisHer(enemies[EnemyIndex]) + " head to your fullest breast. " +
            "At first they assumed you wanted them you suck on your nipples for pleasure, but once their mouth was full they had no choice but to swallow. As they quickly fell in love with the taste, you remove your hand from their head unnoticed, they don't think about stopping their feeding."
    }
    CheckArousal();
    LastPressed = "BreastFeed";
    return;
};

function StopSexButton() {
    battle = false;
    player.Orgasm = 0;
    player.cumGround = 0;
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';
    document.getElementById("AfterBattle").style.display = 'none';
    LastPressed = " ";
    // Trying to have ferals disappear after combat	
    /*	console.log(enemies[EnemyIndex].FirstName);
    	if(enemies[EnemyIndex].FirstName === "Feral")
    	{
    		console.log("Removed");
    		enemies.splice(EnemyIndex, 1);
    	}*/
    return;
};

function SexActCapture() {
    House.Dormmates.push(enemies[EnemyIndex]);
    enemies.splice(EnemyIndex, 1);
    battle = false;
    player.Orgasm = 0;
    player.cumGround = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';
    LastPressed = " ";
    return;
}

function Tightness(pipe, hole, mode) {
    if (mode == "A") {
        if (pipe.Dicks[0].Size > hole.Pussies[0].Size + 1) {
            if (pipe.Dicks[0].Size > hole.Pussies[0].Size * 2) {
                return "feels extremly tight";
            } else {
                return "feels tight";
            }
        } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size - 1) {
            if (pipe.Dicks[0].Size * 2 < hole.Pussies[0].Size) {
                return "feels very loose"
            } else {
                return "feels loose";
            }
        } else {
            return "feels like a perfect fit";

        }
    } else if (mode == "B") {
        if (pipe.Dicks[0].Size > hole.Pussies[0].Size - 1) {
            return "feels big in";
        } else if (pipe.Dicks[0].Size < hole.Pussies[0].Size + 1) {
            return "feels small in";
        } else {
            return "feels like a perfect fit to";
        }
    }
}

function HisHer(Gender) {
    switch (CheckGender(Gender)) {
        case "male":
            return "his";
        case "female":
            return "her";
        case "hermaphrodite":
            return "their";
        default:
            return "their";
    }
}
const SpellDict = {
    Template: {
        Name: "Template", // Display Name
        Type: "Temp", // Spell "Type" 
        ManaCost: function () {
            return Math.ceil(40 * 100 / (100 + player.MagicAffinity.Temp))
        }, // Mana cost should maybe be lowerd here?
        Does: function (exp) {

        }, // short description of spell & value of action in this case "40 fire type dmg" 
        Succes: function () {},
        Fail: function () {
            document.getElementById("BattleText2").innerHTML = ""; // So it doesn't look like enemy attacked you.
            return "" // e.g you are to exhausted to cast template.
        },
        Cast: function (index, ee) {
            document.getElementById("BattleText").innerHTML = this.Succes();

        }
    },
    Fireball: {
        Name: "Fireball",
        Type: "Fire",
        ManaCost: function () {
            return Math.ceil(40 * 100 / (100 + player.MagicAffinity.Fire))
        },
        Does: function (Exp) {
            return Math.floor(20 * (player.Int / 20) + (Exp / 100))
        },
        Succes: function (dmg) {
            document.getElementById("BattleText").innerHTML = "You threw a ball covered in fire, dealing " + dmg + " damage to their HP and will!"
            player.Mana -= this.ManaCost();
            player.MagicAffinity[this.Type]++;
            UpdateStats();
        },
        Fail: function () {
            document.getElementById("BattleText2").innerHTML = "";
            return "You're exhausted, and can't cast another fireball..."
        },
        Cast: function (index, ee) {
            if (player.Mana >= this.ManaCost()) {
                var that = player.Spells[index];
                var PAttack = Math.floor(RandomInt(3, 5) * this.Does(that.Exp) / 4)
                ee.Health -= PAttack; // * MagRes(ee);
                that.Exp++;
                this.Succes(PAttack);
            } else {
                document.getElementById("BattleText").innerHTML = this.Fail();
            }
        }
    },
    MinorHealing: {
        Name: "Minor healing",
        Type: "Restoration",
        ManaCost: function () {
            return Math.ceil(30 * 100 / (100 + player.MagicAffinity.Restoration))
        },
        Does: function (Exp) {
            return Math.floor(25 * (player.Int / 20) + (Exp / 100))
        },
        Succes: function (Heal) {
            document.getElementById("BattleText").innerHTML = "You healed for " + Heal;
            player.Mana -= this.ManaCost();
            player.MagicAffinity[this.Type]++;
            UpdateStats();
        },
        Fail: function () {
            document.getElementById("BattleText").innerHTML = "Fail";
        },
        Cast: function (index, ee) {
            var that = player.Spells[index];
            var ManaCost = this.ManaCost(); // Affinity will lower cost
            var Heal = this.Does(that.Exp)
            if (player.Mana > ManaCost) {
                if (player.Health > player.MaxHealth) {
                    document.getElementById("BattleText").innerHTML = "You already have full health."
                } else if (player.Health + Heal > player.MaxHealth) {
                    player.Mana -= ManaCost;
                    player.Health = player.MaxHealth;
                    this.Succes(Heal);
                } else {
                    player.Mana -= ManaCost;
                    player.Health += Heal;
                    this.Succes(Heal);
                }
            } else {
                this.Fail();
            }
        }
    }
}
const SpellDictLite = { // Add spells from here no need to save what it does
    Template: {
        Name: "",
        Exp: 0,
        Title: ""
    },
    Fireball: {
        Name: "Fireball",
        Exp: 0, // I think I want magic to be a thing which gets better with use
        Title: "Cast a fire ball dealing phyical damage to your enemies."
    },
    MinorHealing: {
        Name: "MinorHealing",
        Exp: 0,
        Title: "Basic first aid spell, to heal minor wounds."
    }
}
function TotalStr() { // Testing order
    var Str = player.Str;
    // Add precent buffs to player raw stats 
    // Maybe negative?
    // Maybe precent negative?
    // #TODO Add bonus for player with alot of muscle and a negative for little, should add a negative impacted stats to like agility?
    //Str += EquipMent(); // Add raw buffs e.g. +3 str weapon work for negative values to.
    switch (player.Race.toLowerCase()) { // Race buffs
        case "orc":
            Str += 4; // Maybe multiple by race ess amount / 100 ?
            break;
        case "equine":
            Str += 3;
            break;
        case "fairy":
            Str -= 7;
            break;
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        case "orc":
            Str += 2;
            break;
        case "fairy":
            Str -= 2;
            break;
        case "equine":
            Str += 1;
            break;
        default:
            break;
    }
    return Str;
}

function TotalInt() {
    var Int = player.Int;
    //Int += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Int
}

function TotalCharm() {
    var Charm = player.Charm;
    //Charm += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Charm
}

function TotalWill() {
    var Will = player.Will;
    //Will += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return Will;
}

function TotalEnd() {
    var End = player.End;
    //End += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return End;
}

function TotalSexSkill() {
    var SexSkill = player.SexSkill; // Should I keep this as a basic stat? Maybe change it so it's own skill system?
    //SexSkill += EquipMent();
    switch (player.Race.toLowerCase()) { // Race buffs
        default:
            break;
    }
    switch (player.SecondRace.toLowerCase()) {
        default:
            break;
    }
    return SexSkill;
}
var TF = {
    Status: false,
    Counter: 0,
    To: "human"
}

function TfEngine(Tf_to) {
    if (!TF.Status) {
        TF.Status = true;
        TF.To = Tf_to;
        TF.Counter = 0;
    } else {
        TF.Counter++;
        switch (TF.To) {
            case "elf":
                if (player.SecondRace != "elf") {
                    if (TF.Counter > 1000) {
                        player.SecondRace = "elf";
                        EventLog("Completing the transfomation you are now half elf, half " + player.Race);
                        player.Race = "elf";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("elf");
                    } else if (TF.Counter == 500) {
                        EventLog("Your skin feels smooth as silk.")
                    }
                } else {
                    if (TF.Counter > 1000) {
                        EventLog("You are now an elf!");
                        player.Race = "elf";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("elf");
                    } else if (TF.Counter == 500) {
                        EventLog("Your ears grow to a pointy shape.");
                    }
                }
                break;
            case "human":
                if (player.SecondRace != "human") {
                    if (TF.Counter > 1000) {
                        EventLog("You are now a human!");
                        player.SecondRace = "human";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("human");
                    } else if (TF.Counter == 500) {
                        EventLog("Your body starts to feel familiar...");
                    }
                } else {
                    if (TF.Counter > 1000) {
                        EventLog("You are now a human!");
                        player.Race = "human";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("human")
                    } else if (TF.Counter == 500) {
                        EventLog("Your body starts to feel familiar...");
                    }
                }
                break;
            case "centaur":
                if (player.SecondRace != "centaur") {
                    if (TF.Counter > 1000) {
                        EventLog("Completing the transformation, you are now a centaur with a horse's lower body and a " + player.Race + "'s upper body.");
                        player.SecondRace = "centaur";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("equine");
                    } else if (TF.Counter == 300) {
                        EventLog("The changes to your lower body is so dramatic that you fall to the ground. Trying to get back up, you see your torso split, bending in half, then stretching back.")
                    } else if (TF.Counter == 400) {
                        EventLog("Where your torso split you grow a second set of legs; all four legs transform to those of a horse.");
                    } else if (TF.Counter == 600) {
                        EventLog("You feel your lower torso growing wider, soon resembling a horse's torso.");
                    } else if (TF.Counter == 800) {
                        EventLog("Your genitals shift around as they transform into their equine equivalent.");
                    }
                }
                break;
            case "equine":
                if (player.SecondRace != "equine") {
                    if (TF.Counter > 1000) {
                        EventLog("Completing the transformation, you are now a satyr with an equine lower body and a " + player.Race + " upperbody.");
                        player.SecondRace = "equine";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("equine");
                    } else if (TF.Counter == 300) {
                        EventLog("The skin on your legs thicken and grow a thin layer of fur. Your toes fuse together, transforming into hooves.")
                    } else if (TF.Counter == 600) {
                        EventLog("Your genitals transform into their equine equivalent.")
                    }
                } else {
                    if (TF.Counter > 1000) {
                        EventLog("Completing the transformation you are now a anthropomorphic equine.");
                        PlayerDay.Race = "equine";
                        TF.Status = false;
                        TF.Counter = 0;
                        GenitalChange("equine");
                    } else if (TF.Counter == 300) {
                        EventLog("The fur that covered your legs continues to spread upwards, soon covering your entire torso.");
                    } else if (TF.Counter == 600) {
                        EventLog("You see your face stretch out, shifting into a horse's muzzle.");
                    }
                }
        }
    }
}
// Start Farm
document.getElementById("EquineTaurTF").addEventListener("click", function () {
    if (player.SecondRace == "centaur") {
        document.getElementById("FarmOwnerText").innerHTML = "You're already a centaur!"
        return;
    }
    if (TF.Status) {
        document.getElementById("FarmOwnerText").innerHTML = "Your body is already ongoing transformation."
        return;
    }
    if (player.Gold >= 250) {
        player.Gold -= 250;
        PotionDrunk("centaur")
        //TfEngine("centaur");
    } else {
        document.getElementById("FarmOwnerText").innerHTML = "Insufficient gold.";
        return;
    }
});
document.getElementById("FarmTitles").addEventListener("mouseover", function (e) {
    document.getElementById("FarmOwnerText").innerHTML = e.target.title;
});
document.getElementById("EquineTF").addEventListener("click", function () {
    if (player.SecondRace == "equine" && player.Race == "equine") {
        document.getElementById("FarmOwnerText").innerHTML = "You already are a equine!"
        return;
    }
    if (TF.Status) {
        document.getElementById("FarmOwnerText").innerHTML = "Your body is already ongoing transformation."
        return;
    }
    if (player.Gold >= 250) {
        player.Gold -= 250;
        TfEngine("equine");
    } else {
        document.getElementById("FarmOwnerText").innerHTML = "Insufficient gold.";
        return;
    }
});
document.getElementById("FarmOwnerLooks").addEventListener("click", function () {
    document.getElementById("FarmOwnerText").innerHTML = "Standing before you, a centaur who introduce himself as Teoivz, looking at him it’s evident he spends many hours working on the farm. His human upper body possess muscle forged from years of work, " +
        "his equine lower body is not one from a race horse but a work horse.<br>Throwing an eye towards his genitals, it’s	hard to guess the exact size his two members retracted inside their penile sheath but it's obvious that they are well capable of stretching a maiden."
});
// End FarmOwner

// The FarmBarn

/*document.getElementById("InfinityMilker").addEventListener("click", function () {
    if (player.Gold >= 7000) {
        player.Gold -= 7000;
        SnowInventoryAdd(ItemDict.Milker, Infinity);
        // Add milker
    } else {
        // You can't afford 
    }
});*/

function FarmBarnFunc() {
    var Buildings = document.getElementById("Buildings")
    while (Buildings.hasChildNodes()) {
        Buildings.removeChild(Buildings.firstChild);
    }
    var div = document.createElement("div");

    if (window.innerHeight > 600) { // No title on small screen
        var h1 = document.createElement("h1");
        var h1text = document.createTextNode("");
        h1.appendChild(h1text);
        div.appendChild(h1);
    }

    var p = document.createElement("p");
    p.classList.add("TextBox");
    div.appendChild(p);

    var input1 = InputButton("Milker500 499g", "Are your breasts constantly leaking? Does it feel like a waste, seeing your milk drip away? Buy today; a portable milker!");
    input1.addEventListener("click", function () {
        if (player.Gold >= 499) {
            player.Gold -= 499;
            SnowInventoryAdd(ItemDict.Milker, 500);
            p.innerHTML = "Added to inventory"
        } else {
            p.innerHTML = "Not enough gold"
        }
    });
    input1.addEventListener("mouseover", function () {
        p.innerHTML = "Are your breasts constantly leaking? Does it feel like a waste, seeing your milk drip away?<br><br> Buy today; a portable milker!"
    });
    div.appendChild(input1);

    var input2 = InputButton("Milk booster 30g", "Can't produce enough milk to feed a baby? Or maybe you want to feed your whole family, or even your town?! Well, this is for your humble (or crazy) needs!")
    input2.addEventListener("click", function () {
        if (player.Gold >= 30) {
            player.Gold -= 30;
            for (var e of player.Boobies) {
                e.MilkRate++;
                if (false) {
                    // if milkrate is over certain value say stuff like wow godly amounts etc...
                }
            }
            p.innerHTML = "Your breasts milk production increases."
        } else {
            p.innerHTML = "Sorry you can't afford this."
        }
    });
    input2.addEventListener("mouseover", function () {
        p.innerHTML = "Can't produce enough milk to feed a baby? Or maybe you want to feed your whole family, or even your town?!<br><br> Well, this is for your humble (or crazy) needs!"
    });
    div.appendChild(input2);

    var input3 = InputButton("Milk stopper 50g", "Sick and tired of your breasts leaving milk spots on your clothes? Just one of these will reduce future 'accidents.' #Note this does not affect lacation rate from pregnancy.")
    input3.addEventListener("click", function () {
        // Lower milkrate
        // if no breast have milkrate stop
        if (player.Gold >= 50) {
            player.Gold -= 50;
            p.innerHTML = ""
            for (var e of player.Boobies) {
                if (e.MilkRate - 1 < 0) {
                    e.MilkRate = 0;
                    p.innerHTML += "Your breasts stops lactating.<br>" //Milk stops
                } else {
                    e.MilkRate--;
                    p.innerHTML = "Your milk production slows.<br>"
                }
                if (false) {
                    // if milkrate is over certain value say stuff like wow gogly amounts etc...
                }
            }
        } else {
            // you are broke
            p.innerHTML = "Sorry you can't afford this."
        }
    })
    input3.addEventListener("mouseover", function () {
        p.innerHTML = "Sick and tired of your breasts leaving milk spots on your clothes? Just one of these will reduce future 'accidents.'<br><br> #Note this does not affect lacation rate from pregnancy."
    })
    div.appendChild(input3);

    if (false) { // TODO
        var DrinkFresh = InputButton("Drink fresh milk", "It's not yours. You think.");
        DrinkFresh.addEventListener("click", function () {
            // Drink milk Maybe fuck a bovine furry? 
            // Get healed + temp boost to hp & will stronger than bar meal
            var a = RandomInt(1, 20);
            if (a > 15) {
                if (player.Int > 20) {
                    if (false) {
                        Partners.FarmOwner.Submit += 1; // ask Bovine to help you dom farmowner
                        // Flags.BovineSometing = true;
                    }
                    // Fuck bovine
                } else {
                    // The horny bovine staddles you before you mangage to figure out what's happening.
                }
            }
        })
        var GetMilked = InputButton("Get milked", "Mooooooooooooo!");
        GetMilked.addEventListener("click", function () {
            // Sell milk(maybe cum to?), this can trigger a event where farmowner tries to fuck you
            // depenent on your stats you can turn it around or get away, if your stats are to weak you get fucked.
            var MilkTotal = 0;
            for (var e of player.Boobies) {
                MilkTotal += e.Milk * 0.9;
                e.Milk = e.Milk * 0.1;
            }
            if (MilkTotal > 0) {
                if (MilkTotal > 10) {
                    var a = RandomInt(1, 20);
                    if (a > 10) {
                        // if (Flags.Bovine) {};
                    }
                }

            } else {

            }
        })
    }

    // TODO add a milking event with farm owner
    /**
     * // Barn Milk Event
    // Let him fuck you
    Partners.FarmOwner.Submit -= 5;
    Partners.FarmOwner.Like += 5;
    // Turn it around if you have enough strength
    Partners.FarmOwner.Submit += 5;
    Partners.FarmOwner.Like -= 5;
    // Get away
    Partners.FarmOwner.Like += 3;
     */

    div.appendChild(LeaveBuilding());
    Buildings.appendChild(div);
    document.getElementById("Buildings").style.display = 'block';
}
    // Start Vore
    document.getElementById("VoreLooks").style.display = 'none';
    document.getElementById("Vore").addEventListener("click", function () {
        Settings.Vore = Settings.Vore ? false : true;
        document.getElementById("VoreLooks").style.display = Settings.Vore ? 'inline-block' : 'none';
        document.getElementById("Vore").value = "Vore " + Settings.Vore;
        if (!player.hasOwnProperty("Vore")) { 
            player.Vore = {
                Level: 0,
                Exp: 0,
                VorePoints: 0,
                VorePerks: {},
                Stomach: [],
                StomachExp: 0,
                TaurStomach: [],
                TaurStomachExp: 0,
                Vagina: [],
                VaginaExp: 0,
                Balls: [],
                BallsExp: 0,
                Anal: [],
                AnalExp: 0,
                Breast: [],
                BreastExp: 0
            }
        }
        if (!Settings.hasOwnProperty("VoreSettings")) {
            Settings.VoreSettings = {
                StomachDigestion: true,
                CumTF: true,
                ChildTF: false,
                VCumDigestion: true,
                MilkTF: true,
                AnalDigestion: true,
                AbsorbEssence: true
            }
        }
    });

    document.getElementById("VorePerks").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'none';
        document.getElementById("VorePerkMenu").style.display = 'block';
        document.getElementById("VorePerkPointsLeft").innerHTML = "You have " + player.Vore.VorePoints + " perk points left.";
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
            document.getElementById("AbsorbEssence").value = "AbsorbEssence +" + player.Vore.VorePerks.AbsorbEssence.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
            document.getElementById("FasterDigestion").value = "Faster digestion +" + player.Vore.VorePerks.FasterDigestion.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
            if (player.Vore.VorePerks.AbsorbStats.Count > 9) {
                document.getElementById("AbsorbStats").style.display = 'none';
            } else {
                document.getElementById("AbsorbStats").value = "Drain Stats +" + player.Vore.VorePerks.AbsorbStats.Count; //Had to shorten value as text got outside button
            }
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) {
            document.getElementById("HigherCapacity").value = "Higher capacity +" + player.Vore.VorePerks.HigherCapacity.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
            document.getElementById("AbsorbHeight").value = "Absorb height +" + player.Vore.VorePerks.AbsorbHeight.Count;
        }
        if (player.Vore.VorePerks.hasOwnProperty("PredatorsMeta")) {
            document.getElementById("PredatorsMeta").value = "Predators meta +" + player.Vore.VorePerks.PredatorsMeta.Count;
        }
        return;
    });

    function VorePerkHandler(perket) {
        player.Vore.VorePoints--;
        if (perket === "AbsorbStats")
            player.Vore.VorePoints -= 9;
        if (player.Vore.VorePerks.hasOwnProperty(perket)) {
            player.Vore.VorePerks[perket].Count++;
        } else {
            player.Vore.VorePerks[perket] = {
                Count: 1
            }
        }
        document.getElementById(perket).value = perket + " +" + player.Vore.VorePerks[perket].Count;
        document.getElementById("VorePerkPointsLeft").innerHTML = "You have " + player.Vore.VorePoints + " perk points left.";
    }
    document.getElementById("AbsorbEssence").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("AbsorbEssence") : false;
    });
    document.getElementById("AbsorbStats").addEventListener("click", function () {
        if (player.Vore.VorePoints > 9) {
            if (!player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                VorePerkHandler("AbsorbStats");
            } else if (player.Vore.VorePerks.AbsorbStats.Count < 10) {
                VorePerkHandler("AbsorbStats");
            }
        } else {
            return;
        }
    });
    document.getElementById("VorePerkMenu").addEventListener("mouseover", function (e) {
        document.getElementById("VorePerkMenuText").innerHTML = e.target.title;
    });
    document.getElementById("FasterDigestion").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("FasterDigestion") : false;
    });
    document.getElementById("HigherCapacity").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("HigherCapacity") : false;
    });
    document.getElementById("AbsorbHeight").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("AbsorbHeight") : false;
    });
    document.getElementById("PredatorsMeta").addEventListener("click", function () {
        player.Vore.VorePoints > 0 ? VorePerkHandler("PredatorsMeta") : false;
    });
    document.getElementById("LeaveVorePerkMenu").addEventListener("click", function () {
        document.getElementById("VoreButtons").style.display = 'grid';
        document.getElementById("VorePerkMenu").style.display = 'none';
    });

    document.getElementById("VoreSettings").addEventListener("click", function () {
        var VoreSettings = document.getElementById("VoreSettingsMenu");
        VoreSettings.style.display = VoreSettings.style.display === 'block' ? 'none' : 'block';
    });
    document.getElementById("AbsorbEssenceSetting").addEventListener("click", function () {
        switch (Settings.VoreSettings.AbsorbEssence) {
            case "Both":
                Settings.VoreSettings.AbsorbEssence = "Femininity";
                break;
            case "Femininity":
                Settings.VoreSettings.AbsorbEssence = "Masculinity";
                break;
            case "Masculinity":
                Settings.VoreSettings.AbsorbEssence = "None";
                break;
            default:
                Settings.VoreSettings.AbsorbEssence = "Both";
                break;
        }
        document.getElementById("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
    });
    document.getElementById("LeaveVore").addEventListener("click", function () {
        document.getElementById("ShowVore").style.display = 'none';
        document.getElementById("VoreAnal").style.display = 'none';
        document.getElementById("VoreBalls").style.display = 'none';
        document.getElementById("VoreBreast").style.display = 'none';
        document.getElementById("VoreVagina").style.display = 'none';
        document.getElementById("VoreStomach").style.display = 'none';
        document.getElementById("VoreButtons").style.display = 'grid';
        DisplayGame();
    });

    function VoreEngine(progress = 0.001) {
        var VoreMaxExp = 30 + Math.pow(1.05, player.Vore.Level - 1);
        if (player.Vore.Exp >= VoreMaxExp) {
            player.Vore.Exp = player.Vore.Exp - VoreMaxExp;
            player.Vore.Level++;
            player.Vore.VorePoints++;
        }
        document.getElementById("VoreLevel").innerHTML = player.Vore.Level;
        document.getElementById("VoreLevel").style.width = 100 * (player.Vore.Exp / VoreMaxExp) + "%";
        document.getElementById("ShowStomach").innerHTML = "Stomach<br>" + KgToPound(MaxStomachCapacity() - StomachCapacity()) + " prey <br> " + KgToPound(MaxStomachCapacity()) + " Max";
        document.getElementById("ShowVagina").innerHTML = "Pussy<br>" + KgToPound(MaxVaginaCapacity() - VaginaCapacity()) + " prey <br> " + KgToPound(MaxVaginaCapacity()) + " Max";
        document.getElementById("ShowBreast").innerHTML = "Breast<br>" + KgToPound(MaxBreastCapacity() - BreastCapacity()) + " prey <br> " + KgToPound(MaxBreastCapacity()) + " Max";
        document.getElementById("ShowBalls").innerHTML = "Balls<br>" + KgToPound(MaxBallsCapacity() - BallsCapacity()) + " prey <br> " + KgToPound(MaxBallsCapacity()) + " Max";
        document.getElementById("ShowAnal").innerHTML = "Anal<br>" + KgToPound(MaxAnalCapacity() - AnalCapacity()) + " prey <br> " + KgToPound(MaxAnalCapacity()) + " Max";
        document.getElementById("VorePerks").style.display = player.Vore.VorePoints > 0 ? 'inline-block' : 'none';

        // Digestion perk
        var digestionCount = 1;
        if (player.Vore.VorePerks.hasOwnProperty("FasterDigestion")) {
            digestionCount += player.Vore.VorePerks.FasterDigestion.Count;
        }

        // Stomach
        var content = 0;
        for (var e of player.Vore.Stomach) {
            content += e.Weight;
        }
        while (content > MaxStomachCapacity()) {
            enemies.push(player.Vore.Stomach[player.Vore.Stomach.length - 1]);
            player.Vore.Stomach.pop();
            content = 0;
            for (var e of player.Vore.Stomach) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxStomachCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // stomach fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.StomachDigestion) {
            player.Vore.StomachExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.StomachExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            if (!player.Vore.Stomach[e].hasOwnProperty("LastName")) {
                player.Vore.Stomach[e].LastName = "";
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Masc)
                        player.Vore.Stomach[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Femi)
                        player.Vore.Stomach[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Masc)
                        player.Vore.Stomach[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Stomach[e].Femi)
                        player.Vore.Stomach[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Stomach[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Stomach[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.StomachDigestion) {
                player.Vore.Stomach[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Stomach[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                player.Fat += progress / 2 * digestionCount;

                if (player.Vore.Stomach[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Stomach[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Stomach[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Stomach[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Stomach[e].Will / snowA);
                        player.End += Math.round(player.Vore.Stomach[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Stomach[e].SexSkill / snowA);
                    }
                    EventLog("You have digested " + player.Vore.Stomach[e].Name + " " + player.Vore.Stomach[e].Race + " " + player.Vore.Stomach[e].FirstName + " " + player.Vore.Stomach[e].LastName);
                    player.Vore.Stomach.splice(e, 1);
                }
            }
        }
        // Vagina
        var content = 0;
        for (var e of player.Vore.Vagina) {
            content += e.Weight;
        }
        while (content > MaxVaginaCapacity()) {
            enemies.push(player.Vore.Vagina[player.Vore.Vagina.length - 1]);
            player.Vore.Vagina.pop();
            content = 0;
            for (var e of player.Vore.Vagina) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxVaginaCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Vagina fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.VCumDigestion) {
            player.Vore.VaginaExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.VaginaExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Masc);
                        player.Vore.Vagina[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Femi);
                        player.Vore.Vagina[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Masc);
                        player.Vore.Vagina[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Vagina[e].Femi);
                        player.Vore.Vagina[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Vagina[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Vagina[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.VCumDigestion) {
                player.Vore.Vagina[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Vagina[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                if (player.Vore.Vagina[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Vagina[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Vagina[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Vagina[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Vagina[e].Will / snowA);
                        player.End += Math.round(player.Vore.Vagina[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Vagina[e].SexSkill / snowA);
                    }
                    EventLog("The only trace left of " + player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].LastName + " is a trail of pussy discharge traveling down your legs.");
                    player.Vore.Vagina.splice(e, 1);
                }
            } else if (Settings.VoreSettings.ChildTF) {
                if (!player.Vore.Vagina[e].hasOwnProperty("Counter")) {
                    player.Vore.Vagina[e].Counter = 0;
                } else {
                    player.Vore.Vagina[e].Counter++;
                    if (player.Vore.Vagina[e].Counter > 1000) {
                        var Baby = {
                            BabyAge: 0,
                            BabyRace: player.Vore.Vagina[e].Race
                        }
                        player.Pregnant.Status = true;
                        player.Pregnant.Babies.push(Baby);
                        EventLog(player.Vore.Vagina[e].Name + " " + player.Vore.Vagina[e].Race + " " + player.Vore.Vagina[e].FirstName + " " + player.Vore.Vagina[e].LastName + " have been reduced to infant who now rests in your womb.")
                        player.Vore.Vagina.splice(e, 1);
                    }
                }
            }
        }
        // Breast
        var content = 0;
        for (var e of player.Vore.Breast) {
            content += e.Weight;
        }
        while (content > MaxBreastCapacity()) {
            enemies.push(player.Vore.Breast[player.Vore.Breast.length - 1]);
            player.Vore.Breast.pop();
            content = 0;
            for (var e of player.Vore.Breast) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxBreastCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Breast fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.MilkTF) {
            player.Vore.BreastExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.BreastExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Masc)
                        player.Vore.Breast[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Femi)
                        player.Vore.Breast[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Masc)
                        player.Vore.Breast[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Breast[e].Femi)
                        player.Vore.Breast[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Breast[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Breast[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.MilkTF) {
                player.Vore.Breast[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Breast[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                for (var b = 0; b < player.Boobies.length; b++) {
                    if (player.Boobies[b].Milk < player.Boobies[b].MilkMax) {
                        player.Boobies[b].Milk += progress * digestionCount;
                    }
                }
                if (player.Vore.Breast[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Breast[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Breast[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Breast[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Breast[e].Will / snowA);
                        player.End += Math.round(player.Vore.Breast[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Breast[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing but milk left of " + player.Vore.Breast[e].Name + " " + player.Vore.Breast[e].Race + " " + player.Vore.Breast[e].FirstName + " " + player.Vore.Breast[e].LastName);
                    player.Vore.Breast.splice(e, 1);
                }
            }
        }
        // Balls
        var content = 0;
        for (var e of player.Vore.Balls) {
            content += e.Weight;
        }
        while (content > MaxBallsCapacity()) {
            enemies.push(player.Vore.Balls[player.Vore.Balls.length - 1]);
            player.Vore.Balls.pop();
            content = 0;
            for (var e of player.Vore.Balls) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxBallsCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Balls fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.CumTF) {
            player.Vore.BallsExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.BallsExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Masc)
                        player.Vore.Balls[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Femi)
                        player.Vore.Balls[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Masc)
                        player.Vore.Balls[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Balls[e].Femi)
                        player.Vore.Balls[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Balls[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Balls[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }

            }
            if (Settings.VoreSettings.CumTF) {
                player.Vore.Balls[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Balls[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                for (var b = 0; b < player.Balls.length; b++) {
                    if (player.Balls[b].Cum < player.Balls[b].CumMax) {
                        player.Balls[b].Cum += 100 * progress * digestionCount;
                    }
                }
                if (player.Vore.Balls[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Balls[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Balls[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Balls[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Balls[e].Will / snowA);
                        player.End += Math.round(player.Vore.Balls[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Balls[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing but cum left of the " + player.Vore.Balls[e].Name + " " + player.Vore.Balls[e].Race + " " + player.Vore.Balls[e].FirstName + " " + player.Vore.Balls[e].LastName);
                    player.Vore.Balls.splice(e, 1);
                    return;
                }
            }
        }
        // Anal
        var content = 0;
        for (var e of player.Vore.Anal) {
            content += e.Weight;
        }
        while (content > MaxAnalCapacity()) {
            enemies.push(player.Vore.Anal[player.Vore.Anal.length - 1]);
            player.Vore.Anal.pop();
            content = 0;
            for (var e of player.Vore.Anal) {
                content += e.Weight;
            }
        }
        var fullness = content / MaxAnalCapacity() || 0.1; // prevent NaN if maxCapacity is 0
        // Anal fullness should be able to vary between 0 and 2
        if (Settings.VoreSettings.AnalDigestion) {
            player.Vore.AnalExp += fullness * digestionCount * progress;
            player.Vore.Exp += fullness * digestionCount * progress;
        } else {
            player.Vore.AnalExp += 0.5 * fullness * digestionCount * progress;
            player.Vore.Exp += 0.5 * fullness * digestionCount * progress;
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbEssence")) {
                switch (Settings.VoreSettings.AbsorbEssence) {
                    case "None":
                        break;
                    case "Masculinity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Masc)
                        player.Vore.Anal[e].Masc -= shift;
                        player.Masc += shift;
                        break;
                    case "Femininity":
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Femi)
                        player.Vore.Anal[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                    default:
                        var shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Masc)
                        player.Vore.Anal[e].Masc -= shift;
                        player.Masc += shift;
                        shift = Math.min(player.Vore.VorePerks.AbsorbEssence.Count * progress, player.Vore.Anal[e].Femi)
                        player.Vore.Anal[e].Femi -= shift;
                        player.Femi += shift;
                        break;
                }
            }
            if (player.Vore.VorePerks.hasOwnProperty("AbsorbHeight")) {
                if (player.Height < 160 + player.Vore.VorePerks.AbsorbHeight.Count * 20 && player.Vore.Anal[e].Height > 1) {
                    player.Height += player.Vore.VorePerks.AbsorbHeight.Count * progress;
                    player.Vore.Anal[e].Height -= player.Vore.VorePerks.AbsorbHeight.Count * progress;
                }
            }
            if (Settings.VoreSettings.AnalDigestion) {
                player.Vore.Anal[e].Weight -= progress * digestionCount;
                for (var q = 0; q < player.RaceEssence.length; q++) {
                    if (player.RaceEssence[q].Race === player.Vore.Anal[e].Race) {
                        player.RaceEssence[q].amount += progress * digestionCount;
                        break;
                    } else if (q + 1 == player.RaceEssence.length) {}
                }
                player.Fat += progress / 2 * digestionCount;
                if (player.Vore.Anal[e].Weight < 0) {
                    if (player.Vore.VorePerks.hasOwnProperty("AbsorbStats")) {
                        var snowA = Math.max(10 - player.Vore.VorePerks.AbsorbStats.Count, 1);
                        player.Str += Math.round(player.Vore.Anal[e].Str / snowA);
                        player.Int += Math.round(player.Vore.Anal[e].Int / snowA);
                        player.Charm += Math.round(player.Vore.Anal[e].Charm / snowA);
                        player.Will += Math.round(player.Vore.Anal[e].Will / snowA);
                        player.End += Math.round(player.Vore.Anal[e].End / snowA);
                        player.SexSkill += Math.round(player.Vore.Anal[e].SexSkill / snowA);
                    }
                    EventLog("There is nothing left of the " + player.Vore.Anal[e].Name + " " + player.Vore.Anal[e].Race + " " + player.Vore.Anal[e].FirstName + " " + player.Vore.Anal[e].LastName);
                    player.Vore.Anal.splice(e, 1);
                }
            }
        }
    }

    function StomachCapacity() {
        var capacity = player.Height / 3
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        for (var e = 0; e < player.Vore.Stomach.length; e++) {
            sub += player.Vore.Stomach[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxStomachCapacity() {
        var capacity = player.Height / 3
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.StomachExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function VaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Pussies.length; e++) {
            capacity += player.Pussies[e].Size
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.VaginaExp / 100;
        }
        for (var e = 0; e < player.Vore.Vagina.length; e++) {
            sub += player.Vore.Vagina[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxVaginaCapacity() {
        if (player.Pussies.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Pussies.length; e++) {
            capacity += player.Pussies[e].Size
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.VaginaExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function BreastCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Boobies.length; e++) {
            capacity += player.Boobies[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BreastExp / 100;
        }
        for (var e = 0; e < player.Vore.Breast.length; e++) {
            sub += player.Vore.Breast[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxBreastCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Boobies.length; e++) {
            capacity += player.Boobies[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BreastExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function BallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            capacity += player.Balls[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BallsExp / 100;
        }
        for (var e = 0; e < player.Vore.Balls.length; e++) {
            sub += player.Vore.Balls[e].Weight;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus - sub;
    }

    function MaxBallsCapacity() {
        if (player.Balls.length < 1) {
            return 0;
        }
        var capacity = 0;
        for (var e = 0; e < player.Balls.length; e++) {
            capacity += player.Balls[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.BallsExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }

    function AnalCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Anal.length; e++) {
            capacity += player.Anal[e].Size;
        }
        var sub = 0;
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.AnalExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        for (var e = 0; e < player.Vore.Anal.length; e++) {
            sub += player.Vore.Anal[e].Weight;
        }
        return capacity * bonus - sub;
    }

    function MaxAnalCapacity() {
        var capacity = 0;
        for (var e = 0; e < player.Anal.length; e++) {
            capacity += player.Anal[e].Size;
        }
        if (player.hasOwnProperty("Vore")) {
            var bonus = 1 + player.Vore.AnalExp / 100;
        }
        if (player.Vore.VorePerks.hasOwnProperty("HigherCapacity")) { //Flat bonus
            capacity += 20;
            bonus += 0.1 * (player.Vore.VorePerks.HigherCapacity.Count - 1);
        }
        return capacity * bonus;
    }
    // End vore
 function VoreActionsOralVore () {
    if (enemies[EnemyIndex].Weight < StomachCapacity()) {
        if (Settings.ImgPack) {
            ImgChose(player, "OralVore", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
        player.Vore.Stomach.push(enemies[EnemyIndex]);
        enemies.splice(EnemyIndex, 1);
        document.getElementById("SexText").innerHTML = "You walk up to your foe with a primal hunger in your abdomen. Your foe is still groggy from the beating you gave them, will fulfill your stomach's desire." +
            " You swiftly grab their head with your hands and bring their face to yours. They grunt, expecting a make-out session, only for their eyes to widen as your mouth does the same. You take in their head in one motion and " +
            "pin their arms to their waist, holding them in place. You lick their face, enjoying their taste, as you lean forward, pushing their head and neck into your greedy throat.<br><br> Loud gulping noises can be heard as you stretch your mouth even further " +
            "and take in their shoulders. Your muscles strain and bulge as you lift your meal off the ground, suspending them in the air, allowing their torso to slide down into your stomach, leaving only their weakly-flailing legs outside." +
            " Your stomach bulges as they enter your guts, which give a rumble of approval and anticipation for the rest of its meal. Your hands make their way up to their calves as you grip tightly and give a hard shove, pushing them in to their ankles." +
            "<br><br>You open wide and let their feet slide in, your jaws snapping shut as your food is forced to accept its fate. Your filled stomach stretches and heaves as your prey struggles and pushes in futile attempts to free itself.";
        if (StomachCapacity() / MaxStomachCapacity() > 0.5) {
            document.getElementById("SexText").innerHTML += " You struggle to get back to your feet, your distended stomach sagging heavily with its weight. You wince in discomfort, walking bow-legged for a little to handle its weight.";
        }
        HideVore();
    } else {
        document.getElementById("SexText").innerHTML = "You cannot fit more into your stomach!";
    }
    return;
};
function VoreActionsUnbirth () {
    if (enemies[EnemyIndex].Weight < VaginaCapacity()) {
        if (Settings.ImgPack) {
            ImgChose(player, "Unbirth", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
        player.Vore.Vagina.push(enemies[EnemyIndex]);
        enemies.splice(EnemyIndex, 1);
        document.getElementById("SexText").innerHTML = "Grabbing your opponent, you shove into your pussy!";
        HideVore();
    } else {
        document.getElementById("SexText").innerHTML = "You cannot fit more into your vagina!";
    }
    return;
};
function VoreActionsCockVore () {
    if (enemies[EnemyIndex].Weight < BallsCapacity()) {
        if (Settings.ImgPack) {
            ImgChose(player, "CockVore", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
        player.Vore.Balls.push(enemies[EnemyIndex]);
        enemies.splice(EnemyIndex, 1);
        if (player.SecondRace !== "centaur") { // Isn't it !=
            document.getElementById("SexText").innerHTML = "Your confidently stride up to your opponent, looking at your next meal's form as your reach for your waist. They bend their head forward, and aren't surprised when they are greeted with your erect cock." +
                " They open their mouth to start sucking, only for your dick to stretch wide as well. Before they have time to react, you thrust forward, quickly enveloping their head within your dick. You use your hands to squeeze the newest bulge in your member as you eagerly thrust around your foe, slowly forcing them deeper with each hump." +
                " <br><br>Your breathing deepens as their shoulders begin their journey to your sac, stretching your dick wide to accommodate its food. Both of your hands reach around your massively-distended dick as you rub over the bulge its food is making." +
                " Your sac churns audibly with hunger for its meal, salivating precum to speed up your foe's descent. Your massaging actions causes squelching sounds as your now-massive member greedily sucks in their waist." +
                " Having recovered slightly from their initial shock they frantically wiggle, causing their body to twist and squirm within your member, their struggles bringing you waves of pleasure as you shiver from their protests. <br><br>You lift your cock with both hands, giving it long, slow strokes to speed up its meal." + // Both hands; your enemy's too heavy for one arm still
                " You sigh, giving soft humps as all that remains of your foe is a bulge in your shaft, sliding down. Loud sloshing sounds can be heard as your cock's recent meal ends its journey and is deposited in your sac. Your nuts heave and drag against the floor as you haul your soon-to-be load off with you.";
        } else {
            document.getElementById("SexText").innerHTML = "Seeing your opponent lying there defeated gives you an idea; your cock stiffening in anticipation as you make your way to your soon-to-be prey. Your foe looks up from their position and jumps from your large equine form blocking out the sun." +
                " Standing over your foe you convey your desires as your cock makes a loud 'thwap' against your stomach. Your opponent gets the idea, slowly approaching your shaft(s) and hesitantly stretching their hands forward." +
                "<br><br> Sensing their hesitation, you made a deafening stomp with your hooves, causing your foe to quickly stroke your dick. You pull your hips back away from your foe, confusing their expectations - they thought you wanted a simple blowjob." +
                " An excited whip of your tail and a small grunt of dominance are the only signs your prey receive - you make a single thrust at your opponent’s head, your equine shaft hungrily grabbing them up to their chest." +
                " You instinctively snort as you claim your foe with your cock, its muscles sucking on their form, as if tasting them. Desperate for more, you flex your groin with immense strength and pull your prey in up to their crotch." +
                "<br><br> Gasps of nerve-wracking pleasure escape you as your prey begins its fruitless struggles inside your monstrous shaft. Not wanting to risk an early orgasm (and releasing them), you repeatedly flex your cock, causing it to beat your meal into submission against your stomach." +
                " Pleased with your display of power over your meal, you pull in their legs with little effort and seal your cock head around their feet. You sigh in relief as you feel the rest of your prey deposited in your sac. Feeling sated, you make your way back to the road, your nuts sagging heavily between your legs."
        }
        HideVore();
    } else {
        document.getElementById("SexText").innerHTML = "You can't fit any more into your balls!";
    }
    return;
};
 function VoreActionsBreastVore () {
    if (enemies[EnemyIndex].Weight < BreastCapacity()) {
        if (Settings.ImgPack) {
            ImgChose(player, "BreastVore", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
        player.Vore.Breast.push(enemies[EnemyIndex]);
        enemies.splice(EnemyIndex, 1);
        var i = "left";
        if (Math.random() > 0.5)
            i = "right";
        document.getElementById("SexText").innerHTML = "Grabbing your opponent, you shove them into your " + i + " nipple.";
        HideVore();
    } else {
        document.getElementById("SexText").innerHTML = "You cannot fit them into your breasts!";
    }
    return;
};
function VoreActionsAnalVore () {
    if (enemies[EnemyIndex].Weight < AnalCapacity() + 100) {
        if (Settings.ImgPack) {
            ImgChose(player, "AnalVore", enemies[EnemyIndex]);
        }
        enemies[EnemyIndex].StartWeight = enemies[EnemyIndex].Weight;
        player.Vore.Anal.push(enemies[EnemyIndex]);
        enemies.splice(EnemyIndex, 1);
        if (player.SecondRace !== "centaur") {
            document.getElementById("SexText").innerHTML = "Seeing your foe fall, you eagerly make your way up to them as you unbutton your pants and undergarments. Your foe sighs as they imagine what you’re going to do next. " +
                "You turn your body around and lower your ass cheeks to their face. They grab your ass with their hands and bring their mouth to your hole, seeing no other option. Your alternative plan starts as you push your ass forcefully against their face." +
                " Your foe gasps in surprise as your hole touches their nose and stretches, enveloping their head.<br><br> Muffled protests come from your waist as they instinctively push against your cheeks, attempting to free themselves." +
                " You squat down and grunt as your rectum pulls hard, forcing your meal up to their chest. As their shoulders get pulled in, their arms can't push against your ass, making it easier to pull them in." +
                " Your wince as your food makes its way through your gut, stretching it as you pull them in.<br><br> You notice that only their legs are left; you grin and straighten your back, using their limbs as a pseudo-chair." +
                " You bounce your hips, hammering them further into your bowels. Your cheeks make contact with the ground as they hungrily shove the last of your foe into your depths." +
                " Rough shoves and struggles in your gut are all that is left of them as your gut conforms and kneads its meal.";
        } else {
            document.getElementById("SexText").innerHTML = "As your foe crumbles from your back hooves' last kick, you decide to keep your back turned and slowly back into them."+
            " Rubbing their head from the final blow, your opponent has only a second to notice your large equine rear descending on them, trapping them in darkness. Rough grunting and the sounds of squeezing accompany this surprise as you lift your foe up to their chest with your twisted strength."+
            "<br><br> Your tail flicks upward sharply with each contraction of your anal muscles, your ass feasting upon the poor soul trapped inside. The impressive display of control you have over your rear continues as your prey suddenly disappears up to their waist into your bowels."+
            " Pleasurable struggles are given to you from inside your equine half as your conquest twists and pushes your sensitive walls, encouraging you to finish your meal.<br><br> Not wanting to disappoint your gut, you make one last effort to envelop your foe with your rectum."+
            " With immense force, their legs are pulled in, leaving their ankles and feet squeezed harshly by your ass. With a loud \"schluck\" their ankles are pulled in, their feet following close behind."+
            " A satisfied sigh leaves your mouth, and your ass, as you wiggle your hips in victory over your foe. You head back on your journey, your intestines beginning their work on the fresh meat you've conquered."
        }
        HideVore();
    } else {
        document.getElementById("SexText").innerHTML = "You cannot fit any more into your bowels!";
    }
    return;
};

function HideVore() {
    AfterBattleButtons(false, true)
}
function PreyButton(ps, from, index) {
    var color;
    switch (CheckGender(ps)) {
        case "female":
            color = "Pink";
            break;
        case "male":
            color = "Blue";
            break;
        case "hermaphrodite":
            color = "Purple";
            break;
        case "doll":
            color = "Beige";
            break;
    }
    return "<button type=\"button\" class=\"" + color + "\" onclick=\"Show" + from + "Prey(" + index + ")\">" + ps.Name + " " + ps.Race +
        " <br> " + Pronoun(CheckGender(ps)) + "<br><br>Height:" + CmToInch(ps.Height) + "<br>Weight:" +
        KgToPound(ps.Weight) + "</button>";
}

function ShowPrey(where) {
    document.getElementById(where + "Content").style.display = 'none';
    document.getElementById(where + "Prey").style.display = 'block';
    document.getElementById(where + "Leave").style.display = 'none';
    document.getElementById("LeaveVore").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'inline-block';
    document.getElementById("regurgitate" + where).style.display = 'inline-block';
}

function HidePrey(where) {
    document.getElementById(where + "Content").style.display = 'grid';
    document.getElementById(where + "Prey").style.display = 'none';
    document.getElementById(where + "Leave").style.display = 'inline-block';
    document.getElementById("LeaveVore").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'none';
    document.getElementById("regurgitate" + where).style.display = 'none';
}

function ShowAnalPrey(e) {
    var Prey = player.Vore.Anal[e];
    PreyIndex = e;
    ShowPrey("Anal")
    document.getElementById("AnalPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
    document.getElementById("AnalDigestion").style.display = 'none';
};

document.getElementById("LeaveAnalPrey").addEventListener("click", function () {
    HidePrey("Anal")
    document.getElementById("AnalDigestion").style.display = 'inline-block';
});
document.getElementById("regurgitateAnal").addEventListener("click", function () {
    var who = player.Vore.Anal[PreyIndex];
    enemies.push(who);
    player.Vore.Anal.splice(PreyIndex, 1);
    HidePrey("Anal");
    document.getElementById("AnalDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Anal.length; e++) {
        var ps = player.Vore.Anal[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Anal", e);
    }
    document.getElementById("AnalContent").innerHTML = food;
});

function ShowBallsPrey(e) {
    var Prey = player.Vore.Balls[e];
    PreyIndex = e;
    ShowPrey("Balls");
    document.getElementById("CumDigestion").style.display = 'none';
    document.getElementById("BallsPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};

document.getElementById("LeaveBallsPrey").addEventListener("click", function () {
    HidePrey("Balls")
    document.getElementById("CumDigestion").style.display = 'inline-block';
});
document.getElementById("regurgitateBalls").addEventListener("click", function () {
    var who = player.Vore.Balls[PreyIndex];
    enemies.push(who);
    player.Vore.Balls.splice(PreyIndex, 1);
    HidePrey("Balls");
    document.getElementById("CumDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Balls.length; e++) {
        var ps = player.Vore.Balls[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Balls", e);
    }
    document.getElementById("BallsContent").innerHTML = food;
});

function ShowVaginaPrey(e) {
    var Prey = player.Vore.Vagina[e];
    PreyIndex = e;
    ShowPrey("Vagina");
    document.getElementById("VCumDigestion").style.display = 'none';
    document.getElementById("ChildTF").style.display = 'none';
    document.getElementById("VaginaPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;

    document.getElementById("")
};

document.getElementById("LeaveVaginaPrey").addEventListener("click", function () {
    HidePrey("Vagina");
    document.getElementById("VCumDigestion").style.display = 'inline-block';
    document.getElementById("ChildTF").style.display = 'inline-block';
});
document.getElementById("regurgitateVagina").addEventListener("click", function () {
    var who = player.Vore.Vagina[PreyIndex];
    enemies.push(who);
    player.Vore.Vagina.splice(PreyIndex, 1);
    HidePrey("Vagina");
    document.getElementById("VCumDigestion").style.display = 'inline-block';
    document.getElementById("ChildTF").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Vagina.length; e++) {
        var ps = player.Vore.Vagina[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Vagina", e);
    }
    document.getElementById("VaginaContent").innerHTML = food;
});


function ShowBreastPrey(e) {
    var Prey = player.Vore.Breast[e];
    PreyIndex = e;
    ShowPrey("Breast");
    document.getElementById("MilkTransformation").style.display = 'none';
    document.getElementById("BreastPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};

document.getElementById("LeaveBreastPrey").addEventListener("click", function () {
    HidePrey("Breast");
    document.getElementById("MilkTransformation").style.display = 'inline-block';
});
document.getElementById("regurgitateBreast").addEventListener("click", function () {
    var who = player.Vore.Breast[PreyIndex];
    enemies.push(who);
    player.Vore.Breast.splice(PreyIndex, 1);
    HidePrey("Breast");
    document.getElementById("MilkTransformation").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Breast.length; e++) {
        var ps = player.Vore.Breast[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Breast", e);
    }
    document.getElementById("BreastContent").innerHTML = food;
});


var PreyIndex;

function ShowStomachPrey(e) {
    var Prey = player.Vore.Stomach[e];
    PreyIndex = e;
    ShowPrey("Stomach");
    document.getElementById("StomachDigestion").style.display = 'none';
    document.getElementById("StomachPrey").innerHTML = Prey.FirstName + " " + Prey.LastName;
};
document.getElementById("LeaveStomachPrey").addEventListener("click", function () {
    HidePrey("Stomach");
    document.getElementById("StomachDigestion").style.display = 'inline-block';
});
document.getElementById("regurgitateStomach").addEventListener("click", function () {
    var who = player.Vore.Stomach[PreyIndex];
    enemies.push(who);
    player.Vore.Stomach.splice(PreyIndex, 1);
    HidePrey("Stomach");
    document.getElementById("StomachDigestion").style.display = 'inline-block';
    var food = "";
    for (var e = 0; e < player.Vore.Stomach.length; e++) {
        var ps = player.Vore.Stomach[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Stomach", e);
    }
    document.getElementById("StomachContent").innerHTML = food;
});


document.getElementById("VoreLooks").addEventListener("click", function () {
    DisplayNone();
    document.getElementById("ShowVore").style.display = 'block';
    document.getElementById("VorePerkMenu").style.display = 'none';
    document.getElementById("AbsorbEssenceSetting").value = "Absorb Essence " + Settings.VoreSettings.AbsorbEssence;
});

function DisplayNoneVore(where) {
    document.getElementById("VoreSettings").style.display = 'none';
    document.getElementById("VoreButtons").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'none';
    document.getElementById("regurgitate" + where).style.display = 'none';
    document.getElementById("LeaveVore").style.display = 'none';
    document.getElementById("Leave" + where + "Prey").style.display = 'none';
    document.getElementById("regurgitate" + where).style.display = 'none';
}
document.getElementById("ShowStomach").addEventListener("click", function () {
    DisplayNoneVore("Stomach");
    document.getElementById("VoreStomach").style.display = 'block';
    document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
    var food = "";
    for (var e = 0; e < player.Vore.Stomach.length; e++) {
        var ps = player.Vore.Stomach[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Stomach", e);
    }
    document.getElementById("StomachContent").innerHTML = food;

});
document.getElementById("StomachDigestion").addEventListener("click", function () {
    Settings.VoreSettings.StomachDigestion = !Settings.VoreSettings.StomachDigestion
    document.getElementById("StomachDigestion").value = "Stomach digestion " + Settings.VoreSettings.StomachDigestion;
});
document.getElementById("ShowVagina").addEventListener("click", function () {
    DisplayNoneVore("Vagina")
    document.getElementById("VoreVagina").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Vagina.length; e++) {
        var ps = player.Vore.Vagina[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Vagina", e);
    }
    document.getElementById("VaginaContent").innerHTML = food;
    document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
});
document.getElementById("ChildTF").addEventListener("click", function () {
    if (Settings.VoreSettings.ChildTF) {
        Settings.VoreSettings.ChildTF = false;
    } else {
        Settings.VoreSettings.ChildTF = true;
        Settings.VoreSettings.VCumDigestion = false;
    }
    document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
});
document.getElementById("VCumDigestion").addEventListener("click", function () {
    if (Settings.VoreSettings.VCumDigestion) {
        Settings.VoreSettings.VCumDigestion = false;
    } else {
        Settings.VoreSettings.ChildTF = false;
        Settings.VoreSettings.VCumDigestion = true;
    }
    document.getElementById("ChildTF").value = "Child tf/Age reduc " + Settings.VoreSettings.ChildTF;
    document.getElementById("VCumDigestion").value = "Digestion " + Settings.VoreSettings.VCumDigestion;
})

document.getElementById("ShowBreast").addEventListener("click", function () {
    document.getElementById("VoreBreast").style.display = 'block';
    DisplayNoneVore("Breast")
    var food = "";
    for (var e = 0; e < player.Vore.Breast.length; e++) {
        var ps = player.Vore.Breast[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Breast", e);
    }
    document.getElementById("BreastContent").innerHTML = food;
    document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
});
document.getElementById("MilkTransformation").addEventListener("click", function () {
    Settings.VoreSettings.MilkTF = !Settings.VoreSettings.MilkTF;
    document.getElementById("MilkTransformation").value = "Milk transformation " + Settings.VoreSettings.MilkTF;
});
document.getElementById("ShowBalls").addEventListener("click", function () {
    DisplayNoneVore("Balls")
    document.getElementById("VoreBalls").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Balls.length; e++) {
        var ps = player.Vore.Balls[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Balls", e);
    }
    document.getElementById("BallsContent").innerHTML = food;
    document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
});
document.getElementById("CumDigestion").addEventListener("click", function () {
    Settings.VoreSettings.CumTF = !Settings.VoreSettings.CumTF;
    document.getElementById("CumDigestion").value = "Cum transformation " + Settings.VoreSettings.CumTF;
});
document.getElementById("ShowAnal").addEventListener("click", function () {
    DisplayNoneVore("Anal")
    document.getElementById("VoreAnal").style.display = 'block';
    var food = "";
    for (var e = 0; e < player.Vore.Anal.length; e++) {
        var ps = player.Vore.Anal[e];
        EssenceCheck(ps);
        food += PreyButton(ps, "Anal", e);
    }
    document.getElementById("AnalContent").innerHTML = food;
    document.getElementById("AnalDigestion").value = "Anal digestion " + Settings.VoreSettings.AnalDigestion;
});
document.getElementById("AnalDigestion").addEventListener("click", function () {
    Settings.VoreSettings.AnalDigestion = !Settings.VoreSettings.AnalDigestion;
    document.getElementById("AnalDigestion").value = "Anal Digestion " + Settings.VoreSettings.AnalDigestion;
});

function LeavePreyMenu() {
    document.getElementById("VoreButtons").style.display = 'grid';
    document.getElementById("LeaveVore").style.display = 'inline-block';
    document.getElementById("VoreSettings").style.display = 'inline-block';
}

document.getElementById("StomachLeave").addEventListener("click", function () {
    document.getElementById("VoreStomach").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("VaginaLeave").addEventListener("click", function () {
    document.getElementById("VoreVagina").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("BreastLeave").addEventListener("click", function () {
    document.getElementById("VoreBreast").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("BallsLeave").addEventListener("click", function () {
    document.getElementById("VoreBalls").style.display = 'none';
    LeavePreyMenu();
});
document.getElementById("AnalLeave").addEventListener("click", function () {
    document.getElementById("VoreAnal").style.display = 'none';
    LeavePreyMenu();
});
function WinBattle() {
    var ee = enemies[EnemyIndex];
    player.Exp += ee.Exp;
    player.Gold += ee.Gold;
    ee.SessionOrgasm = 0;
    player.SessionOrgasm = 0;
    CombatQuests(ee);
    //WinEnemyChanges(ee);
    DropSystem(ee);
    document.getElementById("Encounter").style.display = 'none';
    if (Settings.Skip) {
        DisplayGame();
    } else if (false) { // Replace with ee.Name === "specific name"
        document.getElementById("DungeonSystem").style.display = 'block';
        document.getElementById("DungeonText").innerHTML = "What should you do with her?";
        document.getElementById("DungeonButtons").innerHTML = "<input type=\"button\" id=\"Partner\" value=\"Take her as a equal.\">" +
            "<input type=\"button\" id=\"MakeSubmit\" value=\"Make her understand her place.\" >";
    } else {
        SetupSex(ee);
    }
}

function SetupSex(ee) {
    document.getElementById("SexText").innerHTML = HeightSystem(player, ee);
    document.getElementById("AfterBattle").style.display = 'grid';
    document.getElementById("SexButtons").style.display = 'grid';
    if (Settings.ImgPack) {
        document.getElementById("AfterBattle").classList.remove("AfterBattle");
        document.getElementById("AfterBattle").classList.add("AfterBattleImg");
        document.getElementById("MyImg").style.display = 'block';

    } else {
        document.getElementById("AfterBattle").classList.add("AfterBattle");
        document.getElementById("AfterBattle").classList.remove("AfterBattleImg");
        document.getElementById("MyImg").style.display = 'none';
    }
    CheckArousal();
    if (ee.Name === "Feral") {
        AfterBattleButtons(false);
    } else {
        AfterBattleButtons();
    }
}

// Handles quests related to combat
function CombatQuests(ee) {
    for (var q of player.Quests) {
        if (q.Name === "ElfHunt") {
            if (ee.Race === "Elf") {
                q.Count++;
                if (q.Count >= 3) {
                    q.Completed = true;
                    if (q.Count % 3 === 0) {
                        q.hasOwnProperty("Tier") ? q.Tier++ : q.Tier = 1;
                    }
                }
            }
        }
        if (q.Name === "BanditLord" && q.Completed === false) {
            if (ee.Name === "Banditlord") {
                q.Completed = true;
            }
        }
    }
}

// Some enemies change when you win
function WinEnemyChanges(ee) {
    if (ee.Race === "Dragon") {
        ee.Race = "Anthro dragon";
    }
}