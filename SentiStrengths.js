
var strengths = [
	{
		//done
		"name": "Achiever",
		"search": "Achieve",
		"type": "verb"
	},
	{
		//done
		"name": "Activator",
		"search": "Activate",
		"type": "verb"
	},
	{
		//done
		"name": "Adaptability",
		"search": "Adapt",
		"type": "verb"
	},
	{
		//done
		"name": "Analytical",
		"search": "Analyze",
		"type": "verb"
	},
	{
		//done
		"name": "Arranger",
		"search": "Arrange",
		"type": "verb"
	},
	{
		//done
		"name": "Belief",
		"search": "Belief",
		"type": "noun"
	},
	{
		"name": "Command",
		"search": "Command",
		"type": "verb"
	},
	{
		"name": "Communication",
		"search": "Communicate",
		"type": "verb"
	},
	{
		"name": "Competition",
		"search": "Compete",
		"type": "verb"
	},
	{
		"name": "Connectedness",
		"search": "Connect",
		"type": "verb"
	},
	{
		"name": "Consistency",
		"search": "Consistent",
		"type": "adjective"
	},
	{
		"name": "Context",
		"search": "Context",
		"type": "noun"
	},
	{
		"name": "Deliberative",
		"search": "Deliberate",
		"type": "verb"
	},
	{
		"name": "Developer",
		"search": "Develop",
		"type": "verb"
	},
	{
		"name": "Discipline",
		"search": "Discipline",
		"type": "noun"
	},
	{
		"name": "Empathy",
		"search": "Empathy",
		"type": "noun"
	},
	{
		"name": "Focus",
		"search": "Focus",
		"type": "verb"
	},
	{
		"name": "Futuristic",
		"search": "Futuristic",
		"type": "adjective"
	},
	{
		"name": "Harmony",
		"search": "Harmony",
		"type": "noun"
	},
	{
		"name": "Ideation",
		"search": "Ideation",
		"type": "noun"
	},
	{
		"name": "Includer",
		"search": "Include",
		"type": "verb"
	},
	{
		"name": "Individualization",
		"search": "Individual",
		"type": "adjective"
	},
	{
		"name": "Input",
		"search": "Input",
		"type": "noun"
	},
	{
		"name": "Intellection",
		"search": "Intellect",
		"type": "noun"
	},
	{
		"name": "Learner",
		"search": "Learn",
		"type": "verb"
	},
	{
		"name": "Maximizer",
		"search": "Maximize",
		"type": "verb"
	},
	{
		"name": "Positivity",
		"search": "Positivity",
		"type": "noun"
	},
	{
		"name": "Relator",
		"search": "Relate",
		"type": "verb"
	},
	{
		"name": "Responsibility",
		"search": "Responsibility",
		"type": "noun"
	},
	{
		"name": "Restorative",
		"search": "Restore",
		"type": "verb"
	},
	{
		"name": "Self-Assurance",
		"search": "Self-assurance",
		"type": "noun"
	},
	{
		"name": "Significance",
		"search": "Significance",
		"type": "noun"
	},
	{
		"name": "Strategic",
		"search": "Strategic",
		"type": "adjective"
	},
	{
		"name": "Woo",
		"search": "Woo",
		"type": "verb"
	}
];

var achiever = ["accomplish","attain","reach","bring home the bacon","come through","deliver the goods","succeed","win"];
var activator = ["trip","actuate","trigger","set off","spark off","spark","trigger off","touch off","aerate","alter","change","initiate","modify","pioneer"];
var adaptor = ["accommodate","adjust","conform","alter","change","vary"];
var analytical = ["analyse","study","examine","canvass","canvas","break down","dissect","take apart","psychoanalyze","psychoanalyse","care for","treat"];
var arranger = ["set up","fix up","stage","format","dress","set","do","coif","coiffe","coiffure","put","order","agree","change","compose","concord","concur","groom","hold","initiate","lay","neaten","organise","organize","pioneer","place","pose","position","write"];
var belief = ["impression","feeling","notion","opinion","cognitive content","content","idea","mental object","thought"];
var command = ["bid","bidding","dictation","control","mastery","instruction","statement","program line","accessibility","authorisation","authority","authorization","availability","availableness","code","computer code","dominance","force","handiness","military force","military group","military unit","position","potency","say-so","skillfulness","speech act","status"];
var communication = ["communicate","pass on","pass","pass along","put across","intercommunicate","convey","transmit","commune","covenant","interact","transfer"];
var competition = ["vie","contend"];
var connectedness = ["link","tie","link up","associate","tie in","relate","colligate","join","unite","get in touch","touch base","plug in","be","bring together","cerebrate","cogitate","collide with","enter","hit","impinge on","infix","insert","interact","introduce","run into","strike","think"];
var consistency = ["reproducible","coherent","logical","ordered","uniform","orderly"];
var context = ["linguistic context","context of use","circumstance","discourse","environment"];
var deliberative = ["consider","debate","moot","turn over","discuss","hash out","talk over"];
var developer = ["evolve","germinate","acquire","grow","produce","get","originate","arise","rise","uprise","spring up","build up","explicate","formulate","train","prepare","educate","modernize","modernise","make grow","break","recrudesce","alter","ameliorate","amend","become","better","bring forth","change","come about","complicate","conjecture","create","create by mental act","create mentally","elaborate","expand","fall out","generate","go on","hap","happen","hypothecate","hypothesise","hypothesize","improve","instruct","lay over","learn","meliorate","modify","occur","pass","pass off","play","rarify","refine","speculate","superimpose","superpose","suppose","take place","teach","theorise","theorize"];
var discipline = ["subject","subject area","subject field","field","field of study","study","bailiwick","correction","branch of knowledge","grooming","knowledge base","knowledge domain","penalisation","penalization","penalty","preparation","punishment","system","system of rules","training","trait"];
var empathy = ["fellow feeling","sympathy"];
var focus = ["focusing","focussing","focal point","direction","centering","nidus","stress","absorption","accent","clarity","clearness","concentration","distinctness","emphasis","engrossment","immersion","limpidity","lucidity","lucidness","pellucidity","point","sharpness"];
var futuristic = ["futurist","artistic movement"];
var harmony = ["harmoniousness","musical harmony","concord","concordance","agreement","compatibility","music","order","sound property"];
var ideation = ["cerebration","intellection","mentation","thinking","thought","thought process"];
var includer = ["admit","let in","add","allow","consider","countenance","let","permit","reckon","regard","see","view"];
var individualization = ["single","case-by-case","item-by-item","private","separate"];
var input = ["input signal","stimulation","stimulus","stimulant","component","constituent","element","information","sign","signal","signaling"];
var intellection = ["mind","reason","understanding","intellectual","faculty","individual","intelligence","mental faculty","module","mortal","person","somebody","someone","soul"];
var learner = ["larn","acquire","hear","get word","get wind","pick up","find out","get a line","discover","see","memorize","memorise","con","study","read","take","teach","instruct","determine","check","ascertain","watch","hit the books","inform"];
var maximizer = ["maximise","exploit","increase","tap"];
var positivity = ["positiveness","positivism","favorableness","favourableness","advantageousness","profitableness","incontrovertibility","incontrovertibleness","advantage","amount","indisputability","indubitability","polarity","quality","sign","unquestionability","unquestionableness","vantage"];
var relator = ["associate","tie in","link","colligate","link up","connect","refer","pertain","concern","come to","bear on","touch","touch on","interrelate","be","cerebrate","cogitate","interact","narrate","recite","recount","tell","think"];
var responsibility = ["duty","obligation","province","responsibleness","area","arena","domain","field","orbit","social control","sphere","trustiness","trustworthiness"];
var restorative = ["reconstruct","regenerate","rejuvenate","restitute","repair","mend","fix","bushel","doctor","furbish up","touch on","reinstate","reestablish","alter","ameliorate","amend","better","change","give back","improve","meliorate","modify","refund","renew","repay","return"];
var selfAssurance = ["assurance","confidence","self-confidence","authority","sureness","certainty"];
var significance = ["import","implication","meaning","signification","content","importance","message","subject matter","substance"];
var strategic = ["strategical"];
var woo = ["court","romance","solicit","act","move"];

var hardCodedStrengths = [achiever, activator, adaptor, analytical, arranger, belief, command,
						  communication, competition, connectedness, consistency, context, deliberative,
						  developer, discipline, empathy, focus, futuristic, harmony, ideation, includer,
						  individualization, input, intellection, learner, maximizer, positivity, relator,
						  responsibility, restorative, selfAssurance, significance, strategic, woo];


var key = '5cdf372f7c5d01f206dcea6da3af0907';
//var key = '7c0c6e269f7a1b1734e539fede55014b';
//var key = "f2ff7a6c7b5c8e32248530c4eaf43c6b"
var empty = [];
var counter = 0;
var test;
var display = [];

$('#startCalc').click(function(event){
        strengths.forEach(function(element){
        var title = element.name
        var word = element.search
        var type = element.type
        var url = 'https://words.bighugelabs.com/api/2/' + key + '/'+ word +'/json'
        var synonyms;
        
        $.getJSON(url, function(result){
            if(type == 'verb')
                synonyms = result.verb.syn
            if(type == 'noun')
                synonyms = result.noun.syn
            if(type == 'adjective')
                synonyms = result.adjective.syn
            for(var i = 0; i < synonyms.length; i++){
                var userInput = $('#userInput').val();
                test = userInput.includes(synonyms[i])
               if(test==true){
                    
                    counter++;
                    
                } 
            }
            /*
            		TODO: cycle through display list and check for synonyms again. Display them based on which 
            		strength is clicked.
            
		            var synonymList = $('ul.synonyms')
					$.each(synonyms,function(i){
						var li = $('<li/>')
						.addClass('ui-menu-item')
						.attr('role', 'menuitem')
						.appendTo(synonymList);
						var hold = $('<a/>')
						.addClass('ui-all')
						.text(synonymList[i])
						.appendTo(li);
					})
			*/
			
            empty.push
            ({
            title,
            counter
            })
            counter = 0;
            });
        })
        
        //need a way to sort the list
        setTimeout(function(){
            for(var t = 0; t < empty.length; t++){
            if(empty[t].counter != 0){
                //console.log(empty[t])
                display.push(empty[t])
            }
        }
        var trueDis = []
        console.log("DONE")
        
        var newArray = [];
        var Maxholder = {
        	counter : 0
        };
        
        function check(){
        	Maxholder = {
        		counter : 0
        	};
        	for(var i = 0; i < display.length; i++){
	        	if(display[i].counter > Maxholder.counter){
	        		Maxholder = display[i]
	        	}
        	}
        	newArray.push(Maxholder)
        	for(var i = 0; i < display.length; i++){
        		if(Maxholder == display[i]){
        			display.splice(i,1)
        		}
        	}
        	
        }
        
        for(var x = 0; x < 5; x++){
        	check()
        }
        
        
        var stringCount1 = newArray[0].counter.toString();
        var stringCount2 = newArray[1].counter.toString();
        var stringCount3 = newArray[2].counter.toString();
        var stringCount4 = newArray[3].counter.toString();
        var stringCount5 = newArray[4].counter.toString();
        
        $('#strength1').text(newArray[0].title)
        $('#strength2').text(newArray[1].title)
        $('#strength3').text(newArray[2].title)
        $('#strength4').text(newArray[3].title)
        $('#strength5').text(newArray[4].title)
        
        $('#strength1Count').text(stringCount1)
        $('#strength2Count').text(stringCount2)
        $('#strength3Count').text(stringCount3)
        $('#strength4Count').text(stringCount4)
        $('#strength5Count').text(stringCount5)
        
        
        
        }, 5000)
        
        //console.log(empty)
        

        
        
        
})

$(document).ready(function(event){
	$('#synonyms').hide();
	$( '#Show' ).click(function() {
         if($( '#synonyms' ).is(":visible")){
              $( '#synonyms' ).hide();
         } else{
              $( '#synonyms' ).show();
         }
    });
})

