//Get the "thumbs" div and assign it to a global variable
var myThumbDiv = document.getElementById("thumbs");

//Create an empty array that will hold the images
var imageListA = [];
//Loading the images into the array imageListA.
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//Open the "thumbs-block" div
	output += '<div class="thumbs_block">';

	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator.
		output += '<img src="' + imageListA[i] + '" />';

	}
	//Close the "thumbs-block" div
	output += '</div>';
	
	//add the images in imageListA to the "thumbsDiv"
	thumbsDiv.innerHTML = output;
}
//When the page finishes loading "fire off" or invoke the function being called...in this case buildThumbnails() 
window.onload = function()
{
	buildThumbnails();
};

//create a new array to hold the purchased images
var purchasedImages = [];

//attach a click event to the Div with the ID "thumbs".
myThumbDiv.addEventListener("click", onImageClick, false);

function onImageClick(evt){
	//We only want the src attribute of the image, so we need to get the "src" of the image that was clicked.
	var onlyPath = evt.target.getAttribute("src");
		
	//The indexOf array method searches for a match in the array and the data it finds the data, it sends back (returns) the index position in the array
	var imageIndex = imageListA.indexOf(onlyPath);
	
	//get the element you clicked on OUT of the imageListA array and save the clicked image path to a variable so we can use it later
	var selectedImage = imageListA.splice(imageIndex, 1); //removes the image that was clicked by the user from the imageListA

	//add this image path to the purchasedImage array
	purchasedImages.push(selectedImage); //push adds the element to the end of the new array.
	
	//run the update_shopping_cart function when the user clicks on an image.
	update_shopping_cart();
	
	//run the buildThumbnails function when the user clicks on an image.
	buildThumbnails();

}

function update_shopping_cart(){
	//make shortcut to the div id="shopping-cart" div
	var cart = document.getElementById("shopping-cart");

	//create an output variable so we can build it up over the following lines.
	var output = "";

	//create a for loop
	for(var i=0; i <= purchasedImages.length - 1; i++){
		output += '<img src="' + purchasedImages[i] + '" width="70" height="50" />';
	}
	//Add the selected images to the "shopping-cart" div
	cart.innerHTML = output;
}