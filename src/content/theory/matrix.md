---
layout: ../../layouts/theme/article.astro
title: Matrix
client: Self
publishDate: 2020-03-02 00:00:00
img: https://images.unsplash.com/photo-1606606767399-01e271823a2e?fit=crop&w=1400&h=700&q=75
description: KBVE Matrix is based upon the Eisenhower Matrix and git.
tags:
- concept
- management
- task
---

## Theory

The `Matrix` theory, maybe referenced as AEM or AEMatrix, is an Array Eisenhower Matrix, where the problems reside within a quadrant and scale within their respective zone based upon priority.
The theory's core foundation comes from President Eisenhower and extends through Ziggy's reference work. It has been expanded upon through various periods of time and still continues to be improved.

## Eisenhower Matrix

- The theory places all objectives through a simple quadrant based upon the priority.

- We have added onto the existing Eisenhower Matrix system, such that we also have a simple priority
numbering system on top of it. The system is as follows:
  - Urgent & Important: This is set in Github Projects as "1 U-I"
  - Urgent & Not Important: This is set as "2 U-NI"
  - Not Urgent & Important: This is set as "3 NU-I"
  - Not Urgent & Not Important: This is set as "4 NU-NI"

- Then in the labels for the issues, we've added a numbering system that starts at zero (lowest priority) and can scale infinitely, with higher numbers being higher priority. For now, we have just 0 through 3, designated as Low, Medium, High, and Very High Priority.
- With this, in Github Projects, we can group by the Eisenhower Matrix, and then sort by labels.
- If the priority labels start with the number, then they'll be sorted by those priorities. Order by Z-A (Descending) and you'll have the highest priority tasks at the top of each grouped list for every quadrant of the Eisenhower matrix.

## State

- The Change Control Flow proceeds:
  - -> Preserve the [Present State]
  - -> Plan the [Future State]
  - -> Review* and Approve the {Change}
  - -> Build the {Change}
  - -> Launch the {Change}  
- [Present State] becomes [Preserved State], [Future State] becomes [Present State]

* * *

## Terms

- Launch: (alias of `submit`, `execute`, `Go-Live...`) the execution of the state.
- Build: (alias of `develop`, `Code`, `Work On...`) the development of the state.
- Review: Depending on the domain of the system being changed, different people should be contacted to be made aware of the impending change. Some people, managers, are empowered to approve or deny a change.
- Preserve: When a Change is being considered, the first action is always to "Save your Work", and capture certain or all elements of the Present and current State of the system that is impact.
- Plan: The set of instructions that further define and detail the Change to come. The Plan represents a wide variety of types of documentation. The Plan can be adjusted several times while being prepared to be approved.

## Notes

## Journal

``` { #journal }
9/22/2022
> Ziggy had some ideas
  - Rather than using a simple quadrant system, we could extend the matrix to include a positive and negative array between -100 and 100 in order to 'map out' each task in a much more thorough way.
  - This could then be used as part of a ai assistant with a simple question to the user

  3rd dimension: Z
  - Priority range of -10 to 10
```

## References

1. Flutter Library for Graphics / Charts - [1](https://pub.dev/packages/graphic)
2. Javascript Library for Graphics / Charts - [2](https://d3js.org/)
3. Nivo Library / Javascript & React - [3](https://nivo.rocks/)

### Review by Jab5

This review was taken on 11/25/2022 for v1 for the AE Matrix.

>Jab5: no no thats fair, so the main two things of note i saw that you might want to take into consideration. Is lightly expanding on titles or being more specific with each title, this way when whoever needs to do that task already knows exactly what it is, so its the same picture in everyone's head, leading to a lot less confusion and potentially preventing the situation of whomever is working on the task making something completely different than what it was supposed to be
>Jab5: the other thing id more or less think about is potentially setting specific times/lengths on different tasks, as that helps to make sure that things more or less do get done in the first place. This largely subjective because it depends a lot on how your group works on it for example if its just every once in a while then that probably wont be very helpful. But having an understanding of the time frame on the individual tasks is something that will always potentially be useful
>Jab5: And just remember the tool is only as good as your team uses it. So if its just one person interacting with it then honestly going into a large large amount of detail may potentially be more trouble than its worth
>Jab5: but thats just what i got from looking at how its all arranged from the outside. Its all honestly completely subjective to how it works best for the team itself
