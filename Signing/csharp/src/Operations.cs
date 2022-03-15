using System;
using Newtonsoft.Json;
using GraphQL;
using GraphQL.Client.Abstractions;

namespace CriiptoSignatures {

    public class CreateSignatureOrderGQL {
      /// <summary>
      /// CreateSignatureOrderGQL.Request 
      /// <para>Required variables:<br/> { input=(CreateSignatureOrderInput) }</para>
      /// <para>Optional variables:<br/> {  }</para>
      /// </summary>
      public static GraphQLRequest Request(object variables = null) {
        return new GraphQLRequest {
          Query = CreateSignatureOrderDocument,
          OperationName = "createSignatureOrder",
          Variables = variables
        };
      }

      /// <remarks>This method is obsolete. Use Request instead.</remarks>
      public static GraphQLRequest getCreateSignatureOrderGQL() {
        return Request();
      }
      
      public static string CreateSignatureOrderDocument = @"
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
        ";
      
    }
    

    public class AddSignatoryGQL {
      /// <summary>
      /// AddSignatoryGQL.Request 
      /// <para>Required variables:<br/> { input=(AddSignatoryInput) }</para>
      /// <para>Optional variables:<br/> {  }</para>
      /// </summary>
      public static GraphQLRequest Request(object variables = null) {
        return new GraphQLRequest {
          Query = AddSignatoryDocument,
          OperationName = "addSignatory",
          Variables = variables
        };
      }

      /// <remarks>This method is obsolete. Use Request instead.</remarks>
      public static GraphQLRequest getAddSignatoryGQL() {
        return Request();
      }
      
      public static string AddSignatoryDocument = @"
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
        ";
      
    }
    
}