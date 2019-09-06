# Pogo Architecture

___

## Models

**Party**

Field  | Type
------ | --------
Name  | String
Color  | String
Members  | Integer
Formed  | Date
Current Leader  | Foreign ID
Previous Leaders  | [Person]
Active Policies  | [Policy]
Description | String
Bills passed | [Bill]
Bills rejected | [Bill]

**Personnel?**

MPs / Lords / Activists etc

Will need a BASE type from which others extend

_BASE_

Field  | Type
------ | --------
Name  | String
DOB  | Date
Hometown  | String
Gender  | String
Roles  | [Role]

_MP extends BASE_
Field  | Type
------ | --------
Party  | Foreign ID
Party member since  | Date
MP since  | Date
Contituency  | String
Previos Parties  | [Party]
Bills authored  | String
Elections won  | [Election]
Elections lost  | [Election]

_Lord extends BASE_
Field  | Type
------ | --------
Title  | String
Party  | Foreign ID
Party member since  | Date
Contituency  | String
Bills authored  | String
Previos Parties  | [Party]
Elections won  | [Election]
Elections lost  | [Election]

_Activist extends BASE_
Field  | Type
------ | --------
Groups  | [ORGANISATION]
Protests  | [PROTEST]
Occupation  | String

...and so on

**Policy**

Field  | Type
------ | --------
Title  | String
Summary  | String
Date submitted  | Date
Date approved  | Date
Authors  | [Person]

**Election**

Field  | Type
------ | --------
Year  | Integer
Winner  | Party
Results  | [Party]
Turnout  | Integer

___
