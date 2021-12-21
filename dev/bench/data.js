window.BENCHMARK_DATA = {
  "lastUpdate": 1640086482649,
  "repoUrl": "https://github.com/zcash/halo2_gadgets",
  "entries": {
    "Orchard Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54cdc051fe71eb76cef2a9a4c8c60ee2965888bc",
          "message": "Merge pull request #237 from zcash/orchard-mainnet-circuit\n\nOrchard proposed mainnet circuit",
          "timestamp": "2021-12-20T17:49:57Z",
          "tree_id": "22918a431caa24ea9345e7e9247945f06f8fa29a",
          "url": "https://github.com/zcash/halo2_gadgets/commit/54cdc051fe71eb76cef2a9a4c8c60ee2965888bc"
        },
        "date": 1640086481253,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 7223477449,
            "range": "± 65371065",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 7216621918,
            "range": "± 69332409",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 10560159357,
            "range": "± 110117386",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 12604607687,
            "range": "± 338745194",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 33714341,
            "range": "± 1970602",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 34938914,
            "range": "± 3417531",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 37731879,
            "range": "± 1881772",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 41616346,
            "range": "± 1861537",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1324285,
            "range": "± 51974",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 170227,
            "range": "± 9483",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1020551,
            "range": "± 55400",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 134143741,
            "range": "± 9356013",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 25203456,
            "range": "± 794090",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2704969,
            "range": "± 92874",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 20552700,
            "range": "± 1089480",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2291623,
            "range": "± 122993",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 134059593,
            "range": "± 6902951",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 13355613,
            "range": "± 898393",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 116070941,
            "range": "± 8427217",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 12824557,
            "range": "± 672512",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 274678540,
            "range": "± 6782877",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 27751197,
            "range": "± 1206485",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 237202417,
            "range": "± 11029602",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 27559229,
            "range": "± 1549216",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 42105,
            "range": "± 3206",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 154241,
            "range": "± 8549",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 177856,
            "range": "± 8340",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 293715,
            "range": "± 20554",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 284269,
            "range": "± 14762",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 162101,
            "range": "± 12182",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 172690,
            "range": "± 10767",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 263472,
            "range": "± 16242",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 278400,
            "range": "± 15556",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 321074,
            "range": "± 20794",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 360286,
            "range": "± 33520",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 444387,
            "range": "± 26228",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 434477,
            "range": "± 32310",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 620607,
            "range": "± 21775",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 589648,
            "range": "± 33249",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}