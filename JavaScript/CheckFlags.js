// Checks flags, settings, etc at load
function CheckFlags() {
    // Flags

    // load Settings
    DateTracker();

    document.body.style.backgroundColor = Settings.BackColor;
    MapColor = Settings.MapColor;
    document.body.style.color = Settings.TextColor;
    document.body.style.fontFamily = Settings.TextFont;

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
        if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion")) {
            Settings.VoreSettings.AnalDigestion = false;
        }
        if (!Settings.VoreSettings.hasOwnProperty("AbsorbEssence")) {
            Settings.VoreSettings.AbsorbEssence = "Both";
        }
        if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion")) {
            Settings.VoreSettings.AnalDigestion = false;
        }
    }
    if (!Settings.hasOwnProperty("EssenceAuto")) {
        Settings.EssenceAuto = false;
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
        player.Pregnant.Status = false;
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
    if (!player.hasOwnProperty("Blessings")) {
        player.Blessings.MountainShrine = {
            Points: 0,
            Incubator: 0,
            IncubatorSeed: 0,
            Broodmother: 0,
            BroodmotherSeed: 0,
            Malepreg: 0
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
            Malepreg: 0
        }
    };
    if (!player.Blessings.MountainShrine.hasOwnProperty("Malepreg")){
        player.Blessings.MountainShrine.Malepreg = 0;
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
    for (let e of House.Dormmates) {
        if (e.hasOwnProperty("Willpower")) {
            e.Will = e.Willpower
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
    if (!Settings.VoreSettings.hasOwnProperty("AbsorbRace")){
        Settings.VoreSettings.AbsorbRace = true;
        console.log("Added vore race absorb toggle")
    };
    HemScale();
};
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