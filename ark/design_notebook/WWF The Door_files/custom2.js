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

var menuALIGN = "center";  //custom2 (homepage)
//var menuALIGN = "left";    //custom (all pages)
		
var absTOP = 64;
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
var aHOVER = 	"black";		// main hover color
var aDEC = 	"";		
var fFONT = 	"verdana";	
var fSIZE = 	11;		
var fWEIGHT = 	"normal"		
var tINDENT = 	7;		
var vPADDING = 	0;		
var vtOFFSET = 	0;		

var keepLIT =	true;		
var vOFFSET = 	5;		
var hOFFSET = 	-1;		

var smCOLOR = 	"#FAEBD7";  //6495ED";	
var srCOLOR = 	"#FFCC99"; //F5DEB3";	
var sbSIZE = 	0;		
var sbCOLOR = 	"ffffFF"		// submenu border color
var saLINK = 	"#663300"; //white";	
var saHOVER = 	"black";	
var saDEC = 	"none";		
var sfFONT = 	"verdana";	
var sfSIZE = 	11;		
var sfWEIGHT = 	"normal"	
var stINDENT = 	6;		
var svPADDING = 0;		
var svtOFFSET = 0;		

var shSIZE =	5;		
var shCOLOR =	"777777";	
var shOPACITY = 50;		

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

var hideSELECT = true;		
var allowForSCALING = false;	




//LINKS 


// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger")
//addMainItem("","Hom<span class='u'>e</span>",90,"center","","",0,0,"e");
addMainItem("","<span class='u'>G</span>eneral",120,"center","","",0,0,"g");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
	defineSubmenuProperties(140,"left","left",-4,0,"");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("/general/bible_search.htm","Bible Search","","");
	addSubmenuItem("/general/noahs_age.htm","Noah's age","","");
	addSubmenuItem("/general/ark_history.htm","Ark thru History","","");
	addSubmenuItem("/general/links.htm","Links","","");	
	addSubmenuItem("/general/about_us.htm","About us","","");
	addSubmenuItem("/general/password.htm","Secure Zone","","");	
	addSubmenuItem("/general/updates/update_list.htm","Update","","");	


addMainItem("","<span class='u'>A</span>rk Structure",120,"center","","",0,0,"a");

	defineSubmenuProperties(137,"left","left",-4,0,"");	

	addSubmenuItem("","Objections >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/objections/too_big_for_timber.htm","Too big for timber","","");
		addChildmenuItem("/objections/ancients_incapable.htm","Impossible for ancients","","");
		
	addSubmenuItem("","Size >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/compare_ships/compare_ships.htm","Comparing the ark","","");
		addChildmenuItem("/ark/ark_images/ark_images.htm","Comparison images","","");
		addChildmenuItem("/ark/noahs_cubit/cubit.htm","Noah's cubit - How long?","","");
		addChildmenuItem("/ark/noahs_cubit/cubit_references.htm","Cubit references","","");
		addChildmenuItem("/ark/noahs_cubit/cubit_paper.htm","Cubit whitepaper","","");

	
	addSubmenuItem("","Proportions >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/safety_aig/safety_aig.htm","Ark Safety Paper - AiG","","");
		addChildmenuItem("/ark/safety_aig/safety_aig_comments.htm","Ark Safety Paper - Comments","","");		
		addChildmenuItem("/ark/safety_aig_explain/safety_aig_explain.htm","Ark Safety Paper for dummies","","");
		addChildmenuItem("/ark/basic_hull_design/long_hull.htm","Why Such a Long Hull?","","");
		
	addSubmenuItem("","Shape >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/what_shape/what_shape.htm","What shape?","","");		
		addChildmenuItem("/ark/what_shape/ark_box.htm","Does Ark mean Box?","","");
		
	addSubmenuItem("","Payload >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/cargo/cargo.htm","Cargo Estimate","","");
		addChildmenuItem("/ark/centre_of_gravity/Centre_of_gravity.htm","Calculating the Centre of Gravity","","");
		addChildmenuItem("/notyet.htm","(Moments of inertia)","","");	

	addSubmenuItem("","Stability >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/stability/static_roll_stability.htm","Static Roll Stability","","");
		addChildmenuItem("/ark/stability/roll_stability_calculator.htm","Roll Calculator","","");
		addChildmenuItem("/ark/anti_broaching/anti-broaching.htm","Broach Avoidance","","");
		addChildmenuItem("/ark/anti_broaching/bow_fin.htm","Bow Fin Design","","");
		addChildmenuItem("/ark/anti_broaching/wave_yaw.htm","Wave Yaw & Broaching","","");

	addSubmenuItem("","Hull Strength >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/flood/waves/waves.htm","Waves","","");	
		addChildmenuItem("/ark/hull_calcs/wave_bm1.htm","Wave Bending Moment","","");
		addChildmenuItem("/ark/hull_calcs/still_water_bm.htm","Still Water Bending Moment","","");
	
	addSubmenuItem("","Structural Options >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/basic_hull_design/joining_big_logs.htm","Joining Large Timbers","","");
		addChildmenuItem("/ark/basic_hull_design/monocoque_vs_truss.htm","Monocoque vs Truss-Frame","","");
		addChildmenuItem("/ark/basic_hull_design2/monocoque_planking.htm","Monocoque Planking","","");
		addChildmenuItem("/ark/basic_hull_design2/cold_molded_hull.htm","Cold Molded Timber Hulls","","");
	
	addSubmenuItem("","Design Notebook >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/design_notebook/hull_build.htm","Hull Build Sequence","","");		
		addChildmenuItem("/ark/design_notebook/keel_detailing.htm","Keel Detailing","","");		
		addChildmenuItem("/ark/design_notebook/the_window.htm","The Window","","");		
		addChildmenuItem("/ark/design_notebook/the_door.htm","The Door","","");		
		addChildmenuItem("/ark/design_notebook/transverse_section.htm","Transverse Section","","");	
		addChildmenuItem("/ark/design_notebook/frame_spacing.htm","Frame Spacing","","");
		addChildmenuItem("/ark/design_notebook/ramps_and_stairs.htm","Ramps and Stairs","","");			
	
	addSubmenuItem("","Design Calculations >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/design_calculations/wood_strength.htm","Wood Strength","","");
		addChildmenuItem("/ark/design_calculations/tree_nails.htm","Wooden Nails","","");
	
	addSubmenuItem("","Design Draft >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/design_draft/integrated_roof.htm","Integrated Roof","","");		
		addChildmenuItem("/CAD/start.htm","Lofting an earlier hull design","","");
		addChildmenuItem("/ark/design_draft/midship_section.htm","Midship Section","","");		
			

addMainItem("","Ark <span class='u'>R</span>elated",120,"center","","",0,0,"r");

	defineSubmenuProperties(137,"left","left",-4,0,"");

	addSubmenuItem("","Gilgamesh >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/gilgamesh/gilgamesh.htm","Compare to Gilgamesh","","");				
	
	addSubmenuItem("","Wood >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/wood/gopher_wood.htm","Gopher Wood","","");		
		addChildmenuItem("/ark/wood/marine_timber.htm","Marine Timber","","");
		addChildmenuItem("/ark/wood/timber_list.htm","Timber List","","");		

	addSubmenuItem("","Pitch >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/pitch/pitch.htm","Pitch","","");		
		addChildmenuItem("/ark/pitch/pine_pitch_tests.htm","Pine Pitch Tests","","");		

	addSubmenuItem("","Construction >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/technology/ancient_technology.htm","Ancient Technology","","");
		addChildmenuItem("/ark/technology/animal_power.htm","Animal Power","","");
		addChildmenuItem("/ark/technology/cranes_and_lifting.htm","Cranes and Lifting Machines","","");
		addChildmenuItem("/ark/technology/louver_turbine.htm","Water Powered Saw","","");
	
	addSubmenuItem("","Feeding >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/feeding/dispensing.htm","Food Dispensing","","");
		addChildmenuItem("/ark/feeding/water_dispensing.htm","Water Dispensing","","");

	addSubmenuItem("","Lighting >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/technology/oil_lamps.htm","Oil Lamps","","");	
		
	addSubmenuItem("","Ship Basics >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/terms/ship_terms.htm","Ship Terminology","","");		
		addChildmenuItem("/ark/basic_hull_design/basic_hull_design.htm","Basic Hull Design","","");				
	
	addSubmenuItem("","Ark Models >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/modelers/ark_modelers.htm","Ark Modelers page","","");
		addChildmenuItem("/interact/scale_model/scale_ model.htm","Build an Ark Model","","");
		addChildmenuItem("/interact/scale_model/scalator.htm","Ark Scale Calculator","","");
		addChildmenuItem("/interact/canoe/canoe.htm","Noah's Ark Canoe","","");

	addSubmenuItem("","Model Testing >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/model_testing/gyroscopic_model.htm","Gyroscopic Model","","");

	addSubmenuItem("","Sea Trial Blog >","","");
		defineChildmenuProperties(200,"left","left",14,-10,"");
		addChildmenuItem("/ark/model_testing/tmblog/tm01.htm","1. Construction","","");
		addChildmenuItem("/ark/model_testing/tmblog/tm02.htm","2. Hull form","","");
		addChildmenuItem("/ark/model_testing/tmblog/tm03.htm","3. Ship vs Box","","");
		addChildmenuItem("/ark/model_testing/tmblog/tm04.htm","4. Bow Sail","","");
		

addMainItem("","<span class='u'>F</span>lood",120,"center","","",0,0,"f");

	defineSubmenuProperties(150,"left","left",-4,0,"");
	addSubmenuItem("/flood/dating_the_flood/dating_the_flood.htm","Dating the Flood","","");
	addSubmenuItem("/flood/waves/waves.htm","Waves","","");
	addSubmenuItem("","Launching the Ark >","","");		
		defineChildmenuProperties(120,"left","left",14,-10,"");
		addChildmenuItem("/flood/launch/launch.htm","Launching the ark","","");
		addChildmenuItem("/flood/launch/launch_options.htm","Launch Options","","");
		addChildmenuItem("/flood/launch/high_launch.htm","High Launch Site?","","");
	addSubmenuItem("/flood/legends/flood_legends.htm","Flood Legends","","");

		

addMainItem("","<span class='u'>Q</span>uestions",120,"center","","",0,0,"q");

	defineSubmenuProperties(130,"left","left",-4,0,"");
	
	addSubmenuItem("","Objections >","","");
		defineChildmenuProperties(150,"left","left",14,-10,"");
		addChildmenuItem("/objections/too_big_for_timber.htm","Too big for timber","","");
		addChildmenuItem("/objections/ancients_incapable.htm","Impossible for ancients","","");

	addSubmenuItem("","Quizzes >","","");		
		defineChildmenuProperties(150,"left","left",14,-10,"");
		addChildmenuItem("/interact/quizzes/quiz1.htm","Easy Questions","","");
		addChildmenuItem("/interact/quizzes/quiz2.htm","Famous Ark People","","");
		addChildmenuItem("/interact/quizzes/quiz3.htm","Theories & Stuff","","");	

	addSubmenuItem("","Issues >","","");		
		defineChildmenuProperties(150,"left","left",14,-10,"");
		addChildmenuItem("/ark/issues/ark_issues.htm","Hundreds of Ark Issues","","");

	addSubmenuItem("","Noah's Ark FAQ >","","");		
		defineChildmenuProperties(150,"left","left",14,-10,"");
		addChildmenuItem("http://www.answersingenesis.org/home/area/faq/noah.asp","Link to AiG...","","");



addMainItem("","Free <span class='u'>S</span>tuff",120,"center","","",0,0,"f");
	
	defineSubmenuProperties(135,"right","right",-4,0,"");
	addSubmenuItem("/diluvia/diluvia_dl.htm","Free Downloads","","");
	addSubmenuItem("/diluvia/defining_diluvia/defining_diluvia.htm","Defining Diluvia","","");
	addSubmenuItem("/diluvia/diluvia_world.htm","Diluvia World","","");	
	addSubmenuItem("/diluvia/diluvia_dl.htm","Sea Simulator 1","","");		
	addSubmenuItem("/games/fun_and_games.htm","Fun and Games","","");	

		
	
	

}