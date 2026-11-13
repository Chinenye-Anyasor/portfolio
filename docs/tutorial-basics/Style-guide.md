---
sidebar_position: 8
---



# Style Guide

These are the rules I used to keep the four Meritrade guides consistent and clear.

### Structure & Headings
*  **Use # for the document title, ### for main steps and top-level sections (Overview, Prerequisites), and #### for nested sub-steps within a main step.**

* **Order matters? Number it, Order doesn't matter? Bullet it.**   
If the reader has to do things in sequence, use a numbered list. If they're choosing between two equal options (like Market Order vs. Limit Order), use bullets. 

* **Callouts keep the > on every line, not just the first one.**  
If your important note is two lines, both lines start with >. 

* **Two kinds of callouts, two jobs.**  
[!NOTE] is for background info that doesn't change what the reader does. [!IMPORTANT] is for anything that actually changes what they need to do.

* **The command or instruction for a step lives in the step heading only.**  
Body text underneath describes confirmation or context, and never repeats the command or instruction for the same action.

### Images & Captions

* **All images for a project live in one parent-level folder, with a subfolder per guide.**  
No guide gets its own separate top-level folder.

* **File names: first word starts with a capital letter, then the rest is lowercase, hyphens, no parentheses.**  
Parentheses can actually break how Markdown reads the image path, not just look messy.

* **Alt text and caption say the same thing, always.**   
Write the description once, use it both places. 

* **Two images in one step should have their own captions.**     
Never make one caption cover two or more screenshots. Caption(s) should be italicized and bold.

* **Images come before the step explanation.**

### Formatting
* **A period after a backtick only if it's really the end of a sentence.** 
  
* **A step heading is a title, not a sentence; it never gets a period, backtick, or anything.**  
If a backticked word genuinely ends a real sentence, it gets its period like anything else would.

* **Backticks should match exactly what's on screen.**   
Don't sneak your own words in there. If the screen says "Funding request is being processed," that's what goes in the backticks, not "Funding request is being processed message."

* **"And," not "&." Spell it out in body text.**

* **Hyphenate number + unit. "4-digit PIN," not "4 digit pin."**  
And once you pick how PIN is capitalized, keep it that way everywhere, not just in the heading.

### Content Accuracy
* **Check every prerequisite against every path in the guide.**  
If something's only needed for one method (like a bank card only mattering for card payments, not bank transfer), say so. Don't list it as required for everyone if it isn't.

* **Read for meaning, not just grammar.**  
A sentence can be perfectly correct and still be wrong for the guide it's in, like a buying guide accidentally saying "sell" because it got copied from somewhere else. Ask "does this actually match what I'm teaching here," not just "is this sentence okay."

### Terminology
* **Use "stocks" consistently, not "shares."**  
Pick one term for the thing being bought and sold, and use it everywhere across a guide (and across guides).

### Files Hygiene
* **Save with the extension from day one. .md, not added later.**   
VS Code, GitHub, and Google Drive all need it to know what they're looking at.

* **File and folder names follow the same capitalization: first word capitalized, rest lowercase, hyphens between words (e.g., Buying-stocks-on-meritrade.md).**  
This is the standard convention across every guide and image file.

* **Spell brand names the way the company spells them.**  
Meritrade, not meritrade. 

:::warning[Note]

Every rule here came from a real issue I caught while editing my own guides. I used Claude to help organize, phrase, and refine them into this document.

:::


