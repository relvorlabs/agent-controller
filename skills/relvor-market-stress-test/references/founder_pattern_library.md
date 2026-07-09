# Founder Pattern Library — What 10–15 Years in Nigeria Teaches You
## Relvor LTD | For use in Market Stress Test Skill

These are not research findings. They are patterns observed across enough Nigerian startups, by enough founders who survived and failed, to have become instinct. Surdma does not have this instinct yet. This file is where it lives until he builds it through experience.

Each pattern has: what it is, why it matters in Nigeria specifically, what it looks like when a founder ignores it, and what to do instead.

---

## Pattern 1: The First Customer Is Your Product Spec

**What it is:** Your first paying customer will tell you what your product actually is — not your research, not your architecture document, not your design system.

**Why it matters in Nigeria:** Nigerian buyers are reluctant early adopters. The ones who pay first despite all their instincts to wait are telling you something urgent and specific about their pain. That information is worth more than any market research report.

**What ignoring it looks like:** Building Version 1.0 based entirely on research documents, then launching to discover the agents want something different from what you built.

**What to do instead:** Take the first person who says "I would pay ₦10,000 for this" and ask them to define exactly what "this" means. Build that. Not what you planned. What they described.

---

## Pattern 2: Trust Is Transferred, Not Sold

**What it is:** In Nigeria, new products are not trusted on the basis of their features or their pitch. Trust is transferred from a person the customer already trusts.

**Why it matters in Nigeria:** Cold outreach CAC in a low-trust market is prohibitively expensive. A founding team with no existing community relationships in the target sector will spend 10x more to acquire the same customer as someone who walks into the room already vouched for.

**What ignoring it looks like:** Building a landing page and running ads to acquire property agents. Getting 200 signups and zero paying customers.

**What to do instead:** The first 10 customers must come through a warm introduction. Find the one person in the Lagos real estate WhatsApp group who is already respected. Win them. They introduce you to the next 10.

---

## Pattern 3: Pricing Is an Emotional Decision, Not a Rational One

**What it is:** Customers don't buy based on whether the price is fair relative to value delivered. They buy based on whether the price feels right relative to their identity, their peers, and their fear of looking foolish.

**Why it matters in Nigeria:** A property agent managing 50 units would rationally pay ₦50,000/month for a tool that saves 20 hours of labor. But ₦50,000/month sounds like "software company money" not "agent money" — and they will reject it not on the math, but on the identity mismatch.

**What ignoring it looks like:** Setting a perfectly rational price that no one pays because it doesn't feel like what "people like me" spend on tools like this.

**What to do instead:** Start with a price that feels slightly too low to you. Watch the first 10 customers. If none of them negotiate, you're too cheap. If half negotiate, you're in the right range. If all of them say yes without hesitation, raise the price.

---

## Pattern 4: The Product Will Break at Scale in a Way You Cannot Currently Imagine

**What it is:** Whatever limitation is tolerable at 10 users becomes catastrophic at 1,000. This is true everywhere. In Nigeria, the break points are different and more severe.

**Why it matters in Nigeria:** Nigerian infrastructure breaks in ways Western infrastructure does not. Database locks, payment webhook failures, API timeouts — all are more frequent and more consequential when your customers' livelihoods depend on your product working during a Lagos afternoon rainstorm when three generator sets are running and internet packets are dropping.

**What ignoring it looks like:** Building a web app with no offline mode, no graceful degradation, and no WhatsApp fallback. Then having it fail during rent reconciliation day for an agent managing 80 units.

**What to do instead:** For every core feature: what happens when the internet drops mid-operation? What happens when the payment gateway is down? Build the fallback before the feature.

---

## Pattern 5: Your Competition Is Inertia, Not Another Startup

**What it is:** The biggest competitor for any new Nigerian digital product is not a rival software company. It is the current behavior: WhatsApp + Excel + paper receipts + memory.

**Why it matters in Nigeria:** "Current behavior" has zero CAC, zero monthly fee, and infinite familiarity. You are asking someone to pay to change something that already works well enough. "Well enough" is your real competitor.

**What ignoring it looks like:** Building a competitive analysis comparing your product to RentPro and Roofboss, and ignoring that 90% of your market uses nothing at all.

**What to do instead:** Design your product so that the first interaction is better than what they currently do, not just better than what a competitor offers. The comparison your customer makes is not you vs. them. It is you vs. free.

---

## Pattern 6: The Distribution Channel Is the Business

**What it is:** In Nigeria, a great product with weak distribution beats a weak product with strong distribution in the short run. And loses in the long run. But without distribution, a great product dies before the long run arrives.

**Why it matters in Nigeria:** There is no Google Ads hack that works at startup budget levels for B2B Nigeria. There is no viral loop powerful enough to overcome low smartphone penetration in a target market. Distribution in Nigeria is fundamentally a human and community problem, not a technology problem.

**What ignoring it looks like:** Launching a SaaS product with a beautiful website and SEO content marketing strategy. Getting zero customers in 6 months. Blaming the product.

**What to do instead:** Before building the product, name the five specific humans who will carry it into their community. Not "LinkedIn influencers." Specific people. If you can't name them, you don't have distribution yet.

---

## Pattern 7: Compliance Is a Moat, Not a Burden

**What it is:** Most Nigerian startups treat compliance (NDPC, CBN guidelines, sector regulations) as a cost to be deferred until they scale. The founders who are still operating after 5 years treated it as a competitive advantage from Day 1.

**Why it matters in Nigeria:** Nigerian B2B buyers, especially professional associations (estate agents, lawyers, accountants, healthcare providers), are unusually sensitive to whether a vendor is "proper." A product that visibly cites the Lagos Tenancy Law, displays its RC number, and mentions NDPC registration on its receipt footer wins mandates over a technically superior product that looks like a startup building in a bedroom.

**What ignoring it looks like:** Building a product without visible compliance markers. Losing a deal to an inferior competitor because their receipt footer cited Section 10 of the Lagos Tenancy Law and yours didn't.

**What to do instead:** On the first version of every document the product generates: the RC number, the relevant regulation citation, and the data protection assurance. These cost nothing to include and are worth thousands of naira in earned trust.

---

## Pattern 8: Cash Before Code Protects Against the Most Common Delusion

**What it is:** The most common delusion in early-stage Nigerian startups is "if I build it, they will pay." The founder runs the product through their mind and concludes it's valuable, then builds for 6 months, launches, and discovers payment collection is harder than building the product was.

**Why it matters in Nigeria:** Nigerian customers will show enthusiasm during discovery conversations that they will not follow through with at payment. "This is amazing, I definitely need this" is not a purchasing signal. A ₦10,000 payment is.

**What ignoring it looks like:** Spending 3 months building a MVP, launching it to 20 enthusiastic beta users, and then watching all 20 of them tell you the product is brilliant while not one of them pays.

**What to do instead:** Before building anything, find one person who will pay ₦10,000 for a manual version of what the product would do. Deliver it manually. Collect the ₦10,000. Then build.

---

## Pattern 9: The First Employee Is More Important Than the First Investor

**What it is:** Most first-time founders think their first milestone is raising money. The founders who survive think their first milestone is finding the first person outside the founding team who believes in it enough to work for it.

**Why it matters in Nigeria:** Nigerian investors at the pre-seed stage invest in teams, not ideas. An idea with a solo founder and zero demonstrated team-building ability is significantly harder to fund than an idea with a co-founder or a committed early employee.

**What ignoring it looks like:** Spending 6 months perfecting the product, then going to investors with a beautiful deck and zero team. Getting rejected 15 times. Not understanding why.

**What to do instead:** Before the fundraise, find one person who will work with you — even part-time, even deferred compensation — for a stake in the outcome. Not a co-founder necessarily. A committed first operator. Their commitment is evidence that you can build a team.

---

## Pattern 10: WhatsApp Is the Operating System. Build For It.

**What it is:** In Nigeria, WhatsApp is not a messaging app. It is the operating system of business communication for SMEs. Every important business decision, every customer relationship, every invoice dispute happens through WhatsApp or is communicated through WhatsApp.

**Why it matters in Nigeria:** A product that ignores WhatsApp is a product that requires SMEs to adopt a new communication system in addition to adopting a new business tool. That's two behavior changes at once. It kills adoption.

**What ignoring it looks like:** Building a product where important notifications go to an in-app notification center. Discovering that no one logs into the app frequently enough to see time-sensitive alerts. Overdue tenants never get reminded. Agents stop using the product.

**What to do instead:** Every time-sensitive event (payment received, overdue alert, report ready, anomaly detected) must generate a WhatsApp message first. The app is the full experience. WhatsApp is the always-on notification layer. Design for this from Day 1.

---

## Pattern 11: Regulatory Changes Will Happen Without Notice

**What it is:** In Nigeria, regulatory frameworks change faster than product roadmaps. The CBN has changed its stance on cryptocurrency, mobile money, agency banking, and open banking multiple times in 10 years. The NDPC (data protection) framework is still evolving. LASRERA enforcement in Lagos real estate is inconsistent.

**Why it matters in Nigeria:** Building a product that depends on a specific regulatory interpretation is building on sand. Okra built its core product on the assumption that CBN's open banking rules would arrive on schedule. They didn't. The company couldn't survive the wait.

**What ignoring it looks like:** Building a product feature that requires a specific CBN approval, or assumes a regulatory framework that isn't fully operational yet. Getting a cease-and-desist or having your banking partners pull access.

**What to do instead:** For every feature that touches a regulated activity: what happens to this feature if the regulation changes tomorrow? If the answer is "the product breaks," that's a risk that must be designed around. Build the regulatory-sensitive features as optional modules, not core infrastructure.

---

## Pattern 12: The Naira Will Lose Value. Plan For It.

**What it is:** The Naira has depreciated significantly in every 5-year period since 1985. The pace accelerated dramatically in 2023–2024. Any revenue model that does not account for this will be underwater within 24 months.

**Why it matters in Nigeria:** If you price in Naira but your costs are partially USD-denominated (AWS, API services, software subscriptions), your margins compress with every Naira devaluation. Okra lost 40–50% of its cost competitiveness during the 2023–2024 Naira slide.

**What ignoring it looks like:** Launching with pricing that works at ₦800/USD, watching Naira hit ₦1,700/USD, and discovering your cloud costs tripled while your Naira revenue stayed flat.

**What to do instead:** Price contracts with annual review clauses from Day 1. Maintain a USD cost budget that is separate from your Naira revenue budget. Calculate your survival threshold at ₦2,000/USD. If you survive that scenario, you're viable.

---

## Pattern 13: The Product That Wins Is Not Always the Best One

**What it is:** In a low-trust, word-of-mouth market, the product that achieves trusted distribution first wins — even if a technically superior competitor exists.

**Why it matters in Nigeria:** Nigerian SME buyers do not do extensive product comparisons before purchasing. They adopt what their trusted peers are using. Once 20 agents in the NIESV Lagos WhatsApp group are using your product, the next 50 agents join because those 20 are using it — not because they compared your feature set to alternatives.

**What ignoring it looks like:** Spending 6 months adding AI features because a competitor has them, while a less capable competitor acquires 100 agents by showing up at the NIESV chapter meetings.

**What to do instead:** Distribution investment (showing up, building community relationships, earning word-of-mouth endorsements) is worth more than product investment before you have 100 paying customers. After 100 paying customers, product investment becomes the moat.

---

## Pattern 14: Metrics That Don't Touch Money Are Vanity

**What it is:** Signups, downloads, MAU, press coverage, LinkedIn engagement, social media followers — none of these are business metrics. In Nigeria, where capital is scarce and inflation erodes runway, a founder who cannot recite their MRR, churn rate, and CAC by month 3 is a founder who is running blind.

**Why it matters in Nigeria:** Nigerian startup investors have seen too many companies with "incredible traction" that couldn't survive past the first funding cycle. They now weight revenue metrics with much higher conviction than growth metrics. A founder who says "we have 5,000 signups" gets a harder follow-up question than a founder who says "we have 12 paying customers at ₦15,000/month."

**What ignoring it looks like:** Celebrating 1,000 app downloads and using it as validation to keep building, while no one has paid yet.

**What to do instead:** At every point in the business, know: how many paying customers, how much MRR, what the MoM growth rate is, and what one month of operating costs is. If you can't recite these in a conversation, you don't know your business well enough yet.

---

## Pattern 15: Your Network Is Your Net Worth — Then Your Product Is

**What it is:** In Nigerian business, the warm introduction is the primary trust mechanism. Cold outreach success rates in B2B Nigeria are structurally low for startups with no brand. Your professional network — the people who know you and will vouch for you — determines how quickly you can access customers, partners, advisors, and investors.

**Why it matters in Nigeria:** A Lagos property agent will not give a startup their client payment data without a warm introduction. A NIESV-affiliated agent will refer you to 10 agents if they trust you. The same product, sold by a stranger vs. sold by someone the customer's colleague introduced, has completely different conversion rates.

**What ignoring it looks like:** Building a great product, launching it cold to strangers, achieving a 0.5% conversion rate, running out of runway before distribution kicks in.

**What to do instead:** Before launch, map your warm network connections to your target customer category. Who do you know who knows a Lagos property agent with 50+ units? That person is your first sales call — not to sell to them, but to ask for an introduction.

---

## Pattern 16: Solve One Problem Completely Before Expanding

**What it is:** Founders underestimate how hard it is to be truly excellent at one thing. They expand into adjacent features before the core is fully working. In Nigeria, this is fatal — SME customers have low tolerance for products that do many things mediocrely.

**Why it matters in Nigeria:** Nigerian SME buyers are suspicious of products that claim to do everything. A product that is obviously excellent at one thing earns trust faster than a product that is adequate at ten things.

**What ignoring it looks like:** Building rent reconciliation, receipt generation, landlord reporting, AI extraction, payment processing, and a marketplace simultaneously — then launching with all features at 60% quality. Getting negative word-of-mouth because "the app is buggy."

**What to do instead:** Pick the one feature that solves the most urgent pain point most completely. Build that to 100%. Get 10 customers using it daily. Then expand.

---

## Pattern 17: Unit Economics Must Work at Small Scale or They Never Will

**What it is:** "We'll be profitable at scale" is a Nigerian startup obituary written in advance. If the unit economics don't work at 10 customers, they won't magically work at 10,000. Costs in Nigeria scale alongside revenue in ways that don't mirror Silicon Valley assumptions.

**Why it matters in Nigeria:** Support costs scale linearly in low-literacy markets (every customer needs handholding). Infrastructure costs are higher per user than global benchmarks (power backup, redundant connectivity). Customer success costs don't decrease with scale the way SaaS playbooks assume.

**What ignoring it looks like:** Assuming that acquiring 1,000 customers will magically fix the margin problem that exists at 10 customers.

**What to do instead:** Before launch, calculate: what does it cost to serve Customer #1, Customer #10, and Customer #100? If serving Customer #100 still costs more than the revenue from Customer #100, the model needs to change before growth.

---

## Pattern 18: The Japa Effect Is Both Threat and Opportunity

**What it is:** Nigerian tech talent emigrates to Europe, Canada, the UK, and the UAE at an accelerating rate. Building and retaining a local technical team is harder and more expensive than it was in 2020.

**Why it matters in Nigeria:** The cost of retaining a senior Nigerian developer in Lagos has increased dramatically because their alternative is a $60K USD salary in the UK. For a solo founder, this means the technical work must either be done by the founder or by a very small, well-compensated team.

**What ignoring it looks like:** Trying to hire a Lagos tech team at 2020 rates and losing every candidate to competing offers or emigration.

**What to do instead (for Relvor specifically):** As a solo technical founder, build as far as possible alone before the first technical hire. When hiring, structure compensation with equity that is meaningful and vesting schedules that create staying incentives. Remote-first team design is not optional — it is the only way to access the full talent pool.

---

## Pattern 19: Government as Customer Is a Trap (At This Stage)

**What it is:** Government contracts in Nigeria sound large and prestigious. They are slow, payment cycles are unpredictable, procurement processes are politically influenced, and startups that depend on government revenue as a primary source almost universally run out of cash waiting for it.

**Why it matters in Nigeria:** Government is an important long-term stakeholder for infrastructure products. As a primary revenue source in Years 1–3, it is a distraction that kills cash flow.

**What ignoring it looks like:** Spending 3 months pursuing a state housing ministry pilot program, getting a letter of intent, discovering payment will arrive in 9 months, and running out of runway before the private sector revenue kicks in.

**What to do instead:** Build the private sector business first. Government relationships are earned after you have a product that works and metrics that matter. They are not a shortcut to revenue.

---

## Pattern 20: Your First 100 Customers Will Not Come From Your Website

**What it is:** In Nigeria, B2B customers don't discover new tools by searching Google. They discover them through community recommendation, event presence, direct outreach from someone they respect, and word-of-mouth in professional WhatsApp groups.

**Why it matters in Nigeria:** SEO, content marketing, and paid digital acquisition are medium-to-long-term distribution strategies in Nigerian B2B markets. They are not Day 1 strategies for a founder with no brand and no budget.

**What ignoring it looks like:** Spending 2 months building a website with SEO optimized content about property management software. Getting 200 website visitors and 0 customer inquiries.

**What to do instead:** Don't build the website until you have 10 customers whose problems it is supposed to address. The first 100 customers will come from showing up in person at industry events, being introduced by respected community members, and being relentlessly present in the WhatsApp groups where your customers talk to each other.

---

## Pattern 21: B2B Enterprises Don't Buy Features. They Buy Outcomes and Reduced Risk.

**What it is:** When selling to a property agency managing 200 units, the feature list does not make the sale. The answer to "what specifically changes on the first Monday after I sign up?" makes the sale.

**Why it matters in Nigeria:** Nigerian business owners are conservative buyers. They have been burned by tools that promised transformation and delivered disappointment. The sale happens when the buyer can see, specifically, what their world looks like after adoption — not in 6 months, but next Monday.

**What ignoring it looks like:** Pitching "AI-powered bank alert extraction with 95% accuracy." Getting a polite "let us think about it."

**What to do instead:** "You send me your next 10 bank alerts. I reconcile them for you manually this weekend. Monday morning you have a formatted receipt for each one and a landlord summary. That's what the software does, automatically, every week."

---

## Pattern 22: The Second Product Comes After the First One Has Revenue

**What it is:** Founders who have survived 10+ years in Nigeria all say some version of this: the companies that tried to build multiple products simultaneously in Years 1–3 almost all failed. The ones that built one product to revenue, then used that revenue and credibility to fund the second product, almost all survived.

**Why it matters for Relvor specifically:** Relvor is a multi-product company by intent. But multi-product companies require multi-product capacity — team, capital, and brand. None of those exist yet. Right now, Relvor builds Leja. Everything else waits until Leja has MRR.

**What ignoring it looks like:** Splitting attention between Leja and a second product before Leja has its first ₦1M MRR month. Executing both at 60% quality and missing revenue targets on both.

**What to do instead:** Stress-test new product ideas immediately with this skill. If the idea is strong, document it in a backlog and park it explicitly. "Documented and parked" means it is respected but not pursued. Return to it after Leja milestone X.

---

## Pattern 23: Pricing Anchoring Happens Once

**What it is:** The price a customer first pays you anchors every future pricing negotiation. If you launch at ₦5,000/month and then try to raise to ₦15,000/month 6 months later, you will face resistance disproportionate to the change because the anchor was set wrong.

**Why it matters in Nigeria:** Nigerian SME buyers are particularly resistant to price increases after they've committed to a product. They interpret increases as "the startup needs money" rather than "the product has become more valuable."

**What ignoring it looks like:** Launching a product at a discount to attract first customers, then discovering you cannot raise prices without losing 40% of your customer base.

**What to do instead:** Price at the highest number you can defend to the first customer. The discount strategy is a trap. Structure payment tiers instead of discounts — "start on the free tier, upgrade when you're ready" is better than "here's a 50% discount for the first 3 months."

---

## Pattern 24: Don't Confuse Market Enthusiasm with Purchase Intent

**What it is:** Nigerian founders are frequently told "this is amazing, I love this idea" and conclude they have market validation. They don't. Enthusiasm is abundant and cheap in Nigerian professional culture. Willingness to pay is the only signal that counts.

**Why it matters in Nigeria:** Nigerian politeness culture is high-context. "I love this idea" often means "I would love this idea if I needed it" or "I would love this idea if I could afford it." It rarely means "I will pay you for this."

**What ignoring it looks like:** Conducting 50 "validation conversations" where everyone is enthusiastic. Launching. Getting 3 paying customers.

**What to do instead:** The validation question is not "would you use this?" It is "I'm doing a manual pilot this month for ₦10,000. Can I sign you up today?" The people who say yes are your market. The people who find a reason to wait are not your market yet.

---

## Pattern 25: The Naira Price Feels Real. The Dollar Price Feels Abstract.

**What it is:** Nigerian SME buyers process prices in Naira. When a product is priced in dollars (even informally), it signals "this is for big companies, not for me." Even if the Naira equivalent is affordable, the USD framing creates psychological distance.

**Why it matters for products that might serve diaspora or international segments:** The product's Nigerian customers should always see Naira pricing. USD pricing (for diaspora or international segments) should be a separate, parallel experience — not the default.

**What ignoring it looks like:** Pricing a product at "$10/month" and displaying that on the Nigerian marketing materials. Agents calculating ₦15,000/month in their heads and thinking "this is foreign-priced software, not for me."

**What to do instead:** Primary pricing in Naira, always. USD equivalent as a secondary parenthetical for international comparisons. Nigerian sales conversations happen in Naira.

---

## Pattern 26: Build Once, Sell Twice — Find the Derivative Revenue

**What it is:** The best Nigerian B2B products generate primary revenue from one stream (subscriptions, transaction fees) and then discover that the data, the relationships, or the access the product creates enables a second revenue stream that is often higher margin than the first.

**Why it matters for Relvor products:** This is the Paystack model — built payments infrastructure, then discovered the data and relationships enabled Paystack Checkout, then Terminal, then Capital. Every Relvor product should have a clear primary revenue model AND a documented hypothesis for the derivative revenue that emerges from it at scale.

**What ignoring it looks like:** Building a product that maxes out its primary revenue stream at ₦5M MRR with no expansion path. Stalling there.

**What to do instead:** For every product, name the derivative revenue stream from Day 1. It doesn't have to be built yet. But it must be documented and designed for in the architecture.

---

## Pattern 27: Say What You Are Not

**What it is:** Successful Nigerian startups are unusually specific about what they don't do. This specificity builds trust with B2B buyers who have been burned by all-in-one tools that do nothing well.

**Why it matters in Nigeria:** An agent who has been disappointed by 3 property management tools that promised everything is specifically looking for a product that admits its scope. "We do rent reconciliation and receipts better than anyone. We don't do listings. We don't do valuation. We don't compete with your current CRM." That clarity is reassuring, not limiting.

**What ignoring it looks like:** Pitching "the complete property management solution" to agents who have been burned by "complete solutions" before.

**What to do instead:** On the first customer conversation: state explicitly what the product will never do. The honesty about limitations is the proof that the claims about strengths are true.

---

## Pattern 28: Retention Is the Business. Acquisition Is the Cost.

**What it is:** Every early-stage Nigerian startup thinks about how to get customers. The founders who survive 5+ years think more about how to keep customers than how to get them.

**Why it matters in Nigeria:** In a market where trust is earned slowly, churn is catastrophic. Losing a customer in Nigeria means: losing the revenue, losing the word-of-mouth they would have generated, and potentially generating negative word-of-mouth that spreads faster than positive endorsements.

**What ignoring it looks like:** Acquiring 50 customers in Month 3, losing 20 by Month 6 from poor onboarding, and spending Month 7 trying to re-acquire customers you already won and lost.

**What to do instead:** Before Month 1 customer #1 is acquired, define the retention mechanism. What keeps this customer using the product 12 months from now? Is it data locked in (switching cost)? Is it community network effects? Is it a Score or history that only grows in value over time? If the answer is "the product is just good," that's not a retention mechanism.

---

## Pattern 29: The Business You Build in a Crisis Reveals the Business That Will Survive

**What it is:** Nigerian founders who survived the 2020 COVID lockdown, the 2023–2024 Naira devaluation, and the post-subsidy removal inflation shock have something in common: their businesses had a core use case that customers couldn't avoid even in a crisis.

**Why it matters for product design:** Every product should pass the crisis test. If a major economic shock hits Nigeria (and one will), does this product become more essential or less essential? Products that become more essential in a crisis (payment tools, compliance tools, trust infrastructure, cost-saving automation) survive. Products that become discretionary (marketing tools, optional analytics, nice-to-have dashboards) don't.

**What to do instead:** For every product, ask: does this become more or less critical when a customer's cash flow drops 50%? If less critical: make sure the product has a free tier or a minimum-commitment option that keeps customers in the ecosystem during the downturn.

---

## Pattern 30: The Exit From a Failed Product Is As Important As the Entry

**What it is:** Products fail. Not all Relvor products will succeed. The difference between a founder who builds multiple companies and one who doesn't is knowing when to kill a product cleanly, what to preserve from it (relationships, code, learnings), and how to exit without reputational damage.

**Why it matters in Nigeria:** Reputations in Nigerian professional communities are long. An agent who was burned by a product that disappeared overnight without warning will tell every agent in their WhatsApp group. The graceful shutdown — advance notice, data export, clear communication — is as important as the graceful launch.

**What to do instead:** Before building any product, define the exit criteria. What specific evidence would indicate this product will not survive? At what point does a pivot become required? At what point does a shutdown become the right decision? Document these before emotion gets involved.
