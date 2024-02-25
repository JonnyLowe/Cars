

        let selectBox = document.getElementById("selectBox");
        let modelBox = document.getElementById("models");

        // Create an object with models for each make
        let modelsByMake = {
            "Audi":["A1", "A3", "A4", "A5", "A6", "A7", "E-Tron", "Q2", "Q3", "Q5", "Q7", "Q8", "R8", "RS3", "RS4", "RS5", "RS6", "RS7", "RSQ3", "RSQ8", "S1", "S3","S4","S5","S6","S7","SQ5","SQ8", "TT", "TT S","TT RS"],
            "Aston Martin":["DB11", "DB6", "DB7", "DB9", "DBS", "DBX", "Rapide", "Rapide S", "Vanquish", "Vantage"],
            "Bentley": ["Arnage", "Bentayga", "Continental", "Flying Spur", "Mulsanne", "Turbo R"],
            "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "i3", "i4", "i5", "i7", "i8", "iX", "iX1", "iX3", "M2", "M3", "M4", "M5", "M6", "M8", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4"],
            "Citeron": ["Berlingo", "C1", "C3", "C3 Aircross", "C3 Picasso", "C4", "C4 Cactus", "C4 Picasso", "C4 SpaceTourer", "C5","C5 Aircross", "C5 X", "DS3", "DS3 Cabrio", "DS4", "DS5", "e-C4"],
            "Ferrari": ["488 GTB", "488 Pista", "488 Spider", "812 Superfast", "F8 Tributo", "California T", "F12 Berlinetta", "F12tdf", "F430", "F430 Spider", "Portofino", "Roma", "SF90 Stradale"],
            "Ford": ["B-Max", "C-Max", "EcoSport", "Edge", "Escape", "Expedition", "Explorer", "F-150", "Fiesta", "Focus", "Fusion", "KA", "Kuga", "Mondeo", "Mustang", "Ranger", "S-Max"],
            "Honda": ["Civic", "CR-V", "Fit", "Jazz", "S2000"],
            "Hyundai": ["i10", "i20", "i30", "i40", "IONIQ", "IONIQ 5", "IONIQ 6", "ix20", "ix35", "Kona", "Santa Fe", "Tucson"],
            "Jaguar": ["E-PACE", "F-PACE", "F-TYPE", "I-PACE", "XE", "XF", "XJ"],
            "Jeep": ["Cherokee", "Compass", "Grand Cherokee", "Renegade", "Wrangler"],
            "Kia": ["Ceed", "Niro", "Optima", "Picanto", "Rio", "Sorento", "Soul", "Sportage", "Stinger", "Xceed"],
            "Lamboghini": ["Aventador", "Gallardo", "Huracan", "Urus"],
            "Land Rover": ["Defender 90", "Defender 110", "Discovery", "Discovery Sport", "Freelander 2", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"],
            "Lexus": ["CT", "ES", "GS", "IS", "LC", "LS", "LX", "NX", "RC", "RX", "UX"],
            "Lotus": ["Elise", "Evora", "Exige", "Emira"],
            "Maserati": ["Ghibli", "GranCabrio", "GranTurismo", "Levante", "MC20", "Quattroporte"],
            "Mazda": ["Mazda2", "Mazda3", "Mazda6", "CX-3", "CX-30", "CX-5", "CX-8", "CX-9", "MX-5", "MX-30"],
            "Mclaren": ["570GT", "570S", "600LT", "620R", "720S", "765LT", "Artura", "GT", "P1", "Senna"],
            "Mercedes": ["A-Class", "B-Class", "C-Class", "CLA-Class", "CLS-Class", "E-Class", "GLA-Class", "GLB-Class", "GLC-Class", "GLE-Class", "GLS-Class", "S-Class", "SL-Class", "GLA-Class", "GLB-Class", "GLC-Class", "GLE-Class", "GLS-Class", "S-Class", "SL-Class", "SLC-Class", "AMG GT", "CLS-Class", "EQC", "G-Class", "Maybach S-Class", "V-Class", "X-Class"],
            "MG":["GS", "HS", "MG3", "MG4", "MG5", "TF", "ZS"],
            "MINI": ["Clubman", "Convertible", "Countryman", "Hatch", "John Cooper Works", "Paceman"],
            "Mitsubishi": ["ASX", "Colt", "Eclipse Cross", "Lancer", "Outlander", "Outlander PHEV", "Shogun", "Shogun Sport"],
            "Nissan": ["350Z", "370Z", "Elgrand", "GT-R", "Juke", "Leaf", "Micra", "Navara", "NV200", "Note", "Qashqai", "X-Trail"],
            "Peugeot": ["107", "108", "2008", "206", "207", "208", "3008", "308", "308 SW", "5008", "e-3008", "Rifter", "Traveller"],
            "Polestar": ["Polestar 2"],
            "Porsche": ["718 Boxster", "718 Cayman", "718 Spyder", "911", "912", "918 Spyder", "Boxster", "Carrera GT", "Cayenne", "Cayman", "Macan", "Panamera", "Taycan"],
            "Vauxhall": ["Corsa"],
            
        };

        // Function to update models based on selected make
        function updateModels() {
            let selectedMake = selectBox.value;
            let models = modelsByMake[selectedMake] || []; modelBox.innerHTML = "<option>Select</option>";
           
           
            
           // Clear previous options

            models.forEach(function(model) {
                let option = document.createElement("option");
                option.text = model;
                option.value = model;
                modelBox.appendChild(option);
            });
        }

        // Add event listener to call updateModels when select box changes
        selectBox.addEventListener("input", updateModels);
        

        // Call updateModels initially to populate models based on default value
        updateModels();
    
    
    
    
     
        let selectBox2 = document.getElementById("models");
        let modelBox2 = document.getElementById("variant");

        // Create an object with models for each make
        let modelsByVariant = {
           
           /* Audi Models To Varients */
           "A1": ["Black Edition","CoD", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
            "A3": ["Black Edition","CoD", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
            "A4": ["Black Edition", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
            "A5": ["Black Edition", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
            "A6": ["Black Edition", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
            "A7": ["Black Edition", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
            "E-Tron": ["Black Edition","Launch Edition", "S-Line", "Sport","Vorsprung"],
            "Q2": ["Black Edition", "CoD", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
		    "Q3": ["Black Edition", "S-Line", "SE", "Sport", "TDI","TFSI","Vorsprung"],
			"Q5": ["Black Edition",  "S-Line", "S-Line Plus", "SE", "Sport", "TDI","TFSI","Vorsprung"],
			"Q7": ["Black Edition",  "S-Line","S-Line Plus","SE", "Sport", "TDI V6","TFSI V6","Vorsprung"],
			"Q8": ["Black Edition", "Launch Edition", "S-Line", "TDI V6","TFSI V6","Vorsprung"],
            "R8": ["FSI V10", "FSI V8", "Performance", "Performance Carbon Black","PLUS"],
            "RS3": ["Audi Sport Edition", "Carbon Black", "Launch Edition", "TFSI","Vorsprung"],
            "RS5": ["Carbon Black", "FSI V8", "TFSI V 6","Vorsprung"],
            "RS6": ["Carbon Black", "Launch Edition", "Perofomance", "TFSI V10", "TFSI V8","Vorsprung"],
            "RS7": ["Carbon Black", "Carbon Black Perfomrance", "Performance", "TFSI V8","Vorsprung"],
            "RSQ3": ["Audi Sport Edition", "Performance", "TFSI","Vorsprung"],
            "RSQ8": ["Carbon Black","TFSI V8","Vorsprung"], 
            "S1": ["Competition", "TFSI"],
            "S3": ["Black Edition", "TFSI", "Vorsprung"],
            "S4": ["Black Edition", "TDI V6", "TFSI V6","Vorsprung"],
            "S5": ["Black Edition", "TDI V6", "TFSI V6","V8", "Vorsprung"],
            "S6": ["Black Edition", "TDI V6", "TFSI V8","Vorsprung"],
            "S7": ["Black Edition", "TDI V6", "TFSI V8"],
            "SQ5": ["BiTDI V6","Black Edition", "TDI V6", "TFSI V6","Vorsprung"],
            "SQ7": ["Black Edition", "TDI V8", "TFSI V8","Vorsprung"],
            "SQ8": ["Black Edition", "TDI V8", "TFSI V8","Vorsprung"],
            "TT": ["Black Edition", "Final Edition", "S-Line", "Sport", "T", "TDI", "TFSI", "TFSI V6", "Vorsprung", "Ultra"],
            "TT S": ["Black Edition", "TFSI","Vorsprung"],
            "TT RS": ["Sport Edition","TFSI","Vorsprung"],
            
            /* Aston Martin Models To Varients */
            "DB11":["AMR", "Launch Edition", "V12", "V12 BiTurbo", "V8"],
            "DB7":["GT", "Vantage"],
            "DB9":["Carbon Edition", "GT", "GT Bond Edition", "Luxury Edition", "Sports Edition", "V12"],
            "DB11":["Carbon Black", "Superleggera", "Superleggera OHMSS", "Ultimate", "V12", "V12 BiTurbo"],
            "DBS": ["Carbon Black", "Superleggera", "Superleggera OHMSS", "Ultimate", "V12", "V12 BiTurbo"],
            "DBX": ["707", "V8"],
            "Rapide": ["Luxury Edition", "V12"],
            "Rapide S": ["AMR", "S", "V12"],
            "Vanquish": ["Carbon Edition", "Carbon Edition Black", "Carbon Edition White", "S", "V12"],
            "Vantage": ["007 Edition", "AMR", "F1 Edition", "GT8", "S", "V12", "V12 BiTurbo", "V8"],
            
            /* Bentley Models To Varients */
            
            "Arnage": ["R", "Red Label", "T", "V8"],
            "Bentayga": ["Azure", "First Edition", "Mulliner", "S", "TFSI", "V6", "V8", "W12", "dV8"],
            "Continental": ["GT", "GT S", "GT Speed", "GT Supersports", "GTC", "GTC S", "GTC Speed", "GTC Supersports", "V8", "W12"],
            "Flying Spur": ["Azure", "PHEV", "S", "TFSI V6", "V8", "W12"],
            "Mulsanne": ["S", "Speed", "V8"],
            
            
						/*BMW Models To Varients */
            "1 Series": ["114d", "114i", "116d", "116i", "118d", "118i", "120d", "120i", "123d", "125d", "125i", "128ti", "130i", "135i", "ED Plus", "ES", "M Sport", "M Sport Shadow Edition", "M135i", "M140i", "SE", "SE Business", "Shadow Edition", "Sport", "Sport Plus Edition", "Urban"],
            "2 Series": ["218d", "218i", "220d", "220i", "225d", "228i", "230i", "M Sport", "M235i", "M240i", "Sport"],
            "3 Series": ["316d", "316i", "318d", "318i", "32d", "320i", "325d", "325i", "330Ci", "330d", "330e", "330i", "335d", "335i", "340i", "Blue Perfomance", "ED Plus", "EfficientDynamics", "Luxury", "M Sport", "M Sport Shadow Edition", "M340d", "M340i", "MHT", "SE", "Sport", "Sport Plus Edition"],
            "4 Series": ["418d", "420d", "420i", "425d", "428i", "430d", "430i", "435d", "435i", "440i", "M Sport", "M440i", "MHT", "SE", "Sport"],
            "5 Series": ["518d", "520d", "520i", "525d", "525i", "530d", "530e", "530i", "535d", "535i", "540i", "Luxury", "M Sport", "MHT", "SE"],
            "6 Series": ["630i", "635d", "640d", "M Sport", "SE Sport"],
            "7 Series": ["730Ld", "730s", "740Ld", "740Li", "740d", "740i", "745Le", "750i V8", "Exclusive"],
            "8 Series": ["840d", "840i", "M Sport", "M850i V8"],
            "i3": ["Fluid Grey Edition", "S"],
            "i4": ["35", "40", "M Sport", "M50", "Sport"],
            "i5": ["40", "M Sport", "M Sport Pro", "M60"],
            "i7": ["50", "60", "Excellence", "M Sport"],
            "i8": ["Protonic Frozen Black Edition", "Protonic Red Edition"],
            "iX": ["40", "50", "M Sport", "M Sport Edition", "M60"],
            "iX1": ["20", "30", "M Sport", "xLine"],
            "iX3": ["M Sport", "M Sport", "Premier Edition", "Premier Edition Pro"],
            "M2": ["BiTurbo","Competition", "CS"],
            "M3": ["BiTurbo", "CS", "Competition", "Competition M", "V8", "iV8"],
            "M4": ["BiTurbo", "CS", "Competition", "Competition M"],
            "M5": ["Competition", "V10", "V8", "iV8"],
            "M6": ["V10", "V8"],
            "M8": ["Competition", "iV8"],
            "X1": ["18d", "i8i", "20d", "20i", "25e", "M Sport", "MHT", "SE", "Sport", "xLine"],
            "X2": ["18d", "18i", "20d", "20i", "25e", "M Sport", "M Sport X", "M35i", "SE", "Sport"],
            "X3": ["20d", "20i", "30d", "30e", "M Sport", "M40i", "MHT", "SE", "xLine"],
            "X3M": ["Competition"],
            "X4": ["20d", "20i", "30d", "30i", "M40d", "M40i", "MHT", "SE", "xLine"],
            "X4M": ["Competition"],
            "X5": ["25d", "25i", "30d", "30i", "40d", "40i", "M50d", "M50i", "xLine", "M Sport"],
            "X5M": ["Competition"],
            "X6": ["25d", "30d", "30i", "35d", "40d", "40i", "M50d", "M50i", "xLine", "M Sport"],
            "X6M": ["Competition"],
            "X7": ["30d", "40i", "M50d", "M50i", "xLine", "M Sport"],
            "Z4": ["sDrive20i", "sDrive28i", "sDrive30i", "sDrive35i", "sDrive35is", "M40i"],


            /* Citeron Models To Varients */
            "Berlingo": ["Feel", "Flair", "X", "XL"],
            "C1": ["Feel", "Flair", "Urban Ride"],
            "C3": ["Feel", "Flair", "Origins", "Shine"],
            "C3 Aircross": ["C-Series", "Feel", "Flair", "Origins", "Shine"],
            "C3 Picasso": ["Edition", "Selection", "VTR", "VTR+"],
            "C4": ["Edition", "Feel", "Flair", "VTR", "VTR+"],
            "C4 Cactus": ["Edition", "Feel", "Flair", "Origins", "Rip Curl", "Shine"],
            "C4 Picasso": ["Edition", "Feel", "Flair", "Selection", "Shine", "VTR", "VTR+"],
            "C4 SpaceTourer": ["Edition", "Feel", "Flair", "Selection", "Shine", "VTR", "VTR+"],
            "C5": ["Edition", "Feel", "Flair", "VTR", "VTR+"],
            "C5 Aircross": ["Edition", "Feel", "Flair", "Origins", "Shine"],
            "C5 X": ["Edition", "Feel", "Flair", "Shine"],
            "DS3": ["Chic", "Elegance", "Prestige", "Ultra Prestige"],
            "DS3 Cabrio": ["Chic", "Elegance", "Prestige", "Ultra Prestige"],
            "DS4": ["Chic", "Elegance", "Prestige", "Ultra Prestige"],
            "DS5": ["Chic", "Elegance", "Prestige", "Ultra Prestige"],
            "e-C4": ["Sense Plus", "Shine", "Shine Plus", "Feel"],


            
           /* Ferrari Models To Varients */
           
           "488 GTB": ["Spider", "Pista", "Pista Spider"],
           "488 Pista": ["Spider"],
           "F8 Tributo": ["Spider"],
           "F430": ["Spider", "Scuderia"],
           "SF90 Stradale": ["Spider"],
           
           /* Ford Models To Varients */
           
           "B-Max": ["EcoBoost", "Titanium", "Zetec"],
           "C-Max": ["EcoBoost", "T", "TDCI","Titanium", "Zetec"],
           "EcoSport": ["Titanium", "ST-Line", "Zetec"],
           "Edge": ["SE", "SEL", "Titanium", "ST-Line", "ST-Line Elite"],
           "Escape": ["S", "SE", "SE Sport", "SEL", "Titanium", "ST-Line"],
           "Expedition": ["XLT", "Limited", "King Ranch", "Platinum", "Tremor"],
           "Explorer": ["XLT", "Limited", "ST", "Platinum"],
           "F-150": ["XL", "XLT", "Lariat", "King Ranch", "Platinum", "Limited", "Raptor"],
           "Fiesta": ["S", "SE", "Zetec", "Zetec S", "ST-Line", "ST"],
           "Focus": ["S", "SE", "Zetec", "Zetec S", "ST-Line", "ST"],
           "Fusion": ["S", "SE", "SE Hybrid", "SEL", "SEL Hybrid", "Titanium", "Titanium Hybrid"],
           "KA": ["Studio", "Edge", "Titanium", "Active", "Active B&O Play"],
           "Kuga": ["Zetec", "Titanium", "ST-Line", "Vignale"],
           "Mondeo": ["Zetec Edition", "Titanium Edition", "Hybrid", "ST-Line Edition", "Vignale"],
           "Mustang": ["EcoBoost", "GT", "Bullitt", "Mach 1", "Shelby GT350"],
           "Ranger": ["XL", "XLT", "Lariat", "King Ranch", "Platinum"],
           "S-Max": ["Zetec", "Titanium", "ST-Line", "Vignale"],

           /* Honda Models To Varients */

         "Civic": ["SE", "SR", "EX", "Sport", "Sport Line", "Type R"],
         "CR-V": ["S", "SE", "SR", "EX", "Hybrid", "Hybrid SR", "Hybrid EX"],
         "Fit": ["SE", "SE Sport", "EX", "EX Sport", "EX-L"],
         "Jazz": ["S", "SE", "SE Navi", "SR", "EX", "EX Navi", "Sport", "Sport Navi"],
         "S2000": ["GT", "Roadster", " i-Vtec"],

         /* Hyundai Models To Varients */

         "i10": ["SE", "SE Connect", "Premium", "Ultimate"],
         "i20": ["SE Connect", "Premium", "Ultimate"],
         "i30": ["SE Connect", "N Line", "N Line +", "Premium", "Premium SE", "Ultimate"],
         "i40": ["SE Nav", "SE Nav Business", "Premium", "Premium SE"],
         "IONIQ": ["Hybrid SE Connect", "Hybrid Premium", "Hybrid Ultimate", "Plug-in Hybrid SE Connect", "Plug-in Hybrid Premium", "Plug-in Hybrid Ultimate", "Electric Premium", "Electric Ultimate"],
         "IONIQ 5": ["SE Connect", "Premium", "Ultimate"],
         "IONIQ 6": ["SE Connect", "Premium", "Ultimate"],
         "ix20": ["SE", "SE Nav", "Premium"],
         "ix35": ["SE", "Premium", "Premium Panorama", "SE Nav", "Premium Nav", "Premium Panorama Nav"],
         "Kona": ["SE Connect", "Premium", "Ultimate", "N Line", "N Line S"],
         "Santa Fe": ["SE Connect", "Premium", "Premium SE", "Ultimate"],
         "Tucson": ["SE Connect", "Premium", "N Line", "N Line S", "Premium SE", "Ultimate"],

         /* Jaguar Models To Varients */

         "E-PACE": ["Standard", "S", "SE", "R-Dynamic S", "R-Dynamic SE", "R-Dynamic HSE"],
        "F-PACE": ["Standard", "R-Sport", "S", "SE", "HSE", "R-Dynamic S", "R-Dynamic SE", "R-Dynamic HSE", "SVR"],
        "F-TYPE": ["Standard", "R-Dynamic", "First Edition", "R", "R Convertible"],
        "I-PACE": ["S", "SE", "HSE", "EV400 HSE", "EV400 HSE First Edition"],
        "XE": ["Standard", "S", "SE", "R-Dynamic S", "R-Dynamic SE", "R-Dynamic HSE"],
        "XF": ["Standard", "S", "SE", "R-Dynamic S", "R-Dynamic SE", "R-Dynamic HSE"],
        "XJ": ["Standard", "XJL Portfolio", "XJ50", "XJL Supercharged", "XJR575"],

 
        /* Jeep Models To Varients */

        "Cherokee": ["Longitude", "Longitude Plus", "Limited", "S"],
        "Compass": ["Sport", "Longitude", "Night Eagle", "Limited", "Trailhawk"],
        "Grand Cherokee": ["Laredo", "Limited", "Trailhawk", "Overland", "Summit", "SRT", "Trackhawk"],
        "Renegade": ["Sport", "Longitude", "Night Eagle", "Limited", "Trailhawk", "80th Anniversary Edition"],
        "Wrangler": ["Sport", "Sahara", "Rubicon", "Freedom", "Altitude", "Willys", "80th Anniversary Edition", "High Altitude", "Rubicon 392", "Rubicon 4xe"],

        /* KIA Models To Varients */

        "Ceed": ["2", "3", "Blue Edition", "GT-Line", "GT-Line S", "X", "Xceed"],
        "Niro": ["2", "3", "4", "Self-Charging Hybrid", "Plug-in Hybrid"],
        "Optima": ["2", "3", "3 Sportswagon", "4", "4 Sportswagon", "GT"],
        "Picanto": ["1", "2", "3", "GT-Line", "GT-Line S", "X-Line", "X-Line S"],
        "Rio": ["1", "2", "3", "GT-Line", "GT-Line S"],
        "Sorento": ["2", "3", "4", "KX-1", "KX-2", "KX-3", "GT-Line", "GT-Line S"],
        "Soul": ["1", "2", "EV", "Urban", "Urban Plus", "Maxx", "Maxx Plus"],
        "Sportage": ["1", "2", "3", "4", "GT-Line", "GT-Line S", "GT-Line Edition", "GT-Line Edition S"],
        "Stinger": ["GT-Line", "GT-Line S", "GT-Line S Extreme Edition", "GT-Line S Carbon Edition", "GT-Line S Night Sky Edition", "GT-Line S Club Special Edition", "GT-Line S Club", "GT S Club"],

        /* Lamboghini Models To Varients */

        "Aventador": ["S", "SVJ", "SVJ Roadster", "SVJ Xago Edition", "SVJ Roadster Xago Edition", "Ultimae"],
        "Gallardo": ["LP550-2", "LP560-4", "LP570-4", "LP570-4 Super Trofeo Stradale", "LP570-4 Squadra Corse"],
        "Huracan": ["EVO", "EVO Spyder", "EVO RWD", "EVO RWD Spyder", "Performante", "Performante Spyder", "Performante EVO"],
        "Urus": ["Standard", "Pear Capsule", "Graphite Capsule", "Black Capsule", "Grey Capsule", "Pearl Capsule", "Orange Capsule"],

        /* Land Rover Models To Makes */

        "Defender 90": ["X-Dynamic", "X", "X-S"],
        "Defender 110": ["X-Dynamic", "X", "X-S", "X-Dynamic HSE", "X HSE"],
        "Discovery": ["SE", "HSE", "R-Dynamic SE", "R-Dynamic HSE", "R-Dynamic HSE Luxury"],
        "Discovery Sport": ["S", "SE", "R-Dynamic SE", "R-Dynamic HSE", "R-Dynamic HSE Luxury"],
        "Freelander 2": ["S", "SE", "HSE"],
        "Range Rover": ["Vogue", "Vogue SE", "Autobiography", "SV Autobiography Dynamic", "SV Autobiography"],
        "Range Rover Evoque": ["Standard", "SE", "R-Dynamic SE", "R-Dynamic HSE", "R-Dynamic HSE Dynamic"],
        "Range Rover Sport": ["SE", "HSE", "HSE Dynamic", "Autobiography Dynamic", "SVR"],
        "Range Rover Velar": ["Standard", "S", "SE", "R-Dynamic SE", "R-Dynamic HSE", "R-Dynamic Black Edition"],

        /* Lexus Models To Varients */

        "CT": ["CT 200h", "CT F SPORT", "CT Takumi"],
        "ES": ["ES F SPORT", "ES Takumi"],
        "GS": ["GS F SPORT", "GS Takumi"],
        "IS": ["IS F SPORT", "IS Takumi"],
        "LC": ["LC F SPORT", "LC Takumi"],
        "LS": ["LS F SPORT", "LS Takumi"],
        "LX": ["LX Premium"],
        "NX": ["NX F SPORT", "NX Takumi"],
        "RC": ["RC F SPORT", "RC Takumi"],
        "RX": ["RX F SPORT", "RX Takumi"],
        "UX": [ "UX F SPORT", "UX Takumi"],

        /* Lotus Models To Varients */
        
        "Elise": ["Cup 250", "Cup 250 Final Edition", "Cup 260", "Cup 260 Final Edition", "Sport", "Sport 220"],
        "Emira": ["Base", "First Edition", "Premier Edition", "V6"],
        "Evora": ["GT410", "GT410 Sport", "GT430", "GT430 Sport", "GT430 Sport Final Edition"],
        "Exige": ["Cup 430", "Cup 430 Final Edition", "Sport 350", "Sport 380", "Sport 410", "Sport 420", "Sport 420 Final Edition"],

        /* Maserati Models To Varients */

        "Ghibli": ["Base", "GranLusso", "GranSport", "Trofeo"],
        "GranCabrio": ["Base", "MC"],
        "GranTurismo": ["Base", "MC", "Sport"],
        "Levante": ["Base", "GranLusso", "GranSport", "Trofeo"],
        "MC20": ["Base", "MC20 Assetto Corsa"],
        "Quattroporte": ["Base", "GranLusso", "GranSport", "Trofeo"],

        /* Mazda Models To Varients */

        "Mazda2": ["SE-L", "SE-L Nav+", "Sport Nav+"],
        "Mazda3": ["SE-L", "SE-L Lux", "Sport Lux", "GT Sport", "GT Sport Tech"],
        "Mazda6": ["SE-L Nav", "Sport Nav", "Sport Nav+"],
        "CX-3": ["SE Nav", "SE-L Nav", "Sport Nav", "Sport Black Nav", "GT Sport Nav"],
        "CX-30": ["SE-L", "SE-L Lux", "Sport Lux", "GT Sport", "GT Sport Tech"],
        "CX-5": ["SE-L", "SE-L Lux", "Sport Lux", "GT Sport", "GT Sport Tech"],
        "CX-8": ["SE-L", "SE-L Lux", "Sport Lux", "GT Sport", "GT Sport Tech"],
        "CX-9": ["SE-L", "SE-L Lux", "Sport Lux", "GT Sport", "GT Sport Tech"],
        "MX-5": ["SE-L", "Sport", "Sport Tech", "GT Sport Tech"],
        "MX-30": ["SE-L Lux", "Sport Lux", "GT Sport", "GT Sport Tech"],

        /* Mclaren Models To Varients */

        "570GT": ["570GT MSO Edition"],
        "570S": ["570S MSO Edition", "570S Spider", "570S Track Pack"],
        "600LT": ["Coupe", "Spider"],
        "720S": ["720S Spider", "720S Track Pack"],
        "Senna": ["Senna GTR"],

        /* Mercedes Models To Varients */

                "A-Class": ["A 180", "A 200", "A 220", "A 250", "AMG A 35", "AMG A 45", "AMG A 45 S"],
                "B-Class": ["B 180", "B 200", "B 220", "B 250"],
                "C-Class": ["C 180", "C 200", "C 220", "C 300", "AMG C 43", "AMG C 63", "AMG C 63 S"],
                "CLA-Class": ["CLA 180", "CLA 200", "CLA 220", "CLA 250", "AMG CLA 35", "AMG CLA 45", "AMG CLA 45 S"],
                "CLS-Class": ["CLS 350", "CLS 400", "CLS 450", "AMG CLS 53", "AMG CLS 63", "AMG CLS 63 S"],
                "E-Class": ["E 200", "E 220", "E 300", "E 350", "E 400", "E 450", "AMG E 53", "AMG E 63", "AMG E 63 S"],
                "GLA-Class": ["GLA 180", "GLA 200", "GLA 220", "GLA 250", "AMG GLA 35", "AMG GLA 45", "AMG GLA 45 S"],
                "GLB-Class": ["GLB 200", "GLB 220", "GLB 250", "AMG GLB 35", "AMG GLB 45"],
                "GLC-Class": ["GLC 200", "GLC 220", "GLC 300", "GLC 350", "GLC 400", "GLC 43 AMG", "GLC 63 AMG", "GLC 63 S AMG"],
                "GLE-Class": ["GLE 300", "GLE 350", "GLE 400", "GLE 450", "GLE 53 AMG", "GLE 63 AMG", "GLE 63 S AMG"],
                "GLS-Class": ["GLS 350", "GLS 400", "GLS 450", "GLS 580", "AMG GLS 63"],
                "S-Class": ["S 350", "S 400", "S 450", "S 500", "S 560", "S 580", "AMG S 63", "AMG S 65", "AMG S 63 S"],
                "SL-Class": ["SL 400", "SL 450", "SL 500", "SL 560", "AMG SL 63", "AMG SL 65"],
                "GLA-Class": ["GLA 180", "GLA 200", "GLA 220", "GLA 250", "AMG GLA 35", "AMG GLA 45"],
                "GLB-Class": ["GLB 200", "GLB 220", "GLB 250", "AMG GLB 35", "AMG GLB 45"],
                "GLC-Class": ["GLC 200", "GLC 220", "GLC 300", "GLC 350", "GLC 400", "GLC 43 AMG", "GLC 63 AMG"],
                "GLE-Class": ["GLE 300", "GLE 350", "GLE 400", "GLE 450", "GLE 53 AMG", "GLE 63 AMG"],
                "GLS-Class": ["GLS 350", "GLS 400", "GLS 450", "GLS 580", "AMG GLS 63"],
                "S-Class": ["S 350", "S 400", "S 450", "S 500", "S 560", "S 580", "AMG S 63", "AMG S 65"],
                "SLC-Class": ["SLC 200", "SLC 300", "AMG SLC 43"],
                "AMG GT": ["AMG GT", "AMG GT S", "AMG GT C", "AMG GT R", "AMG GT R PRO"],
                "CLS-Class": ["CLS 350", "CLS 400", "CLS 450", "AMG CLS 53", "AMG CLS 63"],
                "EQC": ["EQC 400 4MATIC"],
                "G-Class": ["G 350d", "G 500", "G 63 AMG", "G 63 S AMG"],
                "Maybach S-Class": ["Maybach S 560", "Maybach S 650"],
                "V-Class": ["V 220 d", "V 250 d", "V 300 d"],
                "X-Class": ["X 220 d", "X 250 d", "X 350 d"],
                

                /* MG Models To Varient */

                "MG3": ["Excite", "Exclusive", "Exclusive Nav"],
                "MG4": ["Variant1", "Variant2", "Variant3"],
                "MG5": ["VariantA", "VariantB", "VariantC"],
                "ZS": ["Explore", "Excite", "Exclusive", "Exclusive Nav"],
                "GS": ["Explore", "Excite", "Exclusive", "Exclusive Nav"],
                "HS": ["Explore", "Excite", "Exclusive", "Exclusive Nav"],
                "TF": ["Base", "Sport", "SuperSport"],

                /* MINI Models To Make */

                "Clubman": ["Classic", "Signature", "Iconic", "John Cooper Works", "Cooper S", "Cooper D"],
                "Convertible": ["Classic", "Signature", "Iconic", "John Cooper Works", "Cooper S", "Cooper D"],
                "Countryman": ["Classic", "Signature", "Iconic", "John Cooper Works", "Cooper S", "Cooper D"],
                "Hatch": ["Classic", "Signature", "Iconic", "John Cooper Works", "Cooper S", "Cooper D"],
                "John Cooper Works": ["Classic", "Signature", "Iconic"],
                "Paceman": ["Classic", "Signature", "Iconic", "John Cooper Works", "Cooper S", "Cooper D"],

                /* Mitsubishi Models to Variants */

                "ASX": ["Dynamic", "Dynamic Safety", "Exceed", "Exceed Safety", "Juro", "4", "4 Safety", "5", "5 Safety"],
                "Colt": ["Equippe", "Juro", "Warrior"],
                "Eclipse Cross": ["2", "3", "4"],
                "Lancer": ["GS2", "GS3", "GS4", "GS5"],
                "Outlander": ["2", "3", "4", "5", "GX3", "GX4", "GX5"],
                "Outlander PHEV": ["Juro", "4h", "4hs", "5h", "5hs"],
                "Shogun": ["SG2", "SG3", "SG4", "SG5"],
                "Shogun Sport": ["2", "3", "4", "4s", "5", "5s"],

                /* Nissan Models To Variants */

                "350Z": ["Base", "Nismo", "Touring", "Track"],
                "370Z": ["Base", "Nismo", "Touring"],
                "Elgrand": ["Highway Star", "Rider", "X"],
                "GT-R": ["Nismo", "Pure", "Prestige", "Recaro", "Track Edition"],
                "Juke": ["Acenta", "N-Connecta", "Nismo", "Tekna", "Tekna+", "Visia"],
                "Leaf": ["Acenta", "N-Connecta", "Tekna", "Visia"],
                "Micra": ["Acenta", "N-Sport", "Tekna", "Visia"],
                "Navara": ["Acenta", "N-Connecta", "Tekna", "Visia"],
                "NV200": ["Crew Van", "Panel Van"],
                "Note": ["Acenta", "N-Connecta", "Tekna", "Visia"],
                "Qashqai": ["Acenta", "N-Connecta", "Nismo", "Tekna", "Visia"],
                "X-Trail": ["Acenta", "N-Connecta", "Tekna", "Visia"],

                /* Peugeot Models To Variants */

                "107": ["Active", "Allure", "Envy", "Sportium", "Urban"],
                "108": ["Active", "Allure", "Collection", "GT Line", "Roland Garros", "PureTech"],
                "2008": ["Active", "Allure", "GT", "GT Line", "Urban Cross", "PureTech"],
                "206": ["Look", "Sport", "Urban"],
                "207": ["Active", "Allure", "CC", "CC GT", "GT", "Sport", "SW", "Urban", "Verve", "PureTech"],
                "208": ["Active", "Allure", "GT", "GT Line", "GTi", "Like", "Roland Garros", "PureTech"],
                "3008": ["Active", "Allure", "GT", "GT Line", "PureTech"],
                "308": ["Active", "Access", "Allure", "CC", "CC GT", "CC GT Line", "GT", "GT Line", "SE", "Sport", "SR", "SW", "SW Active", "SW Allure", "SW GT", "SW GT Line", "PureTech"],
                "308 SW": ["Active", "Allure", "GT", "GT Line", "PureTech"],
                "5008": ["Active", "Allure", "GT", "GT Line", "PureTech"],
                "e-3008": ["Access", "Allure", "GT", "GT Line", "PureTech"],
                "Rifter": ["Active", "Allure", "GT Line", "PureTech"],
                "Traveller": ["Active", "Allure", "Business", "Business VIP"],

                /* Polestar Models To Variants */

                "Polestar 2": ["Standard", "Performance Pack", "Long Range"],

                /* Porsche Models To Variants */

                "718 Boxster": ["S", "GTS 4.0", "Spyder"],
                "718 Cayman": ["S", "GTS 4.0", "GT4", "GT4 RS"],
                "718 Spyder": [],
                "911": ["Carrera", "Targa", "Turbo", "Turbo S", "GT3", "GT3 RS", "GT2 RS"],
                "912": [],
                "918 Spyder": [],
                "Boxster": ["S", "GTS", "Black Edition"],
                "Carrera GT": [],
                "Cayenne": ["S", "Turbo", "Turbo S", "GTS", "E-Hybrid"],
                "Cayman": ["S", "GTS 4.0", "GT4", "GT4 RS"],
                "Macan": ["S", "GTS", "Turbo", "Turbo GT"],
                "Panamera": ["S", "Turbo", "Turbo S E-Hybrid", "GTS"],
                "Taycan": ["4S", "Turbo", "Turbo S", "Cross Turismo"],


           
        };

        // Function to update models based on selected make
        function updateModels1() {
            let selectedMake = selectBox2.value;
            let models = modelsByVariant[selectedMake] || []; modelBox2.innerHTML = "<option>Select</option>";
           
           
            
           // Clear previous options

            models.forEach(function(model) {
                let option = document.createElement("option");
                option.text = model;
                option.value = model;
                modelBox2.appendChild(option);
            });
        }

        // Add event listener to call updateModels when select box changes
        selectBox2.addEventListener("change", updateModels1);
        selectBox.addEventListener("change", updateModels1); 

        // Call updateModels initially to populate models based on default value
        updateModels1();
    





   
  
 