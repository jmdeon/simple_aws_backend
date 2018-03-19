aws s3 mb s3://yourCodeBucket
aws cloudformation package \
  --template-file YourBackend.yaml
  --output-template-file OutputTemplate.yaml
  --s3-bucket yourCodeBucket
