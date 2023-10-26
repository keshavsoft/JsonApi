cd ../StaticWithInclude
call node CleaningForBranches

robocopy public\Projects\Cleaning  ..\JsonApi\public\Cleaning\  /MIR

cd ../JsonApi