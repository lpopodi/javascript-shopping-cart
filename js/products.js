       var btnDiaperBags = document.getElementById("btnDiaperBags");
    	var btnToys = document.getElementById("btnToys");
		var btnOnesies = document.getElementById("btnOnesies");
        var btnCostumes = document.getElementById("btnCostumes");  
    	var btnMusic = document.getElementById("btnMusic");
		var divContent = document.getElementById("content");
		
		btnDiaperBags.addEventListener("click", function(){
			
			var len = products.diaperbags.length;
			var i = 0;
			
			clearContent();
			
			for(i = 0; i < len; i++){
				
				var div = document.createElement("div");
					div.setAttribute("class", "box photo col2");
					
				var img = document.createElement("img");
					img.setAttribute("src", "images/" + products.diaperbags[i].id + ".jpg");	
					div.appendChild(img);
					
				var spanName = document.createElement("span");
					spanName.setAttribute("class", "productName");
					spanName.textContent = products.diaperbags[i].name;
					div.appendChild(spanName);
					
				var spanPrice = document.createElement("span");
					spanPrice.setAttribute("class", "productPrice");
					spanPrice.textContent = products.diaperbags[i].price;
					div.appendChild(spanPrice);		
	
				divContent.appendChild(div);
			}
		});			
        
        btnToys.addEventListener("click", function(){
			
			var len = products.toys.length;
			var i = 0;
			
			clearContent();
			
			for(i = 0; i < len; i++){
				
				var div = document.createElement("div");
					div.setAttribute("class", "box photo col2");
					
				var img = document.createElement("img");
					img.setAttribute("src", "images/" + products.toys[i].id + ".jpg");	
					div.appendChild(img);
					
				var spanName = document.createElement("span");
					spanName.setAttribute("class", "productName");
					spanName.textContent = products.toys[i].name;
					div.appendChild(spanName);
					
				var spanPrice = document.createElement("span");
					spanPrice.setAttribute("class", "productPrice");
					spanPrice.textContent = products.toys[i].price;
					div.appendChild(spanPrice);		
	
				divContent.appendChild(div);
			}
		});			
			
        btnOnesies.addEventListener("click", function(){
			
			var len = products.onesies.length;
			var i = 0;
			
			clearContent();
			
			for(i = 0; i < len; i++){
				
				var div = document.createElement("div");
					div.setAttribute("class", "box photo col2");
					
				var img = document.createElement("img");
					img.setAttribute("src", "images/" + products.onesies[i].id + ".jpg");	
					div.appendChild(img);
					
				var spanName = document.createElement("span");
					spanName.setAttribute("class", "productName");
					spanName.textContent = products.onesies[i].name;
					div.appendChild(spanName);
					
				var spanPrice = document.createElement("span");
					spanPrice.setAttribute("class", "productPrice");
					spanPrice.textContent = products.onesies[i].price;
					div.appendChild(spanPrice);		
	
				divContent.appendChild(div);
			}
		});			

        btnMusic.addEventListener("click", function(){
        	
			var len = products.music.length;
			var i = 0;
			
			clearContent();
			
			for(i = 0; i < len; i++){
				
				var div = document.createElement("div");
					div.setAttribute("class", "box photo col2");
					
				var img = document.createElement("img");
					img.setAttribute("src", "images/" + products.music[i].id + ".jpg");	
					div.appendChild(img);
					
				var spanName = document.createElement("span");
					spanName.setAttribute("class", "productName");
					spanName.textContent = products.music[i].name;
					div.appendChild(spanName);
					
				var spanPrice = document.createElement("span");
					spanPrice.setAttribute("class", "productPrice");
					spanPrice.textContent = products.music[i].price;
					div.appendChild(spanPrice);		
	
				divContent.appendChild(div);
			}
		});	

        btnCostumes.addEventListener("click", function(){
    		
			var len = products.costumes.length;
			var i = 0;
			
			clearContent();
			
			for(i = 0; i < len; i++){
				
				var div = document.createElement("div");
					div.setAttribute("class", "box photo col2");
					
				var img = document.createElement("img");
					img.setAttribute("src", "images/" + products.costumes[i].id + ".jpg");	
					div.appendChild(img);
					
				var spanName = document.createElement("span");
					spanName.setAttribute("class", "productName");
					spanName.textContent = products.costumes[i].name;
					div.appendChild(spanName);
					
				var spanPrice = document.createElement("span");
					spanPrice.setAttribute("class", "productPrice");
					spanPrice.textContent = products.costumes[i].price;
					div.appendChild(spanPrice);		
	
				divContent.appendChild(div);
			}
		});	

		function clearContent(){
				var len = divContent.childNodes.length;
				var i = 0;
				for(i = 0; i < len; i++){
				divContent.removeChild(divContent.firstChild);
				}
		}