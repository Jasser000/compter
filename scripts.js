function compter(){
	ch = (document.getElementById("chaine").value);
    c=document.getElementById("c").value

    let s=0;
 
    for(let i=0; i<ch.length; i++)
    {
    	
        if(ch[i]==c)
        	s+=1
    }
    document.getElementById("result").innerHTML = "le nombre d'occurance de "+ c +" est : " + s;

}