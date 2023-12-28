---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

* [Stats about non-payment transactions](#stats)
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

### Is the Genesis block message an "inscription"?

Satoshi inscribed on-chain so I should be able to do it!

A common argument presented by Inscription supporters is that Satoshi themselve started the trends of injecting data in the timechain with the Genesis block message. This argument is simply wrong since Satoshi did not subvert the protocol to "inscribe" data, he simply used space already available in the Coinbase data that is designed to allow miners to broadcast arbitrary data. It's always been part of Bitcoin and didn't introduce any wastefulness.
[More information here.](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch08.html)

![Mechanism used to inscribe the Genesis block message by Satoshi](/assets/genesis_coinbase_data.jpeg){: width="850" }{:.centered}

**What's next?**

* Want to take control over your mempool's policies? You can easily do that by modifying your bitcoin.conf file. You can use the following tool, provided by [Jameson Lopp](https://jlopp.github.io/bitcoin-core-config-generator/) to easily create a bitcoin.conf file that applies the mempool and relay policies you'd like to apply to your node.
* [More information about mempool policy and its role](https://bitcoin.stackexchange.com/questions/120269/what-is-mempool-policy)


## What can you do about it?

### As a noderunner

* Use Bitcoin Knots 25.1 (All spam filters are up to date)​​​​​​​
* Set the following configuration options: -permitbaremultisig=0, -datacarrier=0 (if you are using knots 25.1 or later)
* Keep asking node software providers (their telegrams, twitters, nostrs) to introduce GUI options for filtering [Jester] - show there is demand.

#### Running a node on a Raspberry Pi?

Don't forget, if you don't even use your node to broadcast your transactions and check the state of the chain or TXs of interest to you on-chain, your node plays no role at all in the network.  
If it's a full node, it could at least help someone syncrhonize their own node.

If you're using a start9 distrbution, you can install a version of BItcoin Core with a path that filters them (ordirespector).



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
