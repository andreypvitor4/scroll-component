## Info

A responsive react component read to use. A image link list row with horizontal scroll
(click on pc and swipe on mobile)

## Getting started

This is a react component, you just need to paste the Shscroll folder in your react components folder and import the index.js as a component.

## Config

There are 3 required parameters:
  images: receive an array of objects.
    this object has 4 properties:
      image: 
        where you insert the image path(src), this is the only required propertie (the tag that has been used was the <img> tag, you might want to change it to <Image> in line 80 of the index.js)
      textTop: 
        where you insert a text that will be displayed on the top of the image.
      textBottom: 
        where you insert a text that will be displayed at the bottom of the image
        - textTop and textBottom accept jsx.
      link: 
        where you insert the url this image will take you (the tag that has been used was the <a> tag, you might want to change it to <Link> in line 74 and 85 of the index.js)
  height: receive a number (px)
  width: receive a number (px)
    height and width set the dimensions of the image space. The image will never be distorted but it will keep the original proportions and it will be placed in the image space.

Ex: 
  images = [{
    image: "/image1.jpg",
    textTop: <div style={{color: red}}> Image 1 </div>,
    textBottom: "bottom",
    link: "/page1",
  }, {
    image: "/image2.jpg",
    textTop: <div style={{color: red}}> Image 2 </div>,
    textBottom: "bottom",
    link: "/page2",
  }]

  <Shcroll images={images} height={200} width={180} />

## optional parameters

(To keep the component working properly use only px unit, and just one style at a time, do not do such thing like margin: '20px 10px', do marginTop: '20px' instead for instance)

itemBackground: 
  receives a string containing a color (background of each item on the list)
style:
  receives an object with styles like the regular tag style, the styles will be applied to the list as a whole.
itemStyle: 
  receives an object with styles like the regular tag style, the styles will be applied to each item of the list (image and texts)
imageStyle: 
  receives an object with styles like the regular tag style, the styles will be applied only to the image space

Ex:

  <Shcroll images={images} height={200} width={180} 
    itemBackground={"#888"}
    style={{
      padding: "20px",
      marginTop: "10px",
      fontFamily: "Helvetica",
      color: "white",
    }}
    itemStyle={{
      borderRadius: "8px",
    }}
    imageStyle={{
      padding: "10px",
    }}
  />