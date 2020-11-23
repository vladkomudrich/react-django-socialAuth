from rest_framework import serializers
from django.conf import settings
from profiles.models import Profile

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    # username = serializers.SlugField()

    class Meta:
        model = Profile
        fields = ['id', 'owner', 'username', 'full_name', 'date', 'avatar', 'bio', 'snippet', 'slug']

# class UserSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(min_length=8, write_only=False)

#     class Meta:
#         model = User
#         fields = ['id', 'username', 'first_name', 'email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}
        

#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)
#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance