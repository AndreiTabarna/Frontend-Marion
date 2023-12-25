# urls.py

from django.urls import path
from .views import ElementListCreateView
from .views import ImageListView

urlpatterns = [
    path('elemente/', ElementListCreateView.as_view(), name='element-list-create'),
    path('images/', ImageListView.as_view(), name='image-list'),
]

