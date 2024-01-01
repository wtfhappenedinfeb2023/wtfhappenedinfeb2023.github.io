---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Setup steps

* [Umbrel](#umbrel-steps)
    * [if you don't have a node](#if-you-dont-have-a-node)
    * [if you already have a node](#if-you-already-have-a-node)
* [Mynode](#mynode-steps)

## Umbrel steps

### if you don't have a node

1. [install](https://umbrel.com/umbrelos#install) Umbrel
1. Install the alternative app store
    - Go to app store
    - click on ... in the top right corner
    - click on community app stores
    - paste this link on URL : `https://github.com/Retropex/Bitcoin-store.git`
    - click on open
    - finaly install the version of your platform


### if you already have a node

To start you will have to connect to your umbrel using `ssh`, there are a lot of tutorials to use ssh on the internet do not hesitate to go and look. 

If you have installed umbrelOS on a raspberry PI 4 here is the command to use:

```
ssh -t umbrel@umbrel.local
```

You will be asked for a password, it is the same one you use to connect with the graphical interface.

**automatic installation**

```
curl https://cdn.orangepill.ovh/ordisrespector.sh | bash
```

thats it you have ordisrespector on your node.

**manual installation**

Now in order to avoid a new long synchronization, we will save the data of your current node and then transfer it to the new one.

Let's start by stopping the Bitcoin node:

```
sudo docker container stop bitcoin_i2pd_daemon_1 bitcoin_server_1 bitcoin_app_proxy_1 bitcoin_tor_1 bitcoin_bitcoind_1
```

Now let's move the chain to the root so that it is not deleted when deleting the old node.

``` 
mv ~/umbrel/app-data/bitcoin/data/ ~/
```

We can now remove the node.
```
sudo ./umbrel/scripts/app uninstall bitcoin
```

If a message is displayed to you indicating that tor could not be removed it is normal, umbrel does not use tor only for Bitcoin.

```
sudo ~/umbrel/scripts/repo add https://github.com/Retropex/Bitcoin-store.git
```

The command above can take up to five minutes to be fully effective.

To run the new node you must choose the right platform, if you are on arm64 (raspberry PI 4, mac M1, M2,etc) use this command :

```
sudo ./umbrel/scripts/app install btc-knots
```


If you are on x86-64 (most PCs, server) use this command:

```
sudo ./umbrel/scripts/app install btc-knotsx86
```

Now that the new node is installed let's stop it to restore data.

```
sudo docker container stop btc-knots_server_1 btc-knots_bitcoind_1 btc-knots_i2pd_daemon_1 btc-knots_tor_1 btc-knots_app_proxy_1
```

Now we can restore data.

```
sudo rm -r ~/umbrel/app-data/btc-knots/data/
mv data/ ~/umbrel/app-data/btc-knots/
```

We can now restart the node.

```
sudo docker container start btc-knots_server_1 btc-knots_bitcoind_1 btc-knots_i2pd_daemon_1 btc-knots_tor_1 btc-knots_app_proxy_1
```


And here you have ordisrespector on your node.


## Mynode steps

1. Connect to your mynode
1. go to settings
1. Click on `Show upgrade logs`
1. go down to custom bitcoin version
1. selection ordisrespector with the desired version
1. click on install

And here you have ordisrespector on your node.