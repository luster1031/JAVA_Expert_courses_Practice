
var imageViewer ={
	init:function(){
		console.log(this);
		$(function() {
			console.log(this);
			var interval = null;
			var isStop = false;
			$("#btn-change").click(function() {
				this._changeImage;
				$(".image-viewer #btn-slideshow").text('슬라이드쇼 중지');
			});
			$("img").click(function() {
				this._changeImage.bind(this);
				$(".image-viewer #btn-slideshow").text('슬라이드쇼 중지');
			});
			$("#btn-slideshow").click(function() {
				
				if(!isStop){
					interval = setInterval(function(){
						console.log(typeof(this._changeImage));
						console.log(this);
						this._changeImage();
					}.bind(this),1000);
					$(".image-viewer #btn-slideshow").text('슬라이드쇼 중지');
					console.log(isStop);
					isStop = true;
				}
				else{
					console.log("중지");
					clearInterval(interval);
					$(".image-viewer #btn-slideshow").text('슬라이드쇼 시작');
					isStop = false;
				}
			}.bind(this));
		}.bind(this));
		
	},
	_changeImage:function() {
		
		console.log(this);
		
		console.log("이미지바꾸기");
		console.log(this.setInterval);
		
		var index = Math.floor(Math.random() * (this._images.length - 1)) + 1;
		$(".image-viewer img").attr({
			alt : this._images[index].name,
			src : 'images/' + this._images[index].file
		});
		
	},
	//	추가
	
	_images : [ 
	    {
	    	name:"국화",
	    	file:"Chrysanthemum.jpg"
	    },
	    {
	    	name:"사막",
	    	file:"Desert.jpg"
	    },
	    {
	    	 name:"수국",
	    	 file:"Hydrangeas.jpg"  
	    },
	    {
	    	name:"해파리",
	    	file:"Jellyfish.jpg"
	    },
	    {
	    	name:"코알라",
	    	file:"Koala.jpg"
	    },
	    {
	    	name:"등대",
	    	file:"Lighthouse.jpg"
	    },
	   	{
	    	name:"펭귄",
	    	file:"Penguins.jpg"  
	   	},
	    {
	   	 	name:"툴립",
	   	 	file:"Tulips.jpg"  
	    }]
}