
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserReference
 * 
 */
export type UserReference = $Result.DefaultSelection<Prisma.$UserReferencePayload>
/**
 * Model SpecialityReference
 * 
 */
export type SpecialityReference = $Result.DefaultSelection<Prisma.$SpecialityReferencePayload>
/**
 * Model CareerReference
 * 
 */
export type CareerReference = $Result.DefaultSelection<Prisma.$CareerReferencePayload>
/**
 * Model SubjectReference
 * 
 */
export type SubjectReference = $Result.DefaultSelection<Prisma.$SubjectReferencePayload>
/**
 * Model TeacherProfile
 * 
 */
export type TeacherProfile = $Result.DefaultSelection<Prisma.$TeacherProfilePayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model SubjectAssignment
 * 
 */
export type SubjectAssignment = $Result.DefaultSelection<Prisma.$SubjectAssignmentPayload>
/**
 * Model StudentSubject
 * 
 */
export type StudentSubject = $Result.DefaultSelection<Prisma.$StudentSubjectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserReferences
 * const userReferences = await prisma.userReference.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserReferences
   * const userReferences = await prisma.userReference.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userReference`: Exposes CRUD operations for the **UserReference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserReferences
    * const userReferences = await prisma.userReference.findMany()
    * ```
    */
  get userReference(): Prisma.UserReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialityReference`: Exposes CRUD operations for the **SpecialityReference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialityReferences
    * const specialityReferences = await prisma.specialityReference.findMany()
    * ```
    */
  get specialityReference(): Prisma.SpecialityReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careerReference`: Exposes CRUD operations for the **CareerReference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareerReferences
    * const careerReferences = await prisma.careerReference.findMany()
    * ```
    */
  get careerReference(): Prisma.CareerReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjectReference`: Exposes CRUD operations for the **SubjectReference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectReferences
    * const subjectReferences = await prisma.subjectReference.findMany()
    * ```
    */
  get subjectReference(): Prisma.SubjectReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherProfile`: Exposes CRUD operations for the **TeacherProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherProfiles
    * const teacherProfiles = await prisma.teacherProfile.findMany()
    * ```
    */
  get teacherProfile(): Prisma.TeacherProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjectAssignment`: Exposes CRUD operations for the **SubjectAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectAssignments
    * const subjectAssignments = await prisma.subjectAssignment.findMany()
    * ```
    */
  get subjectAssignment(): Prisma.SubjectAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSubject`: Exposes CRUD operations for the **StudentSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSubjects
    * const studentSubjects = await prisma.studentSubject.findMany()
    * ```
    */
  get studentSubject(): Prisma.StudentSubjectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserReference: 'UserReference',
    SpecialityReference: 'SpecialityReference',
    CareerReference: 'CareerReference',
    SubjectReference: 'SubjectReference',
    TeacherProfile: 'TeacherProfile',
    StudentProfile: 'StudentProfile',
    SubjectAssignment: 'SubjectAssignment',
    StudentSubject: 'StudentSubject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userReference" | "specialityReference" | "careerReference" | "subjectReference" | "teacherProfile" | "studentProfile" | "subjectAssignment" | "studentSubject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserReference: {
        payload: Prisma.$UserReferencePayload<ExtArgs>
        fields: Prisma.UserReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>
          }
          findFirst: {
            args: Prisma.UserReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>
          }
          findMany: {
            args: Prisma.UserReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>[]
          }
          create: {
            args: Prisma.UserReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>
          }
          createMany: {
            args: Prisma.UserReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>[]
          }
          delete: {
            args: Prisma.UserReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>
          }
          update: {
            args: Prisma.UserReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>
          }
          deleteMany: {
            args: Prisma.UserReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>[]
          }
          upsert: {
            args: Prisma.UserReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReferencePayload>
          }
          aggregate: {
            args: Prisma.UserReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserReference>
          }
          groupBy: {
            args: Prisma.UserReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserReferenceCountAggregateOutputType> | number
          }
        }
      }
      SpecialityReference: {
        payload: Prisma.$SpecialityReferencePayload<ExtArgs>
        fields: Prisma.SpecialityReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialityReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialityReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>
          }
          findFirst: {
            args: Prisma.SpecialityReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialityReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>
          }
          findMany: {
            args: Prisma.SpecialityReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>[]
          }
          create: {
            args: Prisma.SpecialityReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>
          }
          createMany: {
            args: Prisma.SpecialityReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialityReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>[]
          }
          delete: {
            args: Prisma.SpecialityReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>
          }
          update: {
            args: Prisma.SpecialityReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>
          }
          deleteMany: {
            args: Prisma.SpecialityReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialityReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialityReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>[]
          }
          upsert: {
            args: Prisma.SpecialityReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityReferencePayload>
          }
          aggregate: {
            args: Prisma.SpecialityReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialityReference>
          }
          groupBy: {
            args: Prisma.SpecialityReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialityReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialityReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialityReferenceCountAggregateOutputType> | number
          }
        }
      }
      CareerReference: {
        payload: Prisma.$CareerReferencePayload<ExtArgs>
        fields: Prisma.CareerReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>
          }
          findFirst: {
            args: Prisma.CareerReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>
          }
          findMany: {
            args: Prisma.CareerReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>[]
          }
          create: {
            args: Prisma.CareerReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>
          }
          createMany: {
            args: Prisma.CareerReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>[]
          }
          delete: {
            args: Prisma.CareerReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>
          }
          update: {
            args: Prisma.CareerReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>
          }
          deleteMany: {
            args: Prisma.CareerReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>[]
          }
          upsert: {
            args: Prisma.CareerReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerReferencePayload>
          }
          aggregate: {
            args: Prisma.CareerReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareerReference>
          }
          groupBy: {
            args: Prisma.CareerReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<CareerReferenceCountAggregateOutputType> | number
          }
        }
      }
      SubjectReference: {
        payload: Prisma.$SubjectReferencePayload<ExtArgs>
        fields: Prisma.SubjectReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>
          }
          findFirst: {
            args: Prisma.SubjectReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>
          }
          findMany: {
            args: Prisma.SubjectReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>[]
          }
          create: {
            args: Prisma.SubjectReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>
          }
          createMany: {
            args: Prisma.SubjectReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>[]
          }
          delete: {
            args: Prisma.SubjectReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>
          }
          update: {
            args: Prisma.SubjectReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>
          }
          deleteMany: {
            args: Prisma.SubjectReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>[]
          }
          upsert: {
            args: Prisma.SubjectReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectReferencePayload>
          }
          aggregate: {
            args: Prisma.SubjectReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectReference>
          }
          groupBy: {
            args: Prisma.SubjectReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectReferenceCountAggregateOutputType> | number
          }
        }
      }
      TeacherProfile: {
        payload: Prisma.$TeacherProfilePayload<ExtArgs>
        fields: Prisma.TeacherProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          findFirst: {
            args: Prisma.TeacherProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          findMany: {
            args: Prisma.TeacherProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[]
          }
          create: {
            args: Prisma.TeacherProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          createMany: {
            args: Prisma.TeacherProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[]
          }
          delete: {
            args: Prisma.TeacherProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          update: {
            args: Prisma.TeacherProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          deleteMany: {
            args: Prisma.TeacherProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[]
          }
          upsert: {
            args: Prisma.TeacherProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          aggregate: {
            args: Prisma.TeacherProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherProfile>
          }
          groupBy: {
            args: Prisma.TeacherProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherProfileCountAggregateOutputType> | number
          }
        }
      }
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      SubjectAssignment: {
        payload: Prisma.$SubjectAssignmentPayload<ExtArgs>
        fields: Prisma.SubjectAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>
          }
          findFirst: {
            args: Prisma.SubjectAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>
          }
          findMany: {
            args: Prisma.SubjectAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>[]
          }
          create: {
            args: Prisma.SubjectAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>
          }
          createMany: {
            args: Prisma.SubjectAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>[]
          }
          delete: {
            args: Prisma.SubjectAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>
          }
          update: {
            args: Prisma.SubjectAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.SubjectAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.SubjectAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectAssignmentPayload>
          }
          aggregate: {
            args: Prisma.SubjectAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectAssignment>
          }
          groupBy: {
            args: Prisma.SubjectAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectAssignmentCountAggregateOutputType> | number
          }
        }
      }
      StudentSubject: {
        payload: Prisma.$StudentSubjectPayload<ExtArgs>
        fields: Prisma.StudentSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findFirst: {
            args: Prisma.StudentSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findMany: {
            args: Prisma.StudentSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          create: {
            args: Prisma.StudentSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          createMany: {
            args: Prisma.StudentSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          delete: {
            args: Prisma.StudentSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          update: {
            args: Prisma.StudentSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          deleteMany: {
            args: Prisma.StudentSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          upsert: {
            args: Prisma.StudentSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          aggregate: {
            args: Prisma.StudentSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSubject>
          }
          groupBy: {
            args: Prisma.StudentSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userReference?: UserReferenceOmit
    specialityReference?: SpecialityReferenceOmit
    careerReference?: CareerReferenceOmit
    subjectReference?: SubjectReferenceOmit
    teacherProfile?: TeacherProfileOmit
    studentProfile?: StudentProfileOmit
    subjectAssignment?: SubjectAssignmentOmit
    studentSubject?: StudentSubjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SpecialityReferenceCountOutputType
   */

  export type SpecialityReferenceCountOutputType = {
    teachers: number
  }

  export type SpecialityReferenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | SpecialityReferenceCountOutputTypeCountTeachersArgs
  }

  // Custom InputTypes
  /**
   * SpecialityReferenceCountOutputType without action
   */
  export type SpecialityReferenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReferenceCountOutputType
     */
    select?: SpecialityReferenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialityReferenceCountOutputType without action
   */
  export type SpecialityReferenceCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherProfileWhereInput
  }


  /**
   * Count Type CareerReferenceCountOutputType
   */

  export type CareerReferenceCountOutputType = {
    teachers: number
    students: number
  }

  export type CareerReferenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | CareerReferenceCountOutputTypeCountTeachersArgs
    students?: boolean | CareerReferenceCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * CareerReferenceCountOutputType without action
   */
  export type CareerReferenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReferenceCountOutputType
     */
    select?: CareerReferenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareerReferenceCountOutputType without action
   */
  export type CareerReferenceCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherProfileWhereInput
  }

  /**
   * CareerReferenceCountOutputType without action
   */
  export type CareerReferenceCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }


  /**
   * Count Type SubjectReferenceCountOutputType
   */

  export type SubjectReferenceCountOutputType = {
    subjectAssignments: number
    studentSubjects: number
  }

  export type SubjectReferenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectAssignments?: boolean | SubjectReferenceCountOutputTypeCountSubjectAssignmentsArgs
    studentSubjects?: boolean | SubjectReferenceCountOutputTypeCountStudentSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectReferenceCountOutputType without action
   */
  export type SubjectReferenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReferenceCountOutputType
     */
    select?: SubjectReferenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectReferenceCountOutputType without action
   */
  export type SubjectReferenceCountOutputTypeCountSubjectAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectAssignmentWhereInput
  }

  /**
   * SubjectReferenceCountOutputType without action
   */
  export type SubjectReferenceCountOutputTypeCountStudentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Count Type TeacherProfileCountOutputType
   */

  export type TeacherProfileCountOutputType = {
    subjects: number
  }

  export type TeacherProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | TeacherProfileCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * TeacherProfileCountOutputType without action
   */
  export type TeacherProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfileCountOutputType
     */
    select?: TeacherProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherProfileCountOutputType without action
   */
  export type TeacherProfileCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectAssignmentWhereInput
  }


  /**
   * Count Type StudentProfileCountOutputType
   */

  export type StudentProfileCountOutputType = {
    studentSubjects: number
  }

  export type StudentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSubjects?: boolean | StudentProfileCountOutputTypeCountStudentSubjectsArgs
  }

  // Custom InputTypes
  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     */
    select?: StudentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountStudentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserReference
   */

  export type AggregateUserReference = {
    _count: UserReferenceCountAggregateOutputType | null
    _avg: UserReferenceAvgAggregateOutputType | null
    _sum: UserReferenceSumAggregateOutputType | null
    _min: UserReferenceMinAggregateOutputType | null
    _max: UserReferenceMaxAggregateOutputType | null
  }

  export type UserReferenceAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserReferenceSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserReferenceMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    roleId: number | null
    status: string | null
    syncedAt: Date | null
    updatedAt: Date | null
  }

  export type UserReferenceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    roleId: number | null
    status: string | null
    syncedAt: Date | null
    updatedAt: Date | null
  }

  export type UserReferenceCountAggregateOutputType = {
    id: number
    name: number
    email: number
    roleId: number
    status: number
    syncedAt: number
    updatedAt: number
    _all: number
  }


  export type UserReferenceAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserReferenceSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserReferenceMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleId?: true
    status?: true
    syncedAt?: true
    updatedAt?: true
  }

  export type UserReferenceMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleId?: true
    status?: true
    syncedAt?: true
    updatedAt?: true
  }

  export type UserReferenceCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleId?: true
    status?: true
    syncedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReference to aggregate.
     */
    where?: UserReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReferences to fetch.
     */
    orderBy?: UserReferenceOrderByWithRelationInput | UserReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserReferences
    **/
    _count?: true | UserReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserReferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserReferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserReferenceMaxAggregateInputType
  }

  export type GetUserReferenceAggregateType<T extends UserReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReference[P]>
      : GetScalarType<T[P], AggregateUserReference[P]>
  }




  export type UserReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReferenceWhereInput
    orderBy?: UserReferenceOrderByWithAggregationInput | UserReferenceOrderByWithAggregationInput[]
    by: UserReferenceScalarFieldEnum[] | UserReferenceScalarFieldEnum
    having?: UserReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserReferenceCountAggregateInputType | true
    _avg?: UserReferenceAvgAggregateInputType
    _sum?: UserReferenceSumAggregateInputType
    _min?: UserReferenceMinAggregateInputType
    _max?: UserReferenceMaxAggregateInputType
  }

  export type UserReferenceGroupByOutputType = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt: Date
    updatedAt: Date
    _count: UserReferenceCountAggregateOutputType | null
    _avg: UserReferenceAvgAggregateOutputType | null
    _sum: UserReferenceSumAggregateOutputType | null
    _min: UserReferenceMinAggregateOutputType | null
    _max: UserReferenceMaxAggregateOutputType | null
  }

  type GetUserReferenceGroupByPayload<T extends UserReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserReferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    status?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
    teacherProfile?: boolean | UserReference$teacherProfileArgs<ExtArgs>
    studentProfile?: boolean | UserReference$studentProfileArgs<ExtArgs>
  }, ExtArgs["result"]["userReference"]>

  export type UserReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    status?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userReference"]>

  export type UserReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    status?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userReference"]>

  export type UserReferenceSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    status?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
  }

  export type UserReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "roleId" | "status" | "syncedAt" | "updatedAt", ExtArgs["result"]["userReference"]>
  export type UserReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherProfile?: boolean | UserReference$teacherProfileArgs<ExtArgs>
    studentProfile?: boolean | UserReference$studentProfileArgs<ExtArgs>
  }
  export type UserReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReference"
    objects: {
      teacherProfile: Prisma.$TeacherProfilePayload<ExtArgs> | null
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      roleId: number
      status: string
      syncedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userReference"]>
    composites: {}
  }

  type UserReferenceGetPayload<S extends boolean | null | undefined | UserReferenceDefaultArgs> = $Result.GetResult<Prisma.$UserReferencePayload, S>

  type UserReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserReferenceCountAggregateInputType | true
    }

  export interface UserReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReference'], meta: { name: 'UserReference' } }
    /**
     * Find zero or one UserReference that matches the filter.
     * @param {UserReferenceFindUniqueArgs} args - Arguments to find a UserReference
     * @example
     * // Get one UserReference
     * const userReference = await prisma.userReference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserReferenceFindUniqueArgs>(args: SelectSubset<T, UserReferenceFindUniqueArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserReference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserReferenceFindUniqueOrThrowArgs} args - Arguments to find a UserReference
     * @example
     * // Get one UserReference
     * const userReference = await prisma.userReference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReferenceFindFirstArgs} args - Arguments to find a UserReference
     * @example
     * // Get one UserReference
     * const userReference = await prisma.userReference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserReferenceFindFirstArgs>(args?: SelectSubset<T, UserReferenceFindFirstArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReferenceFindFirstOrThrowArgs} args - Arguments to find a UserReference
     * @example
     * // Get one UserReference
     * const userReference = await prisma.userReference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserReferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserReferences
     * const userReferences = await prisma.userReference.findMany()
     * 
     * // Get first 10 UserReferences
     * const userReferences = await prisma.userReference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userReferenceWithIdOnly = await prisma.userReference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserReferenceFindManyArgs>(args?: SelectSubset<T, UserReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserReference.
     * @param {UserReferenceCreateArgs} args - Arguments to create a UserReference.
     * @example
     * // Create one UserReference
     * const UserReference = await prisma.userReference.create({
     *   data: {
     *     // ... data to create a UserReference
     *   }
     * })
     * 
     */
    create<T extends UserReferenceCreateArgs>(args: SelectSubset<T, UserReferenceCreateArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserReferences.
     * @param {UserReferenceCreateManyArgs} args - Arguments to create many UserReferences.
     * @example
     * // Create many UserReferences
     * const userReference = await prisma.userReference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserReferenceCreateManyArgs>(args?: SelectSubset<T, UserReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserReferences and returns the data saved in the database.
     * @param {UserReferenceCreateManyAndReturnArgs} args - Arguments to create many UserReferences.
     * @example
     * // Create many UserReferences
     * const userReference = await prisma.userReference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserReferences and only return the `id`
     * const userReferenceWithIdOnly = await prisma.userReference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserReference.
     * @param {UserReferenceDeleteArgs} args - Arguments to delete one UserReference.
     * @example
     * // Delete one UserReference
     * const UserReference = await prisma.userReference.delete({
     *   where: {
     *     // ... filter to delete one UserReference
     *   }
     * })
     * 
     */
    delete<T extends UserReferenceDeleteArgs>(args: SelectSubset<T, UserReferenceDeleteArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserReference.
     * @param {UserReferenceUpdateArgs} args - Arguments to update one UserReference.
     * @example
     * // Update one UserReference
     * const userReference = await prisma.userReference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserReferenceUpdateArgs>(args: SelectSubset<T, UserReferenceUpdateArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserReferences.
     * @param {UserReferenceDeleteManyArgs} args - Arguments to filter UserReferences to delete.
     * @example
     * // Delete a few UserReferences
     * const { count } = await prisma.userReference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserReferenceDeleteManyArgs>(args?: SelectSubset<T, UserReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserReferences
     * const userReference = await prisma.userReference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserReferenceUpdateManyArgs>(args: SelectSubset<T, UserReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReferences and returns the data updated in the database.
     * @param {UserReferenceUpdateManyAndReturnArgs} args - Arguments to update many UserReferences.
     * @example
     * // Update many UserReferences
     * const userReference = await prisma.userReference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserReferences and only return the `id`
     * const userReferenceWithIdOnly = await prisma.userReference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserReference.
     * @param {UserReferenceUpsertArgs} args - Arguments to update or create a UserReference.
     * @example
     * // Update or create a UserReference
     * const userReference = await prisma.userReference.upsert({
     *   create: {
     *     // ... data to create a UserReference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReference we want to update
     *   }
     * })
     */
    upsert<T extends UserReferenceUpsertArgs>(args: SelectSubset<T, UserReferenceUpsertArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReferenceCountArgs} args - Arguments to filter UserReferences to count.
     * @example
     * // Count the number of UserReferences
     * const count = await prisma.userReference.count({
     *   where: {
     *     // ... the filter for the UserReferences we want to count
     *   }
     * })
    **/
    count<T extends UserReferenceCountArgs>(
      args?: Subset<T, UserReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserReferenceAggregateArgs>(args: Subset<T, UserReferenceAggregateArgs>): Prisma.PrismaPromise<GetUserReferenceAggregateType<T>>

    /**
     * Group by UserReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserReferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserReferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReference model
   */
  readonly fields: UserReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherProfile<T extends UserReference$teacherProfileArgs<ExtArgs> = {}>(args?: Subset<T, UserReference$teacherProfileArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    studentProfile<T extends UserReference$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, UserReference$studentProfileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserReference model
   */
  interface UserReferenceFieldRefs {
    readonly id: FieldRef<"UserReference", 'Int'>
    readonly name: FieldRef<"UserReference", 'String'>
    readonly email: FieldRef<"UserReference", 'String'>
    readonly roleId: FieldRef<"UserReference", 'Int'>
    readonly status: FieldRef<"UserReference", 'String'>
    readonly syncedAt: FieldRef<"UserReference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserReference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserReference findUnique
   */
  export type UserReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserReference to fetch.
     */
    where: UserReferenceWhereUniqueInput
  }

  /**
   * UserReference findUniqueOrThrow
   */
  export type UserReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserReference to fetch.
     */
    where: UserReferenceWhereUniqueInput
  }

  /**
   * UserReference findFirst
   */
  export type UserReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserReference to fetch.
     */
    where?: UserReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReferences to fetch.
     */
    orderBy?: UserReferenceOrderByWithRelationInput | UserReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReferences.
     */
    cursor?: UserReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReferences.
     */
    distinct?: UserReferenceScalarFieldEnum | UserReferenceScalarFieldEnum[]
  }

  /**
   * UserReference findFirstOrThrow
   */
  export type UserReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserReference to fetch.
     */
    where?: UserReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReferences to fetch.
     */
    orderBy?: UserReferenceOrderByWithRelationInput | UserReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReferences.
     */
    cursor?: UserReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReferences.
     */
    distinct?: UserReferenceScalarFieldEnum | UserReferenceScalarFieldEnum[]
  }

  /**
   * UserReference findMany
   */
  export type UserReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserReferences to fetch.
     */
    where?: UserReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReferences to fetch.
     */
    orderBy?: UserReferenceOrderByWithRelationInput | UserReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserReferences.
     */
    cursor?: UserReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReferences.
     */
    skip?: number
    distinct?: UserReferenceScalarFieldEnum | UserReferenceScalarFieldEnum[]
  }

  /**
   * UserReference create
   */
  export type UserReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReference.
     */
    data: XOR<UserReferenceCreateInput, UserReferenceUncheckedCreateInput>
  }

  /**
   * UserReference createMany
   */
  export type UserReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserReferences.
     */
    data: UserReferenceCreateManyInput | UserReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserReference createManyAndReturn
   */
  export type UserReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserReferences.
     */
    data: UserReferenceCreateManyInput | UserReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserReference update
   */
  export type UserReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReference.
     */
    data: XOR<UserReferenceUpdateInput, UserReferenceUncheckedUpdateInput>
    /**
     * Choose, which UserReference to update.
     */
    where: UserReferenceWhereUniqueInput
  }

  /**
   * UserReference updateMany
   */
  export type UserReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserReferences.
     */
    data: XOR<UserReferenceUpdateManyMutationInput, UserReferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserReferences to update
     */
    where?: UserReferenceWhereInput
    /**
     * Limit how many UserReferences to update.
     */
    limit?: number
  }

  /**
   * UserReference updateManyAndReturn
   */
  export type UserReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserReferences.
     */
    data: XOR<UserReferenceUpdateManyMutationInput, UserReferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserReferences to update
     */
    where?: UserReferenceWhereInput
    /**
     * Limit how many UserReferences to update.
     */
    limit?: number
  }

  /**
   * UserReference upsert
   */
  export type UserReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReference to update in case it exists.
     */
    where: UserReferenceWhereUniqueInput
    /**
     * In case the UserReference found by the `where` argument doesn't exist, create a new UserReference with this data.
     */
    create: XOR<UserReferenceCreateInput, UserReferenceUncheckedCreateInput>
    /**
     * In case the UserReference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserReferenceUpdateInput, UserReferenceUncheckedUpdateInput>
  }

  /**
   * UserReference delete
   */
  export type UserReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
    /**
     * Filter which UserReference to delete.
     */
    where: UserReferenceWhereUniqueInput
  }

  /**
   * UserReference deleteMany
   */
  export type UserReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReferences to delete
     */
    where?: UserReferenceWhereInput
    /**
     * Limit how many UserReferences to delete.
     */
    limit?: number
  }

  /**
   * UserReference.teacherProfile
   */
  export type UserReference$teacherProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    where?: TeacherProfileWhereInput
  }

  /**
   * UserReference.studentProfile
   */
  export type UserReference$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * UserReference without action
   */
  export type UserReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReference
     */
    select?: UserReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReference
     */
    omit?: UserReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReferenceInclude<ExtArgs> | null
  }


  /**
   * Model SpecialityReference
   */

  export type AggregateSpecialityReference = {
    _count: SpecialityReferenceCountAggregateOutputType | null
    _avg: SpecialityReferenceAvgAggregateOutputType | null
    _sum: SpecialityReferenceSumAggregateOutputType | null
    _min: SpecialityReferenceMinAggregateOutputType | null
    _max: SpecialityReferenceMaxAggregateOutputType | null
  }

  export type SpecialityReferenceAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialityReferenceSumAggregateOutputType = {
    id: number | null
  }

  export type SpecialityReferenceMinAggregateOutputType = {
    id: number | null
    name: string | null
    syncedAt: Date | null
  }

  export type SpecialityReferenceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    syncedAt: Date | null
  }

  export type SpecialityReferenceCountAggregateOutputType = {
    id: number
    name: number
    syncedAt: number
    _all: number
  }


  export type SpecialityReferenceAvgAggregateInputType = {
    id?: true
  }

  export type SpecialityReferenceSumAggregateInputType = {
    id?: true
  }

  export type SpecialityReferenceMinAggregateInputType = {
    id?: true
    name?: true
    syncedAt?: true
  }

  export type SpecialityReferenceMaxAggregateInputType = {
    id?: true
    name?: true
    syncedAt?: true
  }

  export type SpecialityReferenceCountAggregateInputType = {
    id?: true
    name?: true
    syncedAt?: true
    _all?: true
  }

  export type SpecialityReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialityReference to aggregate.
     */
    where?: SpecialityReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityReferences to fetch.
     */
    orderBy?: SpecialityReferenceOrderByWithRelationInput | SpecialityReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialityReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialityReferences
    **/
    _count?: true | SpecialityReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialityReferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialityReferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialityReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialityReferenceMaxAggregateInputType
  }

  export type GetSpecialityReferenceAggregateType<T extends SpecialityReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialityReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialityReference[P]>
      : GetScalarType<T[P], AggregateSpecialityReference[P]>
  }




  export type SpecialityReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialityReferenceWhereInput
    orderBy?: SpecialityReferenceOrderByWithAggregationInput | SpecialityReferenceOrderByWithAggregationInput[]
    by: SpecialityReferenceScalarFieldEnum[] | SpecialityReferenceScalarFieldEnum
    having?: SpecialityReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialityReferenceCountAggregateInputType | true
    _avg?: SpecialityReferenceAvgAggregateInputType
    _sum?: SpecialityReferenceSumAggregateInputType
    _min?: SpecialityReferenceMinAggregateInputType
    _max?: SpecialityReferenceMaxAggregateInputType
  }

  export type SpecialityReferenceGroupByOutputType = {
    id: number
    name: string
    syncedAt: Date
    _count: SpecialityReferenceCountAggregateOutputType | null
    _avg: SpecialityReferenceAvgAggregateOutputType | null
    _sum: SpecialityReferenceSumAggregateOutputType | null
    _min: SpecialityReferenceMinAggregateOutputType | null
    _max: SpecialityReferenceMaxAggregateOutputType | null
  }

  type GetSpecialityReferenceGroupByPayload<T extends SpecialityReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialityReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialityReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialityReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialityReferenceGroupByOutputType[P]>
        }
      >
    >


  export type SpecialityReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    syncedAt?: boolean
    teachers?: boolean | SpecialityReference$teachersArgs<ExtArgs>
    _count?: boolean | SpecialityReferenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialityReference"]>

  export type SpecialityReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    syncedAt?: boolean
  }, ExtArgs["result"]["specialityReference"]>

  export type SpecialityReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    syncedAt?: boolean
  }, ExtArgs["result"]["specialityReference"]>

  export type SpecialityReferenceSelectScalar = {
    id?: boolean
    name?: boolean
    syncedAt?: boolean
  }

  export type SpecialityReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "syncedAt", ExtArgs["result"]["specialityReference"]>
  export type SpecialityReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | SpecialityReference$teachersArgs<ExtArgs>
    _count?: boolean | SpecialityReferenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialityReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialityReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialityReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialityReference"
    objects: {
      teachers: Prisma.$TeacherProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      syncedAt: Date
    }, ExtArgs["result"]["specialityReference"]>
    composites: {}
  }

  type SpecialityReferenceGetPayload<S extends boolean | null | undefined | SpecialityReferenceDefaultArgs> = $Result.GetResult<Prisma.$SpecialityReferencePayload, S>

  type SpecialityReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialityReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialityReferenceCountAggregateInputType | true
    }

  export interface SpecialityReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialityReference'], meta: { name: 'SpecialityReference' } }
    /**
     * Find zero or one SpecialityReference that matches the filter.
     * @param {SpecialityReferenceFindUniqueArgs} args - Arguments to find a SpecialityReference
     * @example
     * // Get one SpecialityReference
     * const specialityReference = await prisma.specialityReference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialityReferenceFindUniqueArgs>(args: SelectSubset<T, SpecialityReferenceFindUniqueArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialityReference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialityReferenceFindUniqueOrThrowArgs} args - Arguments to find a SpecialityReference
     * @example
     * // Get one SpecialityReference
     * const specialityReference = await prisma.specialityReference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialityReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialityReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialityReference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityReferenceFindFirstArgs} args - Arguments to find a SpecialityReference
     * @example
     * // Get one SpecialityReference
     * const specialityReference = await prisma.specialityReference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialityReferenceFindFirstArgs>(args?: SelectSubset<T, SpecialityReferenceFindFirstArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialityReference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityReferenceFindFirstOrThrowArgs} args - Arguments to find a SpecialityReference
     * @example
     * // Get one SpecialityReference
     * const specialityReference = await prisma.specialityReference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialityReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialityReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialityReferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialityReferences
     * const specialityReferences = await prisma.specialityReference.findMany()
     * 
     * // Get first 10 SpecialityReferences
     * const specialityReferences = await prisma.specialityReference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialityReferenceWithIdOnly = await prisma.specialityReference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialityReferenceFindManyArgs>(args?: SelectSubset<T, SpecialityReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialityReference.
     * @param {SpecialityReferenceCreateArgs} args - Arguments to create a SpecialityReference.
     * @example
     * // Create one SpecialityReference
     * const SpecialityReference = await prisma.specialityReference.create({
     *   data: {
     *     // ... data to create a SpecialityReference
     *   }
     * })
     * 
     */
    create<T extends SpecialityReferenceCreateArgs>(args: SelectSubset<T, SpecialityReferenceCreateArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialityReferences.
     * @param {SpecialityReferenceCreateManyArgs} args - Arguments to create many SpecialityReferences.
     * @example
     * // Create many SpecialityReferences
     * const specialityReference = await prisma.specialityReference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialityReferenceCreateManyArgs>(args?: SelectSubset<T, SpecialityReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecialityReferences and returns the data saved in the database.
     * @param {SpecialityReferenceCreateManyAndReturnArgs} args - Arguments to create many SpecialityReferences.
     * @example
     * // Create many SpecialityReferences
     * const specialityReference = await prisma.specialityReference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecialityReferences and only return the `id`
     * const specialityReferenceWithIdOnly = await prisma.specialityReference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialityReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialityReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecialityReference.
     * @param {SpecialityReferenceDeleteArgs} args - Arguments to delete one SpecialityReference.
     * @example
     * // Delete one SpecialityReference
     * const SpecialityReference = await prisma.specialityReference.delete({
     *   where: {
     *     // ... filter to delete one SpecialityReference
     *   }
     * })
     * 
     */
    delete<T extends SpecialityReferenceDeleteArgs>(args: SelectSubset<T, SpecialityReferenceDeleteArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialityReference.
     * @param {SpecialityReferenceUpdateArgs} args - Arguments to update one SpecialityReference.
     * @example
     * // Update one SpecialityReference
     * const specialityReference = await prisma.specialityReference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialityReferenceUpdateArgs>(args: SelectSubset<T, SpecialityReferenceUpdateArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialityReferences.
     * @param {SpecialityReferenceDeleteManyArgs} args - Arguments to filter SpecialityReferences to delete.
     * @example
     * // Delete a few SpecialityReferences
     * const { count } = await prisma.specialityReference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialityReferenceDeleteManyArgs>(args?: SelectSubset<T, SpecialityReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialityReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialityReferences
     * const specialityReference = await prisma.specialityReference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialityReferenceUpdateManyArgs>(args: SelectSubset<T, SpecialityReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialityReferences and returns the data updated in the database.
     * @param {SpecialityReferenceUpdateManyAndReturnArgs} args - Arguments to update many SpecialityReferences.
     * @example
     * // Update many SpecialityReferences
     * const specialityReference = await prisma.specialityReference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecialityReferences and only return the `id`
     * const specialityReferenceWithIdOnly = await prisma.specialityReference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialityReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialityReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecialityReference.
     * @param {SpecialityReferenceUpsertArgs} args - Arguments to update or create a SpecialityReference.
     * @example
     * // Update or create a SpecialityReference
     * const specialityReference = await prisma.specialityReference.upsert({
     *   create: {
     *     // ... data to create a SpecialityReference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialityReference we want to update
     *   }
     * })
     */
    upsert<T extends SpecialityReferenceUpsertArgs>(args: SelectSubset<T, SpecialityReferenceUpsertArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialityReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityReferenceCountArgs} args - Arguments to filter SpecialityReferences to count.
     * @example
     * // Count the number of SpecialityReferences
     * const count = await prisma.specialityReference.count({
     *   where: {
     *     // ... the filter for the SpecialityReferences we want to count
     *   }
     * })
    **/
    count<T extends SpecialityReferenceCountArgs>(
      args?: Subset<T, SpecialityReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialityReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialityReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialityReferenceAggregateArgs>(args: Subset<T, SpecialityReferenceAggregateArgs>): Prisma.PrismaPromise<GetSpecialityReferenceAggregateType<T>>

    /**
     * Group by SpecialityReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityReferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialityReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialityReferenceGroupByArgs['orderBy'] }
        : { orderBy?: SpecialityReferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialityReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialityReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialityReference model
   */
  readonly fields: SpecialityReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialityReference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialityReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachers<T extends SpecialityReference$teachersArgs<ExtArgs> = {}>(args?: Subset<T, SpecialityReference$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecialityReference model
   */
  interface SpecialityReferenceFieldRefs {
    readonly id: FieldRef<"SpecialityReference", 'Int'>
    readonly name: FieldRef<"SpecialityReference", 'String'>
    readonly syncedAt: FieldRef<"SpecialityReference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpecialityReference findUnique
   */
  export type SpecialityReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityReference to fetch.
     */
    where: SpecialityReferenceWhereUniqueInput
  }

  /**
   * SpecialityReference findUniqueOrThrow
   */
  export type SpecialityReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityReference to fetch.
     */
    where: SpecialityReferenceWhereUniqueInput
  }

  /**
   * SpecialityReference findFirst
   */
  export type SpecialityReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityReference to fetch.
     */
    where?: SpecialityReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityReferences to fetch.
     */
    orderBy?: SpecialityReferenceOrderByWithRelationInput | SpecialityReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialityReferences.
     */
    cursor?: SpecialityReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialityReferences.
     */
    distinct?: SpecialityReferenceScalarFieldEnum | SpecialityReferenceScalarFieldEnum[]
  }

  /**
   * SpecialityReference findFirstOrThrow
   */
  export type SpecialityReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityReference to fetch.
     */
    where?: SpecialityReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityReferences to fetch.
     */
    orderBy?: SpecialityReferenceOrderByWithRelationInput | SpecialityReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialityReferences.
     */
    cursor?: SpecialityReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialityReferences.
     */
    distinct?: SpecialityReferenceScalarFieldEnum | SpecialityReferenceScalarFieldEnum[]
  }

  /**
   * SpecialityReference findMany
   */
  export type SpecialityReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityReferences to fetch.
     */
    where?: SpecialityReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityReferences to fetch.
     */
    orderBy?: SpecialityReferenceOrderByWithRelationInput | SpecialityReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialityReferences.
     */
    cursor?: SpecialityReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityReferences.
     */
    skip?: number
    distinct?: SpecialityReferenceScalarFieldEnum | SpecialityReferenceScalarFieldEnum[]
  }

  /**
   * SpecialityReference create
   */
  export type SpecialityReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialityReference.
     */
    data: XOR<SpecialityReferenceCreateInput, SpecialityReferenceUncheckedCreateInput>
  }

  /**
   * SpecialityReference createMany
   */
  export type SpecialityReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialityReferences.
     */
    data: SpecialityReferenceCreateManyInput | SpecialityReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialityReference createManyAndReturn
   */
  export type SpecialityReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many SpecialityReferences.
     */
    data: SpecialityReferenceCreateManyInput | SpecialityReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialityReference update
   */
  export type SpecialityReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialityReference.
     */
    data: XOR<SpecialityReferenceUpdateInput, SpecialityReferenceUncheckedUpdateInput>
    /**
     * Choose, which SpecialityReference to update.
     */
    where: SpecialityReferenceWhereUniqueInput
  }

  /**
   * SpecialityReference updateMany
   */
  export type SpecialityReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialityReferences.
     */
    data: XOR<SpecialityReferenceUpdateManyMutationInput, SpecialityReferenceUncheckedUpdateManyInput>
    /**
     * Filter which SpecialityReferences to update
     */
    where?: SpecialityReferenceWhereInput
    /**
     * Limit how many SpecialityReferences to update.
     */
    limit?: number
  }

  /**
   * SpecialityReference updateManyAndReturn
   */
  export type SpecialityReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * The data used to update SpecialityReferences.
     */
    data: XOR<SpecialityReferenceUpdateManyMutationInput, SpecialityReferenceUncheckedUpdateManyInput>
    /**
     * Filter which SpecialityReferences to update
     */
    where?: SpecialityReferenceWhereInput
    /**
     * Limit how many SpecialityReferences to update.
     */
    limit?: number
  }

  /**
   * SpecialityReference upsert
   */
  export type SpecialityReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialityReference to update in case it exists.
     */
    where: SpecialityReferenceWhereUniqueInput
    /**
     * In case the SpecialityReference found by the `where` argument doesn't exist, create a new SpecialityReference with this data.
     */
    create: XOR<SpecialityReferenceCreateInput, SpecialityReferenceUncheckedCreateInput>
    /**
     * In case the SpecialityReference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialityReferenceUpdateInput, SpecialityReferenceUncheckedUpdateInput>
  }

  /**
   * SpecialityReference delete
   */
  export type SpecialityReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
    /**
     * Filter which SpecialityReference to delete.
     */
    where: SpecialityReferenceWhereUniqueInput
  }

  /**
   * SpecialityReference deleteMany
   */
  export type SpecialityReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialityReferences to delete
     */
    where?: SpecialityReferenceWhereInput
    /**
     * Limit how many SpecialityReferences to delete.
     */
    limit?: number
  }

  /**
   * SpecialityReference.teachers
   */
  export type SpecialityReference$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    where?: TeacherProfileWhereInput
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    cursor?: TeacherProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * SpecialityReference without action
   */
  export type SpecialityReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityReference
     */
    select?: SpecialityReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityReference
     */
    omit?: SpecialityReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityReferenceInclude<ExtArgs> | null
  }


  /**
   * Model CareerReference
   */

  export type AggregateCareerReference = {
    _count: CareerReferenceCountAggregateOutputType | null
    _avg: CareerReferenceAvgAggregateOutputType | null
    _sum: CareerReferenceSumAggregateOutputType | null
    _min: CareerReferenceMinAggregateOutputType | null
    _max: CareerReferenceMaxAggregateOutputType | null
  }

  export type CareerReferenceAvgAggregateOutputType = {
    id: number | null
    totalCicles: number | null
  }

  export type CareerReferenceSumAggregateOutputType = {
    id: number | null
    totalCicles: number | null
  }

  export type CareerReferenceMinAggregateOutputType = {
    id: number | null
    name: string | null
    totalCicles: number | null
    syncedAt: Date | null
  }

  export type CareerReferenceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    totalCicles: number | null
    syncedAt: Date | null
  }

  export type CareerReferenceCountAggregateOutputType = {
    id: number
    name: number
    totalCicles: number
    syncedAt: number
    _all: number
  }


  export type CareerReferenceAvgAggregateInputType = {
    id?: true
    totalCicles?: true
  }

  export type CareerReferenceSumAggregateInputType = {
    id?: true
    totalCicles?: true
  }

  export type CareerReferenceMinAggregateInputType = {
    id?: true
    name?: true
    totalCicles?: true
    syncedAt?: true
  }

  export type CareerReferenceMaxAggregateInputType = {
    id?: true
    name?: true
    totalCicles?: true
    syncedAt?: true
  }

  export type CareerReferenceCountAggregateInputType = {
    id?: true
    name?: true
    totalCicles?: true
    syncedAt?: true
    _all?: true
  }

  export type CareerReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerReference to aggregate.
     */
    where?: CareerReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerReferences to fetch.
     */
    orderBy?: CareerReferenceOrderByWithRelationInput | CareerReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareerReferences
    **/
    _count?: true | CareerReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerReferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerReferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerReferenceMaxAggregateInputType
  }

  export type GetCareerReferenceAggregateType<T extends CareerReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateCareerReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareerReference[P]>
      : GetScalarType<T[P], AggregateCareerReference[P]>
  }




  export type CareerReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerReferenceWhereInput
    orderBy?: CareerReferenceOrderByWithAggregationInput | CareerReferenceOrderByWithAggregationInput[]
    by: CareerReferenceScalarFieldEnum[] | CareerReferenceScalarFieldEnum
    having?: CareerReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerReferenceCountAggregateInputType | true
    _avg?: CareerReferenceAvgAggregateInputType
    _sum?: CareerReferenceSumAggregateInputType
    _min?: CareerReferenceMinAggregateInputType
    _max?: CareerReferenceMaxAggregateInputType
  }

  export type CareerReferenceGroupByOutputType = {
    id: number
    name: string
    totalCicles: number
    syncedAt: Date
    _count: CareerReferenceCountAggregateOutputType | null
    _avg: CareerReferenceAvgAggregateOutputType | null
    _sum: CareerReferenceSumAggregateOutputType | null
    _min: CareerReferenceMinAggregateOutputType | null
    _max: CareerReferenceMaxAggregateOutputType | null
  }

  type GetCareerReferenceGroupByPayload<T extends CareerReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], CareerReferenceGroupByOutputType[P]>
        }
      >
    >


  export type CareerReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalCicles?: boolean
    syncedAt?: boolean
    teachers?: boolean | CareerReference$teachersArgs<ExtArgs>
    students?: boolean | CareerReference$studentsArgs<ExtArgs>
    _count?: boolean | CareerReferenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerReference"]>

  export type CareerReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalCicles?: boolean
    syncedAt?: boolean
  }, ExtArgs["result"]["careerReference"]>

  export type CareerReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalCicles?: boolean
    syncedAt?: boolean
  }, ExtArgs["result"]["careerReference"]>

  export type CareerReferenceSelectScalar = {
    id?: boolean
    name?: boolean
    totalCicles?: boolean
    syncedAt?: boolean
  }

  export type CareerReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "totalCicles" | "syncedAt", ExtArgs["result"]["careerReference"]>
  export type CareerReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | CareerReference$teachersArgs<ExtArgs>
    students?: boolean | CareerReference$studentsArgs<ExtArgs>
    _count?: boolean | CareerReferenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareerReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CareerReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CareerReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareerReference"
    objects: {
      teachers: Prisma.$TeacherProfilePayload<ExtArgs>[]
      students: Prisma.$StudentProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      totalCicles: number
      syncedAt: Date
    }, ExtArgs["result"]["careerReference"]>
    composites: {}
  }

  type CareerReferenceGetPayload<S extends boolean | null | undefined | CareerReferenceDefaultArgs> = $Result.GetResult<Prisma.$CareerReferencePayload, S>

  type CareerReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerReferenceCountAggregateInputType | true
    }

  export interface CareerReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareerReference'], meta: { name: 'CareerReference' } }
    /**
     * Find zero or one CareerReference that matches the filter.
     * @param {CareerReferenceFindUniqueArgs} args - Arguments to find a CareerReference
     * @example
     * // Get one CareerReference
     * const careerReference = await prisma.careerReference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerReferenceFindUniqueArgs>(args: SelectSubset<T, CareerReferenceFindUniqueArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareerReference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerReferenceFindUniqueOrThrowArgs} args - Arguments to find a CareerReference
     * @example
     * // Get one CareerReference
     * const careerReference = await prisma.careerReference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerReference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerReferenceFindFirstArgs} args - Arguments to find a CareerReference
     * @example
     * // Get one CareerReference
     * const careerReference = await prisma.careerReference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerReferenceFindFirstArgs>(args?: SelectSubset<T, CareerReferenceFindFirstArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerReference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerReferenceFindFirstOrThrowArgs} args - Arguments to find a CareerReference
     * @example
     * // Get one CareerReference
     * const careerReference = await prisma.careerReference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareerReferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareerReferences
     * const careerReferences = await prisma.careerReference.findMany()
     * 
     * // Get first 10 CareerReferences
     * const careerReferences = await prisma.careerReference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerReferenceWithIdOnly = await prisma.careerReference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerReferenceFindManyArgs>(args?: SelectSubset<T, CareerReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareerReference.
     * @param {CareerReferenceCreateArgs} args - Arguments to create a CareerReference.
     * @example
     * // Create one CareerReference
     * const CareerReference = await prisma.careerReference.create({
     *   data: {
     *     // ... data to create a CareerReference
     *   }
     * })
     * 
     */
    create<T extends CareerReferenceCreateArgs>(args: SelectSubset<T, CareerReferenceCreateArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareerReferences.
     * @param {CareerReferenceCreateManyArgs} args - Arguments to create many CareerReferences.
     * @example
     * // Create many CareerReferences
     * const careerReference = await prisma.careerReference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerReferenceCreateManyArgs>(args?: SelectSubset<T, CareerReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareerReferences and returns the data saved in the database.
     * @param {CareerReferenceCreateManyAndReturnArgs} args - Arguments to create many CareerReferences.
     * @example
     * // Create many CareerReferences
     * const careerReference = await prisma.careerReference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareerReferences and only return the `id`
     * const careerReferenceWithIdOnly = await prisma.careerReference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareerReference.
     * @param {CareerReferenceDeleteArgs} args - Arguments to delete one CareerReference.
     * @example
     * // Delete one CareerReference
     * const CareerReference = await prisma.careerReference.delete({
     *   where: {
     *     // ... filter to delete one CareerReference
     *   }
     * })
     * 
     */
    delete<T extends CareerReferenceDeleteArgs>(args: SelectSubset<T, CareerReferenceDeleteArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareerReference.
     * @param {CareerReferenceUpdateArgs} args - Arguments to update one CareerReference.
     * @example
     * // Update one CareerReference
     * const careerReference = await prisma.careerReference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerReferenceUpdateArgs>(args: SelectSubset<T, CareerReferenceUpdateArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareerReferences.
     * @param {CareerReferenceDeleteManyArgs} args - Arguments to filter CareerReferences to delete.
     * @example
     * // Delete a few CareerReferences
     * const { count } = await prisma.careerReference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerReferenceDeleteManyArgs>(args?: SelectSubset<T, CareerReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareerReferences
     * const careerReference = await prisma.careerReference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerReferenceUpdateManyArgs>(args: SelectSubset<T, CareerReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerReferences and returns the data updated in the database.
     * @param {CareerReferenceUpdateManyAndReturnArgs} args - Arguments to update many CareerReferences.
     * @example
     * // Update many CareerReferences
     * const careerReference = await prisma.careerReference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareerReferences and only return the `id`
     * const careerReferenceWithIdOnly = await prisma.careerReference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareerReference.
     * @param {CareerReferenceUpsertArgs} args - Arguments to update or create a CareerReference.
     * @example
     * // Update or create a CareerReference
     * const careerReference = await prisma.careerReference.upsert({
     *   create: {
     *     // ... data to create a CareerReference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareerReference we want to update
     *   }
     * })
     */
    upsert<T extends CareerReferenceUpsertArgs>(args: SelectSubset<T, CareerReferenceUpsertArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareerReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerReferenceCountArgs} args - Arguments to filter CareerReferences to count.
     * @example
     * // Count the number of CareerReferences
     * const count = await prisma.careerReference.count({
     *   where: {
     *     // ... the filter for the CareerReferences we want to count
     *   }
     * })
    **/
    count<T extends CareerReferenceCountArgs>(
      args?: Subset<T, CareerReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareerReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerReferenceAggregateArgs>(args: Subset<T, CareerReferenceAggregateArgs>): Prisma.PrismaPromise<GetCareerReferenceAggregateType<T>>

    /**
     * Group by CareerReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerReferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerReferenceGroupByArgs['orderBy'] }
        : { orderBy?: CareerReferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareerReference model
   */
  readonly fields: CareerReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareerReference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachers<T extends CareerReference$teachersArgs<ExtArgs> = {}>(args?: Subset<T, CareerReference$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends CareerReference$studentsArgs<ExtArgs> = {}>(args?: Subset<T, CareerReference$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareerReference model
   */
  interface CareerReferenceFieldRefs {
    readonly id: FieldRef<"CareerReference", 'Int'>
    readonly name: FieldRef<"CareerReference", 'String'>
    readonly totalCicles: FieldRef<"CareerReference", 'Int'>
    readonly syncedAt: FieldRef<"CareerReference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CareerReference findUnique
   */
  export type CareerReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * Filter, which CareerReference to fetch.
     */
    where: CareerReferenceWhereUniqueInput
  }

  /**
   * CareerReference findUniqueOrThrow
   */
  export type CareerReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * Filter, which CareerReference to fetch.
     */
    where: CareerReferenceWhereUniqueInput
  }

  /**
   * CareerReference findFirst
   */
  export type CareerReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * Filter, which CareerReference to fetch.
     */
    where?: CareerReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerReferences to fetch.
     */
    orderBy?: CareerReferenceOrderByWithRelationInput | CareerReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerReferences.
     */
    cursor?: CareerReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerReferences.
     */
    distinct?: CareerReferenceScalarFieldEnum | CareerReferenceScalarFieldEnum[]
  }

  /**
   * CareerReference findFirstOrThrow
   */
  export type CareerReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * Filter, which CareerReference to fetch.
     */
    where?: CareerReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerReferences to fetch.
     */
    orderBy?: CareerReferenceOrderByWithRelationInput | CareerReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerReferences.
     */
    cursor?: CareerReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerReferences.
     */
    distinct?: CareerReferenceScalarFieldEnum | CareerReferenceScalarFieldEnum[]
  }

  /**
   * CareerReference findMany
   */
  export type CareerReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * Filter, which CareerReferences to fetch.
     */
    where?: CareerReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerReferences to fetch.
     */
    orderBy?: CareerReferenceOrderByWithRelationInput | CareerReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareerReferences.
     */
    cursor?: CareerReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerReferences.
     */
    skip?: number
    distinct?: CareerReferenceScalarFieldEnum | CareerReferenceScalarFieldEnum[]
  }

  /**
   * CareerReference create
   */
  export type CareerReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a CareerReference.
     */
    data: XOR<CareerReferenceCreateInput, CareerReferenceUncheckedCreateInput>
  }

  /**
   * CareerReference createMany
   */
  export type CareerReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareerReferences.
     */
    data: CareerReferenceCreateManyInput | CareerReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareerReference createManyAndReturn
   */
  export type CareerReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many CareerReferences.
     */
    data: CareerReferenceCreateManyInput | CareerReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareerReference update
   */
  export type CareerReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a CareerReference.
     */
    data: XOR<CareerReferenceUpdateInput, CareerReferenceUncheckedUpdateInput>
    /**
     * Choose, which CareerReference to update.
     */
    where: CareerReferenceWhereUniqueInput
  }

  /**
   * CareerReference updateMany
   */
  export type CareerReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareerReferences.
     */
    data: XOR<CareerReferenceUpdateManyMutationInput, CareerReferenceUncheckedUpdateManyInput>
    /**
     * Filter which CareerReferences to update
     */
    where?: CareerReferenceWhereInput
    /**
     * Limit how many CareerReferences to update.
     */
    limit?: number
  }

  /**
   * CareerReference updateManyAndReturn
   */
  export type CareerReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * The data used to update CareerReferences.
     */
    data: XOR<CareerReferenceUpdateManyMutationInput, CareerReferenceUncheckedUpdateManyInput>
    /**
     * Filter which CareerReferences to update
     */
    where?: CareerReferenceWhereInput
    /**
     * Limit how many CareerReferences to update.
     */
    limit?: number
  }

  /**
   * CareerReference upsert
   */
  export type CareerReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the CareerReference to update in case it exists.
     */
    where: CareerReferenceWhereUniqueInput
    /**
     * In case the CareerReference found by the `where` argument doesn't exist, create a new CareerReference with this data.
     */
    create: XOR<CareerReferenceCreateInput, CareerReferenceUncheckedCreateInput>
    /**
     * In case the CareerReference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerReferenceUpdateInput, CareerReferenceUncheckedUpdateInput>
  }

  /**
   * CareerReference delete
   */
  export type CareerReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
    /**
     * Filter which CareerReference to delete.
     */
    where: CareerReferenceWhereUniqueInput
  }

  /**
   * CareerReference deleteMany
   */
  export type CareerReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerReferences to delete
     */
    where?: CareerReferenceWhereInput
    /**
     * Limit how many CareerReferences to delete.
     */
    limit?: number
  }

  /**
   * CareerReference.teachers
   */
  export type CareerReference$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    where?: TeacherProfileWhereInput
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    cursor?: TeacherProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * CareerReference.students
   */
  export type CareerReference$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * CareerReference without action
   */
  export type CareerReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerReference
     */
    select?: CareerReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerReference
     */
    omit?: CareerReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerReferenceInclude<ExtArgs> | null
  }


  /**
   * Model SubjectReference
   */

  export type AggregateSubjectReference = {
    _count: SubjectReferenceCountAggregateOutputType | null
    _avg: SubjectReferenceAvgAggregateOutputType | null
    _sum: SubjectReferenceSumAggregateOutputType | null
    _min: SubjectReferenceMinAggregateOutputType | null
    _max: SubjectReferenceMaxAggregateOutputType | null
  }

  export type SubjectReferenceAvgAggregateOutputType = {
    id: number | null
    careerId: number | null
    cicleNumber: number | null
  }

  export type SubjectReferenceSumAggregateOutputType = {
    id: number | null
    careerId: number | null
    cicleNumber: number | null
  }

  export type SubjectReferenceMinAggregateOutputType = {
    id: number | null
    name: string | null
    careerId: number | null
    cicleNumber: number | null
    syncedAt: Date | null
  }

  export type SubjectReferenceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    careerId: number | null
    cicleNumber: number | null
    syncedAt: Date | null
  }

  export type SubjectReferenceCountAggregateOutputType = {
    id: number
    name: number
    careerId: number
    cicleNumber: number
    syncedAt: number
    _all: number
  }


  export type SubjectReferenceAvgAggregateInputType = {
    id?: true
    careerId?: true
    cicleNumber?: true
  }

  export type SubjectReferenceSumAggregateInputType = {
    id?: true
    careerId?: true
    cicleNumber?: true
  }

  export type SubjectReferenceMinAggregateInputType = {
    id?: true
    name?: true
    careerId?: true
    cicleNumber?: true
    syncedAt?: true
  }

  export type SubjectReferenceMaxAggregateInputType = {
    id?: true
    name?: true
    careerId?: true
    cicleNumber?: true
    syncedAt?: true
  }

  export type SubjectReferenceCountAggregateInputType = {
    id?: true
    name?: true
    careerId?: true
    cicleNumber?: true
    syncedAt?: true
    _all?: true
  }

  export type SubjectReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectReference to aggregate.
     */
    where?: SubjectReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectReferences to fetch.
     */
    orderBy?: SubjectReferenceOrderByWithRelationInput | SubjectReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectReferences
    **/
    _count?: true | SubjectReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectReferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectReferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectReferenceMaxAggregateInputType
  }

  export type GetSubjectReferenceAggregateType<T extends SubjectReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectReference[P]>
      : GetScalarType<T[P], AggregateSubjectReference[P]>
  }




  export type SubjectReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectReferenceWhereInput
    orderBy?: SubjectReferenceOrderByWithAggregationInput | SubjectReferenceOrderByWithAggregationInput[]
    by: SubjectReferenceScalarFieldEnum[] | SubjectReferenceScalarFieldEnum
    having?: SubjectReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectReferenceCountAggregateInputType | true
    _avg?: SubjectReferenceAvgAggregateInputType
    _sum?: SubjectReferenceSumAggregateInputType
    _min?: SubjectReferenceMinAggregateInputType
    _max?: SubjectReferenceMaxAggregateInputType
  }

  export type SubjectReferenceGroupByOutputType = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt: Date
    _count: SubjectReferenceCountAggregateOutputType | null
    _avg: SubjectReferenceAvgAggregateOutputType | null
    _sum: SubjectReferenceSumAggregateOutputType | null
    _min: SubjectReferenceMinAggregateOutputType | null
    _max: SubjectReferenceMaxAggregateOutputType | null
  }

  type GetSubjectReferenceGroupByPayload<T extends SubjectReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectReferenceGroupByOutputType[P]>
        }
      >
    >


  export type SubjectReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    careerId?: boolean
    cicleNumber?: boolean
    syncedAt?: boolean
    subjectAssignments?: boolean | SubjectReference$subjectAssignmentsArgs<ExtArgs>
    studentSubjects?: boolean | SubjectReference$studentSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectReferenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectReference"]>

  export type SubjectReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    careerId?: boolean
    cicleNumber?: boolean
    syncedAt?: boolean
  }, ExtArgs["result"]["subjectReference"]>

  export type SubjectReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    careerId?: boolean
    cicleNumber?: boolean
    syncedAt?: boolean
  }, ExtArgs["result"]["subjectReference"]>

  export type SubjectReferenceSelectScalar = {
    id?: boolean
    name?: boolean
    careerId?: boolean
    cicleNumber?: boolean
    syncedAt?: boolean
  }

  export type SubjectReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "careerId" | "cicleNumber" | "syncedAt", ExtArgs["result"]["subjectReference"]>
  export type SubjectReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectAssignments?: boolean | SubjectReference$subjectAssignmentsArgs<ExtArgs>
    studentSubjects?: boolean | SubjectReference$studentSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectReferenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectReference"
    objects: {
      subjectAssignments: Prisma.$SubjectAssignmentPayload<ExtArgs>[]
      studentSubjects: Prisma.$StudentSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      careerId: number
      cicleNumber: number
      syncedAt: Date
    }, ExtArgs["result"]["subjectReference"]>
    composites: {}
  }

  type SubjectReferenceGetPayload<S extends boolean | null | undefined | SubjectReferenceDefaultArgs> = $Result.GetResult<Prisma.$SubjectReferencePayload, S>

  type SubjectReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectReferenceCountAggregateInputType | true
    }

  export interface SubjectReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectReference'], meta: { name: 'SubjectReference' } }
    /**
     * Find zero or one SubjectReference that matches the filter.
     * @param {SubjectReferenceFindUniqueArgs} args - Arguments to find a SubjectReference
     * @example
     * // Get one SubjectReference
     * const subjectReference = await prisma.subjectReference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectReferenceFindUniqueArgs>(args: SelectSubset<T, SubjectReferenceFindUniqueArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubjectReference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectReferenceFindUniqueOrThrowArgs} args - Arguments to find a SubjectReference
     * @example
     * // Get one SubjectReference
     * const subjectReference = await prisma.subjectReference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectReference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectReferenceFindFirstArgs} args - Arguments to find a SubjectReference
     * @example
     * // Get one SubjectReference
     * const subjectReference = await prisma.subjectReference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectReferenceFindFirstArgs>(args?: SelectSubset<T, SubjectReferenceFindFirstArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectReference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectReferenceFindFirstOrThrowArgs} args - Arguments to find a SubjectReference
     * @example
     * // Get one SubjectReference
     * const subjectReference = await prisma.subjectReference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubjectReferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectReferences
     * const subjectReferences = await prisma.subjectReference.findMany()
     * 
     * // Get first 10 SubjectReferences
     * const subjectReferences = await prisma.subjectReference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectReferenceWithIdOnly = await prisma.subjectReference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectReferenceFindManyArgs>(args?: SelectSubset<T, SubjectReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubjectReference.
     * @param {SubjectReferenceCreateArgs} args - Arguments to create a SubjectReference.
     * @example
     * // Create one SubjectReference
     * const SubjectReference = await prisma.subjectReference.create({
     *   data: {
     *     // ... data to create a SubjectReference
     *   }
     * })
     * 
     */
    create<T extends SubjectReferenceCreateArgs>(args: SelectSubset<T, SubjectReferenceCreateArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubjectReferences.
     * @param {SubjectReferenceCreateManyArgs} args - Arguments to create many SubjectReferences.
     * @example
     * // Create many SubjectReferences
     * const subjectReference = await prisma.subjectReference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectReferenceCreateManyArgs>(args?: SelectSubset<T, SubjectReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectReferences and returns the data saved in the database.
     * @param {SubjectReferenceCreateManyAndReturnArgs} args - Arguments to create many SubjectReferences.
     * @example
     * // Create many SubjectReferences
     * const subjectReference = await prisma.subjectReference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectReferences and only return the `id`
     * const subjectReferenceWithIdOnly = await prisma.subjectReference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubjectReference.
     * @param {SubjectReferenceDeleteArgs} args - Arguments to delete one SubjectReference.
     * @example
     * // Delete one SubjectReference
     * const SubjectReference = await prisma.subjectReference.delete({
     *   where: {
     *     // ... filter to delete one SubjectReference
     *   }
     * })
     * 
     */
    delete<T extends SubjectReferenceDeleteArgs>(args: SelectSubset<T, SubjectReferenceDeleteArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubjectReference.
     * @param {SubjectReferenceUpdateArgs} args - Arguments to update one SubjectReference.
     * @example
     * // Update one SubjectReference
     * const subjectReference = await prisma.subjectReference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectReferenceUpdateArgs>(args: SelectSubset<T, SubjectReferenceUpdateArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubjectReferences.
     * @param {SubjectReferenceDeleteManyArgs} args - Arguments to filter SubjectReferences to delete.
     * @example
     * // Delete a few SubjectReferences
     * const { count } = await prisma.subjectReference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectReferenceDeleteManyArgs>(args?: SelectSubset<T, SubjectReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectReferences
     * const subjectReference = await prisma.subjectReference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectReferenceUpdateManyArgs>(args: SelectSubset<T, SubjectReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectReferences and returns the data updated in the database.
     * @param {SubjectReferenceUpdateManyAndReturnArgs} args - Arguments to update many SubjectReferences.
     * @example
     * // Update many SubjectReferences
     * const subjectReference = await prisma.subjectReference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubjectReferences and only return the `id`
     * const subjectReferenceWithIdOnly = await prisma.subjectReference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubjectReference.
     * @param {SubjectReferenceUpsertArgs} args - Arguments to update or create a SubjectReference.
     * @example
     * // Update or create a SubjectReference
     * const subjectReference = await prisma.subjectReference.upsert({
     *   create: {
     *     // ... data to create a SubjectReference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectReference we want to update
     *   }
     * })
     */
    upsert<T extends SubjectReferenceUpsertArgs>(args: SelectSubset<T, SubjectReferenceUpsertArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubjectReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectReferenceCountArgs} args - Arguments to filter SubjectReferences to count.
     * @example
     * // Count the number of SubjectReferences
     * const count = await prisma.subjectReference.count({
     *   where: {
     *     // ... the filter for the SubjectReferences we want to count
     *   }
     * })
    **/
    count<T extends SubjectReferenceCountArgs>(
      args?: Subset<T, SubjectReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectReferenceAggregateArgs>(args: Subset<T, SubjectReferenceAggregateArgs>): Prisma.PrismaPromise<GetSubjectReferenceAggregateType<T>>

    /**
     * Group by SubjectReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectReferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectReferenceGroupByArgs['orderBy'] }
        : { orderBy?: SubjectReferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectReference model
   */
  readonly fields: SubjectReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectReference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjectAssignments<T extends SubjectReference$subjectAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, SubjectReference$subjectAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentSubjects<T extends SubjectReference$studentSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, SubjectReference$studentSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubjectReference model
   */
  interface SubjectReferenceFieldRefs {
    readonly id: FieldRef<"SubjectReference", 'Int'>
    readonly name: FieldRef<"SubjectReference", 'String'>
    readonly careerId: FieldRef<"SubjectReference", 'Int'>
    readonly cicleNumber: FieldRef<"SubjectReference", 'Int'>
    readonly syncedAt: FieldRef<"SubjectReference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubjectReference findUnique
   */
  export type SubjectReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectReference to fetch.
     */
    where: SubjectReferenceWhereUniqueInput
  }

  /**
   * SubjectReference findUniqueOrThrow
   */
  export type SubjectReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectReference to fetch.
     */
    where: SubjectReferenceWhereUniqueInput
  }

  /**
   * SubjectReference findFirst
   */
  export type SubjectReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectReference to fetch.
     */
    where?: SubjectReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectReferences to fetch.
     */
    orderBy?: SubjectReferenceOrderByWithRelationInput | SubjectReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectReferences.
     */
    cursor?: SubjectReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectReferences.
     */
    distinct?: SubjectReferenceScalarFieldEnum | SubjectReferenceScalarFieldEnum[]
  }

  /**
   * SubjectReference findFirstOrThrow
   */
  export type SubjectReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectReference to fetch.
     */
    where?: SubjectReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectReferences to fetch.
     */
    orderBy?: SubjectReferenceOrderByWithRelationInput | SubjectReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectReferences.
     */
    cursor?: SubjectReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectReferences.
     */
    distinct?: SubjectReferenceScalarFieldEnum | SubjectReferenceScalarFieldEnum[]
  }

  /**
   * SubjectReference findMany
   */
  export type SubjectReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectReferences to fetch.
     */
    where?: SubjectReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectReferences to fetch.
     */
    orderBy?: SubjectReferenceOrderByWithRelationInput | SubjectReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectReferences.
     */
    cursor?: SubjectReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectReferences.
     */
    skip?: number
    distinct?: SubjectReferenceScalarFieldEnum | SubjectReferenceScalarFieldEnum[]
  }

  /**
   * SubjectReference create
   */
  export type SubjectReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a SubjectReference.
     */
    data: XOR<SubjectReferenceCreateInput, SubjectReferenceUncheckedCreateInput>
  }

  /**
   * SubjectReference createMany
   */
  export type SubjectReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectReferences.
     */
    data: SubjectReferenceCreateManyInput | SubjectReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectReference createManyAndReturn
   */
  export type SubjectReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many SubjectReferences.
     */
    data: SubjectReferenceCreateManyInput | SubjectReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectReference update
   */
  export type SubjectReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a SubjectReference.
     */
    data: XOR<SubjectReferenceUpdateInput, SubjectReferenceUncheckedUpdateInput>
    /**
     * Choose, which SubjectReference to update.
     */
    where: SubjectReferenceWhereUniqueInput
  }

  /**
   * SubjectReference updateMany
   */
  export type SubjectReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectReferences.
     */
    data: XOR<SubjectReferenceUpdateManyMutationInput, SubjectReferenceUncheckedUpdateManyInput>
    /**
     * Filter which SubjectReferences to update
     */
    where?: SubjectReferenceWhereInput
    /**
     * Limit how many SubjectReferences to update.
     */
    limit?: number
  }

  /**
   * SubjectReference updateManyAndReturn
   */
  export type SubjectReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * The data used to update SubjectReferences.
     */
    data: XOR<SubjectReferenceUpdateManyMutationInput, SubjectReferenceUncheckedUpdateManyInput>
    /**
     * Filter which SubjectReferences to update
     */
    where?: SubjectReferenceWhereInput
    /**
     * Limit how many SubjectReferences to update.
     */
    limit?: number
  }

  /**
   * SubjectReference upsert
   */
  export type SubjectReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the SubjectReference to update in case it exists.
     */
    where: SubjectReferenceWhereUniqueInput
    /**
     * In case the SubjectReference found by the `where` argument doesn't exist, create a new SubjectReference with this data.
     */
    create: XOR<SubjectReferenceCreateInput, SubjectReferenceUncheckedCreateInput>
    /**
     * In case the SubjectReference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectReferenceUpdateInput, SubjectReferenceUncheckedUpdateInput>
  }

  /**
   * SubjectReference delete
   */
  export type SubjectReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
    /**
     * Filter which SubjectReference to delete.
     */
    where: SubjectReferenceWhereUniqueInput
  }

  /**
   * SubjectReference deleteMany
   */
  export type SubjectReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectReferences to delete
     */
    where?: SubjectReferenceWhereInput
    /**
     * Limit how many SubjectReferences to delete.
     */
    limit?: number
  }

  /**
   * SubjectReference.subjectAssignments
   */
  export type SubjectReference$subjectAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    where?: SubjectAssignmentWhereInput
    orderBy?: SubjectAssignmentOrderByWithRelationInput | SubjectAssignmentOrderByWithRelationInput[]
    cursor?: SubjectAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectAssignmentScalarFieldEnum | SubjectAssignmentScalarFieldEnum[]
  }

  /**
   * SubjectReference.studentSubjects
   */
  export type SubjectReference$studentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * SubjectReference without action
   */
  export type SubjectReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectReference
     */
    select?: SubjectReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectReference
     */
    omit?: SubjectReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectReferenceInclude<ExtArgs> | null
  }


  /**
   * Model TeacherProfile
   */

  export type AggregateTeacherProfile = {
    _count: TeacherProfileCountAggregateOutputType | null
    _avg: TeacherProfileAvgAggregateOutputType | null
    _sum: TeacherProfileSumAggregateOutputType | null
    _min: TeacherProfileMinAggregateOutputType | null
    _max: TeacherProfileMaxAggregateOutputType | null
  }

  export type TeacherProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    specialityId: number | null
    careerId: number | null
  }

  export type TeacherProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    specialityId: number | null
    careerId: number | null
  }

  export type TeacherProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    specialityId: number | null
    careerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    specialityId: number | null
    careerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherProfileCountAggregateOutputType = {
    id: number
    userId: number
    specialityId: number
    careerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    specialityId?: true
    careerId?: true
  }

  export type TeacherProfileSumAggregateInputType = {
    id?: true
    userId?: true
    specialityId?: true
    careerId?: true
  }

  export type TeacherProfileMinAggregateInputType = {
    id?: true
    userId?: true
    specialityId?: true
    careerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    specialityId?: true
    careerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherProfileCountAggregateInputType = {
    id?: true
    userId?: true
    specialityId?: true
    careerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherProfile to aggregate.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherProfiles
    **/
    _count?: true | TeacherProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherProfileMaxAggregateInputType
  }

  export type GetTeacherProfileAggregateType<T extends TeacherProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherProfile[P]>
      : GetScalarType<T[P], AggregateTeacherProfile[P]>
  }




  export type TeacherProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherProfileWhereInput
    orderBy?: TeacherProfileOrderByWithAggregationInput | TeacherProfileOrderByWithAggregationInput[]
    by: TeacherProfileScalarFieldEnum[] | TeacherProfileScalarFieldEnum
    having?: TeacherProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherProfileCountAggregateInputType | true
    _avg?: TeacherProfileAvgAggregateInputType
    _sum?: TeacherProfileSumAggregateInputType
    _min?: TeacherProfileMinAggregateInputType
    _max?: TeacherProfileMaxAggregateInputType
  }

  export type TeacherProfileGroupByOutputType = {
    id: number
    userId: number
    specialityId: number
    careerId: number
    createdAt: Date
    updatedAt: Date
    _count: TeacherProfileCountAggregateOutputType | null
    _avg: TeacherProfileAvgAggregateOutputType | null
    _sum: TeacherProfileSumAggregateOutputType | null
    _min: TeacherProfileMinAggregateOutputType | null
    _max: TeacherProfileMaxAggregateOutputType | null
  }

  type GetTeacherProfileGroupByPayload<T extends TeacherProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherProfileGroupByOutputType[P]>
        }
      >
    >


  export type TeacherProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialityId?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
    subjects?: boolean | TeacherProfile$subjectsArgs<ExtArgs>
    _count?: boolean | TeacherProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherProfile"]>

  export type TeacherProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialityId?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherProfile"]>

  export type TeacherProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialityId?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherProfile"]>

  export type TeacherProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    specialityId?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialityId" | "careerId" | "createdAt" | "updatedAt", ExtArgs["result"]["teacherProfile"]>
  export type TeacherProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
    subjects?: boolean | TeacherProfile$subjectsArgs<ExtArgs>
    _count?: boolean | TeacherProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }
  export type TeacherProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }

  export type $TeacherProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherProfile"
    objects: {
      user: Prisma.$UserReferencePayload<ExtArgs>
      speciality: Prisma.$SpecialityReferencePayload<ExtArgs>
      career: Prisma.$CareerReferencePayload<ExtArgs>
      subjects: Prisma.$SubjectAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      specialityId: number
      careerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacherProfile"]>
    composites: {}
  }

  type TeacherProfileGetPayload<S extends boolean | null | undefined | TeacherProfileDefaultArgs> = $Result.GetResult<Prisma.$TeacherProfilePayload, S>

  type TeacherProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherProfileCountAggregateInputType | true
    }

  export interface TeacherProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherProfile'], meta: { name: 'TeacherProfile' } }
    /**
     * Find zero or one TeacherProfile that matches the filter.
     * @param {TeacherProfileFindUniqueArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherProfileFindUniqueArgs>(args: SelectSubset<T, TeacherProfileFindUniqueArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherProfileFindUniqueOrThrowArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindFirstArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherProfileFindFirstArgs>(args?: SelectSubset<T, TeacherProfileFindFirstArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindFirstOrThrowArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherProfiles
     * const teacherProfiles = await prisma.teacherProfile.findMany()
     * 
     * // Get first 10 TeacherProfiles
     * const teacherProfiles = await prisma.teacherProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherProfileFindManyArgs>(args?: SelectSubset<T, TeacherProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherProfile.
     * @param {TeacherProfileCreateArgs} args - Arguments to create a TeacherProfile.
     * @example
     * // Create one TeacherProfile
     * const TeacherProfile = await prisma.teacherProfile.create({
     *   data: {
     *     // ... data to create a TeacherProfile
     *   }
     * })
     * 
     */
    create<T extends TeacherProfileCreateArgs>(args: SelectSubset<T, TeacherProfileCreateArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherProfiles.
     * @param {TeacherProfileCreateManyArgs} args - Arguments to create many TeacherProfiles.
     * @example
     * // Create many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherProfileCreateManyArgs>(args?: SelectSubset<T, TeacherProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherProfiles and returns the data saved in the database.
     * @param {TeacherProfileCreateManyAndReturnArgs} args - Arguments to create many TeacherProfiles.
     * @example
     * // Create many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherProfiles and only return the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherProfile.
     * @param {TeacherProfileDeleteArgs} args - Arguments to delete one TeacherProfile.
     * @example
     * // Delete one TeacherProfile
     * const TeacherProfile = await prisma.teacherProfile.delete({
     *   where: {
     *     // ... filter to delete one TeacherProfile
     *   }
     * })
     * 
     */
    delete<T extends TeacherProfileDeleteArgs>(args: SelectSubset<T, TeacherProfileDeleteArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherProfile.
     * @param {TeacherProfileUpdateArgs} args - Arguments to update one TeacherProfile.
     * @example
     * // Update one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherProfileUpdateArgs>(args: SelectSubset<T, TeacherProfileUpdateArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherProfiles.
     * @param {TeacherProfileDeleteManyArgs} args - Arguments to filter TeacherProfiles to delete.
     * @example
     * // Delete a few TeacherProfiles
     * const { count } = await prisma.teacherProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherProfileDeleteManyArgs>(args?: SelectSubset<T, TeacherProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherProfileUpdateManyArgs>(args: SelectSubset<T, TeacherProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherProfiles and returns the data updated in the database.
     * @param {TeacherProfileUpdateManyAndReturnArgs} args - Arguments to update many TeacherProfiles.
     * @example
     * // Update many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherProfiles and only return the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherProfile.
     * @param {TeacherProfileUpsertArgs} args - Arguments to update or create a TeacherProfile.
     * @example
     * // Update or create a TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.upsert({
     *   create: {
     *     // ... data to create a TeacherProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherProfile we want to update
     *   }
     * })
     */
    upsert<T extends TeacherProfileUpsertArgs>(args: SelectSubset<T, TeacherProfileUpsertArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileCountArgs} args - Arguments to filter TeacherProfiles to count.
     * @example
     * // Count the number of TeacherProfiles
     * const count = await prisma.teacherProfile.count({
     *   where: {
     *     // ... the filter for the TeacherProfiles we want to count
     *   }
     * })
    **/
    count<T extends TeacherProfileCountArgs>(
      args?: Subset<T, TeacherProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherProfileAggregateArgs>(args: Subset<T, TeacherProfileAggregateArgs>): Prisma.PrismaPromise<GetTeacherProfileAggregateType<T>>

    /**
     * Group by TeacherProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherProfileGroupByArgs['orderBy'] }
        : { orderBy?: TeacherProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherProfile model
   */
  readonly fields: TeacherProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserReferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserReferenceDefaultArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    speciality<T extends SpecialityReferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialityReferenceDefaultArgs<ExtArgs>>): Prisma__SpecialityReferenceClient<$Result.GetResult<Prisma.$SpecialityReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    career<T extends CareerReferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerReferenceDefaultArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends TeacherProfile$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, TeacherProfile$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherProfile model
   */
  interface TeacherProfileFieldRefs {
    readonly id: FieldRef<"TeacherProfile", 'Int'>
    readonly userId: FieldRef<"TeacherProfile", 'Int'>
    readonly specialityId: FieldRef<"TeacherProfile", 'Int'>
    readonly careerId: FieldRef<"TeacherProfile", 'Int'>
    readonly createdAt: FieldRef<"TeacherProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"TeacherProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherProfile findUnique
   */
  export type TeacherProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile findUniqueOrThrow
   */
  export type TeacherProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile findFirst
   */
  export type TeacherProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherProfiles.
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * TeacherProfile findFirstOrThrow
   */
  export type TeacherProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherProfiles.
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * TeacherProfile findMany
   */
  export type TeacherProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfiles to fetch.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherProfiles.
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * TeacherProfile create
   */
  export type TeacherProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherProfile.
     */
    data: XOR<TeacherProfileCreateInput, TeacherProfileUncheckedCreateInput>
  }

  /**
   * TeacherProfile createMany
   */
  export type TeacherProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherProfiles.
     */
    data: TeacherProfileCreateManyInput | TeacherProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherProfile createManyAndReturn
   */
  export type TeacherProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherProfiles.
     */
    data: TeacherProfileCreateManyInput | TeacherProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherProfile update
   */
  export type TeacherProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherProfile.
     */
    data: XOR<TeacherProfileUpdateInput, TeacherProfileUncheckedUpdateInput>
    /**
     * Choose, which TeacherProfile to update.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile updateMany
   */
  export type TeacherProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherProfiles.
     */
    data: XOR<TeacherProfileUpdateManyMutationInput, TeacherProfileUncheckedUpdateManyInput>
    /**
     * Filter which TeacherProfiles to update
     */
    where?: TeacherProfileWhereInput
    /**
     * Limit how many TeacherProfiles to update.
     */
    limit?: number
  }

  /**
   * TeacherProfile updateManyAndReturn
   */
  export type TeacherProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * The data used to update TeacherProfiles.
     */
    data: XOR<TeacherProfileUpdateManyMutationInput, TeacherProfileUncheckedUpdateManyInput>
    /**
     * Filter which TeacherProfiles to update
     */
    where?: TeacherProfileWhereInput
    /**
     * Limit how many TeacherProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherProfile upsert
   */
  export type TeacherProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherProfile to update in case it exists.
     */
    where: TeacherProfileWhereUniqueInput
    /**
     * In case the TeacherProfile found by the `where` argument doesn't exist, create a new TeacherProfile with this data.
     */
    create: XOR<TeacherProfileCreateInput, TeacherProfileUncheckedCreateInput>
    /**
     * In case the TeacherProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherProfileUpdateInput, TeacherProfileUncheckedUpdateInput>
  }

  /**
   * TeacherProfile delete
   */
  export type TeacherProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter which TeacherProfile to delete.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile deleteMany
   */
  export type TeacherProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherProfiles to delete
     */
    where?: TeacherProfileWhereInput
    /**
     * Limit how many TeacherProfiles to delete.
     */
    limit?: number
  }

  /**
   * TeacherProfile.subjects
   */
  export type TeacherProfile$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    where?: SubjectAssignmentWhereInput
    orderBy?: SubjectAssignmentOrderByWithRelationInput | SubjectAssignmentOrderByWithRelationInput[]
    cursor?: SubjectAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectAssignmentScalarFieldEnum | SubjectAssignmentScalarFieldEnum[]
  }

  /**
   * TeacherProfile without action
   */
  export type TeacherProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    currentCicle: number | null
  }

  export type StudentProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    currentCicle: number | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    currentCicle: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    currentCicle: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    userId: number
    careerId: number
    currentCicle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    currentCicle?: true
  }

  export type StudentProfileSumAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    currentCicle?: true
  }

  export type StudentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    currentCicle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    currentCicle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    currentCicle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _avg?: StudentProfileAvgAggregateInputType
    _sum?: StudentProfileSumAggregateInputType
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: number
    userId: number
    careerId: number
    currentCicle: number
    createdAt: Date
    updatedAt: Date
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    currentCicle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
    studentSubjects?: boolean | StudentProfile$studentSubjectsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    currentCicle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    currentCicle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    careerId?: boolean
    currentCicle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "careerId" | "currentCicle" | "createdAt" | "updatedAt", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
    studentSubjects?: boolean | StudentProfile$studentSubjectsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserReferenceDefaultArgs<ExtArgs>
    career?: boolean | CareerReferenceDefaultArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      user: Prisma.$UserReferencePayload<ExtArgs>
      career: Prisma.$CareerReferencePayload<ExtArgs>
      studentSubjects: Prisma.$StudentSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      careerId: number
      currentCicle: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserReferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserReferenceDefaultArgs<ExtArgs>>): Prisma__UserReferenceClient<$Result.GetResult<Prisma.$UserReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    career<T extends CareerReferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerReferenceDefaultArgs<ExtArgs>>): Prisma__CareerReferenceClient<$Result.GetResult<Prisma.$CareerReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentSubjects<T extends StudentProfile$studentSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$studentSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'Int'>
    readonly userId: FieldRef<"StudentProfile", 'Int'>
    readonly careerId: FieldRef<"StudentProfile", 'Int'>
    readonly currentCicle: FieldRef<"StudentProfile", 'Int'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile.studentSubjects
   */
  export type StudentProfile$studentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model SubjectAssignment
   */

  export type AggregateSubjectAssignment = {
    _count: SubjectAssignmentCountAggregateOutputType | null
    _avg: SubjectAssignmentAvgAggregateOutputType | null
    _sum: SubjectAssignmentSumAggregateOutputType | null
    _min: SubjectAssignmentMinAggregateOutputType | null
    _max: SubjectAssignmentMaxAggregateOutputType | null
  }

  export type SubjectAssignmentAvgAggregateOutputType = {
    id: number | null
    teacherProfileId: number | null
    subjectId: number | null
  }

  export type SubjectAssignmentSumAggregateOutputType = {
    id: number | null
    teacherProfileId: number | null
    subjectId: number | null
  }

  export type SubjectAssignmentMinAggregateOutputType = {
    id: number | null
    teacherProfileId: number | null
    subjectId: number | null
    assignedAt: Date | null
  }

  export type SubjectAssignmentMaxAggregateOutputType = {
    id: number | null
    teacherProfileId: number | null
    subjectId: number | null
    assignedAt: Date | null
  }

  export type SubjectAssignmentCountAggregateOutputType = {
    id: number
    teacherProfileId: number
    subjectId: number
    assignedAt: number
    _all: number
  }


  export type SubjectAssignmentAvgAggregateInputType = {
    id?: true
    teacherProfileId?: true
    subjectId?: true
  }

  export type SubjectAssignmentSumAggregateInputType = {
    id?: true
    teacherProfileId?: true
    subjectId?: true
  }

  export type SubjectAssignmentMinAggregateInputType = {
    id?: true
    teacherProfileId?: true
    subjectId?: true
    assignedAt?: true
  }

  export type SubjectAssignmentMaxAggregateInputType = {
    id?: true
    teacherProfileId?: true
    subjectId?: true
    assignedAt?: true
  }

  export type SubjectAssignmentCountAggregateInputType = {
    id?: true
    teacherProfileId?: true
    subjectId?: true
    assignedAt?: true
    _all?: true
  }

  export type SubjectAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectAssignment to aggregate.
     */
    where?: SubjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectAssignments to fetch.
     */
    orderBy?: SubjectAssignmentOrderByWithRelationInput | SubjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectAssignments
    **/
    _count?: true | SubjectAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectAssignmentMaxAggregateInputType
  }

  export type GetSubjectAssignmentAggregateType<T extends SubjectAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectAssignment[P]>
      : GetScalarType<T[P], AggregateSubjectAssignment[P]>
  }




  export type SubjectAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectAssignmentWhereInput
    orderBy?: SubjectAssignmentOrderByWithAggregationInput | SubjectAssignmentOrderByWithAggregationInput[]
    by: SubjectAssignmentScalarFieldEnum[] | SubjectAssignmentScalarFieldEnum
    having?: SubjectAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectAssignmentCountAggregateInputType | true
    _avg?: SubjectAssignmentAvgAggregateInputType
    _sum?: SubjectAssignmentSumAggregateInputType
    _min?: SubjectAssignmentMinAggregateInputType
    _max?: SubjectAssignmentMaxAggregateInputType
  }

  export type SubjectAssignmentGroupByOutputType = {
    id: number
    teacherProfileId: number
    subjectId: number
    assignedAt: Date
    _count: SubjectAssignmentCountAggregateOutputType | null
    _avg: SubjectAssignmentAvgAggregateOutputType | null
    _sum: SubjectAssignmentSumAggregateOutputType | null
    _min: SubjectAssignmentMinAggregateOutputType | null
    _max: SubjectAssignmentMaxAggregateOutputType | null
  }

  type GetSubjectAssignmentGroupByPayload<T extends SubjectAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type SubjectAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherProfileId?: boolean
    subjectId?: boolean
    assignedAt?: boolean
    teacherProfile?: boolean | TeacherProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectAssignment"]>

  export type SubjectAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherProfileId?: boolean
    subjectId?: boolean
    assignedAt?: boolean
    teacherProfile?: boolean | TeacherProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectAssignment"]>

  export type SubjectAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherProfileId?: boolean
    subjectId?: boolean
    assignedAt?: boolean
    teacherProfile?: boolean | TeacherProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectAssignment"]>

  export type SubjectAssignmentSelectScalar = {
    id?: boolean
    teacherProfileId?: boolean
    subjectId?: boolean
    assignedAt?: boolean
  }

  export type SubjectAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherProfileId" | "subjectId" | "assignedAt", ExtArgs["result"]["subjectAssignment"]>
  export type SubjectAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherProfile?: boolean | TeacherProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }
  export type SubjectAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherProfile?: boolean | TeacherProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }
  export type SubjectAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherProfile?: boolean | TeacherProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }

  export type $SubjectAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectAssignment"
    objects: {
      teacherProfile: Prisma.$TeacherProfilePayload<ExtArgs>
      subject: Prisma.$SubjectReferencePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherProfileId: number
      subjectId: number
      assignedAt: Date
    }, ExtArgs["result"]["subjectAssignment"]>
    composites: {}
  }

  type SubjectAssignmentGetPayload<S extends boolean | null | undefined | SubjectAssignmentDefaultArgs> = $Result.GetResult<Prisma.$SubjectAssignmentPayload, S>

  type SubjectAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectAssignmentCountAggregateInputType | true
    }

  export interface SubjectAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectAssignment'], meta: { name: 'SubjectAssignment' } }
    /**
     * Find zero or one SubjectAssignment that matches the filter.
     * @param {SubjectAssignmentFindUniqueArgs} args - Arguments to find a SubjectAssignment
     * @example
     * // Get one SubjectAssignment
     * const subjectAssignment = await prisma.subjectAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectAssignmentFindUniqueArgs>(args: SelectSubset<T, SubjectAssignmentFindUniqueArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubjectAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectAssignmentFindUniqueOrThrowArgs} args - Arguments to find a SubjectAssignment
     * @example
     * // Get one SubjectAssignment
     * const subjectAssignment = await prisma.subjectAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAssignmentFindFirstArgs} args - Arguments to find a SubjectAssignment
     * @example
     * // Get one SubjectAssignment
     * const subjectAssignment = await prisma.subjectAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectAssignmentFindFirstArgs>(args?: SelectSubset<T, SubjectAssignmentFindFirstArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAssignmentFindFirstOrThrowArgs} args - Arguments to find a SubjectAssignment
     * @example
     * // Get one SubjectAssignment
     * const subjectAssignment = await prisma.subjectAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubjectAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectAssignments
     * const subjectAssignments = await prisma.subjectAssignment.findMany()
     * 
     * // Get first 10 SubjectAssignments
     * const subjectAssignments = await prisma.subjectAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectAssignmentWithIdOnly = await prisma.subjectAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectAssignmentFindManyArgs>(args?: SelectSubset<T, SubjectAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubjectAssignment.
     * @param {SubjectAssignmentCreateArgs} args - Arguments to create a SubjectAssignment.
     * @example
     * // Create one SubjectAssignment
     * const SubjectAssignment = await prisma.subjectAssignment.create({
     *   data: {
     *     // ... data to create a SubjectAssignment
     *   }
     * })
     * 
     */
    create<T extends SubjectAssignmentCreateArgs>(args: SelectSubset<T, SubjectAssignmentCreateArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubjectAssignments.
     * @param {SubjectAssignmentCreateManyArgs} args - Arguments to create many SubjectAssignments.
     * @example
     * // Create many SubjectAssignments
     * const subjectAssignment = await prisma.subjectAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectAssignmentCreateManyArgs>(args?: SelectSubset<T, SubjectAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectAssignments and returns the data saved in the database.
     * @param {SubjectAssignmentCreateManyAndReturnArgs} args - Arguments to create many SubjectAssignments.
     * @example
     * // Create many SubjectAssignments
     * const subjectAssignment = await prisma.subjectAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectAssignments and only return the `id`
     * const subjectAssignmentWithIdOnly = await prisma.subjectAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubjectAssignment.
     * @param {SubjectAssignmentDeleteArgs} args - Arguments to delete one SubjectAssignment.
     * @example
     * // Delete one SubjectAssignment
     * const SubjectAssignment = await prisma.subjectAssignment.delete({
     *   where: {
     *     // ... filter to delete one SubjectAssignment
     *   }
     * })
     * 
     */
    delete<T extends SubjectAssignmentDeleteArgs>(args: SelectSubset<T, SubjectAssignmentDeleteArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubjectAssignment.
     * @param {SubjectAssignmentUpdateArgs} args - Arguments to update one SubjectAssignment.
     * @example
     * // Update one SubjectAssignment
     * const subjectAssignment = await prisma.subjectAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectAssignmentUpdateArgs>(args: SelectSubset<T, SubjectAssignmentUpdateArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubjectAssignments.
     * @param {SubjectAssignmentDeleteManyArgs} args - Arguments to filter SubjectAssignments to delete.
     * @example
     * // Delete a few SubjectAssignments
     * const { count } = await prisma.subjectAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectAssignmentDeleteManyArgs>(args?: SelectSubset<T, SubjectAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectAssignments
     * const subjectAssignment = await prisma.subjectAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectAssignmentUpdateManyArgs>(args: SelectSubset<T, SubjectAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectAssignments and returns the data updated in the database.
     * @param {SubjectAssignmentUpdateManyAndReturnArgs} args - Arguments to update many SubjectAssignments.
     * @example
     * // Update many SubjectAssignments
     * const subjectAssignment = await prisma.subjectAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubjectAssignments and only return the `id`
     * const subjectAssignmentWithIdOnly = await prisma.subjectAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubjectAssignment.
     * @param {SubjectAssignmentUpsertArgs} args - Arguments to update or create a SubjectAssignment.
     * @example
     * // Update or create a SubjectAssignment
     * const subjectAssignment = await prisma.subjectAssignment.upsert({
     *   create: {
     *     // ... data to create a SubjectAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectAssignment we want to update
     *   }
     * })
     */
    upsert<T extends SubjectAssignmentUpsertArgs>(args: SelectSubset<T, SubjectAssignmentUpsertArgs<ExtArgs>>): Prisma__SubjectAssignmentClient<$Result.GetResult<Prisma.$SubjectAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubjectAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAssignmentCountArgs} args - Arguments to filter SubjectAssignments to count.
     * @example
     * // Count the number of SubjectAssignments
     * const count = await prisma.subjectAssignment.count({
     *   where: {
     *     // ... the filter for the SubjectAssignments we want to count
     *   }
     * })
    **/
    count<T extends SubjectAssignmentCountArgs>(
      args?: Subset<T, SubjectAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAssignmentAggregateArgs>(args: Subset<T, SubjectAssignmentAggregateArgs>): Prisma.PrismaPromise<GetSubjectAssignmentAggregateType<T>>

    /**
     * Group by SubjectAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: SubjectAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectAssignment model
   */
  readonly fields: SubjectAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherProfile<T extends TeacherProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherProfileDefaultArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectReferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectReferenceDefaultArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubjectAssignment model
   */
  interface SubjectAssignmentFieldRefs {
    readonly id: FieldRef<"SubjectAssignment", 'Int'>
    readonly teacherProfileId: FieldRef<"SubjectAssignment", 'Int'>
    readonly subjectId: FieldRef<"SubjectAssignment", 'Int'>
    readonly assignedAt: FieldRef<"SubjectAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubjectAssignment findUnique
   */
  export type SubjectAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SubjectAssignment to fetch.
     */
    where: SubjectAssignmentWhereUniqueInput
  }

  /**
   * SubjectAssignment findUniqueOrThrow
   */
  export type SubjectAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SubjectAssignment to fetch.
     */
    where: SubjectAssignmentWhereUniqueInput
  }

  /**
   * SubjectAssignment findFirst
   */
  export type SubjectAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SubjectAssignment to fetch.
     */
    where?: SubjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectAssignments to fetch.
     */
    orderBy?: SubjectAssignmentOrderByWithRelationInput | SubjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectAssignments.
     */
    cursor?: SubjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectAssignments.
     */
    distinct?: SubjectAssignmentScalarFieldEnum | SubjectAssignmentScalarFieldEnum[]
  }

  /**
   * SubjectAssignment findFirstOrThrow
   */
  export type SubjectAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SubjectAssignment to fetch.
     */
    where?: SubjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectAssignments to fetch.
     */
    orderBy?: SubjectAssignmentOrderByWithRelationInput | SubjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectAssignments.
     */
    cursor?: SubjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectAssignments.
     */
    distinct?: SubjectAssignmentScalarFieldEnum | SubjectAssignmentScalarFieldEnum[]
  }

  /**
   * SubjectAssignment findMany
   */
  export type SubjectAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SubjectAssignments to fetch.
     */
    where?: SubjectAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectAssignments to fetch.
     */
    orderBy?: SubjectAssignmentOrderByWithRelationInput | SubjectAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectAssignments.
     */
    cursor?: SubjectAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectAssignments.
     */
    skip?: number
    distinct?: SubjectAssignmentScalarFieldEnum | SubjectAssignmentScalarFieldEnum[]
  }

  /**
   * SubjectAssignment create
   */
  export type SubjectAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a SubjectAssignment.
     */
    data: XOR<SubjectAssignmentCreateInput, SubjectAssignmentUncheckedCreateInput>
  }

  /**
   * SubjectAssignment createMany
   */
  export type SubjectAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectAssignments.
     */
    data: SubjectAssignmentCreateManyInput | SubjectAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectAssignment createManyAndReturn
   */
  export type SubjectAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many SubjectAssignments.
     */
    data: SubjectAssignmentCreateManyInput | SubjectAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubjectAssignment update
   */
  export type SubjectAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a SubjectAssignment.
     */
    data: XOR<SubjectAssignmentUpdateInput, SubjectAssignmentUncheckedUpdateInput>
    /**
     * Choose, which SubjectAssignment to update.
     */
    where: SubjectAssignmentWhereUniqueInput
  }

  /**
   * SubjectAssignment updateMany
   */
  export type SubjectAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectAssignments.
     */
    data: XOR<SubjectAssignmentUpdateManyMutationInput, SubjectAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which SubjectAssignments to update
     */
    where?: SubjectAssignmentWhereInput
    /**
     * Limit how many SubjectAssignments to update.
     */
    limit?: number
  }

  /**
   * SubjectAssignment updateManyAndReturn
   */
  export type SubjectAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update SubjectAssignments.
     */
    data: XOR<SubjectAssignmentUpdateManyMutationInput, SubjectAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which SubjectAssignments to update
     */
    where?: SubjectAssignmentWhereInput
    /**
     * Limit how many SubjectAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubjectAssignment upsert
   */
  export type SubjectAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the SubjectAssignment to update in case it exists.
     */
    where: SubjectAssignmentWhereUniqueInput
    /**
     * In case the SubjectAssignment found by the `where` argument doesn't exist, create a new SubjectAssignment with this data.
     */
    create: XOR<SubjectAssignmentCreateInput, SubjectAssignmentUncheckedCreateInput>
    /**
     * In case the SubjectAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectAssignmentUpdateInput, SubjectAssignmentUncheckedUpdateInput>
  }

  /**
   * SubjectAssignment delete
   */
  export type SubjectAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
    /**
     * Filter which SubjectAssignment to delete.
     */
    where: SubjectAssignmentWhereUniqueInput
  }

  /**
   * SubjectAssignment deleteMany
   */
  export type SubjectAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectAssignments to delete
     */
    where?: SubjectAssignmentWhereInput
    /**
     * Limit how many SubjectAssignments to delete.
     */
    limit?: number
  }

  /**
   * SubjectAssignment without action
   */
  export type SubjectAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectAssignment
     */
    select?: SubjectAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectAssignment
     */
    omit?: SubjectAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model StudentSubject
   */

  export type AggregateStudentSubject = {
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  export type StudentSubjectAvgAggregateOutputType = {
    id: number | null
    studentProfileId: number | null
    subjectId: number | null
    grade: Decimal | null
  }

  export type StudentSubjectSumAggregateOutputType = {
    id: number | null
    studentProfileId: number | null
    subjectId: number | null
    grade: Decimal | null
  }

  export type StudentSubjectMinAggregateOutputType = {
    id: number | null
    studentProfileId: number | null
    subjectId: number | null
    grade: Decimal | null
    status: string | null
    enrolledAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSubjectMaxAggregateOutputType = {
    id: number | null
    studentProfileId: number | null
    subjectId: number | null
    grade: Decimal | null
    status: string | null
    enrolledAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSubjectCountAggregateOutputType = {
    id: number
    studentProfileId: number
    subjectId: number
    grade: number
    status: number
    enrolledAt: number
    updatedAt: number
    _all: number
  }


  export type StudentSubjectAvgAggregateInputType = {
    id?: true
    studentProfileId?: true
    subjectId?: true
    grade?: true
  }

  export type StudentSubjectSumAggregateInputType = {
    id?: true
    studentProfileId?: true
    subjectId?: true
    grade?: true
  }

  export type StudentSubjectMinAggregateInputType = {
    id?: true
    studentProfileId?: true
    subjectId?: true
    grade?: true
    status?: true
    enrolledAt?: true
    updatedAt?: true
  }

  export type StudentSubjectMaxAggregateInputType = {
    id?: true
    studentProfileId?: true
    subjectId?: true
    grade?: true
    status?: true
    enrolledAt?: true
    updatedAt?: true
  }

  export type StudentSubjectCountAggregateInputType = {
    id?: true
    studentProfileId?: true
    subjectId?: true
    grade?: true
    status?: true
    enrolledAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubject to aggregate.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSubjects
    **/
    _count?: true | StudentSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type GetStudentSubjectAggregateType<T extends StudentSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSubject[P]>
      : GetScalarType<T[P], AggregateStudentSubject[P]>
  }




  export type StudentSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithAggregationInput | StudentSubjectOrderByWithAggregationInput[]
    by: StudentSubjectScalarFieldEnum[] | StudentSubjectScalarFieldEnum
    having?: StudentSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSubjectCountAggregateInputType | true
    _avg?: StudentSubjectAvgAggregateInputType
    _sum?: StudentSubjectSumAggregateInputType
    _min?: StudentSubjectMinAggregateInputType
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type StudentSubjectGroupByOutputType = {
    id: number
    studentProfileId: number
    subjectId: number
    grade: Decimal | null
    status: string
    enrolledAt: Date
    updatedAt: Date
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  type GetStudentSubjectGroupByPayload<T extends StudentSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
        }
      >
    >


  export type StudentSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    subjectId?: boolean
    grade?: boolean
    status?: boolean
    enrolledAt?: boolean
    updatedAt?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    subjectId?: boolean
    grade?: boolean
    status?: boolean
    enrolledAt?: boolean
    updatedAt?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    subjectId?: boolean
    grade?: boolean
    status?: boolean
    enrolledAt?: boolean
    updatedAt?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectScalar = {
    id?: boolean
    studentProfileId?: boolean
    subjectId?: boolean
    grade?: boolean
    status?: boolean
    enrolledAt?: boolean
    updatedAt?: boolean
  }

  export type StudentSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentProfileId" | "subjectId" | "grade" | "status" | "enrolledAt" | "updatedAt", ExtArgs["result"]["studentSubject"]>
  export type StudentSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    subject?: boolean | SubjectReferenceDefaultArgs<ExtArgs>
  }

  export type $StudentSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSubject"
    objects: {
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs>
      subject: Prisma.$SubjectReferencePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentProfileId: number
      subjectId: number
      grade: Prisma.Decimal | null
      status: string
      enrolledAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentSubject"]>
    composites: {}
  }

  type StudentSubjectGetPayload<S extends boolean | null | undefined | StudentSubjectDefaultArgs> = $Result.GetResult<Prisma.$StudentSubjectPayload, S>

  type StudentSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSubjectCountAggregateInputType | true
    }

  export interface StudentSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSubject'], meta: { name: 'StudentSubject' } }
    /**
     * Find zero or one StudentSubject that matches the filter.
     * @param {StudentSubjectFindUniqueArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSubjectFindUniqueArgs>(args: SelectSubset<T, StudentSubjectFindUniqueArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSubjectFindUniqueOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSubjectFindFirstArgs>(args?: SelectSubset<T, StudentSubjectFindFirstArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany()
     * 
     * // Get first 10 StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentSubjectFindManyArgs>(args?: SelectSubset<T, StudentSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSubject.
     * @param {StudentSubjectCreateArgs} args - Arguments to create a StudentSubject.
     * @example
     * // Create one StudentSubject
     * const StudentSubject = await prisma.studentSubject.create({
     *   data: {
     *     // ... data to create a StudentSubject
     *   }
     * })
     * 
     */
    create<T extends StudentSubjectCreateArgs>(args: SelectSubset<T, StudentSubjectCreateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSubjects.
     * @param {StudentSubjectCreateManyArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSubjectCreateManyArgs>(args?: SelectSubset<T, StudentSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSubjects and returns the data saved in the database.
     * @param {StudentSubjectCreateManyAndReturnArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSubject.
     * @param {StudentSubjectDeleteArgs} args - Arguments to delete one StudentSubject.
     * @example
     * // Delete one StudentSubject
     * const StudentSubject = await prisma.studentSubject.delete({
     *   where: {
     *     // ... filter to delete one StudentSubject
     *   }
     * })
     * 
     */
    delete<T extends StudentSubjectDeleteArgs>(args: SelectSubset<T, StudentSubjectDeleteArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSubject.
     * @param {StudentSubjectUpdateArgs} args - Arguments to update one StudentSubject.
     * @example
     * // Update one StudentSubject
     * const studentSubject = await prisma.studentSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSubjectUpdateArgs>(args: SelectSubset<T, StudentSubjectUpdateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSubjects.
     * @param {StudentSubjectDeleteManyArgs} args - Arguments to filter StudentSubjects to delete.
     * @example
     * // Delete a few StudentSubjects
     * const { count } = await prisma.studentSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSubjectDeleteManyArgs>(args?: SelectSubset<T, StudentSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSubjectUpdateManyArgs>(args: SelectSubset<T, StudentSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects and returns the data updated in the database.
     * @param {StudentSubjectUpdateManyAndReturnArgs} args - Arguments to update many StudentSubjects.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSubject.
     * @param {StudentSubjectUpsertArgs} args - Arguments to update or create a StudentSubject.
     * @example
     * // Update or create a StudentSubject
     * const studentSubject = await prisma.studentSubject.upsert({
     *   create: {
     *     // ... data to create a StudentSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSubject we want to update
     *   }
     * })
     */
    upsert<T extends StudentSubjectUpsertArgs>(args: SelectSubset<T, StudentSubjectUpsertArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectCountArgs} args - Arguments to filter StudentSubjects to count.
     * @example
     * // Count the number of StudentSubjects
     * const count = await prisma.studentSubject.count({
     *   where: {
     *     // ... the filter for the StudentSubjects we want to count
     *   }
     * })
    **/
    count<T extends StudentSubjectCountArgs>(
      args?: Subset<T, StudentSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentSubjectAggregateArgs>(args: Subset<T, StudentSubjectAggregateArgs>): Prisma.PrismaPromise<GetStudentSubjectAggregateType<T>>

    /**
     * Group by StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSubjectGroupByArgs['orderBy'] }
        : { orderBy?: StudentSubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSubject model
   */
  readonly fields: StudentSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentProfile<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectReferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectReferenceDefaultArgs<ExtArgs>>): Prisma__SubjectReferenceClient<$Result.GetResult<Prisma.$SubjectReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentSubject model
   */
  interface StudentSubjectFieldRefs {
    readonly id: FieldRef<"StudentSubject", 'Int'>
    readonly studentProfileId: FieldRef<"StudentSubject", 'Int'>
    readonly subjectId: FieldRef<"StudentSubject", 'Int'>
    readonly grade: FieldRef<"StudentSubject", 'Decimal'>
    readonly status: FieldRef<"StudentSubject", 'String'>
    readonly enrolledAt: FieldRef<"StudentSubject", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentSubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentSubject findUnique
   */
  export type StudentSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findUniqueOrThrow
   */
  export type StudentSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findFirst
   */
  export type StudentSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findFirstOrThrow
   */
  export type StudentSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findMany
   */
  export type StudentSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubjects to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject create
   */
  export type StudentSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSubject.
     */
    data: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
  }

  /**
   * StudentSubject createMany
   */
  export type StudentSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSubject createManyAndReturn
   */
  export type StudentSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject update
   */
  export type StudentSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSubject.
     */
    data: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
    /**
     * Choose, which StudentSubject to update.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject updateMany
   */
  export type StudentSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
  }

  /**
   * StudentSubject updateManyAndReturn
   */
  export type StudentSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject upsert
   */
  export type StudentSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSubject to update in case it exists.
     */
    where: StudentSubjectWhereUniqueInput
    /**
     * In case the StudentSubject found by the `where` argument doesn't exist, create a new StudentSubject with this data.
     */
    create: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
    /**
     * In case the StudentSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
  }

  /**
   * StudentSubject delete
   */
  export type StudentSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter which StudentSubject to delete.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject deleteMany
   */
  export type StudentSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubjects to delete
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to delete.
     */
    limit?: number
  }

  /**
   * StudentSubject without action
   */
  export type StudentSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserReferenceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    roleId: 'roleId',
    status: 'status',
    syncedAt: 'syncedAt',
    updatedAt: 'updatedAt'
  };

  export type UserReferenceScalarFieldEnum = (typeof UserReferenceScalarFieldEnum)[keyof typeof UserReferenceScalarFieldEnum]


  export const SpecialityReferenceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    syncedAt: 'syncedAt'
  };

  export type SpecialityReferenceScalarFieldEnum = (typeof SpecialityReferenceScalarFieldEnum)[keyof typeof SpecialityReferenceScalarFieldEnum]


  export const CareerReferenceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalCicles: 'totalCicles',
    syncedAt: 'syncedAt'
  };

  export type CareerReferenceScalarFieldEnum = (typeof CareerReferenceScalarFieldEnum)[keyof typeof CareerReferenceScalarFieldEnum]


  export const SubjectReferenceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    careerId: 'careerId',
    cicleNumber: 'cicleNumber',
    syncedAt: 'syncedAt'
  };

  export type SubjectReferenceScalarFieldEnum = (typeof SubjectReferenceScalarFieldEnum)[keyof typeof SubjectReferenceScalarFieldEnum]


  export const TeacherProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialityId: 'specialityId',
    careerId: 'careerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherProfileScalarFieldEnum = (typeof TeacherProfileScalarFieldEnum)[keyof typeof TeacherProfileScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    careerId: 'careerId',
    currentCicle: 'currentCicle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const SubjectAssignmentScalarFieldEnum: {
    id: 'id',
    teacherProfileId: 'teacherProfileId',
    subjectId: 'subjectId',
    assignedAt: 'assignedAt'
  };

  export type SubjectAssignmentScalarFieldEnum = (typeof SubjectAssignmentScalarFieldEnum)[keyof typeof SubjectAssignmentScalarFieldEnum]


  export const StudentSubjectScalarFieldEnum: {
    id: 'id',
    studentProfileId: 'studentProfileId',
    subjectId: 'subjectId',
    grade: 'grade',
    status: 'status',
    enrolledAt: 'enrolledAt',
    updatedAt: 'updatedAt'
  };

  export type StudentSubjectScalarFieldEnum = (typeof StudentSubjectScalarFieldEnum)[keyof typeof StudentSubjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserReferenceWhereInput = {
    AND?: UserReferenceWhereInput | UserReferenceWhereInput[]
    OR?: UserReferenceWhereInput[]
    NOT?: UserReferenceWhereInput | UserReferenceWhereInput[]
    id?: IntFilter<"UserReference"> | number
    name?: StringFilter<"UserReference"> | string
    email?: StringFilter<"UserReference"> | string
    roleId?: IntFilter<"UserReference"> | number
    status?: StringFilter<"UserReference"> | string
    syncedAt?: DateTimeFilter<"UserReference"> | Date | string
    updatedAt?: DateTimeFilter<"UserReference"> | Date | string
    teacherProfile?: XOR<TeacherProfileNullableScalarRelationFilter, TeacherProfileWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
  }

  export type UserReferenceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
    teacherProfile?: TeacherProfileOrderByWithRelationInput
    studentProfile?: StudentProfileOrderByWithRelationInput
  }

  export type UserReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserReferenceWhereInput | UserReferenceWhereInput[]
    OR?: UserReferenceWhereInput[]
    NOT?: UserReferenceWhereInput | UserReferenceWhereInput[]
    name?: StringFilter<"UserReference"> | string
    roleId?: IntFilter<"UserReference"> | number
    status?: StringFilter<"UserReference"> | string
    syncedAt?: DateTimeFilter<"UserReference"> | Date | string
    updatedAt?: DateTimeFilter<"UserReference"> | Date | string
    teacherProfile?: XOR<TeacherProfileNullableScalarRelationFilter, TeacherProfileWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
  }, "id" | "email">

  export type UserReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserReferenceCountOrderByAggregateInput
    _avg?: UserReferenceAvgOrderByAggregateInput
    _max?: UserReferenceMaxOrderByAggregateInput
    _min?: UserReferenceMinOrderByAggregateInput
    _sum?: UserReferenceSumOrderByAggregateInput
  }

  export type UserReferenceScalarWhereWithAggregatesInput = {
    AND?: UserReferenceScalarWhereWithAggregatesInput | UserReferenceScalarWhereWithAggregatesInput[]
    OR?: UserReferenceScalarWhereWithAggregatesInput[]
    NOT?: UserReferenceScalarWhereWithAggregatesInput | UserReferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserReference"> | number
    name?: StringWithAggregatesFilter<"UserReference"> | string
    email?: StringWithAggregatesFilter<"UserReference"> | string
    roleId?: IntWithAggregatesFilter<"UserReference"> | number
    status?: StringWithAggregatesFilter<"UserReference"> | string
    syncedAt?: DateTimeWithAggregatesFilter<"UserReference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserReference"> | Date | string
  }

  export type SpecialityReferenceWhereInput = {
    AND?: SpecialityReferenceWhereInput | SpecialityReferenceWhereInput[]
    OR?: SpecialityReferenceWhereInput[]
    NOT?: SpecialityReferenceWhereInput | SpecialityReferenceWhereInput[]
    id?: IntFilter<"SpecialityReference"> | number
    name?: StringFilter<"SpecialityReference"> | string
    syncedAt?: DateTimeFilter<"SpecialityReference"> | Date | string
    teachers?: TeacherProfileListRelationFilter
  }

  export type SpecialityReferenceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
    teachers?: TeacherProfileOrderByRelationAggregateInput
  }

  export type SpecialityReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpecialityReferenceWhereInput | SpecialityReferenceWhereInput[]
    OR?: SpecialityReferenceWhereInput[]
    NOT?: SpecialityReferenceWhereInput | SpecialityReferenceWhereInput[]
    name?: StringFilter<"SpecialityReference"> | string
    syncedAt?: DateTimeFilter<"SpecialityReference"> | Date | string
    teachers?: TeacherProfileListRelationFilter
  }, "id">

  export type SpecialityReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
    _count?: SpecialityReferenceCountOrderByAggregateInput
    _avg?: SpecialityReferenceAvgOrderByAggregateInput
    _max?: SpecialityReferenceMaxOrderByAggregateInput
    _min?: SpecialityReferenceMinOrderByAggregateInput
    _sum?: SpecialityReferenceSumOrderByAggregateInput
  }

  export type SpecialityReferenceScalarWhereWithAggregatesInput = {
    AND?: SpecialityReferenceScalarWhereWithAggregatesInput | SpecialityReferenceScalarWhereWithAggregatesInput[]
    OR?: SpecialityReferenceScalarWhereWithAggregatesInput[]
    NOT?: SpecialityReferenceScalarWhereWithAggregatesInput | SpecialityReferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpecialityReference"> | number
    name?: StringWithAggregatesFilter<"SpecialityReference"> | string
    syncedAt?: DateTimeWithAggregatesFilter<"SpecialityReference"> | Date | string
  }

  export type CareerReferenceWhereInput = {
    AND?: CareerReferenceWhereInput | CareerReferenceWhereInput[]
    OR?: CareerReferenceWhereInput[]
    NOT?: CareerReferenceWhereInput | CareerReferenceWhereInput[]
    id?: IntFilter<"CareerReference"> | number
    name?: StringFilter<"CareerReference"> | string
    totalCicles?: IntFilter<"CareerReference"> | number
    syncedAt?: DateTimeFilter<"CareerReference"> | Date | string
    teachers?: TeacherProfileListRelationFilter
    students?: StudentProfileListRelationFilter
  }

  export type CareerReferenceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalCicles?: SortOrder
    syncedAt?: SortOrder
    teachers?: TeacherProfileOrderByRelationAggregateInput
    students?: StudentProfileOrderByRelationAggregateInput
  }

  export type CareerReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CareerReferenceWhereInput | CareerReferenceWhereInput[]
    OR?: CareerReferenceWhereInput[]
    NOT?: CareerReferenceWhereInput | CareerReferenceWhereInput[]
    name?: StringFilter<"CareerReference"> | string
    totalCicles?: IntFilter<"CareerReference"> | number
    syncedAt?: DateTimeFilter<"CareerReference"> | Date | string
    teachers?: TeacherProfileListRelationFilter
    students?: StudentProfileListRelationFilter
  }, "id">

  export type CareerReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalCicles?: SortOrder
    syncedAt?: SortOrder
    _count?: CareerReferenceCountOrderByAggregateInput
    _avg?: CareerReferenceAvgOrderByAggregateInput
    _max?: CareerReferenceMaxOrderByAggregateInput
    _min?: CareerReferenceMinOrderByAggregateInput
    _sum?: CareerReferenceSumOrderByAggregateInput
  }

  export type CareerReferenceScalarWhereWithAggregatesInput = {
    AND?: CareerReferenceScalarWhereWithAggregatesInput | CareerReferenceScalarWhereWithAggregatesInput[]
    OR?: CareerReferenceScalarWhereWithAggregatesInput[]
    NOT?: CareerReferenceScalarWhereWithAggregatesInput | CareerReferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CareerReference"> | number
    name?: StringWithAggregatesFilter<"CareerReference"> | string
    totalCicles?: IntWithAggregatesFilter<"CareerReference"> | number
    syncedAt?: DateTimeWithAggregatesFilter<"CareerReference"> | Date | string
  }

  export type SubjectReferenceWhereInput = {
    AND?: SubjectReferenceWhereInput | SubjectReferenceWhereInput[]
    OR?: SubjectReferenceWhereInput[]
    NOT?: SubjectReferenceWhereInput | SubjectReferenceWhereInput[]
    id?: IntFilter<"SubjectReference"> | number
    name?: StringFilter<"SubjectReference"> | string
    careerId?: IntFilter<"SubjectReference"> | number
    cicleNumber?: IntFilter<"SubjectReference"> | number
    syncedAt?: DateTimeFilter<"SubjectReference"> | Date | string
    subjectAssignments?: SubjectAssignmentListRelationFilter
    studentSubjects?: StudentSubjectListRelationFilter
  }

  export type SubjectReferenceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    careerId?: SortOrder
    cicleNumber?: SortOrder
    syncedAt?: SortOrder
    subjectAssignments?: SubjectAssignmentOrderByRelationAggregateInput
    studentSubjects?: StudentSubjectOrderByRelationAggregateInput
  }

  export type SubjectReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectReferenceWhereInput | SubjectReferenceWhereInput[]
    OR?: SubjectReferenceWhereInput[]
    NOT?: SubjectReferenceWhereInput | SubjectReferenceWhereInput[]
    name?: StringFilter<"SubjectReference"> | string
    careerId?: IntFilter<"SubjectReference"> | number
    cicleNumber?: IntFilter<"SubjectReference"> | number
    syncedAt?: DateTimeFilter<"SubjectReference"> | Date | string
    subjectAssignments?: SubjectAssignmentListRelationFilter
    studentSubjects?: StudentSubjectListRelationFilter
  }, "id">

  export type SubjectReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    careerId?: SortOrder
    cicleNumber?: SortOrder
    syncedAt?: SortOrder
    _count?: SubjectReferenceCountOrderByAggregateInput
    _avg?: SubjectReferenceAvgOrderByAggregateInput
    _max?: SubjectReferenceMaxOrderByAggregateInput
    _min?: SubjectReferenceMinOrderByAggregateInput
    _sum?: SubjectReferenceSumOrderByAggregateInput
  }

  export type SubjectReferenceScalarWhereWithAggregatesInput = {
    AND?: SubjectReferenceScalarWhereWithAggregatesInput | SubjectReferenceScalarWhereWithAggregatesInput[]
    OR?: SubjectReferenceScalarWhereWithAggregatesInput[]
    NOT?: SubjectReferenceScalarWhereWithAggregatesInput | SubjectReferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubjectReference"> | number
    name?: StringWithAggregatesFilter<"SubjectReference"> | string
    careerId?: IntWithAggregatesFilter<"SubjectReference"> | number
    cicleNumber?: IntWithAggregatesFilter<"SubjectReference"> | number
    syncedAt?: DateTimeWithAggregatesFilter<"SubjectReference"> | Date | string
  }

  export type TeacherProfileWhereInput = {
    AND?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    OR?: TeacherProfileWhereInput[]
    NOT?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    id?: IntFilter<"TeacherProfile"> | number
    userId?: IntFilter<"TeacherProfile"> | number
    specialityId?: IntFilter<"TeacherProfile"> | number
    careerId?: IntFilter<"TeacherProfile"> | number
    createdAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    user?: XOR<UserReferenceScalarRelationFilter, UserReferenceWhereInput>
    speciality?: XOR<SpecialityReferenceScalarRelationFilter, SpecialityReferenceWhereInput>
    career?: XOR<CareerReferenceScalarRelationFilter, CareerReferenceWhereInput>
    subjects?: SubjectAssignmentListRelationFilter
  }

  export type TeacherProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialityId?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserReferenceOrderByWithRelationInput
    speciality?: SpecialityReferenceOrderByWithRelationInput
    career?: CareerReferenceOrderByWithRelationInput
    subjects?: SubjectAssignmentOrderByRelationAggregateInput
  }

  export type TeacherProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    OR?: TeacherProfileWhereInput[]
    NOT?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    specialityId?: IntFilter<"TeacherProfile"> | number
    careerId?: IntFilter<"TeacherProfile"> | number
    createdAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    user?: XOR<UserReferenceScalarRelationFilter, UserReferenceWhereInput>
    speciality?: XOR<SpecialityReferenceScalarRelationFilter, SpecialityReferenceWhereInput>
    career?: XOR<CareerReferenceScalarRelationFilter, CareerReferenceWhereInput>
    subjects?: SubjectAssignmentListRelationFilter
  }, "id" | "userId">

  export type TeacherProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialityId?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherProfileCountOrderByAggregateInput
    _avg?: TeacherProfileAvgOrderByAggregateInput
    _max?: TeacherProfileMaxOrderByAggregateInput
    _min?: TeacherProfileMinOrderByAggregateInput
    _sum?: TeacherProfileSumOrderByAggregateInput
  }

  export type TeacherProfileScalarWhereWithAggregatesInput = {
    AND?: TeacherProfileScalarWhereWithAggregatesInput | TeacherProfileScalarWhereWithAggregatesInput[]
    OR?: TeacherProfileScalarWhereWithAggregatesInput[]
    NOT?: TeacherProfileScalarWhereWithAggregatesInput | TeacherProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherProfile"> | number
    userId?: IntWithAggregatesFilter<"TeacherProfile"> | number
    specialityId?: IntWithAggregatesFilter<"TeacherProfile"> | number
    careerId?: IntWithAggregatesFilter<"TeacherProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TeacherProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeacherProfile"> | Date | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: IntFilter<"StudentProfile"> | number
    userId?: IntFilter<"StudentProfile"> | number
    careerId?: IntFilter<"StudentProfile"> | number
    currentCicle?: IntFilter<"StudentProfile"> | number
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    user?: XOR<UserReferenceScalarRelationFilter, UserReferenceWhereInput>
    career?: XOR<CareerReferenceScalarRelationFilter, CareerReferenceWhereInput>
    studentSubjects?: StudentSubjectListRelationFilter
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    currentCicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserReferenceOrderByWithRelationInput
    career?: CareerReferenceOrderByWithRelationInput
    studentSubjects?: StudentSubjectOrderByRelationAggregateInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    careerId?: IntFilter<"StudentProfile"> | number
    currentCicle?: IntFilter<"StudentProfile"> | number
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    user?: XOR<UserReferenceScalarRelationFilter, UserReferenceWhereInput>
    career?: XOR<CareerReferenceScalarRelationFilter, CareerReferenceWhereInput>
    studentSubjects?: StudentSubjectListRelationFilter
  }, "id" | "userId">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    currentCicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _avg?: StudentProfileAvgOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
    _sum?: StudentProfileSumOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentProfile"> | number
    userId?: IntWithAggregatesFilter<"StudentProfile"> | number
    careerId?: IntWithAggregatesFilter<"StudentProfile"> | number
    currentCicle?: IntWithAggregatesFilter<"StudentProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
  }

  export type SubjectAssignmentWhereInput = {
    AND?: SubjectAssignmentWhereInput | SubjectAssignmentWhereInput[]
    OR?: SubjectAssignmentWhereInput[]
    NOT?: SubjectAssignmentWhereInput | SubjectAssignmentWhereInput[]
    id?: IntFilter<"SubjectAssignment"> | number
    teacherProfileId?: IntFilter<"SubjectAssignment"> | number
    subjectId?: IntFilter<"SubjectAssignment"> | number
    assignedAt?: DateTimeFilter<"SubjectAssignment"> | Date | string
    teacherProfile?: XOR<TeacherProfileScalarRelationFilter, TeacherProfileWhereInput>
    subject?: XOR<SubjectReferenceScalarRelationFilter, SubjectReferenceWhereInput>
  }

  export type SubjectAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    teacherProfileId?: SortOrder
    subjectId?: SortOrder
    assignedAt?: SortOrder
    teacherProfile?: TeacherProfileOrderByWithRelationInput
    subject?: SubjectReferenceOrderByWithRelationInput
  }

  export type SubjectAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacherProfileId_subjectId?: SubjectAssignmentTeacherProfileIdSubjectIdCompoundUniqueInput
    AND?: SubjectAssignmentWhereInput | SubjectAssignmentWhereInput[]
    OR?: SubjectAssignmentWhereInput[]
    NOT?: SubjectAssignmentWhereInput | SubjectAssignmentWhereInput[]
    teacherProfileId?: IntFilter<"SubjectAssignment"> | number
    subjectId?: IntFilter<"SubjectAssignment"> | number
    assignedAt?: DateTimeFilter<"SubjectAssignment"> | Date | string
    teacherProfile?: XOR<TeacherProfileScalarRelationFilter, TeacherProfileWhereInput>
    subject?: XOR<SubjectReferenceScalarRelationFilter, SubjectReferenceWhereInput>
  }, "id" | "teacherProfileId_subjectId">

  export type SubjectAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    teacherProfileId?: SortOrder
    subjectId?: SortOrder
    assignedAt?: SortOrder
    _count?: SubjectAssignmentCountOrderByAggregateInput
    _avg?: SubjectAssignmentAvgOrderByAggregateInput
    _max?: SubjectAssignmentMaxOrderByAggregateInput
    _min?: SubjectAssignmentMinOrderByAggregateInput
    _sum?: SubjectAssignmentSumOrderByAggregateInput
  }

  export type SubjectAssignmentScalarWhereWithAggregatesInput = {
    AND?: SubjectAssignmentScalarWhereWithAggregatesInput | SubjectAssignmentScalarWhereWithAggregatesInput[]
    OR?: SubjectAssignmentScalarWhereWithAggregatesInput[]
    NOT?: SubjectAssignmentScalarWhereWithAggregatesInput | SubjectAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubjectAssignment"> | number
    teacherProfileId?: IntWithAggregatesFilter<"SubjectAssignment"> | number
    subjectId?: IntWithAggregatesFilter<"SubjectAssignment"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"SubjectAssignment"> | Date | string
  }

  export type StudentSubjectWhereInput = {
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentProfileId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    grade?: DecimalNullableFilter<"StudentSubject"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"StudentSubject"> | string
    enrolledAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    subject?: XOR<SubjectReferenceScalarRelationFilter, SubjectReferenceWhereInput>
  }

  export type StudentSubjectOrderByWithRelationInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrderInput | SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    updatedAt?: SortOrder
    studentProfile?: StudentProfileOrderByWithRelationInput
    subject?: SubjectReferenceOrderByWithRelationInput
  }

  export type StudentSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentProfileId_subjectId?: StudentSubjectStudentProfileIdSubjectIdCompoundUniqueInput
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    studentProfileId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    grade?: DecimalNullableFilter<"StudentSubject"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"StudentSubject"> | string
    enrolledAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    subject?: XOR<SubjectReferenceScalarRelationFilter, SubjectReferenceWhereInput>
  }, "id" | "studentProfileId_subjectId">

  export type StudentSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrderInput | SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentSubjectCountOrderByAggregateInput
    _avg?: StudentSubjectAvgOrderByAggregateInput
    _max?: StudentSubjectMaxOrderByAggregateInput
    _min?: StudentSubjectMinOrderByAggregateInput
    _sum?: StudentSubjectSumOrderByAggregateInput
  }

  export type StudentSubjectScalarWhereWithAggregatesInput = {
    AND?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    OR?: StudentSubjectScalarWhereWithAggregatesInput[]
    NOT?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentSubject"> | number
    studentProfileId?: IntWithAggregatesFilter<"StudentSubject"> | number
    subjectId?: IntWithAggregatesFilter<"StudentSubject"> | number
    grade?: DecimalNullableWithAggregatesFilter<"StudentSubject"> | Decimal | DecimalJsLike | number | string | null
    status?: StringWithAggregatesFilter<"StudentSubject"> | string
    enrolledAt?: DateTimeWithAggregatesFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentSubject"> | Date | string
  }

  export type UserReferenceCreateInput = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt?: Date | string
    updatedAt?: Date | string
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
  }

  export type UserReferenceUncheckedCreateInput = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt?: Date | string
    updatedAt?: Date | string
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserReferenceUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserReferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserReferenceCreateManyInput = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserReferenceUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialityReferenceCreateInput = {
    id: number
    name: string
    syncedAt?: Date | string
    teachers?: TeacherProfileCreateNestedManyWithoutSpecialityInput
  }

  export type SpecialityReferenceUncheckedCreateInput = {
    id: number
    name: string
    syncedAt?: Date | string
    teachers?: TeacherProfileUncheckedCreateNestedManyWithoutSpecialityInput
  }

  export type SpecialityReferenceUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherProfileUpdateManyWithoutSpecialityNestedInput
  }

  export type SpecialityReferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherProfileUncheckedUpdateManyWithoutSpecialityNestedInput
  }

  export type SpecialityReferenceCreateManyInput = {
    id: number
    name: string
    syncedAt?: Date | string
  }

  export type SpecialityReferenceUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialityReferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerReferenceCreateInput = {
    id: number
    name: string
    totalCicles: number
    syncedAt?: Date | string
    teachers?: TeacherProfileCreateNestedManyWithoutCareerInput
    students?: StudentProfileCreateNestedManyWithoutCareerInput
  }

  export type CareerReferenceUncheckedCreateInput = {
    id: number
    name: string
    totalCicles: number
    syncedAt?: Date | string
    teachers?: TeacherProfileUncheckedCreateNestedManyWithoutCareerInput
    students?: StudentProfileUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerReferenceUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherProfileUpdateManyWithoutCareerNestedInput
    students?: StudentProfileUpdateManyWithoutCareerNestedInput
  }

  export type CareerReferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherProfileUncheckedUpdateManyWithoutCareerNestedInput
    students?: StudentProfileUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerReferenceCreateManyInput = {
    id: number
    name: string
    totalCicles: number
    syncedAt?: Date | string
  }

  export type CareerReferenceUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerReferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectReferenceCreateInput = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt?: Date | string
    subjectAssignments?: SubjectAssignmentCreateNestedManyWithoutSubjectInput
    studentSubjects?: StudentSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectReferenceUncheckedCreateInput = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt?: Date | string
    subjectAssignments?: SubjectAssignmentUncheckedCreateNestedManyWithoutSubjectInput
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectReferenceUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectAssignments?: SubjectAssignmentUpdateManyWithoutSubjectNestedInput
    studentSubjects?: StudentSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectReferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectAssignments?: SubjectAssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectReferenceCreateManyInput = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt?: Date | string
  }

  export type SubjectReferenceUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectReferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserReferenceCreateNestedOneWithoutTeacherProfileInput
    speciality: SpecialityReferenceCreateNestedOneWithoutTeachersInput
    career: CareerReferenceCreateNestedOneWithoutTeachersInput
    subjects?: SubjectAssignmentCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileUncheckedCreateInput = {
    id?: number
    userId: number
    specialityId: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectAssignmentUncheckedCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserReferenceUpdateOneRequiredWithoutTeacherProfileNestedInput
    speciality?: SpecialityReferenceUpdateOneRequiredWithoutTeachersNestedInput
    career?: CareerReferenceUpdateOneRequiredWithoutTeachersNestedInput
    subjects?: SubjectAssignmentUpdateManyWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectAssignmentUncheckedUpdateManyWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileCreateManyInput = {
    id?: number
    userId: number
    specialityId: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateInput = {
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserReferenceCreateNestedOneWithoutStudentProfileInput
    career: CareerReferenceCreateNestedOneWithoutStudentsInput
    studentSubjects?: StudentSubjectCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: number
    userId: number
    careerId: number
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileUpdateInput = {
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserReferenceUpdateOneRequiredWithoutStudentProfileNestedInput
    career?: CareerReferenceUpdateOneRequiredWithoutStudentsNestedInput
    studentSubjects?: StudentSubjectUpdateManyWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type StudentProfileCreateManyInput = {
    id?: number
    userId: number
    careerId: number
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUpdateManyMutationInput = {
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectAssignmentCreateInput = {
    assignedAt?: Date | string
    teacherProfile: TeacherProfileCreateNestedOneWithoutSubjectsInput
    subject: SubjectReferenceCreateNestedOneWithoutSubjectAssignmentsInput
  }

  export type SubjectAssignmentUncheckedCreateInput = {
    id?: number
    teacherProfileId: number
    subjectId: number
    assignedAt?: Date | string
  }

  export type SubjectAssignmentUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectReferenceUpdateOneRequiredWithoutSubjectAssignmentsNestedInput
  }

  export type SubjectAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherProfileId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectAssignmentCreateManyInput = {
    id?: number
    teacherProfileId: number
    subjectId: number
    assignedAt?: Date | string
  }

  export type SubjectAssignmentUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherProfileId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateInput = {
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
    studentProfile: StudentProfileCreateNestedOneWithoutStudentSubjectsInput
    subject: SubjectReferenceCreateNestedOneWithoutStudentSubjectsInput
  }

  export type StudentSubjectUncheckedCreateInput = {
    id?: number
    studentProfileId: number
    subjectId: number
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateInput = {
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUpdateOneRequiredWithoutStudentSubjectsNestedInput
    subject?: SubjectReferenceUpdateOneRequiredWithoutStudentSubjectsNestedInput
  }

  export type StudentSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentProfileId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManyInput = {
    id?: number
    studentProfileId: number
    subjectId: number
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateManyMutationInput = {
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentProfileId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeacherProfileNullableScalarRelationFilter = {
    is?: TeacherProfileWhereInput | null
    isNot?: TeacherProfileWhereInput | null
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type UserReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserReferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserReferenceSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeacherProfileListRelationFilter = {
    every?: TeacherProfileWhereInput
    some?: TeacherProfileWhereInput
    none?: TeacherProfileWhereInput
  }

  export type TeacherProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialityReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
  }

  export type SpecialityReferenceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialityReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
  }

  export type SpecialityReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
  }

  export type SpecialityReferenceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentProfileListRelationFilter = {
    every?: StudentProfileWhereInput
    some?: StudentProfileWhereInput
    none?: StudentProfileWhereInput
  }

  export type StudentProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareerReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalCicles?: SortOrder
    syncedAt?: SortOrder
  }

  export type CareerReferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCicles?: SortOrder
  }

  export type CareerReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalCicles?: SortOrder
    syncedAt?: SortOrder
  }

  export type CareerReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalCicles?: SortOrder
    syncedAt?: SortOrder
  }

  export type CareerReferenceSumOrderByAggregateInput = {
    id?: SortOrder
    totalCicles?: SortOrder
  }

  export type SubjectAssignmentListRelationFilter = {
    every?: SubjectAssignmentWhereInput
    some?: SubjectAssignmentWhereInput
    none?: SubjectAssignmentWhereInput
  }

  export type StudentSubjectListRelationFilter = {
    every?: StudentSubjectWhereInput
    some?: StudentSubjectWhereInput
    none?: StudentSubjectWhereInput
  }

  export type SubjectAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    careerId?: SortOrder
    cicleNumber?: SortOrder
    syncedAt?: SortOrder
  }

  export type SubjectReferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
    cicleNumber?: SortOrder
  }

  export type SubjectReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    careerId?: SortOrder
    cicleNumber?: SortOrder
    syncedAt?: SortOrder
  }

  export type SubjectReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    careerId?: SortOrder
    cicleNumber?: SortOrder
    syncedAt?: SortOrder
  }

  export type SubjectReferenceSumOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
    cicleNumber?: SortOrder
  }

  export type UserReferenceScalarRelationFilter = {
    is?: UserReferenceWhereInput
    isNot?: UserReferenceWhereInput
  }

  export type SpecialityReferenceScalarRelationFilter = {
    is?: SpecialityReferenceWhereInput
    isNot?: SpecialityReferenceWhereInput
  }

  export type CareerReferenceScalarRelationFilter = {
    is?: CareerReferenceWhereInput
    isNot?: CareerReferenceWhereInput
  }

  export type TeacherProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialityId?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialityId?: SortOrder
    careerId?: SortOrder
  }

  export type TeacherProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialityId?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialityId?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialityId?: SortOrder
    careerId?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    currentCicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    currentCicle?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    currentCicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    currentCicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    currentCicle?: SortOrder
  }

  export type TeacherProfileScalarRelationFilter = {
    is?: TeacherProfileWhereInput
    isNot?: TeacherProfileWhereInput
  }

  export type SubjectReferenceScalarRelationFilter = {
    is?: SubjectReferenceWhereInput
    isNot?: SubjectReferenceWhereInput
  }

  export type SubjectAssignmentTeacherProfileIdSubjectIdCompoundUniqueInput = {
    teacherProfileId: number
    subjectId: number
  }

  export type SubjectAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    teacherProfileId?: SortOrder
    subjectId?: SortOrder
    assignedAt?: SortOrder
  }

  export type SubjectAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherProfileId?: SortOrder
    subjectId?: SortOrder
  }

  export type SubjectAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherProfileId?: SortOrder
    subjectId?: SortOrder
    assignedAt?: SortOrder
  }

  export type SubjectAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    teacherProfileId?: SortOrder
    subjectId?: SortOrder
    assignedAt?: SortOrder
  }

  export type SubjectAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    teacherProfileId?: SortOrder
    subjectId?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StudentProfileScalarRelationFilter = {
    is?: StudentProfileWhereInput
    isNot?: StudentProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentSubjectStudentProfileIdSubjectIdCompoundUniqueInput = {
    studentProfileId: number
    subjectId: number
  }

  export type StudentSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
  }

  export type StudentSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TeacherProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    connect?: TeacherProfileWhereUniqueInput
  }

  export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type TeacherProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    connect?: TeacherProfileWhereUniqueInput
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeacherProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    upsert?: TeacherProfileUpsertWithoutUserInput
    disconnect?: TeacherProfileWhereInput | boolean
    delete?: TeacherProfileWhereInput | boolean
    connect?: TeacherProfileWhereUniqueInput
    update?: XOR<XOR<TeacherProfileUpdateToOneWithWhereWithoutUserInput, TeacherProfileUpdateWithoutUserInput>, TeacherProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type TeacherProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    upsert?: TeacherProfileUpsertWithoutUserInput
    disconnect?: TeacherProfileWhereInput | boolean
    delete?: TeacherProfileWhereInput | boolean
    connect?: TeacherProfileWhereUniqueInput
    update?: XOR<XOR<TeacherProfileUpdateToOneWithWhereWithoutUserInput, TeacherProfileUpdateWithoutUserInput>, TeacherProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type TeacherProfileCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<TeacherProfileCreateWithoutSpecialityInput, TeacherProfileUncheckedCreateWithoutSpecialityInput> | TeacherProfileCreateWithoutSpecialityInput[] | TeacherProfileUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutSpecialityInput | TeacherProfileCreateOrConnectWithoutSpecialityInput[]
    createMany?: TeacherProfileCreateManySpecialityInputEnvelope
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
  }

  export type TeacherProfileUncheckedCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<TeacherProfileCreateWithoutSpecialityInput, TeacherProfileUncheckedCreateWithoutSpecialityInput> | TeacherProfileCreateWithoutSpecialityInput[] | TeacherProfileUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutSpecialityInput | TeacherProfileCreateOrConnectWithoutSpecialityInput[]
    createMany?: TeacherProfileCreateManySpecialityInputEnvelope
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
  }

  export type TeacherProfileUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutSpecialityInput, TeacherProfileUncheckedCreateWithoutSpecialityInput> | TeacherProfileCreateWithoutSpecialityInput[] | TeacherProfileUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutSpecialityInput | TeacherProfileCreateOrConnectWithoutSpecialityInput[]
    upsert?: TeacherProfileUpsertWithWhereUniqueWithoutSpecialityInput | TeacherProfileUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: TeacherProfileCreateManySpecialityInputEnvelope
    set?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    disconnect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    delete?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    update?: TeacherProfileUpdateWithWhereUniqueWithoutSpecialityInput | TeacherProfileUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: TeacherProfileUpdateManyWithWhereWithoutSpecialityInput | TeacherProfileUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: TeacherProfileScalarWhereInput | TeacherProfileScalarWhereInput[]
  }

  export type TeacherProfileUncheckedUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutSpecialityInput, TeacherProfileUncheckedCreateWithoutSpecialityInput> | TeacherProfileCreateWithoutSpecialityInput[] | TeacherProfileUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutSpecialityInput | TeacherProfileCreateOrConnectWithoutSpecialityInput[]
    upsert?: TeacherProfileUpsertWithWhereUniqueWithoutSpecialityInput | TeacherProfileUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: TeacherProfileCreateManySpecialityInputEnvelope
    set?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    disconnect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    delete?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    update?: TeacherProfileUpdateWithWhereUniqueWithoutSpecialityInput | TeacherProfileUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: TeacherProfileUpdateManyWithWhereWithoutSpecialityInput | TeacherProfileUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: TeacherProfileScalarWhereInput | TeacherProfileScalarWhereInput[]
  }

  export type TeacherProfileCreateNestedManyWithoutCareerInput = {
    create?: XOR<TeacherProfileCreateWithoutCareerInput, TeacherProfileUncheckedCreateWithoutCareerInput> | TeacherProfileCreateWithoutCareerInput[] | TeacherProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutCareerInput | TeacherProfileCreateOrConnectWithoutCareerInput[]
    createMany?: TeacherProfileCreateManyCareerInputEnvelope
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
  }

  export type StudentProfileCreateNestedManyWithoutCareerInput = {
    create?: XOR<StudentProfileCreateWithoutCareerInput, StudentProfileUncheckedCreateWithoutCareerInput> | StudentProfileCreateWithoutCareerInput[] | StudentProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutCareerInput | StudentProfileCreateOrConnectWithoutCareerInput[]
    createMany?: StudentProfileCreateManyCareerInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type TeacherProfileUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<TeacherProfileCreateWithoutCareerInput, TeacherProfileUncheckedCreateWithoutCareerInput> | TeacherProfileCreateWithoutCareerInput[] | TeacherProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutCareerInput | TeacherProfileCreateOrConnectWithoutCareerInput[]
    createMany?: TeacherProfileCreateManyCareerInputEnvelope
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<StudentProfileCreateWithoutCareerInput, StudentProfileUncheckedCreateWithoutCareerInput> | StudentProfileCreateWithoutCareerInput[] | StudentProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutCareerInput | StudentProfileCreateOrConnectWithoutCareerInput[]
    createMany?: StudentProfileCreateManyCareerInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type TeacherProfileUpdateManyWithoutCareerNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutCareerInput, TeacherProfileUncheckedCreateWithoutCareerInput> | TeacherProfileCreateWithoutCareerInput[] | TeacherProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutCareerInput | TeacherProfileCreateOrConnectWithoutCareerInput[]
    upsert?: TeacherProfileUpsertWithWhereUniqueWithoutCareerInput | TeacherProfileUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: TeacherProfileCreateManyCareerInputEnvelope
    set?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    disconnect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    delete?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    update?: TeacherProfileUpdateWithWhereUniqueWithoutCareerInput | TeacherProfileUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: TeacherProfileUpdateManyWithWhereWithoutCareerInput | TeacherProfileUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: TeacherProfileScalarWhereInput | TeacherProfileScalarWhereInput[]
  }

  export type StudentProfileUpdateManyWithoutCareerNestedInput = {
    create?: XOR<StudentProfileCreateWithoutCareerInput, StudentProfileUncheckedCreateWithoutCareerInput> | StudentProfileCreateWithoutCareerInput[] | StudentProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutCareerInput | StudentProfileCreateOrConnectWithoutCareerInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutCareerInput | StudentProfileUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: StudentProfileCreateManyCareerInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutCareerInput | StudentProfileUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutCareerInput | StudentProfileUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type TeacherProfileUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutCareerInput, TeacherProfileUncheckedCreateWithoutCareerInput> | TeacherProfileCreateWithoutCareerInput[] | TeacherProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutCareerInput | TeacherProfileCreateOrConnectWithoutCareerInput[]
    upsert?: TeacherProfileUpsertWithWhereUniqueWithoutCareerInput | TeacherProfileUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: TeacherProfileCreateManyCareerInputEnvelope
    set?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    disconnect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    delete?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    connect?: TeacherProfileWhereUniqueInput | TeacherProfileWhereUniqueInput[]
    update?: TeacherProfileUpdateWithWhereUniqueWithoutCareerInput | TeacherProfileUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: TeacherProfileUpdateManyWithWhereWithoutCareerInput | TeacherProfileUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: TeacherProfileScalarWhereInput | TeacherProfileScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<StudentProfileCreateWithoutCareerInput, StudentProfileUncheckedCreateWithoutCareerInput> | StudentProfileCreateWithoutCareerInput[] | StudentProfileUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutCareerInput | StudentProfileCreateOrConnectWithoutCareerInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutCareerInput | StudentProfileUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: StudentProfileCreateManyCareerInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutCareerInput | StudentProfileUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutCareerInput | StudentProfileUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type SubjectAssignmentCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SubjectAssignmentCreateWithoutSubjectInput, SubjectAssignmentUncheckedCreateWithoutSubjectInput> | SubjectAssignmentCreateWithoutSubjectInput[] | SubjectAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutSubjectInput | SubjectAssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: SubjectAssignmentCreateManySubjectInputEnvelope
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
  }

  export type StudentSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type SubjectAssignmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SubjectAssignmentCreateWithoutSubjectInput, SubjectAssignmentUncheckedCreateWithoutSubjectInput> | SubjectAssignmentCreateWithoutSubjectInput[] | SubjectAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutSubjectInput | SubjectAssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: SubjectAssignmentCreateManySubjectInputEnvelope
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type SubjectAssignmentUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SubjectAssignmentCreateWithoutSubjectInput, SubjectAssignmentUncheckedCreateWithoutSubjectInput> | SubjectAssignmentCreateWithoutSubjectInput[] | SubjectAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutSubjectInput | SubjectAssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: SubjectAssignmentUpsertWithWhereUniqueWithoutSubjectInput | SubjectAssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SubjectAssignmentCreateManySubjectInputEnvelope
    set?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    disconnect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    delete?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    update?: SubjectAssignmentUpdateWithWhereUniqueWithoutSubjectInput | SubjectAssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SubjectAssignmentUpdateManyWithWhereWithoutSubjectInput | SubjectAssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SubjectAssignmentScalarWhereInput | SubjectAssignmentScalarWhereInput[]
  }

  export type StudentSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type SubjectAssignmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SubjectAssignmentCreateWithoutSubjectInput, SubjectAssignmentUncheckedCreateWithoutSubjectInput> | SubjectAssignmentCreateWithoutSubjectInput[] | SubjectAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutSubjectInput | SubjectAssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: SubjectAssignmentUpsertWithWhereUniqueWithoutSubjectInput | SubjectAssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SubjectAssignmentCreateManySubjectInputEnvelope
    set?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    disconnect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    delete?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    update?: SubjectAssignmentUpdateWithWhereUniqueWithoutSubjectInput | SubjectAssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SubjectAssignmentUpdateManyWithWhereWithoutSubjectInput | SubjectAssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SubjectAssignmentScalarWhereInput | SubjectAssignmentScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type UserReferenceCreateNestedOneWithoutTeacherProfileInput = {
    create?: XOR<UserReferenceCreateWithoutTeacherProfileInput, UserReferenceUncheckedCreateWithoutTeacherProfileInput>
    connectOrCreate?: UserReferenceCreateOrConnectWithoutTeacherProfileInput
    connect?: UserReferenceWhereUniqueInput
  }

  export type SpecialityReferenceCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SpecialityReferenceCreateWithoutTeachersInput, SpecialityReferenceUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SpecialityReferenceCreateOrConnectWithoutTeachersInput
    connect?: SpecialityReferenceWhereUniqueInput
  }

  export type CareerReferenceCreateNestedOneWithoutTeachersInput = {
    create?: XOR<CareerReferenceCreateWithoutTeachersInput, CareerReferenceUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: CareerReferenceCreateOrConnectWithoutTeachersInput
    connect?: CareerReferenceWhereUniqueInput
  }

  export type SubjectAssignmentCreateNestedManyWithoutTeacherProfileInput = {
    create?: XOR<SubjectAssignmentCreateWithoutTeacherProfileInput, SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput> | SubjectAssignmentCreateWithoutTeacherProfileInput[] | SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput | SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput[]
    createMany?: SubjectAssignmentCreateManyTeacherProfileInputEnvelope
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
  }

  export type SubjectAssignmentUncheckedCreateNestedManyWithoutTeacherProfileInput = {
    create?: XOR<SubjectAssignmentCreateWithoutTeacherProfileInput, SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput> | SubjectAssignmentCreateWithoutTeacherProfileInput[] | SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput | SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput[]
    createMany?: SubjectAssignmentCreateManyTeacherProfileInputEnvelope
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
  }

  export type UserReferenceUpdateOneRequiredWithoutTeacherProfileNestedInput = {
    create?: XOR<UserReferenceCreateWithoutTeacherProfileInput, UserReferenceUncheckedCreateWithoutTeacherProfileInput>
    connectOrCreate?: UserReferenceCreateOrConnectWithoutTeacherProfileInput
    upsert?: UserReferenceUpsertWithoutTeacherProfileInput
    connect?: UserReferenceWhereUniqueInput
    update?: XOR<XOR<UserReferenceUpdateToOneWithWhereWithoutTeacherProfileInput, UserReferenceUpdateWithoutTeacherProfileInput>, UserReferenceUncheckedUpdateWithoutTeacherProfileInput>
  }

  export type SpecialityReferenceUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<SpecialityReferenceCreateWithoutTeachersInput, SpecialityReferenceUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SpecialityReferenceCreateOrConnectWithoutTeachersInput
    upsert?: SpecialityReferenceUpsertWithoutTeachersInput
    connect?: SpecialityReferenceWhereUniqueInput
    update?: XOR<XOR<SpecialityReferenceUpdateToOneWithWhereWithoutTeachersInput, SpecialityReferenceUpdateWithoutTeachersInput>, SpecialityReferenceUncheckedUpdateWithoutTeachersInput>
  }

  export type CareerReferenceUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<CareerReferenceCreateWithoutTeachersInput, CareerReferenceUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: CareerReferenceCreateOrConnectWithoutTeachersInput
    upsert?: CareerReferenceUpsertWithoutTeachersInput
    connect?: CareerReferenceWhereUniqueInput
    update?: XOR<XOR<CareerReferenceUpdateToOneWithWhereWithoutTeachersInput, CareerReferenceUpdateWithoutTeachersInput>, CareerReferenceUncheckedUpdateWithoutTeachersInput>
  }

  export type SubjectAssignmentUpdateManyWithoutTeacherProfileNestedInput = {
    create?: XOR<SubjectAssignmentCreateWithoutTeacherProfileInput, SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput> | SubjectAssignmentCreateWithoutTeacherProfileInput[] | SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput | SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput[]
    upsert?: SubjectAssignmentUpsertWithWhereUniqueWithoutTeacherProfileInput | SubjectAssignmentUpsertWithWhereUniqueWithoutTeacherProfileInput[]
    createMany?: SubjectAssignmentCreateManyTeacherProfileInputEnvelope
    set?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    disconnect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    delete?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    update?: SubjectAssignmentUpdateWithWhereUniqueWithoutTeacherProfileInput | SubjectAssignmentUpdateWithWhereUniqueWithoutTeacherProfileInput[]
    updateMany?: SubjectAssignmentUpdateManyWithWhereWithoutTeacherProfileInput | SubjectAssignmentUpdateManyWithWhereWithoutTeacherProfileInput[]
    deleteMany?: SubjectAssignmentScalarWhereInput | SubjectAssignmentScalarWhereInput[]
  }

  export type SubjectAssignmentUncheckedUpdateManyWithoutTeacherProfileNestedInput = {
    create?: XOR<SubjectAssignmentCreateWithoutTeacherProfileInput, SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput> | SubjectAssignmentCreateWithoutTeacherProfileInput[] | SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput[]
    connectOrCreate?: SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput | SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput[]
    upsert?: SubjectAssignmentUpsertWithWhereUniqueWithoutTeacherProfileInput | SubjectAssignmentUpsertWithWhereUniqueWithoutTeacherProfileInput[]
    createMany?: SubjectAssignmentCreateManyTeacherProfileInputEnvelope
    set?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    disconnect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    delete?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    connect?: SubjectAssignmentWhereUniqueInput | SubjectAssignmentWhereUniqueInput[]
    update?: SubjectAssignmentUpdateWithWhereUniqueWithoutTeacherProfileInput | SubjectAssignmentUpdateWithWhereUniqueWithoutTeacherProfileInput[]
    updateMany?: SubjectAssignmentUpdateManyWithWhereWithoutTeacherProfileInput | SubjectAssignmentUpdateManyWithWhereWithoutTeacherProfileInput[]
    deleteMany?: SubjectAssignmentScalarWhereInput | SubjectAssignmentScalarWhereInput[]
  }

  export type UserReferenceCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UserReferenceCreateWithoutStudentProfileInput, UserReferenceUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserReferenceCreateOrConnectWithoutStudentProfileInput
    connect?: UserReferenceWhereUniqueInput
  }

  export type CareerReferenceCreateNestedOneWithoutStudentsInput = {
    create?: XOR<CareerReferenceCreateWithoutStudentsInput, CareerReferenceUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CareerReferenceCreateOrConnectWithoutStudentsInput
    connect?: CareerReferenceWhereUniqueInput
  }

  export type StudentSubjectCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentProfileInput, StudentSubjectUncheckedCreateWithoutStudentProfileInput> | StudentSubjectCreateWithoutStudentProfileInput[] | StudentSubjectUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentProfileInput | StudentSubjectCreateOrConnectWithoutStudentProfileInput[]
    createMany?: StudentSubjectCreateManyStudentProfileInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentProfileInput, StudentSubjectUncheckedCreateWithoutStudentProfileInput> | StudentSubjectCreateWithoutStudentProfileInput[] | StudentSubjectUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentProfileInput | StudentSubjectCreateOrConnectWithoutStudentProfileInput[]
    createMany?: StudentSubjectCreateManyStudentProfileInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type UserReferenceUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UserReferenceCreateWithoutStudentProfileInput, UserReferenceUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserReferenceCreateOrConnectWithoutStudentProfileInput
    upsert?: UserReferenceUpsertWithoutStudentProfileInput
    connect?: UserReferenceWhereUniqueInput
    update?: XOR<XOR<UserReferenceUpdateToOneWithWhereWithoutStudentProfileInput, UserReferenceUpdateWithoutStudentProfileInput>, UserReferenceUncheckedUpdateWithoutStudentProfileInput>
  }

  export type CareerReferenceUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<CareerReferenceCreateWithoutStudentsInput, CareerReferenceUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CareerReferenceCreateOrConnectWithoutStudentsInput
    upsert?: CareerReferenceUpsertWithoutStudentsInput
    connect?: CareerReferenceWhereUniqueInput
    update?: XOR<XOR<CareerReferenceUpdateToOneWithWhereWithoutStudentsInput, CareerReferenceUpdateWithoutStudentsInput>, CareerReferenceUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentSubjectUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentProfileInput, StudentSubjectUncheckedCreateWithoutStudentProfileInput> | StudentSubjectCreateWithoutStudentProfileInput[] | StudentSubjectUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentProfileInput | StudentSubjectCreateOrConnectWithoutStudentProfileInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentProfileInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: StudentSubjectCreateManyStudentProfileInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentProfileInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentProfileInput | StudentSubjectUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentProfileInput, StudentSubjectUncheckedCreateWithoutStudentProfileInput> | StudentSubjectCreateWithoutStudentProfileInput[] | StudentSubjectUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentProfileInput | StudentSubjectCreateOrConnectWithoutStudentProfileInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentProfileInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: StudentSubjectCreateManyStudentProfileInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentProfileInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentProfileInput | StudentSubjectUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherProfileCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<TeacherProfileCreateWithoutSubjectsInput, TeacherProfileUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutSubjectsInput
    connect?: TeacherProfileWhereUniqueInput
  }

  export type SubjectReferenceCreateNestedOneWithoutSubjectAssignmentsInput = {
    create?: XOR<SubjectReferenceCreateWithoutSubjectAssignmentsInput, SubjectReferenceUncheckedCreateWithoutSubjectAssignmentsInput>
    connectOrCreate?: SubjectReferenceCreateOrConnectWithoutSubjectAssignmentsInput
    connect?: SubjectReferenceWhereUniqueInput
  }

  export type TeacherProfileUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutSubjectsInput, TeacherProfileUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutSubjectsInput
    upsert?: TeacherProfileUpsertWithoutSubjectsInput
    connect?: TeacherProfileWhereUniqueInput
    update?: XOR<XOR<TeacherProfileUpdateToOneWithWhereWithoutSubjectsInput, TeacherProfileUpdateWithoutSubjectsInput>, TeacherProfileUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectReferenceUpdateOneRequiredWithoutSubjectAssignmentsNestedInput = {
    create?: XOR<SubjectReferenceCreateWithoutSubjectAssignmentsInput, SubjectReferenceUncheckedCreateWithoutSubjectAssignmentsInput>
    connectOrCreate?: SubjectReferenceCreateOrConnectWithoutSubjectAssignmentsInput
    upsert?: SubjectReferenceUpsertWithoutSubjectAssignmentsInput
    connect?: SubjectReferenceWhereUniqueInput
    update?: XOR<XOR<SubjectReferenceUpdateToOneWithWhereWithoutSubjectAssignmentsInput, SubjectReferenceUpdateWithoutSubjectAssignmentsInput>, SubjectReferenceUncheckedUpdateWithoutSubjectAssignmentsInput>
  }

  export type StudentProfileCreateNestedOneWithoutStudentSubjectsInput = {
    create?: XOR<StudentProfileCreateWithoutStudentSubjectsInput, StudentProfileUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentSubjectsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type SubjectReferenceCreateNestedOneWithoutStudentSubjectsInput = {
    create?: XOR<SubjectReferenceCreateWithoutStudentSubjectsInput, SubjectReferenceUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: SubjectReferenceCreateOrConnectWithoutStudentSubjectsInput
    connect?: SubjectReferenceWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StudentProfileUpdateOneRequiredWithoutStudentSubjectsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutStudentSubjectsInput, StudentProfileUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentSubjectsInput
    upsert?: StudentProfileUpsertWithoutStudentSubjectsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutStudentSubjectsInput, StudentProfileUpdateWithoutStudentSubjectsInput>, StudentProfileUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type SubjectReferenceUpdateOneRequiredWithoutStudentSubjectsNestedInput = {
    create?: XOR<SubjectReferenceCreateWithoutStudentSubjectsInput, SubjectReferenceUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: SubjectReferenceCreateOrConnectWithoutStudentSubjectsInput
    upsert?: SubjectReferenceUpsertWithoutStudentSubjectsInput
    connect?: SubjectReferenceWhereUniqueInput
    update?: XOR<XOR<SubjectReferenceUpdateToOneWithWhereWithoutStudentSubjectsInput, SubjectReferenceUpdateWithoutStudentSubjectsInput>, SubjectReferenceUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeacherProfileCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    speciality: SpecialityReferenceCreateNestedOneWithoutTeachersInput
    career: CareerReferenceCreateNestedOneWithoutTeachersInput
    subjects?: SubjectAssignmentCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileUncheckedCreateWithoutUserInput = {
    id?: number
    specialityId: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectAssignmentUncheckedCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileCreateOrConnectWithoutUserInput = {
    where: TeacherProfileWhereUniqueInput
    create: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
  }

  export type StudentProfileCreateWithoutUserInput = {
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerReferenceCreateNestedOneWithoutStudentsInput
    studentSubjects?: StudentSubjectCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: number
    careerId: number
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
  }

  export type TeacherProfileUpsertWithoutUserInput = {
    update: XOR<TeacherProfileUpdateWithoutUserInput, TeacherProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    where?: TeacherProfileWhereInput
  }

  export type TeacherProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherProfileWhereInput
    data: XOR<TeacherProfileUpdateWithoutUserInput, TeacherProfileUncheckedUpdateWithoutUserInput>
  }

  export type TeacherProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    speciality?: SpecialityReferenceUpdateOneRequiredWithoutTeachersNestedInput
    career?: CareerReferenceUpdateOneRequiredWithoutTeachersNestedInput
    subjects?: SubjectAssignmentUpdateManyWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectAssignmentUncheckedUpdateManyWithoutTeacherProfileNestedInput
  }

  export type StudentProfileUpsertWithoutUserInput = {
    update: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateWithoutUserInput = {
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerReferenceUpdateOneRequiredWithoutStudentsNestedInput
    studentSubjects?: StudentSubjectUpdateManyWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type TeacherProfileCreateWithoutSpecialityInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserReferenceCreateNestedOneWithoutTeacherProfileInput
    career: CareerReferenceCreateNestedOneWithoutTeachersInput
    subjects?: SubjectAssignmentCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileUncheckedCreateWithoutSpecialityInput = {
    id?: number
    userId: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectAssignmentUncheckedCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileCreateOrConnectWithoutSpecialityInput = {
    where: TeacherProfileWhereUniqueInput
    create: XOR<TeacherProfileCreateWithoutSpecialityInput, TeacherProfileUncheckedCreateWithoutSpecialityInput>
  }

  export type TeacherProfileCreateManySpecialityInputEnvelope = {
    data: TeacherProfileCreateManySpecialityInput | TeacherProfileCreateManySpecialityInput[]
    skipDuplicates?: boolean
  }

  export type TeacherProfileUpsertWithWhereUniqueWithoutSpecialityInput = {
    where: TeacherProfileWhereUniqueInput
    update: XOR<TeacherProfileUpdateWithoutSpecialityInput, TeacherProfileUncheckedUpdateWithoutSpecialityInput>
    create: XOR<TeacherProfileCreateWithoutSpecialityInput, TeacherProfileUncheckedCreateWithoutSpecialityInput>
  }

  export type TeacherProfileUpdateWithWhereUniqueWithoutSpecialityInput = {
    where: TeacherProfileWhereUniqueInput
    data: XOR<TeacherProfileUpdateWithoutSpecialityInput, TeacherProfileUncheckedUpdateWithoutSpecialityInput>
  }

  export type TeacherProfileUpdateManyWithWhereWithoutSpecialityInput = {
    where: TeacherProfileScalarWhereInput
    data: XOR<TeacherProfileUpdateManyMutationInput, TeacherProfileUncheckedUpdateManyWithoutSpecialityInput>
  }

  export type TeacherProfileScalarWhereInput = {
    AND?: TeacherProfileScalarWhereInput | TeacherProfileScalarWhereInput[]
    OR?: TeacherProfileScalarWhereInput[]
    NOT?: TeacherProfileScalarWhereInput | TeacherProfileScalarWhereInput[]
    id?: IntFilter<"TeacherProfile"> | number
    userId?: IntFilter<"TeacherProfile"> | number
    specialityId?: IntFilter<"TeacherProfile"> | number
    careerId?: IntFilter<"TeacherProfile"> | number
    createdAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherProfile"> | Date | string
  }

  export type TeacherProfileCreateWithoutCareerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserReferenceCreateNestedOneWithoutTeacherProfileInput
    speciality: SpecialityReferenceCreateNestedOneWithoutTeachersInput
    subjects?: SubjectAssignmentCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileUncheckedCreateWithoutCareerInput = {
    id?: number
    userId: number
    specialityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectAssignmentUncheckedCreateNestedManyWithoutTeacherProfileInput
  }

  export type TeacherProfileCreateOrConnectWithoutCareerInput = {
    where: TeacherProfileWhereUniqueInput
    create: XOR<TeacherProfileCreateWithoutCareerInput, TeacherProfileUncheckedCreateWithoutCareerInput>
  }

  export type TeacherProfileCreateManyCareerInputEnvelope = {
    data: TeacherProfileCreateManyCareerInput | TeacherProfileCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileCreateWithoutCareerInput = {
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserReferenceCreateNestedOneWithoutStudentProfileInput
    studentSubjects?: StudentSubjectCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateWithoutCareerInput = {
    id?: number
    userId: number
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileCreateOrConnectWithoutCareerInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutCareerInput, StudentProfileUncheckedCreateWithoutCareerInput>
  }

  export type StudentProfileCreateManyCareerInputEnvelope = {
    data: StudentProfileCreateManyCareerInput | StudentProfileCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type TeacherProfileUpsertWithWhereUniqueWithoutCareerInput = {
    where: TeacherProfileWhereUniqueInput
    update: XOR<TeacherProfileUpdateWithoutCareerInput, TeacherProfileUncheckedUpdateWithoutCareerInput>
    create: XOR<TeacherProfileCreateWithoutCareerInput, TeacherProfileUncheckedCreateWithoutCareerInput>
  }

  export type TeacherProfileUpdateWithWhereUniqueWithoutCareerInput = {
    where: TeacherProfileWhereUniqueInput
    data: XOR<TeacherProfileUpdateWithoutCareerInput, TeacherProfileUncheckedUpdateWithoutCareerInput>
  }

  export type TeacherProfileUpdateManyWithWhereWithoutCareerInput = {
    where: TeacherProfileScalarWhereInput
    data: XOR<TeacherProfileUpdateManyMutationInput, TeacherProfileUncheckedUpdateManyWithoutCareerInput>
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutCareerInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutCareerInput, StudentProfileUncheckedUpdateWithoutCareerInput>
    create: XOR<StudentProfileCreateWithoutCareerInput, StudentProfileUncheckedCreateWithoutCareerInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutCareerInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutCareerInput, StudentProfileUncheckedUpdateWithoutCareerInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutCareerInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutCareerInput>
  }

  export type StudentProfileScalarWhereInput = {
    AND?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    OR?: StudentProfileScalarWhereInput[]
    NOT?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    id?: IntFilter<"StudentProfile"> | number
    userId?: IntFilter<"StudentProfile"> | number
    careerId?: IntFilter<"StudentProfile"> | number
    currentCicle?: IntFilter<"StudentProfile"> | number
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
  }

  export type SubjectAssignmentCreateWithoutSubjectInput = {
    assignedAt?: Date | string
    teacherProfile: TeacherProfileCreateNestedOneWithoutSubjectsInput
  }

  export type SubjectAssignmentUncheckedCreateWithoutSubjectInput = {
    id?: number
    teacherProfileId: number
    assignedAt?: Date | string
  }

  export type SubjectAssignmentCreateOrConnectWithoutSubjectInput = {
    where: SubjectAssignmentWhereUniqueInput
    create: XOR<SubjectAssignmentCreateWithoutSubjectInput, SubjectAssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type SubjectAssignmentCreateManySubjectInputEnvelope = {
    data: SubjectAssignmentCreateManySubjectInput | SubjectAssignmentCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type StudentSubjectCreateWithoutSubjectInput = {
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
    studentProfile: StudentProfileCreateNestedOneWithoutStudentSubjectsInput
  }

  export type StudentSubjectUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentProfileId: number
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectCreateOrConnectWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectCreateManySubjectInputEnvelope = {
    data: StudentSubjectCreateManySubjectInput | StudentSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type SubjectAssignmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: SubjectAssignmentWhereUniqueInput
    update: XOR<SubjectAssignmentUpdateWithoutSubjectInput, SubjectAssignmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<SubjectAssignmentCreateWithoutSubjectInput, SubjectAssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type SubjectAssignmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: SubjectAssignmentWhereUniqueInput
    data: XOR<SubjectAssignmentUpdateWithoutSubjectInput, SubjectAssignmentUncheckedUpdateWithoutSubjectInput>
  }

  export type SubjectAssignmentUpdateManyWithWhereWithoutSubjectInput = {
    where: SubjectAssignmentScalarWhereInput
    data: XOR<SubjectAssignmentUpdateManyMutationInput, SubjectAssignmentUncheckedUpdateManyWithoutSubjectInput>
  }

  export type SubjectAssignmentScalarWhereInput = {
    AND?: SubjectAssignmentScalarWhereInput | SubjectAssignmentScalarWhereInput[]
    OR?: SubjectAssignmentScalarWhereInput[]
    NOT?: SubjectAssignmentScalarWhereInput | SubjectAssignmentScalarWhereInput[]
    id?: IntFilter<"SubjectAssignment"> | number
    teacherProfileId?: IntFilter<"SubjectAssignment"> | number
    subjectId?: IntFilter<"SubjectAssignment"> | number
    assignedAt?: DateTimeFilter<"SubjectAssignment"> | Date | string
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudentSubjectScalarWhereInput = {
    AND?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    OR?: StudentSubjectScalarWhereInput[]
    NOT?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentProfileId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    grade?: DecimalNullableFilter<"StudentSubject"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"StudentSubject"> | string
    enrolledAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
  }

  export type UserReferenceCreateWithoutTeacherProfileInput = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt?: Date | string
    updatedAt?: Date | string
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
  }

  export type UserReferenceUncheckedCreateWithoutTeacherProfileInput = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt?: Date | string
    updatedAt?: Date | string
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserReferenceCreateOrConnectWithoutTeacherProfileInput = {
    where: UserReferenceWhereUniqueInput
    create: XOR<UserReferenceCreateWithoutTeacherProfileInput, UserReferenceUncheckedCreateWithoutTeacherProfileInput>
  }

  export type SpecialityReferenceCreateWithoutTeachersInput = {
    id: number
    name: string
    syncedAt?: Date | string
  }

  export type SpecialityReferenceUncheckedCreateWithoutTeachersInput = {
    id: number
    name: string
    syncedAt?: Date | string
  }

  export type SpecialityReferenceCreateOrConnectWithoutTeachersInput = {
    where: SpecialityReferenceWhereUniqueInput
    create: XOR<SpecialityReferenceCreateWithoutTeachersInput, SpecialityReferenceUncheckedCreateWithoutTeachersInput>
  }

  export type CareerReferenceCreateWithoutTeachersInput = {
    id: number
    name: string
    totalCicles: number
    syncedAt?: Date | string
    students?: StudentProfileCreateNestedManyWithoutCareerInput
  }

  export type CareerReferenceUncheckedCreateWithoutTeachersInput = {
    id: number
    name: string
    totalCicles: number
    syncedAt?: Date | string
    students?: StudentProfileUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerReferenceCreateOrConnectWithoutTeachersInput = {
    where: CareerReferenceWhereUniqueInput
    create: XOR<CareerReferenceCreateWithoutTeachersInput, CareerReferenceUncheckedCreateWithoutTeachersInput>
  }

  export type SubjectAssignmentCreateWithoutTeacherProfileInput = {
    assignedAt?: Date | string
    subject: SubjectReferenceCreateNestedOneWithoutSubjectAssignmentsInput
  }

  export type SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput = {
    id?: number
    subjectId: number
    assignedAt?: Date | string
  }

  export type SubjectAssignmentCreateOrConnectWithoutTeacherProfileInput = {
    where: SubjectAssignmentWhereUniqueInput
    create: XOR<SubjectAssignmentCreateWithoutTeacherProfileInput, SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput>
  }

  export type SubjectAssignmentCreateManyTeacherProfileInputEnvelope = {
    data: SubjectAssignmentCreateManyTeacherProfileInput | SubjectAssignmentCreateManyTeacherProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserReferenceUpsertWithoutTeacherProfileInput = {
    update: XOR<UserReferenceUpdateWithoutTeacherProfileInput, UserReferenceUncheckedUpdateWithoutTeacherProfileInput>
    create: XOR<UserReferenceCreateWithoutTeacherProfileInput, UserReferenceUncheckedCreateWithoutTeacherProfileInput>
    where?: UserReferenceWhereInput
  }

  export type UserReferenceUpdateToOneWithWhereWithoutTeacherProfileInput = {
    where?: UserReferenceWhereInput
    data: XOR<UserReferenceUpdateWithoutTeacherProfileInput, UserReferenceUncheckedUpdateWithoutTeacherProfileInput>
  }

  export type UserReferenceUpdateWithoutTeacherProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserReferenceUncheckedUpdateWithoutTeacherProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SpecialityReferenceUpsertWithoutTeachersInput = {
    update: XOR<SpecialityReferenceUpdateWithoutTeachersInput, SpecialityReferenceUncheckedUpdateWithoutTeachersInput>
    create: XOR<SpecialityReferenceCreateWithoutTeachersInput, SpecialityReferenceUncheckedCreateWithoutTeachersInput>
    where?: SpecialityReferenceWhereInput
  }

  export type SpecialityReferenceUpdateToOneWithWhereWithoutTeachersInput = {
    where?: SpecialityReferenceWhereInput
    data: XOR<SpecialityReferenceUpdateWithoutTeachersInput, SpecialityReferenceUncheckedUpdateWithoutTeachersInput>
  }

  export type SpecialityReferenceUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialityReferenceUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerReferenceUpsertWithoutTeachersInput = {
    update: XOR<CareerReferenceUpdateWithoutTeachersInput, CareerReferenceUncheckedUpdateWithoutTeachersInput>
    create: XOR<CareerReferenceCreateWithoutTeachersInput, CareerReferenceUncheckedCreateWithoutTeachersInput>
    where?: CareerReferenceWhereInput
  }

  export type CareerReferenceUpdateToOneWithWhereWithoutTeachersInput = {
    where?: CareerReferenceWhereInput
    data: XOR<CareerReferenceUpdateWithoutTeachersInput, CareerReferenceUncheckedUpdateWithoutTeachersInput>
  }

  export type CareerReferenceUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUpdateManyWithoutCareerNestedInput
  }

  export type CareerReferenceUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type SubjectAssignmentUpsertWithWhereUniqueWithoutTeacherProfileInput = {
    where: SubjectAssignmentWhereUniqueInput
    update: XOR<SubjectAssignmentUpdateWithoutTeacherProfileInput, SubjectAssignmentUncheckedUpdateWithoutTeacherProfileInput>
    create: XOR<SubjectAssignmentCreateWithoutTeacherProfileInput, SubjectAssignmentUncheckedCreateWithoutTeacherProfileInput>
  }

  export type SubjectAssignmentUpdateWithWhereUniqueWithoutTeacherProfileInput = {
    where: SubjectAssignmentWhereUniqueInput
    data: XOR<SubjectAssignmentUpdateWithoutTeacherProfileInput, SubjectAssignmentUncheckedUpdateWithoutTeacherProfileInput>
  }

  export type SubjectAssignmentUpdateManyWithWhereWithoutTeacherProfileInput = {
    where: SubjectAssignmentScalarWhereInput
    data: XOR<SubjectAssignmentUpdateManyMutationInput, SubjectAssignmentUncheckedUpdateManyWithoutTeacherProfileInput>
  }

  export type UserReferenceCreateWithoutStudentProfileInput = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt?: Date | string
    updatedAt?: Date | string
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
  }

  export type UserReferenceUncheckedCreateWithoutStudentProfileInput = {
    id: number
    name: string
    email: string
    roleId: number
    status: string
    syncedAt?: Date | string
    updatedAt?: Date | string
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserReferenceCreateOrConnectWithoutStudentProfileInput = {
    where: UserReferenceWhereUniqueInput
    create: XOR<UserReferenceCreateWithoutStudentProfileInput, UserReferenceUncheckedCreateWithoutStudentProfileInput>
  }

  export type CareerReferenceCreateWithoutStudentsInput = {
    id: number
    name: string
    totalCicles: number
    syncedAt?: Date | string
    teachers?: TeacherProfileCreateNestedManyWithoutCareerInput
  }

  export type CareerReferenceUncheckedCreateWithoutStudentsInput = {
    id: number
    name: string
    totalCicles: number
    syncedAt?: Date | string
    teachers?: TeacherProfileUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerReferenceCreateOrConnectWithoutStudentsInput = {
    where: CareerReferenceWhereUniqueInput
    create: XOR<CareerReferenceCreateWithoutStudentsInput, CareerReferenceUncheckedCreateWithoutStudentsInput>
  }

  export type StudentSubjectCreateWithoutStudentProfileInput = {
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectReferenceCreateNestedOneWithoutStudentSubjectsInput
  }

  export type StudentSubjectUncheckedCreateWithoutStudentProfileInput = {
    id?: number
    subjectId: number
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectCreateOrConnectWithoutStudentProfileInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutStudentProfileInput, StudentSubjectUncheckedCreateWithoutStudentProfileInput>
  }

  export type StudentSubjectCreateManyStudentProfileInputEnvelope = {
    data: StudentSubjectCreateManyStudentProfileInput | StudentSubjectCreateManyStudentProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserReferenceUpsertWithoutStudentProfileInput = {
    update: XOR<UserReferenceUpdateWithoutStudentProfileInput, UserReferenceUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UserReferenceCreateWithoutStudentProfileInput, UserReferenceUncheckedCreateWithoutStudentProfileInput>
    where?: UserReferenceWhereInput
  }

  export type UserReferenceUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UserReferenceWhereInput
    data: XOR<UserReferenceUpdateWithoutStudentProfileInput, UserReferenceUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UserReferenceUpdateWithoutStudentProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
  }

  export type UserReferenceUncheckedUpdateWithoutStudentProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CareerReferenceUpsertWithoutStudentsInput = {
    update: XOR<CareerReferenceUpdateWithoutStudentsInput, CareerReferenceUncheckedUpdateWithoutStudentsInput>
    create: XOR<CareerReferenceCreateWithoutStudentsInput, CareerReferenceUncheckedCreateWithoutStudentsInput>
    where?: CareerReferenceWhereInput
  }

  export type CareerReferenceUpdateToOneWithWhereWithoutStudentsInput = {
    where?: CareerReferenceWhereInput
    data: XOR<CareerReferenceUpdateWithoutStudentsInput, CareerReferenceUncheckedUpdateWithoutStudentsInput>
  }

  export type CareerReferenceUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherProfileUpdateManyWithoutCareerNestedInput
  }

  export type CareerReferenceUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCicles?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherProfileUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutStudentProfileInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutStudentProfileInput, StudentSubjectUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<StudentSubjectCreateWithoutStudentProfileInput, StudentSubjectUncheckedCreateWithoutStudentProfileInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutStudentProfileInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutStudentProfileInput, StudentSubjectUncheckedUpdateWithoutStudentProfileInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutStudentProfileInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutStudentProfileInput>
  }

  export type TeacherProfileCreateWithoutSubjectsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserReferenceCreateNestedOneWithoutTeacherProfileInput
    speciality: SpecialityReferenceCreateNestedOneWithoutTeachersInput
    career: CareerReferenceCreateNestedOneWithoutTeachersInput
  }

  export type TeacherProfileUncheckedCreateWithoutSubjectsInput = {
    id?: number
    userId: number
    specialityId: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileCreateOrConnectWithoutSubjectsInput = {
    where: TeacherProfileWhereUniqueInput
    create: XOR<TeacherProfileCreateWithoutSubjectsInput, TeacherProfileUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectReferenceCreateWithoutSubjectAssignmentsInput = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt?: Date | string
    studentSubjects?: StudentSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectReferenceUncheckedCreateWithoutSubjectAssignmentsInput = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt?: Date | string
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectReferenceCreateOrConnectWithoutSubjectAssignmentsInput = {
    where: SubjectReferenceWhereUniqueInput
    create: XOR<SubjectReferenceCreateWithoutSubjectAssignmentsInput, SubjectReferenceUncheckedCreateWithoutSubjectAssignmentsInput>
  }

  export type TeacherProfileUpsertWithoutSubjectsInput = {
    update: XOR<TeacherProfileUpdateWithoutSubjectsInput, TeacherProfileUncheckedUpdateWithoutSubjectsInput>
    create: XOR<TeacherProfileCreateWithoutSubjectsInput, TeacherProfileUncheckedCreateWithoutSubjectsInput>
    where?: TeacherProfileWhereInput
  }

  export type TeacherProfileUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: TeacherProfileWhereInput
    data: XOR<TeacherProfileUpdateWithoutSubjectsInput, TeacherProfileUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherProfileUpdateWithoutSubjectsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserReferenceUpdateOneRequiredWithoutTeacherProfileNestedInput
    speciality?: SpecialityReferenceUpdateOneRequiredWithoutTeachersNestedInput
    career?: CareerReferenceUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherProfileUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectReferenceUpsertWithoutSubjectAssignmentsInput = {
    update: XOR<SubjectReferenceUpdateWithoutSubjectAssignmentsInput, SubjectReferenceUncheckedUpdateWithoutSubjectAssignmentsInput>
    create: XOR<SubjectReferenceCreateWithoutSubjectAssignmentsInput, SubjectReferenceUncheckedCreateWithoutSubjectAssignmentsInput>
    where?: SubjectReferenceWhereInput
  }

  export type SubjectReferenceUpdateToOneWithWhereWithoutSubjectAssignmentsInput = {
    where?: SubjectReferenceWhereInput
    data: XOR<SubjectReferenceUpdateWithoutSubjectAssignmentsInput, SubjectReferenceUncheckedUpdateWithoutSubjectAssignmentsInput>
  }

  export type SubjectReferenceUpdateWithoutSubjectAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectReferenceUncheckedUpdateWithoutSubjectAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type StudentProfileCreateWithoutStudentSubjectsInput = {
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserReferenceCreateNestedOneWithoutStudentProfileInput
    career: CareerReferenceCreateNestedOneWithoutStudentsInput
  }

  export type StudentProfileUncheckedCreateWithoutStudentSubjectsInput = {
    id?: number
    userId: number
    careerId: number
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileCreateOrConnectWithoutStudentSubjectsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutStudentSubjectsInput, StudentProfileUncheckedCreateWithoutStudentSubjectsInput>
  }

  export type SubjectReferenceCreateWithoutStudentSubjectsInput = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt?: Date | string
    subjectAssignments?: SubjectAssignmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectReferenceUncheckedCreateWithoutStudentSubjectsInput = {
    id: number
    name: string
    careerId: number
    cicleNumber: number
    syncedAt?: Date | string
    subjectAssignments?: SubjectAssignmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectReferenceCreateOrConnectWithoutStudentSubjectsInput = {
    where: SubjectReferenceWhereUniqueInput
    create: XOR<SubjectReferenceCreateWithoutStudentSubjectsInput, SubjectReferenceUncheckedCreateWithoutStudentSubjectsInput>
  }

  export type StudentProfileUpsertWithoutStudentSubjectsInput = {
    update: XOR<StudentProfileUpdateWithoutStudentSubjectsInput, StudentProfileUncheckedUpdateWithoutStudentSubjectsInput>
    create: XOR<StudentProfileCreateWithoutStudentSubjectsInput, StudentProfileUncheckedCreateWithoutStudentSubjectsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutStudentSubjectsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutStudentSubjectsInput, StudentProfileUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type StudentProfileUpdateWithoutStudentSubjectsInput = {
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserReferenceUpdateOneRequiredWithoutStudentProfileNestedInput
    career?: CareerReferenceUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutStudentSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectReferenceUpsertWithoutStudentSubjectsInput = {
    update: XOR<SubjectReferenceUpdateWithoutStudentSubjectsInput, SubjectReferenceUncheckedUpdateWithoutStudentSubjectsInput>
    create: XOR<SubjectReferenceCreateWithoutStudentSubjectsInput, SubjectReferenceUncheckedCreateWithoutStudentSubjectsInput>
    where?: SubjectReferenceWhereInput
  }

  export type SubjectReferenceUpdateToOneWithWhereWithoutStudentSubjectsInput = {
    where?: SubjectReferenceWhereInput
    data: XOR<SubjectReferenceUpdateWithoutStudentSubjectsInput, SubjectReferenceUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type SubjectReferenceUpdateWithoutStudentSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectAssignments?: SubjectAssignmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectReferenceUncheckedUpdateWithoutStudentSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    cicleNumber?: IntFieldUpdateOperationsInput | number
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectAssignments?: SubjectAssignmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherProfileCreateManySpecialityInput = {
    id?: number
    userId: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileUpdateWithoutSpecialityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserReferenceUpdateOneRequiredWithoutTeacherProfileNestedInput
    career?: CareerReferenceUpdateOneRequiredWithoutTeachersNestedInput
    subjects?: SubjectAssignmentUpdateManyWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileUncheckedUpdateWithoutSpecialityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectAssignmentUncheckedUpdateManyWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileUncheckedUpdateManyWithoutSpecialityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherProfileCreateManyCareerInput = {
    id?: number
    userId: number
    specialityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileCreateManyCareerInput = {
    id?: number
    userId: number
    currentCicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileUpdateWithoutCareerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserReferenceUpdateOneRequiredWithoutTeacherProfileNestedInput
    speciality?: SpecialityReferenceUpdateOneRequiredWithoutTeachersNestedInput
    subjects?: SubjectAssignmentUpdateManyWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectAssignmentUncheckedUpdateManyWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUpdateWithoutCareerInput = {
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserReferenceUpdateOneRequiredWithoutStudentProfileNestedInput
    studentSubjects?: StudentSubjectUpdateManyWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currentCicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectAssignmentCreateManySubjectInput = {
    id?: number
    teacherProfileId: number
    assignedAt?: Date | string
  }

  export type StudentSubjectCreateManySubjectInput = {
    id?: number
    studentProfileId: number
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectAssignmentUpdateWithoutSubjectInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type SubjectAssignmentUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherProfileId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectAssignmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherProfileId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUpdateWithoutSubjectInput = {
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUpdateOneRequiredWithoutStudentSubjectsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentProfileId?: IntFieldUpdateOperationsInput | number
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentProfileId?: IntFieldUpdateOperationsInput | number
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectAssignmentCreateManyTeacherProfileInput = {
    id?: number
    subjectId: number
    assignedAt?: Date | string
  }

  export type SubjectAssignmentUpdateWithoutTeacherProfileInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectReferenceUpdateOneRequiredWithoutSubjectAssignmentsNestedInput
  }

  export type SubjectAssignmentUncheckedUpdateWithoutTeacherProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectAssignmentUncheckedUpdateManyWithoutTeacherProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManyStudentProfileInput = {
    id?: number
    subjectId: number
    grade?: Decimal | DecimalJsLike | number | string | null
    status?: string
    enrolledAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateWithoutStudentProfileInput = {
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectReferenceUpdateOneRequiredWithoutStudentSubjectsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutStudentProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}