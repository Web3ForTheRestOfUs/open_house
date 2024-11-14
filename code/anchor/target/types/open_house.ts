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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "renter"
              }
            ]
          }
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
          "type": "string"
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
          "type": "string"
        }
      ]
    },
    {
      "name": "validateReview",
      "discriminator": [
        185,
        156,
        66,
        110,
        212,
        32,
        15,
        35
      ],
      "accounts": [
        {
          "name": "review",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "review.property_id",
                "account": "review"
              },
              {
                "kind": "account",
                "path": "review.renter",
                "account": "review"
              }
            ]
          }
        },
        {
          "name": "verifier",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "verifyProperty",
      "discriminator": [
        155,
        196,
        192,
        102,
        122,
        77,
        122,
        207
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
          "name": "verifier",
          "signer": true
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
  "errors": [
    {
      "code": 6000,
      "name": "insufficientFunds",
      "msg": "Insufficient Funds"
    }
  ],
  "types": [
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
            "type": "string"
          },
          {
            "name": "verified",
            "type": "bool"
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
            "name": "validated",
            "type": "bool"
          },
          {
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "renter",
            "type": "pubkey"
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
          }
        ]
      }
    }
  ]
};
