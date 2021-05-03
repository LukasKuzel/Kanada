/*Úvodní stránka*/
$(function () {
    $("#uvod h2").on("click", function () {
        $("#uvod h3").toggle(3000)
        $("#uvod p").hide(2000)
    });
    $("#uvod h3").on("click", function () {
        $("#uvod p").show(2000)
    });
    $("#nazev h2").on("click", function () {
        $("#nazev p").toggle(2000)
    });
    $("#historie h2").on("click", function () {
        $("#historie h3").toggle(3000)
        $("#historie p").hide(2000)
        $("#historie img").hide(2000)
    });
    $("#historie h3").on("click", function () {
        $("#historie p").show(2000)
        $("#historie img").show(2000)
    });
    $("#vseobecneinformace h2").on("click", function () {
        $("#vseobecneinformace h4").toggle(3000)
        $("#vseobecneinformace p").hide(2000)
        $("#vseobecneinformace img").hide(2000)
    });
    $("#vseobecneinformace h4").on("click", function () {
        $("#vseobecneinformace p").show(2000)
        $("#vseobecneinformace img").show(2000)
    });
    $("#vlajka").on("click", function () {
        $("#maindiv").toggle(3000)
        $("#maindiv2").toggle(3000)
        $("footer").toggle(3000)
    });

});

/*historickePostavy*/
const events = [
    {
        "year": "19. června 1816",
        "event": "Bitva u Sedmi dubů",
        "detail": "Bitva u Sedmi dubů je označení pro nejkrvavější ozbrojený střet mezi agenty Severozápadní společnosti a Společnosti Hudsonova zálivu v rámci tzv. války o pemikan (1812-1821). Agenti Severozápadní společnosti v něm za pomoci Métisů pobili 22 mužů sloužících Společnosti Hudsonova zálivu (sami ztratili jediného muže). Krvavé střetnutí přimělo vládu k zásahu, který vyústil v nucené sloučení obou společností.",
        "url": "https://cs.wikipedia.org/wiki/Bitva_u_Sedmi_dubů",
    },
    {
        "year": "13. září 1759",
        "event": "Bitva na Abrahamových pláních",
        "detail": "Bitva na Abrahamových pláních byla rozhodujícím střetem francouzské a britské armády ve francouzsko-indiánské válce. Završil se jí proces, který započal opuštěním pevnosti Duquesne (budoucí Pittsburgh) Francouzi 25. listopadu 1758, čímž ztratila francouzská armáda ve válce v Americe iniciativu. V noci 12. září vyrazilo 30 velrybářských člunů se 1700 anglických vojáků vedených plukovníkem Williamem Howem na úzkou písečnou pláž na úpatí zdánlivě nepřekonatelných skal tři kilometry od Québecu, kde střežil strmou stezku vedoucí na pláň před městskými hradbami silný oddíl francouzských vojáků. Jednotka zvlášť vybraných britských pěšáků však vyšplhala po téměř kolmé skalní stěně a napadla strážce stezky z týlu. Tím otevřela cestu celému sboru a za rozednění stálo na Abrahamových pláních čtyři a půl tisíce Angličanů. Jakmile sdělili tuto závažnou zprávu veliteli francouzské armády v Kanadě generálu Montcalmovi, shromáždil svoje elitní jednotky a osobně vedl rozsáhlý výpad, jehož se účastnilo přes čtyři a půl tisíce francouzských bojovníků. V sedmihodinové bitvě, v níž padlo 200 Francouzů a dalších 1200 utrpělo zranění, byli smrtelně raněni i oba nejvyšší důstojníci. Wolfe zemřel přímo na bitevním poli, Montcalma odnesli do města, kde v noci skonal. Francouzi ztratili v bitvě podstatně víc lidí a museli se stáhnout zpět do pevnosti, kde se demoralizovaní důstojníci a civilní představitelé dohodli na jednání s Brity. 17. září přijali kapitulační podmínky. Následující den otevřeli brány, a Britové tak ovládli město. Tím fakticky skončila francouzská správa Kanady, přestože se i nadále držely posádky Montrealu, Detroitu a několika menších pevnůstek. Bitva na Abrahámových pláních tak prakticky znamenala konec francouzské války na americkém kontinentu.",
        "url": "https://cs.wikipedia.org/wiki/Bitva_na_Abrahamových_pláních",
    },
    {
        "year": "5. září 1697",
        "event": "Bitva v Hudsonově zálivu",
        "detail": "Bitva v Hudsonově zálivu se odehrála 5. září 1697 v Hudsonově zálivu v Kanadě, nedaleko od anglické pevnosti York. Anglické lodě zde zaskočily osamocenou loď francouzského kapitána Pierra Le Moyne d'Ibervilla, jemuž se podařilo anglickou eskadru porazit a později se zmocnit i pevnosti York. Bitva trvala dvě a půl hodiny. D´Iberville soustředil svůj útok na anglickou vlajkovou loď Hampshire. Anglické fregaty se po prvotních manévrech snažily využít svojí palebnou přesilu, zatímco se francouzský Pélican zaměstnal dělostřeleckým soubojem s Hampshire, což se jim zakrátko začalo dařit.[4] Kapitán Fletcher dokonce údajně nechal připít na zdraví svému statečnému protějšku, avšak příští francouzská salva zasáhla anglickou vlajkovou loď do muničního skladu, následovala exploze a HMS Hampshire se začal potápět.[5] D´Iberville nečekal a začal vzápětí hákovat nejbližší fregatu Royal Hudson´s Bay, kterou po krátké a urputné zteči obsadil. Grimingtonova loď Dering sice také inkasovala řadu zásahů, ale podařilo se jí vyvázat a uplout.",
        "url": "https://cs.wikipedia.org/wiki/Bitva_v_Hudsonově_zálivu",
    },

];

const heroes = [
    {
        "name": "Alžběta II.",
        "birth": "6. února 1952 (69 let)",
        "death": "--",
        "biography": "Alžběta II.  je v současné době vládnoucí královna šestnácti nezávislých států označovaných jako Commonwealth realm. Jedná se o státy Antigua a Barbuda, Austrálie, Bahamy, Barbados, Belize, Grenada, Jamajka, Kanada, Nový Zéland, Papua Nová Guinea, Svatý Kryštof a Nevis, Svatá Lucie, Svatý Vincenc a Grenadiny, Šalomounovy ostrovy, Tuvalu a Spojené království Velké Británie a Severního Irska. V každé této zemi je považována za panovnici samostatného státu a plnění královských povinností pro každou zemi je oddělené. Je také nejvyšší představitelkou anglikánské církve. Britskou královnou se stala ve svých 25 letech po smrti svého otce Jiřího VI. dne 6. února 1952. V dlouhém období její vlády došlo k zániku Britského impéria (proces, který byl zahájen již za jejího otce) a následnému vzniku Commonwealthu. Poté, co britské kolonie získávaly nezávislost, se stala královnou několika nově osamostatněných zemí. Některé z nich později změnily svůj status na republiku. V září 2015 překonala v délce vlády svoji praprababičku, britskou královnu a indickou císařovnu Viktorii, a stala se tak nejdéle vládnoucím panovníkem v anglických a britských dějinách. Od října 2016 po smrti thajského krále Pchúmipchona Adunjadéta (Rámy IX.) se stala nejdéle vládnoucím žijícím monarchou na světě.",
        "portraits": [
            "img/AlzbetaII.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Alžběta_II."
    },
    {
        "name": "Justin Trudeau",
        "birth": "25. prosince 1971 (49 let)",
        "death": "--",
        "biography": "Justin Pierre James Trudeau e kanadský politik a od listopadu 2015 premiér Kanady, když jako lídr Liberální strany dovedl opoziční uskupení k vítězství v říjnových parlamentních volbách 2015. Je nejstarším synem bývalého kanadského ministerského předsedy Pierra Trudeaua (1919–2000) a spisovatelky a herečky Margaret Trudeauové. V letech 2008 a 2011 byl zvolen poslancem Dolní sněmovny ve volebním obvodu Papineau. Ve stínovém kabinetu spravoval gesce mládeže, multikulturalismu, občanství, imigrace, vzdělání po sekundárním stupni a amatérského sportu. V dubnu 2013 se stal předsedou Liberální strany, v jejímž čele dosáhl vítězství ve všeobecných volbách 2015 umožňující mu sestavit většinovou vládu.",
        "portraits": [
            "img/JustinTru",
        ],
        "online": "https://cs.wikipedia.org/wiki/Justin_Trudeau"
    },
    {
        "name": "Julie Payetteová",
        "birth": "20. října 1963 (57 let)",
        "death": "--",
        "biography": "Julie Payetteová je kanadská inženýrka, astronautka a politička. Původně působila jako inženýrka a výzkumná pracovnice různých počítačových společností a od června 1992 jednou z kanadských astronautů. Uskutečnila dva krátkodobé kosmické lety, oba na Mezinárodní vesmírnou stanici. Poprvé vzlétla do vesmíru roku 1999 v raketoplánu Discovery při letu STS-96, podruhé roku 2009 v raketoplánu Endeavour při misi STS-127. Celkem ve vesmíru prožila 25 dní, 11 hodin a 58 minut. Mezi lety 2017–2021 byla generální guvernérkou Kanady.",
        "portraits": [
            "img/JuliePay.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Julie_Payetteová"
    },

];

const articles = [
    {
        "title": "Možnost účasti na webináři o leteckém a kosmickém průmyslu v Kanadě a USA",
        "text": "Ministerstvo zahraničních věcí ČR organizuje ve spolupráci s Regionální hospodářskou komorou Brno a Velvyslanectvími ČR v Ottawě a Washingtonu webinář o leteckém a kosmickém průmyslu v Kanadě a USA. Webinář se koná ve čtvrtek 6. května 2021 od 15:00 hodin SELČ. Ve spolupráci s RHK Brno pořádá Ministerstvo zahraničních věcí České republiky ve čtvrtek 6. května 2021 od 15:00 hodin online seminář pro české firmy se zaměřením na letectví, vesmírný průmysl a související obory. Letecký a kosmický průmysl je v Kanadě považován za strategické odvětví, protože významně přispívá k růstu kanadského HDP a zaměstnanosti, patří mezi přední inovativní odvětví s vysokým podílem výzkumu a vývoje a zaměstnává mnoho vysoce kvalifikovaných pracovníků. Letectví nicméně stojí, nejen v Kanadě, kvůli pandemii a opatřením proti šíření koronaviru výrazně dopadajícím na leteckou dopravu, ale i celosvětovým tlakům na redukci znečištění ovzduší, na rozcestí. Uvědomuje si to i kanadská vláda, která se významnému sektoru kanadského hospodářství snaží pomoci různými podpůrnými opatřeními a finančními nástroji. Další vývoj a možný návrat k předkrizovým číslům dopravy bude pozvolný a bude velmi záviset na rychlosti obnovení cestovního ruchu a důvěry v leteckou přepravu. Dá se nicméně očekávat, že letecký průmysl by měl být po odeznění pandemie stále důležitým kanadským odvětvím, a tím pádem i perspektivním pro české firmy, obzvláště ty inovativní.",
        "date": "29. 04. 2021",
        "author": "Zastupitelský úřad České republiky",
        "source": "https://www.businessinfo.cz/clanky/moznost-ucasti-na-webinari-o-leteckem-a-kosmickem-prumyslu-v-kanade-a-usa/",
        "likes": "125",
        "dislikes": "2",
        "gallery": [
            "img/druz.jpg",
        ]
    },
    {
        "title": "Ambiciózní plán obnovy kanadské ekonomiky byl schválen",
        "text": "Zatímco kanadská ekonomika i přes zvýšené úsilí spojené s proočkováním obyvatelstva trpí v důsledku další vlny pandemie, kanadská menšinová vláda představila svůj první návrh státního rozpočtu od začátku pandemie. Ambiciózní plán, který má prostřednictvím výdajů ve výši 101,4 miliard kanadských dolarů pomoci v boji s ekonomickými ztrátami a ztrátami pracovních míst způsobenými pandemií, byl nakonec opozicí podpořen. Po několika průběžných zprávách k fiskálnímu výhledu a ekonomickému vývoji země vydanými v průběhu loňského roku zveřejnila menšinová vláda Liberální strany po více než dvou letech svůj první úplný rozpočet, a to jak za již skončený fiskální rok 2020-2021, tak na nové období 2021-2022. Rozpočet představil výdaje ve výši 101,4 miliard kanadských dolarů na následující tři roky a další miliardy na roky následující, které by měly oživit kanadské hospodářství a podpořit jeho růst. V uplynulém fiskálním období hospodařila kanadská vláda s rekordním schodkem 354,2 mld. CAD (tj. 16 % HDP). V tom současném se počítá se sníženým schodkem 154,7 mld. CAD s tím, že do roku 2026 by měl postupně klesnout na úroveň 30 mld. CAD. Deficitní výdaje by měly zvýšit federální dluh na 51,2 % HDP s očekávaným poklesem na 49,2 % HDP do roku 2026. V rámci rozpočtu se v první řadě počítá s prodloužením současných vládních programů na pomoc postižené ekonomice, především ve formě dotací na pokrytí mezd zaměstnanců a části nákladů spojených s nájmy podniků. Vláda dále oznámila svůj záměr zvýšit minimální hodinovou mzdu na 15 CAD, zvýšit nabídku dostupného bydlení a v rámci podpory ekonomického růstu a zvýšení zaměstnanosti žen pokračovat v plánech na vytvoření  celonárodního systému předškolního vzdělávání a péče o děti. Ten slíbenými 30 mld. CAD na příštích pět let představuje největší samostatnou položku rozpočtu. Od příštího roku se počítá také se zavedením 3 % daně z digitálních služeb u firem s příjmy nad 750 mil. EUR, přepychové daně z automobilů vyšší třídy, lodí a osobních letadel mezi 10–20 %, či zdaněním neobsazených domů v cizím vlastnictví jednoprocentní daní. Rozpočet má za cíl pomoci kanadským podnikům překlenout období krize a podpořit jejich opětovný růst. Investice by měly směřovat do zvýšení zaměstnanosti, a to formou podpory školení, zvyšování kvalifikací či rekvalifikací. Počítá se s oživením cestovního ruchu prostřednictvím podpory festivalů a kulturních akcí. Urychlit by se měly rovněž investice do digitální transformace malých a středních podniků. Významnou položkou rozpočtu ve výši 17,6 mld. CAD jsou přislíbené výdaje a daňové úlevy za účelem snižování emisí skleníkových plynů a podpory vývoje čistých technologií. Nová opatření mají snížit emise skleníkových plynů do roku 2030 o 36 %, oproti původnímu vládnímu plánu 30 %. Největší podíl 5 mld. CAD by měl během následujících sedmi let jít na podporu projektů zaměřených na snížení uhlíkové stopy velkých producentů emisí, jakým je ocelářský a cementářský průmysl, nebo podporu čistých technologií v rámci leteckého nebo automobilového průmyslu. Společnosti vyrábějící solární panely nebo elektrická vozidla budou mít nárok na 50 % snížení daní z příjmu právnických osob na příštích 10 let. Velký důraz je kladen právě na výrobu elektromobilů a baterií, jelikož právě doprava v Kanadě produkuje až čtvrtinu všech emisí (výroba elektrické energie pro srovnání jen 8 %). Pomoci by těmto snahám měly investice i na výzkum a vývoj v oblasti zpracování kritických nerostných surovin.  Částkou 4,4 mld. CAD bude formou bezúročných půjček podpořena energetická úspornost budov a v neposlední řadě rozpočet plánuje, aby všechny federální budovy využívaly stoprocentně obnovitelnou energii. Přes nezbytnou potřebu překlenout období pandemie a nastartovat ekonomiku země se vůči rozpočtu objevovaly nespokojené hlasy, jak ze strany opozičních stran, tak z řad ekonomických expertů. Vedle zásadních výtek k pozdnímu předložení rozpočtu se poukazuje především na skutečnost, že rozpočet je postaven na masivním zadlužení bez významné kompenzace na jeho příjmové straně. Mnozí ekonomové postrádají zvýšení daně z přidané hodnoty, která se naposledy zvýšila v roce 2008, jako jistého zdroje příjmů. Zmiňují se také další opatření, která se intenzivně diskutovala a s ohledem na obrovské vládní výdaje spojené s pandemií považovala za nezbytná, ale do rozpočtu se nakonec nedostala. Patří mezi ně daň z bohatství či zvýšení zdanění kapitálového majetku, včetně zavedení daně ze zisku z prodeje rezidenční nemovitosti. Kanada totiž stále patří k několika málo zemím, kde se příjem z prodeje nemovitosti využívané k vlastnímu bydlení nedaní. Přes zmíněné výhrady byl rozpočet kvůli snaze zabránit předčasným volbám uprostřed třetí vlny pandemie nakonec podpořen opoziční stranou NDP. Rok 2020 byl pro kanadskou ekonomiku historicky nejhorším. Ekonomika se začíná sice zvedat, nejbližší budoucnost bude nicméně záležet na dalším vývoji pandemie, vládních restrikcí a tempu proočkování obyvatelstva. Zásadní však bude vývoj dlouhodobý. A ten bude záviset i na realizaci opatření navržených v tomto rozpočtu. Ambiciózní plán obnovy představuje příležitost pro vybudování zelenější, inovativnější a konkurenceschopnější kanadské ekonomiky, ale také pro potenciální zahraniční partnery, kteří by plánovaných investic mohli také využít.",
        "date": "28. 04. 2021",
        "author": "Zastupitelský úřad České republiky",
        "source": "https://www.businessinfo.cz/clanky/ambiciozni-plan-obnovy-kanadske-ekonomiky-byl-schvalen/",
        "likes": "161",
        "dislikes": "36",
        "gallery": [
            "img/eko.jpg",
        ]
    },

];

$(function () {
    $("#HistorieANovinky h2").on("click", function () {
        $("#HistorieANovinky .row").toggle(2000);
    });

    events.forEach((event)=>{
        $("#LetopocetUdalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
        </tr>`);
    });
    $(".event-detail").hide();
    $("#HistorieANovinky table").on("click", function () {
        $("#HistorieANovinky .event-detail").toggle(2000);
    });
});