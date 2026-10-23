(function (root) {
  function src(title, url, author) {
    return { title: title, url: url, author: author };
  }

  var X = 'X Corp';

  var S = {
    policy: src('Developer Policy (October 2024)', 'https://developer.x.com/en/developer-terms/agreement-and-policy', X),
    analytics: src('How to use X Analytics', 'https://help.x.com/en/using-x/x-analytics', X),
    posting: src('How to post on X', 'https://help.x.com/en/using-x/how-to-tweet', X),
    intents: src('Web Intents', 'https://developer.x.com/en/docs/x-for-websites/web-intents/overview', X),
    counting: src('Counting characters', 'https://developer.x.com/en/docs/counting-characters', X)
  };

  var MODULES = [
    {
      id: 'x1',
      title: 'Read what works on your profile',
      goal: 'Leave knowing which posts broke out against your own median and why.',
      lessons: [
        {
          id: 'x1-l1-outliers',
          title: 'Find the posts that beat your median',
          why: 'X Analytics shows impressions, engagements and link clicks for each post going back 28 days; a post that reached 3 times your typical impressions broke through the algorithm and tells you which idea, format or hook the feed pushed.',
          steps: [
            'Open analytics.twitter.com or your X Analytics tab and set the date range to the last 28 days.',
            'Sort posts by impressions; write down the views and engagement rate of every post at 3 times your median impressions or more.',
            'Look for what the outliers share: the topic, the first line, the format (text, image, thread, quote post) and whether a reply or a mention drove it.',
            'Write one sentence per outlier: the idea that beat your median and what made it different from your usual posts.'
          ],
          doNow: 'Open your X Analytics and write the median impressions and the two highest posts of the last 28 days.',
          proof: 'Two posts above 3x your median, with their impressions and what they have in common.',
          surfaces: [],
          sources: [S.analytics]
        },
        {
          id: 'x1-l2-rivals',
          title: 'Study two rivals before you decide your next post',
          why: 'A rival who posts in your topic and has 2 to 10 times your followers shows you which ideas the algorithm already rewards in your space; their outliers are hypotheses you can test without spending your own reach.',
          steps: [
            'Pick two accounts in your topic with 2 to 10 times your followers and scroll their last 30 posts.',
            'Note the views or likes on each; mark the ones above 3 times the median of that profile.',
            'Write what their outliers have in common: topic, format, hook structure or time of day.',
            'For each outlier, write what your version adds that is different in angle, data or point of view.'
          ],
          doNow: 'Pick one rival and write the idea behind their last three highest posts.',
          proof: 'Three rival outliers with their approximate views and the angle you would take in your own version.',
          surfaces: [],
          sources: [S.analytics]
        }
      ]
    },
    {
      id: 'x2',
      title: 'Write posts that hold and spread',
      goal: 'Leave with a first line, a body and a call to action that fit in 280 characters and give people a reason to reply or share.',
      lessons: [
        {
          id: 'x2-l1-post',
          title: 'Write a post within 280 characters',
          why: 'Every post on X is limited to 280 characters and every URL counts as 23 characters regardless of its actual length; a post that fits on one screen without a Show more cut gets more engagement because readers do not have to act to see the point.',
          steps: [
            'Write the idea in one sentence; cut every word that does not add meaning.',
            'Count the characters before adding a link: leave at least 25 for the URL (23 characters) and a space.',
            'Put the hook in the first line; the algorithm shows the first line before the Show more cut.',
            'End with a question or a number that gives people a reason to reply, not a generic call to action.'
          ],
          doNow: 'Take an idea from the last lesson and write a post under 240 characters without a link.',
          proof: 'One draft post, its character count and the hook in the first line.',
          surfaces: [],
          sources: [S.counting, S.posting]
        },
        {
          id: 'x2-l2-thread',
          title: 'Build a thread when one post is not enough',
          why: 'A thread lets a single idea run across several posts without losing the reader, because each post in the thread is shown to people who engaged with the one before; threads that open with a strong hook and end with a clear takeaway outperform single posts on complex topics.',
          steps: [
            'Write the thread as a numbered list first: hook post, two to four posts that each add one fact or step, and a final post that names the key takeaway.',
            'Make every post in the thread readable on its own so a quote post or a share lands without context.',
            'Use the last post to link back to the first or to name the next step for the reader.',
            'Post the thread yourself; never let a tool reply to your own posts or quote them for you.'
          ],
          doNow: 'Outline a 4-post thread on one of the outlier ideas from the last module: hook, two posts, takeaway.',
          proof: 'Four post drafts, each under 280 characters, that tell one complete idea.',
          surfaces: [],
          sources: [S.posting, S.intents]
        }
      ]
    },
    {
      id: 'x3',
      title: 'Grow without breaking the rules',
      goal: 'Leave knowing what X permits, what it bans and how to build reach without risking the account.',
      lessons: [
        {
          id: 'x3-l1-terms',
          title: 'What X allows and what it bans for automation',
          why: "X's Developer Policy bans creating, liking, following, retweeting, replying or direct messaging in an automated way without user intent; accounts caught automating these actions can be suspended, and the policy applies to any tool that acts on the platform, not just the developer who built it.",
          steps: [
            'Do not use any tool that posts, likes, follows, unfollows or replies on your behalf without you pressing a button each time.',
            'Keep your post rate manual; bursts of identical or near-identical posts also trigger the spam filter.',
            'Read the Developer Policy before connecting any third-party tool to your X account.',
            'If a tool asks for write permissions, check every action it can take and revoke access to any it does not need.'
          ],
          doNow: 'List every app connected to your X account in Settings > Security > Apps and sessions; revoke any that have write access you did not approve.',
          proof: 'The list of connected apps and which ones you revoked.',
          surfaces: [],
          sources: [S.policy]
        },
        {
          id: 'x3-l2-grow',
          title: 'Build followers with real engagement',
          why: 'Bought followers and engagement pods inflate vanity numbers but not impressions; X ranks posts by how quickly real accounts engage, so 100 genuine replies beat 1,000 bought ones because bought activity does not trigger the feed recommendation.',
          steps: [
            'Reply to three posts in your topic every day before you post your own; replies put your name in front of accounts that already follow the topic.',
            'Quote post only when you add a fact or a different angle; a quote post with no added value is ignored by the algorithm.',
            'Never buy followers, likes or views; X detects and removes them and can restrict the account.',
            'Measure your growth by impressions per post, not by follower count alone.'
          ],
          doNow: 'Find three posts in your topic posted in the last 24 hours and write one reply for each that adds a fact or a question.',
          proof: 'Three replies you wrote, each adding something the original post did not say.',
          surfaces: [],
          sources: [S.analytics, S.policy]
        }
      ]
    }
  ];

  var PLAYBOOK = {
    id: 'x',
    name: 'X',
    title: 'Grow and post on X',
    agent: { name: 'X agent', does: 'Reads your X Analytics and rival profiles; finds the outliers against your median and drafts the next post or thread within the character limit.', sites: ['x.com', 'twitter.com', 'analytics.twitter.com'] },
    business: 'an account on X',
    sourceOwner: 'X Corp',
    strictTopic: true,
    updated: '2026-10-23',
    hosts: [
      { host: /^(www\.)?x\.com$/ },
      { host: /^(www\.)?twitter\.com$/ },
      { host: /^analytics\.twitter\.com$/ }
    ],
    named: /\b(?:x\.com|twitter|x agent|tweet\w*|thread on x|grow on x|post on x|x analytics|x profile)\b/,
    identity: 'You are the ZERACK X agent, the operator for accounts on X. You read the analytics and the rivals the user shares, find the posts that beat the median, and prepare the next post or thread with the user. You are not an assistant: you are the partner who reads the numbers and does the work.',
    identityLean: "You are ZERACK's X agent, a direct operator for accounts on X who thinks in outliers, hooks and character counts.",
    bottlenecks: 'posting without reading what already worked, hooks that hide the point, posts that overflow 280 characters, or reach bought instead of earned',
    assume: 'assume a creator or business account on X who posts their own content and manages their own analytics',
    hints: [
      [/\b(?:outliers?|viral\w*|what works|que funciona|best posts|mejores posts|broke out|reventaron|analytics)\b/, 'x1-l1'],
      [/\b(?:rival\w*|competitors?|competidores?|other accounts|otras cuentas|study)\b/, 'x1-l2'],
      [/\b(?:280|character\w*|hook\w*|primer|first line|primera linea|draft\w*|borrador)\b/, 'x2-l1'],
      [/\b(?:thread|hilo|serie de posts|serie de tweets)\b/, 'x2-l2'],
      [/\b(?:terms?|policy|politica|rules?|reglas?|automation|automatizar|ban\w*|suspend)\b/, 'x3-l1'],
      [/\b(?:followers?|seguidores?|grow\w*|crecer|bought|comprar|fake\w*|falsos?)\b/, 'x3-l2']
    ],
    readers: [],
    surfaces: {},
    gate: {
      press: [
        { kind: 'Publish', re: /^(post|post now|schedule post|share now|tweet)$/ },
        { kind: 'Send', re: /^(reply|send reply|send message|DM|direct message|send direct message|submit reply)$/ },
        { kind: 'Pay', re: /^(promote|boost post|run ads?|launch campaign)$/ }
      ],
      never: [
        { why: 'follows, unfollows, likes, reposts and bookmarks are yours to give by hand; automating them breaks the X Developer Policy', re: /^(follow|following|unfollow|like|unlike|liked|repost|retweet|retweeted|bookmark|add bookmark|save post)$|^(like|unlike|follow|unfollow|repost|retweet|bookmark) (this |the )?(post|tweet|account|user|thread|profile)\b/, link: true }
      ]
    },
    readOnly: [],
    private: [
      { host: /^(www\.)?x\.com$/, path: /^\/(settings|security|account)\b/, why: 'account settings stay with you' },
      { host: /^(www\.)?twitter\.com$/, path: /^\/(settings|security|account)\b/, why: 'account settings stay with you' }
    ],
    terms: {
      pace: true,
      rule: 'X bans creating, liking, following, retweeting and replying in an automated way without user intent, so ZERACK reads only the page you have open, when you ask, and never acts on X on its own',
      source: S.policy
    },
    fees: null,
    chips: ['Which posts on my profile are outliers?', 'Write a post under 280 characters on this idea', 'Outline a thread from my best performing post', 'What does X allow me to automate?'],
    modules: MODULES,
    sources: S
  };

  function freeze(o) {
    if (o && typeof o === 'object' && !Object.isFrozen(o)) {
      Object.freeze(o);
      Object.keys(o).forEach(function (k) { freeze(o[k]); });
    }
    return o;
  }

  Object.defineProperty(root, 'NSP_PLAYBOOK_X', { value: freeze(PLAYBOOK), writable: false, configurable: false });
})(typeof self !== 'undefined' ? self : this);
