/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/open_house.json`.
 */
export type OpenHouse = {
  "address": "B6g6uSjcFRn9U1p1wv4s7eggzUoFCn7koc2cnonrEZGJ",
  "metadata": {
    "name": "openHouse",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "distributeRewards",
      "discriminator": [
        97,
        6,
        227,
        255,
        124,
        165,
        3,
        148
      ],
      "accounts": [
        {
          "name": "scout",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "scout"
              }
            ]
          }
        },
        {
          "name": "scoutWallet",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "handleLocationReveal",
      "discriminator": [
        87,
        149,
        160,
        93,
        8,
        146,
        24,
        103
      ],
      "accounts": [
        {
          "name": "renter",
          "writable": true
        },
        {
          "name": "scout",
          "writable": true
        },
        {
          "name": "property",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "property.property_id",
                "account": "property"
              }
            ]
          }
        },
        {
          "name": "accessRecord",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "property.property_id",
                "account": "property"
              },
              {
                "kind": "account",
                "path": "renter"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "fee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "registerProperty",
      "discriminator": [
        25,
        115,
        131,
        71,
        59,
        22,
        25,
        16
      ],
      "accounts": [
        {
          "name": "property",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "propertyId"
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "propertyId",
          "type": "string"
        },
        {
          "name": "details",
          "type": {
            "vec": "string"
          }
        },
        {
          "name": "encryptedLocation",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "submitReview",
      "discriminator": [
        106,
        30,
        50,
        83,
        89,
        46,
        213,
        239
      ],
      "accounts": [
        {
          "name": "review",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "account",
                "path": "renter"
              }
            ]
          }
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "reviewContent",
          "type": "string"
        },
        {
          "name": "propertyId",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateProperty",
      "discriminator": [
        232,
        71,
        59,
        188,
        98,
        74,
        94,
        54
      ],
      "accounts": [
        {
          "name": "property",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "property.property_id",
                "account": "property"
              }
            ]
          }
        },
        {
          "name": "owner",
          "signer": true,
          "relations": [
            "property"
          ]
        }
      ],
      "args": [
        {
          "name": "newDetails",
          "type": {
            "vec": "string"
          }
        }
      ]
    },
    {
      "name": "verifyAccess",
      "discriminator": [
        198,
        35,
        119,
        166,
        140,
        214,
        241,
        222
      ],
      "accounts": [
        {
          "name": "accessRecord",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "property.property_id",
                "account": "property"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "property",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "property.property_id",
                "account": "property"
              }
            ]
          }
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "property",
      "discriminator": [
        195,
        247,
        69,
        181,
        195,
        47,
        152,
        19
      ]
    },
    {
      "name": "propertyAccess",
      "discriminator": [
        19,
        7,
        218,
        222,
        166,
        66,
        79,
        255
      ]
    },
    {
      "name": "review",
      "discriminator": [
        124,
        63,
        203,
        215,
        226,
        30,
        222,
        15
      ]
    },
    {
      "name": "user",
      "discriminator": [
        159,
        117,
        95,
        227,
        239,
        151,
        58,
        236
      ]
    }
  ],
  "events": [
    {
      "name": "locationRevealed",
      "discriminator": [
        103,
        211,
        103,
        62,
        164,
        133,
        251,
        18
      ]
    },
    {
      "name": "rewardDistributed",
      "discriminator": [
        36,
        65,
        223,
        38,
        136,
        162,
        10,
        30
      ]
    },
    {
      "name": "voteEvent",
      "discriminator": [
        195,
        71,
        250,
        105,
        120,
        119,
        234,
        134
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "insufficientFunds",
      "msg": "Insufficient Funds"
    },
    {
      "code": 6001,
      "name": "overflow",
      "msg": "Overflow occurred during token operations"
    },
    {
      "code": 6002,
      "name": "unauthorizedAccess",
      "msg": "Unauthorized Access"
    }
  ],
  "types": [
    {
      "name": "locationRevealed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "renter",
            "type": "pubkey"
          },
          {
            "name": "feePaid",
            "type": "u64"
          },
          {
            "name": "remainingBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "property",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "details",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "encryptedLocation",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "propertyAccess",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "review",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "votes",
            "type": "i64"
          },
          {
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "renter",
            "type": "pubkey"
          },
          {
            "name": "votedUsers",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "rewardDistributed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "scout",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "previousBalance",
            "type": "u64"
          },
          {
            "name": "newBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokens",
            "type": "u64"
          },
          {
            "name": "upvotes",
            "type": "u64"
          },
          {
            "name": "key",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "voteEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "review",
            "type": "pubkey"
          },
          {
            "name": "voter",
            "type": "pubkey"
          },
          {
            "name": "voteType",
            "type": {
              "defined": {
                "name": "voteType"
              }
            }
          },
          {
            "name": "newVoteCount",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "voteType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "upvote"
          },
          {
            "name": "downvote"
          }
        ]
      }
    }
  ]
};
