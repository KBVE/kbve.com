---
title: Unity Steam Notes
description: Unity Steam References, Guides and Information
tags:
- unity
- steam
---

## Steam

These notes are still a work in progress, but I will try my best to continue to improve them as I am building out the Steam API for the Unity/React Project.
Official [Repo](https://steamworks.github.io/installation/#unity-instructions)

### Before

It seems that before you start to integrate SteamWorks / Steam API / SteamWorksNET , you need an active SteamWorks developer account. You can create the account [here](https://partner.steamgames.com/newpartner/?)

`Legal Name`

Steam Defines it as

>This is really, really important to enter correctly. Carefully read all instructions below. You will be unable to release your product via Steam until this name matches all records.
>The name you enter below must be the legal entity that owns or has rights to publish the game, software or video ("content") and is the legal entity that will be signing the Steam Distribution Agreement. The legal name you enter here must match the name as written on official documents with your bank and on United States IRS tax documents or foreign tax documents if applicable. You will need to enter this name again as your bank account holder and the legal name associated with a tax payer identification number in the following steps.
>If you don’t have a company name and you are the sole owner of your content, please fill in your full name as the Legal Name and your own address as Street Address. If you co-own the content with other individuals, you must form a legal entity to own and receive payments for your content.
>The Legal Name here is for internal use. If you have a DBA or 'friendly name' that you wish to show to customers on your store page, you will be able to enter that separately when creating your store page.

This is an extremely important step, we advise that you consult with your legal parties if there are any major issues.

We recommend that, if you are a US Citizen, have all our personal information (Tax, Bank, KYC, ect...) ready before completing the application. Furthermore, there is a $100 fee for the application.

### After

Well we applied as of 11/23/2022 , so we will wait until everything is confirmed and then move forward with this.

Okay so we been approved, now you should have 1 application credit in your Steamworks profile! This is where you then create your application, using that application credit that you paid $100 for!

Place your application name and then go through the form, it will then spit out some interesting variables:

>Requesting AppID For: KBVE.com RogueJester
>Created package "KBVE.com RogueJester Developer Comp" with ID 802XXX
>Created package "KBVE.com RogueJester for Beta Testing" with ID 802XXX
>Created package "KBVE.com RogueJester" with ID 802XXX
>Added auto-grant to publisher *XXX
>Created store item '518XXX'
>Created store package for store item '518XXX'

You should keep this information safe and as a reference step.

After 