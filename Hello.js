

        let selectBox = document.getElementById("selectBox");
        let modelBox = document.getElementById("models");

        // Create an object with models for each make
        let modelsByMake = {
            "Audi":["A1", "A3", "A4", "A5", "A6", "A7", "E-Tron", "Q2", "Q3", "Q5", "Q7", "Q8", "R8", "RS3", "RS4", "RS5", "RS6", "RS7", "RSQ3", "RSQ8", "S1", "S3","S4","S5","S6","S7","SQ5","SQ8", "TT", "TT S","TT RS"],
            "Aston Martin":["DB11", "DB6", "DB7", "DB9", "DBS", "DBX", "Rapide", "Rapide S", "Vanquish", "Vantage"],
            "Bentley": ["Arnage", "Bentayga", "Continental", "Flying Spur", "Mulsanne", "Turbo R"],
            "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "i3", "i4", "i5", "i7", "i8", "iX", "iX1", "iX3", "M2", "M3", "M4", "M5", "M6", "M8", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4"],
            "Porsche": ["Taycan", "718 Cayman"],
            "Vauxhall": ["Corsa"],
            "Mercedes": ["C Class", "CLA 45s"]
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
            

            
           /* Ferrari Models To Varients */
           
           
           
           "Taycan": ["Turbo S", "GTS"],
            "718 Cayman": ["-S","GTS", "GT4", "GT4RS"],
            "Corsa": ["VXR", "Design","Limited Edition"],
            "CLA 45s": ["AMG", "AMG+"]
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
        

        // Call updateModels initially to populate models based on default value
        updateModels1();
    





   
  
 