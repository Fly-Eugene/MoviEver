from rest_framework_jwt.views import obtain_jwt_token
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup),
    path('like-movie/', views.like_movie),
    path('api-token-auth/', obtain_jwt_token),
    path('cf/', views.cf_algo),
    path('manager/', views.manager),

]



