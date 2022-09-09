import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from "./graphql";   // 1

export const schema = makeSchema({
  types,   // 2
  outputs: {
    schema: join(process.cwd(), "schema.graphql"), // 2
    typegen: join(process.cwd(), "nexus-typegen.ts"), // 3
  },
  contextType: {
    module: join(process.cwd(), "./src/context.ts"),  // 1
    export: "Context",  // 2
  },
})