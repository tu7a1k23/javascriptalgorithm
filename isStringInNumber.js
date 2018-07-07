//find a string is totally in number?	
	function isNumberString() {
    var str="123423";
    var count=0;

    for(var i=0; i<str.length; i++){
    	if(str.charAt(i)==0||str.charAt(i)==1||str.charAt(i)==2||str.charAt(i)==3||str.charAt(i)==4||str.charAt(i)==5||str.charAt(i)==6||str.charAt(i)==7||str.charAt(i)==8||str.charAt(i)==9){
        	count++;
        }
    }
    if(count==str.length){
        document.getElementById("demo").innerHTML = "This String is totally in number!";
    }else{
    	document.getElementById("demo").innerHTML = "This String is not totally in number!";
    }
    
}
//the same with below code.
	function isNumberString() {
    var str="123423";
    var regex=/[0-9]/;
    var count=0;

    for(var i=0; i<str.length; i++){
    	if(regex.test(str.charAt(i))){
        	count++;
        }
    }
    if(count==str.length){
        document.getElementById("demo").innerHTML = "This String is totally in number!";
    }else{
    	document.getElementById("demo").innerHTML = "This String is not totally in number!";
    }
    
}
