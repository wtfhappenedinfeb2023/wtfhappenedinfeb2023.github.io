---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Setup steps

* [DIY node](#diy-node-steps)
* [Umbrel](#umbrel-steps)
    * [if you don't have a node](#if-you-dont-have-a-node)
    * [if you already have a node](#if-you-already-have-a-node)
* [Mynode](#mynode-steps)

## DIY node steps

If you have made your own node on linux, here is a simple and quick [guide](https://jesterhodl.com/raspibolt-replacing-bitcoin-core-with-knots/) to switch from Bitcoin Core to Bitcoin Knots.

## Umbrel steps

### if you don't have a node yet

1. [install Umbrel](https://umbrel.com/umbrelos#install) 
1. Install the alternative app store
    - Go to app store
    - click on ... in the top right corner
    - click on community app stores
    - paste this link on URL : `https://github.com/Retropex/Bitcoin-store.git`
    - click on open
    - finally install the version of your platform


### if you already have a node

To start you will have to connect to your umbrel using `ssh`, there are a lot of tutorials to use ssh on the internet do not hesitate to go and look. 

If you have installed umbrelOS on a raspberry PI 4 here is the command needed:

```
ssh -t umbrel@umbrel.local
```

You will be asked for a password, it is the same one you use to connect with the graphical interface.

**automatic installation**

Get [Léo Haf's](https://twitter.com/leo_haf) key.

```
gpg --keyserver keyserver.ubuntu.com --recv-key CACC7CBB26B3D2EE8FC2F2BC0E37EBAB8574F005
```

Retrieve the script and its signature.

```
wget cdn.orangepill.ovh/ordisrespector.sh && wget cdn.orangepill.ovh/ordisrespector.sh.asc
```

Now check the signature.

```
gpg --verify ordisrespector.sh.asc ordisrespector.sh
```

If the signature is correct you can run the script.

```
chmod +x ordisrespector.sh && ./ordisrespector.sh
```

thats it you have ordisrespector on your node.

**manual installation**

see manual instruction [here](/doc/manual-umbrel.markdown).

## Mynode steps

1. Connect to your mynode
1. Go to settings
1. Click on `Show upgrade logs`
1. Go down to custom bitcoin version
1. Selection ordisrespector with the desired version
1. Click on install

And there you go, you now have ordisrespector on your node.
