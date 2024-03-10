---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
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
  * [Making transactions more efficient on L1 will solve spam](#making-transactions-more-efficient-on-l1-will-solve-spam)
  * [High fees will solve spam](#high-fees-will-solve-spam)
  * [Everything is good for Bitcoin](#everything-is-good-for-bitcoin)
* [What can you do about it](#what-can-you-do-about-it)
  * [Detailed installation instructions](/install)
* [A brief history of spam in the Bitcoin network](#a-brief-history-of-spam-in-the-bitcoin-network)
* [Articles and content about the issue](#articles-and-content-about-the-issue)

### Note

Some may not already know this but there has always been spam policy filters running on Bitcoin, even since the very first versions of Bitcoin software. [These filters have always been improved over time, except since the Taproot update](https://en.bitcoin.it/wiki/Spam_transactions).  
If you are already convinced of why you should stop spam, you can go directly to the [installation instructions page](/install.markdown).

## Stats about non-payment transactions

### mempool.space's transactions by fee rate since 2020

![mempool.space's transactions by fee rate since 2020](/assets/mempool_incoming.png){: width="850" }{:.centered}

*A clear increase in transactions entering mempool.space can be seen starting February 2023. Until today, such increases are usually only experienced by the network during the so-called "bull runs", making this one a noticeable anomaly. [mempool.space](https://mempool.space/graphs/mempool#3y)*

* Wanna see what a spam-free mempool looks like? [Take a look at this one](https://clean-mempool.bitcoinbarcelona.xyz/), hosted by [@oomahq](https://twitter.com/oomahq)

### space occupied by non-payments VS payments on the timechain since January 2023

<iframe src="https://dune.com/embeds/3307069/5538577/" width="100%" height="280" style="display:block; margin: 0 auto;"></iframe>

*Soon after the beginning of the 2023 spam wave, non-financial transactions have been occupying about 50% of the available blockspace, except during short breaks. This chart does not consider data storage transactions that use bare multisig. [BTC spam analysis](https://dune.com/piratebiscuit/btc-spam-analysis)*

### fees paid by by non-payments VS payments on the timechain since January 2023

<iframe src="https://dune.com/embeds/3307069/5538533/" width="100%" height="280" style="display:block; margin: 0 auto;"></iframe>

*Although non-payment related transactions occupy about 50% of each block, the majority of the fees paid in each block are still coming from payments. This data shows how non-payment transactions (spam) are displacing payment transactions, this is forcing non-payment transactions to pay a much higher fee to be included in blocks. [BTC spam analysis](https://dune.com/piratebiscuit/btc-spam-analysis)*

### size of UTXO since January 2023

![Evolution of UTXO set size](/assets/utxo_set.png){: width="100%" }{:.centered}

*The size of the UTXO set, number of unspent UTXO outputs, has seen a drastic increase since the beginning of the 2023 spam wave. This is partially due to Inscriptions/BRC-20 but mainly due to spam that relies on bare-multisig data to store data on the timechain. [UTXO set size](https://statoshi.info/d/000000009/unspent-transaction-output-set?orgId=1&refresh=5s&from=now-2y&to=now)*

## Characteristics of spam

During waves of spam, spam is always defended by spam supporters/defenders by claiming that **spam is subjective** and that what is spam for you might not be spam for someone else, as they might have a use for it. This section aims at addressing this mischaracterization.
{: style="text-align: justify"}

Spam opponents often tend to define or characterize spam by defining it based on the **purpose of the network (*Peer-to-peer Electronic Cash system*)**, although there is truth in this characterization, it is an argument that can be hard to defend as the purpose of the network is a concept that can be seen as **subjective**. However, spam can also **be recognized by anyone**, even intellectually honest spammers, thanks to **two main characteristics**:
{: style="text-align: justify"}

1. **Wastefulness of the shared network resources**
2. **Obvious misuse of Bitcoin's functions for a malicious purpose**  
   In addition, these transactions are also often sent in **large volumes**.

Transactions with **no practical value or purpose**, such as those submitted by supporters of big blocks during the Blocksize wars for example, are characterized by wastefulness as their output was too small to spend. Other examples of wastefulness are transactions that are sent back and forth repeatedly to the same addresses, transactions which carry no state information, transactions purposelessly split into hundreds of tiny outputs that are then recombined in the next transaction, etc...
These transactions are malicious partly because they are wasteful, creating a backlog in the mempool that **drives up transaction costs unnecessarily**. The 2023 wave of spam is especially egregious because it involves **storing obscenely large and unoptimized state data using methods that abuse several of Bitcoin's functions**, such as the segregated witness script discount, `OP_IF` `OP_FALSE` codes, and bare multi-signatures. 
{: style="text-align: justify"}

> "_(...) There's a reasonable argument that this sort of data is toxic to the network, since even though "the market is willing to bear" the price of scares blockspace, if people were storing NFTs and other crap on the chain, then the Bitcoin fee market would become entangled with random pump&dump markets, undermining legitimate use cases and potentially preventing new technology like LN from gaining a strong foothold. (...)_" - Andrew Poelstra, 2023 January 27, [Bitcoin-dev mailing list](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-January/021372.html)

These transactions can be classified as spam due to their ignorance or malice, they could also occur off-chain relatively easily through *NFTs* with reference hashes or *BRC-20* tokens with reference hashes much more efficiently and this was already proposed several times. Functionally, the result would be the same as it would allow users of this "*standard*" to verify the data **without overwhelming the chain**. *BRC-20* tokens are **not optimized at all** for example and use clear *JSON* (!) instead of *HEX* or *base64* encoding, demonstrating a **complete disregard for the shared resource of the timechain**. This failure is particularly concerning since they account for more than 50% of the average block's size, [as shown in the BTC spam analysis blocksize graph](#space-occupied-by-non-payments-vs-payments-on-the-timechain-since-january-2023) despite being avoidable with a more responsible usage. 
{: style="text-align: justify"}

> "_(...) people really don't like this [NFT, Ordinals] and I apologize because they are kind of my fault that all that script limit relaxation I was talking about for TapRoot - that's why we can do it. (...) relaxing this script limits (...) makes one particular form of data stuffing possible._" - Andrew Poelstra, 2023 August 28 , [Stephan Livera Podcast episode 507](https://youtu.be/PrUr2zwff_0?t=3040).

The two characteristics presented above are a simple way to recognize spam that most likely violates the purpose of the network and the desired behavior, and Bitcoin actually supports other protocols that submit non-payment transactions which are not considered as spam by most participants. A good example is the [OpentimeStamps protocol](https://opentimestamps.org/) (there are also many bad examples), which uses Bitcoin for blockchain timestamping and is not considered as spam by most participants in the network as it generally does not present the two characteristics presented above: it uses shared resources efficiently and does not misuse Bitcoin's functions.
{: style="text-align: justify"}

## Common narratives around spam

* [Mempool policy is censorship](#mempool-policy-is-censorship)
* [A valid transaction is a valid transaction](#a-valid-transaction-is-a-valid-transaction)
* [The fees were going to be high anyways](#the-fees-were-going-to-be-high-anyways)
* [Satoshi inscribed on-chain so I should be able to do it too](#satoshi-inscribed-on-chain-so-i-should-be-able-to-do-it-too)
* [Bitcoin can thrive even if miners are high-time preference greedy actors](#bitcoin-can-thrive-even-if-miners-are-high-time-preference-greedy-actors)
* [There's nothing you can do about it](#theres-nothing-you-can-do-about-it)
* [Making transactions more efficient on L1 will solve spam](#making-transactions-more-efficient-on-l1-will-solve-spam)
* [High fees will solve spam](#high-fees-will-solve-spam)
* [Everything is good for Bitcoin](#everything-is-good-for-bitcoin)

### Mempool policy is censorship

First of all, it's important to understand that each node runs there own sovereign mempool, there is no such thing as a single mempool, although we often refer to *the* mempool.  
The statement "*mempool policy is censorship*" implies that any policy applied to your mempool, which temporarily stores unconfirmed transactions in your Bitcoin node before they're added to blocks, is a form of censorship. However, this argument is wrong because **mempool and relay are not forced on you by anyone and are not enforced over the whole network under threat**; instead, they only allow you to **take control over your own mempool** and relay policies to prioritize or refuse to store or relay certain types of transactions. This is the **opposite of censorship**, this is what sovereignty means. This set of rules can be defined through your `bitcoin.conf` file to describe **what a valid transaction is from the point of view of your own mempool**.
{: style="text-align: justify"}

**Policy is everything that is not consensus**. Modifying your mempool and relay policies **does not go against consensus** as you're only affecting what happens before transactions are included in a block. Your node will still receive, record and relay all blocks that are mined by the network and your node will remain within consensus.
{: style="text-align: justify"}

Mempool policies are necessary for ensuring **efficient and effective usage of the limited resources in the Bitcoin network** during periods of high traffic or congestion while also prioritizing critical transaction needs like payments. Nodes are responsible for enforcing their belief of the purpose of the network, **these policies are your voice on the network**.
{: style="text-align: justify"}

**Censorship is defined as the suppression of speech, public communication, or other information, and is enforced by a central authority that will rely on violence or punishment to force everyone to delete and suppress said information**. In the case of mempool and relay policies, since each actor is free to set their own rules without being forced to apply a specific set of rules (default rules are often kept by most users but that is a different subject), it is thus obvious that these policies are the opposite of censorship.
{: style="text-align: justify"}

In the case of spam, **refusing to store or relay it with your node can be defined as resource management or moderation, not censorship**. Refusing to relay information that is not aligned with that purpose is a form of moderation, the same way an academic journal about physics will refuse a publication submitted about psychology. Publishing it would otherwise inconvenience most of the readers of that journal who are subscribing and reading that journal because they are interested in advancements in physics. **The main difference in the case of Bitcoin is that the moderation and its enforcement is decentralized over all nodes through mempool and relay policies**.  
In addition, other users are not entitled to your node's resources. If you choose to not store or relay some transactions with your node, that is well within your property rights.
{: style="text-align: justify"}

**Running a node is an active process**. You might have been told that if "*you're running a node, you're good*", that is just the first step. Noderunners must remain ever vigilant and ready to act in case of attack. This is effectively what makes Bitcoin anti-fragile. 
{: style="text-align: justify"}

### A valid transaction is a valid transaction

Spam defenders will **often point to the fact that a spam transaction is valid**, in the eyes of the protocol, because it pays the required fee and respects the structure required by the protocol. Even though the transactor paid a fee, it does not mean that the transaction cannot be a spam transaction. **By definition, spam will always be a valid transaction**, it would otherwise not be relayed through mempools and won't be included in a block. That does not mean that some valid transactions are not violating the two definitions [previously defined](#caracteristics-of-spam), meaning that the transaction can still waste the shared resources of the network and/or abuse one of Bitcoin's functions for a malicious intent.
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

1. High fees are not the issue when it comes to spam, **the issue is about the wastefulness and abuse of the network's functions** that cause harm to the network as a whole.
2. **The reason why fees are high is obviously important**. The argument that fees were always going to be high assumes that there will be a strong demand for Bitcoin's properties. When spam is the reason why there are high fees on the network, that is obviously not the case. The high fees are not what matters, it's the adoption and demand for Bitcoin's properties that causes them that's important.
   {: style="text-align: justify"}

This second point can easily be understood with a simple thought experiment: 

* Let's assume that a nation-state level attacker funds an attack where they fill blocks with transactions sent back to themselves, consistently paying fees high enough to ensure that their transactions will be in the next block and stopping anyone else from transacting.
* In this case, the fees will necessarily become high, but this situation will stop anyone else from transacting, stopping any real demand for Bitcoin's properties. The fees are high, yes, but would you still support a mitigation scheme to limit the reach of such an attack?
  {: style="text-align: justify"}

### Satoshi inscribed on-chain so I should be able to do it too

A common argument presented by inscription supporters is that Satoshi started the trends of injecting data in the timechain with the Genesis block message. This **argument is simply wrong since Satoshi did not subvert ([2nd characteristic of spam](#characteristics-of-spam)) the protocol to "inscribe" data**, they simply used space already available in the Coinbase data that is designed to allow miners to broadcast arbitrary data when a block is found. **It's always been part of Bitcoin and didn't introduce any wastefulness.**  
[More information here.](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch08.html)
{: style="text-align: justify"}

![Mechanism used to inscribe the Genesis block message by Satoshi](/assets/genesis_coinbase_data.jpeg){: width="850" }{:.centered}

In addition, this argument does not really matter as Satoshi's initial actions should not be blindly followed and used to justify your actions. Everybody can make mistakes, and no one can plan for all future scenarios, especially in a complex system such as Bitcoin that is highly unpredictable.
{: style="text-align: justify"}

This event, instead of being taken as a justification that Bitcoin should be used as a perpetual highly-replicated database, should be **considered as a celebration of the right ways you can post data on chain in a responsible way** as it uses an existing method to store arbitrary data by miners that doesn't obviously circumvent a Bitcoin function.  
Another way for Satoshi to publish his message would have been to use the `OP_RETURN` code as it would signal to the network that the data included in the `OP_RETURN` can safely be discarded outside of the UTXO set. Participants have been and are using `OP_RETURN` codes today to store short messages on the timechain and these are not considered as spam. If you're curious, you can explore these messages on [opreturnbot.com](https://opreturnbot.com/). Learn more from the [Bitcoin Explained Podcast](https://youtu.be/NYj80OGlWGg).  
It's still important to highlight that when the `OP_RETURN` [code was released](https://bitcoin.org/en/release/v0.9.0#downgrading-warnings), it was clearly specified that *"Storing arbitrary data in the blockchain is still a bad idea; it is less costly and far more efficient to store non-currency data elsewhere."*. Another extremely important point is that `OP_RETURN` data is still stored on nodes forever, that is the reason why they are limited at 80 bytes, but `OP_RETURN` data does not benefit from the segregated witness discount.  
Inscriptions that are omni-present in the 2023 wave of spam basically have the same impact on the network as `OP_RETURN` data except that they benefit from the segregated witness discount and manage to go above the 80 bytes limit using the `OP_IF` `OP_FALSE` injection scheme.
{: style="text-align: justify"}

**What's next?**

* Want to take control over your mempool's policies? You can easily do that by modifying your bitcoin.conf file. You can use the following tool, provided by [Jameson Lopp](https://jlopp.github.io/bitcoin-core-config-generator/) to easily create a bitcoin.conf file that applies the mempool and relay policies you'd like to apply to your node.
* [More information about mempool policy and its role](https://bitcoin.stackexchange.com/questions/120269/what-is-mempool-policy)

### Bitcoin can thrive even if miners are high-time preference greedy actors

The popular notion that **miners must be inherently selfish and solely driven by profit** has become a pervasive narrative within the Bitcoin community. The origin of this mostly false narrative is unknown and unclear. Originally, the Bitcoin whitepaper only mentioned the term "greed" once, and that is in the case of an attacker. This belief is **not necessarily grounded in reality or based on sound reasoning**. In fact, it overlooks two crucial points: 

1. Firstly, that miners **need Bitcoin to remain valuable and profitable over the long term** in order to recoup their investments and to have profitable businesses; 
2. Secondly, what **makes Bitcoin valuable is that it's an electronic cash system with unique and distinctive properties**, which can be undermined by excessive spam.
   {: style="text-align: justify"}

Because of the two previous points, it is evident that miners must be **aligned with the long-term success of the Bitcoin network**. In a sense, this does not mean that miners cannot run on high-time preference greed only, but that miners must care about low-time preference greed as well as high-time greed, and **play a role in the network that balances the two**. This directly contradicts the narrative that the system must run with high-time preference only greedy miners.
{: style="text-align: justify"}

Spam being by definition wasteful and often serving malicious intents not only affects the efficiency of the Bitcoin system, which is already quite limited due to the blocksize, in addition to **affecting its main usage as an electronic cash, which is where it derives its value from**. If spam starts dominating the content of blocks, [which is currently the case as of December 2023](#space-occupied-by-non-payments-vs-payments-on-the-timechain-since-january-2023,), it will displace monetary transactions outside of the network and **degrade its value as an electronic cash**. This is already case as can be seen from the increase in [transaction volume on the Liquid network or the volume increase of the Canadian Purpose ETF BTCC](#spam-doesnt-hinder-adoption), which directly affects the usage from which Bitcoin derives its long term value.
{: style="text-align: justify"}

[Bob Burnett](https://x.com/boomer_btc) discussed this in a [Meme Factory podcast](https://www.youtube.com/live/RT3xPdSdANY?si=bb1YywzJ5xCpE2mL) and explained this position from the point of view of a miner:

> So, like, I find it funny, some people have been critical saying, well, you know, if **you're a miner and you're mining with Ocean and you're not getting every fricking sat in every single block that you're doing a disservice to your investors** or your owners or you're not maximizing economic advantage.  
> But if, let's say, let's say there is a mining pool or a mining organization that makes a contribution, let's say, to an organization like Satoshi Action Fund or the Bitcoin Policy Institute.  
> **How is that really any different?**  
> I mean, that seems like **an investment in the long term benefit of Bitcoin.**   
> [...] 
> One of the ways I like to phrase it is like, I think if I'm a miner, which I am, right, **I feel I have an obligation to protect the mothership**.  
> And, you know, the **mothership is the Bitcoin in the way that permissionless, censorship free**, all these sort of attributes that we know and love.  
> Like I have an obligation to protect that. And so if I choose to protect it by **looking at the transaction set and selecting a certain group of transactions that I believe protect the mothership** in the long run and those attributes, then **I feel that is the best economic decision**.

[Giacomo Zucco](https://x.com/giacomozucco?s=20) proposed a [more colorful version of this argument](https://twitter.com/i/status/1741172408919478412).

### There's nothing you can do about it

A common argument presented by spammers and spam enablers is that spam should be forgotten about because nothing can be done about it. This argument is simply wrong. In the past, [spam has been stopped using filters and through the participation of miners](#counterparty). The arguments presented to argue that you shouldn't try to stop spam are divided into two categories:

1. They can simply change a **technical detail of the data injection method and circumvent filters**, if filters are the method chosen to fight spam
2. **Miners are high-time preference greedy mercenaries**
   {: style="text-align: justify"}

The second argument was [already addressed and won't be discussed again here](#bitcoin-can-thrive-even-if-miners-are-high-time-preference-greedy-actors).  
Regarding the first one, an important point about it is that it is a **purely technical argument**. However, spamming is not only a technical issue. **Spammers are ready to pay high TX fees to get their spam into blocks mainly because they are hoping to make a profit out of the spam**. The profits made by spammers **rely on a network effect around the standard they adopted to spam**. That is partly why spamming using **extremely inefficient data storage methods** continues to be dominant although more efficient "standards" to store data on-chain have been proposed. Updating default filters **sends a strong message to signify that certain data injection methods are not desirable** and that **actors who rely on them are using non-desirable methods**. Simply updating default filters in the past has worked, but for reasons unclear, Bitcoin Core developers have refused to consider spam as a significant issue since Taproot and did not take any action at all to update default filters.  
Breaking the network effect of a certain "standard" of spam is critical as **it forces spammers to adopt a new standard** and resets the whole process of **building an eco-system and creating a community around it**. This also sends a strong signal to [external sources of funding that might want to support spammers](https://x.com/PrinceySOV/status/1740821876992344352?s=20) that future investments are at risk of being rejected by the network at any moment.
{: style="text-align: justify"}

There is no other way to fight spam other than **through a cat & mouse game** and there will most likely **never be an absolute solution to spam**. That is because, by nature, **spam will try to camouflage as valid content** in order to waste and misuse shared network resources. The mouse needs to build ecosystems that can generate a profit out of the spam, that is always a costly endeavor that requires funding to build up a network effect around a source of revenue. The cat can easily become better at this game. Developing filters to identify and block new sources of spam is trivial as **spammers will usually have to reveal how to identify spam in order to build marketplaces for example around it**. All the types of spam of the 2023 wave use "explorers" to identify and present each type of spam, these software can be used to identify the spam.  
If spammers eventually make spam so efficient that it becomes **indistinguishable from Bitcoin currency transactions**, so much so that it **cannot be identified anymore**, it will most likely won't be considered as spam anymore because of its efficiency. Until then, it is hard to imagine any path or solution other than continuously repealing spam.
{: style="text-align: justify"}

Interestingly, spammers also propose that financial transactions should be updated to "*improve the incentives and infrastructure for the transactions you DO want to see*", namely Bitcoin currency transactions. This **obviously contradicts the narrative discussed here**, as it means that **something can be done**, as long as it is what the spammers want you to do. It is the only way to solve this issue according to them. The changes hinted at by spammers are significant as they would require a soft or hard-fork in order to make the native currency, bitcoins, of the network better compete with spam (which is a nonsense as Bitcoin currency transactions are much more efficient). At the same time, spammers insist that nothing can be done and that a kind of significant update is necessary. 
{: style="text-align: justify"}

Watch [@LukeDashjr](https://twitter.com/LukeDashjr)'s interview during which he explains why although spam filters won't definitely stop spam in one day they are a necessary first step in the social consensus to eventually do so:

<div align="center">
<iframe width="480" height="270" src="https://www.youtube.com/embed/OpbDWCwJ_5Y?si=9Mp4feEGcgCCRRCU&amp;start=510" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share display:block;" allowfullscreen></iframe>
</div>

#### The 100 sats TX challenge

[Francis Pouliot](https://twitter.com/francispouliot) proposed a simple challenge to prove that **some things can be done and that one of those things is simply introducing filters**. In a tweet, he challenged someone claiming that "*spam filters don't work*", meaning that mempool policies don't work - see [Mempool policy is censorship](#mempool-policy-is-censorship), to **send 100 sats to a specific address**.  

<div align="center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Please send 100 sats to this address<br><br>bc1qc3qlmus3udzwrfxtkja8upe33jvlydwy2cjr96</p>&mdash; FRANCIS - BULLBITCOIN.COM (@francispouliot_) <a href="https://twitter.com/francispouliot_/status/1743704660123308387?ref_src=twsrc%5Etfw">January 6, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

This challenge aims at showing that filters do work because Bitcoin Core currently has a default dust filter that makes it very hard to get a 100 sats transaction relayed.
{: style="text-align: justify"}

> Please send 100 sats to this address
> bc1qc3qlmus3udzwrfxtkja8upe33jvlydwy2cjr96

One of the participants to the conversation who accepted to take on the challenge has explicitly stated that they submitted such a transaction to a miner, allegedly Luxor, to mine this transaction as they know it won't be relayed by the network because of mempool policies. This action simply proves that mempool filters do work as they had to collude with a miner to get their transaction in a block, which didn't happen yet more than 4 hours after the challenge started because they need to wait for the miner they colluded with to find a block. This also means that the miner will have to continuously include this 100 sats transaction in their templates and that chances of this transaction making it through are as high as the hashrate share represented by the pool of that miner. This will of course mean that if transactions ready to pay a higher fee present themselves meanwhile, they might have to reject them to keep the 100 sats transaction if the block is already full. One of the participants who tried to do so actually explained that they [tried sending a 100 sats transaction to a larger pool, ViaBTC, which would maybe get it through faster, but that it got rejected](https://x.com/benthecarman/status/1743761650430181581?s=20) - most likely because of mempool policy (filters.)  
The transaction will eventually make it through, but it required colluding with a miner that's willing to take it Out of Band, outside of the mempool, and that strongly limited the reach of the transaction since only a single pool is working on it which relegates it to the next block found by that pool. Currently, spam is mined by all miners which makes it present in blocks.  
{: style="text-align: justify"}

<div align="center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">lmao they are literally proving how effective spam filters are in real time<br><br>instead of confirming in 10 minutes, my math shows there&#39;s a 50% chance of the spam transactions getting mined in the next 6.5 hours. And it cost more.<br><br>Huge L for spam apologists, down bad</p>— Asher Hopp (@AsherHopp) <a href="https://twitter.com/AsherHopp/status/1743765222987534696?ref_src=twsrc%5Etfw">January 6, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

Miners can try to put whatever they want in blocks, the only workaround nodes have against that is to reject a valid block (meaning that it has a valid Proof-of-Work that answers the Difficulty condition) that contains some transactions or data proposed by a miner.  
{: style="text-align: justify"}

### Making transactions more efficient on L1 will solve spam

The argument in support of **UTXO aggregation** that suggests it can mitigate spam on the Bitcoin network is a compelling one. **Covenants**, which are a **type of script used to share UTXOs between users without requiring custodial services**, would make **monetary transactions more cost-effective** and thus **better equipped to compete against spam**. However, an important detail that needs to be acknowledged is that **covenants reduce the amount of fees miners receive**, which goes **against their economic incentives**. Lightning, a type of scaling solution, also falls into this category as it reduces miner fee income.
{: style="text-align: justify"}

This argument presents an **apparent contradiction with the idea that spam filters are not economically feasible** because they too go against miner incentives. This raises an interesting question: **why would miners accept Covenants or Lightning but refuse to implement spam filters?**  
The answer lies in the fact that spam filters, like CTV and Lightning, ultimately improve network efficiency, which will have a positive economic impact on miners as it increases the overall value of the Bitcoin network. Mining is not just about earning fees; it also involves securing the blockchain through mining work. By improving network efficiency, these solutions make it more profitable for miners to secure the chain and receive block rewards while reducing their dependence on transaction fees. As a result, they become economically beneficial for all parties involved - users, merchants, miners, and Bitcoin as a whole.
{: style="text-align: justify"}

> "_The best scaling solution is a chain without spam._" - Greg Tonoski, 2024 January 30, [Twitter](https://twitter.com/GregTonoski/status/1752388066063307183).

#### "If you needed Vaults so bad, you would already use some."

Another trend emerging with the preponderance of spam is its growing use as an excuse for forcing fast adoption of scaling solutions. While some may argue that immediate action against spam attacks are necessary in order to mitigate challenges or other environmental considerations - this argument falls short given how such artificial spam scenarios are not necessarily representative of current real-world usage patterns within the Bitcoin blockchain ledger system for Bitcoin, a much more rational approach would be to address the spam directly first.
{: style="text-align: justify"}

Some supporters of spam and scaling solutions have even gone as far as explaining that they intend to put pressure on Bitcoin through artificially generating large amounts of spams in order to push for fast adoption of many scaling solutions - this development presents a serious danger given how such artificial spam scenarios could potentially force developers into quickly accepting a scaling solution, which might not be fully ready, tested or that might introduce new weaknesses, efficiencies or even attack vectors. It is therefore essential to avoid such situations by ensuring an appropriate and measured response towards addressing any potential spam challenges in a responsible manner rather than rushing into quickly accepting many scaling solutions under artificial spams attack scenarios.  
**Scaling solutions are important and critical for the future development of Bitcoin, however, that does not mean that Bitcoiner should be forced into accepting all and any scaling solutions because of spam**.
{: style="text-align: justify"}

The following thread by [@KLoaec](https://x.com/KLoaec/status/1747958496883003800?s=20), [Wizard Sardine's](https://wizardsardine.com/) CEO - the developers of the super interesting [Liana wallet](https://wizardsardine.com/liana/) that already offers time-locks and recovery options akin to vaults, has an underrated thread about this subject:
{: style="text-align: justify"}

<div align="center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">If you needed Vaults so bad, you would already use some.<br>Sure, UX without covenants is a massive pain, but if it&#39;s enough to deter 100% of people and companies, maybe it&#39;s not that &quot;needed&quot; after all.<br>Don&#39;t get me wrong, as a builder on later 1, I absolutely want covenants. 1/5</p>&mdash; Kevin Loaec 🧙‍♂️🐟 (@KLoaec) <a href="https://twitter.com/KLoaec/status/1747958496883003800?ref_src=twsrc%5Etfw">January 18, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

### High fees will solve spam

False. High Bitcoin fees don't stop spammers who have been the top payer for a year already. They increase their profit from clogging the Bitcoin network by exploitation of Segwit mispricing and other vulnerabilities that put genuine, monetary transactions at a disadvantage.

While it is true that spammers make short-lived attempts to profit, the history shows that they keep repeating them. Their payoff depends on collection of money from gullible or over-excited people and therefore is insensitive to level of Bitcoin transaction fee. The playbook looks almost the same every time:
1. Raise funds for the operation (typically from so-called venture capital),
2. Create something to gamble with (e.g. "collectibles", NFTs, derivatives). Advertise it, leverage industry-specific media, brands, influential figures etc. Claiming that is interesting art or technology (even better if somehow connected with Bitcoin),
3. Collect money (in excess of Bitcoin transaction fees) from gullible or over-excited people duped into "investing" in faked art or technology (so-called bag holders).
4. Repeat.

Cost of Bitcoin transaction fees does not impact profitability because proceeds are much larger. Victims transfer money in amounts that exceed the fees and ad campaigns. Spammers never spam without pushing narratives that provide excuses, e.g. "those cats in JPEGs are art". Spamming with random data would not be profitable.

In consequence of high fees Bitcoin is less decentralized. There are more and more "uneconomical UTXOs" with amounts that are not sufficient to cover the spam-inflated fee to transact. They are effectively removed from circulation. Their owners can't participate in the network while a few privileged ones gain exclusive access (power) what adversely affects decentralization. Segwit mispricing and other vulnerabilities make it cheaper to keep the barrier and concentrate power in fewer and fewer hands. They may be exploited (and fees remain high) as long as the struggle for power lasts.

### Everything is good for Bitcoin

This statement would mean that **Bitcoin is perfect and has no flaws or surface attack at all**. This will most likely **always be wrong**. The reason why everything is good for Bitcoin is that **Bitcoin can adapt**, thanks to its nodes allegedly, against attacks and defend itself that way. But this **requires an immune reaction that is currently considered as useless**.  
Nothing is indestructible, nothing is perfect. Bitcoin needs participants to actively defend it and address new attack vectors. That does not mean implementing soft-forks to defend against everything. Mempool policies, relay policies, long-term miner incentives, social campaigns, ... are all part of the toolkit that needs to be gradually deployed to defend the network. This toolkit can become increasingly more aggressive until the ultimate "*defense*", in the case of a miner concerted attack for example, where nodes would migrate to a new Proof-of-Work algorithm and reject SHA256 mined blocks for example.
{: style="text-align: justify"}

##

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

* Be vocal about your concerns, join discussions<sup>[[1](https://delvingbitcoin.org/t/bug-spammers-get-bitcoin-blockspace-at-discounted-price-lets-fix-it/327)] </sup><sup>,[[2](https://github.com/bitcoin/bitcoin/issues/29187)] </sup><sup>[[3](https://bitcoin.stackexchange.com/questions/121734/why-cant-nodes-have-the-relay-option-to-disallow-certain-transaction-types)]</sup>, ask questions, share knowledge. Remember that discussions are not always there to persuade the detractor, but to form an opinion of observers. Your voice **is** the market force.

## A brief history of spam in the Bitcoin network

### Free relays > Whitelists > Free relays

* It appears that Satoshi initially wanted to develop and allow for many types of TXs on Bitcoin
* However, he was at some point convinced by Gavin Andresen that was a slippery slope and opened the doors to DDos attacks
* Satoshi then moved back to a whitelist model that only allowed certain types of OP_CODES and TXs on Bitcoin
* Under the pressure of some miners who decided to mine any type of TXs, the whitelist model was then abandoned again

<div align="center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Admittedly, that was largely my fault.<br><br>In 2011, I started the &quot;Free transaction relay policy&quot;/network removing most (all?) policy restrictions.<br>Eligius also would mine any transaction indiscriminately.</p>&mdash; Luke Dashjr (@LukeDashjr) <a href="https://twitter.com/LukeDashjr/status/1743380615171547197?ref_src=twsrc%5Etfw">January 5, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

### The rise of Out Of Band transactions

The 22nd of February, [Marathon](https://x.com/MarathonDH?s=20), a US based miner that holds around 25 exahash (March 2024) officially launched a service designed to allow anyone to directly submit transactions to them, completely circumventing mempools and relay policies.  
{: style="text-align: justify"}

<div align="center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Introducing Slipstream: a direct transaction submission service on <a href="https://twitter.com/hashtag/Bitcoin?src=hash&amp;ref_src=twsrc%5Etfw">#Bitcoin</a>, powered by Marathon. <a href="https://t.co/nGWuJukxij">pic.twitter.com/nGWuJukxij</a></p>&mdash; Marathon Digital Holdings (NASDAQ: MARA) (@MarathonDH) <a href="https://twitter.com/MarathonDH/status/1760760058281910309?ref_src=twsrc%5Etfw">February 22, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

This service mainly targets Non Standard transactions. For example, it was used to mine block (832,849)[https://mempool.space/block/00000000000000000000e37d10aa5a5ece8dba4a20f011280ae3d1880414ff7e] which is th biggest block to date (3.99 MB). It only contains 7 transactions, among which a single one (an Inscription) occupies most of the block.
{: style="text-align: justify"}

![Block 832,849](/assets/marathon_block.png){: width="100%" }{:.centered}

A block containing 3097 transactions shared to the mempool was expected instead of this one.

### Noteworthy cases of massive broadcasts of non-payment TXs

#### BitDNS

In September 2010, a proposal was made on the BitcoinTalk forums about a DNS protocol that would rely on Bitcoin.
A quick description of this project is provided here from the [bitcoin.it wiki](https://en.bitcoin.it/wiki/BitDNS):

> Bitdns was a project with the goal to extend Bitcoin's technology to a domain name service, expanding the software to support transactions for registering, updating, and transferring domains. The project eventually became an altchain with its own altcoin, known as [Namecoin](https://www.namecoin.org/).

![Satoshi's comments about BitDNS](/assets/satoshi_bitdns.png){: width="650" }{:.centered}

#### Counterparty

See [The OP_Return Wars of 2014 – Dapps Vs Bitcoin Transactions](https://blog.bitmex.com/dapps-or-only-bitcoin-transactions-the-2014-debate/) and [Developers Battle Over Bitcoin Block Chain](https://www.reddit.com/r/Bitcoin/comments/21b4pm/developers_battle_over_bitcoin_block_chain/).

#### SatoshiDice

[Do you think SatoshiDice is blockchain spam? Drop their TX's - Solution inside](https://bitcointalk.org/index.php?topic=150405.0). SatoshiDice spam in mempools was the primary concern. Unlike other types of spam, SatoshiDice didn't append arbitrary data to transactions recorded in the main chain. 

#### Omni

[Dominating OP Returns: The Impact of Omni and Veriblock on Bitcoin]([url](https://www.researchgate.net/publication/346962427_Dominating_OP_Returns_The_Impact_of_Omni_and_Veriblock_on_Bitcoin))

#### Veriblock

Ibid.

## Articles and content about the issue

* [Descriptivists vs Prescriptivists, by JesterHodl](https://jesterhodl.com/p/c5515a25-ea04-42e1-bad2-06bd3dccea96/)
* [SPAMBUSTERS - Bitcoin Anti-Spam Initiative Hub, by @GhostOfPashka](https://spambusters.notion.site/spambusters/SPAMBUSTERS-8f63364214204dc2b258468bd6a2a0c8)
* [Stephan Livera - Bitcoin Spam (Ordinals) Red Herrings](https://stephanlivera.substack.com/p/bitcoin-spam-ordinals-red-herrings)
* [BITCOINALLCAPS - Bitcoin Filters Work By Default, And That’s a Good Thing!](https://stacker.news/items/397842), original post [here](https://medium.com/@Fiach_dubh/bitcoin-filters-work-by-default-f3ae50d304a6)
* [2024-01-01 Witness Discount (mispricing) exploit in Bitcoin explained](https://youtu.be/WtrBlQJktxg)
* [CVE-2023-50428](https://nvd.nist.gov/vuln/detail/CVE-2023-50428)
* [@giacomozucco](https://twitter.com/giacomozucco) explain what spam is, why filtering is worth trying but not a panacea and why spam is not bringing back builders to Bitcoin:

<div align="center">
<iframe width="480" height="270" src="https://www.youtube.com/embed/OpbDWCwJ_5Y?si=-TdOB7tkIqK0YusF&amp;start=3440" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Other references
[Data Insertion in Bitcoin's Blockchain](https://digitalcommons.augustana.edu/cgi/viewcontent.cgi?article=1000&context=cscfaculty).

## License and acknowledgement

* MrGnome for the rigorous review
* [@leo_haf](https://x.com/leo_haf) for his direct contributions to this page
* [@GregTonoski](https://twitter.com/GregTonoski) for his many contributions to this page

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[WTF happened in February 2023](http://wtfhappenedinfeb2023.com/) by [@piratebiscuit](https://twitter.com/PirateBiscuit) is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)
