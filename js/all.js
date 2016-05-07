function rr(event){
	var element = document.getElementById("imgview");
	element.innerHTML="";

	var files = document.getElementById("my-input").files;
	// console.log(files.length);
	// console.log(files[0]);
	// console.log(document.getElementById("my-input").value);
	var output = document.getElementById("aa");
	for(var i=0;i<files.length;i++){
		console.log(event.target);
		console.log(event.target.files[i].name);
		var file = files[i];
	            //Only pics
	            if(!file.type.match('image')){
	        		continue;
	            }
	            var picReader = new FileReader();
	            picReader.addEventListener("load",function(event){
			var picFile = event.target;
			var para = document.createElement("img");
			para.style.maxwidth = '100px';
			para.style.maxheight = '100px';
			para.style.margin='10px';
			para.src=picFile.result;
			element.appendChild(para);
			// aa.src=picFile.result;
			console.log("123");
	            });
	            //Read the image
	            picReader.readAsDataURL(file);
	}
}