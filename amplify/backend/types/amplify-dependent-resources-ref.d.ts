export type AmplifyDependentResourcesAttributes = {
  api: {
    nomsItemsLambda: {
      RootUrl: 'string'
      ApiName: 'string'
      ApiId: 'string'
    }
  }
  function: {
    nomsItemsLambda: {
      Name: 'string'
      Arn: 'string'
      Region: 'string'
      LambdaExecutionRole: 'string'
    }
    nomsfrontendcf5ca4de: {
      Name: 'string'
      Arn: 'string'
      Region: 'string'
      LambdaExecutionRole: 'string'
    }
  }
}
