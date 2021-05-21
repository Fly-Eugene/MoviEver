
from django.urls import path
from . import views

urlpatterns = [
    path('', views.review),
    # path('review/<int:pk>/', views.review_detail),
]
