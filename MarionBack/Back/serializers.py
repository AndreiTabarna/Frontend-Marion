# serializers.py

from rest_framework import serializers
from .models import Element

class ElementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Element
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    # Adaugă câmpuri pentru URL-ul complet al imaginii și id-ul elementului
    image_url = serializers.SerializerMethodField()
    element_id = serializers.IntegerField(source='id', read_only=True)

    class Meta:
        model = Element
        fields = ['image_url', 'element_id']

    def get_image_url(self, obj):
        # Concatenează manual URL-ul imaginii cu http://127.0.0.1:8000
        return f"http://127.0.0.1:8000{obj.imagine.url}" if obj.imagine else None

