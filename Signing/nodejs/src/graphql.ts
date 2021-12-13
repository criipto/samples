import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Blob` scalar type represents a byte array. The Blob type appears in a JSON response as a Base64 String. */
  Blob: any;
  /** The `Date` scalar type represents a Date value with Time component. The Date type appears in a JSON response as a String representation compatible with ISO-8601 format. */
  Date: any;
  /** The `DateTime` scalar type represents a Date value with Time component. The Date type appears in a JSON response as a String representation compatible with ISO-8601 format. */
  DateTime: any;
  /** The `URI` scalar type represents a string resource identifier compatible with URI standard. The URI type appears in a JSON response as a String. */
  URI: any;
};

export type AddSignatoriesInput = {
  signatories: Array<CreateSignatureOrderSignatoryInput>;
  signatureOrderId: Scalars['ID'];
};

export type AddSignatoriesOutput = {
  __typename?: 'AddSignatoriesOutput';
  signatories: Array<Signatory>;
  signatureOrder: SignatureOrder;
};

export type AddSignatoryInput = {
  documents?: InputMaybe<Array<SignatoryDocumentInput>>;
  evidenceValidation?: InputMaybe<Array<SignatoryEvidenceValidationInput>>;
  reference?: InputMaybe<Scalars['String']>;
  signatureOrderId: Scalars['ID'];
};

export type AddSignatoryOutput = {
  __typename?: 'AddSignatoryOutput';
  signatory: Signatory;
  signatureOrder: SignatureOrder;
};

export type AnonymousViewer = Viewer & {
  __typename?: 'AnonymousViewer';
  authenticated: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type Application = Viewer & {
  __typename?: 'Application';
  apiKeys: Array<ApplicationApiKey>;
  id: Scalars['ID'];
  name: Scalars['String'];
  signatureOrders: SignatureOrderConnection;
  /** Tenants are only accessable from user viewers */
  tenant?: Maybe<Tenant>;
  verifyApplication: VerifyApplication;
};


export type ApplicationSignatureOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<SignatureOrderStatus>;
};

export type ApplicationApiKey = {
  __typename?: 'ApplicationApiKey';
  clientId: Scalars['String'];
  clientSecret?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type CancelSignatureOrderInput = {
  signatureOrderId: Scalars['ID'];
};

export type CancelSignatureOrderOutput = {
  __typename?: 'CancelSignatureOrderOutput';
  signatureOrder: SignatureOrder;
};

export type CloseSignatureOrderInput = {
  signatureOrderId: Scalars['ID'];
};

export type CloseSignatureOrderOutput = {
  __typename?: 'CloseSignatureOrderOutput';
  signatureOrder: SignatureOrder;
};

export type CreateApplicationApiKeyInput = {
  applicationId: Scalars['ID'];
};

export type CreateApplicationApiKeyOutput = {
  __typename?: 'CreateApplicationApiKeyOutput';
  apiKey: ApplicationApiKey;
  application: Application;
};

export type CreateApplicationInput = {
  name: Scalars['String'];
  tenantId: Scalars['ID'];
  verifyApplicationDomain: Scalars['String'];
  verifyApplicationEnvironment: VerifyApplicationEnvironment;
  verifyApplicationRealm: Scalars['String'];
};

export type CreateApplicationOutput = {
  __typename?: 'CreateApplicationOutput';
  apiKey: ApplicationApiKey;
  application: Application;
  tenant: Tenant;
};

export type CreateSignatureOrderInput = {
  /** By default signatories will be prompted to sign with a Criipto Verify based e-ID, this setting disables it. */
  disableVerifyEvidenceProvider?: InputMaybe<Scalars['Boolean']>;
  documents: Array<DocumentInput>;
  evidenceProviders?: InputMaybe<Array<EvidenceProviderInput>>;
  /** Attempt to automatically fix document formatting errors if possible. Default 'true'. */
  fixDocumentFormattingErrors?: InputMaybe<Scalars['Boolean']>;
  /** Max allowed signatories (as it influences pages needed for seals). Default 14. */
  maxSignatories?: InputMaybe<Scalars['Int']>;
  signatories?: InputMaybe<Array<CreateSignatureOrderSignatoryInput>>;
  title?: InputMaybe<Scalars['String']>;
  /** Various settings for how the UI is presented to the signatory. */
  ui?: InputMaybe<CreateSignatureOrderUiInput>;
  /** Signature order webhook settings */
  webhook?: InputMaybe<CreateSignatureOrderWebhookInput>;
};

export type CreateSignatureOrderOutput = {
  __typename?: 'CreateSignatureOrderOutput';
  application: Application;
  signatureOrder: SignatureOrder;
};

export type CreateSignatureOrderSignatoryInput = {
  documents?: InputMaybe<Array<SignatoryDocumentInput>>;
  evidenceValidation?: InputMaybe<Array<SignatoryEvidenceValidationInput>>;
  /** Will not be displayed to signatories, can be used as a reference to your own system. */
  reference?: InputMaybe<Scalars['String']>;
};

export type CreateSignatureOrderUiInput = {
  /** The signatory will be redirected to this URL after signing or rejected the signature order. */
  signatoryRedirectUri?: InputMaybe<Scalars['String']>;
};

export type CreateSignatureOrderWebhookInput = {
  /** Webhook url. POST requests will be executed towards this URL on certain signatory events. */
  url: Scalars['String'];
};

export type DeleteApplicationApiKeyInput = {
  apiKeyId: Scalars['ID'];
  applicationId: Scalars['ID'];
};

export type DeleteApplicationApiKeyOutput = {
  __typename?: 'DeleteApplicationApiKeyOutput';
  application: Application;
};

export type DeleteSignatoryInput = {
  signatoryId: Scalars['ID'];
  signatureOrderId: Scalars['ID'];
};

export type DeleteSignatoryOutput = {
  __typename?: 'DeleteSignatoryOutput';
  signatureOrder: SignatureOrder;
};

export type Document = {
  blob?: Maybe<Scalars['Blob']>;
  id: Scalars['ID'];
  reference?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type DocumentInput = {
  pdf: PadesDocumentInput;
};

/** Document storage mode. Temporary documents will be deleted once completed. */
export enum DocumentStorageMode {
  /** Temporary documents will be deleted once completed. */
  Temporary = 'Temporary'
}

export type EvidenceProviderInput = {
  oidc: OidcEvidenceProviderInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add multiple signatures to your signature order. */
  addSignatories?: Maybe<AddSignatoriesOutput>;
  /** Add a signatory to your signature order. */
  addSignatory?: Maybe<AddSignatoryOutput>;
  /** Cancels the signature order without closing it, use if you no longer need a signature order. */
  cancelSignatureOrder?: Maybe<CancelSignatureOrderOutput>;
  /** Finalizes the documents in the signature order and returns them to you as blobs. */
  closeSignatureOrder?: Maybe<CloseSignatureOrderOutput>;
  /** Creates a signature application for a given tenant. */
  createApplication?: Maybe<CreateApplicationOutput>;
  /** Creates a new set of api credentials for an existing application. */
  createApplicationApiKey?: Maybe<CreateApplicationApiKeyOutput>;
  /** Creates a signature order to be signed. */
  createSignatureOrder?: Maybe<CreateSignatureOrderOutput>;
  /** Deletes a set of API credentials for an application. */
  deleteApplicationApiKey?: Maybe<DeleteApplicationApiKeyOutput>;
  /** Delete a signatory from a signature order */
  deleteSignatory?: Maybe<DeleteSignatoryOutput>;
  /** Refreshes the client secret for an existing set of API credentials. Warning: The old client secret will stop working immediately. */
  refreshApplicationApiKey?: Maybe<RefreshApplicationApiKeyOutput>;
  /** Used by Signatory frontends to reject a signature order in full. */
  rejectSignatureOrder?: Maybe<RejectSignatureOrderOutput>;
  /** Used by Signatory frontends sign the documents in a signature order with OIDC/JWT evidence. */
  signWithOidcJWT?: Maybe<SignWithOidcJwtOutput>;
  /** Signatory frontend use only. */
  signatoryBeacon?: Maybe<SignatoryBeaconOutput>;
  /** Used by Signatory frontends to mark documents as opened, approved or rejected. */
  updateSignatoryDocumentStatus?: Maybe<UpdateSignatoryDocumentStatusOutput>;
};


export type MutationAddSignatoriesArgs = {
  input: AddSignatoriesInput;
};


export type MutationAddSignatoryArgs = {
  input: AddSignatoryInput;
};


export type MutationCancelSignatureOrderArgs = {
  input: CancelSignatureOrderInput;
};


export type MutationCloseSignatureOrderArgs = {
  input: CloseSignatureOrderInput;
};


export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type MutationCreateApplicationApiKeyArgs = {
  input: CreateApplicationApiKeyInput;
};


export type MutationCreateSignatureOrderArgs = {
  input: CreateSignatureOrderInput;
};


export type MutationDeleteApplicationApiKeyArgs = {
  input: DeleteApplicationApiKeyInput;
};


export type MutationDeleteSignatoryArgs = {
  input: DeleteSignatoryInput;
};


export type MutationRefreshApplicationApiKeyArgs = {
  input: RefreshApplicationApiKeyInput;
};


export type MutationRejectSignatureOrderArgs = {
  input: RejectSignatureOrderInput;
};


export type MutationSignWithOidcJwtArgs = {
  input: SignWithOidcJwtInput;
};


export type MutationSignatoryBeaconArgs = {
  input: SignatoryBeaconInput;
};


export type MutationUpdateSignatoryDocumentStatusArgs = {
  input: UpdateSignatoryDocumentStatusInput;
};

export type OidcEvidenceProviderInput = {
  audience: Scalars['String'];
  clientID: Scalars['String'];
  domain: Scalars['String'];
  name: Scalars['String'];
};

export type OidcJwtSignatureEvidenceProvider = {
  __typename?: 'OidcJWTSignatureEvidenceProvider';
  clientID: Scalars['String'];
  domain: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PadesDocumentInput = {
  blob: Scalars['Blob'];
  reference?: InputMaybe<Scalars['String']>;
  storageMode: DocumentStorageMode;
  title: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PdfDocument = Document & {
  __typename?: 'PdfDocument';
  blob?: Maybe<Scalars['Blob']>;
  id: Scalars['ID'];
  reference?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  application?: Maybe<Application>;
  /** Query a signatory by id. Useful when using webhooks. */
  signatory?: Maybe<Signatory>;
  signatureOrder?: Maybe<SignatureOrder>;
  /** Tenants are only accessable from user viewers */
  tenant?: Maybe<Tenant>;
  viewer: Viewer;
};


export type QueryApplicationArgs = {
  id: Scalars['ID'];
};


export type QuerySignatoryArgs = {
  id: Scalars['ID'];
};


export type QuerySignatureOrderArgs = {
  id: Scalars['ID'];
};


export type QueryTenantArgs = {
  id: Scalars['ID'];
};

export type RefreshApplicationApiKeyInput = {
  apiKeyId: Scalars['ID'];
  applicationId: Scalars['ID'];
};

export type RefreshApplicationApiKeyOutput = {
  __typename?: 'RefreshApplicationApiKeyOutput';
  apiKey: ApplicationApiKey;
  application: Application;
};

export type RejectSignatureOrderInput = {
  dummy: Scalars['Boolean'];
};

export type RejectSignatureOrderOutput = {
  __typename?: 'RejectSignatureOrderOutput';
  viewer: Viewer;
};

export type SignWithOidcJwtInput = {
  id: Scalars['ID'];
  jwt: Scalars['String'];
};

export type SignWithOidcJwtOutput = {
  __typename?: 'SignWithOidcJWTOutput';
  viewer: Viewer;
};

export type Signatory = {
  __typename?: 'Signatory';
  /** A link to the signatures frontend, you can send this link to your users to enable them to sign your documents. */
  href: Scalars['String'];
  id: Scalars['ID'];
  reference?: Maybe<Scalars['String']>;
  /** Signature order for the signatory. */
  signatureOrder: SignatureOrder;
  /** The current status of the signatory. */
  status: SignatoryStatus;
  /** The signature frontend authentication token, only required if you need to build a custom url. */
  token: Scalars['String'];
};

export type SignatoryBeaconInput = {
  lastActionAt: Scalars['DateTime'];
};

export type SignatoryBeaconOutput = {
  __typename?: 'SignatoryBeaconOutput';
  viewer: Viewer;
};

export type SignatoryDocumentConnection = {
  __typename?: 'SignatoryDocumentConnection';
  edges: Array<SignatoryDocumentEdge>;
};

export type SignatoryDocumentEdge = {
  __typename?: 'SignatoryDocumentEdge';
  node: Document;
  status?: Maybe<SignatoryDocumentStatus>;
};

export type SignatoryDocumentInput = {
  id: Scalars['ID'];
  preapproved?: InputMaybe<Scalars['Boolean']>;
};

export enum SignatoryDocumentStatus {
  Approved = 'APPROVED',
  Opened = 'OPENED',
  Preapproved = 'PREAPPROVED',
  Rejected = 'REJECTED'
}

export type SignatoryEvidenceValidationInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export enum SignatoryStatus {
  Error = 'ERROR',
  Open = 'OPEN',
  Rejected = 'REJECTED',
  Signed = 'SIGNED'
}

export type SignatoryViewer = Viewer & {
  __typename?: 'SignatoryViewer';
  authenticated: Scalars['Boolean'];
  documents: SignatoryDocumentConnection;
  evidenceProviders: Array<SignatureEvidenceProvider>;
  id: Scalars['ID'];
  signatoryId: Scalars['ID'];
  signer: Scalars['Boolean'];
  status: SignatoryStatus;
  ui: SignatureOrderUi;
};

export type SignatureEvidenceProvider = OidcJwtSignatureEvidenceProvider;

export type SignatureOrder = {
  __typename?: 'SignatureOrder';
  application?: Maybe<Application>;
  documents: Array<Document>;
  id: Scalars['ID'];
  /** List of signatories for the signature order. */
  signatories: Array<Signatory>;
  status: SignatureOrderStatus;
  /** Tenants are only accessable from user viewers */
  tenant?: Maybe<Tenant>;
  title?: Maybe<Scalars['String']>;
  ui: SignatureOrderUi;
};

/** A connection from an object to a list of objects of type SignatureOrder */
export type SignatureOrderConnection = {
  __typename?: 'SignatureOrderConnection';
  /** Information to aid in pagination. */
  edges: Array<SignatureOrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing \"5\" as the argument to `first`, then fetch the total count so it could display \"5 of 83\", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type SignatureOrder */
export type SignatureOrderEdge = {
  __typename?: 'SignatureOrderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge. Must NOT be an enumerable collection. */
  node: SignatureOrder;
};

export enum SignatureOrderStatus {
  Cancelled = 'CANCELLED',
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type SignatureOrderUi = {
  __typename?: 'SignatureOrderUI';
  signatoryRedirectUri?: Maybe<Scalars['String']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  applications: Array<Application>;
  id: Scalars['ID'];
};

export type UpdateSignatoryDocumentStatusInput = {
  documentId: Scalars['ID'];
  status: SignatoryDocumentStatus;
};

export type UpdateSignatoryDocumentStatusOutput = {
  __typename?: 'UpdateSignatoryDocumentStatusOutput';
  documentEdge: SignatoryDocumentEdge;
  viewer: Viewer;
};

export type UserViewer = Viewer & {
  __typename?: 'UserViewer';
  authenticated: Scalars['Boolean'];
  id: Scalars['ID'];
  tenants: Array<Tenant>;
};

export type VerifyApplication = {
  __typename?: 'VerifyApplication';
  domain: Scalars['String'];
  environment: VerifyApplicationEnvironment;
  realm: Scalars['String'];
};

export enum VerifyApplicationEnvironment {
  Production = 'PRODUCTION',
  Test = 'TEST'
}

export type Viewer = {
  id: Scalars['ID'];
};

export type AddSignatoriesMutationVariables = Exact<{
  input: AddSignatoriesInput;
}>;


export type AddSignatoriesMutation = { __typename?: 'Mutation', addSignatories?: { __typename?: 'AddSignatoriesOutput', signatureOrder: { __typename?: 'SignatureOrder', signatories: Array<{ __typename?: 'Signatory', id: string, href: string }> }, signatories: Array<{ __typename?: 'Signatory', id: string, href: string }> } | null | undefined };

export type AddSignatoryMutationVariables = Exact<{
  input: AddSignatoryInput;
}>;


export type AddSignatoryMutation = { __typename?: 'Mutation', addSignatory?: { __typename?: 'AddSignatoryOutput', signatureOrder: { __typename?: 'SignatureOrder', signatories: Array<{ __typename?: 'Signatory', id: string, href: string }> }, signatory: { __typename?: 'Signatory', id: string, href: string } } | null | undefined };

export type CloseSignatureOrderMutationVariables = Exact<{
  input: CloseSignatureOrderInput;
}>;


export type CloseSignatureOrderMutation = { __typename?: 'Mutation', closeSignatureOrder?: { __typename?: 'CloseSignatureOrderOutput', signatureOrder: { __typename?: 'SignatureOrder', id: string, documents: Array<{ __typename?: 'PdfDocument', id: string, blob?: any | null | undefined }> } } | null | undefined };

export type CreateSignatureOrderMutationVariables = Exact<{
  input: CreateSignatureOrderInput;
}>;


export type CreateSignatureOrderMutation = { __typename?: 'Mutation', createSignatureOrder?: { __typename?: 'CreateSignatureOrderOutput', signatureOrder: { __typename?: 'SignatureOrder', id: string, documents: Array<{ __typename?: 'PdfDocument', id: string }>, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus }> } } | null | undefined };

export type SignatureOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SignatureOrderQuery = { __typename?: 'Query', signatureOrder?: { __typename?: 'SignatureOrder', status: SignatureOrderStatus, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus }> } | null | undefined };


export const AddSignatoriesDocument = gql`
    mutation addSignatories($input: AddSignatoriesInput!) {
  addSignatories(input: $input) {
    signatureOrder {
      signatories {
        id
        href
      }
    }
    signatories {
      id
      href
    }
  }
}
    `;
export const AddSignatoryDocument = gql`
    mutation addSignatory($input: AddSignatoryInput!) {
  addSignatory(input: $input) {
    signatureOrder {
      signatories {
        id
        href
      }
    }
    signatory {
      id
      href
    }
  }
}
    `;
export const CloseSignatureOrderDocument = gql`
    mutation closeSignatureOrder($input: CloseSignatureOrderInput!) {
  closeSignatureOrder(input: $input) {
    signatureOrder {
      id
      documents {
        id
        blob
      }
    }
  }
}
    `;
export const CreateSignatureOrderDocument = gql`
    mutation createSignatureOrder($input: CreateSignatureOrderInput!) {
  createSignatureOrder(input: $input) {
    signatureOrder {
      id
      documents {
        id
      }
      signatories {
        id
        status
      }
    }
  }
}
    `;
export const SignatureOrderDocument = gql`
    query signatureOrder($id: ID!) {
  signatureOrder(id: $id) {
    status
    signatories {
      id
      status
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addSignatories(variables: AddSignatoriesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddSignatoriesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddSignatoriesMutation>(AddSignatoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addSignatories');
    },
    addSignatory(variables: AddSignatoryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddSignatoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddSignatoryMutation>(AddSignatoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addSignatory');
    },
    closeSignatureOrder(variables: CloseSignatureOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CloseSignatureOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CloseSignatureOrderMutation>(CloseSignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'closeSignatureOrder');
    },
    createSignatureOrder(variables: CreateSignatureOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSignatureOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateSignatureOrderMutation>(CreateSignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createSignatureOrder');
    },
    signatureOrder(variables: SignatureOrderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignatureOrderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignatureOrderQuery>(SignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signatureOrder');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;