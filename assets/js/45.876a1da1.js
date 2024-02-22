(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{361:function(t,e,s){"use strict";s.r(e);var a=s(9),i=function(t){t.options.__data__block__={mermaid_382ee1e3:'sequenceDiagram\n  participant A as Working Tree\n  participant B as Staging Area\n  participant C as Repository\n  A ->> B: Add a1.txt\n  A ->> B: Add a2.txt\n  B ->> C : Commit -m "Add first 2 assignments for MAD9112"\n  A ->> B: Add a3.txt\n  B ->> C : Commit -m "Add third assignment for MAD9112"\n  A ->> B: Add a2.txt\n  B ->> C : Commit -m "Change question 5 to make it harder"\n  C ->> A : Checkout'}},n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"week-3-git-part-1-of-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#week-3-git-part-1-of-3"}},[t._v("#")]),t._v(" Week 3 - Git (part 1 of 3)")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Dates")]),t._v(" "),e("p",[t._v("25 JAN 2024")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Agenda")]),t._v(" "),e("ul",[e("li",[t._v("installing Git")]),t._v(" "),e("li",[t._v("Basic Git Commands")])])]),t._v(" "),e("h2",{attrs:{id:"_1-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-git"}},[t._v("#")]),t._v(" 1. Git")]),t._v(" "),e("h3",{attrs:{id:"what-is-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-git"}},[t._v("#")]),t._v(" What is Git")]),t._v(" "),e("p",[t._v("Git is a distributed version control system and knowing git is one of the most important skills you would have to have as a developer. Git is not the only version control system existing Today but it is a "),e("em",[t._v("de-facto")]),t._v(" standard in the software industry and it is very likely you will find it in many, if not all, projects you participate.")]),t._v(" "),e("p",[t._v("It is far more than a backup system, it tracks all changes made to source code overtime. Also, it allows development collaboration by giving users a set of tools to work together in the same code base.")]),t._v(" "),e("p",[t._v("Since Git records any changes to files (include deletions) you can go back in time and retrieve any version of your file or test few changes here and there before commiting to a final version.")]),t._v(" "),e("h3",{attrs:{id:"how-does-git-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-does-git-work"}},[t._v("#")]),t._v(" How does Git work")]),t._v(" "),e("p",[t._v("There are three areas to git. The "),e("em",[e("strong",[t._v("Working Tree")])]),t._v(" the "),e("strong",[t._v("Staging Area")]),t._v(" and the "),e("strong",[t._v("Repository")]),t._v(".")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("strong",[t._v("Working Tree")]),t._v(" is the area where you are currently working. It is where your files live.")]),t._v(" "),e("li",[t._v("The "),e("strong",[t._v("Staging Area")]),t._v(" is where git starts tracking and saving changes that occur in files.")]),t._v(" "),e("li",[t._v("The "),e("strong",[t._v("Local Repository")]),t._v(" is the area that has everything saved or, as we say, commited.")])]),t._v(" "),e("p",[t._v("Your files will ocuppy these areas as you work. Let us see how.")]),t._v(" "),e("Mermaid",{attrs:{id:"mermaid_382ee1e3",graph:t.$dataBlock.mermaid_382ee1e3}}),e("p",[t._v("Initially your files are untracked, then you add them to the staging area. Once you are satisfied with the staging, you commit the files to the repo. You can, at any point retrieve a version of your commited files using the "),e("code",[t._v("checkout")]),t._v(" command. That is basically, what git does.")]),t._v(" "),e("h3",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("p",[t._v("It is possible that you already have a copy of Git in your Mac. To check, go to you shell and type:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("You should see a message showing what is the version you have installed. It may look like this:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.37")]),t._v(".0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Apple Git-136"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("If you don't have it already, go to "),e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),e("OutboundLink")],1),t._v(" download it and install it. After it is installed, try "),e("code",[t._v("git --version")]),t._v(" one more time.")]),t._v(" "),e("p",[t._v("Ok, now that you have git installed, let us configure your name and email. Here is what you need to do:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("and")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your@email.com"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("We do this so Git can keep track of not only what changes were made but also "),e("strong",[t._v("who")]),t._v(" made the changes. This is specially useful when you are working in collaboration with other developers")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Example project")]),t._v(" "),e("p",[t._v("To gain familiarity with working with Git we will use a template of a site. You will download the whole project (all files) in a compressed format (.zip) and decompress it. After that we will use Git to track the changes we will make.")]),t._v(" "),e("p",[t._v("First, download the "),e("a",{attrs:{href:"/MAD9112-notes/education.zip"}},[t._v("template")]),t._v(" file and uncompress it onto your MAD9112 folder. The project is in a folder called "),e("code",[t._v("education")]),t._v(".")])]),t._v(" "),e("p",[t._v("Once you do that we are ready to finally learn some Git!")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Your recently downloaded files are by default saved on "),e("code",[t._v("~/Downloads")]),t._v(". So, wherever is your current directory, go to "),e("code",[t._v("~/Documents/code/MAD9112")]),t._v(" (you created this in your first class), move the downloaded file to it and unzip it, like so:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/Documents/code/MAD9112\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" ~/Downloads/education "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You can serve your site from within VSCode using the Live Server")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You have a small webserver already running in your mac. To serve your example site, go to your project directory and type:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("python "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" SimpleHTTPServer "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nor\npython3 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" http.server "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7800")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("Then open the link "),e("a",{attrs:{href:"http://localhost:80",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:80"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"http://localhost:7800",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:7800"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"initializing-a-repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initializing-a-repo"}},[t._v("#")]),t._v(" Initializing a repo")]),t._v(" "),e("p",[t._v("Repo, the short for repository, is a container for a project that is tracked by Git.")]),t._v(" "),e("p",[t._v("There are two types of repos.")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Local repository")]),t._v(" - A repository stored on your own machine. It allows you to work on the local version of a project.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Remote repository")]),t._v(" - It usually resides on a remote server offering an \"off-site backup\" to your files. It's especially relevant when working in teams since it is the place where you can share your work and see other people's code.")])])]),t._v(" "),e("p",[t._v("Right now you have a folder with some files in it. It is a project, but it is not yet a repo. To  create a new repository (and to start to track the files), go to the main folder of your project and type:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The default branch name is "),e("code",[t._v("master")]),t._v(". If you want to use another name for it, at the moment of initialization, you can use "),e("code",[t._v("git -i <anotherName>")])])]),t._v(" "),e("p",[t._v("That will create a hidden "),e("strong",[t._v(".git")]),t._v(" directory for your project and that is where Git saves all info it need to track the repo. If you delete this directory you are effectively removing the repo (but not the files) from this project.")]),t._v(" "),e("p",[t._v("You shoud see something like")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Initialized empty Git repository "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /Users/YourName/Documents/code/mad9112/education/.git/\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("If so, great. We are on track. Literally.")]),t._v(" "),e("h3",{attrs:{id:"checking-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checking-status"}},[t._v("#")]),t._v(" Checking status")]),t._v(" "),e("p",[t._v("You can check the status of your repo at anytime by using the command:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("If you run this, the result will be similar to this:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("On branch master\n\nNo commits yet\n\nUntracked files:\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to include "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" what will be committed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    .DS_Store\n    README.txt\n    about.html\n    blog.html\n    contact.html\n    courses.html\n    css/\n    fonts/\n    images/\n    index.html\n    js/\n    pricing.html\n    sass/\n    teacher.html\n\nnothing added to commit but untracked files present "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" to track"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br")])]),e("h3",{attrs:{id:"staging-files-and-committing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staging-files-and-committing"}},[t._v("#")]),t._v(" Staging files and committing")]),t._v(" "),e("p",[t._v("Let us add all files to the staging area and commit.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial commit"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("Now all files are being tracked by git and are now "),e("strong",[t._v("commited")]),t._v(" to your local repo!")]),t._v(" "),e("h3",{attrs:{id:"exercising-your-git-powers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exercising-your-git-powers"}},[t._v("#")]),t._v(" Exercising your git powers")]),t._v(" "),e("p",[t._v("To practice some git-fu, let us do the following:")]),t._v(" "),e("ol",[e("li",[t._v("Open "),e("code",[t._v("index.html")]),t._v(" in your favorite editor.")]),t._v(" "),e("li",[t._v("Change the "),e("strong",[t._v("www.yourdomainname.com")]),t._v(" to "),e("strong",[t._v("www.yourname.com")]),t._v(" and save the file.")]),t._v(" "),e("li",[t._v("Test the site to see if your changes are effectively.")]),t._v(" "),e("li",[t._v("Commit your changes.")]),t._v(" "),e("li",[t._v("Check the history ("),e("code",[t._v("git log")]),t._v(").")]),t._v(" "),e("li",[t._v("On "),e("code",[t._v("index.html")]),t._v(" change the phone area code and save it.")]),t._v(" "),e("li",[t._v("Check the site to see if your changes worked.")]),t._v(" "),e("li",[e("strong",[t._v("DO NOT")]),t._v(" commit just yet.")]),t._v(" "),e("li",[t._v("Open "),e("code",[t._v("courses.html")]),t._v(" and fix the typo (It should read "),e("strong",[t._v("courses")]),t._v(" in the plural and not "),e("strong",[t._v("course")]),t._v(")")]),t._v(" "),e("li",[t._v("Save these changes.")]),t._v(" "),e("li",[t._v("Stage and commit "),e("code",[t._v("courses.html")])]),t._v(" "),e("li",[t._v("Stage and commit "),e("code",[t._v("index.html")]),t._v(".")]),t._v(" "),e("li",[t._v("Open "),e("code",[t._v("pricing.html")]),t._v(".")]),t._v(" "),e("li",[t._v("Change the Silver plan to be $99 per year and save it.")]),t._v(" "),e("li",[t._v("Test to see if the change worked.")]),t._v(" "),e("li",[t._v("Commit your changes.")]),t._v(" "),e("li",[t._v("Change the term "),e("strong",[t._v("PLAN & PRICING")]),t._v(" to "),e("strong",[t._v("PLANS")]),t._v(" on any file it appears.")]),t._v(" "),e("li",[t._v("Save and test the changes.")]),t._v(" "),e("li",[t._v("Commit.")]),t._v(" "),e("li",[t._v("Check the log")]),t._v(" "),e("li",[t._v("Again, in "),e("code",[t._v("index.html")]),t._v(" remove all lines after line 100.")]),t._v(" "),e("li",[t._v("Without testing it first, commit "),e("code",[t._v("ìndex.html")])]),t._v(" "),e("li",[t._v("Checkout the initial version of the "),e("code",[t._v("index.html")]),t._v(" and commit.")]),t._v(" "),e("li",[t._v('Change the title of this page to "Great Courses"')]),t._v(" "),e("li",[t._v("Save and test the changes.")]),t._v(" "),e("li",[t._v("Commit the changes.")]),t._v(" "),e("li",[t._v("Delete all html files except "),e("code",[t._v("index.html")]),t._v(" and commit these changes.")])]),t._v(" "),e("p",[t._v("You have broken you site. Test it and you will see it.\nFix it! 😬")]),t._v(" "),e("h2",{attrs:{id:"_2-what-you-should-do-before-next-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-what-you-should-do-before-next-class"}},[t._v("#")]),t._v(" 2. What you should do before next class")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📕 Read")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.inmotionhosting.com/support/server/ssh/how-to-add-ssh-keys-to-your-github-account/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Add SSH Keys to Your GitHub Account"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📺 Watch")]),t._v(" "),e("ul",[e("li",[t._v("Prof. Griffith has an "),e("a",{attrs:{href:"https://www.youtube.com/c/SteveGriffith-Prof3ssorSt3v3/featured",target:"_blank",rel:"noopener noreferrer"}},[t._v("superb series of videos on youtube"),e("OutboundLink")],1),t._v(". I "),e("strong",[t._v("strongly")]),t._v(" suggest you set a time to watch the "),e("a",{attrs:{href:"https://www.youtube.com/watch?v=EdEWigP6zxQ&list=PLyuRouwmQCjmYaG21ijCw0KrFiFEG0Oh9",target:"_blank",rel:"noopener noreferrer"}},[t._v("whole playlist on git"),e("OutboundLink")],1),t._v(" and try to follow the examples. It is a time well spent. Ignore for now the videos or passages related to GitHub as we will only see this next class.")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("🥋 Practice")]),t._v(" "),e("ul",[e("li",[t._v("When you are done, go to "),e("a",{attrs:{href:"https://github.com/eficode-academy/git-katas",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Katas"),e("OutboundLink")],1),t._v(" and do the following katas:\n"),e("ul",[e("li",[t._v("Basic Commits")]),t._v(" "),e("li",[t._v("Basic Staging")]),t._v(" "),e("li",[t._v("Basic Branching")]),t._v(" "),e("li",[t._v("Fast Forward Merge")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("👀 Prepare")]),t._v(" "),e("ul",[e("li",[t._v("In preparation for the next class, go to "),e("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),e("OutboundLink")],1),t._v(" and create an account if you dont't have one.")])])])],1)}),[],!1,null,null,null);"function"==typeof i&&i(n);e.default=n.exports}}]);