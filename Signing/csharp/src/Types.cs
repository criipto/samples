using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace CriiptoSignatures {
  public class Types {
    
    #region AddSignatoriesInput
    public class AddSignatoriesInput {
      #region members
      [Required]
      [JsonRequired]
      public List<CreateSignatureOrderSignatoryInput> signatories { get; set; }
    
      [Required]
      [JsonRequired]
      public string signatureOrderId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region AddSignatoriesOutput
    public class AddSignatoriesOutput {
      #region members
      [JsonProperty("signatories")]
      public List<Signatory> signatories { get; set; }
    
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region AddSignatoryInput
    public class AddSignatoryInput {
      #region members
      public List<SignatoryDocumentInput> documents { get; set; }
    
      /// <summary>
      /// Selectively enable evidence providers for this signatory.
      /// </summary>
      public List<SignatoryEvidenceProviderInput> evidenceProviders { get; set; }
    
      public List<SignatoryEvidenceValidationInput> evidenceValidation { get; set; }
    
      /// <summary>
      /// Will not be displayed to signatories, can be used as a reference to your own system.
      /// </summary>
      public string reference { get; set; }
    
      [Required]
      [JsonRequired]
      public string signatureOrderId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region AddSignatoryOutput
    public class AddSignatoryOutput {
      #region members
      [JsonProperty("signatory")]
      public Signatory signatory { get; set; }
    
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region AnonymousViewer
    public class AnonymousViewer : Viewer {
      #region members
      [JsonProperty("authenticated")]
      public bool authenticated { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
      #endregion
    }
    #endregion
    
    #region Application
    public class Application : Viewer {
      #region members
      [JsonProperty("apiKeys")]
      public List<ApplicationApiKey> apiKeys { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("name")]
      public string name { get; set; }
    
      [JsonProperty("signatureOrders")]
      public SignatureOrderConnection signatureOrders { get; set; }
    
      /// <summary>
      /// Tenants are only accessable from user viewers
      /// </summary>
      [JsonProperty("tenant")]
      public Tenant tenant { get; set; }
    
      [JsonProperty("verifyApplication")]
      public VerifyApplication verifyApplication { get; set; }
      #endregion
    }
    #endregion
    
    #region ApplicationApiKey
    public class ApplicationApiKey {
      #region members
      [JsonProperty("clientId")]
      public string clientId { get; set; }
    
      [JsonProperty("clientSecret")]
      public string clientSecret { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("mode")]
      public ApplicationApiKeyMode mode { get; set; }
    
      [JsonProperty("note")]
      public string note { get; set; }
      #endregion
    }
    #endregion
    public enum ApplicationApiKeyMode {
      READ_ONLY,
      READ_WRITE
    }
    
    
    #region CancelSignatureOrderInput
    public class CancelSignatureOrderInput {
      #region members
      [Required]
      [JsonRequired]
      public string signatureOrderId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CancelSignatureOrderOutput
    public class CancelSignatureOrderOutput {
      #region members
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region ChangeSignatoryInput
    public class ChangeSignatoryInput {
      #region members
      public List<SignatoryDocumentInput> documents { get; set; }
    
      /// <summary>
      /// Selectively enable evidence providers for this signatory.
      /// </summary>
      public List<SignatoryEvidenceProviderInput> evidenceProviders { get; set; }
    
      public List<SignatoryEvidenceValidationInput> evidenceValidation { get; set; }
    
      /// <summary>
      /// Will not be displayed to signatories, can be used as a reference to your own system.
      /// </summary>
      public string reference { get; set; }
    
      [Required]
      [JsonRequired]
      public string signatoryId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region ChangeSignatoryOutput
    public class ChangeSignatoryOutput {
      #region members
      [JsonProperty("signatory")]
      public Signatory signatory { get; set; }
    
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region CleanupSignatureOrderInput
    public class CleanupSignatureOrderInput {
      #region members
      [Required]
      [JsonRequired]
      public string signatureOrderId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CleanupSignatureOrderOutput
    public class CleanupSignatureOrderOutput {
      #region members
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region CloseSignatureOrderInput
    public class CloseSignatureOrderInput {
      #region members
      /// <summary>
      /// Retains documents on Criipto servers after closing a signature order. You MUST manually call the cleanupSignatureOrder mutation when you are sure you have downloaded the blobs. Maximum value is 7 days.
      /// </summary>
      public int? retainDocumentsForDays { get; set; }
    
      [Required]
      [JsonRequired]
      public string signatureOrderId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CloseSignatureOrderOutput
    public class CloseSignatureOrderOutput {
      #region members
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region CreateApplicationApiKeyInput
    public class CreateApplicationApiKeyInput {
      #region members
      [Required]
      [JsonRequired]
      public string applicationId { get; set; }
    
      public ApplicationApiKeyMode? mode { get; set; }
    
      public string note { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CreateApplicationApiKeyOutput
    public class CreateApplicationApiKeyOutput {
      #region members
      [JsonProperty("apiKey")]
      public ApplicationApiKey apiKey { get; set; }
    
      [JsonProperty("application")]
      public Application application { get; set; }
      #endregion
    }
    #endregion
    
    #region CreateApplicationInput
    public class CreateApplicationInput {
      #region members
      [Required]
      [JsonRequired]
      public string name { get; set; }
    
      [Required]
      [JsonRequired]
      public string tenantId { get; set; }
    
      [Required]
      [JsonRequired]
      public string verifyApplicationDomain { get; set; }
    
      [Required]
      [JsonRequired]
      public VerifyApplicationEnvironment verifyApplicationEnvironment { get; set; }
    
      [Required]
      [JsonRequired]
      public string verifyApplicationRealm { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CreateApplicationOutput
    public class CreateApplicationOutput {
      #region members
      [JsonProperty("apiKey")]
      public ApplicationApiKey apiKey { get; set; }
    
      [JsonProperty("application")]
      public Application application { get; set; }
    
      [JsonProperty("tenant")]
      public Tenant tenant { get; set; }
      #endregion
    }
    #endregion
    
    #region CreateSignatureOrderInput
    public class CreateSignatureOrderInput {
      #region members
      /// <summary>
      /// By default signatories will be prompted to sign with a Criipto Verify based e-ID, this setting disables it.
      /// </summary>
      public bool? disableVerifyEvidenceProvider { get; set; }
    
      [Required]
      [JsonRequired]
      public List<DocumentInput> documents { get; set; }
    
      /// <summary>
      /// Define evidence providers for signature order if not using built-in Criipto Verify for e-IDs
      /// </summary>
      public List<EvidenceProviderInput> evidenceProviders { get; set; }
    
      /// <summary>
      /// When this signature order will auto-close/expire. Default 90 days.
      /// </summary>
      public int? expiresInDays { get; set; }
    
      /// <summary>
      /// Attempt to automatically fix document formatting errors if possible. Default 'true'.
      /// </summary>
      public bool? fixDocumentFormattingErrors { get; set; }
    
      /// <summary>
      /// Max allowed signatories (as it influences pages needed for seals). Default 14.
      /// </summary>
      public int? maxSignatories { get; set; }
    
      public List<CreateSignatureOrderSignatoryInput> signatories { get; set; }
    
      /// <summary>
      /// Configure appearance of signatures inside documents
      /// </summary>
      public SignatureAppearanceInput signatureAppearance { get; set; }
    
      /// <summary>
      /// Timezone to render signature seals in, default UTC.
      /// </summary>
      public string timezone { get; set; }
    
      public string title { get; set; }
    
      /// <summary>
      /// Various settings for how the UI is presented to the signatory.
      /// </summary>
      public CreateSignatureOrderUiInput ui { get; set; }
    
      /// <summary>
      /// Signature order webhook settings
      /// </summary>
      public CreateSignatureOrderWebhookInput webhook { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CreateSignatureOrderOutput
    public class CreateSignatureOrderOutput {
      #region members
      [JsonProperty("application")]
      public Application application { get; set; }
    
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region CreateSignatureOrderSignatoryInput
    public class CreateSignatureOrderSignatoryInput {
      #region members
      public List<SignatoryDocumentInput> documents { get; set; }
    
      /// <summary>
      /// Selectively enable evidence providers for this signatory.
      /// </summary>
      public List<SignatoryEvidenceProviderInput> evidenceProviders { get; set; }
    
      public List<SignatoryEvidenceValidationInput> evidenceValidation { get; set; }
    
      /// <summary>
      /// Will not be displayed to signatories, can be used as a reference to your own system.
      /// </summary>
      public string reference { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CreateSignatureOrderUiInput
    public class CreateSignatureOrderUiInput {
      #region members
      /// <summary>
      /// Removes the UI options to reject a document or signature order.
      /// </summary>
      public bool? disableRejection { get; set; }
    
      /// <summary>
      /// The language of texts rendered to the signatory.
      /// </summary>
      public Language? language { get; set; }
    
      /// <summary>
      /// Define a logo to be shown in the signatory UI.
      /// </summary>
      public SignatureOrderUiLogoInput logo { get; set; }
    
      /// <summary>
      /// The signatory will be redirected to this URL after signing or rejected the signature order.
      /// </summary>
      public string signatoryRedirectUri { get; set; }
    
      /// <summary>
      /// Add stylesheet/css via an absolute HTTPS URL.
      /// </summary>
      public string stylesheet { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CreateSignatureOrderWebhookInput
    public class CreateSignatureOrderWebhookInput {
      #region members
      /// <summary>
      /// Webhook url. POST requests will be executed towards this URL on certain signatory events.
      /// </summary>
      [Required]
      [JsonRequired]
      public string url { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CriiptoVerifyProviderInput
    /// <summary>
    /// Criipto Verify based evidence for signatures.
    /// </summary>
    public class CriiptoVerifyProviderInput {
      #region members
      public List<string> acrValues { get; set; }
    
      public bool? alwaysRedirect { get; set; }
    
      /// <summary>
      /// Set a custom login_hint for the underlying authentication request.
      /// </summary>
      public string loginHint { get; set; }
    
      /// <summary>
      /// Messages displayed when performing authentication (only supported by DKMitID currently).
      /// </summary>
      public string message { get; set; }
    
      /// <summary>
      /// Enforces that signatories sign by unique evidence by comparing the values of previous evidence on the key you define. For Criipto Verify you likely want to use `sub` which is a unique pseudonym value present in all e-ID tokens issued.
      /// </summary>
      public string uniqueEvidenceKey { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region CriiptoVerifySignatureEvidenceProvider
    public class CriiptoVerifySignatureEvidenceProvider {
      #region members
      [JsonProperty("acrValues")]
      public List<string> acrValues { get; set; }
    
      [JsonProperty("alwaysRedirect")]
      public bool alwaysRedirect { get; set; }
    
      [JsonProperty("clientID")]
      public string clientID { get; set; }
    
      [JsonProperty("domain")]
      public string domain { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("loginHint")]
      public string loginHint { get; set; }
    
      [JsonProperty("message")]
      public string message { get; set; }
    
      [JsonProperty("name")]
      public string name { get; set; }
      #endregion
    }
    #endregion
    
    #region DeleteApplicationApiKeyInput
    public class DeleteApplicationApiKeyInput {
      #region members
      [Required]
      [JsonRequired]
      public string apiKeyId { get; set; }
    
      [Required]
      [JsonRequired]
      public string applicationId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region DeleteApplicationApiKeyOutput
    public class DeleteApplicationApiKeyOutput {
      #region members
      [JsonProperty("application")]
      public Application application { get; set; }
      #endregion
    }
    #endregion
    
    #region DeleteSignatoryInput
    public class DeleteSignatoryInput {
      #region members
      [Required]
      [JsonRequired]
      public string signatoryId { get; set; }
    
      [Required]
      [JsonRequired]
      public string signatureOrderId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region DeleteSignatoryOutput
    public class DeleteSignatoryOutput {
      #region members
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    public interface Document {
      [JsonProperty("blob")]
      string blob { get; set; }
    
      [JsonProperty("id")]
      string id { get; set; }
    
      [JsonProperty("reference")]
      string reference { get; set; }
    
      [JsonProperty("signatoryViewerStatus")]
      SignatoryDocumentStatus? signatoryViewerStatus { get; set; }
    
      [JsonProperty("signatures")]
      [JsonConverter(typeof(CompositionTypeListConverter))]
      List<Signature> signatures { get; set; }
    
      [JsonProperty("title")]
      string title { get; set; }
    }
    
    #region DocumentInput
    public class DocumentInput {
      #region members
      [Required]
      [JsonRequired]
      public PadesDocumentInput pdf { get; set; }
    
      /// <summary>
      /// When enabled, will remove any existing signatures from the document before storing.
      /// </summary>
      public bool? removePreviousSignatures { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
      /// <summary>
      /// Document storage mode. Temporary documents will be deleted once completed.
      /// </summary>
    public enum DocumentStorageMode {
      /// <summary>
      /// Temporary documents will be deleted once completed.
      /// </summary>
      Temporary
    }
    
    
    #region DownloadVerificationCriiptoVerifyInput
    public class DownloadVerificationCriiptoVerifyInput {
      #region members
      [Required]
      [JsonRequired]
      public string jwt { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region DownloadVerificationInput
    public class DownloadVerificationInput {
      #region members
      public DownloadVerificationCriiptoVerifyInput criiptoVerify { get; set; }
    
      public DownloadVerificationOidcInput oidc { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region DownloadVerificationOidcInput
    public class DownloadVerificationOidcInput {
      #region members
      [Required]
      [JsonRequired]
      public string jwt { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region DrawableEvidenceProviderInput
    /// <summary>
    /// Hand drawn signature evidence for signatures.
    /// </summary>
    public class DrawableEvidenceProviderInput {
      #region members
      public bool? requireName { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region DrawableSignature
    public class DrawableSignature : Signature {
      #region members
      [JsonProperty("image")]
      public string image { get; set; }
    
      [JsonProperty("name")]
      public string name { get; set; }
    
      [JsonProperty("signatory")]
      public Signatory signatory { get; set; }
      #endregion
    }
    #endregion
    
    #region DrawableSignatureEvidenceProvider
    public class DrawableSignatureEvidenceProvider {
      #region members
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("requireName")]
      public bool requireName { get; set; }
      #endregion
    }
    #endregion
    
    #region EmptySignature
    public class EmptySignature : Signature {
      #region members
      [JsonProperty("signatory")]
      public Signatory signatory { get; set; }
      #endregion
    }
    #endregion
    
    #region EvidenceProviderInput
    /// <summary>
    /// Must define either oidc or noop subsection.
    /// </summary>
    public class EvidenceProviderInput {
      #region members
      /// <summary>
      /// Criipto Verify based evidence for signatures.
      /// </summary>
      public CriiptoVerifyProviderInput criiptoVerify { get; set; }
    
      /// <summary>
      /// Hand drawn signature evidence for signatures.
      /// </summary>
      public DrawableEvidenceProviderInput drawable { get; set; }
    
      /// <summary>
      /// Determined if this evidence provider should be enabled by signatories by default. Default true
      /// </summary>
      public bool? enabledByDefault { get; set; }
    
      /// <summary>
      /// TEST environment only. Does not manipulate the PDF, use for integration or webhook testing.
      /// </summary>
      public NoopEvidenceProviderInput noop { get; set; }
    
      /// <summary>
      /// OIDC/JWT based evidence for signatures.
      /// </summary>
      public OidcEvidenceProviderInput oidc { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region ExtendSignatureOrderInput
    public class ExtendSignatureOrderInput {
      #region members
      /// <summary>
      /// Expiration to add to order, in days, max 30.
      /// </summary>
      [Required]
      [JsonRequired]
      public int additionalExpirationInDays { get; set; }
    
      [Required]
      [JsonRequired]
      public string signatureOrderId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region ExtendSignatureOrderOutput
    public class ExtendSignatureOrderOutput {
      #region members
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region JWTSignature
    public class JWTSignature : Signature {
      #region members
      [JsonProperty("jwks")]
      public string jwks { get; set; }
    
      [JsonProperty("jwt")]
      public string jwt { get; set; }
    
      [JsonProperty("signatory")]
      public Signatory signatory { get; set; }
      #endregion
    }
    #endregion
    public enum Language {
      DA_DK,
      EN_US,
      NB_NO,
      SV_SE
    }
    
    
    #region Mutation
    public class Mutation {
      #region members
      /// <summary>
      /// Add multiple signatures to your signature order.
      /// </summary>
      [JsonProperty("addSignatories")]
      public AddSignatoriesOutput addSignatories { get; set; }
    
      /// <summary>
      /// Add a signatory to your signature order.
      /// </summary>
      [JsonProperty("addSignatory")]
      public AddSignatoryOutput addSignatory { get; set; }
    
      /// <summary>
      /// Cancels the signature order without closing it, use if you no longer need a signature order. Documents are deleted from storage after cancelling.
      /// </summary>
      [JsonProperty("cancelSignatureOrder")]
      public CancelSignatureOrderOutput cancelSignatureOrder { get; set; }
    
      /// <summary>
      /// Change an existing signatory
      /// </summary>
      [JsonProperty("changeSignatory")]
      public ChangeSignatoryOutput changeSignatory { get; set; }
    
      /// <summary>
      /// Cleans up the signature order and removes any saved documents from the servers.
      /// </summary>
      [JsonProperty("cleanupSignatureOrder")]
      public CleanupSignatureOrderOutput cleanupSignatureOrder { get; set; }
    
      /// <summary>
      /// Finalizes the documents in the signature order and returns them to you as blobs. Documents are deleted from storage after closing.
      /// </summary>
      [JsonProperty("closeSignatureOrder")]
      public CloseSignatureOrderOutput closeSignatureOrder { get; set; }
    
      /// <summary>
      /// Creates a signature application for a given tenant.
      /// </summary>
      [JsonProperty("createApplication")]
      public CreateApplicationOutput createApplication { get; set; }
    
      /// <summary>
      /// Creates a new set of api credentials for an existing application.
      /// </summary>
      [JsonProperty("createApplicationApiKey")]
      public CreateApplicationApiKeyOutput createApplicationApiKey { get; set; }
    
      /// <summary>
      /// Creates a signature order to be signed.
      /// </summary>
      [JsonProperty("createSignatureOrder")]
      public CreateSignatureOrderOutput createSignatureOrder { get; set; }
    
      /// <summary>
      /// Deletes a set of API credentials for an application.
      /// </summary>
      [JsonProperty("deleteApplicationApiKey")]
      public DeleteApplicationApiKeyOutput deleteApplicationApiKey { get; set; }
    
      /// <summary>
      /// Delete a signatory from a signature order
      /// </summary>
      [JsonProperty("deleteSignatory")]
      public DeleteSignatoryOutput deleteSignatory { get; set; }
    
      /// <summary>
      /// Extends the expiration of the signature order.
      /// </summary>
      [JsonProperty("extendSignatureOrder")]
      public ExtendSignatureOrderOutput extendSignatureOrder { get; set; }
    
      /// <summary>
      /// Refreshes the client secret for an existing set of API credentials. Warning: The old client secret will stop working immediately.
      /// </summary>
      [JsonProperty("refreshApplicationApiKey")]
      public RefreshApplicationApiKeyOutput refreshApplicationApiKey { get; set; }
    
      /// <summary>
      /// Used by Signatory frontends to reject a signature order in full.
      /// </summary>
      [JsonProperty("rejectSignatureOrder")]
      public RejectSignatureOrderOutput rejectSignatureOrder { get; set; }
    
      /// <summary>
      /// Used by Signatory frontends to sign the documents in a signature order.
      /// </summary>
      [JsonProperty("sign")]
      public SignOutput sign { get; set; }
    
      /// <summary>
      /// Sign with API credentials acting as a specific signatory. The signatory MUST be preapproved in this case.
      /// </summary>
      [JsonProperty("signActingAs")]
      public SignActingAsOutput signActingAs { get; set; }
    
      /// <summary>
      /// Signatory frontend use only.
      /// </summary>
      [JsonProperty("signatoryBeacon")]
      public SignatoryBeaconOutput signatoryBeacon { get; set; }
    
      /// <summary>
      /// Signatory frontend use only.
      /// </summary>
      [JsonProperty("trackSignatory")]
      public TrackSignatoryOutput trackSignatory { get; set; }
    
      /// <summary>
      /// Used by Signatory frontends to mark documents as opened, approved or rejected.
      /// </summary>
      [JsonProperty("updateSignatoryDocumentStatus")]
      public UpdateSignatoryDocumentStatusOutput updateSignatoryDocumentStatus { get; set; }
      #endregion
    }
    #endregion
    
    #region NoopEvidenceProviderInput
    /// <summary>
    /// TEST only. Allows empty signatures for testing.
    /// </summary>
    public class NoopEvidenceProviderInput {
      #region members
      [Required]
      [JsonRequired]
      public string name { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region NoopSignatureEvidenceProvider
    public class NoopSignatureEvidenceProvider {
      #region members
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("name")]
      public string name { get; set; }
      #endregion
    }
    #endregion
    
    #region OidcEvidenceProviderInput
    /// <summary>
    /// OIDC/JWT based evidence for signatures.
    /// </summary>
    public class OidcEvidenceProviderInput {
      #region members
      public List<string> acrValues { get; set; }
    
      public bool? alwaysRedirect { get; set; }
    
      [Required]
      [JsonRequired]
      public string audience { get; set; }
    
      [Required]
      [JsonRequired]
      public string clientID { get; set; }
    
      [Required]
      [JsonRequired]
      public string domain { get; set; }
    
      [Required]
      [JsonRequired]
      public string name { get; set; }
    
      /// <summary>
      /// Enforces that signatories sign by unique evidence by comparing the values of previous evidence on the key you define.
      /// </summary>
      public string uniqueEvidenceKey { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region OidcJWTSignatureEvidenceProvider
    public class OidcJWTSignatureEvidenceProvider {
      #region members
      [JsonProperty("acrValues")]
      public List<string> acrValues { get; set; }
    
      [JsonProperty("alwaysRedirect")]
      public bool alwaysRedirect { get; set; }
    
      [JsonProperty("clientID")]
      public string clientID { get; set; }
    
      [JsonProperty("domain")]
      public string domain { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("name")]
      public string name { get; set; }
      #endregion
    }
    #endregion
    
    #region PadesDocumentInput
    public class PadesDocumentInput {
      #region members
      [Required]
      [JsonRequired]
      public string blob { get; set; }
    
      /// <summary>
      /// Will not be displayed to signatories, can be used as a reference to your own system.
      /// </summary>
      public string reference { get; set; }
    
      [Required]
      [JsonRequired]
      public DocumentStorageMode storageMode { get; set; }
    
      [Required]
      [JsonRequired]
      public string title { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region PageInfo
    /// <summary>
    /// Information about pagination in a connection.
    /// </summary>
    public class PageInfo {
      #region members
      /// <summary>
      /// When paginating forwards, the cursor to continue.
      /// </summary>
      [JsonProperty("endCursor")]
      public string endCursor { get; set; }
    
      /// <summary>
      /// When paginating forwards, are there more items?
      /// </summary>
      [JsonProperty("hasNextPage")]
      public bool hasNextPage { get; set; }
    
      /// <summary>
      /// When paginating backwards, are there more items?
      /// </summary>
      [JsonProperty("hasPreviousPage")]
      public bool hasPreviousPage { get; set; }
    
      /// <summary>
      /// When paginating backwards, the cursor to continue.
      /// </summary>
      [JsonProperty("startCursor")]
      public string startCursor { get; set; }
      #endregion
    }
    #endregion
    
    #region PdfDocument
    public class PdfDocument : Document {
      #region members
      [JsonProperty("blob")]
      public string blob { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("reference")]
      public string reference { get; set; }
    
      [JsonProperty("signatoryViewerStatus")]
      public SignatoryDocumentStatus? signatoryViewerStatus { get; set; }
    
      [JsonProperty("signatures")]
      [JsonConverter(typeof(CompositionTypeListConverter))]
      public List<Signature> signatures { get; set; }
    
      [JsonProperty("title")]
      public string title { get; set; }
      #endregion
    }
    #endregion
    
    #region PdfSealPosition
    public class PdfSealPosition {
      #region members
      [Required]
      [JsonRequired]
      public int page { get; set; }
    
      [Required]
      [JsonRequired]
      public double x { get; set; }
    
      [Required]
      [JsonRequired]
      public double y { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region Query
    public class Query {
      #region members
      [JsonProperty("application")]
      public Application application { get; set; }
    
      [JsonProperty("document")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Document document { get; set; }
    
      /// <summary>
      /// Query a signatory by id. Useful when using webhooks.
      /// </summary>
      [JsonProperty("signatory")]
      public Signatory signatory { get; set; }
    
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
    
      /// <summary>
      /// Tenants are only accessable from user viewers
      /// </summary>
      [JsonProperty("tenant")]
      public Tenant tenant { get; set; }
    
      [JsonProperty("timezones")]
      public List<string> timezones { get; set; }
    
      [JsonProperty("viewer")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Viewer viewer { get; set; }
      #endregion
    }
    #endregion
    
    #region RefreshApplicationApiKeyInput
    public class RefreshApplicationApiKeyInput {
      #region members
      [Required]
      [JsonRequired]
      public string apiKeyId { get; set; }
    
      [Required]
      [JsonRequired]
      public string applicationId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region RefreshApplicationApiKeyOutput
    public class RefreshApplicationApiKeyOutput {
      #region members
      [JsonProperty("apiKey")]
      public ApplicationApiKey apiKey { get; set; }
    
      [JsonProperty("application")]
      public Application application { get; set; }
      #endregion
    }
    #endregion
    
    #region RejectSignatureOrderInput
    public class RejectSignatureOrderInput {
      #region members
      [Required]
      [JsonRequired]
      public bool dummy { get; set; }
    
      public string reason { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region RejectSignatureOrderOutput
    public class RejectSignatureOrderOutput {
      #region members
      [JsonProperty("viewer")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Viewer viewer { get; set; }
      #endregion
    }
    #endregion
    
    #region SignActingAsInput
    public class SignActingAsInput {
      #region members
      [Required]
      [JsonRequired]
      public SignInput evidence { get; set; }
    
      [Required]
      [JsonRequired]
      public string signatoryId { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignActingAsOutput
    public class SignActingAsOutput {
      #region members
      [JsonProperty("signatory")]
      public Signatory signatory { get; set; }
    
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
      #endregion
    }
    #endregion
    
    #region SignCriiptoVerifyInput
    public class SignCriiptoVerifyInput {
      #region members
      [Required]
      [JsonRequired]
      public string jwt { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignDrawableInput
    public class SignDrawableInput {
      #region members
      [Required]
      [JsonRequired]
      public string image { get; set; }
    
      public string name { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignInput
    public class SignInput {
      #region members
      public SignCriiptoVerifyInput criiptoVerify { get; set; }
    
      public SignDrawableInput drawable { get; set; }
    
      /// <summary>
      /// EvidenceProvider id
      /// </summary>
      [Required]
      [JsonRequired]
      public string id { get; set; }
    
      public bool? noop { get; set; }
    
      public SignOidcInput oidc { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignOidcInput
    public class SignOidcInput {
      #region members
      [Required]
      [JsonRequired]
      public string jwt { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignOutput
    public class SignOutput {
      #region members
      [JsonProperty("viewer")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Viewer viewer { get; set; }
      #endregion
    }
    #endregion
    
    #region Signatory
    public class Signatory {
      #region members
      [JsonProperty("documents")]
      public SignatoryDocumentConnection documents { get; set; }
    
      /// <summary>
      /// A download link for signatories to download their signed documents. Signatories must verify their identity before downloading. Can be used when signature order is closed with document retention.
      /// </summary>
      [JsonProperty("downloadHref")]
      public string downloadHref { get; set; }
    
      [JsonProperty("evidenceProviders")]
      public List<object> evidenceProviders { get; set; }
    
      /// <summary>
      /// A link to the signatures frontend, you can send this link to your users to enable them to sign your documents.
      /// </summary>
      [JsonProperty("href")]
      public string href { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("reference")]
      public string reference { get; set; }
    
      /// <summary>
      /// Signature order for the signatory.
      /// </summary>
      [JsonProperty("signatureOrder")]
      public SignatureOrder signatureOrder { get; set; }
    
      /// <summary>
      /// The current status of the signatory.
      /// </summary>
      [JsonProperty("status")]
      public SignatoryStatus status { get; set; }
    
      /// <summary>
      /// The reason for the signatory status (rejection reason when rejected).
      /// </summary>
      [JsonProperty("statusReason")]
      public string statusReason { get; set; }
    
      /// <summary>
      /// The signature frontend authentication token, only required if you need to build a custom url.
      /// </summary>
      [JsonProperty("token")]
      public string token { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatoryBeaconInput
    public class SignatoryBeaconInput {
      #region members
      [Required]
      [JsonRequired]
      public string lastActionAt { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignatoryBeaconOutput
    public class SignatoryBeaconOutput {
      #region members
      [JsonProperty("viewer")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Viewer viewer { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatoryDocumentConnection
    public class SignatoryDocumentConnection {
      #region members
      [JsonProperty("edges")]
      public List<SignatoryDocumentEdge> edges { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatoryDocumentEdge
    public class SignatoryDocumentEdge {
      #region members
      [JsonProperty("node")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Document node { get; set; }
    
      [JsonProperty("status")]
      public SignatoryDocumentStatus? status { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatoryDocumentInput
    public class SignatoryDocumentInput {
      #region members
      [Required]
      [JsonRequired]
      public string id { get; set; }
    
      /// <summary>
      /// Define custom position for PDF seal. Uses PDF coordinate system (bottom-left as 0,0). If defined for one signatory/document, must be defined for all.
      /// </summary>
      public PdfSealPosition pdfSealPosition { get; set; }
    
      public bool? preapproved { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    public enum SignatoryDocumentStatus {
      APPROVED,
      OPENED,
      PREAPPROVED,
      REJECTED
    }
    
    
    #region SignatoryEvidenceProviderInput
    public class SignatoryEvidenceProviderInput {
      #region members
      [Required]
      [JsonRequired]
      public string id { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignatoryEvidenceValidationInput
    public class SignatoryEvidenceValidationInput {
      #region members
      [Required]
      [JsonRequired]
      public string key { get; set; }
    
      [Required]
      [JsonRequired]
      public string value { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    public enum SignatoryFrontendEvent {
      DOWNLOAD_LINK_OPENED,
      SIGN_LINK_OPENED
    }
    
    public enum SignatoryStatus {
      DELETED,
      ERROR,
      OPEN,
      REJECTED,
      SIGNED
    }
    
    
    #region SignatoryViewer
    public class SignatoryViewer : Viewer {
      #region members
      [JsonProperty("authenticated")]
      public bool authenticated { get; set; }
    
      [JsonProperty("documents")]
      public SignatoryDocumentConnection documents { get; set; }
    
      [JsonProperty("download")]
      public SignatoryViewerDownload download { get; set; }
    
      [JsonProperty("evidenceProviders")]
      public List<object> evidenceProviders { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("signatoryId")]
      public string signatoryId { get; set; }
    
      [JsonProperty("signatureOrderStatus")]
      public SignatureOrderStatus signatureOrderStatus { get; set; }
    
      [JsonProperty("signer")]
      public bool signer { get; set; }
    
      [JsonProperty("status")]
      public SignatoryStatus status { get; set; }
    
      [JsonProperty("ui")]
      public SignatureOrderUI ui { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatoryViewerDownload
    public class SignatoryViewerDownload {
      #region members
      [JsonProperty("documents")]
      public SignatoryDocumentConnection documents { get; set; }
    
      [JsonProperty("expired")]
      public bool expired { get; set; }
    
      [JsonProperty("verificationEvidenceProvider")]
      public object verificationEvidenceProvider { get; set; }
    
      [JsonProperty("verificationRequired")]
      public bool verificationRequired { get; set; }
      #endregion
    }
    #endregion
    
    /// <summary>
    /// Represents a signature on a document.
    /// </summary>
    public interface Signature {
      [JsonProperty("signatory")]
      Signatory signatory { get; set; }
    }
    
    #region SignatureAppearanceInput
    public class SignatureAppearanceInput {
      #region members
      /// <summary>
      /// Render evidence claim as identifier in the signature appearance inside the document. You can supply multiple keys and they will be tried in order. If no key is found a GUID will be rendered.
      /// </summary>
      [Required]
      [JsonRequired]
      public List<string> identifierFromEvidence { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region SignatureOrder
    public class SignatureOrder {
      #region members
      [JsonProperty("application")]
      public Application application { get; set; }
    
      [JsonProperty("closedAt")]
      public string closedAt { get; set; }
    
      [JsonProperty("createdAt")]
      public string createdAt { get; set; }
    
      [JsonProperty("documents")]
      [JsonConverter(typeof(CompositionTypeListConverter))]
      public List<Document> documents { get; set; }
    
      [JsonProperty("evidenceProviders")]
      public List<object> evidenceProviders { get; set; }
    
      [JsonProperty("expiresAt")]
      public string expiresAt { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      /// <summary>
      /// List of signatories for the signature order.
      /// </summary>
      [JsonProperty("signatories")]
      public List<Signatory> signatories { get; set; }
    
      [JsonProperty("status")]
      public SignatureOrderStatus status { get; set; }
    
      /// <summary>
      /// Tenants are only accessable from user viewers
      /// </summary>
      [JsonProperty("tenant")]
      public Tenant tenant { get; set; }
    
      [JsonProperty("timezone")]
      public string timezone { get; set; }
    
      [JsonProperty("title")]
      public string title { get; set; }
    
      [JsonProperty("ui")]
      public SignatureOrderUI ui { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatureOrderConnection
    /// <summary>
    /// A connection from an object to a list of objects of type SignatureOrder
    /// </summary>
    public class SignatureOrderConnection {
      #region members
      /// <summary>
      /// Information to aid in pagination.
      /// </summary>
      [JsonProperty("edges")]
      public List<SignatureOrderEdge> edges { get; set; }
    
      /// <summary>
      /// Information to aid in pagination.
      /// </summary>
      [JsonProperty("pageInfo")]
      public PageInfo pageInfo { get; set; }
    
      /// <summary>
      /// A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing \"5\" as the argument to `first`, then fetch the total count so it could display \"5 of 83\", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
      /// </summary>
      [JsonProperty("totalCount")]
      public int? totalCount { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatureOrderEdge
    /// <summary>
    /// An edge in a connection from an object to another object of type SignatureOrder
    /// </summary>
    public class SignatureOrderEdge {
      #region members
      /// <summary>
      /// A cursor for use in pagination
      /// </summary>
      [JsonProperty("cursor")]
      public string cursor { get; set; }
    
      /// <summary>
      /// The item at the end of the edge. Must NOT be an enumerable collection.
      /// </summary>
      [JsonProperty("node")]
      public SignatureOrder node { get; set; }
      #endregion
    }
    #endregion
    public enum SignatureOrderStatus {
      CANCELLED,
      CLOSED,
      EXPIRED,
      OPEN
    }
    
    
    #region SignatureOrderUI
    public class SignatureOrderUI {
      #region members
      [JsonProperty("disableRejection")]
      public bool disableRejection { get; set; }
    
      [JsonProperty("language")]
      public Language language { get; set; }
    
      [JsonProperty("logo")]
      public SignatureOrderUILogo logo { get; set; }
    
      [JsonProperty("signatoryRedirectUri")]
      public string signatoryRedirectUri { get; set; }
    
      [JsonProperty("stylesheet")]
      public string stylesheet { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatureOrderUILogo
    public class SignatureOrderUILogo {
      #region members
      [JsonProperty("href")]
      public string href { get; set; }
    
      [JsonProperty("src")]
      public string src { get; set; }
      #endregion
    }
    #endregion
    
    #region SignatureOrderUiLogoInput
    public class SignatureOrderUiLogoInput {
      #region members
      /// <summary>
      /// Turns your logo into a link with the defined href.
      /// </summary>
      public string href { get; set; }
    
      /// <summary>
      /// The image source for the logo. Must be an absolute HTTPS URL.
      /// </summary>
      [Required]
      [JsonRequired]
      public string src { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region Tenant
    public class Tenant {
      #region members
      [JsonProperty("applications")]
      public List<Application> applications { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
      #endregion
    }
    #endregion
    
    #region TrackSignatoryInput
    public class TrackSignatoryInput {
      #region members
      [Required]
      [JsonRequired]
      public SignatoryFrontendEvent @event { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region TrackSignatoryOutput
    public class TrackSignatoryOutput {
      #region members
      [JsonProperty("viewer")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Viewer viewer { get; set; }
      #endregion
    }
    #endregion
    
    #region UpdateSignatoryDocumentStatusInput
    public class UpdateSignatoryDocumentStatusInput {
      #region members
      [Required]
      [JsonRequired]
      public string documentId { get; set; }
    
      [Required]
      [JsonRequired]
      public SignatoryDocumentStatus status { get; set; }
      #endregion
    
      #region methods
      public dynamic GetInputObject()
      {
        IDictionary<string, object> d = new System.Dynamic.ExpandoObject();
    
        var properties = GetType().GetProperties(System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
        foreach (var propertyInfo in properties)
        {
          var value = propertyInfo.GetValue(this);
          var defaultValue = propertyInfo.PropertyType.IsValueType ? Activator.CreateInstance(propertyInfo.PropertyType) : null;
    
          var requiredProp = propertyInfo.GetCustomAttributes(typeof(JsonRequiredAttribute), false).Length > 0;
    
          if (requiredProp || value != defaultValue)
          {
            d[propertyInfo.Name] = value;
          }
        }
        return d;
      }
      #endregion
    }
    #endregion
    
    #region UpdateSignatoryDocumentStatusOutput
    public class UpdateSignatoryDocumentStatusOutput {
      #region members
      [JsonProperty("documentEdge")]
      public SignatoryDocumentEdge documentEdge { get; set; }
    
      [JsonProperty("viewer")]
      [JsonConverter(typeof(CompositionTypeConverter))]
      public Viewer viewer { get; set; }
      #endregion
    }
    #endregion
    
    #region UserViewer
    public class UserViewer : Viewer {
      #region members
      [JsonProperty("authenticated")]
      public bool authenticated { get; set; }
    
      [JsonProperty("id")]
      public string id { get; set; }
    
      [JsonProperty("tenants")]
      public List<Tenant> tenants { get; set; }
      #endregion
    }
    #endregion
    
    #region VerifyApplication
    public class VerifyApplication {
      #region members
      [JsonProperty("domain")]
      public string domain { get; set; }
    
      [JsonProperty("environment")]
      public VerifyApplicationEnvironment environment { get; set; }
    
      [JsonProperty("realm")]
      public string realm { get; set; }
      #endregion
    }
    #endregion
    public enum VerifyApplicationEnvironment {
      PRODUCTION,
      TEST
    }
    
    
    public interface Viewer {
      [JsonProperty("id")]
      string id { get; set; }
    }
  }
  
}
