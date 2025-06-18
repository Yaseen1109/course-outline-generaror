from django.contrib import admin
from django.urls import path ,include
from . import views

urlpatterns = [
    path('', views.curr_user, name='curr_user'),
    path('signup/', views.signup_users, name='signup'),
    path('login/', views.login_users, name='login'),
    path('logout/', views.logout_users, name='logout'),
]

