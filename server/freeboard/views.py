from django.shortcuts import render, get_list_or_404, get_object_or_404
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReviewSerializer, CommentSerializer

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


# Create your views here.

# review 를 생성해 serializer 된 데이터만 vue로 넘긴다.
# 그러면 vue에서 해당 데이터를 review_list에 추가한다.
# request는 request.method, request.user, request.data 등 요청에 대한 여러가지 정보들이 들어있다.

@api_view(['GET', 'POST'])
@authentication_classes([JSONWebTokenAuthentication])       # JWT가 유효한지 체크
@permission_classes([IsAuthenticated])          # 인증이 되어있는 상태인지 체크

def review(request):
    if request.method == 'GET':
        serializer = ReviewSerializer(request.user.reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)      # 유효성 검사를 통과하면 해당 모델에 바로 저장을 해주는 겁니다...
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    

