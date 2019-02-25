# GraphQL Fields to MongoDB Selections

Convert GraphQL fields to MongoDB selections

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  
  - [Tasks](#Tasks)
    - [convert](#convert)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

Download the source code of this service, and then in the service's folder, run the following command:
```bash
mesg-core service deploy
```

# Definitions


# Tasks

## convert

Task key: `convert`

Convert GraphQL fields to MongoDB selections

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **fields** | `fields` | `Object` | GraphQL fields. e.g.: '[ { name: 'a', fields: [ { name: 'b' } ] }, { name: 'c' } ]' |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Object` | MongoDB selection format. e.g.: '{ a: { b: 1 }, c: 2 }' |


