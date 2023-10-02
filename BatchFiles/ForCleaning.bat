cd ../StaticWithInclude
call node Cleaning

robocopy public\Projects\Cleaning  ..\JsonApi\public\Cleaning\  /MIR

cd ../JsonApi