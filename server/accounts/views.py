from random import random
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, LikeMovieSerializer
from .models import LikeMovie

from django.shortcuts import render

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

from django_seed import Seed
import random
import faker

# Create your views here.
@api_view(['POST'])
def signup(request):
	#1-1. Client에서 온 데이터를 받아서
    password = request.data.get('password')
    password_confirmation = request.data.get('passwordConfirmation')
		
	#1-2. 패스워드 일치 여부 체크
    if password != password_confirmation:
        return Response({'error': '비밀번호가 일치하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)
		
	#2. UserSerializer를 통해 데이터 직렬화
    serializer = UserSerializer(data=request.data)
    
	#3. validation 작업 진행 -> password도 같이 직렬화 진행
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        #4. 비밀번호 해싱 후 
        user.set_password(request.data.get('password'))
        user.save()
        # password는 직렬화 과정에는 포함 되지만 → 표현(response)할 때는 나타나지 않는다.
        return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['POST', 'GET'])  
@authentication_classes([JSONWebTokenAuthentication])       # JWT가 유효한지 체크
@permission_classes([IsAuthenticated])          # 인증이 되어있는 상태인지 체크
def like_movie(request):
    if request.method == 'POST':
        serializer = LikeMovieSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            if LikeMovie.objects.filter(movie_id=request.data['movie'], user_id=request.user.id).exists():
                like_movie = LikeMovie.objects.filter(movie_id=request.data['movie'], user_id=request.user.id)[0]
                like_movie.rating = request.data['rating']
                like_movie.save()
            else:
                serializer.save(user=request.user)
    else:
        like_movies = LikeMovie.objects.filter(user_id=request.user.id)
        serializer = LikeMovieSerializer(like_movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def cf_algo(request):
    like_movie_list = LikeMovie.objects.all()
    serializer = LikeMovieSerializer(like_movie_list,many=True)
    df = pd.json_normalize(serializer.data)
    movie_user_rating = df.pivot_table('rating', index='movie', columns='user')
    movie_user_rating.fillna(0, inplace=True)
    item_based_collabor = cosine_similarity(movie_user_rating)
    item_based_collabor = pd.DataFrame(data = item_based_collabor, index=movie_user_rating.index, columns=movie_user_rating.index)
    
    # print(df)
    # print(movie_user_rating)
    # print(item_based_collabor)

    # seeder = Seed.seeder()
    # seeder.add_entity(LikeMovie, 100, {
    #     'movie': lambda x: seeder.faker.Movie,
    #     'user': lambda x: random,
    #     'rating': lambda x: random.randint(1, 5)
    # })
    # seeder.execute()


    return Response(item_based_collabor)

    

