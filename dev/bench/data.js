window.BENCHMARK_DATA = {
  "lastUpdate": 1607313475290,
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
      }
    ]
  }
}