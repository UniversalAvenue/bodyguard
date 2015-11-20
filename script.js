const data = {
  step1: {
    line: "Hi, I'm the manager, how can I help?",
    actor: "manager1",
    replies: [
      {
        line: "…I'm from Universal Avenue...if you have a couple of minutes I'd like to tell you about a great way to increase your bookings.",
        expanded: "Nice to meet you, my name's John Learner - I'm from a company called Universal Avenue. We represent some innovative new services that could increase your customer bookings. If you're interested I'd like to take a minute of your time to tell you about a great new marketing solution called TrySpace.",
        continueOn: "step2",
      },
      {
        line: "I'm from TrySpace, we sell websites that work across all platforms... would this be of interest to you?",
        expanded: "Nice to meet you, I'm John Learner, I'm a sales representative for a company called TrySpace. We sell websites that work across all platforms. They have a really advanced analytics function and are SEO friendly. You can easily view statistics on what parts of the website has been looked at, or which key words have been used on Google, for example. Would this solution be of any interest to you?",
        continueOn: "step3",
      },
      {
        line: "… I'd like to talk to you about your marketing activities... is now a good time for you or should I come back another day?",
        expanded: "Nice to meet you, I'm John Learner. I'd like to talk to you about how you can improve your marketing activities. Do you have a couple of minutes free now, or should I come back at a more convenient time?",
        continueOn: "step4",
      },
    ],
  },
  step2: {
    line: "Hmm, I'm quite busy right now, what kind of marketing solution is it?",
    actor: "manager1",
    reply: "You tell the manager that it's a website, but before you continue she interrupts you…",
    continueOn: "step5",
  },
  step4: {
    line: "Sorry I'm busy.\n\nDo you have some information I can look through and I'll get in touch if it's interesting?",
    actor: "manager1",
    reply: "You leave your business card and give the manager the link to the TrySpace website. You turn to leave when coach Pete blocks your way...",
    continueOn: "step6",
  },
};
