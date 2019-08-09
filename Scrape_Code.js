// find all tr elements which 
// are in tables in tables
var allofthem=$("table table tr"); 
var badones=$("table table table tr").toArray(); 

for(var i=0;i<allofthem.length;i++){
	var myhtml = allofthem[i];
	

	var tt=badones.indexOf(myhtml);
	//If it's not a bad one
	if(tt === -1)
	{	
		//console.log("==START==");
		//console.log(myhtml.innerText);
		if(myhtml.innerText.indexOf("Sec.") != -1)
		{
			x= myhtml.innerText.split("\n");
			t=x[0];
			var title = t.substring(14);
			var clazz;
			var iden;
			var date;
			date = "N/A";
			for(var j=0;j<x.length;j++){
				var lin=x[j];
				if(lin.indexOf("(a)") === 0){
					iden=lin;
				}
				if(lin.indexOf("(b)") === 0){
			// get stuff after Class, Regex
					clazz=lin;
					var regexClass = /Class I*/;  
					var match = regexClass.exec(lin);
					if(match!==null){
  						clazz = match[0];
					}else{
  						clazz = null;
					}
				}
				if(lin.indexOf(" FR ") != -1){
					date = lin;	
				}
			}
			console.log("\t" + title +"\t" + "\t" + date +"\t" + iden +"\t" + clazz);
		}
		//console.log("==END==");
	}
}