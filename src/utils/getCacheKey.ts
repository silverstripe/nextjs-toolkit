import { getOperationName } from "./graphqlUtils";
import { parse } from "graphql"
// @ts-ignore
import compress from "gql-compress"
// @ts-ignore
import crypto from "crypto-browserify"

// Remove once we figure out how to include types.d.ts in the prebuild
interface StringMap {
    [key: string]: string
}

const getCacheKey = (query: string, variables: StringMap = {}): string | null => {
    const document = parse(query)
    const operationName = getOperationName(document) ?? ``
    const md5sum = crypto.createHash(`md5`)
    md5sum.update(compress(query))
    md5sum.update(JSON.stringify(variables))
    const hash = md5sum.digest(`hex`)

    return `${operationName}--${hash}`
}

export default getCacheKey