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
    VoreSettings: {
        StomachDigestion: true,
        CumTF: true,
        ChildTF: false,
        VCumDigestion: true,
        MilkTF: true,
        AnalDigestion: true,
        AbsorbEssence: true,
        AbsorbRace: true
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
    HighLightDoors: false,
    PlayerSpriteEnable: false
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

function PlayerImageLoad(arr, callback) { // Preload images to stop flickering
    let images = {},
        loaded = 0;
    if (Array.isArray(arr)) {
        for (let e of arr) {
            let img = new Image();
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
var Player_SpriteImages = {};
const PlayerSpriteLoader = PlayerImageLoad(["playerSprite"], function (images) {
    Player_SpriteImages = images;
});



// Start values for canvas
var medium = Math.ceil((document.documentElement.clientHeight / 20) * Settings.MapPercent) * 20,
    grid = (medium / 20),
    sprite = {
        x: grid,
        y: grid,
        Size: 1,
    };

// Start page
DocId("GoToCharCreator").addEventListener("click", function () {
    CharCreator();
    DocId("CharCreator").style.display = 'flex';
    DocId("StartPage").style.display = 'none';
});

function CharCreator() { // No need have these active for players who use load.
    // Maybe a bit overkill but did it to train.
    const BeginButton = DocId("Begin"),
        BackHomeButton = DocId("BackHome"),
        StartAutoEssenceButton = DocId("StartAutoEssence"),
        startgameButton = DocId("startgame"),
        VoreStartButton = DocId("VoreStart"),
        CharCreator = DocId("CharCreator"),
        page2 = DocId("page2");

    BeginButton.addEventListener("click", begin)
    BackHomeButton.addEventListener("click", BackHome)
    StartAutoEssenceButton.addEventListener("click", StartAutoEssence)
    startgameButton.addEventListener("click", startgame)
    VoreStartButton.addEventListener("click", VoreStart)

    function begin() {
        const form = document.forms.CreatePlayer.elements;
        CharCreator.style.display = 'none';
        page2.style.display = 'flex';
        player.Name = form[0].value;
        player.LastName = form[1].value;
        // Will remove hair and skincolor later, as I want customize player to be a part of the game.
        player.Face.HairColor = form[2].value;
        player.Skincolor = form[3].value;
        player.Spells.push(SpellDictLite.MinorHealing);
        const {
            Day,
            Month,
            Year
        } = Flags.Date, {
            Name,
            LastName,
            Height,
            Weight,
            Skincolor,
            Face
        } = player
        DocId("CurrentDate").innerHTML = `${Day}/${Month}/${Year}`;
        DocId("looks").innerHTML = `You are ${Name} ${LastName}, a ${Math.round(Height)} cm tall 
        ${Pronoun(CheckGender(player))}, who weighs ${KgToPound(Weight)}. Looking at yourself in a mirror you see 
        ${Face.HairColor} hair and ${Skincolor} skin; hopefully the last time you see your body absent of any 
        other details or personality.<br><br>For today, you will forge your own way in this world.`;

        requestAnimationFrame(loop);
        DateEngine();
    };

    function BackHome() {
        CharCreator.style.display = 'none';
        DocId("StartPage").style.display = 'grid';
        RemoveListerners();
    };

    function StartAutoEssence() {
        Settings.EssenceAuto = Settings.EssenceAuto ? false : true;
        StartAutoEssenceButton.innerHTML = `Auto TF ${Settings.EssenceAuto}`;
    };

    function startgame() {
        page2.style.display = 'none';
        DisplayGame();
        HemScale();
        RemoveListerners();
        StatusButtonSystem();
    };

    function VoreStart() {
        Settings.Vore = Settings.Vore ? false : true;
        VoreStartButton.innerHTML = `Vore ${Settings.Vore}`;
    };

    function RemoveListerners() {
        BeginButton.removeEventListener("click", begin);
        BackHomeButton.removeEventListener("click", BackHome)
        StartAutoEssenceButton.removeEventListener("click", StartAutoEssence)
        startgameButton.removeEventListener("click", startgame)
        VoreStartButton.removeEventListener("click", VoreStart)
    };
};

// Sets display to none used for menu buttons
function DisplayNone() {
    GamePaused = true;
    const DisplayNoneArray = [
        "map", "optionpage", "ShowLooks", "LevelMenu", "LoadMenu", "SaveMenu", "PerkOptionsMenu",
        "ShowQuests", "DetailedInfo", "Levels", "ShowVore", "EssenceOptionsMenu",
        "PronounForm", "Inventory", "ChildrenMenu", "SpellBook"
    ].forEach(function (src) {
        DocId(src).style.display = 'none';
    });
    if (window.innerHeight < 600) {
        const MobileNone = ["map", "buttons", "status", "EventLog"].forEach(function (src) {
            DocId(src).style.display = 'none';
        });
    };
};

function DisplayGame() {
    battle = false;
    GamePaused = false;
    const DisplayGameArray = ["map", "status", "EventLog"].forEach(function (src) {
        DocId(src).style.display = 'block';
    });
    DocId("buttons").style.display = 'grid';
    DocId("EmptyButtons").style.display = 'none';
};
// More buttons for small screen height

DocId("Quests").addEventListener("click", function () {
    DisplayNone();
    const Quest = DocId("QuestTexts"),
        questText = document.createDocumentFragment();
    DocId("ShowQuests").style.display = 'block';

    while (Quest.hasChildNodes()) {
        Quest.removeChild(Quest.lastChild);
    };

    for (let e of player.Quests) {
        const div = document.createElement("div"),
            h4 = document.createElement("h4"),
            p = document.createElement("p"),
            h4text = document.createTextNode(e.Name),
            Tier = e.hasOwnProperty("Tier") ? `<br>Tier: ${e.Tier}` + (e.Tier > 4 ? ` max` : ``) : ``;
        h4.appendChild(h4text);
        div.appendChild(h4);
        p.innerHTML = `Completed: ${e.Completed} <br>Count:  ${e.Count} ${Tier} <br><br>`;
        div.appendChild(p);

        if (window.innerHeight > 500) {
            const LoveQuests = ["Get Impregnated", "Impregnate maidens"],
                FightQuests = ["ElfHunt", "BanditLord"];
            if (LoveQuests.findIndex(i => i === e.Name) > -1) {
                div.classList.add("LoverQuest");
            } else if (FightQuests.findIndex(i => i === e.Name) > -1) {
                div.classList.add("FightQuest");
            };
        };

        questText.appendChild(div);
    }
    DocId("QuestTexts").appendChild(questText);
});

DocId("QuestsLeave").addEventListener("click", function () {
    DocId("ShowQuests").style.display = 'none';
    DisplayGame();
});

var battle = true,
    GamePaused = true;

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
    if (who.Dicks.length > 0 && who.Pussies.length > 0) {
        return "hermaphrodite";
    } else if (who.Dicks.length > 0 && Math.floor(who.Boobies.some(e => e.Size > 2))) {
        return "dickgirl";
    } else if (who.Dicks.length > 0) {
        return "male";
    } else if (who.Pussies.length > 0 && who.Boobies.some(e => e.Size < 2)) { // Check all rows of boobs
        return "cuntboy";
    } else if (who.Pussies.length > 0) {
        return "female";
    } else {
        return "doll"
    }
}
// Level System

function ExpCheck() {
    const MaxExp = 30 * Math.pow(1.05, player.level - 1);
    DocId("StatusLevel").style.width = Math.min(100 * (player.Exp / MaxExp), 100) + "%";
    DocId("LevelButton").style.display = (player.SkillPoints > 0 || player.PerkPoints > 0) ? 'inline-block' : 'none';

    if (player.Exp >= MaxExp) {
        player.Exp = player.Exp - MaxExp;
        player.level++;
        player.SkillPoints += 3;
        player.PerkPoints += 1;
        return;
    }
}

// function to update player & enemy stats, check if you win or lose and deal damage to player

var enemies = [];

//    DocId("PlayerLooks").innerHTML = BoobLook(player) + "<br>" + PussyLook(player) + "<br>" + DickLook(player);
//    DocId("EnemyLooks").innerHTML = BoobLook(enemies[EnemyIndex]) + "<br>" + PussyLook(enemies[EnemyIndex]) + "<br>" + DickLook(enemies[EnemyIndex]);

function HeightSystem(me, they) {
    if (me.Height > they.Height) {
        if (me.Height * 0.95 < they.Height) {
            return "Your opponent is almost as tall as you.";
        } else if (me.Height * 0.9 < they.Height) {
            return "You are a head taller than your opponent.";
        } else if (me.Height * 0.8 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.7 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.6 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.5 < they.Height) {
            return "You are taller than your opponent."
        } else if (me.Height * 0.4 < they.Height) {
            return "Your opponent is short enough for their head to be almost be in level with your groin, how convenient.";
        } else if (me.Height * 0.3 < they.Height) {
            return "Looking down at your opponent you see that they are almost tall enough to reach your groin.";
        } else if (me.Height * 0.2 < they.Height) {
            return "Looking down at your opponent you see that they are just tall enough to reach over your knees.";
        } else if (me.Height * 0.1 < they.Height) {
            return "Your opponent is so short, that they can't reach over your knees!";
        } else {
            return "Your opponent is so small than you could hold them in one hand."
        }
    } else if (me.Height == they.Height) {
        return "You and your opponent exact same height! What are the odds?"
    } else {
        if (they.Height * 0.95 < me.Height) {
            return "You are almost as tall as your opponent."
        } else if (they.Height * 0.9 < me.Height) {
            return "You are a head shorter than your opponent."
        } else {
            return "Your opponent is taller than you."
        }
    };
};

function SexColor(who, where) {
    const WS = DocId(where + "Sex").style;
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
    const health = DocId("StatusHealth"),
        will = DocId("StatusWillHealth"),
        red = 150 + 105 * (player.Health / player.MaxHealth),
        blue = 150 + 105 * (player.WillHealth / player.MaxWillHealth);

    // Need to decide absoulte max health for overhealing
    player.Health = Math.max(1, player.Health);
    player.WillHealth = Math.max(1, player.WillHealth);
    player.MaxHealth = player.End * 10 + player.Perks.ExtraHealth.Count * 20;
    player.MaxWillHealth = player.Will * 10 + player.Perks.ExtraWillHealth.Count * 20;

    health.innerHTML = Math.round(player.Health);
    health.style.width = Math.min(100 * (player.Health / player.MaxHealth), 103) + "%";
    will.innerHTML = Math.round(player.WillHealth);
    will.style.width = Math.min(100 * (player.WillHealth / player.MaxWillHealth), 103) + "%";
    // Trial of making the bars darker the lower as health goes down.
    health.style.backgroundColor = "rgb(" + red + ",0,0)";
    will.style.backgroundColor = "rgb(0,0," + blue + ")";
}

function HouseEngine() {
    if (House.Gym > 0) {
        for (let e of House.Dormmates) {
            const maxMuscle = (e.Height / 3) * (House.Gym * 0.1);
            if (e.Fat > 1 && (e.Muscle < maxMuscle)) {
                e.Muscle += 0.1;
                e.Fat -= 0.4;
            };
        };
    };
    if (House.Kitchen > 0) {
        for (let e of House.Dormmates) {
            const maxFat = (e.Height / 2) * (House.Kitchen * 0.1);
            if (e.Fat < maxFat) {
                e.Fat += 0.4;
            };
        };
    };
    if (House.Dormmates.length > 0) {
        player.Gold += 0.001 * House.Dormmates.length;
        for (let esf of House.Dormmates) {
            if (Settings.Brothel.ServeMasc && Settings.Brothel.ServeFemi) {
                esf.Masc += 0.05 * House.Brothel;
                esf.Femi += 0.05 * House.Brothel;
            } else if (Settings.Brothel.ServeFemi) {
                esf.Femi += 0.1 * House.Brothel;
            } else if (Settings.Brothel.ServeMasc) {
                esf.Masc += 0.1 * House.Brothel;
            };
        };
        if (House.hasOwnProperty("Brothel")) {
            player.Gold += 0.01 * House.Dormmates.length * House.Brothel;
        };
    }
};

function GenitalChange(what) {
    for (let e of player.Dicks) {
        e.Type = what;
    }
    for (let e of player.Balls) {
        e.Type = what;
    }
    for (let e of player.Boobies) {
        e.Type = what;
    }
    for (let e of player.Pussies) {
        e.Type = what;
    }
    for (let e of player.Anal) {
        e.Type = what;
    }
}

function addMilk(amount) {
    for (let b of player.Boobies) {
        if (b.Milk <= b.MilkMax)
            b.Milk += Math.min(b.MilkMax - b.Milk, amount);
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

var EnemyIndex;

function Touching() {
    if (battle === true) {
        return;
    }
    enemies.forEach((j, i) => {
        if (sprite.x + grid * sprite.Size >= j.XPos && sprite.x < j.XPos + j.Size &&
            sprite.y + grid * sprite.Size >= j.YPos && sprite.y < j.YPos + j.Size) {
            if (mousedowner) {
                mousedowner = false;
            }
            EnemyIndex = i;
            EssenceCheck(j);
            j.XPos = RandomInt(2, 18) * grid;
            j.YPos = RandomInt(2, 18) * grid;
            BattleSetup(j);
        }
    })
};

/* Disabled for now
 * var fps = [];
const t = new Date().getTime();
fps.push(t);
if (fps.length > 30) {
    const Thefps = fps[30] - fps[29];
    fps = [];
    if (typeof Thefps === "number") { // Stop typing NaN but I still need to figure out why NaN in first place
        DocId("Fps").innerHTML = `${Math.floor(1000 / Thefps)} Lps`;
    }
}
 */

function loop() {
    requestAnimationFrame(loop);

    DocId("StatusArea").innerHTML = `Area: ${player.Area} and Map: ${player.Map}`;
    DocId("StatusName").innerHTML = player.Name + " " + player.LastName;
    HealthWillBars();
    DocId("StatusLevel").innerHTML = player.level;
    DocId("Gold").innerHTML = Math.floor(player.Gold);
    DocId("Hunger").innerHTML = (player.Fat <= player.Height / 100) ? "You are starving" : null
    DocId("EssenceTracker").innerHTML = `Masculinity: ${Math.round(player.Masc)} and Femininity: ${Math.round(player.Femi)}`;
    DocId("VoreLooks").style.display = Settings.Vore ? 'inline-block' : 'none'
    ExpCheck();

    if (!battle && !GamePaused) { // Splited so I can have time still running while on menus etc...
        const startarea = DocId("hem"),
            ctx = startarea.getContext("2d");
        startarea.width = medium;
        startarea.height = medium;

        if (Math.ceil((document.documentElement.clientHeight * Settings.MapPercent) / 20) * 20 !== medium) {
            HemScale();
        };
        CurrentMap();
        (enemies.length > 0) ? PrintEnemies(): false;
        if (Settings.PlayerSpriteEnable) {
            ctx.drawImage(Player_SpriteImages["playerSprite"], sprite.x, sprite.y, grid * 2, grid * 2);
        } else {
            ctx.fillStyle = "BlueViolet";
            ctx.fillRect(sprite.x, sprite.y, grid * sprite.Size, grid * sprite.Size);
        }
    }
    if (!battle) {
        //Settings.Vore ? VoreEngine() : false; //Should move this to datetracker
        Settings.Cheats.Enabled ? CheatEngine() : false;
        Laglimiter++;
        if (Laglimiter % 80 == 0) {
            Laglimiter = 0;
            Settings.EssenceAuto ? EssenceCheck(player) : false;
            RaceEssenceBalance(); // Race essence bad name
            player.Fat = Math.max(0.1, player.Fat);
            player.Muscle = Math.max(1, player.Muscle);
            player.Weight = Math.round(player.Height * 0.15 + player.Fat + player.Muscle);
            player.Height = Math.max(5, player.Height);
            // Check if essence is negative of NaN
            player.Masc = Math.max(0, player.Masc);
            if (typeof player.Masc !== "number" || Number.isNaN(player.Masc)) {
                player.Masc = 50;
            };
            player.Femi = Math.max(0, player.Femi);
            if (typeof player.Femi !== "number" || Number.isNaN(player.Femi)) {
                player.Femi = 50;
            };
            player.EssenceDrain = 5 + (player.Perks.StealMore.Count * 3);
            player.GiveEssence = 0 + (player.Perks.GiveEssence.Count * 3);

            sprite.Size = 1; //Math.min(0.8 + player.Height / 320, 1.2);
        }
    }
};
var Laglimiter = 0;

function DocId(id) { // Important Prototype.js must be loaded before where you want to use this!
    return document.getElementById(id);
}
