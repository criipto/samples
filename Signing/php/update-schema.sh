#!/bin/bash

curl https://signatures-api.criipto.com/v1/graphql > criipto-signatures.json
npx graphql-json-to-sdl criipto-signatures.json criipto-signatures.graphql