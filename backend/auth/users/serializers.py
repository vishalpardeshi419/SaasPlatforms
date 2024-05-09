from rest_framework import serializers
from .models import User

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': { 'write_only': True}
        }

    def create(self, validate_data):
        password = validate_data.pop('password', None)  # Retrieve the password from the data
        instance = self.Meta.model(**validate_data)     # Create an instance of the model with the remaining data
        if password is not None:
            instance.set_password(password)             # Hash the password using Django's built-in method
        instance.save()                                 # Save the instance to the database
        return instance

