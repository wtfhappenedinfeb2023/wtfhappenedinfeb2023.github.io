---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

* [Stats about non-payment transactions](#stats)
* [Characteristics of spam](#caracteristics-of-spam)
* [Common narratives around spam](#common-narratives-around-spam)
  * [Mempool policy is censorship](#mempool-policy-is-censorship)
  * [A valid transaction is a valid transaction](#a-valid-transaction-is-a-valid-transaction)
  * [The fees were going to be high anyways](#the-fees-were-going-to-be-high-anyways)
  * [Satoshi inscribed on-chain so I should be able to do it too](#satoshi-inscribed-on-chain-so-i-should-be-able-to-do-it-too)
  * [Bitcoin can thrive even if miners are made of pure greed](#bitcoin-can-thrive-even-if-miners-are-made-of-pure-greed)
  * [Spam doesn't hinder adoption](#spam-doesnt-hinder-adoption)
* [What can you do about it](#what-can-you-do-about-it)
* [A brief history of spam in the Bitcoin network](#a-brief-history-of-spam-in-the-bitcoin-network)

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

## Caracteristics of spam

During waves of spam, spam is always defended by spam supporters/defenders by claiming that **spam is subjective** and that what is spam for you might not be spam for someone else, as they might have a use for it. This section aims at addressing this mischaracterization.
{: style="text-align: justify"}

Spam opponents often tend to define or characterize spam by defining it based on the **purpose of the network (*Peer-to-peer Electronic Cash system*)**, although there is truth in this characterization, it is an argument that can be hard to defend as the purpose of the network is a concept that can be seen as **subjective**. However, spam can also **be recognized by anyone**, even intellectually honest spammers, thanks to **two main characteristics**:
{: style="text-align: justify"}
1. **Wastefulness of the shared network resources**
2. **Obvious misuse of Bitcoin's functions for a malicious purpose**  
In addition, these transactions are also often sent in **large amounts**.

Transactions with no practical value or purpose, such as those submitted by supporters of big blocks during the Blocksize wars for example, are characterized by wastefulness. These transactions are malicious partly because they are wasteful, creating a backlog in the mempool that drives up transaction costs unnecessarily. The 2023 wave of spam is especially egregious because it involves storing obscenely large and unoptimized state data using methods that abuse several of Bitcoin's functions, such as the segregated witness script discount, OP_IF code, and bare multi-signatures. 
{: style="text-align: justify"}

These transactions may be classified as spam due to their ignorance or malice, they could also occur off-chain relatively easily through *NFTs* with reference hashes or *BRC-20* tokens with reference hashes and this was already proposed several times. Functionally, the result would be the same as it would allow users of this "*standard*" to verify the data **without overwhelming the chain**. *BRC-20* tokens are **not optimized at all** for example and use clear *JSON* (!) instead of *HEX* or *base64* encoding, demonstrating a **complete disregard for the shared resource of the timechain**. This failure is particularly concerning since they account for more than 50% of the average block's size, [as shown in the BTC spam analysis blocksize graph](#space-occupied-by-non-payments-vs-payments-on-the-timechain-since-january-2023,) despite being avoidable with a more responsible usage.
{: style="text-align: justify"}

The two characteristics presented here are a better way to characterize spam instead of relying on the purpose of the network, and Bitcoin actually supports other protocols that submit non-payment transactions which are not considered as spam throughout the network. A good example is the [OpentimeStamps protocol](https://opentimestamps.org/) (there are also many bad examples), which uses Bitcoin for blockchain timestamping and is not considered as spam by most participants in the network as it generally does not present the two characteristics presented above.
{: style="text-align: justify"}


## Common narratives around spam

  * [Mempool policy is censorship](#mempool-policy-is-censorship)
  * [A valid transaction is a valid transaction](#a-valid-transaction-is-a-valid-transaction)
  * [The fees were going to be high anyways](#the-fees-were-going-to-be-high-anyways)
  * [Satoshi inscribed on-chain so I should be able to do it too](#satoshi-inscribed-on-chain-so-i-should-be-able-to-do-it-too)
  * [Bitcoin can thrive even if miners are made of pure greed](#bitcoin-can-thrive-even-if-miners-are-made-of-pure-greed)
  * [Spam doesn't hinder adoption](#spam-doesnt-hinder-adoption)

### Mempool policy is censorship

The statement implies that any policy applied to your mempool, which temporarily stores unconfirmed transactions in your Bitcoin node before they're added to blocks, is a form of censorship. However, this argument is wrong because **mempool and relay are not forced on you by anyone and are not enforced over the whole network under threat**; instead, they only allow you to **take control over your own mempool** and relay policies to prioritize or refuse to store or relay certain types of transactions. This is the **opposite of censorship**, this is what sovereignty means. This set of rules can be defined through your `bitcoin.conf` file to describe **what a valid transaction is from the point of view of your own mempool**.
{: style="text-align: justify"}

**Policy is everything that is not consensus**. Modifying your mempool and relay policies **does not go against consensus** as you're only affecting what happens before transactions are included in a block. Your node will still receive, record and relay all blocks that are mined by the network and your node will remain within consensus.
{: style="text-align: justify"}

Mempool policies are necessary for ensuring **efficient and effective usage of the limited resources in the Bitcoin network** during periods of high traffic or congestion while also prioritizing critical transaction needs like payments. Nodes are responsible for enforcing their belief of the purpose of the network, these policies are your voice on the network.
{: style="text-align: justify"}

**Censorship is defined as the suppression of speech, public communication, or other information, and is enforced by a central authority that will rely on violence or punishment to force everyone to delete and suppress of said information**. In the case of mempool and relay policies, since each actor is free to set their own rules without being forced to apply a specific set of rules (default rules are often kept by most users but that is a different subject), it is thus obvious that these policies are the opposite of censorship.
{: style="text-align: justify"}

In the case of spam, **refusing to store or relay it with your node can be defined as moderation, not censorship**. Refusing to relay information that is not aligned with that purpose is a form of moderation, the same way an academic journal about physics will refuse a publication submitted about psychology. Publishing it would otherwise inconvenience most of the readers of that journal who are subscribing and reading that journal because they are interested in advancements in physics. **The main difference in the case of Bitcoin is that the moderation and its enforcement is decentralized over all nodes through mempool and relay policies**.
{: style="text-align: justify"}

**Running a node is an active process**. You might have been told that if "you're running a node, you're good", that is just the first step. Noderunners must remain ever-vigilant and ready to act in case of attack. This is effectively what makes Bitcoin anti-fragile. 
{: style="text-align: justify"}

### A valid transaction is a valid transaction

Spam defenders will **often point to the fact that a spam transaction is valid**, in the eyes of the protocol, because it pays the required fee and respects the structure required by the protocol. Although this is true, it does not mean that the transaction cannot be a spam transaction. **By definition, spam will always be a valid**, it would otherwise not be relayed through mempools and won't be included in a block. That does not mean that some valid transactions are not violating the two definitions [previously defined](#caracteristics-of-spam), meaning that the transaction can still waste the shared resources of the network and/or abuse one of Bitcoin's functions for a malicious intent.
{: style="text-align: justify"}

Discussing **the validity of the transaction is not the issue** and participants should not let the debate diverge in that direction. Spam will always be valid, the questions that should be discussed are:
* **Are these transactions willingly wasting the shared resources of the network?**
* **Is there a malicious intent behind this wave of transactions?**
* **Can the purpose of these transactions be achieved more efficiently?**
* **Are these transactions abusing some of Bitcoin's functions to circumvent limitations put in place to preserve the network's resources?**
{: style="text-align: justify"}

Another important detail is that some of the spam from the current wave, mostly inscription-based spam, can be considered to not be paying a fair fee as it circumvents the fair fee market by injecting data into the segregated witness space in order to benefit from a x0.25 discount. This is not the case for multisig based spam.
{: style="text-align: justify"}

### The fees were going to be high anyways

Because Bitcoiners strongly believe that Bitcoin will be adopted by more users who see a need for Bitcoin properties (citizens experiencing significant currency debasement, institutional users who require fast finality, users trying to circumvent capital controls, ...) combined with the choice to maintain a limited blocksize, there is a strong belief that **transaction fees will become prohibitive in the future**, excluding small users from ever using on-chain transactions. The hope is that Layer 2 solutions will be ready by then.
{: style="text-align: justify"}

A common argument presented about the fact that spam induces high fees is that we all knew that high fees were always going to be high, so high fees shouldn't be an issue. This is argument is flawed for two reasons:
1. High fees are not the issue when it comes to spam, **the issue is about the wastefulness and abuse of the network's functions** that cause harm to the network as a whole
2. **The reason why fees are high is obviously important**. The argument that fees were always going to be high assumes that there will be a strong demand for Bitcoin's properties. When spam is the reason why there are high fees on the network, that is obviously not the case. The high fees is not what matters, it's the adoption and demand for Bitcoin's properties that causes them that's important.
{: style="text-align: justify"}

This second point can easily be understood whit a simple thought experiment: 
* Let's assume that a nation-state level attacker funds an attack where they fill blocks with transactions sent back to themselves, consistently paying fees high enough to ensure that their transactions will be in the next block and stopping anyone else from transacting.
* In this case, the fees will necessary become high, but this situation will stop anyone else from transacting, stopping any real demand for Bitcoin's properties. The fees are still high, but would you still support a mitigation scheme to limit the reach of such an attack?
{: style="text-align: justify"}

### Satoshi inscribed on-chain so I should be able to do it too

A common argument presented by inscription supporters is that Satoshi themselves started the trends of injecting data in the timechain with the Genesis block message. This argument is simply wrong since Satoshi did not subvert the protocol to "inscribe" data, they simply used space already available in the Coinbase data that is designed to allow miners to broadcast arbitrary data. **It's always been part of Bitcoin and didn't introduce any wastefulness.**
[More information here.](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch08.html)
{: style="text-align: justify"}

![Mechanism used to inscribe the Genesis block message by Satoshi](/assets/genesis_coinbase_data.jpeg){: width="850" }{:.centered}

In addition, this argument does not really matter as Satoshi's initial actions should not be blindly followed and used to justify your actions. Everybody can make mistakes, and no one can plan for all future scenarios, especially in a complex system such as Bitcoin that is highly unpredictable.
{: style="text-align: justify"}

**What's next?**

* Want to take control over your mempool's policies? You can easily do that by modifying your bitcoin.conf file. You can use the following tool, provided by [Jameson Lopp](https://jlopp.github.io/bitcoin-core-config-generator/) to easily create a bitcoin.conf file that applies the mempool and relay policies you'd like to apply to your node.
* [More information about mempool policy and its role](https://bitcoin.stackexchange.com/questions/120269/what-is-mempool-policy)


### Bitcoin can thrive even if miners are made of pure greed

* Miners need Bitcoin to be successful over the long term to make profits and repay their investments
* What makes Bitcoin valuable is its unique properties as electronic cash
* Spam, being wasteful and malicious, hinders this ability

Where does the narrative/idea that miners must be greedy come from? How do believers in this idea know it allows the Bitcoin system to be successful?

### Spam doesn't hinder adoption

* Spam is displacing interest in Bitcoin outside of the chain
    * Liquid usage chart: going up
    * Canada Purpose ETF BTCC volume chart: going up


## What can you do about it?

### As a noderunner

* Use [Bitcoin Knots](https://github.com/bitcoinknots/bitcoin) 25.1 (All spam filters are up to date)​​​​​​​
* Set the following configuration options: `-permitbaremultisig=0`, `-datacarrier=0` (if you are using knots 25.1 or later)
* Keep asking node software providers (their telegrams, twitters, nostrs) to introduce GUI options for filtering [Jester] - show there is demand.

#### Running a node on a Raspberry Pi?

Don't forget that if you don't even use your node to broadcast your transactions and check the state of the chain or TXs of interest to you on-chain, your node plays no role at all in the network.  
It is true though that if it's a full node, it could at least help someone synchronize their own node at some point in the future, which is the reason why it is important to keep the ability to run nodes affordable for most users.
{: style="text-align: justify"}

* If you're using an Umbrel distribution to run your node, you can install a version of Bitcoin Knots which will filter the inscription related spam. You can do so here: [https://github.com/Retropex/Bitcoin-store](https://github.com/Retropex/Bitcoin-store)
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

#### SatoshiDice

See https://blog.bitmex.com/dapps-or-only-bitcoin-transactions-the-2014-debate/.

## Articles and content about the issue

* [Descriptivists vs Prescriptivists, by JesterHodl](https://jesterhodl.com/p/c5515a25-ea04-42e1-bad2-06bd3dccea96/)
* [SPAMBUSTERS - Bitcoin Anti-Spam Initiative Hub, by @@GhostOfPashka](https://spambusters.notion.site/spambusters/SPAMBUSTERS-8f63364214204dc2b258468bd6a2a0c8)

## License and acknowledgement

* MrGnome for the rigorous review
* [@leo_half](https://x.com/leo_haf?s=20) for his direct contributions to this page

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[WTF happened in February 2023](http://wtfhappenedinfeb2023.com/) by [@piratebiscuit](https://twitter.com/PirateBiscuit) is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1)