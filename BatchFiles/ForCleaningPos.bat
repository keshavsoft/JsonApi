cd ../StaticWithInclude
call node CleaningPos

robocopy public\Projects\CleaningPos  ..\JsonApi\public\CleaningPos\  /MIR

cd ../JsonApi