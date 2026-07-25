//UDMv3.4.1.1b
if (!exclude) { 


//  ULTIMATE DROPDOWN MENU VERSION 3.4.1b 
//  http://www.brothercake.com/dropdown/ 
//  Link-wrapping Brendan Armstrong
//  KDE mods David Joham
//  Opera reload/resize Michael Wallner
//  http://www.wallner-software.com/
//  (http://www.dynamicdrive.com)


// POSITIONING AND STYLES 
//var menuALIGN = "center";  //custom2 (new pages)
var menuALIGN = "left";    //custom (old pages)
		
var absTOP = 73;
var absLEFT = 10;

var staticMENU = false;		

var stretchMENU = false;	
var showBORDERS = false;	

var baseHREF = "/jsmenu/";	  
var zORDER = 	1000;		

var mCOLOR = 	"#FAEBD7"; 	//main cell color   "#6495ED"; #708090	  
var rCOLOR = 	"#FFCC99"; 	//main rollover color 	 #F5DEB3";#F4A460"; #DAA520"; 
var bSIZE = 	1;		
var bCOLOR = 	"#663300";   	// main border color "#0000FF";#FFFFFF";//8B4513"; //#8B0000"
var aLINK = 	"#663300"; 	// main link color #FFFFFF";//8B4513"; //#A0522D"; //#8B0000";
var aHOVER = 	"black";	// main hover color
var aDEC = 	"";		
var fFONT = 	"century gothic";	
var fSIZE = 	20;		
var fWEIGHT = 	"normal"		
var tINDENT = 	7;		
var vPADDING = 	6;		
var vtOFFSET = 	0;		

var keepLIT =	true;		
var vOFFSET = 	5;		
var hOFFSET = 	-1;		

var smCOLOR = 	"#FAEBD7";  //6495ED";	
var srCOLOR = 	"#FFCC99"; //F5DEB3";	
var sbSIZE = 	1;		
var sbCOLOR = 	"#663300";  //"#663300"		// submenu border color
var saLINK = 	"#663300"; //white";	
var saHOVER = 	"black";	
var saDEC = 	"none";		
var sfFONT = 	"comic sans ms,verdana";	
var sfSIZE = 	16;		
var sfWEIGHT = 	"normal"	
var stINDENT = 	6;		
var svPADDING = 0;		
var svtOFFSET = 0;		

var shSIZE =	8;		
var shCOLOR =	"666666";	
var shOPACITY = 35;		

var keepSubLIT = true;		
var chvOFFSET = -14; 			
var chhOFFSET = 11; 	 

var closeTIMER = 330;		

var cellCLICK = true;		
var aCURSOR = "hand";		

var altDISPLAY = "";		
var allowRESIZE = true;		

var redGRID = false;		
var gridWIDTH = 0;		
var gridHEIGHT = 0;		
var documentWIDTH = 0;		

var hideSELECT =false;		
var allowForSCALING = false;	





//var openTIMER = 10; // [** new **] menu opening delay time (not ns4/op5/op6)
//var openChildTIMER = 50; // [** new **] child-menu opening delay time (not ns4/op5/op6)
//var allowPRINTING = false; // allow the navbar and menus to print (not ns4)
//var arrWIDTH = 10; // [** new **] arrow width (not ns4/op5/op6)
//var arrHEIGHT = 10; // [** new **] arrow height (not ns4/op5/op6)
//var arrHOFFSET = -1; // [** new **] arrow horizontal offset (not ns4/op5/op6)
//var arrVOFFSET = -3; // [** new **] arrow vertical offset (not ns4/op5/op6)
//var arrVALIGN = "middle"; // [** new **] arrow vertical align (not ns4/op5/op6)
//var arrLEFT = "<"; // [** new **] left arrow (not ns4/op5/op6)
//var arrRIGHT = ">"; // [** new **] right arrow (not ns4/op5/op6)





//LINKS 


// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger")
//addMainItem("","<span class='u'>G</span>eneral",120,"center","","",0,0,"g"); ****this


// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger","mCOLOR","rCOLOR","aLINK","aHOVER") [** last four are new **]
addMainItem("","History",180,"center","","",0,0,"");


	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter","smCOLOR","srCOLOR","sbCOLOR","shCOLOR","saLINK","saHOVER") [** last six are new **]
	defineSubmenuProperties(180,"left","left",-4,0,"","#FAEBD7","#FFCC99");


	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("/general/bible_search.htm","Bible Search","","");
	addSubmenuItem("/general/noahs_age.htm","Noah's age","","");
	addSubmenuItem("/general/ark_history.htm","Ark thru History","","");
	addSubmenuItem("/ark/hull_form/ancient_hull_form.htm","Ancient Ship Clues","","");
	addSubmenuItem("","Technology >","","");
		defineChildmenuProperties(200,"left","left",16,-20,"");
		addChildmenuItem("/ark/technology/ancient_technology.htm","Ancient Technology","","");
		addChildmenuItem("/ark/technology/animal_power.htm","Animal Power","","");
		addChildmenuItem("/ark/technology/cranes_and_lifting.htm","Cranes and Lifting","","");	

addMainItem("","Ark",180,"center","","",0,0,"");

	defineSubmenuProperties(180,"left","left",-4,0,"");	

	addSubmenuItem("","Design >","","");
		defineChildmenuProperties(260,"left","left",16,-20,"");
		addChildmenuItem("/ark/hull_form/prop_hull_form.htm","Proposed Hull Shape","","");
		addChildmenuItem("/ark/design_notebook/keel_detailing.htm","Keel Detailing","","");		
		addChildmenuItem("/ark/design_notebook/the_window.htm","The Window","","");		
		addChildmenuItem("/ark/design_notebook/the_door.htm","The Door","","");		
		addChildmenuItem("/ark/design_notebook/frame_spacing.htm","Frame Spacing","","");
		addChildmenuItem("/ark/design_notebook/ramps_and_stairs.htm","Ramps and Stairs","","");	
		addChildmenuItem("/ark/design_draft/integrated_roof.htm","Integrated Roof","","");	

	addSubmenuItem("","Construction >","","");
		defineChildmenuProperties(260,"left","left",16,-20,"");
		addChildmenuItem("/ark/construct/construct_sequence.htm","Construction Sequence","","");
		addChildmenuItem("/ark/design_notebook/hull_build.htm","Hull Build Sequence","","");		
		addChildmenuItem("/ark/construct/how_long_to_build.htm","How Long did it Take?","","");		

	addSubmenuItem("","Size >","","");
		defineChildmenuProperties(220,"left","left",16,-20,"");
		addChildmenuItem("/ark/compare_ships/compare_ships.htm","Comparing the ark","","");
		addChildmenuItem("/ark/ark_images/ark_images.htm","Comparison images","","");
		addChildmenuItem("/ark/noahs_cubit/cubit_paper.htm","Which Cubit","","");
		addChildmenuItem("/ark/noahs_cubit/which_cubit.pdf","Which Cubit (pdf)","","");
		addChildmenuItem("/ark/noahs_cubit/cubit_references.htm","Cubit references","","");	
	
	addSubmenuItem("","Proportions >","","");
		defineChildmenuProperties(320,"left","left",16,-20,"");
		addChildmenuItem("/ark/safety_aig/safety_aig.htm","Ark Safety Paper - AiG","","");
		addChildmenuItem("/ark/safety_aig/safety_aig_comments.htm","Ark Safety Paper - Comments","","");		
		addChildmenuItem("/ark/safety_aig_explain/safety_aig_explain.htm","Ark Safety Paper for dummies","","");
		addChildmenuItem("/ark/basic_hull_design/long_hull.htm","Why Such a Long Hull?","","");
		addChildmenuItem("/ark/hull_form/hull_optimization.htm","Optimum Proportions","","");
		
	addSubmenuItem("","Shape >","","");
		defineChildmenuProperties(220,"left","left",16,-20,"");
		addChildmenuItem("/ark/what_shape/what_shape.htm","What shape?","","");		
		addChildmenuItem("/ark/what_shape/ark_box.htm","Does Ark mean Box?","","");
		
	addSubmenuItem("","Payload >","","");
		defineChildmenuProperties(350,"left","left",16,-20,"");
		addChildmenuItem("/ark/cargo/cargo.htm","Cargo Estimate","","");
		addChildmenuItem("/ark/centre_of_gravity/Centre_of_gravity.htm","Calculating the Centre of Gravity","","");
		
	addSubmenuItem("","Stability >","","");
		defineChildmenuProperties(250,"left","left",16,-20,"");
		addChildmenuItem("/ark/stability/static_roll_stability.htm","Static Roll Stability","","");
		addChildmenuItem("/ark/stability/roll_stability_calculator.htm","Roll Calculator","","");
		addChildmenuItem("/ark/anti_broaching/anti-broaching.htm","Broach Avoidance","","");
		addChildmenuItem("/ark/anti_broaching/bow_fin.htm","Bow Fin Design","","");
		addChildmenuItem("/ark/anti_broaching/wave_yaw.htm","Wave Yaw & Broaching","","");

	addSubmenuItem("","Strength >","","");
		defineChildmenuProperties(300,"left","left",16,-20,"");
		addChildmenuItem("/flood/waves/waves.htm","Waves","","");	
		addChildmenuItem("/ark/hull_calcs/wave_bm1.htm","Wave Bending Moment","","");
		addChildmenuItem("/ark/hull_calcs/still_water_bm.htm","Still Water Bending Moment","","");
		addChildmenuItem("/ark/design_draft/midship_section.htm","Midship Section","","");
		addChildmenuItem("/ark/design_notebook/transverse_section.htm","Transverse Section","","");
	
	addSubmenuItem("","Structure >","","");
		defineChildmenuProperties(300,"left","left",16,-20,"");
		addChildmenuItem("/ark/basic_hull_design/joining_big_logs.htm","Joining Large Timbers","","");
		addChildmenuItem("/ark/basic_hull_design/monocoque_vs_truss.htm","Monocoque vs Truss-Frame","","");
		addChildmenuItem("/ark/basic_hull_design2/monocoque_planking.htm","Monocoque Planking","","");
		addChildmenuItem("/ark/basic_hull_design2/cold_molded_hull.htm","Cold Molded Timber Hulls","","");
	
   	addSubmenuItem("","Ship Basics >","","");
		defineChildmenuProperties(220,"left","left",16,-20,"");
		addChildmenuItem("/ark/terms/ship_terms.htm","Ship Terminology","","");		
		addChildmenuItem("/ark/basic_hull_design/basic_hull_design.htm","Basic Hull Design","","");
		addChildmenuItem("/CAD/start.htm","Lofting a Hull (CAD)","","");		

	addSubmenuItem("","Wood >","","");
		defineChildmenuProperties(200,"left","left",16,-20,"");
		addChildmenuItem("/ark/wood/gopher_wood.htm","Gopher Wood","","");	
		addChildmenuItem("/ark/design_calculations/tree_nails.htm","Wooden Nails","","");	
		addChildmenuItem("/ark/wood/marine_timber.htm","Marine Timber","","");
		addChildmenuItem("/ark/wood/timber_list.htm","Timber List","","");
		addChildmenuItem("/ark/design_calculations/wood_strength.htm","Wood Strength","","");	

	addSubmenuItem("","Pitch >","","");
		defineChildmenuProperties(200,"left","left",16,-20,"");
		addChildmenuItem("/ark/pitch/pitch.htm","Pitch","","");		
		addChildmenuItem("/ark/pitch/pine_pitch_tests.htm","Pine Pitch Tests","","");				

	addSubmenuItem("","Ark Models >","","");
		defineChildmenuProperties(240,"left","left",16,-20,"");
		addChildmenuItem("/ark/modelers/ark_modelers.htm","Ark Modelers page","","");
		addChildmenuItem("/interact/scale_model/scale_ model.htm","Build an Ark Model","","");
		addChildmenuItem("/interact/scale_model/scalator.htm","Ark Scale Calculator","","");
		addChildmenuItem("/interact/canoe/canoe.htm","Noah's Ark Canoe","","");	

addMainItem("","Flood",180,"center","","",0,0,"");

	defineSubmenuProperties(180,"left","left",-4,0,"");

	addSubmenuItem("/flood/dating_the_flood/dating_the_flood.htm","Dating the Flood","","");
	addSubmenuItem("/flood/waves/waves.htm","Waves","","");
	addSubmenuItem("/flood/ararat/ararat.htm","Ark Landing","","");	
	addSubmenuItem("/ark/miracles/miracles.htm","One Big Miracle?","","");	
	addSubmenuItem("","Ark Launch >","","");		
			defineChildmenuProperties(200,"left","left",16,-20,"");
		addChildmenuItem("/flood/launch/launch.htm","Launching the ark","","");
		addChildmenuItem("/flood/launch/launch_options.htm","Launch Options","","");
		addChildmenuItem("/flood/launch/high_launch.htm","High Launch Site?","","");			
	addSubmenuItem("","Flood Legends >","","");
		defineChildmenuProperties(230,"left","left",16,-20,"");
		addChildmenuItem("/flood/legends/flood_legends.htm","Flood Legends","","");
		addChildmenuItem("/ark/gilgamesh/gilgamesh.htm","Compare to Gilgamesh","","");		

	addSubmenuItem("","Wave Tests >","","");
		defineChildmenuProperties(240,"left","left",16,-20,"");
		addChildmenuItem("/ark/model_testing/gyroscopic_model.htm","Gyroscopic Model","","");
		addChildmenuItem("/ark/model_testing/tmblog/tm01.htm","1. Construction","","");
		addChildmenuItem("/ark/model_testing/tmblog/tm02.htm","2. Hull form","","");
		addChildmenuItem("/ark/model_testing/tmblog/tm03.htm","3. Ship vs Box","","");
		addChildmenuItem("/ark/model_testing/tmblog/tm04.htm","4. Bow Sail","","");
		addChildmenuItem("/ark/hull_form/hull_demo.htm","Design Demonstrated","","");



addMainItem("","Animals",180,"center","","",0,0,"");

	defineSubmenuProperties(180,"left","left",-4,0,"");

	addSubmenuItem("","Feeding >","","");
		defineChildmenuProperties(190,"left","left",16,-20,"");
		addChildmenuItem("/ark/feeding/dispensing.htm","Food Dispensing","","");
		addChildmenuItem("/ark/feeding/water_dispensing.htm","Water Dispensing","","");
	addSubmenuItem("/ark/ventilation/ventilation.htm","Ventilation","","");	
	addSubmenuItem("/ark/technology/oil_lamps.htm","Oil Lamps","","");
	addSubmenuItem("/animals/animal_cages.htm","Cages","","");

	
	

addMainItem("","Games",180,"center","","",0,0,"");
	
	defineSubmenuProperties(180,"left","left",-4,0,"");
	addSubmenuItem("/diluvia/diluvia_dl.htm","Free Downloads","","");
	addSubmenuItem("/diluvia/defining_diluvia/defining_diluvia.htm","Defining Diluvia","","");
	addSubmenuItem("/diluvia/diluvia_world.htm","Diluvia World","","");	
	addSubmenuItem("/diluvia/diluvia_dl.htm","Sea Simulator 1","","");		
	addSubmenuItem("/games/fun_and_games.htm","Fun and Games","","");	
	addSubmenuItem("","< Objections","","");
		defineChildmenuProperties(250,"right","right",20,-15,"");
		addChildmenuItem("/objections/too_big_for_timber.htm","Too big for timber","","");
		addChildmenuItem("/objections/ancients_incapable.htm","Impossible for ancients","","");
		addChildmenuItem("/ark/miracles/miracles.htm","One Great Big Miracle?","","");

	addSubmenuItem("","< Quizzes","","");		
		defineChildmenuProperties(200,"right","right",20,-15,"");		
		addChildmenuItem("/interact/quizzes/quiz1.htm","Easy Questions","","");
		addChildmenuItem("/interact/quizzes/quiz2.htm","Famous Ark People","","");
		addChildmenuItem("/interact/quizzes/quiz3.htm","Theories & Stuff","","");	

	addSubmenuItem("","< Decisions","","");		
		defineChildmenuProperties(250,"right","right",20,-15,"");		
		addChildmenuItem("/ark/issues/ark_issues.htm","Hundreds of Ark Issues","","");
		addChildmenuItem("/ark/issues/decision_scheme.htm","Decision Scheme","","");


		
	
//var mCOLOR = 	"#FAEBD7"; 	//main cell color   "#6495ED"; #708090	  
//var rCOLOR = 	"#FFCC99"; 	//main rollover color 	 #F5DEB3";#F4A460"; #DAA520"; 
//var bSIZE = 	1;		
//var bCOLOR = 	"#663300";   	// main border color "#0000FF";#FFFFFF";//8B4513"; //#8B0000"
//var aLINK = 	"#663300"; 	// main link color #FFFFFF";//8B4513"; //#A0522D"; //#8B0000";
//var aHOVER = 	"black";	// main hover color	

}