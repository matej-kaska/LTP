from django.core.cache import cache
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import generics

from api.models import Test

class RedisTestViewSet(APIView):

    def get(self, request):
        cache.set('redis_test', 'Redis is connected!', timeout=30)
        return JsonResponse({"message": cache.get('redis_test')})
    
class SQLTestViewSet(APIView):

    def get(self, request):
        unit, created = Test.objects.get_or_create(name="SQL is connected!")
        if (unit.name == "SQL is connected!"):
            return JsonResponse({"message": "SQL is connected!"})
        else:
            return JsonResponse({"message": "Error"})