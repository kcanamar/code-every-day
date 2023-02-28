# 100 Days Of Code - Log

## Day 31: Feburary 27, 2023

**Today's Progress**: Leetcode

**Thoughts**: Needed to take it easy never fun being under the weather, so decided to do some light codeing problems on leetcode.

**Links to Work** [problem](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/invert-binary-tree.js),[problem](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/root-equals.js),[problem](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/running-sum.js),
## Day 30: Feburary 26, 2023

**Today's Progress**: Leetcode

**Thoughts**: Just solved a problem today, hard as all can be, feel like I should go back to doing DSA's more everyday.

**Links to Work** [problem](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/max-earnings-from-taxi.js)
## Day 29: Feburary 25, 2023

**Today's Progress**: CRUD API Deployment

**Thoughts**: So today I wanted to deploy my Go API so off to render.com, this was a journey where I needed to rework a few things from my build inorder for render to accept my build. Namely setup my environment variables, handling the logic surrounding the variables in the code base. After several hours of reading documentation and working through errors, I was finally able to deploy the api!

**Links to Work** [Repo](https://github.com/kcanamar/go-crud-example), [depolyed](https://go-gin-api.onrender.com/posts)
## Day 28: Feburary 24, 2023

**Today's Progress**: Go/Gin localAPI, Go Gin GORM bit.io full CRUD API

**Thoughts**: I needed a confidence boost after yesterday's bug, so I decided to start my day off buy making a simple CRUD API not persisting in a database. After completing this I then moved on to hunt the bug from yesterday, turns out it was not much of a bug but that I had forgotten to include a database connection in `main.go`'s init func, *Facepalm* glad I slept on it because that gave me a fresh start and helped me build a even simpilar version for proof of concept. So cheers to a Full CRUD api, tomorrow I will deploy this api on render.com, time to learn about deployment.

**Links to Work** [Repo 1](https://github.com/kcanamar/go-gin-basicCRUD),[Repo 2](https://github.com/kcanamar/go-crud-example)
## Day 27: Feburary 23, 2023

**Today's Progress**: Go API build part Bug

**Thoughts**: So I was able to connect to bit.io, as my database and migrate my models. However when I attempted to post data to my database I run into a `runtime error: invalid memory address or nil pointer dereference` I am not sure why, I have been looking all over the internet up and down trying to understand why this is happening. So I decided to let the issue breath and start my day tomorrow with a fresh post on stackoverflow in hops that I will be able to solve this issue. 

**Links to Work** [Repo](https://github.com/kcanamar/go-crud-example)
## Day 26: Feburary 22, 2023

**Today's Progress**: Go API build part 1

**Thoughts**: Today was the day I decided to begin learning how to build an API using Go, Gin, GORM, and bit.io. SO much learning on how to properly configure, errors be thy guide. I have a listening server, a home route, and successful database connection. Tomorrow I will create the models and begin work on CRUD!

**Links to Work** [Repo](https://github.com/kcanamar/go-crud-example),[problem 1](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/group-anagrams.js)
## Day 25: Feburary 21, 2023

**Today's Progress**: Leetcode

**Thoughts**: Had a busy day today, wasn't able to code a whole lot with the kids being sick, so to make sure I was still keeping on I decided to do a leetcode problem with binary tress. This on took me a little while to fully comprehend what and how I was going to do this, I utlimately came to the conclusion that I wanted to create a win condition of true by subtracting each node from the sum argument.

**Links to Work** [problem](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/path-sum.js)
## Day 24: Feburary 20, 2023

**Today's Progress**: More Go

**Thoughts**: I was caught up on a peculiar bug today while working with Go, I was unable to run the executable go module after installing it through the cli. I had the correct GOPATH, GOBIN in my `go env` but for whatever reason when I ran the command `export PATH=$PATH:/location/go/bin/` then try to active the related bin application I would receive a `zsh: command not found:` or `zsh: access denied:`. I also made sure that my `.zshrc` was setup with the various GO statements, but even with everything I was finding on stackoverflow I wasn't able to solve this issue. What I ended up having to do was include the `export PATH=$PATH:/location/go/bin/` in my `.zprofile`, then I wen through the motions one more time of `go build`, check my `go env`, `go install` then I created a new terminal and ran the executable from a fresh terminal. Much to my enjoyment the program ran as intended, In lieu of this hiccup I wasn't able to make as much progress as I would have liked in building out my first api using Go. Still in good spirits as tomorrow is a new day and I am looking forward more go!

**Links to Work** [Repo 1](https://github.com/kcanamar/go-workspaces)
## Day 23: Feburary 19, 2023

**Today's Progress**: Go (Golang) Beginnings

**Thoughts**: I decided today to embark on a journey I have been eyeing for some time, Go. I have been wanting to dive deeper into this language and learn how to build apis with Gin. So today I decided to setup my machine to learn the basics, so much to cover and only scratched the surface but more to come shortly. I did not forget about Vue, in fact I am building this backend in Go to pair with my Vue frontend.

**Links to Work** [Repo 1](https://github.com/kcanamar/go-example-hello), [Repo 2](https://github.com/kcanamar/go-example-greeting)

## Day 22: Feburary 18, 2023

**Today's Progress**: Vue.js & Magic.link

**Thoughts**: Today I learned how to wire up a vue application with my favorite auth/payment SDK Magic.link. So many new things to play with in the comming days, I have been really impressed with how much of the vue ecosystem is maintained by vue, not third party sources. Plus their documentation is top notch A+ for helping me out when I wasn't comprehending multi-word-component-names, gotta shake that bad habit from React.

**Links to Work** [Repo](https://github.com/kcanamar/vue-magic-example)

## Day 21: Feburary 17, 2023

**Today's Progress**: Vue.js

**Thoughts**: Today I learned so much Vue, I think my biggest take away would be how intuitive the developer expereience is. I like how you can visually see how your page is going to be built before it is even produced. Big bonus their documentation is great. I ran through the intro tutorial so far tomorrow I will dig into some more meat and start building something more pratical, I feel like a blog site will be a nice first step.

**Links to Work** [Repo](https://github.com/kcanamar/vue_todo_example)
## Day 20: Feburary 16, 2023

**Today's Progress**: Vue.js

**Thoughts**: I have decided to build out my Blog site using Vue.js, first step on the list is to get familiar with vue and build a todo app. After that I will look to connect to a GraphQL database, and style with tailwind. This will be a couple days worth of learning and building.

**Links to Work** [Repo](https://github.com/kcanamar/vue_todo_example)

## Day 19: Feburary 15, 2023

**Today's Progress**: Portfolio

**Thoughts**: Completed the projects page of my portfolio, needed to restructure my app as the deployed site was vastly different than my deployment. Quick fix and a great site now on to building out the blog, although I am thinking of building the blog with some new technologies deployed seperate, stay tuned.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio/)

## Day 18: Feburary 14, 2023

**Today's Progress**: Contact Page

**Thoughts**: Wrapped up style on the about page, proud of a work around I figured out generating the icons. Went on to build out the Contact page and attach a copy of my resume to the resume link. Tomorrow I will be building out the projects page, looking forward to building this.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio/tree/style)
## Day 17: Feburary 13, 2023

**Today's Progress**: About Page Styling

**Thoughts**: Started styling the over all layout of about page. Along with began building out what technologies are going to look like on my portfolio, thinking I am going to make them into their own Document in my db so that way I can map over them reducing the need to hard code. Learned how to use cloudinary-next to support my photos for optimizing, sizing, and responsive options.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio/tree/style)
## Day 16: Feburary 12, 2023

**Today's Progress**: About Page Base

**Thoughts**: Got the base structure of my about page layed out. Frontend development has always been a challenge for me and a skill I need to keep very sharp, currently feeling really confident in how I have been able to keep my content layout shifts to a minimum. On the horizon, responsive images, content updates.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio/tree/dev)
## Day 15: Feburary 11, 2023

**Today's Progress**: Server Side Props

**Thoughts**: Today was a big day for reading documentation, changed over from static props to server side props for a couple pages on my portfolio. I like the results, however had a massive amount of debugging and deployment issues, come to later realize it was because I was tracking the preview deployment in vercel and the production deployemnt to troubleshoot.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio)
## Day 14: Feburary 10, 2023

**Today's Progress**: Responsive Styling

**Thoughts**: Spent most of the day restyling my portfolio, armed with a responsive first approach to styling. I was able to adjust all of my stylings to be responsive for all screens. Some new tools in CSS I got to use today were clamp() and hsl().

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio)

## Day 13: Feburary 9, 2023

**Today's Progress**: Built mobile responsive navbar

**Thoughts**: Worked off of a Kevin Powell video building a mobile responsive nav bar. After hours of reading on css properties and various logical properties, I am starting to get a better grasp on frontend CSS. I recognized that it was one of my weaknesses that I want to improve this quarter and building from scratch with vanilla helps me build a better foundation when I go to adapt and implement these tactics within React.

**Links to Work** [Repo](https://github.com/kcanamar/mobile-nav)

## Day 12: Feburary 8, 2023

**Today's Progress**: Portfolio Styling

**Thoughts**: Was able to start media quieries, shorter session and forgot to log due to being under the weather. Looking forward to getting more done today.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio)

## Day 11: Feburary 7, 2023

**Today's Progress**: Portfolio Styling

**Thoughts**: Got more tackled today stylin, landing page is coming together, tomorrow looking to get all of my media queries put together for non desktop screens. Decided to remove the font-awesome icons and go back to using react-icons.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio)
## Day 10: Feburary 6, 2023

**Today's Progress**: Portfolio Styling

**Thoughts**: Spent my day styling with CSS modules in Next.js. Met some unexpected work arounds that are presented by Next, one being the way you import and use google fonts, another being how you use font-awesome icons. I did met an error in my deployment that I will have to triage in tomorrow, but over all feel really good about what I was able to accomplish today.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio)

## Day 9: Feburary 5, 2023

**Today's Progress**: Portfolio skeleton

**Thoughts**: Decided to get back to work on my portfolio and add in a blog feature for my future content. I am going to be building out my Portfolio over the next several weeks and will be adding features in one by one. Then I will look to style it more, I knwo I should be styling more but just haven't had the motivation yet.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio)
## Day 8: Feburary 4, 2023

**Today's Progress**: Leetcode, FastAPI && Flask basics

**Thoughts**: Today learned how to start both a FastAPI and Flask server, just setup basic listening servers still need to hook up a SQL db to both and define the CRUD routes. Also practiced on leetcode a problem that challenged me to implement a look a like to the sliding window approach.

**Links to Work** [problem 1](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/max-average-subarr-i.js),[Repo](https://github.com/kcanamar/flask_api),[Repo](https://github.com/kcanamar/fast_api)
## Day 7: Feburary 3, 2023

**Today's Progress**: Jsonwebtoken Authentication with Express.js

**Thoughts**:  So today I revisited how to implement authentication using jsonwebtokens in an Express server. Battled through a few typos and a couple trips to the docs, in the end was able to grokk the fundementals to achieve the desired end result. After taking myself thorugh this process in a practice environment I decided to implement this into my portfolio-api to protect my POST, PUT, and DELETE routes. Feeling good about how I was able to implement this so far, next step is to understand how to work through authentication with multiple realtionships.

**Links to Work** [Repo](https://github.com/kcanamar/portfolio-API),[Repo](https://github.com/kcanamar/passion-backend)

## Day 6: Feburary 2, 2023

**Today's Progress**: Django Basic Todo App

**Thoughts**: Today I decided to brush up on my Django and create a simple todo app. Nothing fancy here just making sure that all the gears are working properly and that I can still remember how to write python code. 

**Links to Work** [Repo](https://github.com/kcanamar/basic-django-todo)

## Day 5: Feburary 1, 2023

**Today's Progress**: Leetcode

**Thoughts**: Strapped up my boots today to dig into practicing some algorithms on leetcode. Was able to get some practice with two-pointers and merge interval, feeling confident with what I was able to complete and looking forward to getting auth setup on my portfolio api tomorrow.

**Links to Work** [problem 1](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/squares-of-sorted-array.js),[problem 2](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/merge-intervals.js)

## Day 4: January 31, 2023

**Today's Progress**: Portfolio Api

**Thoughts**: Continued working on my portfolio API, I am building this to constantly be updating my portfolio with new projects and content in a centuralized location. I refactored the codebase to reflect MVC design, spreading the route logic across two different locations, the routes and the controllers. This was a great way for me to be able to put into practice what I came to love about building API's. Looking forward to add authentication to this API so that way no one but myself will be able to interact with the data outside of GET requests. 

**Links to Work** [Repo](https://github.com/kcanamar/portfolio-API)
## Day 3: January 30, 2023

**Today's Progress**: LeetCode Problem

**Thoughts**: So today had a technical interview, so spent most of my day preping for it by reading documentation. However I did get to a leetcode problem that challenged me to implement the in-place algortihm. Having never done that before was a tall task but after words felt really good about what I learned and how I can build upon that algorithm.

**Links to Work** [problem 1](https://github.com/kcanamar/code-every-day/blob/main/leetcoe/remove_duplicates.js)

## Day 2: January 29, 2023

**Today's Progress**: Began rebuilding Portfolio

**Thoughts**: Well the saying goes "use it or loose it." I did not loose it but I sure did struggle getting my frontend to play nice with my api. I leanred today that you cannot call getStaticProps from inside of a component rather it must be down on the page and passed to the component as props. If anyone has any experience that would contridicte my findings please feel free to share them as this was a big chunck of time. Feeling really good otherwise about how far I got on this project, excited to see how it turns out in the coming days.

**Links to Work** [Repo](https://github.com/kcanamar/kcanamar-portfolio)

## Day 1: January 28, 2023

**Today's Progress**: Codewars Challenges

**Thoughts**: After taking a mental health break from daily coding. I am proud to say that I am ready to once again tackle the #100daysofcode challenge. I have ben learning so much recently and really looking forward to sharing what I have been learning publicly. <br> Today I spent the vast majority freshing up on JavaScript Array methods and String methods on Codewars. Tomorrow looking to start building out the frontend of my new portfolio/blog site with Next.js.

**Links to Work** [problem 1](https://github.com/kcanamar/code-every-day/blob/main/codewars/next_train_to_brighton.js),[problem 2](https://github.com/kcanamar/code-every-day/blob/main/codewars/mean_array.js),[problem 3](https://github.com/kcanamar/code-every-day/blob/main/codewars/multi_num.js),[problem 4](https://github.com/kcanamar/code-every-day/blob/main/codewars/csv_array.js),[problem 5](https://github.com/kcanamar/code-every-day/blob/main/codewars/filter_geese.js),[problem 6](https://github.com/kcanamar/code-every-day/blob/main/codewars/invert_values.js)