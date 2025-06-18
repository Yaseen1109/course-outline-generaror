from django.contrib import admin
from django.urls import path ,include
from . import views

urlpatterns = [
    path('', views.outline_generator_view, name='genrator'),
]

