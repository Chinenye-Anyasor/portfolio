---
sidebar_position: 2
---

# Documentation Case Study

### Overview

I took several technical communication courses and wanted to practice what I learned. I chose an app and created four user guides for Meritrade, a stock-trading platform. They cover:
* Creating an account  
* Funding an account  
* Buying stocks  
* Selling stocks  
  
I also included an FAQ section as part of my unofficial portfolio project. 

### Audience 

The guide is written for end users who, regardless of their investing experience, have never used Meritrade and aren't familiar with its user interface (UI).

### My approach

1. Identified my users.
2. Researched the product and the workflows I wanted to document by using the product myself.   
3. Wrote down my first draft in Markdown in VS Code. 
4. Annotated screenshots in Greenshot for the guides. 
5. Edited the guides against my style guide built from patterns I caught in my drafts. 
6. Version-controlled the guides with Git and published them on GitHub. 
     
### Key decisions

* Early on, each guide had its own top-level image folder. As the suite grew to four guides, I restructured to a single images/ folder with a subfolder per guide. It’s a small choice, but it helps anyone browsing the repo see one clear system instead of four similar ones. This consistency reflects my goals for the writing and the file structure.
  
* I picked ‘stocks’ over ‘shares’ early and used it everywhere, across all four guides. Switching between the two in the middle of a document or suite might confuse readers. They could think the terms mean different things. Using one consistent term removes that doubt.
  
* I felt torn between adding an FAQ inside each guide and creating a standalone FAQ section. I chose the latter. I wanted all answers in one place. This way, the task guides stayed short and focused. Plus, it made updating one page easier.  

### Issues worth flagging

* While documenting the workflow for creating a Meritrade account, the phone verification step failed. I was supposed to receive an OTP to verify my phone number, but I didn't. Despite clicking `Resend OTP` several times, I still didn’t receive the OTP. I contacted the support team, but they didn’t respond that day. So I started the account creation process again, but found I couldn't because the process I started the other day was still active; I just hadn't completed the registration. So instead of clicking on ‘Create account’, I clicked on ‘Login’. Surprisingly, I was no longer stuck on the phone verification step, but I had moved to the next step. (An undocumented workaround).

* I got stuck again at the last step in the registration process, where I was required to create my 4-digit PIN. For every 4-digit combination I entered, I kept getting an error message that read: 'PIN already exists. Please use Change PIN’. It’s important to note that nowhere on the screen could I click ‘Change PIN’. I contacted the support team; they fixed it, but I never saw the success screen to be able to document how users should know the account creation process is complete or successful, hence why step 8 of the account creation guide is incomplete. It should include a success confirmation. 
   
This is a software issue, so the engineering team should handle it, not the support team. The engineering team should either fix it, offer a workaround, or list it as a known issue in the troubleshooting guide.

### Result

Four user guides, the style guide, and a consistent folder structure.

### What I would do next

Re-test the flow to check if the OTP and PIN issue has been fixed. Update my guides to show the fix.
