echo '{"message": "Hey, are you there?" }' \
 | sam local invoke YourFunction \
 --template YourBackend.yaml
