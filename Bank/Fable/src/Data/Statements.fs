module Statements
open Models

//This is just a module that generates somewhat sensible data for demo'ing purposes. It's is not relevant in the context of Criipto Verify

let private listOfCompanies : string list = 
     [
        "Hessel, Friesen and Boehm"
        "Rolfson, Keebler and Halvorson"
        "Morissette Inc"
        "Mueller - Ortiz"
        "Rowe, Murazik and Williamson"
        "Considine - Kassulke"
        "Haag - Cummings"
        "Schimmel and Sons"
        "Romaguera LLC"
        "Shields and Sons"
        "Hilll Inc"
        "Littel LLC"
        "Witting and Sons"
        "Murray and Sons"
        "Konopelski Group"
        "Langosh, Schinner and Roberts"
        "Gottlieb Inc"
        "Bednar Inc"
        "Connelly, Kuhn and Jacobson"
        "Mante - Medhurst"
        "Bergstrom and Sons"
        "Schaden Group"
        "Johnston and Sons"
        "Crist and Sons"
        "Torp, Cummerata and Harber"
        "Friesen - Flatley"
        "Goyette, Reinger and DuBuque"
        "Daugherty Inc"
        "Ruecker, Hyatt and Prosacco"
        "Purdy - Lebsack"
        "Barton Inc"
        "Mraz Group"
        "Rath, Hand and Schoen"
        "Turner LLC"
        "Dietrich - Morar"
        "Cormier, Crist and Hammes"
        "Hahn, Ledner and Stokes"
        "Casper LLC"
        "Hand, Bahringer and Medhurst"
        "Kirlin - Von"
        "Stanton - Bosco"
        "Reichert and Sons"
        "Crist - Williamson"
        "Bradtke, Hagenes and Keebler"
        "Rempel, Corkery and McDermott"
        "Jerde - Howe"
        "Rempel, Langworth and Effertz"
        "Kunze, Grady and Waelchi"
        "Gusikowski - Effertz"
        "Klocko - Sipes"
        "Heidenreich, Ledner and Mills"
        "Tromp - Sipes"
        "Herman - Mitchell"
        "Shanahan, Powlowski and Ankunding"
        "Dare and Sons"
        "Dicki Inc"
        "Upton and Sons"
        "Fay, Fahey and Wiza"
        "Runolfsson - Olson"
        "Miller, Stehr and Mertz"
        "Homenick, Muller and Wunsch"
        "Langworth LLC"
        "Hirthe Group"
        "Crist - Schmitt"
        "Schumm Inc"
        "Daniel, Hagenes and Huels"
        "Smitham, Anderson and Nolan"
        "Doyle - Walsh"
        "Sauer LLC"
        "Cronin, Wiza and Boyle"
        "Reilly LLC"
        "Veum - Pagac"
        "Schuster - Lesch"
        "Kassulke - Blanda"
        "Purdy - Rohan"
        "Schmidt - Lesch"
        "Koelpin Group"
        "Hills Group"
        "Walker - McGlynn"
        "Kunde LLC"
        "Gulgowski Inc"
        "Doyle, Botsford and Olson"
        "Gibson - Murray"
        "Volkman, Haag and McGlynn"
        "Gusikowski Group"
        "Larson Inc"
        "Hessel, Stroman and Langworth"
        "Wilderman and Sons"
        "Stanton - Yundt"
        "Erdman and Sons"
        "Jast, Champlin and Toy"
        "Kutch, O'Kon and Toy"
        "Goldner - Olson"
        "Welch - Schoen"
        "Rowe, Hagenes and Connelly"
        "Rutherford - Gleason"
        "O'Keefe, Keebler and Ortiz"
        "Funk - Robel"
        "Luettgen and Sons"
        "O'Reilly - McGlynn"
        "Daugherty - Bosco"
        "Bergnaum - Reichert"
        "Harvey, Kunde and Bogisich"
        "Wehner and Sons"
        "Marquardt Group"
        "Stamm - Reilly"
        "Berge - Beier"
        "Prohaska, Ernser and Gaylord"
        "Volkman Group"
        "Zulauf, Cartwright and Vandervort"
        "Herman - Mitchell"
        "Turner, Blick and Oberbrunner"
        "Waters, Gulgowski and Mann"
        "Reynolds Inc"
        "Cummings and Sons"
        "Kautzer Group"
        "Leffler and Sons"
        "Huel - Denesik"
        "Kozey, West and Lesch"
        "Borer - Bogisich"
        "Wehner Group"
        "Considine, Nicolas and Runte"
        "Lesch Inc"
        "Dickens, Kshlerin and Kuhn"
        "Connelly LLC"
        "Shields - Marvin"
        "Pouros Group"
        "Davis, Goodwin and Raynor"
        "D'Amore Group"
        "Oberbrunner - Kreiger"
        "Prosacco Inc"
        "Douglas Inc"
        "O'Kon - Rippin"
        "Huel, Murray and Feest"
        "Powlowski, Reilly and Harris"
        "Altenwerth Group"
        "Sauer - Hauck"
        "Smith Group"
        "VonRueden, Kutch and Ullrich"
        "Rice - Carroll"
        "Heidenreich, Schaefer and Stehr"
        "Little, Hudson and King"
        "Marks, Altenwerth and Kiehn"
        "White and Sons"
        "Little Group"
        "Howe, Senger and Willms"
        "Hilll - Champlin"
        "Johnson - Gibson"
        "Crist - Simonis"
        "Okuneva LLC"
        "Maggio - Upton"
        "Kuvalis, O'Keefe and Mosciski"
        "Metz - Effertz"
        "Ondricka LLC"
        "Lang, Tremblay and Will"
        "Schmidt and Sons"
        "Rohan Group"
        "Reilly - Hermann"
        "Christiansen Group"
        "Ritchie, Trantow and Sawayn"
        "Kautzer, Schmeler and Buckridge"
        "Hayes, Bruen and Runolfsson"
        "Hickle - Collins"
        "Konopelski Group"
        "Romaguera - Mante"
        "Runolfsdottir and Sons"
        "Erdman Group"
        "Kuhn - Corkery"
        "Legros and Sons"
        "Smith - Krajcik"
        "Thompson - Powlowski"
        "Rath - Sauer"
        "Reinger LLC"
        "Sporer - Howe"
        "Hoeger, Gerhold and Howell"
        "Hirthe - Johnston"
        "Wiza - Mayer"
        "Mertz - O'Keefe"
        "Murazik LLC"
        "McGlynn and Sons"
        "Legros LLC"
        "McGlynn - Goldner"
        "Bauch Group"
        "Bashirian, Murray and Reinger"
        "Howe - Prosacco"
        "Toy Group"
        "Bruen, Wisozk and Goodwin"
        "Stokes - Jakubowski"
        "Rosenbaum and Sons"
        "Rowe LLC"
        "Haag Group"
        "Dooley, Ryan and Osinski"
        "Homenick and Sons"
        "Oberbrunner - Weber"
        "Rogahn, Ernser and Gleichner"
        "Larson - Nicolas"
        "Mohr - Crooks"
        "Funk Inc"
        "Davis, Dach and Jast"
        "Murray - Crist"
     ]
let private listOfAmounts : decimal list= 
    [
      994.52m
      -15000.00m
      -601.00m
      10000.00m
      -2500.00m
      -2500.00m
      -1069.26m
      -1311.17m
      -309.50m
      -5117.58m
      -170.25m
      -380.00m
      -1695.00m
      -100.00m
      -1228.65m
      30000.00m
      -8300.00m
      -5000.00m
      -3000.00m
      -600.00m
      -500.00m
      -500.00m
      -250.00m
      -192.00m
      -4218.75m
      -672.63m
      -3650.00m
      -642.50m
      -494.63m
      -2200.00m
      -1800.00m
      -500.00m
      -7114.52m
      31300.00m
      -12867.98m
      -381.00m
      -1311.39m
      -170.25m
      -3680.22m
      -100.00m
      -1228.65m
      30000.00m
      -8300.00m
      -5000.00m
      -3000.00m
      -600.00m
      -500.00m
      -500.00m
      -250.00m
      -192.00m
      -3000.00m
      -697.64m
      -3650.00m
      -58.75m
      -642.50m
      -3375.00m
      -100.00m
      -4000.00m
      -768.00m
      -1000.00m
      -2000.00m
      -10794.m
      36600.00m
      -12867.98m
      -15.00m
      30000.00m
      -5000.00m
      -3000.00m
      -600.00m
      -500.00m
      -500.00m
      -250.00m
      -192.00m
      -170.25m
      -100.00m
      -1311.32m
      -500.00m
      -10000.00m
      -591.83m
      -1233.60m
      -3650.00m
      -642.50m
      -3375.00m
      -3000.00m
      -1000.00m
      -1100.00m
      -10794.70m
      36600.00m
      -12867.98m
      -1500.53m
      -3375.00m
      -5000.00m
      -3000.00m
      -600.00m
      -500.00m
      -500.00m
      -250.00m
      -192.00m
      -869.00m
      -1695.00m
      -200.00m
      -170.25m
      -19478.62m
      -100.00m
      -1311.40m
      -1887.72m
      -381.00m
      11000.m
      -10000.00m
      15000.00m
      -380.00m
      20000.00m
      -11000.00m
      -745.90m
      -579.47m
      -662.11m
      -1500.00m
      7000.00m
      -1500.00m
      -10000.00m
      -621.00m
      -300.00m
      -300.00m
      -10794.74m
      36600.00m
      -12867.98m
      -1311.32m
      -708.10m
      -170.25m
      -100.00m
      -10000.00m
      -5000.m
      -3000.00m
      -600.00m
      -500.00m
      -500.00m
      -250.00m
      -192.00m
      20000.00m
      -2310.00m
      -3000.00m
      1270.00m
      -704.10m
      -642.50m
      -3650.00m
      -2025.00m
      -2500.00m
      7000.00m
      -1500.00m
      -10794.74m
      36600.00m
      -12867.98m
      -2500.00m
      -2500.00m
      30100.00m
      -5000.00m
      -3000.00m
      -600.00m
      -500.00m
      -500.00m 
      -250.00m
      -192.00m
      -2500.00m
      -171.00m
      -1311.40m
      -170.25m
      -100.00m
      -2109.38m
      -200.00m
      -10000.00m
      -677.56m
      -1332.35m
      -10000.00m
      -209.90m
      -757.60m
      -1395.00m
      -1000.00m
      -1500.00m
      -800.m
      -10794.70m
      36600.00m
      -12867.98m
      -1517.02m
      -1000.00m
      30100.00m
      -5000.00m
      -3000.00m
      -600.00m
      -500.00m
      -500.00m
      -250.00m
      -192.00m
      -100.00m
      -1695.00m
      -999.27m
      -6274.80m
      -3087.12m
      -228.89m
      -3971.25m
      -154.75m
      -1311.40m
      -3525.00m
      500.00m
    ]
let primes =
    [|2;3;5;7;11;13;17;19;23;29;31;37;41;43;47;53;59;61;67;71;73;79;83;89;97;101;103;107;109;113;127;131;137;139;149;151;157;163;167;173;179;181;191;193;197;199;211;223;227;229;233;239;241;251;257;263;269;271;277;281;283;293;307;311;313;317;331;337;347;349;353;359;367;373;379;383;389;397;401;409;419;421;431;433;439;443;449;457;461;463;467;479;487;491;499;503;509;521;523;541;547;557;563;569;571;577;587;593;599;601;607;613;617;619;631;641;643;647;653;659;661;673;677;683;691;701;709;719;727;733;739;743;751;757;761;769;773;787;797;809;811;821;823;827;829;839;853;857;859;863;877;881;883;887;907;911;919;929;937;941;947;953;967;971;977;983;991;997;1009;1013;1019;1021;1031;1033;1039;1049;1051;1061;1063;1069;1087;1091;1093;1097;1103;1109;1117;1123;1129;1151;1153;1163;1171;1181;1187;1193;1201;1213;1217;1223;1229;1231;1237;1249;1259;1277;1279;1283;1289;1291;1297;1301;1303;1307;1319;1321;1327;1361;1367;1373;1381;1399;1409;1423;1427;1429;1433;1439;1447;1451;1453;1459;1471;1481;1483;1487;1489;1493;1499;1511;1523;1531;1543;1549;1553;1559;1567;1571;1579;1583;1597;1601;1607;1609;1613;1619|]
let getSeed (name : string) =
   name
   |> System.Text.Encoding.Unicode.GetBytes
   |> Seq.fold(fun res b -> res * primes.[int b]) 1
let generate (name : string) maxLedgerLength = 
      let rnd = 
          name
          |> getSeed
          |> System.Random
      let accountNames  = 
         [
            "Checking"
            "Savings"
            "Budget"
            "Household"
            "Children budget"
            "Childs savings"
            "Investment"
            "Mastercard"
         ] |> List.filter(fun _ -> rnd.NextDouble() > 0.5)
      let accountNames = 
          accountNames
          |> List.take (min accountNames.Length 4)
      
      let length maxl = 
         [for _ in 1..maxl -> if rnd.NextDouble() < 0.75 then 1 else 0] |> List.sum
      let randomElements (lst : _ list) =
           let lst =
              lst
              |> List.sortBy(fun _ -> rnd.Next())

           Seq.initInfinite(fun i ->
               let elem = lst.[i % lst.Length]
               if rnd.NextDouble() < 0.5 then Some elem else None
           ) |> Seq.filter(Option.isSome)
           |> Seq.take (lst.Length)
           |> List.ofSeq
           |> List.map(Option.get)

      
      accountNames
      |> List.map(fun accountName -> 
         let listOfAmounts = randomElements listOfAmounts 
         let listOfCompanies = randomElements listOfCompanies
         let ledgerEntries = 
            [ for i in 0..((length maxLedgerLength) % maxLedgerLength) -> 
                  let amount = listOfAmounts.[i] 
                  let text = listOfCompanies.[i]
                  let dateInterval = - length 10 |> float
                  amount,text,dateInterval
            ] |> List.fold(fun entries (amount,text,dateInterval) -> 
                  {
                     Date = 
                           match entries with
                           [] -> System.DateTime.Now.Date.AddDays(dateInterval)
                           | e::_ -> e.Date.AddDays(dateInterval)
                     Amount = amount
                     Balance = 0m
                     Text = text
                  }::entries
            
            ) []
            |> List.fold(fun entries entry ->
                let balance = 
                    match entries with
                    [] -> 0m
                    | e::_ -> e.Balance
                {
                   entry with Balance = balance + entry.Amount
                }::entries
            ) []
         {
            Name = accountName
            Ledger = ledgerEntries
         }
      )