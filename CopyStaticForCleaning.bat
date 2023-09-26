cd ../StaticWithInclude
call node Cleaning

xcopy public\Projects\Cleaning  ..\JsonApi\public\Cleaning\  /s /e /Y

cd ../JsonApi