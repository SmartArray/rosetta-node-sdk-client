# Rosetta.Allow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationStatuses** | [**[OperationStatus]**](OperationStatus.md) | All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error. | 
**operationTypes** | **[String]** | All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error. | 
**errors** | [**[Error]**](Error.md) | All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error. | 
**historicalBalanceLookup** | **Boolean** | Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true. | 


