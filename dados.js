let dados = [
        {
            franquia: "Green Bay Packers",
            resumo: "Fundados em 1919, os Green Bay Packers são a única equipe profissional de esportes norte-americanos a ser de propriedade comunitária, sem fins lucrativos. Com sede em Green Bay, Wisconsin, os Packers conquistaram diversos títulos, incluindo vários Super Bowls...",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Jordan Love",
            link: "https://www.packers.com/",
        },
        {
            franquia: "Philadelphia Eagles",
            resumo: "Fundados em 1933, os Philadelphia Eagles são uma das franquias mais antigas da National Football League (NFL). Com sede na Filadélfia, Pensilvânia, os Eagles conquistaram um Super Bowl, em 2018, e possuem uma das torcidas mais apaixonadas da liga. A equipe é conhecida por sua rivalidade com os Dallas Cowboys e Washington Commanders. O estádio da equipe é o Lincoln Financial Field.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Jalen Hurts",
            link: "https://www.philadelphiaeagles.com/",
        },
        {
            franquia: "Chicago Bears",
            resumo: "Fundados em 1920, os Chicago Bears são uma das franquias mais antigas da NFL e uma das mais tradicionais da liga. Conhecidos como Da Bears, possuem uma das torcidas mais apaixonadas e fiéis da NFL. A equipe conquistou nove títulos de campeonato, incluindo um Super Bowl, e é famosa por sua rivalidade com os Green Bay Packers. O estádio da equipe é o Soldier Field.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Justin Fields", // Pode variar dependendo da temporada
            link: "https://www.chicagobears.com/",
        },
        {
            franquia: "Detroit Lions",
            resumo: "Fundados em 1922, os Detroit Lions são uma das franquias originais da NFL. Com sede em Detroit, Michigan, os Lions possuem uma história rica e uma torcida apaixonada. A equipe conquistou quatro títulos de campeonato, mas há muito tempo busca um novo título. O estádio da equipe é o Ford Field.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Jared Goff", // Pode variar dependendo da temporada
            link: "https://www.detroitlions.com/",
        },
        {
            franquia: "Minnesota Vikings",
            resumo: "Fundados em 1960, os Minnesota Vikings são uma franquia relativamente jovem na NFL, mas com uma história de sucesso. A equipe conquistou quatro títulos de conferência e chegou ao Super Bowl quatro vezes. Os Vikings possuem uma das torcidas mais apaixonadas da liga e são conhecidos por sua rivalidade com os Green Bay Packers. O estádio da equipe é o U.S. Bank Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Kirk Cousins", // Pode variar dependendo da temporada
            link: "https://www.vikings.com/",
        },
        {
            franquia: "Atlanta Falcons",
            resumo: "Fundados em 1965, os Atlanta Falcons são uma franquia da NFL com sede em Atlanta, Georgia. A equipe conquistou seis títulos de divisão e chegou ao Super Bowl duas vezes, em 1999 e 2017. Conhecidos por sua ofensiva aérea, os Falcons possuem uma torcida apaixonada e uma rivalidade acirrada com os New Orleans Saints. O estádio da equipe é o Mercedes-Benz Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Desmond Ridder", // Pode variar dependendo da temporada
            link: "https://www.atlantafalcons.com/",
        },
        {
            franquia: "Carolina Panthers",
            resumo: "Fundados em 1995, os Carolina Panthers são uma franquia relativamente nova na NFL, mas com uma história de sucesso. A equipe conquistou dois títulos de divisão e chegou ao Super Bowl em 2004. Conhecidos por sua defesa agressiva, os Panthers possuem uma torcida apaixonada e uma rivalidade com os New Orleans Saints. O estádio da equipe é o Bank of America Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Bryce Young", // Pode variar dependendo da temporada
            link: "https://www.panthers.com/",
        },
        {
            franquia: "New Orleans Saints",
            resumo: "Fundados em 1967, os New Orleans Saints são uma franquia da NFL com sede em Nova Orleans, Louisiana. A equipe conquistou um Super Bowl, em 2010, e possui uma das torcidas mais apaixonadas e barulhentas da liga. Conhecidos como Who Dat Nation, os Saints possuem rivalidades com os Atlanta Falcons e Carolina Panthers. O estádio da equipe é o Caesars Superdome.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Derek Carr", // Pode variar dependendo da temporada
            link: "https://www.neworleanssaints.com/",
        },
        {
            franquia: "Tampa Bay Buccaneers",
            resumo: "Fundados em 1976, os Tampa Bay Buccaneers são uma franquia da NFL com sede em Tampa, Flórida. A equipe conquistou dois Super Bowls, em 2002 e 2021. Conhecidos por sua defesa agressiva, os Buccaneers possuem uma torcida apaixonada e uma rivalidade com os New Orleans Saints. O estádio da equipe é o Raymond James Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Baker Mayfield", // Pode variar dependendo da temporada
            link: "https://www.buccaneers.com/",
        },
        {
            franquia: "Dallas Cowboys",
            resumo: "Fundados em 1960, os Dallas Cowboys são uma das franquias mais populares e valiosas da NFL. Com sede em Arlington, Texas, os Cowboys conquistaram cinco Super Bowls e possuem uma das maiores bases de fãs do mundo. Conhecidos como America's Team, os Cowboys possuem rivalidades acirradas com os Philadelphia Eagles, New York Giants e Washington Commanders. O estádio da equipe é o AT&T Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Dak Prescott", // Pode variar dependendo da temporada
            link: "https://www.dallascowboys.com/",
        },
        {
            franquia: "New York Giants",
            resumo: "Fundados em 1925, os New York Giants são uma das franquias mais antigas da NFL. Com sede em East Rutherford, Nova Jersey, os Giants conquistaram quatro Super Bowls e possuem uma rica história. Conhecidos por suas defesas sólidas, os Giants possuem rivalidades com os Dallas Cowboys, Philadelphia Eagles e Washington Commanders. O estádio da equipe é o MetLife Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Daniel Jones", // Pode variar dependendo da temporada
            link: "https://www.giants.com/",
        },
        {
            franquia: "Washington Commanders",
            resumo: "Fundados em 1932, os Washington Commanders (anteriormente conhecidos como Washington Redskins) são uma das franquias mais antigas da NFL. Com sede em Landover, Maryland, a equipe conquistou três Super Bowls e possui uma torcida apaixonada. Conhecidos por sua defesa, os Commanders possuem rivalidades com os Dallas Cowboys, Philadelphia Eagles e New York Giants. O estádio da equipe é o FedExField.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Sam Howell", // Pode variar dependendo da temporada
            link: "https://www.commanders.com/",
        },
        {
            franquia: "Arizona Cardinals",
            resumo: "Fundados em 1898, os Arizona Cardinals são a franquia mais antiga da NFL. Com sede em Glendale, Arizona, os Cardinals possuem uma rica história e uma torcida apaixonada. A equipe conquistou um Super Bowl, em 1947, e possui uma das defesas mais respeitadas da liga. O estádio da equipe é o State Farm Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Kyler Murray", // Pode variar dependendo da temporada
            link: "https://www.azcardinals.com/",
        },
        {
            franquia: "Los Angeles Rams",
            resumo: "Fundados em 1937, os Los Angeles Rams são uma das franquias mais tradicionais da NFL. Com sede em Los Angeles, Califórnia, os Rams conquistaram um Super Bowl, em 2022, e possuem uma história rica. Conhecidos por sua ofensiva explosiva, os Rams possuem uma torcida apaixonada e uma rivalidade com os San Francisco 49ers. O estádio da equipe é o SoFi Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Matthew Stafford", // Pode variar dependendo da temporada
            link: "https://www.therams.com/",
        },
        {
            franquia: "San Francisco 49ers",
            resumo: "Fundados em 1946, os San Francisco 49ers são uma das franquias mais bem-sucedidas da NFL. Com sede em Santa Clara, Califórnia, os 49ers conquistaram cinco Super Bowls e possuem uma das maiores torcidas da liga. Conhecidos por sua defesa e por suas dinastias, os 49ers possuem rivalidades com os Los Angeles Rams e Seattle Seahawks. O estádio da equipe é o Levi's Stadium.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Brock Purdy", // Pode variar dependendo da temporada
            link: "https://www.49ers.com/",
        },
        {
            franquia: "Seattle Seahawks",
            resumo: "Fundados em 1976, os Seattle Seahawks são uma franquia da NFL com sede em Seattle, Washington. A equipe conquistou um Super Bowl, em 2014, e possui uma das torcidas mais apaixonadas e barulhentas da liga, conhecida como 12th Man. Conhecidos por sua defesa agressiva, os Seahawks possuem rivalidades com os San Francisco 49ers e Arizona Cardinals. O estádio da equipe é o Lumen Field.",
            conferencia: "Conferência Nacional (NFC)",
            quarterback: "Geno Smith", // Pode variar dependendo da temporada
            link: "https://www.seahawks.com/",
        },
        {
            franquia: "Baltimore Ravens",
            resumo: "Fundados em 1996, os Baltimore Ravens são uma franquia da NFL com sede em Baltimore, Maryland. A equipe conquistou dois Super Bowls, em 2000 e 2013, e possui uma das defesas mais respeitadas da liga. Conhecidos por sua cultura de defesa, os Ravens possuem uma torcida apaixonada e uma rivalidade com os Pittsburgh Steelers. O estádio da equipe é o M&T Bank Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Lamar Jackson", // Pode variar dependendo da temporada
            link: "https://www.baltimoreravens.com/",
        },
        {
            franquia: "Cincinnati Bengals",
            resumo: "Fundados em 1968, os Cincinnati Bengals são uma franquia da NFL com sede em Cincinnati, Ohio. A equipe conquistou dois Super Bowls, em 1981 e 1989, e possui uma torcida apaixonada. Conhecidos por sua ofensiva, os Bengals possuem uma rivalidade com os Pittsburgh Steelers. O estádio da equipe é o Paycor Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Joe Burrow", // Pode variar dependendo da temporada
            link: "https://www.bengals.com/",
        },
        {
            franquia: "Cleveland Browns",
            resumo: "Fundados em 1946, os Cleveland Browns são uma das franquias mais antigas da NFL. Com sede em Cleveland, Ohio, os Browns conquistaram quatro títulos de campeonato, mas há muito tempo buscam um novo título. A equipe possui uma torcida apaixonada e uma rivalidade com os Pittsburgh Steelers. O estádio da equipe é o FirstEnergy Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Deshaun Watson", // Pode variar dependendo da temporada
            link: "https://www.clevelandbrowns.com/",
        },
        {
            franquia: "Pittsburgh Steelers",
            resumo: "Fundados em 1933, os Pittsburgh Steelers são uma das franquias mais bem-sucedidas da NFL. Com sede em Pittsburgh, Pensilvânia, os Steelers conquistaram seis Super Bowls e possuem uma das maiores torcidas da liga. Conhecidos por sua defesa e sua história de sucesso, os Steelers possuem rivalidades com os Baltimore Ravens e Cleveland Browns. O estádio da equipe é o Acrisure Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Kenny Pickett", // Pode variar dependendo da temporada
            link: "https://www.steelers.com/",
        },
        {
            franquia: "Houston Texans",
            resumo: "Fundados em 2002, os Houston Texans são uma franquia relativamente nova na NFL. Com sede em Houston, Texas, a equipe conquistou quatro títulos de divisão e chegou aos playoffs em várias ocasiões. Os Texans possuem uma torcida apaixonada e uma rivalidade com os Indianapolis Colts. O estádio da equipe é o NRG Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "C.J. Stroud", // Pode variar dependendo da temporada
            link: "https://www.houstontexans.com/",
        },
        {
            franquia: "Indianapolis Colts",
            resumo: "Fundados em 1953, os Indianapolis Colts são uma franquia da NFL com sede em Indianapolis, Indiana. A equipe conquistou um Super Bowl, em 2007, e possui uma das torcidas mais apaixonadas da liga. Conhecidos por sua ofensiva, os Colts possuem uma rivalidade com os Houston Texans. O estádio da equipe é o Lucas Oil Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Gardner Minshew II", // Pode variar dependendo da temporada
            link: "https://www.colts.com/",
        },
        {
            franquia: "Jacksonville Jaguars",
            resumo: "Fundados em 1995, os Jacksonville Jaguars são uma franquia da NFL com sede em Jacksonville, Flórida. A equipe conquistou dois títulos de divisão e chegou aos playoffs em várias ocasiões. Os Jaguars possuem uma torcida apaixonada e uma rivalidade com os Tennessee Titans. O estádio da equipe é o TIAA Bank Field.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Trevor Lawrence", // Pode variar dependendo da temporada
            link: "https://www.jaguars.com/",
        },
        {
            franquia: "Tennessee Titans",
            resumo: "Fundados em 1960, os Tennessee Titans são uma franquia da NFL com sede em Nashville, Tennessee. A equipe conquistou um Super Bowl, em 2000, e possui uma das torcidas mais apaixonadas da liga. Conhecidos por sua defesa, os Titans possuem uma rivalidade com os Jacksonville Jaguars. O estádio da equipe é o Nissan Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Ryan Tannehill", // Pode variar dependendo da temporada
            link: "https://www.titansonline.com/",
        },
        {
            franquia: "Buffalo Bills",
            resumo: "Fundados em 1960, os Buffalo Bills são uma franquia da NFL com sede em Orchard Park, Nova York. A equipe conquistou quatro Super Bowls consecutivos na década de 1990, mas não conseguiu conquistar outro título desde então. Os Bills possuem uma das torcidas mais apaixonadas da liga e uma rivalidade acirrada com os New York Jets. O estádio da equipe é o Highmark Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Josh Allen", // Pode variar dependendo da temporada
            link: "https://www.buffalobills.com/",
        },
        {
            franquia: "Miami Dolphins",
            resumo: "Fundados em 1966, os Miami Dolphins são uma franquia da NFL com sede em Miami Gardens, Flórida. A equipe conquistou dois Super Bowls, em 1972 e 1973, e possui uma das torcidas mais apaixonadas da liga. Conhecidos por sua defesa, os Dolphins possuem uma rivalidade com os New England Patriots. O estádio da equipe é o Hard Rock Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Tua Tagovailoa", // Pode variar dependendo da temporada
            link: "https://www.miamidolphins.com/",
        },
        {
            franquia: "New England Patriots",
            resumo: "Fundados em 1960, os New England Patriots são uma das franquias mais bem-sucedidas da NFL. Com sede em Foxborough, Massachusetts, os Patriots conquistaram seis Super Bowls desde 2001, sob o comando do lendário treinador Bill Belichick. Conhecidos por sua disciplina e estratégia, os Patriots possuem uma das maiores torcidas da liga e uma rivalidade com os New York Jets. O estádio da equipe é o Gillette Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Mac Jones", // Pode variar dependendo da temporada
            link: "https://www.patriots.com/",
        },
        {
            franquia: "New York Jets",
            resumo: "Fundados em 1960, os New York Jets são uma franquia da NFL com sede em East Rutherford, Nova Jersey. A equipe conquistou um Super Bowl, em 1968, e possui uma das torcidas mais apaixonadas da liga. Conhecidos por sua defesa, os Jets possuem uma rivalidade com os New England Patriots. O estádio da equipe é o MetLife Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Aaron Rodgers", // Pode variar dependendo da temporada
            link: "https://www.nyjets.com/",
        },
        {
            franquia: "Denver Broncos",
            resumo: "Fundados em 1960, os Denver Broncos são uma das franquias mais tradicionais da NFL. Com sede em Denver, Colorado, os Broncos conquistaram três Super Bowls e possuem uma das maiores torcidas da liga. Conhecidos por sua defesa imponente, os Broncos possuem uma rivalidade acirrada com os Kansas City Chiefs. O estádio da equipe é o Empower Field at Mile High.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Russell Wilson", // Pode variar dependendo da temporada
            link: "https://www.denverbroncos.com/",
        },
        {
            franquia: "Kansas City Chiefs",
            resumo: "Fundados em 1960, os Kansas City Chiefs são uma das franquias mais populares da NFL. Com sede em Kansas City, Missouri, os Chiefs conquistaram quatro Super Bowls e possuem uma das torcidas mais apaixonadas da liga. Liderados pelo quarterback Patrick Mahomes, os Chiefs possuem uma rivalidade acirrada com os Denver Broncos. O estádio da equipe é o GEHA Field at Arrowhead Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Patrick Mahomes", // Pode variar dependendo da temporada
            link: "https://www.chiefs.com/",
        },
        {
            franquia: "Las Vegas Raiders",
            resumo: "Fundados em 1960, os Las Vegas Raiders (anteriormente Oakland Raiders e Los Angeles Raiders) são uma das franquias mais históricas da NFL. Com sede em Las Vegas, Nevada, os Raiders conquistaram três Super Bowls e possuem uma das torcidas mais apaixonadas e barulhentas da liga. Conhecidos por sua atitude rebelde, os Raiders possuem rivalidades com os Kansas City Chiefs e Los Angeles Chargers. O estádio da equipe é o Allegiant Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Jimmy Garoppolo", // Pode variar dependendo da temporada
            link: "https://www.raiders.com/",
        },
        {
            franquia: "Los Angeles Chargers",
            resumo: "Fundados em 1960, os Los Angeles Chargers são uma franquia da NFL com sede em Los Angeles, Califórnia. A equipe conquistou um Super Bowl, em 1963, e possui uma das torcidas mais apaixonadas da liga. Conhecidos por sua ofensiva, os Chargers possuem uma rivalidade com os Las Vegas Raiders. O estádio da equipe é o SoFi Stadium.",
            conferencia: "Conferência Americana (AFC)",
            quarterback: "Justin Herbert", // Pode variar dependendo da temporada
            link: "https.//www.chargers.com/",
        },
    ]