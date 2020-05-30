# KnowYourPlaceApi.User

## Properties

| Name             | Type                                          | Description           | Notes      |
| ---------------- | --------------------------------------------- | --------------------- | ---------- |
| **id**           | **String**                                    | ID of the user entity |
| **name**         | **String**                                    | User name             |
| **lastName**     | **String**                                    | User lastname         |
| **email**        | **String**                                    | User email adress     |
| **passwordHash** | **String**                                    | User password         |
| **role**         | [**AllOfUserRole**](AllOfUserRole.md)         |                       |
| **interest**     | [**AllOfUserInterest**](AllOfUserInterest.md) |                       | [optional] |
| **theme**        | [**AllOfUserTheme**](AllOfUserTheme.md)       |                       |
