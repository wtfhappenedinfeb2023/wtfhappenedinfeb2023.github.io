---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

* [Stats about non-payment transactions](#stats)
* [Permissionless does not mean Purposeless](#permissionless-does-not-mean-purposeless)
* [The economics of spam](#the-economics-of-spam)
* [Common narratives around spam](#common-narratives-around-spam)
* [A brief history of spam in the Bitcoin network](#a-brief-history-of-spam-in-the-bitcoin-network)

## Stats

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

*The size of the UTXO set, number of unspent UTXO outputs, has seen a drastic increase since the beginning of the 2023 spam wave. This is partially due to Inscriptions/BRC-20 but mianly due to spam that relies on bare-multisig data to store data on the timechain. [UTXO set size](https://statoshi.info/d/000000009/unspent-transaction-output-set?orgId=1&refresh=5s&from=now-2y&to=now)*



## Permissionless does not mean Purposeless

### The Genesis block

![The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.](/assets/thetimes.png){: width="450" }{:.centered}

It is today well known that Satoshi Nakamoto included a message within the coinbase parameter of the Genesis block the following text: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'. The coinbase parameter refers to the data field found at the beginning of each new block that contains information about the previous transactions, the current miner's reward, and sometimes additional text or messages. In this case, Satoshi Nakamoto, the anonymous creator of Bitcoin, inserted a brief news headline from The Times newspaper dated January 3, 2009 (shown above) as part of the coinbase parameter in the genesis block (the first block in the chain). This message is believed to have been included as a way for Nakamoto to demonstrate that the genesis block was created after the publication date mentioned in the headline.
{: style="text-align: justify"}

However, this statement is also often thought to have an ideological and political reach. Indeed, this message can also be interpreted as a comment on the impact caused by fractional-reserve banking, which is a monetary trust issue. This message is thus also considered to be a comment about Bitcoin's purpose. A reasonable interpretation would be that the purpose of Bitcoin is to be used as an alternative, a competitor or maybe even a replacement for the current monetary + banking system.
{: style="text-align: justify"}

This message does not mean that Bitcoin cannot fork or evolve into something else, but if that something else does not address the purpose specified in the Genesis block, that something else could not claim to be Bitcoin.
{: style="text-align: justify"}

#### Is the Genesis block message an "inscription"?

A common argument presented by Inscription supporters is that Satoshi themselve started the trends of injecting data in the timechain with the Genesis block message. This argument is simply wrong since Satoshi did not subvert the protocol to "inscribe" data, he simply used space already available in the Coinbase data that is designed to allow miners to broadcast arbitrary data. It's always been part of Bitcoin. 
[More information here.](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch08.html)

![Mechanism used to inscribe the Genesis block message by Satoshi](/assets/genesis_coinbase_data.jpeg){: width="850" }{:.centered}

### The whitepaper

![The whitepaper: electronic cash system](/assets/the_whitepaper.png){: width="550" }{:.centered}

The Bitcoin whitepaper is today considered to be a document that is part of the common, general, and even pop culture. This page will not spend too much time expanding on it. The only point that will be highlighted is that the title of the whitepaper itself specifies that Bitcoin has a purpose, and that purpose cannot be more clearly expressed: "electronic cash system".
{: style="text-align: justify"}

Based on the whitepaper and the Genesis block message, it is quite clear that the Bitcoin system was designed for a specific purpose. This is an extremely important point as it baically defines what Bitcoin is, it is the system that accomplishes this purpose. Since then, the Bitcoin system has evolved a lot but the continuity of what makes Bitcoin Bitcoin is that it serves this same purpose. If the system that is today called "Bitcoin" does not serve this purpose anymore but starts to serve another purpose, then that system is simply not Bitcoin anymore and another Bitcoin system that accomplishes that purpose will most likely appear somewhere else on the internet.
{: style="text-align: justify"}

### Bitcoin developers

Although most Bitcoin developers are today less willing to take a stance about non-payment transactions on Bitcoin, this has not been the norm. Since the beginning of the 2023 spam wave, several Bitcoin devs have clearly expressed that they believe updating filters to consider this new spam can be seen as "censorship" (more on this in the "Common narratives about spam" section) or that it is not worth doing because they will just find a workaround anyways. The stance of past Bitcoin developers was made very clear by [Gregory Maxwell](https://cryptoanarchy.wiki/people/gregory-maxwell) at the beginning of the Blocksize wars in 2015 in an [e-mail sent to the bitcoin-dev mailing list titled "Capacity increases for the Bitcoin system."](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-December/011865.html). In his e-mail, Gregory starts by eloquently reminding everyone about Bitcoin's purpose and that this purpose should guide future development:
{: style="text-align: justify"}

![Gregory Maxwell, "Capacity increases for the Bitcoin system.", 1](/assets/gregory_letter_1.png){: width="650" }{:.centered}

Gregory then explains why it's important for Bitcoin to remain efficient and that decentralization, which is critical to achieve Bitcoin's purpose, requires users to be able to enforce the rules themselves:

![Gregory Maxwell, "Capacity increases for the Bitcoin system.", 2-1](/assets/gregory_letter_2-1.png){: width="650" }{:.centered}

![Gregory Maxwell, "Capacity increases for the Bitcoin system.", 2-2](/assets/gregory_letter_2-2.png){: width="650" }{:.centered}

Finally, Gregory expresses in an absolutely clear way: "Bitcoin is an electronic case, it isn't a generic database;". He then explains why Bitcoin cannot be electronic cash and a generic database, and that reason is something that Bitcoin has been experiencing since the beginning of the 2023 spam wave: if Bitcoin were a database, what Bitcoin would offer is "highly-replicated perpetual storage" and that is a service so precious that there will be an infinite demand for it, which will hinder its ability to accomplish its purpose. Gregory then addresses what some Bitcoin developers who support allowing data on Bitcoin must feel, a feeling of shame because other blockchains allow for non-e-cash usage, but he specifies that there should be no shame in that because Bitcoin's purpose aims has a purpose that is worth accomplishing: to "satisfy the world's demand for electronic cash".
{: style="text-align: justify"}

![Gregory Maxwell, "Capacity increases for the Bitcoin system.", 3](/assets/gregory_letter_3.png){: width="650" }{:.centered}

Another interesting remark here that bitcoiners often seem to forget today and that is that Bitcoin has not won, this is not a done deal. It will require "luck and hard-work". Behaving as if allowing on Bitcoin exactly what Gregory warned us against won't endanger Bitcoin's purpose would be pure foolishness.
The rest of the e-mail, although quite interesting to read, focuses on the technical challenges that Bitcoin development was facing at the time regarding scaling, it won't be covered here as the outcome are now known and are outside of the scope of understanding what spam on Bitcoin is and how it affects the system.
{: style="text-align: justify"}

## The economics of spam

The economic impact of spam varies widely. We'll consider two cases here, one where the bandwidth available is unlimited - which is the case of phone and e-mail spam where spammers may benefit financially from their activities by selling counterfeit goods or promoting fraudulent services to unwitting consumers through email campaigns or online ads; and a second case where the bandwidth available is limited and is often allocated through auctions that spammers must compete in - which is the case of spectrum band auctions, network resource allocation processes or the Bitcoin network where spam can result in significant economic losses for legitimate participants due to increased costs and decreased efficiency caused by the misallocation of resources. We will focus here on the second case as it is the one that concerns the Bitcoin network.
There will always be spam on any network as long as the following is true:
{: style="text-align: justify"}

`Revenue from spam - Cost of spam > 0`
{: style="text-align: center"}

The difference between the Revenue from spam and the Cost of spam is of course the Profit from spam, and spam operations can continue as long as a positive Profit is gained from the spam. The Cost of spam mentioned here contains the cost necessary to generate the spam content or message and the cost necessary to transmit the spam message to its targets, in other words:
{: style="text-align: justify"}

`Cost of spam = Cost to generate spam + Cost to transmit spam`to targets
{: style="text-align: center"}

In the case of the spam that emerged on the Bitcoin network in 2023, the cost to generate it is quite low as it is mostly composed of images ("JPEGs") or very simple JSON strings. Most of the Cost of spam for spammers thus comes from the transaction fee imposed by the network.  
This means that any financial transaction that isn't willing to pay higher than the Cost of spam that makes the first equation positive will be outpriced. In addition, it is important to note that the Revenue from spam is not a constant. Spammers can find new ways to increase the Revenue from spam, which means that they can afford a higher Cost of spam while still making a positive profit if the Revenue from spam increases.
At any moment in time, the Cost of spam is thus a bottom floor that determines which financial transactions can afford to use the network and which can't. Any financial transaction that cannot pay a higher fee than the Cost of spam will have to find a different solution to transmit their transaction; in other words, any financial transaction that cannot afford a transaction fee above the Cost of spam, which effectively plays the role of a floor here, won't be able to transact on the network. Now regarding the Revenue from spam, an important remark is that the Revenue from spam in the future is unknown. If the Revenue from spam in the future is very high, that means that spam transactions can afford a higher Cost of spam and that the floor above which financial transactions must pay a transaction fee will also increase. A consequence of this is that a business won't be able to plan for future costs of transacting on the network. Transaction fees in the future will always be unknown, but competing with other financial transactions should be acceptable because they'll have the same economics the business considered here will have (and if they can consistently outprice you, it simply means your business is not profitable enough), but as we just explored, spammers have different economics...
Such an unpredictable situation would limit the ability to use the Bitcoin network as a payment network for businesses and individuals.​​​​​​​
{: style="text-align: justify"}

### Impact of external funding

The current wave of spam appears to be at least partially financed by external funding. This has an impact on the economics of this spam.

## Common narratives around spam

### Mempool policy is censorship

The statement implies that any policy applied to your mempool, which temporarily stores unconfirmed transactions in your Bitcoin node before they're added to blocks, is a form of censorship. However, this argument is wrong because mempool and relay are not forced on you by anyone and are not enforced over the whole network under threat; instead, they only allow you to take control over your own mempool and relay policies to prioritize or refuse to store or relay certain types of transactions. This is the opposite of censorship, this is what sovereignty means. This set of rules can be defined through your bitcoin.conf file to describe what a valid transaction is from the point of view of your own mempool.
{: style="text-align: justify"}

Policy is everything that is not consensus. Modifying your mempool and relay policies does not go against consensus as you're only affecting what happens before transactions are included in a block. Your node will still receive, record and relay all blocks that are mined by the network and your node will remain within consensus.
{: style="text-align: justify"}

Mempool policies are necessary for ensuring efficient and effective usage of the limited resources in the Bitcoin network during periods of high traffic or congestion while also prioritizing critical transaction needs like payments. Nodes are responsible for enforcing the purpose of the network, these policies are your voice on the network.
{: style="text-align: justify"}

Censorship is defined as the suppression of speech, public communication, or other information, censorship is enforced by a central authority that will rely on violence or punishment to force everyone to delete and suppress of said information. In the case of mempool and relay policies, since each actor is free to set their own rules without being forced to apply a specific set of rules (default rules are often kept by most users but that is a different subject), it is thus obvious that these policies are the opposite of censorship.
{: style="text-align: justify"}

In the case of spam, refusing to store or relay it with your node can be defined as moderation, not censorship. As was previously discussed, Bitcoin has a purpose. Refusing to relay information that is not aligned with that purpose is a form of moderation, the same way an academic journal about physics will refuse publication submitted about psychology. Publishing it would otherwise inconvenience most of the readers of that journal who are subscribing and reading that journal because they are interested in advancements in physics, The main difference in the case of Bitcoin is the definition of what is aligned with this purpose or not and its enforcement is decentralized overall nodes through mempool and relay policies.
{: style="text-align: justify"}

Running a node is an active process. You might have been told that if "you're running a node, you're good", that is just the first step. Noderunners must remain ever-vigilant and ready to act in case of attack. This is effectively what makes Bitcoin anti-fragile. 
{: style="text-align: justify"}

**What's next?**

* Want to take control over your mempool's policies? You can easily do that by modifying your bitcoin.conf file. You can use the following tool, provided by [Jameson Lopp](Bitcoin Core Config Generator) to easily create a bitcoin.conf file that applies the mempool and relay policies you'd like to apply for your node.

* More information about this: https://bitcoin.stackexchange.com/questions/120269/what-is-mempool-policy Waiting for confirmation: a series about mempool and relay policy | Bitcoin Optech


## What can you do about it?

### As a noderunner

* Use Bitcoin Knots 25.1 (All spam filters are up to date)​​​​​​​
* Set the following configuration options: -permitbaremultisig=0, -datacarrier=0 (if you are using knots 25.1 or later)
* Keep asking node software providers (their telegrams, twitters, nostrs) to introduce GUI options for filtering [Jester] - show there is demand.

### As a miner

* Point your hashrate to ocean (ocean or core+antispam block template)​​​​​​​

### As a developer

* PR for changed defaults

### As a pleb

* Be vocal about your concerns. Remember that discussions are not always there to persuade the detractor, but to form an opinion of observers. Your voice *is* the market force


## A brief history of spam in the Bitcoin network

### Noteworthy cases of massive broadcasts of non-payment TXs

In September 2010, a proposal was made on the BitcoinTalk forums about a DNS protocol that would rely on Bitcoin.
A quick description of this project is provided here from the [bitcoin.it wiki](https://en.bitcoin.it/wiki/BitDNS):

> Bitdns was project with the goal to extend Bitcoin's technology to a domain name service, expanding the software to support transactions for registering, updating, and transferring domains. The project eventually became an altchain with its own altcoin, known as [Namecoin](https://www.namecoin.org/).

![Satoshi's comments about BitDNS](/assets/satoshi_bitdns.png){: width="650" }{:.centered}
