cd ../StaticWithInclude
call node start

xcopy public\Projects\JSONApi  ..\JsonApi\public\JSONApi\  /s /e /Y
xcopy public\Projects\Cleaning  ..\JsonApi\public\Cleaning\  /s /e /Y

cd ../JsonApi