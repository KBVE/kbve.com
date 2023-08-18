---
title: n8n Triggers
description: These nodes start a workflow. For example, receiving a webhook or detecting a new email.
---

### Trigger

> Can be referenced as `Trigger Nodes`, `Trigger Plugins`, ect...

As we venture deeper into the labyrinth of n8n's powerful ecosystem, it's hard not to be intrigued by its trigger plugins.
Acting as the heartbeat of any workflow, these plugins are the gatekeepers, deciding when a workflow should spring to life.
For both developers and tech enthusiasts, understanding these triggers can be the key to maximizing n8n’s potential.
Remember that triggers can be a reaction based on an event or condition!

There a couple different ways to activate the triggers, these below are the main ways.

- Webhook Trigger
  - A listener waiting for an external input. Once an external service sends data to the specified URL, the magic begins.
  - Use Case: Imagine a content management system notifying n8n every time a new article is published, enabling a chain reaction of automated tasks like social media postings.

- Interval Trigger
  - Time-based triggers that execute workflows at regular intervals.
  - Use Case: You could use this to periodically fetch and backup data from a database, ensuring you have timely backups without manual intervention.

- Cron Job Trigger
  - Advanced time-based triggers allowing complex schedules. Using cron syntax, one can specify intricate timings.
  - Use Case: A journalist might use this to run a workflow that compiles daily news from various sources at 7 am every weekday.

- Startup Trigger
  - This trigger activates a workflow as soon as n8n starts. It's a one-time trigger for initializing processes.
  - Use Case: A developer could utilize this to initialize certain environment variables or to send notifications about system startups.

- MQTT Trigger
  - It listens for messages from an MQTT broker—a communication protocol for IoT devices.
  - Use Case: Imagine your smart thermostat triggering a workflow in n8n whenever your room temperature crosses a certain threshold, prompting automated alerts or actions.

- External Trigger
  - A plugin that allows other automation platforms, like Zapier, to initiate workflows in n8n.
  - Use Case: This would be beneficial for those transitioning from other platforms or aiming to integrate n8n with existing setups.

#### Intricacies and Insights

The power of trigger plugins lies in their versatility.
For the developer, they offer a range of options to kickstart intricate automation.
For the journalist or business user, they paint a picture of how automated actions can originate from a plethora of events, whether they're time-based, external signals, or even IoT messages.
In essence, n8n's trigger plugins embody the principle that in the realm of automation, starting right is half the battle won.
