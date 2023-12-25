from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Element
from .serializers import ElementSerializer
from .serializers import ImageSerializer

class ElementListCreateView(generics.ListCreateAPIView):
    queryset = Element.objects.all()
    serializer_class = ElementSerializer

class ImageListView(APIView):
    def get(self, request):
        elements = Element.objects.all()
        serializer = ImageSerializer(elements, many=True)
        return Response(serializer.data)
