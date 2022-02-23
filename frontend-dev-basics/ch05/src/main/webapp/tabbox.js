var tabBox={
	onWindowLoad:function(){
		console.log(this);	//	window라서 bind걸어준다.
		
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		console.log(divTabBox.childNodes);	//	text, ul, text, div, text
		var ul = divTabBox.childNodes[1];
		console.log(ul);
		
		var liTabs = ul.getElementsByTagName("li");
		
		for(var i=0; i<liTabs.length; i++){
			liTabs[i].addEventListener('click', this.onTableClicked);
		}
	},
	onTableClicked:function(){
		
		//	unselected
		var lisSelected = document.getElementsByClassName("selected");
		
		(lisSelected.length == 1) && (lisSelected[0].className="");
		
		//	select
		this.className = 'selected';
	},
	init:function(){
		console.log(this);	//	this에는 init, onWindowLoad있음
		window.addEventListener('load', this.onWindowLoad.bind(this));
		
	}	
}