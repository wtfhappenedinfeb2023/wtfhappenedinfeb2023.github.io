---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

* [Stats about non-payment transactions](#stats-about-non-payment-transactions)
* [Characteristics of spam](#characteristics-of-spam)
* [Common narratives around spam](#common-narratives-around-spam)
  * [Mempool policy is censorship](#mempool-policy-is-censorship)
  * [A valid transaction is a valid transaction](#a-valid-transaction-is-a-valid-transaction)
  * [The fees were going to be high anyways](#the-fees-were-going-to-be-high-anyways)
  * [Satoshi inscribed on-chain so I should be able to do it too](#satoshi-inscribed-on-chain-so-i-should-be-able-to-do-it-too)
  * [Bitcoin can thrive even if miners are high-time preference greedy actors](#bitcoin-can-thrive-even-if-miners-are-high-time-preference-greedy-actors)
  * [There's nothing you can do about it](#theres-nothing-you-can-do-about-it)
  * [Fighting it will break Bitcoin](#fighting-spam-will-break-bitcoin)
  * [Making transactions more efficient on L1 will solve spam](#making-transactions-more-efficient-on-l1-will-solve-spam)
  * [High fees will solve spam](#high-fees-will-solve-spam)
  * [Everything is good for Bitcoin](#everything-is-good-for-bitcoin)
* [What can you do about it](#what-can-you-do-about-it)
  * [Detailed installation instructions](/install)
* [A brief history of spam in the Bitcoin network](#a-brief-history-of-spam-in-the-bitcoin-network)

### Note

If you are already convinced of why you should stop spam, you can go directly to the [installation instructions page](/install.markdown).

## Stats about non-payment transactions

### mempool.space's transactions by fee rate since 2020

![mempool.space's transactions by fee rate since 2020](/assets/mempool_incoming.png){: width="850" }{:.centered}

*A clear increase in transactions entering mempool.space can be seen starting February 2023. Until today, such increases are usually only experienced by the network during the so-called "bull runs", making this one a noticeable anomaly. [mempool.space](https://mempool.space/graphs/mempool#3y)*

### space occupied by non-payments VS payments on the timechain since January 2023

![fees paid by by non-payments VS payments on the timechain since January 2023](/assets/BTCspamanalaysis_perc_space.png){: width="850" }{:.centered}

*Soon after the beginning of the 2023 spam wave, non-financial transactions have been occupying about 50% of the available blockspace, except during short breaks. This chart does not consider data storage transactions that use bare multisig. [BTC spam analysis](https://dune.com/piratebiscuit/btc-spam-analysis)*

### fees paid by by non-payments VS payments on the timechain since January 2023

![fees paid by by non-payments VS payments on the timechain since January 2023](/assets/BTCspamanalaysis_perc_fees.png){: width="850" }{:.centered}

*Although non-payment related transactions occupy about 50% of each block, the majority of the fees paid in each block are still coming from payments. This data shows how non-payment transactions (spam) are displacing payment transactions, this is forcing non-payment transactions to pay a much higher fee to be included in blocks. [BTC spam analysis](https://dune.com/piratebiscuit/btc-spam-analysis)*

### size of UTXO since January 2023

![Evolution of UTXO set size](/assets/utxo_set.png){: width="850" }{:.centered}

*The size of the UTXO set, number of unspent UTXO outputs, has seen a drastic increase since the beginning of the 2023 spam wave. This is partially due to Inscriptions/BRC-20 but mainly due to spam that relies on bare-multisig data to store data on the timechain. [UTXO set size](https://statoshi.info/d/000000009/unspent-transaction-output-set?orgId=1&refresh=5s&from=now-2y&to=now)*

## Characteristics of spam

During waves of spam, spam is always defended by spam supporters/defenders by claiming that **spam is subjective** and that what is spam for you might not be spam for someone else, as they might have a use for it. This section aims at addressing this mischaracterization.
{: style="text-align: justify"}

Spam opponents often tend to define or characterize spam by defining it based on the **purpose of the network (*Peer-to-peer Electronic Cash system*)**, although there is truth in this characterization, it is an argument that can be hard to defend as the purpose of the network is a concept that can be seen as **subjective**. However, spam can also **be recognized by anyone**, even intellectually honest spammers, thanks to **two main characteristics**:
{: style="text-align: justify"}
1. **Wastefulness of the shared network resources**
2. **Obvious misuse of Bitcoin's functions for a malicious purpose**  
In addition, these transactions are also often sent in **large volumes**.

Transactions with **no practical value or purpose**, such as those submitted by supporters of big blocks during the Blocksize wars for example, are characterized by wastefulness as their output was too small to spend. Other examples of wastefulness are transactions that are sent back and forth repeatedly to the same addresses, transactions which carry no state information, transactions purposelessly split into hundreds of tiny outputs that are then recombined in the next transaction, ...
These transactions are malicious partly because they are wasteful, creating a backlog in the mempool that **drives up transaction costs unnecessarily**. The 2023 wave of spam is especially egregious because it involves **storing obscenely large and unoptimized state data using methods that abuse several of Bitcoin's functions**, such as the segregated witness script discount, `OP_IF` `OP_FALSE` codes, and bare multi-signatures. 
{: style="text-align: justify"}

These transactions can be classified as spam due to their ignorance or malice, they could also occur off-chain relatively easily through *NFTs* with reference hashes or *BRC-20* tokens with reference hashes much more efficiently and this was already proposed several times. Functionally, the result would be the same as it would allow users of this "*standard*" to verify the data **without overwhelming the chain**. *BRC-20* tokens are **not optimized at all** for example and use clear *JSON* (!) instead of *HEX* or *base64* encoding, demonstrating a **complete disregard for the shared resource of the timechain**. This failure is particularly concerning since they account for more than 50% of the average block's size, [as shown in the BTC spam analysis blocksize graph](#space-occupied-by-non-payments-vs-payments-on-the-timechain-since-january-2023) despite being avoidable with a more responsible usage.
{: style="text-align: justify"}

The two characteristics presented here are a simple way to recognize spam that most likely violates the purpose of the network and the desired behavior, and Bitcoin actually supports other protocols that submit non-payment transactions which are not considered as spam by most participants. A good example is the [OpentimeStamps protocol](https://opentimestamps.org/) (there are also many bad examples), which uses Bitcoin for blockchain timestamping and is not considered as spam by most participants in the network as it generally does not present the two characteristics presented above: it uses shared resources efficiently and does not misuse Bitcoin's functions.
{: style="text-align: justify"}


## Common narratives around spam

  * [Mempool policy is censorship](#mempool-policy-is-censorship)
  * [A valid transaction is a valid transaction](#a-valid-transaction-is-a-valid-transaction)
  * [The fees were going to be high anyways](#the-fees-were-going-to-be-high-anyways)
  * [Satoshi inscribed on-chain so I should be able to do it too](#satoshi-inscribed-on-chain-so-i-should-be-able-to-do-it-too)
  * [Bitcoin can thrive even if miners are high-time preference greedy actors](#bitcoin-can-thrive-even-if-miners-are-high-time-preference-greedy-actors)
  * [There's nothing you can do about it](#theres-nothing-you-can-do-about-it)
  * [Fighting it will break Bitcoin](#fighting-spam-will-break-bitcoin)
  * [Making transactions more efficient on L1 will solve spam](#making-transactions-more-efficient-on-l1-will-solve-spam)
  * [High fees will solve spam](#high-fees-will-solve-spam)
  * [Everything is good for Bitcoin](#everything-is-good-for-bitcoin)

### Mempool policy is censorship

The statement implies that any policy applied to your mempool, which temporarily stores unconfirmed transactions in your Bitcoin node before they're added to blocks, is a form of censorship. However, this argument is wrong because **mempool and relay are not forced on you by anyone and are not enforced over the whole network under threat**; instead, they only allow you to **take control over your own mempool** and relay policies to prioritize or refuse to store or relay certain types of transactions. This is the **opposite of censorship**, this is what sovereignty means. This set of rules can be defined through your `bitcoin.conf` file to describe **what a valid transaction is from the point of view of your own mempool**.
{: style="text-align: justify"}

**Policy is everything that is not consensus**. Modifying your mempool and relay policies **does not go against consensus** as you're only affecting what happens before transactions are included in a block. Your node will still receive, record and relay all blocks that are mined by the network and your node will remain within consensus.
{: style="text-align: justify"}

Mempool policies are necessary for ensuring **efficient and effective usage of the limited resources in the Bitcoin network** during periods of high traffic or congestion while also prioritizing critical transaction needs like payments. Nodes are responsible for enforcing their belief of the purpose of the network, these policies are your voice on the network.
{: style="text-align: justify"}

**Censorship is defined as the suppression of speech, public communication, or other information, and is enforced by a central authority that will rely on violence or punishment to force everyone to delete and suppress of said information**. In the case of mempool and relay policies, since each actor is free to set their own rules without being forced to apply a specific set of rules (default rules are often kept by most users but that is a different subject), it is thus obvious that these policies are the opposite of censorship.
{: style="text-align: justify"}

In the case of spam, **refusing to store or relay it with your node can be defined as resource management or moderation, not censorship**. Refusing to relay information that is not aligned with that purpose is a form of moderation, the same way an academic journal about physics will refuse a publication submitted about psychology. Publishing it would otherwise inconvenience most of the readers of that journal who are subscribing and reading that journal because they are interested in advancements in physics. **The main difference in the case of Bitcoin is that the moderation and its enforcement is decentralized over all nodes through mempool and relay policies**.  
In addition, other users are not entitled to your node's resources. If you choose to not store or relay some transactions with your node, that is well within your property rights.
{: style="text-align: justify"}

**Running a node is an active process**. You might have been told that if "you're running a node, you're good", that is just the first step. Noderunners must remain ever-vigilant and ready to act in case of attack. This is effectively what makes Bitcoin anti-fragile. 
{: style="text-align: justify"}

### A valid transaction is a valid transaction

Spam defenders will **often point to the fact that a spam transaction is valid**, in the eyes of the protocol, because it pays the required fee and respects the structure required by the protocol. Although this is true, it does not mean that the transaction cannot be a spam transaction. **By definition, spam will always be a valid transaction**, it would otherwise not be relayed through mempools and won't be included in a block. That does not mean that some valid transactions are not violating the two definitions [previously defined](#caracteristics-of-spam), meaning that the transaction can still waste the shared resources of the network and/or abuse one of Bitcoin's functions for a malicious intent.
{: style="text-align: justify"}

Discussing **the validity of the transaction is not the issue** and participants should not let the debate diverge in that direction. Spam will always be valid, the questions that should be discussed are:
* **Are these transactions willingly wasting the shared resources of the network?**
* **Is there a malicious intent behind this wave of transactions?**
* **Can the purpose of these transactions be achieved more efficiently?**
* **Are these transactions abusing some of Bitcoin's functions to circumvent limitations put in place to preserve the network's resources?**
{: style="text-align: justify"}

Another important detail is that some of the spam from the current wave, mostly inscription-based spam, can be considered to not be paying a fair fee as it circumvents the fair fee market by injecting data into the segregated witness space in order to benefit from a x0.25 discount. This is not the case for bare multisig based spam or `OP_RETURN` based spam.
{: style="text-align: justify"}

### The fees were going to be high anyways

Because Bitcoiners strongly believe that Bitcoin will be adopted by more users who see a need for Bitcoin's properties (citizens experiencing significant currency debasement, institutional users who require fast finality, users trying to circumvent capital controls, ...) combined with the choice to maintain a limited blocksize, there is a strong belief that **transaction fees will become prohibitive in the future**, excluding small users from ever using on-chain transactions. The hope is that Layer 2 solutions will be ready by then.
{: style="text-align: justify"}

A common argument presented about the fact that spam induces high fees is that we all knew that high fees were always going to be high, so high fees shouldn't be an issue. This is argument is flawed for two reasons:
1. High fees are not the issue when it comes to spam, **the issue is about the wastefulness and abuse of the network's functions** that cause harm to the network as a whole
2. **The reason why fees are high is obviously important**. The argument that fees were always going to be high assumes that there will be a strong demand for Bitcoin's properties. When spam is the reason why there are high fees on the network, that is obviously not the case. The high fees is not what matters, it's the adoption and demand for Bitcoin's properties that causes them that's important.
{: style="text-align: justify"}

This second point can easily be understood whit a simple thought experiment: 
* Let's assume that a nation-state level attacker funds an attack where they fill blocks with transactions sent back to themselves, consistently paying fees high enough to ensure that their transactions will be in the next block and stopping anyone else from transacting.
* In this case, the fees will necessary become high, but this situation will stop anyone else from transacting, stopping any real demand for Bitcoin's properties. The fees are high, yes, but would you still support a mitigation scheme to limit the reach of such an attack?
{: style="text-align: justify"}

### Satoshi inscribed on-chain so I should be able to do it too

A common argument presented by inscription supporters is that Satoshi themselves started the trends of injecting data in the timechain with the Genesis block message. This **argument is simply wrong since Satoshi did not subvert ([2nd characteristic of spam](#characteristics-of-spam)) the protocol to "inscribe" data**, they simply used space already available in the Coinbase data that is designed to allow miners to broadcast arbitrary data. **It's always been part of Bitcoin and didn't introduce any wastefulness.**  
[More information here.](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch08.html)
{: style="text-align: justify"}

![Mechanism used to inscribe the Genesis block message by Satoshi](/assets/genesis_coinbase_data.jpeg){: width="850" }{:.centered}

In addition, this argument does not really matter as Satoshi's initial actions should not be blindly followed and used to justify your actions. Everybody can make mistakes, and no one can plan for all future scenarios, especially in a complex system such as Bitcoin that is highly unpredictable.
{: style="text-align: justify"}

This event, instead of being taken as a justification that Bitcoin should be used as a perpetual highly-replicated database, should be **considered as a celebration of the right ways you can post data on chain in a responsible way** as it uses an existing method to store arbitrary data by miners that doesn't obviously circumvent a Bitcoin function.  
Another way to do so would be to use the `OP_RETURN` code as it would signal to the network that the data included in the `OP_RETURN` can safely be discarded outside of the UTXO set. Participants have been and are using `OP_RETURN` codes today to store short messages on the timechain and these are not considered as spam. If you're curious, you can explore these messages on [opreturnbot.com](https://opreturnbot.com/).  
It's still important to highlight that when the `OP_RETURN` [code was released](https://bitcoin.org/en/release/v0.9.0#downgrading-warnings), it was clearly specified that *"Storing arbitrary data in the blockchain is still a bad idea; it is less costly and far more efficient to store non-currency data elsewhere."*. Another extremely important point is that `OP_RETURN` data is still stored on nodes forever, that is the reason why they are limited at 80 bytes, but `OP_RETURN` data does not benefit from the segregated witness discount.  
Inscriptions that are omni-present in the 2023 wave of spam basically have the same impact on the network as `OP_RETURN` data except that they benefit from the segregated witness discount and manage to go above the 80 bytes limit using the `OP_IF` `OP_FALSE` injection scheme.
{: style="text-align: justify"}

**What's next?**

* Want to take control over your mempool's policies? You can easily do that by modifying your bitcoin.conf file. You can use the following tool, provided by [Jameson Lopp](https://jlopp.github.io/bitcoin-core-config-generator/) to easily create a bitcoin.conf file that applies the mempool and relay policies you'd like to apply to your node.
* [More information about mempool policy and its role](https://bitcoin.stackexchange.com/questions/120269/what-is-mempool-policy)

### Bitcoin can thrive even if miners are high-time preference greedy actors

The popular notion that **miners are inherently selfish and solely driven by profit** has become a pervasive narrative within the Bitcoin community. The origin of this narrative is unknown and unclear. Originally, the Bitcoin whitepaper only mentions the term "greed" once, and that is in the case of an attacker. This belief is **not necessarily grounded in reality or based on sound reasoning**. In fact, it overlooks two crucial points: 
1. Firstly, that miners **need Bitcoin to remain valuable and profitable over the long term** in order to recoup their investments and to have profitable businesses; 
2. Secondly, that what **makes Bitcoin valuable is that it's an electronic cash system with unique and distinctive properties**, which can be undermined by excessive spam.
{: style="text-align: justify"}

Because of the two previous points, it is evident that miners must be **aligned with the long term success of the Bitcoin network**. In a sense, this does not mean that miners cannot run on high-time preference greed only, but that miners must care about low-time preference greed as well as high-time greed, and **play a role in the network that balances the two**. This directly contradicts the narrative that the system must run with high-time preference only greedy miners.
{: style="text-align: justify"}

Spam being by definition wasteful and often serving malicious intents not only affects the efficiency of the Bitcoin system, which is already quite limited due to the blocksize, in addition to **affecting its main usage as an electronic cash, which is where it derives its value from**. If spam starts dominating the content of blocks, [which is currently the case as of December 2023](#space-occupied-by-non-payments-vs-payments-on-the-timechain-since-january-2023,), it will displace monetary transactions outside of the network and **degrade its value as an electronic cash**. This is already case as can be seen from the increase in [transaction volume on the Liquid network or the volume increase of the Canadian Purpose ETF BTCC](#spam-doesnt-hinder-adoption), which directly affects the usage from which Bitcoin derives its long term value.
{: style="text-align: justify"}

[Bob Burnett](https://x.com/boomer_btc) discussed this in a [Meme Factory podcast](https://www.youtube.com/live/RT3xPdSdANY?si=bb1YywzJ5xCpE2mL) and explained this position from the point of view of a miner:

> So, like, I find it funny, some people have been critical saying, well, you know, if **you're a miner and you're mining with Ocean and you're not getting every fricking sat in every single block that you're doing a disservice to your investors** or your owners or you're not maximizing economic advantage.  
But if, let's say, let's say there is a mining pool or a mining organization that makes a contribution, let's say, to an organization like Satoshi Action Fund or the Bitcoin Policy Institute.  
**How is that really any different?**  
I mean, that seems like **an investment in the long term benefit of Bitcoin.**   
[...] 
One of the ways I like to phrase it is like, I think if I'm a miner, which I am, right, **I feel I have an obligation to protect the mothership**.  
And, you know, the **mothership is the Bitcoin in the way that permissionless, censorship free**, all these sort of attributes that we know and love.  
Like I have an obligation to protect that. And so if I choose to protect it by **looking at the transaction set and selecting a certain group of transactions that I believe protect the mothership** in the long run and those attributes, then **I feel that is the best economic decision**.

[Giacomo Zucco](https://x.com/giacomozucco?s=20) proposed a [more colorful version of this argument](https://twitter.com/i/status/1741172408919478412).


### There's nothing you can do about it

A common argument presented by spammers and spam enablers is that spam should be forgotten about because nothing can be done about it. This argument is simply wrong. In the past, [spam has been stopped using filters and through the participation of miners](#counterparty). The arguments presented to argue that you shouldn't try to stop spam are divided into two categories:
1. They can simply change a **technical detail of the data injection method and circumvent filters**, if filters is the method chosen to fight spam
2. **Miners are high-time preference greedy mercenaries**
{: style="text-align: justify"}

The second argument was [already addressed and won't be discussed again here](#bitcoin-can-thrive-even-if-miners-are-high-time-preference-greedy-actors).  
Regarding the first one, an important point about it is that it is a **purely technical argument**. However, spamming is not only a technical issue. **Spammers are ready to pay high TX fees to get their spam into blocks mainly because they are hoping to make a profit out of the spam**. The profits made by spammers **rely on a network effect around the standard they adopted to spam**. That is partly why spamming using **extremely inefficient data storage methods** continues to be dominant although more efficient "standards" to store data on-chain have been proposed. Updating default filters s**ends a strong message to signify that certain data injection methods are not desirable** and that **actors who rely on them are using non-desirable methods**. Simply updating default filters in the past has worked, but for reasons unclear, Bitcoin Core developers have refused to consider spam as a significant issue since Taproot and did not take any action at all to update default filters.  
Breaking the network effect of a certain "standard" of spam is critical as **it forces spammers to adopt a new standard** and resets the whole process of **building an eco-system and creating a community around it**. This also sends a strong signal to [external sources of funding that might want to support spammers](https://x.com/PrinceySOV/status/1740821876992344352?s=20) that future investments are at risk of being rejected by the network at any moment.
{: style="text-align: justify"}

There is no other way to fight spam other than **through a cat & mouse game** and there will most likely **never be an absolute solution to spam**. That is because, by nature, **spam will try to camouflage as valid content** in order to waste and misuse shared network resources. The mouse needs to build ecosystems that can generate a profit out of the spam, that is always a costly endeavour that requires funding to build up a network effect around a source of revenue. The cat can easily become better at this game. Developing filters to identify and block new sources of spam is trivial as **spammers will usually have to reveal how to identify spam in order to build marketplaces for example around it**. All the types spam of the 2023 wave use "explorers" to identify and present each type of spam, these software can be used to identify the spam.  
If spammers eventually make spam so efficient that it becomes **indistinguishable from Bitcoin currency transactions**, so much so that it **cannot be identified anymore**, it will most likely won't be considered as spam anymore because of its efficiency. Until then, it is hard to imagine any path or solution other than continuously repealing spam.
{: style="text-align: justify"}

Interestingly, spammers also propose that financial transactions should be updated to "*improve the incentives and infrastructure for the transactions you DO want to see*", namely Bitcoin currency transactions. This **obviously contradicts the narrative discussed here**, as it means that **something can be done**, as long as it is what the spammers want you to do. It is the only way to solve this issue according to them. The changes hinted at by spammers are significant as they would require a soft or hard-fork in order to make the native currency, bitcoins, of the network better compete with spam (which is a nonsense as Bitcoin currency transactions are much more efficient). At the same time, spammers insist that nothing can be done and that a kind of significant update is necessary. It appears that the spammer narrative might be following the steps described below:
1. **Demoralization**: Bitcoin is broken, maxis are stupid, sh*tcoins are better and will leave bitcoin behind. Bitcoiners are all retarded losers and they don't understand all the amazing tech (like bugs that can be used to inject non-optimized data on-chain).
2. **Destabilization**: We **need** NFTs, we **need** rollups, we **need** to activate a lot of things on the timechain to compete with spam.
3. **Fees are very high**: Bitcoin doesn't work. Hodling doesn't work. You need to upgrade Bitcoin to be able to answer the market demand for other things as shown by the higher fees.
4. We need a **hard fork**.
{: style="text-align: justify"}

### Fighting spam will break Bitcoin

### Making transactions more efficient on L1 will solve spam

### High fees will solve spam

### Everything is good for Bitcoin

This statement would mean that Bitcoin is perfect and has no flaws or surface attack at all. This will most likely always be wrong. The reason why everything is good for Bitcoin is that Bitcoin can adapt, thanks to its nodes mainly, to attacks and defend itself against them. But this requires an immune reaction that is currently considered as useless.  
Nothing is indestructible, nothing is perfect. Bitcoin need participants to actively defend it and address new attack vectors. That does not mean implementing soft-forks to defend against everything. Mempool policies, relay policies, long-term miner incentives, social campaigns, ... are all part of the toolkit that needs to be gradually deployed to defend the network.
{: style="text-align: justify"}


## What can you do about it?

A more detailed version of these instructions [can be found here](/install).

### As a noderunner

* Use [Bitcoin Knots](https://github.com/bitcoinknots/bitcoin) 25.1 (All spam filters are up to date)​​​​​​​
* Set the following configuration options: `-permitbaremultisig=0`, `-datacarrier=0` (if you are using knots 25.1 or later)
* Keep asking node software providers (their telegrams, twitters, nostrs) to introduce GUI options for filtering [Jester] - show there is demand.

#### Running a node on a Raspberry Pi?

Don't forget that if you don't even use your node to broadcast your transactions and check the state of the chain or TXs of interest to you on-chain, your node plays no role at all in the network.  
It is true though that if it's a full node, it could at least help someone synchronize their own node at some point in the future, which is the reason why it is important to keep the ability to run nodes affordable for most users.
{: style="text-align: justify"}

* If you're using an Umbrel distribution to run your node, you can install a version of Bitcoin Knots which will filter the inscription related spam. You can do so here with an alternative [app store](https://github.com/Retropex/Bitcoin-store).
  * [Detailed instructions to install or update your Umbrel node are provided here](/install)
{: style="text-align: justify"}


### As a miner

* Point your hashrate to [Ocean](https://ocean.xyz/getstarted) ("ocean" or "core+antispam" block template)​​​​​​​

### As a developer

* PR for changed defaults ([inscription](https://github.com/bitcoin/bitcoin/pull/28408) or [baremultisig](https://github.com/bitcoin/bitcoin/pull/28217))

### As a pleb

* Be vocal about your concerns. Remember that discussions are not always there to persuade the detractor, but to form an opinion of observers. Your voice **is** the market force.


## A brief history of spam in the Bitcoin network

### Noteworthy cases of massive broadcasts of non-payment TXs

#### BitDNS

In September 2010, a proposal was made on the BitcoinTalk forums about a DNS protocol that would rely on Bitcoin.
A quick description of this project is provided here from the [bitcoin.it wiki](https://en.bitcoin.it/wiki/BitDNS):

> Bitdns was a project with the goal to extend Bitcoin's technology to a domain name service, expanding the software to support transactions for registering, updating, and transferring domains. The project eventually became an altchain with its own altcoin, known as [Namecoin](https://www.namecoin.org/).

![Satoshi's comments about BitDNS](/assets/satoshi_bitdns.png){: width="650" }{:.centered}

#### Counterparty

See https://blog.bitmex.com/dapps-or-only-bitcoin-transactions-the-2014-debate/.

#### SatoshiDice

## Articles and content about the issue

* [Descriptivists vs Prescriptivists, by JesterHodl](https://jesterhodl.com/p/c5515a25-ea04-42e1-bad2-06bd3dccea96/)
* [SPAMBUSTERS - Bitcoin Anti-Spam Initiative Hub, by @@GhostOfPashka](https://spambusters.notion.site/spambusters/SPAMBUSTERS-8f63364214204dc2b258468bd6a2a0c8)

## License and acknowledgement

* MrGnome for the rigorous review
* [@leo_haf](https://x.com/leo_haf) for his direct contributions to this page

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[WTF happened in February 2023](http://wtfhappenedinfeb2023.com/) by [@piratebiscuit](https://twitter.com/PirateBiscuit) is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)