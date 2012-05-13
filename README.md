# MultiBin

This is a new version of
[ZeroBin](https://github.com/sebsauvage/ZeroBin) in CouchDB.

## Installation

  ```
  1. git clone git://github.com/rakoo/Multibin.git
  2. cd MultiBin
  3. couchapp push . http://localhost:5984/multibin
  ```

CouchApps are a breeze to use, aren't them ?

## Demo

You can see what it looks like
[here](https://krakotztest.iriscouch.com/multibin/_design/MultiBin/index.html).

Be advised : this is a test service : data can be deleted at any time.

## Why CouchDB ?

Because it is an awesome piece of tech, and I like it. There are also
more valid reason:

- One software. Instead of needing a webserver with PHP, you now only
  need CouchDB. It also has the benefit of storing everything in a
  database instead of plain files (note: plain files are not especially
      that bad).
- Replication ! You want to replicate someone else's multibin ?
  
  ```
  curl -X POST http://localhost:5984/_replicator -d '{"_id":"from_source", "source":"http://source.com/multibin", "target":"multibin", "create_target":"true"}'
  ```

  And you're done. You can even use continuous replication, to provide a
  live backup of the source multibin... This is the true power of
  CouchDB.

  Note that this will also replicate the application, so you won't have
  to install it manually.

## No drawbacks ?

Yes, there is one : most (if not all) online hosting
services provide a Webserver with PHP. Only a few provide CouchDB. If
you want to use it, chances are you'll do it from home. But this is what
Internet is, after all. =]

## Unlicense

This is public domain. See UNLICENSE for the legal stuff, and
http://unlicense.org for more info.

## Original Licenses

I stole a lot from ZeroBin. Most of the files I used are modified, so here is the original License : 

------------------------------------------------------------------------------

Copyright (c) 2012 Sébastien SAUVAGE (sebsauvage.net)

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must
       not claim that you wrote the original software. If you use this
       software in a product, an acknowledgment in the product
       documentation would be appreciated but is not required.

    2. Altered source versions must be plainly marked as such, and must
       not be misrepresented as being the original software.

    3. This notice may not be removed or altered from any source
       distribution.

  ------------------------------------------------------------------------------

Other parts of the code from various places :

- CouchDB is under the Apache License 2.0
- SJCL, the crypto library, is under BSD or GPL>=2.0
- I might have forgotten other things; don't hesitate to contact me so I
  can mention it
