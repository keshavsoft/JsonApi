cd ../StaticWithInclude
call node Cleaning

xcopy public\Projects\JSONApi  ..\JsonApi\public\JSONApi\  /s /e /Y
xcopy public\Projects\Cleaning  ..\JsonApi\public\Cleaning\  /s /e /Y

cd ../JsonApi