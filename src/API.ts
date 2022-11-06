/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDummyUserInput = {
  id?: string | null
  name: string
  description?: string | null
}

export type ModelDummyUserConditionInput = {
  name?: ModelStringInput | null
  description?: ModelStringInput | null
  and?: Array<ModelDummyUserConditionInput | null> | null
  or?: Array<ModelDummyUserConditionInput | null> | null
  not?: ModelDummyUserConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type DummyUser = {
  __typename: 'DummyUser'
  id: string
  name: string
  description?: string | null
  createdAt: string
  updatedAt: string
}

export type UpdateDummyUserInput = {
  id: string
  name?: string | null
  description?: string | null
}

export type DeleteDummyUserInput = {
  id: string
}

export type ModelDummyUserFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  description?: ModelStringInput | null
  and?: Array<ModelDummyUserFilterInput | null> | null
  or?: Array<ModelDummyUserFilterInput | null> | null
  not?: ModelDummyUserFilterInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type ModelDummyUserConnection = {
  __typename: 'ModelDummyUserConnection'
  items: Array<DummyUser | null>
  nextToken?: string | null
}

export type ModelSubscriptionDummyUserFilterInput = {
  id?: ModelSubscriptionIDInput | null
  name?: ModelSubscriptionStringInput | null
  description?: ModelSubscriptionStringInput | null
  and?: Array<ModelSubscriptionDummyUserFilterInput | null> | null
  or?: Array<ModelSubscriptionDummyUserFilterInput | null> | null
}

export type ModelSubscriptionIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type ModelSubscriptionStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  in?: Array<string | null> | null
  notIn?: Array<string | null> | null
}

export type CreateDummyUserMutationVariables = {
  input: CreateDummyUserInput
  condition?: ModelDummyUserConditionInput | null
}

export type CreateDummyUserMutation = {
  createDummyUser?: {
    __typename: 'DummyUser'
    id: string
    name: string
    description?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateDummyUserMutationVariables = {
  input: UpdateDummyUserInput
  condition?: ModelDummyUserConditionInput | null
}

export type UpdateDummyUserMutation = {
  updateDummyUser?: {
    __typename: 'DummyUser'
    id: string
    name: string
    description?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteDummyUserMutationVariables = {
  input: DeleteDummyUserInput
  condition?: ModelDummyUserConditionInput | null
}

export type DeleteDummyUserMutation = {
  deleteDummyUser?: {
    __typename: 'DummyUser'
    id: string
    name: string
    description?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type GetDummyUserQueryVariables = {
  id: string
}

export type GetDummyUserQuery = {
  getDummyUser?: {
    __typename: 'DummyUser'
    id: string
    name: string
    description?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListDummyUsersQueryVariables = {
  filter?: ModelDummyUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListDummyUsersQuery = {
  listDummyUsers?: {
    __typename: 'ModelDummyUserConnection'
    items: Array<{
      __typename: 'DummyUser'
      id: string
      name: string
      description?: string | null
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type OnCreateDummyUserSubscriptionVariables = {
  filter?: ModelSubscriptionDummyUserFilterInput | null
}

export type OnCreateDummyUserSubscription = {
  onCreateDummyUser?: {
    __typename: 'DummyUser'
    id: string
    name: string
    description?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateDummyUserSubscriptionVariables = {
  filter?: ModelSubscriptionDummyUserFilterInput | null
}

export type OnUpdateDummyUserSubscription = {
  onUpdateDummyUser?: {
    __typename: 'DummyUser'
    id: string
    name: string
    description?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteDummyUserSubscriptionVariables = {
  filter?: ModelSubscriptionDummyUserFilterInput | null
}

export type OnDeleteDummyUserSubscription = {
  onDeleteDummyUser?: {
    __typename: 'DummyUser'
    id: string
    name: string
    description?: string | null
    createdAt: string
    updatedAt: string
  } | null
}
