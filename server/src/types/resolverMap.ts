type Resolver = (parent: any, args: any, context: {}, info: any) => any

export interface ResolverMap {
    [key: string]: {
        [key: string]: Resolver
    }
}
