const bagpack={
volume:40,
color:"black",
size:{
width:10,
height:20
},
pocket:2,
zipOpen:false,
carryLuggage:function(status){
    this.zipOpen=status;
},
newSize:function(newWidth,newHeight){
    this.size.width=newWidth;
    this.size.height=newHeight;
}
}
//console.log("bagpack object:",bagpack)
//console.log(bagpack.zipOpen)
//console.log("bagpack object:",bagpack.size.height)
console.log(bagpack["pocket"])