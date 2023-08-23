cd ../StaticWithInclude
call node start

xcopy public\Projects\JSONAdminApi  ..\JsonApi\public\JSONAdminApi\  /s /e /Y
xcopy public\Projects\JSONUser  ..\JsonApi\public\JSONUser\  /s /e /Y
xcopy public\Projects\JSONApi  ..\JsonApi\public\JSONApi\  /s /e /Y
xcopy public\Projects\Garments  ..\JsonApi\public\Garments\  /s /e /Y
xcopy public\Projects\JSONUtility  ..\JsonApi\public\JSONUtility\  /s /e /Y
xcopy public\Projects\JSONReports  ..\JsonApi\public\JSONReports\  /s /e /Y
xcopy public\Projects\Cleaning  ..\JsonApi\public\Cleaning\  /s /e /Y
xcopy public\Projects\ClientLogin  ..\JsonApi\public\ClientLogin\  /s /e /Y

cd ../JsonApi