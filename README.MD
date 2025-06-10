# sparx_hack
solves sparx maths questions for you form a simple browser extension

chromium browsers only

The majority of the js code was from https://github.com/Sparxist/SparxMathsExtract
|- This person made the extension and get full credit for the html, css & js
|- I did make crucial edits to the code like fetch a response from the python server and displaying the result

YOU WILL REQUIRE A CHATGPT KEY WITH CREDIT
|- i will not provide you with this

the minimum you can pay ChatGPT is $5 ~ £4.44 for me in uk
i think it is unlikely you will EVER need more as i only use £0.06 of this during the entire development of the code

the python server uses flask and openai which are the only dependencies overall

    pip install flask
    pip install flask_cors
    pip install openai

You need to locally upload the extensions to chrome/other browser (only tested on chrome)
|- go to the extensions icon and click manage extensions
|- click developer mode at top right corner
|- click load unpacked and selcted the SparxsMathsExtract-main folder

after you can start the python server in the background

    git clone 
    cd 
    python server.py

The final result will be in the standard ai sytnax text thing to let computers understand things like fractions and indices that cannot easily be put into a single string

This does not work on images as they cannot be copied and the gpt model does not support images
you can add support for this if you want but idk how well it will work
