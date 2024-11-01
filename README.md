# Cyberhub website

Cyberhub was designed and built by Nikita Ukladchikov for UNSW Course LAWS3040 (Regulation of Cyber Security) in 2024 Term 3. All software-based rights reserved except where explicitly stated otherwise.

## How to Run the Project

To set up and run **CyberHub** locally, follow these steps:

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- NPM (Node Package Manager)
- Git Developer Tools

**Side note:** I would provide instructions on how to install the prerequisites above but it depends a lot on what operating system you use so to avoid confusion you are encouraged to do this step yourself.

### Steps to Run the Project (Tested on both Mac & Windows)

  1. 1. **Clone the repository**
     2. Type `git clone https://github.com/LordNikita/cybersec-website.git` in your preferred terminal
  2. 1. **Navigate to the repository's 'frontend' folder**
     2. E.g., type `cd cybersec-website/frontend/` where you have downloaded the project
  3. 1. **Install dependencies**
     2. Run the following command to install the required npm packages (inside cybersec-website/frontend/):
     3. `npm install`
  4. 1. **Start the frontend server**
     2. To run the website locally, use the following command (inside cybersec-website/frontend/):
     3. `npm start`
  5. 1. **Open the website**
     2. After starting the server, the website should automatically open in your browser.
     3. If it doesn't, copy and paste this URL into your browser (Google Chrome, Firefox etc.):
     4. `http://localhost:3000`
    
## Project Limitations
The project has some limitations. 

Firstly, the **recommended viewport/monitor resolution to view the website is 1920x1080 pixels**. It would take marginal work to increase the responsiveness such that the website would look great on smaller laptops screens. It would take a little bit more effort to make it good look on a mobile screen. But I only had so much time I could spend on this project during the term.

Secondly, the website is frontend only and doesn't have a backend. This was a conscious design decision. Building a backend and populating it with data was just way too inefficient and time-costly for what I had to build in the amount of time I had. 
