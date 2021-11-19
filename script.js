let js = document.querySelector(' .js')
let css =  document.querySelector(' .css')
let html =  document.querySelector(' .html')
let python =  document.querySelector(' .python')
let jquery =  document.querySelector(' .jquery')
let ruby =  document.querySelector(' .ruby')
let go =  document.querySelector(' .go')
let swift =  document.querySelector(' .swift')
let docker =  document.querySelector(' .docker')
let php =  document.querySelector(' .php')
let react =  document.querySelector(' .react')
let angular =  document.querySelector(' .angular')

let main=document.querySelector('.main')


js.addEventListener('click', (e) =>{
        main.innerHTML= `
        <h1>Javascript</h1>

        <p>
                JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.
                 JavaScript is high-level, often just-in-time compiled and multi-paradigm.
                  It has dynamic typing, prototype-based object-orientation and first-class functions.


                <br>
                <br>
                <a href='https://overapi.com/javascript' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
                <a href='https://www.w3schools.com/js/default.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
        </p>

        `  ;
   

})



css.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>CSS</h1>

    <p>
    Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
    CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. 


            <br>
            <br>
            <a href='https://overapi.com/css' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/css/default.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
    </p>

    `  ;



})




html.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>HTML</h1>

    <p>
    
                Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications.
                A hypertext is a text that is used to reference other pieces of text,
                while a markup language is a series of markings that tells web servers the style and structure of a document. 


            <br>
          <div>
            <a href='https://overapi.com/html' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/html/html_intro.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})


python.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>Python</h1>

    <p>
    
    Python is an interpreted high-level general-purpose programming language.
     Its design philosophy emphasizes code readability with its use of significant indentation.
    Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects


            <br>
          <div>
            <a href='https://overapi.com/python' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/python/default.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



jquery.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>Jquery</h1>

    <p>
    
    jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation,
    as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License.
    As of May 2019, jQuery is used by 73% of the 10 million most popular websites.

            <br>
          <div>
            <a href='https://overapi.com/jquery' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/jquery/default.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



ruby.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>Ruby</h1>

    <p>
    
    Ruby is an interpreted, high-level, general-purpose programming language.
    It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. 
    Ruby is dynamically typed and uses garbage collection and just-in-time compilation.

            <br>
          <div>
            <a href='https://overapi.com/ruby' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.tutorialspoint.com/ruby/index.htm' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



go.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>GO</h1>

    <p>
    
          Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, 
          Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, 
          structural typing, and CSP-style concurrency. 

            <br>
          <div>
            <a href='https://devhints.io/go' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/go/index.php' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



swift.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>Swift</h1>

    <p>
    
    Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community.

            <br>
          <div>
            <a href='https://kpbp.github.io/swiftcheatsheet/' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.codecademy.com/learn/learn-swift/modules/learn-swift-loops/cheatsheet' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



docker.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>Docker</h1>

    <p>
    
         Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. 
         Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.

            <br>
          <div>
            <a href='https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.tutorialspoint.com/docker/index.htm' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



php.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>PHP</h1>

    <p>
    
    PHP is a general-purpose scripting language geared towards web development. 
    It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. 
    The PHP reference implementation is now produced by The PHP Group.

            <br>
          <div>
            <a href='https://overapi.com/php' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/php/default.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



react.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>React</h1>

    <p>
    
    React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. 
    It's used for handling the view layer for web and mobile apps. 
    React also allows us to create reusable UI components.

            <br>
          <div>
            <a href='https://devhints.io/react' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/react/default.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})



angular.addEventListener('click', (e) =>{
    main.innerHTML= `
    <h1>Angular</h1>

    <p>
    
    Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. 
    Angular is a complete rewrite from the same team that built AngularJS.

            <br>
          <div>
            <a href='https://angular.io/guide/cheatsheet' target='_blank'  style="font-size: 18px;  padding: 5px; ">Cheat Sheet</a>
            <a href='https://www.w3schools.com/angular/default.asp' target='_blank'  style="font-size: 18px;  padding: 5px; ">Read More</a>
            </div>
    </p>

    `  ;



})