var prev=0;
		var checker=0;
		var c=10;
		
		function f(x){
			if(checker==0)
			{
				prev=prev*10 + x;
				
				document.getElementById('res').innerHTML=prev;
			}
			else
			{
				prev=prev+(x/c);
				c=c*10;
				if(x==0)
				{
					document.getElementById('res').innerHTML=prev+".0";
				}
				else
					{
						document.getElementById('res').innerHTML=prev;
	
					}
			}

		}
		var oper=0;
		var fir=0;
		function op(x){
			opchecker=1;
			oper=x;
			
			fir=prev
			document.getElementById('res').innerHTML=oper;
			prev=0;
			c=10;
			checker=0;
		}
		function final(){
			c=10;
			checker=0;
			if(opchecker==0)
				document.getElementById('res').innerHTML=prev;
			else{
			if(oper=='+')
				sum();
			else if(oper=='-')
				diff();
			else if(oper=='x')
				pro();
			else
				divide();
		}

		}
		
		function dot(){
			checker=1;
			document.getElementById('res').innerHTML=prev+'.';
		}
		function sum() {
			document.getElementById('res').innerHTML=fir+prev;
			prev=fir+prev;
		}
		function diff() {
			document.getElementById('res').innerHTML=fir-prev;
			prev=fir-prev;
		}
		function pro() {
			document.getElementById('res').innerHTML=fir*prev;
			prev=fir*prev;
		}
		function divide() {
			if(prev==0)
				document.getElementById('res').innerHTML="error";
			else
			{
				document.getElementById('res').innerHTML=fir/prev;
				prev=fir/prev;
			}
			
		}
		function clearer() {
			prev=0;
			document.getElementById('res').innerHTML='0';
			oper=0;
			
			c=10;
			checker=0;
			opchecker=0;
		}
		
