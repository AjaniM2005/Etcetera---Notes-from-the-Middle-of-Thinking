---
title: "Problem Log 2: The Recursive Blanks (Moscow Puzzles #18)"
date: "2026-06-24"
tags:
  - Math puzzles
excerpt: >
     Puzzle 18 of Kordemsky's “Moscow Puzzles” commands our attention for the second installment of the new series. This time we're tasked with determining how many 'items' can be made from 36 'blanks' (how specific 🙄) considering that one blank is needed for one item, and the shavings from every 6 blanks accumulate to make one more blank.  Some nice arithmetic we have occurring here (as long as we remember to continuously apply the recursive action 🤫).
---
Puzzle #18: HOW MANY ITEMS?
"An item is made from lead blanks in a lathe shop. Each blank suffices for 1 item. Lead shavings accumulated from making 6 items can be melted and made into a blank. How many items can be made from 36 blanks?"

At first glance, this puzzle seemed straightforward. If one blank yields one item, and we have 36 blanks, then we will get 36 items. And since the shavings of every 6 blanks accumulate to make 1 blank, because there are 6 lots of 6 in 36, we will get 42 items in total. That is, six times, in the process of making items from the 36 blanks, we will have enough blank shavings to make 1 more blank, which will, in turn, yield 6 more items, bringing the total to 42 items. 

But there's an important caveat we are, or at least I was, glossing over. Do you see it?

I didn't apply the given condition to the secondary set of 6 blanks (the ones that came from the blank shavings). The statement said that the shavings from 6 blanks produces one more blank, and those 36 original blanks just produced, as we calculated, 6 more blanks. This implies that, from the shavings of these 6 blanks, we can get one more blank, and therefore one more item. Thus, the total number of items we can get from those 36 blanks is actually 43. (🤯)

I think this puzzle was a great example in showing us (or, again, at least me) how our own mental traps can cloud reasoning. Unlike other puzzles we'll come across, the key insight/idea wasn't hidden behind some clever wordplay or hidden assumptions. They stipulated exactly how we were supposed to make our calculations. My error came entirely from a cognitive regression bug, I simply stopped reapplying the recursive loop too early. Going forward, it's a good reminder to be fiercely attentive to the outlined conditions, ensuring that a quick rush to a clean answer doesn't cause an oversight error.