from .models import Review, Comment
from rest_framework import fields, serializers
from accounts.serializers import UserSerializer

class ReviewSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)
    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('user', )

class CommentSerializer(serializers.ModelSerializer):
    
    user = UserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('review', )
