CREATE TABLE IF NOT EXISTS finance_industry_us (
    `id` INT,
    `symbol` VARCHAR(5) CHARACTER SET utf8,
    `reportDate` DATETIME,
    `grossProfit` INT,
    `costOfRevenue` INT,
    `operatingRevenue` INT,
    `totalRevenue` INT,
    `operatingIncome` INT,
    `netIncome` INT,
    `profitMargin` NUMERIC(16, 15),
    `researchAndDevelopment` INT,
    `operatingExpense` INT,
    `currentAssets` INT,
    `totalAssets` INT,
    `totalLiabilities` INT,
    `currentCash` INT,
    `currentDebt` INT,
    `shortTermDebt` INT,
    `longTermDebt` INT,
    `totalCash` INT,
    `totalDebt` INT,
    `shareholderEquity` INT,
    `cashChange` INT,
    `cashFlow` INT,
    `operatingGainsLosses` INT,
    `debt_equityRatio` NUMERIC(15, 13),
    `equityPercent` NUMERIC(14, 13)
);
INSERT INTO finance_industry_us VALUES
    (1,'ADC','2018-06-30 00:00:00',34297000,1414000,35619000,35711000,17929000,12923000,0.361877292711,NULL,16368000,28183000,1612161000,702037000,8986000,NULL,NULL,NULL,8986000,NULL,907604000,-2118000,19224000,-2434000,0.773505846162,0.562973549168),
    (2,'ADC','2018-09-30 00:00:00',33064000,4242000,37276000,37306000,18449000,15586000,0.417788023374,NULL,14615000,38129000,1748634000,680256000,18247000,NULL,NULL,NULL,16811000,NULL,1065871000,9261000,27214000,-3917000,0.638216069299,0.609544936219),
    (3,'ADC','2018-12-31 00:00:00',36578000,4124000,40637000,40702000,20139000,13211000,0.324578644784,NULL,16439000,75522000,2028189000,789703000,53975000,NULL,NULL,NULL,53955000,NULL,1236075000,35728000,28995000,-231000,0.638879517829,0.609447640235),
    (4,'AFH','2017-12-31 00:00:00',-59611000,117145000,57431000,57534000,-68979000,-54297000,-0.943737616018,NULL,9368000,187911000,482503000,391858000,45615000,24031000,NULL,NULL,45615000,NULL,90645000,5442000,3050000,-340000,4.32299630426,0.187864116907),
    (5,'AFH','2018-03-31 00:00:00',15034000,41022000,55892000,56056000,6138000,5529000,0.0986335093478,NULL,8896000,217478000,507454000,416064000,52688000,24087000,NULL,NULL,52688000,NULL,91390000,7073000,4661000,-229000,4.55262063683,0.180095141629),
    (6,'AFH','2018-06-30 00:00:00',14886000,40489000,55359000,55375000,6186000,5576000,0.100695259594,NULL,8700000,226608000,483131000,386909000,52707000,NULL,NULL,NULL,52707000,NULL,96222000,19000,-9858000,-475000,4.02100351271,0.199163373909),
    (7,'AFH','2018-09-30 00:00:00',15404000,39243000,54461000,54647000,6466000,5605000,0.102567387048,NULL,8938000,NULL,501167000,399312000,49251000,NULL,NULL,NULL,53871000,NULL,101855000,-3456000,-6400000,-635000,3.92039664229,0.203235647998),
    (8,'AMRK','2018-03-31 00:00:00',7427000,1987536000,1994963000,1994963000,-1996000,-633000,-0.000317299117828,NULL,9423000,667776000,706818000,634753000,4941000,210000000,NULL,NULL,4941000,216993000,68564000,-7070000,26003000,-99000,9.25781751356,0.0970037548563),
    (9,'AMRK','2018-06-30 00:00:00',5794000,1760963000,1766757000,1766757000,-1856000,-3037000,-0.00171896870934,NULL,7650000,706983000,743001000,673893000,6291000,200000000,NULL,NULL,6291000,207226000,65698000,1350000,-6680000,-143000,10.2574355384,0.0884224920289),
    (10,'AMRK','2018-09-30 00:00:00',8475000,1556615000,1565090000,1565090000,756000,1481000,0.000946271460427,NULL,7719000,691315000,726552000,655738000,22714000,179000000,NULL,NULL,22714000,273313000,68090000,16423000,-10298000,-248000,9.63045968571,0.0937166231736),
    (11,'AMRK','2018-12-31 00:00:00',8317000,1092595000,1100912000,1100912000,214000,577000,0.000524110918947,NULL,8103000,647934000,684091000,612294000,11830000,139000000,NULL,NULL,11830000,225569000,68948000,-10884000,20378000,-304000,8.88051865174,0.100787760693),
    (12,'BRG','2018-06-30 00:00:00',27011000,17948000,39324000,44959000,7664000,-169000,-0.00375898040437,NULL,19347000,235052000,1838165000,1587515000,55186000,NULL,NULL,NULL,25411000,NULL,191818000,-1699000,21712000,-293000,8.27615239446,0.104352982458),
    (13,'BRG','2018-09-30 00:00:00',28765000,19112000,42175000,47877000,8636000,402000,0.00839651607244,NULL,20129000,244394000,1879588000,1218198000,58488000,NULL,NULL,NULL,26356000,NULL,606761000,3302000,17863000,-242000,2.00770649399,0.32281595754),
    (14,'BRG','2018-12-31 00:00:00',31335000,18676000,26152000,50011000,8765000,-1315000,-0.0262942152726,NULL,22570000,233577000,2018135000,1334320000,52244000,NULL,NULL,NULL,24775000,NULL,627218000,-6244000,18778000,-76000,2.12736241626,0.310790903483),
    (15,'CATC','2018-06-30 00:00:00',NULL,NULL,NULL,23698000,NULL,6111000,0.257869862436,NULL,NULL,NULL,1971214000,1815522000,35119000,NULL,NULL,NULL,NULL,NULL,155692000,-21146000,4157000,NULL,11.6609845079,0.0789827994322),
    (16,'CATC','2018-09-30 00:00:00',NULL,NULL,NULL,25100000,NULL,6659000,0.265298804781,NULL,NULL,NULL,1988944000,1828168000,16431000,66700000,NULL,NULL,NULL,70152000,160776000,-18688000,7789000,NULL,11.3709011295,0.0808348550789),
    (17,'CATC','2018-12-31 00:00:00',NULL,NULL,NULL,24448000,NULL,5306000,0.217032068063,NULL,NULL,NULL,2101384000,1934358000,18473000,90000000,NULL,NULL,NULL,93409000,167026000,2042000,6676000,NULL,11.5811789781,0.0794838068625),
    (18,'CATC','2019-03-31 00:00:00',NULL,NULL,NULL,24218000,NULL,6198000,0.255925344785,NULL,NULL,NULL,2138548000,1966280000,NULL,NULL,NULL,NULL,NULL,3366000,172268000,NULL,NULL,NULL,11.4140757424,0.080553721497),
    (19,'CIFS','2017-09-30 00:00:00',5000520,133370,5133890,5133890,4013135,5014357,0.976716875508,NULL,987385,63392989,64044708,5697605,NULL,NULL,NULL,NULL,23196608,NULL,58347103,NULL,NULL,NULL,0.0976501781074,0.911037068043),
    (20,'CIFS','2017-12-31 00:00:00',11595167,413868,12009035,12009035,9579728,10794673,0.898879302125,NULL,2015439,75984403,79203411,8087635,NULL,NULL,NULL,NULL,27165262,NULL,71115776,NULL,NULL,NULL,0.113724906834,0.897887794252),
    (21,'CNFR','2018-03-31 00:00:00',NULL,NULL,NULL,24823000,NULL,213000,0.00858075172219,NULL,NULL,NULL,229654000,178230000,14406000,NULL,NULL,NULL,NULL,NULL,51424000,2538000,-3908000,-161000,3.46589141257,0.223919461451),
    (22,'CNFR','2018-06-30 00:00:00',NULL,NULL,NULL,25267000,NULL,-1113000,-0.0440495507975,NULL,NULL,NULL,227334000,177166000,17016000,NULL,NULL,NULL,NULL,29060000,50168000,2610000,-3213000,-12000,3.53145431351,0.220679704752),
    (23,'CNFR','2018-09-30 00:00:00',NULL,NULL,NULL,24771000,NULL,-3551000,-0.143353114529,NULL,NULL,NULL,232997000,186458000,16455000,NULL,NULL,NULL,NULL,29750000,46539000,-561000,-390000,21000,4.00648918112,0.199740769194),
    (24,'CNFR','2018-12-31 00:00:00',NULL,NULL,NULL,24050000,NULL,-4776000,-0.198586278586,NULL,NULL,NULL,232752000,190589000,10792000,NULL,NULL,NULL,NULL,33502000,42163000,-5663000,-9497000,91000,4.52029030192,0.181149893449),
    (25,'ERIE','2018-03-31 00:00:00',NULL,NULL,NULL,578515000,NULL,65758000,0.113666888499,NULL,NULL,NULL,1573476000,733321000,119627000,NULL,NULL,NULL,NULL,NULL,840155000,-96094000,NULL,NULL,0.87284013069,0.533948404679),
    (26,'ERIE','2018-06-30 00:00:00',NULL,NULL,NULL,627884000,NULL,79706000,0.126943830389,NULL,NULL,NULL,1652275000,772087000,198412000,925000,NULL,NULL,NULL,99725000,880188000,78785000,NULL,NULL,0.877184192468,0.53271277481),
    (27,'ERIE','2018-09-30 00:00:00',NULL,NULL,NULL,619785000,NULL,80446000,0.129796623023,NULL,NULL,NULL,1759503000,838480000,244688000,1395000,NULL,NULL,NULL,99727000,921023000,46276000,NULL,NULL,0.910379002479,0.52345633966),
    (28,'ERIE','2018-12-31 00:00:00',NULL,NULL,NULL,582646000,NULL,62314000,0.106950017678,NULL,NULL,NULL,1778327000,804655000,266417000,1870000,NULL,NULL,NULL,99730000,973672000,21729000,NULL,NULL,0.826412796096,0.547521350123),
    (29,'FII','2018-06-30 00:00:00',112400000,143593000,216497000,255993000,80757000,38822000,0.15165258425,NULL,31643000,484180000,1276315000,477190000,375755000,NULL,NULL,NULL,417561000,NULL,799125000,49539000,88290000,37854000,0.597140622556,0.626118943991),
    (30,'FII','2018-09-30 00:00:00',133371000,175245000,266891000,308616000,81898000,59608000,0.193146175182,NULL,51473000,271622000,1523657000,696293000,117523000,NULL,NULL,NULL,157059000,NULL,827364000,-258232000,-50016000,-26960000,0.841580005898,0.543011977105),
    (31,'FII','2018-12-31 00:00:00',134582000,172634000,266010000,307216000,87954000,61536000,0.200302067601,NULL,46628000,304101000,1543683000,686562000,157426000,NULL,NULL,NULL,190490000,NULL,857121000,45014000,119912000,10868000,0.80100942574,0.555244179019),
    (32,'FII','2019-03-31 00:00:00',118202000,188848000,265334000,307050000,70889000,54546000,0.177645334636,NULL,47313000,278351000,1635176000,737437000,135088000,NULL,NULL,NULL,162111000,NULL,897739000,-24602000,16758000,7058000,0.821438079442,0.549016741929),
    (33,'FUSB','2018-06-30 00:00:00',NULL,NULL,NULL,8634000,NULL,359000,0.0415798007876,NULL,NULL,NULL,634036000,558402000,41798000,10366000,NULL,NULL,NULL,20366000,75645000,7325000,2397000,179000,7.38187586754,0.11930710559),
    (34,'FUSB','2018-09-30 00:00:00',NULL,NULL,NULL,10440000,NULL,240000,0.0229885057471,NULL,NULL,NULL,802595000,725125000,50083000,192000,NULL,NULL,NULL,NULL,77481000,8285000,3816000,37000,9.35874601515,0.0965381045235),
    (35,'FUSB','2018-12-31 00:00:00',NULL,NULL,NULL,9279000,NULL,1477000,0.159176635413,NULL,NULL,NULL,791939000,712502000,49599000,527000,NULL,NULL,NULL,NULL,79448000,-484000,501000,129000,8.96815527137,0.100320858046),
    (36,'FUSB','2019-03-31 00:00:00',NULL,NULL,NULL,10196000,NULL,1234000,0.12102785406,NULL,NULL,NULL,795334000,713761000,NULL,NULL,NULL,NULL,NULL,NULL,81573000,NULL,NULL,NULL,8.74996628786,0.102564457197),
    (37,'GOODM','2018-06-30 00:00:00',23777000,2816000,26593000,26593000,9051000,2525000,0.0949497988192,NULL,14726000,18246000,912008000,660792000,7290000,74580000,NULL,NULL,4552000,546931000,251216000,264000,13369000,NULL,2.63037386154,0.27545372409),
    (38,'GOODM','2018-09-30 00:00:00',23953000,2638000,26591000,26591000,9169000,2677000,0.100673160092,NULL,14784000,12445000,904175000,657051000,5075000,74604000,NULL,NULL,2470000,546355000,247124000,-2215000,14796000,NULL,2.65879072854,0.273314347333),
    (39,'GOODM','2018-12-31 00:00:00',24049000,3211000,27260000,27260000,8490000,2513000,0.0921863536317,NULL,15559000,19152000,938775000,684356000,9082000,74629000,NULL,NULL,6591000,570122000,249744000,4007000,14808000,-919000,2.74022999552,0.266031796756),
    (40,'GOODM','2019-03-31 00:00:00',25069000,3068000,28137000,28137000,8871000,4628000,0.16448093258,NULL,16198000,12518000,935020000,676729000,7017000,74653000,NULL,NULL,4314000,556362000,253629000,-2065000,12600000,-2952000,2.66818463188,0.271255160317),
    (41,'HVBC','2018-03-31 00:00:00',NULL,NULL,NULL,2777000,NULL,132000,0.0475333093266,NULL,NULL,NULL,263844000,233336000,14942000,NULL,NULL,NULL,NULL,NULL,30508000,140000,3969000,-784000,7.64835452996,0.115628932248),
    (42,'HVBC','2018-06-30 00:00:00',NULL,NULL,NULL,2941000,NULL,223000,0.075824549473,NULL,NULL,NULL,297762000,267041000,14745000,NULL,NULL,NULL,NULL,NULL,30721000,-197000,-4866000,-870000,8.6924579278,0.103173003943),
    (43,'HVBC','2018-09-30 00:00:00',NULL,NULL,NULL,2795000,NULL,270000,0.0966010733453,NULL,NULL,NULL,302310000,271307000,6020000,NULL,NULL,NULL,NULL,NULL,31003000,-8725000,-1378000,-645000,8.7509918395,0.102553670074),
    (44,'HVBC','2018-12-31 00:00:00',NULL,NULL,NULL,2680000,NULL,139000,0.0518656716418,NULL,NULL,NULL,320883000,289472000,16992000,NULL,NULL,NULL,NULL,NULL,31411000,10972000,879000,-599000,9.21562509949,0.0978892618182),
    (45,'IIPR','2018-03-31 00:00:00',2677000,87000,2764000,2764000,724000,945000,0.341895803184,NULL,1953000,91586000,158898000,7184000,42076000,NULL,NULL,NULL,90932000,NULL,151714000,30318000,1355000,NULL,0.0473522549007,0.954788606527),
    (46,'IIPR','2018-06-30 00:00:00',3246000,68000,3314000,3314000,1236000,1542000,0.465298732649,NULL,2010000,78604000,161699000,10114000,21185000,NULL,NULL,NULL,78604000,NULL,151585000,-20891000,2339000,NULL,0.0667216413233,0.937451684921),
    (47,'IIPR','2018-09-30 00:00:00',3716000,210000,3926000,3926000,1571000,1832000,0.466632705043,NULL,2145000,57002000,166212000,15122000,53019000,NULL,NULL,NULL,57002000,NULL,151090000,31834000,5857000,NULL,0.100086041432,0.909019806031),
    (48,'IIPR','2018-12-31 00:00:00',4703000,80000,4783000,4783000,1807000,2666000,0.557390758938,NULL,2896000,133493000,281466000,17174000,13050000,NULL,NULL,NULL,133493000,NULL,264292000,-39969000,6142000,NULL,0.0649811572049,0.938983749369),
    (49,'IROQ','2018-06-30 00:00:00',NULL,NULL,NULL,5375000,NULL,497000,0.0924651162791,NULL,NULL,NULL,638923000,557248000,4754000,NULL,NULL,NULL,NULL,NULL,81675000,-5223000,3257000,-59000,6.82274869911,0.127832305301),
    (50,'IROQ','2018-09-30 00:00:00',NULL,NULL,NULL,5740000,NULL,934000,0.162717770035,NULL,NULL,NULL,655454000,574373000,7130000,NULL,NULL,NULL,NULL,NULL,81081000,2376000,6000,4687000,7.08394075061,0.12370204469),
    (51,'IROQ','2018-12-31 00:00:00',NULL,NULL,NULL,5534000,NULL,787000,0.142211781713,NULL,NULL,NULL,664274000,585753000,7018000,NULL,NULL,NULL,NULL,NULL,78521000,-112000,2716000,-4964000,7.4598260338,0.118205740402),
    (52,'IROQ','2019-03-31 00:00:00',NULL,NULL,NULL,5212000,NULL,804000,0.154259401381,NULL,NULL,NULL,662525000,582419000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),
    (53,'LEVL','2018-03-31 00:00:00',NULL,NULL,NULL,13499000,NULL,3168000,0.23468405067,NULL,NULL,NULL,1300629000,1190106000,39882000,NULL,NULL,NULL,NULL,NULL,110523000,-23779000,6481000,-236000,10.7679487527,0.0849765767179),
    (54,'LEVL','2018-06-30 00:00:00',NULL,NULL,NULL,13867000,NULL,4012000,0.28931996827,NULL,NULL,NULL,1322913000,1179468000,34767000,NULL,NULL,NULL,NULL,NULL,143445000,-5115000,7857000,-463000,8.2224406567,0.108431166675),
    (55,'LEVL','2018-09-30 00:00:00',NULL,NULL,NULL,14993000,NULL,3255000,0.217101313947,NULL,NULL,NULL,1446269000,1300810000,77837000,NULL,NULL,NULL,NULL,NULL,145459000,43070000,-8252000,-899000,8.94279487691,0.100575342485),
    (56,'LEVL','2018-12-31 00:00:00',NULL,NULL,NULL,15120000,NULL,3951000,0.26130952381,NULL,NULL,NULL,1416215000,1264455000,33296000,NULL,NULL,NULL,NULL,NULL,151760000,-44541000,12051000,-716000,8.33193858724,0.107158870652),
    (57,'NMIH','2018-06-30 00:00:00',NULL,NULL,NULL,67562000,NULL,25241000,0.373597584441,NULL,NULL,NULL,1016479000,386837000,16454000,NULL,NULL,NULL,NULL,NULL,629642000,-85436000,40222000,NULL,0.614376105787,0.619434341487),
    (58,'NMIH','2018-09-30 00:00:00',NULL,NULL,NULL,66297000,NULL,24811000,0.374240161697,NULL,NULL,NULL,1052481000,391988000,18187000,NULL,NULL,NULL,NULL,NULL,660493000,1733000,37996000,8000,0.593477902113,0.627558122189),
    (59,'NMIH','2018-12-31 00:00:00',NULL,NULL,NULL,79797000,NULL,35520000,0.445129516147,NULL,NULL,NULL,1092043000,390543000,25294000,NULL,NULL,NULL,NULL,NULL,701500000,7107000,46512000,-6000,0.556725588026,0.642373972453),
    (60,'NMIH','2019-03-31 00:00:00',NULL,NULL,NULL,75627000,NULL,32899000,0.435016594602,NULL,NULL,NULL,1147511000,395630000,39761000,NULL,NULL,NULL,NULL,NULL,751881000,14467000,28279000,187000,0.526186989697,0.655227705878),
    (61,'NXRT','2018-06-30 00:00:00',26358000,9297000,31069000,35655000,5235000,-1661000,-0.0465853316505,NULL,21123000,63849000,1039555000,799611000,39219000,NULL,NULL,NULL,18312000,NULL,239944000,7026000,14202000,1195000,3.33249008102,0.230814146438),
    (62,'NXRT','2018-09-30 00:00:00',26179000,10316000,31724000,36495000,4806000,-5245000,-0.143718317578,NULL,21373000,53251000,1175713000,944228000,45577000,NULL,NULL,NULL,19324000,NULL,231485000,6358000,13119000,1195000,4.07900295916,0.196889036695),
    (63,'NXRT','2018-12-31 00:00:00',8015000,31375000,34598000,39390000,3051000,-4767000,-0.121020563595,NULL,4964000,55527000,1161210000,865182000,43129000,NULL,NULL,NULL,19864000,NULL,296028000,-2448000,11291000,-2488000,2.92263569662,0.254930632702),
    (64,'NXRT','2019-03-31 00:00:00',24854000,16637000,36322000,41491000,3715000,-4360000,-0.105083030055,NULL,21139000,45508000,1269509000,989186000,NULL,NULL,NULL,NULL,20536000,NULL,280323000,NULL,NULL,NULL,3.52873649326,0.220812140757),
    (65,'OVBC','2018-06-30 00:00:00',NULL,NULL,NULL,13178000,NULL,2976000,0.225830930338,NULL,NULL,NULL,1025364000,912136000,63191000,NULL,NULL,NULL,NULL,NULL,113228000,-80971000,3665000,NULL,8.05574592857,0.110427126367),
    (66,'OVBC','2018-09-30 00:00:00',NULL,NULL,NULL,12690000,NULL,1746000,0.137588652482,NULL,NULL,NULL,1033516000,919677000,65119000,NULL,NULL,NULL,NULL,NULL,113839000,1928000,3906000,NULL,8.0787515702,0.110147302993),
    (67,'OVBC','2018-12-31 00:00:00',NULL,NULL,NULL,12210000,NULL,3856000,0.315806715807,NULL,NULL,NULL,1030493000,912619000,71180000,NULL,NULL,NULL,NULL,NULL,117874000,6061000,4902000,NULL,7.74232655208,0.114386026882),
    (68,'OVBC','2019-03-31 00:00:00',NULL,NULL,NULL,13233000,NULL,1193000,0.0901534043679,NULL,NULL,NULL,1045074000,924722000,NULL,NULL,NULL,NULL,NULL,NULL,120352000,NULL,NULL,NULL,7.68347846317,0.115161223033),
    (69,'PBBI','2018-03-31 00:00:00',NULL,NULL,NULL,4244000,NULL,965000,0.227379830349,NULL,NULL,NULL,530491000,446490000,9513000,NULL,NULL,NULL,NULL,NULL,84001000,-5037000,1075000,87000,5.31529386555,0.158345758929),
    (70,'PBBI','2018-06-30 00:00:00',NULL,NULL,NULL,4494000,NULL,789000,0.175567423231,NULL,NULL,NULL,525388000,441099000,10102000,NULL,NULL,NULL,NULL,NULL,84289000,589000,1090000,-142000,5.23317396102,0.16043190937),
    (71,'PBBI','2018-09-30 00:00:00',NULL,NULL,NULL,4292000,NULL,1391000,0.324091332712,NULL,NULL,NULL,519751000,434476000,16730000,NULL,NULL,NULL,NULL,NULL,85275000,6628000,904000,-21000,5.09499853415,0.1640689484),
    (72,'PBBI','2018-12-31 00:00:00',NULL,NULL,NULL,4471000,NULL,1090000,0.243793334824,NULL,NULL,NULL,520387000,437101000,5332000,NULL,NULL,NULL,NULL,NULL,83286000,-11398000,2235000,-85000,5.24819297361,0.160046273254),
    (73,'PEBK','2018-06-30 00:00:00',NULL,NULL,NULL,13625000,NULL,3176000,0.233100917431,NULL,NULL,NULL,1111172000,993006000,69555000,NULL,NULL,NULL,NULL,NULL,118166000,1721000,3977000,-47000,8.40348323545,0.106343572372),
    (74,'PEBK','2018-09-30 00:00:00',NULL,NULL,NULL,14057000,NULL,3467000,0.246638685352,NULL,NULL,NULL,1100292000,980573000,57041000,NULL,NULL,NULL,NULL,NULL,119719000,-12514000,4263000,-14000,8.19062137171,0.108806571347),
    (75,'PEBK','2018-12-31 00:00:00',NULL,NULL,NULL,13921000,NULL,3436000,0.246821349041,NULL,NULL,NULL,1093251000,969634000,43370000,NULL,NULL,NULL,NULL,NULL,123617000,-13671000,5135000,-511000,7.84385642751,0.113072844205),
    (76,'PEBK','2019-03-31 00:00:00',NULL,NULL,NULL,14884000,NULL,3667000,0.246371943026,NULL,NULL,NULL,1111148000,984564000,NULL,NULL,NULL,NULL,NULL,NULL,126584000,NULL,NULL,NULL,7.77794981988,0.113921817796),
    (77,'PJC','2018-06-30 00:00:00',NULL,NULL,NULL,162917000,NULL,6226000,0.0382157785866,NULL,NULL,NULL,1514528000,777328000,26025000,51706000,NULL,NULL,NULL,176706000,685524000,-576000,146209000,NULL,1.13391799558,0.452632107165),
    (78,'PJC','2018-09-30 00:00:00',NULL,NULL,NULL,208007000,NULL,22023000,0.105876244549,NULL,NULL,NULL,1493436000,746021000,68774000,49957000,NULL,NULL,NULL,174957000,700211000,42817000,67745000,NULL,1.06542313674,0.468859060582),
    (79,'PJC','2018-12-31 00:00:00',NULL,NULL,NULL,213438000,NULL,18184000,0.0851957008593,NULL,NULL,NULL,1345269000,614853000,50364000,49953000,NULL,NULL,NULL,NULL,677444000,-18148000,149448000,NULL,0.907607123246,0.503575121407),
    (80,'PNBK','2018-03-31 00:00:00',NULL,NULL,NULL,7385000,NULL,1065000,0.144211238998,NULL,NULL,NULL,870417000,802812000,61992000,NULL,NULL,NULL,NULL,NULL,67605000,12751000,1675000,NULL,11.8750388285,0.077669668676),
    (81,'PNBK','2018-06-30 00:00:00',NULL,NULL,NULL,7427000,NULL,1036000,0.139491046183,NULL,NULL,NULL,930235000,861874000,85641000,NULL,NULL,NULL,NULL,NULL,68361000,23649000,2714000,NULL,12.6076856687,0.0734878820943),
    (82,'PNBK','2018-09-30 00:00:00',NULL,NULL,NULL,7142000,NULL,769000,0.10767292075,NULL,NULL,NULL,915286000,846365000,49232000,NULL,NULL,NULL,NULL,NULL,68921000,-36409000,1028000,NULL,12.2802193816,0.0752999608865),
    (83,'PNBK','2018-12-31 00:00:00',NULL,NULL,NULL,7670000,NULL,326000,0.0425032594524,NULL,NULL,NULL,951696000,882356000,66437000,NULL,NULL,NULL,NULL,NULL,69340000,17717000,168000,NULL,12.7250648976,0.0728594004808),
    (84,'RILY','2018-03-31 00:00:00',84085000,11693000,95778000,95778000,15987000,4503000,0.047014972123,NULL,68098000,177004000,1430329000,1158664000,97710000,NULL,NULL,NULL,74339000,NULL,271543000,-54510000,-54055000,624000,4.26696324339,0.189846531812),
    (85,'RILY','2018-06-30 00:00:00',111527000,13974000,125501000,125501000,34804000,16997000,0.135433183799,NULL,76723000,1282124000,1877169000,1612893000,191741000,NULL,NULL,NULL,1205262000,NULL,263422000,94216000,-154711000,-5427000,6.12284850924,0.140329400283),
    (86,'RILY','2018-09-30 00:00:00',91473000,8208000,99681000,99681000,19691000,2814000,0.0282300538719,NULL,71782000,NULL,1920901000,1651755000,234386000,NULL,NULL,NULL,1276213000,NULL,268384000,42942000,129871000,-598000,6.15444661381,0.13971776786),
    (87,'RILY','2018-12-31 00:00:00',83526000,18505000,102031000,102031000,6447000,-8805000,-0.0862973018004,NULL,77079000,300662000,1957710000,1699050000,180278000,NULL,NULL,NULL,179440000,NULL,258058000,-54044000,-25919000,-3501000,6.58398499562,0.131816254706),
    (88,'SLCT','2018-03-31 00:00:00',NULL,NULL,NULL,12869000,NULL,1897000,0.147408501049,NULL,NULL,NULL,1222551000,1084878000,100768000,32173000,NULL,NULL,NULL,71545000,137673000,38073000,-7780000,86000,7.88010721056,0.112611253027),
    (89,'SLCT','2018-06-30 00:00:00',NULL,NULL,NULL,13155000,NULL,3110000,0.236412010642,NULL,NULL,NULL,1216731000,1076029000,84495000,21071000,NULL,NULL,NULL,78443000,140702000,-16273000,3671000,-217000,7.64757430598,0.115639364823),
    (90,'SLCT','2018-09-30 00:00:00',NULL,NULL,NULL,12918000,NULL,4321000,0.334494503793,NULL,NULL,NULL,1252156000,1047451000,123393000,11002000,NULL,NULL,NULL,68374000,204705000,38898000,3621000,17000,5.11688038885,0.163482026201),
    (91,'SLCT','2018-12-31 00:00:00',NULL,NULL,NULL,13144000,NULL,4454000,0.338861838101,NULL,NULL,NULL,1258525000,1048914000,139362000,7000000,NULL,NULL,NULL,64372000,209611000,15969000,5301000,354000,5.00409806737,0.16655290916),
    (92,'TREE','2018-06-30 00:00:00',178058000,6043000,184101000,184101000,17789000,42547000,0.231106838094,5967000,160269000,387516000,709333000,361905000,293350000,NULL,NULL,NULL,293301000,NULL,346841000,-57204000,-3991000,11086000,1.04343200487,0.488967804966),
    (93,'TREE','2018-09-30 00:00:00',186219000,10838000,197057000,197057000,24566000,25728000,0.130561208178,6608000,161653000,361271000,743639000,367173000,265241000,NULL,NULL,NULL,265194000,NULL,375889000,-28109000,41835000,12097000,0.976812303632,0.505472413362),
    (94,'TREE','2018-12-31 00:00:00',188850000,13822000,202672000,202672000,12240000,-3300000,-0.0162824662509,8123000,176610000,234171000,896115000,549907000,105158000,125000000,NULL,NULL,105102000,375943000,346208000,-160083000,57837000,9981000,1.58837173029,0.386343270674),
    (95,'TREE','2019-03-31 00:00:00',244720000,17670000,262390000,262390000,12637000,-512000,-0.00195129387553,10166000,232083000,218966000,992505000,640317000,64603000,185000000,NULL,NULL,64565000,439248000,352188000,-40555000,20442000,14521000,1.81811134962,0.354847582632),
    (96,'TRUP','2018-03-31 00:00:00',11064000,58696000,69760000,69760000,-1496000,-1480000,-0.0212155963303,2164000,12560000,97509000,117218000,68971000,31386000,NULL,NULL,NULL,70146000,NULL,48247000,5010000,2077000,NULL,1.4295396605,0.411600607415),
    (97,'TRUP','2018-06-30 00:00:00',12353000,61039000,63867000,73392000,-257000,-377000,-0.00513679965119,2298000,12610000,173668000,194299000,78047000,96824000,NULL,NULL,NULL,138226000,NULL,116252000,65709000,-466000,NULL,0.671360492723,0.598314968168),
    (98,'TRUP','2018-09-30 00:00:00',13744000,64420000,78164000,78164000,906000,1205000,0.015416304181,2299000,12838000,110268000,199875000,72013000,36077000,NULL,NULL,NULL,74099000,NULL,127862000,-60855000,7405000,NULL,0.563208771957,0.639709818637),
    (99,'TRUP','2018-12-31 00:00:00',14205000,68435000,82640000,82640000,-198000,-275000,-0.00332768635044,2487000,14403000,117976000,207510000,78337000,27952000,NULL,NULL,NULL,81111000,NULL,129173000,-7406000,3664000,NULL,0.606450264374,0.622490482386),
    (100,'TSBK','2018-03-31 00:00:00',NULL,NULL,NULL,12020000,NULL,4269000,0.355158069884,NULL,NULL,NULL,1001201000,883358000,169405000,NULL,NULL,NULL,NULL,NULL,117843000,3198000,2658000,-643000,7.49605831488,0.11770164033),
    (101,'TSBK','2018-06-30 00:00:00',NULL,NULL,NULL,12299000,NULL,4416000,0.359053581592,NULL,NULL,NULL,1006383000,885489000,156826000,NULL,NULL,NULL,NULL,NULL,120894000,-12579000,8126000,-559000,7.32450741972,0.120127227904),
    (102,'TSBK','2018-09-30 00:00:00',NULL,NULL,NULL,14118000,NULL,4422000,0.313217169571,NULL,NULL,NULL,1018290000,893633000,148864000,NULL,NULL,NULL,NULL,NULL,124657000,-7962000,4908000,-535000,7.16873500886,0.122417975233),
    (103,'TSBK','2018-12-31 00:00:00',NULL,NULL,NULL,15188000,NULL,5615000,0.369699762971,NULL,NULL,NULL,1200315000,1043410000,161743000,NULL,NULL,NULL,NULL,NULL,156905000,12879000,6774000,-397000,6.64994742041,0.130719852705),
    (104,'UMH-C','2018-03-31 00:00:00',7466343,22329621,29795964,29795964,4303715,-22208337,-0.745347155071,NULL,3162628,75242405,813387119,366838552,31913649,NULL,NULL,NULL,25951970,NULL,446548567,4022400,10289819,-4402,0.821497546089,0.548998818114),
    (105,'UMH-C','2018-06-30 00:00:00',16469545,15629005,32098550,32098550,4337361,20071984,0.625323698423,NULL,12132184,181927280,862752684,400226875,19966325,NULL,NULL,NULL,153290616,NULL,462525809,-11947324,4155030,64927,0.865307118462,0.53610474656),
    (106,'UMH-C','2018-09-30 00:00:00',16645694,16801420,33447114,33447114,5010856,-6349343,-0.189832312588,NULL,11634838,70234968,868504952,415391383,14773815,NULL,NULL,NULL,8879883,NULL,453113569,-5192510,10282635,-807623,0.916748937616,0.521716736279),
    (107,'UMH-C','2018-12-31 00:00:00',16745980,17499085,34245065,34245065,4925211,-27729875,-0.809748061509,NULL,11820769,66909750,878985924,454287884,12777411,NULL,NULL,NULL,7433470,NULL,424698040,-1996404,15447702,858120,1.06967266437,0.48316819235),
    (108,'UMH-D','2018-03-31 00:00:00',7466343,22329621,29795964,29795964,4303715,-22208337,-0.745347155071,NULL,3162628,75242405,813387119,366838552,31913649,NULL,NULL,NULL,25951970,NULL,446548567,4022400,10289819,-4402,0.821497546089,0.548998818114),
    (109,'UMH-D','2018-06-30 00:00:00',16469545,15629005,32098550,32098550,4337361,20071984,0.625323698423,NULL,12132184,181927280,862752684,400226875,19966325,NULL,NULL,NULL,153290616,NULL,462525809,-11947324,4155030,64927,0.865307118462,0.53610474656),
    (110,'UMH-D','2018-09-30 00:00:00',16645694,16801420,33447114,33447114,5010856,-6349343,-0.189832312588,NULL,11634838,70234968,868504952,415391383,14773815,NULL,NULL,NULL,8879883,NULL,453113569,-5192510,10282635,-807623,0.916748937616,0.521716736279),
    (111,'UMH-D','2018-12-31 00:00:00',16745980,17499085,34245065,34245065,4925211,-27729875,-0.809748061509,NULL,11820769,66909750,878985924,454287884,12777411,NULL,NULL,NULL,7433470,NULL,424698040,-1996404,15447702,858120,1.06967266437,0.48316819235),
    (112,'WVFC','2018-03-31 00:00:00',NULL,NULL,NULL,1784000,NULL,634000,0.355381165919,NULL,NULL,NULL,356441000,322271000,6863000,179791000,NULL,NULL,NULL,NULL,34170000,-1658000,1071000,NULL,9.43140181446,0.0958643927045),
    (113,'WVFC','2018-06-30 00:00:00',NULL,NULL,NULL,1692000,NULL,592000,0.34988179669,NULL,NULL,NULL,352288000,318271000,2441000,171403000,NULL,NULL,NULL,NULL,34017000,-4422000,726000,NULL,9.35623364788,0.0965602007448),
    (114,'WVFC','2018-09-30 00:00:00',NULL,NULL,NULL,1910000,NULL,748000,0.391623036649,NULL,NULL,NULL,349939000,315234000,5917000,160484000,NULL,NULL,NULL,NULL,34705000,3476000,903000,NULL,9.08324448927,0.0991744275431),
    (115,'WVFC','2018-12-31 00:00:00',NULL,NULL,NULL,1813000,NULL,685000,0.377826806398,NULL,NULL,NULL,348982000,315595000,3628000,70067000,NULL,NULL,NULL,170067000,33387000,-2289000,1231000,NULL,9.45263126367,0.0956696907004);
