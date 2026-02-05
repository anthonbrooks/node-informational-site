# node-informational-site

This project is an introduction to serving files with nodeJS vs expressJS. 

## How It's Made:

**Tech used:** HTML, JavaScript, nodeJS, expressJS

HTML creates a static site.  

Express is used to render the files in the browser. 

## Optimizations

*Optimizations will be made in the future as my knowledge of Javascript grows!*

## Lessons Learned:

I learned how to properly serve files by importing http and fs. These modules alongside nodeJS allow me to create a server on my local environment to serve my webpages. With this I can render up my own server for my future projects. 

I also learned how to handle errors and set the status code for the browser to display if there is success rendering the page or a server/file error.

Express is later used in the place of node to render files. Express seems like a much simpler way to read files and display them in the browser. I initially had issues with errors about the file path until i learned about __dirname. Hard coding the file path or using a relative path would only produce errors.