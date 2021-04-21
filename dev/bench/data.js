window.BENCHMARK_DATA = {
  "lastUpdate": 1619049258772,
  "repoUrl": "https://github.com/sunjay/tokio",
  "entries": {
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/sunjay/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607313440691,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14663,
            "range": "± 3934",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1151,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 660,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14824,
            "range": "± 3935",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1146,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/sunjay/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607743159805,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14732,
            "range": "± 4391",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1043,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 643,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15464,
            "range": "± 4345",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1054,
            "range": "± 143",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/sunjay/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607902832351,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15397,
            "range": "± 5359",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1089,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 660,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14788,
            "range": "± 3929",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1091,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kai.jewson@gmail.com",
            "name": "Kai Jewson",
            "username": "KaiJewson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dc4769708279a076e01a66dc53ec226083c1bdb",
          "message": "sync: add OwnedRwLockReadGuard and OwnedRwLockWriteGuard (#3340)",
          "timestamp": "2021-03-23T13:40:17+01:00",
          "tree_id": "f2176a8959a190799a3da96112d37904a10ad86e",
          "url": "https://github.com/sunjay/tokio/commit/0dc4769708279a076e01a66dc53ec226083c1bdb"
        },
        "date": 1616640960487,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14421,
            "range": "± 6471",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 835,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 481,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13241,
            "range": "± 5730",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 866,
            "range": "± 125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6da67b2e612455e16c11967c762ae802c2ac428",
          "message": "sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}` (#3704)\n\n* sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}`\r\n\r\n## Motivation\r\n\r\nThe `mpsc::Sender::reserve` method currently returns a permit that borrows\r\nfrom the `Sender`. It would be nice to have a version of it that returns\r\nan owned permit.\r\n\r\n## Solution\r\n\r\nThis branch adds an `OwnedPermit` type and `Sender::{reserve_owned,\r\ntry_reserve_owned}` methods. Unlike the comparable methods on\r\n`Semaphore`, these methods do *not* require an `Arc<Sender>` as the\r\nreceiver; this is because the sender internally reference counts the\r\nchannel and is already cheap to clone. Requiring an `Arc` would simply\r\nadd an unnecessary second layer of reference counting, which is not\r\nideal; instead, the documentation encourages the user to clone the\r\nsender prior to calling `reserve_owned` when necessary.\r\n\r\nSince these methods take the `Sender` by value, they also have the ability\r\nto _return_ the `Sender` from a successful `OwnedPermit::send`. This\r\nallows them to be used without additional clones. Essentially, this is a\r\nvery simple type-level encoding of the sender's state, with the\r\ntransitions\r\n```\r\n      ┌──────┐\r\n ┌───►│Sender├───┐\r\n │    └──────┘   │\r\nsend          reserve\r\n │ ┌───────────┐ │\r\n └─┤OwnedPermit│◄┘\r\n   └───────────┘\r\n```\r\n\r\nAdditionally, I added an `OwnedPermit::release`, which returns the\r\n`Sender` and releases the permit *without* sending a message.\r\n\r\nCloses #3688 \r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2021-04-15T12:55:57-07:00",
          "tree_id": "bf29d9dc513a8d80cadd15021e58c979e5f6d691",
          "url": "https://github.com/sunjay/tokio/commit/d6da67b2e612455e16c11967c762ae802c2ac428"
        },
        "date": 1618800818854,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16065,
            "range": "± 5753",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1112,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 641,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14992,
            "range": "± 3565",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1052,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/sunjay/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607313450479,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 928,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14455,
            "range": "± 3979",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 988,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14415,
            "range": "± 3174",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 561,
            "range": "± 66",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/sunjay/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607743153900,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 827,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12901,
            "range": "± 5372",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 867,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13180,
            "range": "± 3403",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 485,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/sunjay/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607902805206,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 845,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13675,
            "range": "± 2884",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 869,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14382,
            "range": "± 3262",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 495,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kai.jewson@gmail.com",
            "name": "Kai Jewson",
            "username": "KaiJewson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dc4769708279a076e01a66dc53ec226083c1bdb",
          "message": "sync: add OwnedRwLockReadGuard and OwnedRwLockWriteGuard (#3340)",
          "timestamp": "2021-03-23T13:40:17+01:00",
          "tree_id": "f2176a8959a190799a3da96112d37904a10ad86e",
          "url": "https://github.com/sunjay/tokio/commit/0dc4769708279a076e01a66dc53ec226083c1bdb"
        },
        "date": 1616640984883,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 941,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14858,
            "range": "± 4595",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1022,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15145,
            "range": "± 4535",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 588,
            "range": "± 59",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6da67b2e612455e16c11967c762ae802c2ac428",
          "message": "sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}` (#3704)\n\n* sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}`\r\n\r\n## Motivation\r\n\r\nThe `mpsc::Sender::reserve` method currently returns a permit that borrows\r\nfrom the `Sender`. It would be nice to have a version of it that returns\r\nan owned permit.\r\n\r\n## Solution\r\n\r\nThis branch adds an `OwnedPermit` type and `Sender::{reserve_owned,\r\ntry_reserve_owned}` methods. Unlike the comparable methods on\r\n`Semaphore`, these methods do *not* require an `Arc<Sender>` as the\r\nreceiver; this is because the sender internally reference counts the\r\nchannel and is already cheap to clone. Requiring an `Arc` would simply\r\nadd an unnecessary second layer of reference counting, which is not\r\nideal; instead, the documentation encourages the user to clone the\r\nsender prior to calling `reserve_owned` when necessary.\r\n\r\nSince these methods take the `Sender` by value, they also have the ability\r\nto _return_ the `Sender` from a successful `OwnedPermit::send`. This\r\nallows them to be used without additional clones. Essentially, this is a\r\nvery simple type-level encoding of the sender's state, with the\r\ntransitions\r\n```\r\n      ┌──────┐\r\n ┌───►│Sender├───┐\r\n │    └──────┘   │\r\nsend          reserve\r\n │ ┌───────────┐ │\r\n └─┤OwnedPermit│◄┘\r\n   └───────────┘\r\n```\r\n\r\nAdditionally, I added an `OwnedPermit::release`, which returns the\r\n`Sender` and releases the permit *without* sending a message.\r\n\r\nCloses #3688 \r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2021-04-15T12:55:57-07:00",
          "tree_id": "bf29d9dc513a8d80cadd15021e58c979e5f6d691",
          "url": "https://github.com/sunjay/tokio/commit/d6da67b2e612455e16c11967c762ae802c2ac428"
        },
        "date": 1618800825796,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1050,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15341,
            "range": "± 5061",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1061,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16021,
            "range": "± 5701",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 597,
            "range": "± 76",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b9b55810847b4c7855e3de82f432ca997600f30",
          "message": "time: prevent `time::advance` from going too far (#3712)\n\nPreviously, `time::advance` would set the mocked clock forward the\r\nrequested amount, then yield. However, if there was no work ready to\r\nperform immediately, this would result in advancing to the next expiring\r\nsleep.\r\n\r\nNow, `time::advance(...)` will unblock at the requested time. The\r\ndifference between `time::advance(...)` and `time::sleep(...)` is a bit\r\nfuzzy. The main difference is `time::sleep(...)` operates on the current\r\ntask and `time::advance(...)` operates at the runtime level.\r\n\r\nFixes #3710",
          "timestamp": "2021-04-21T15:23:35-07:00",
          "tree_id": "6e5d0c6d86afdeaee3700f2851df5e78bfe7f8a4",
          "url": "https://github.com/sunjay/tokio/commit/2b9b55810847b4c7855e3de82f432ca997600f30"
        },
        "date": 1619049257615,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1030,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15205,
            "range": "± 4122",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1066,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15710,
            "range": "± 5328",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 592,
            "range": "± 101",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/sunjay/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607313469419,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 185399,
            "range": "± 13298",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 701012,
            "range": "± 48307",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5545286,
            "range": "± 1304662",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20185272,
            "range": "± 3184890",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/sunjay/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607743157290,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 193181,
            "range": "± 41774",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 718352,
            "range": "± 110964",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4969369,
            "range": "± 1298530",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19963558,
            "range": "± 3720976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/sunjay/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607902819466,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156160,
            "range": "± 6143",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 600879,
            "range": "± 27980",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4621237,
            "range": "± 999507",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17941937,
            "range": "± 1651428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kai.jewson@gmail.com",
            "name": "Kai Jewson",
            "username": "KaiJewson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dc4769708279a076e01a66dc53ec226083c1bdb",
          "message": "sync: add OwnedRwLockReadGuard and OwnedRwLockWriteGuard (#3340)",
          "timestamp": "2021-03-23T13:40:17+01:00",
          "tree_id": "f2176a8959a190799a3da96112d37904a10ad86e",
          "url": "https://github.com/sunjay/tokio/commit/0dc4769708279a076e01a66dc53ec226083c1bdb"
        },
        "date": 1616640998807,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 183443,
            "range": "± 21404",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 692187,
            "range": "± 138480",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4431168,
            "range": "± 1074661",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18650793,
            "range": "± 3366054",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6da67b2e612455e16c11967c762ae802c2ac428",
          "message": "sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}` (#3704)\n\n* sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}`\r\n\r\n## Motivation\r\n\r\nThe `mpsc::Sender::reserve` method currently returns a permit that borrows\r\nfrom the `Sender`. It would be nice to have a version of it that returns\r\nan owned permit.\r\n\r\n## Solution\r\n\r\nThis branch adds an `OwnedPermit` type and `Sender::{reserve_owned,\r\ntry_reserve_owned}` methods. Unlike the comparable methods on\r\n`Semaphore`, these methods do *not* require an `Arc<Sender>` as the\r\nreceiver; this is because the sender internally reference counts the\r\nchannel and is already cheap to clone. Requiring an `Arc` would simply\r\nadd an unnecessary second layer of reference counting, which is not\r\nideal; instead, the documentation encourages the user to clone the\r\nsender prior to calling `reserve_owned` when necessary.\r\n\r\nSince these methods take the `Sender` by value, they also have the ability\r\nto _return_ the `Sender` from a successful `OwnedPermit::send`. This\r\nallows them to be used without additional clones. Essentially, this is a\r\nvery simple type-level encoding of the sender's state, with the\r\ntransitions\r\n```\r\n      ┌──────┐\r\n ┌───►│Sender├───┐\r\n │    └──────┘   │\r\nsend          reserve\r\n │ ┌───────────┐ │\r\n └─┤OwnedPermit│◄┘\r\n   └───────────┘\r\n```\r\n\r\nAdditionally, I added an `OwnedPermit::release`, which returns the\r\n`Sender` and releases the permit *without* sending a message.\r\n\r\nCloses #3688 \r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2021-04-15T12:55:57-07:00",
          "tree_id": "bf29d9dc513a8d80cadd15021e58c979e5f6d691",
          "url": "https://github.com/sunjay/tokio/commit/d6da67b2e612455e16c11967c762ae802c2ac428"
        },
        "date": 1618800838344,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 204954,
            "range": "± 61107",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 699990,
            "range": "± 248535",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5242592,
            "range": "± 1417917",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20767517,
            "range": "± 3230286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b9b55810847b4c7855e3de82f432ca997600f30",
          "message": "time: prevent `time::advance` from going too far (#3712)\n\nPreviously, `time::advance` would set the mocked clock forward the\r\nrequested amount, then yield. However, if there was no work ready to\r\nperform immediately, this would result in advancing to the next expiring\r\nsleep.\r\n\r\nNow, `time::advance(...)` will unblock at the requested time. The\r\ndifference between `time::advance(...)` and `time::sleep(...)` is a bit\r\nfuzzy. The main difference is `time::sleep(...)` operates on the current\r\ntask and `time::advance(...)` operates at the runtime level.\r\n\r\nFixes #3710",
          "timestamp": "2021-04-21T15:23:35-07:00",
          "tree_id": "6e5d0c6d86afdeaee3700f2851df5e78bfe7f8a4",
          "url": "https://github.com/sunjay/tokio/commit/2b9b55810847b4c7855e3de82f432ca997600f30"
        },
        "date": 1619049251823,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 162108,
            "range": "± 3035",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 634220,
            "range": "± 48679",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4464014,
            "range": "± 1088176",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18087766,
            "range": "± 3065705",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "liufuyang@users.noreply.github.com",
            "name": "Fuyang Liu",
            "username": "liufuyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0707f4c19210d6dac620c663e94d34834714a7c9",
          "message": "net: add TcpStream::into_std (#3189)",
          "timestamp": "2020-12-06T14:33:04+01:00",
          "tree_id": "a3aff2f279b1e560602b4752435e092b4a22424e",
          "url": "https://github.com/sunjay/tokio/commit/0707f4c19210d6dac620c663e94d34834714a7c9"
        },
        "date": 1607313471330,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6780252,
            "range": "± 3152179",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6651926,
            "range": "± 1829800",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6325705,
            "range": "± 2251050",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 592,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 583,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 561,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52973,
            "range": "± 3556",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 927,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1107728,
            "range": "± 33219",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 789394,
            "range": "± 47784",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cameron.evan@gmail.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68717c7efaced76651915696495dcb04c890be25",
          "message": "net: remove empty udp module (#3260)",
          "timestamp": "2020-12-11T14:45:57-05:00",
          "tree_id": "1b7333194ac78d7ae87c5ca9f423ef830cb486b8",
          "url": "https://github.com/sunjay/tokio/commit/68717c7efaced76651915696495dcb04c890be25"
        },
        "date": 1607743177718,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6460211,
            "range": "± 1860094",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6356104,
            "range": "± 1611412",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5822204,
            "range": "± 2080588",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 617,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 646,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 646,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 36176,
            "range": "± 3587",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 874,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1052799,
            "range": "± 142315",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 757738,
            "range": "± 119255",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "6172808+skerkour@users.noreply.github.com",
            "name": "Sylvain Kerkour",
            "username": "skerkour"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9149d7bfae251289cd21aa9ee109b4e2a190d0fa",
          "message": "docs: mention blocking thread timeout in src/lib.rs (#3253)",
          "timestamp": "2020-12-13T16:24:16+01:00",
          "tree_id": "38b69f17cc4644ac6ca081aa1d88d5cfe35825fa",
          "url": "https://github.com/sunjay/tokio/commit/9149d7bfae251289cd21aa9ee109b4e2a190d0fa"
        },
        "date": 1607902843018,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6596079,
            "range": "± 2219062",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6990999,
            "range": "± 1667727",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6192376,
            "range": "± 1941844",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 655,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 637,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 635,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49796,
            "range": "± 1623",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 848,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1100943,
            "range": "± 18401",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 807524,
            "range": "± 73320",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kai.jewson@gmail.com",
            "name": "Kai Jewson",
            "username": "KaiJewson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dc4769708279a076e01a66dc53ec226083c1bdb",
          "message": "sync: add OwnedRwLockReadGuard and OwnedRwLockWriteGuard (#3340)",
          "timestamp": "2021-03-23T13:40:17+01:00",
          "tree_id": "f2176a8959a190799a3da96112d37904a10ad86e",
          "url": "https://github.com/sunjay/tokio/commit/0dc4769708279a076e01a66dc53ec226083c1bdb"
        },
        "date": 1616640986582,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6024856,
            "range": "± 2187674",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5666514,
            "range": "± 1111302",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5743121,
            "range": "± 2005001",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 549,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 545,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 544,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 73616,
            "range": "± 3966",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1245,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 964004,
            "range": "± 8071",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 694477,
            "range": "± 6184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6da67b2e612455e16c11967c762ae802c2ac428",
          "message": "sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}` (#3704)\n\n* sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}`\r\n\r\n## Motivation\r\n\r\nThe `mpsc::Sender::reserve` method currently returns a permit that borrows\r\nfrom the `Sender`. It would be nice to have a version of it that returns\r\nan owned permit.\r\n\r\n## Solution\r\n\r\nThis branch adds an `OwnedPermit` type and `Sender::{reserve_owned,\r\ntry_reserve_owned}` methods. Unlike the comparable methods on\r\n`Semaphore`, these methods do *not* require an `Arc<Sender>` as the\r\nreceiver; this is because the sender internally reference counts the\r\nchannel and is already cheap to clone. Requiring an `Arc` would simply\r\nadd an unnecessary second layer of reference counting, which is not\r\nideal; instead, the documentation encourages the user to clone the\r\nsender prior to calling `reserve_owned` when necessary.\r\n\r\nSince these methods take the `Sender` by value, they also have the ability\r\nto _return_ the `Sender` from a successful `OwnedPermit::send`. This\r\nallows them to be used without additional clones. Essentially, this is a\r\nvery simple type-level encoding of the sender's state, with the\r\ntransitions\r\n```\r\n      ┌──────┐\r\n ┌───►│Sender├───┐\r\n │    └──────┘   │\r\nsend          reserve\r\n │ ┌───────────┐ │\r\n └─┤OwnedPermit│◄┘\r\n   └───────────┘\r\n```\r\n\r\nAdditionally, I added an `OwnedPermit::release`, which returns the\r\n`Sender` and releases the permit *without* sending a message.\r\n\r\nCloses #3688 \r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2021-04-15T12:55:57-07:00",
          "tree_id": "bf29d9dc513a8d80cadd15021e58c979e5f6d691",
          "url": "https://github.com/sunjay/tokio/commit/d6da67b2e612455e16c11967c762ae802c2ac428"
        },
        "date": 1618800857435,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6914175,
            "range": "± 2862413",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6414909,
            "range": "± 1447294",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6319213,
            "range": "± 3122500",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 741,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 786,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 744,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 135447,
            "range": "± 18407",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1622,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 986639,
            "range": "± 173839",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 724628,
            "range": "± 162020",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}