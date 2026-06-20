---
title: "Problem Log 1: A beset batallion, a broad river and boys with a boat (Moscow Puzzles #10)"
date: "2026-06-19"
tags:
  - Math puzzles
excerpt: >
     In the first installment of this new series, we tackle Puzzle 10 of Kordemsky's “Moscow Puzzles” where we're tasked with transporting a detachment of soldiers across a river through use of a small boat owned by 2 boys, given that the boat may only carry one soldier or the 2 boys at a time. Will we be able to successfully transport the detachment? Or will logic's constraints leave us stranded? Follow along to see how we approach the problem.
---
Puzzle #10: CROSSING A RIVER
"​A detachment of soldiers must cross a river. The bridge is broken, the river is deep. What to do? Suddenly the officer in charge spots 2 boys playing in a rowboat by the shore. The boat is so tiny, however, that it can only hold 2 boys or 1 soldier. Still, all the soldiers succeed in crossing the river in the boat. How?
​Solve this problem either in your mind or practically—that is, by moving checkers, matches, or the like on a table across an imaginary river."

I decided to start the series with one of the more straightforward questions, so as to ease us into this journey. This isn't my first encounter with the river crossing genre of problems, though it is my first encounter with this specific problem, so I knew immediately that there was likely one of two paths that solved the problem: an algorithm that is repeating and general, or one that is specific and narrow. Due to the constraints imposed in the puzzle, I reckoned that the repeating, general algorithm was the one needed. 

### The General Algorithm

After a brief period of deliberation, I came up with this solution. By naming the two children **Boy A** and **Boy B**, we can track the exact four-step loop required to ferry a single soldier across:

* **Step 1:** Both boys get into the boat and row to the far bank.
* **Step 2:** Boy A deboards on the far bank. Boy B takes the boat back to the near bank where the soldiers are waiting and deboards.
* **Step 3:** The first soldier boards the boat alone, sails to the far bank, and steps off. 
* **Step 4:** Boy A (who was waiting patiently on the far bank) jumps back into the boat, rows it back to the near bank, and collects Boy B. 

**The Loop Resets:** Both boys are now back on the starting shore, the boat is right where it began, and exactly one soldier is safely across. 

The entire process repeats until all of the soldiers have successfully crossed the river.